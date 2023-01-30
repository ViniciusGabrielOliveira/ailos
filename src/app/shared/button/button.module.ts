import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ButtonComponent } from './button.component';

@NgModule({
    declarations: [
        ButtonComponent
    ],
    imports: [
        CommonModule,
        MatRippleModule,
        MatProgressSpinnerModule
    ],
    exports: [
        ButtonComponent
    ]
})
export class ButtonModule
{ }
