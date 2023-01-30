import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActionCreator, Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { Observable, OperatorFunction } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SnackBarService } from 'src/app/shared/snack-bar';
import { ActionErrorPayload } from '../models/error-payload.model';

declare type ActionType = ActionCreator<
    string,
    (props: ActionErrorPayload) => ActionErrorPayload & TypedAction<string>
>;

@Injectable()
export class ErrorHandlingService
{
    constructor(
        private readonly snackBarService: SnackBarService,
        private readonly store: Store
    )
    { }

    /**
     * Show a snackbar and dispatch the error action to the store.
     *
     * @param response Error from backend
     * @param action Action to be dispatched
     */
    public handleServerError<T>(
        response: HttpErrorResponse,
        action?: ActionType,
        caught$?: Observable<T>,
        treatError = false
    ): Observable<T>
    {
        console.error('Server error:', response);

        this.snackBarError(response, treatError);

        if (action)
        {
            this.store.dispatch(action({
                error: response.error ?? response
            }));
        }

        return caught$!;
    }

    /**
     * Handy function to create the catchError operator function on a pipe.
     *
     * @param action Action to trigger the error
     * @returns Handy operator function
     */
    public catchError(action?: ActionType): OperatorFunction<any, any>
    {
        return catchError((error: HttpErrorResponse, caught$) => this.handleServerError(
            error,
            action,
            caught$
        ));
    }


    public snackBarError(response: HttpErrorResponse, treatError: boolean): void
    {
        if (!treatError)
        {
            this.snackBarService.open(response.error?.message ?? response.message);
        }
    }
}
