import { Action, ActionReducerMap } from '@ngrx/store';
import { cooperatedReducer } from './cooperated/cooperated.reducer';
import { CooperatedStore } from './cooperated/cooperated.store';

/**
 * App root store.
 */
export interface AppState
{
    cooperated: CooperatedStore;
}

/**
 * App root store containing all reducers.
 */
export const reducers: ActionReducerMap<object, Action> = {
    cooperated: cooperatedReducer
};
