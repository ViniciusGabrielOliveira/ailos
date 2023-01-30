import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CooperatedStore } from './cooperated.store';

const getCooperatedState = createFeatureSelector<CooperatedStore>('cooperated');

export const getCpfStatusLoading = createSelector(
    getCooperatedState,
    (store: CooperatedStore) => store.loading
);

export const getCardCpf = createSelector(
    getCooperatedState,
    (store: CooperatedStore) => store.cardsCpf
);

export const getCpfStatusError = createSelector(
    getCooperatedState,
    (store: CooperatedStore) => store.error
);
