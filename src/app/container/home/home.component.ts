import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { CooperatedApi } from 'src/app/core/api/cooperated.api';
import { CardCpf } from 'src/app/shared/card-cpf/card-cpf.component';
import { Stepper } from 'src/app/shared/stepper/stepper.component';
import { invalidCpfUtil } from 'src/app/utils/form-validators.util';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent
{
    public loadingCpfStatus$: Observable<boolean> = this.cooperatedApi.cpfStatusLoading$;
    public cardsCpf$: Observable<Array<CardCpf>> = this.cooperatedApi.cardsCpf$;

    public formCpf = new FormGroup({
        cpf: new FormControl('', [
            Validators.required,
            invalidCpfUtil()
        ])
    });

    public stepper: Array<Stepper> = [
        {
            label: this.translateService.instant('body.stepper.1'),
            status: 'active'
        },
        {
            label: this.translateService.instant('body.stepper.2'),
            status: 'none'
        },
        {
            label: this.translateService.instant('body.stepper.3'),
            status: 'none'
        },
        {
            label: this.translateService.instant('body.stepper.4'),
            status: 'none'
        }
    ]

    constructor(
        private readonly translateService: TranslateService,
        private readonly cooperatedApi: CooperatedApi
    ){ }

    public getCpfStatus(): void
    {
        if(this.formCpf.valid)
        {
            const cpf = parseInt((this.formCpf.value.cpf)?.match(/\d+/g)?.join('') || '')
            this.cooperatedApi.loadCpfStatus(cpf)
        }
    }
}
