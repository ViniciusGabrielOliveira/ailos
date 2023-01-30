import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { loadCpfStatus, loadCpfStatusError, loadCpfStatusSuccess } from './cooperated.actions';
import { CooperatedStore } from './cooperated.store';

export const initialState: Partial<CooperatedStore> = {
    loading: false
};

const reducer: ActionReducer<Partial<CooperatedStore>, Action> = createReducer(
    initialState,
    on(loadCpfStatus, (state) => ({
        ...state,
        loading: true
    })),
    on(loadCpfStatusSuccess, (state, action) => ({
        ...state,
        loading: false,
        cardsCpf: action.data
    })),
    on(loadCpfStatusError, (state, action) => ({
        ...state,
        loading: false,
        error: action.error
    }))
);

export function cooperatedReducer(
    state: Partial<CooperatedStore> = initialState,
    action: Action
): Partial<CooperatedStore>
{
    return reducer(state, action);
}
