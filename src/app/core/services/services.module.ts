import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CooperatedService } from './cooperated.service';
import { ErrorHandlingService } from './error-handling.service';
import { ValidationUtilService } from './validation-util.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        CooperatedService,
        ErrorHandlingService,
        ValidationUtilService
    ]
})
export class ServicesModule
{ }
