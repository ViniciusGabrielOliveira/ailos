import { createAction, props } from '@ngrx/store';
import { CardCpf } from 'src/app/shared/card-cpf/card-cpf.component';
import { ErrorPayload } from '../../models/error-payload.model';
import { storeTag } from './cooperated.store';

export const loadCpfStatus = createAction(
    `${storeTag} Load Cpf Status`,
    props<{
        cpf: number;
    }>()
);

export const loadCpfStatusSuccess = createAction(
    `${storeTag} Load Cpf Status Success`,
    props<{
        data: Array<CardCpf>;
    }>()
);

export const loadCpfStatusError = createAction(
    `${storeTag} Load Cpf Status Error`,
    props<{
        error: ErrorPayload;
    }>()
);
