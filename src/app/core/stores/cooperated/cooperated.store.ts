import { CardCpf } from 'src/app/shared/card-cpf/card-cpf.component';
import { ErrorPayload } from '../../models/error-payload.model';

export const storeTag = '[Cooperated Store]';

export interface CooperatedStore
{
    loading: boolean;
    cardsCpf: Array<CardCpf>;
    error: ErrorPayload;
}
