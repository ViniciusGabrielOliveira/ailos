import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { CardCpf } from 'src/app/shared/card-cpf/card-cpf.component';
import { ErrorPayload } from '../models/error-payload.model';
import { loadCpfStatus } from '../stores/cooperated/cooperated.actions';
import { getCardCpf, getCpfStatusError, getCpfStatusLoading } from '../stores/cooperated/cooperated.selectors';
import { CooperatedStore } from '../stores/cooperated/cooperated.store';

@Injectable()
export class CooperatedApi
{
    public cpfStatusLoading$: Observable<boolean> = this.store.select(getCpfStatusLoading);
    public cpfStatusError$: Observable<ErrorPayload> = this.store.select(getCpfStatusError);
    public cardsCpf$: Observable<Array<CardCpf>> = this.store.select(getCardCpf);

    constructor(
        private store: Store<CooperatedStore>
    )
    { }

    public loadCpfStatus(cpf: number): void
    {
        this.store.dispatch(loadCpfStatus({ cpf }));
    }
}
