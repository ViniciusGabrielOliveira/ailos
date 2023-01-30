import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { api } from '../constants/api.constant';
import { CpfStatusResponse } from '../models/cpf-status-response.model';

@Injectable()
export class CooperatedService
{
    constructor(
        private readonly http: HttpClient
    )
    { }

    public loadCooperated(cpf: number): Observable<Array<CpfStatusResponse>>
    {
        return this.http.get<Array<CpfStatusResponse>>(api.cooperated.getCooperated(cpf)).pipe(delay(1000));
    }
}
