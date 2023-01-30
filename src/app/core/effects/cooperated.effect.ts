
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { map, switchMap } from 'rxjs/operators';
import { CardCpf } from 'src/app/shared/card-cpf/card-cpf.component';
import { CpfStatusResponse } from '../models/cpf-status-response.model';
import { CooperatedService } from '../services/cooperated.service';
import { ErrorHandlingService } from '../services/error-handling.service';
import { loadCpfStatus, loadCpfStatusError, loadCpfStatusSuccess } from '../stores/cooperated/cooperated.actions';

@Injectable()
export class CooperatedEffect
{
    loadCpfStatus$ = createEffect(() => this.actions$.pipe(
        ofType(loadCpfStatus),
        switchMap(({ cpf }) => this.cooperatedService.loadCooperated(cpf)),
        map((response: Array<CpfStatusResponse>) => {

            let data: Array<CardCpf> = [];

            const cpfStatus: CpfStatusResponse = response[0];

            if(cpfStatus?.cpf)
            {
                data = [
                    {
                        title: this.translateService.instant('body.card.title'),
                        description: this.translateService.instant('body.card.description'),
                        lines: [
                            {
                                label: this.translateService.instant('body.card.name'),
                                icon: 'profile_icon.png',
                                value: cpfStatus.name
                            },
                            {
                                label: this.translateService.instant('body.card.status-label'),
                                icon: `icon_${cpfStatus.status}.svg`,
                                value: cpfStatus.status.charAt(0).toUpperCase() + cpfStatus.status.slice(1)
                            }
                        ]
                    },
                    ...(cpfStatus.accounts?.map(item => ({

                        title: this.translateService.instant(`body.card.account.title-${item.accountType}`),
                        description: this.translateService.instant('body.card.description'),
                        lines: [
                            {
                                label: this.translateService.instant('body.card.account.label'),
                                icon: 'icon_card.svg',
                                value: item.number
                            }
                        ],
                        labelButton: this.translateService.instant('body.card.account.button')
                    })) || [])
                ]
            }

            return loadCpfStatusSuccess({ data })
        }),
        this.errorHandlingService.catchError(loadCpfStatusError)
    ));

    constructor(
        private readonly actions$: Actions,
        private readonly errorHandlingService: ErrorHandlingService,
        private readonly cooperatedService: CooperatedService,
        private readonly translateService: TranslateService
    )
    { }
}
