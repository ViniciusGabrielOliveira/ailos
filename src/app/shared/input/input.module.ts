import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { AppInputComponent } from './input.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
    declarations: [
        AppInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        NgxMaskModule.forRoot()
    ],
    exports: [
        AppInputComponent
    ]
})
export class InputModule
{ }
