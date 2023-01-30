import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacySnackBar } from '@angular/material/legacy-snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ButtonModule } from '../button/button.module';
import { SnackBarComponent } from './snack-bar.component';
import { SnackBarService } from './snack-bar.service';

@NgModule({
    declarations: [
        SnackBarComponent
    ],
    imports: [
        CommonModule,
        ButtonModule
    ],
    providers: [
        SnackBarService,
        MatSnackBarModule,
        MatLegacySnackBar
    ],
    exports: [
        SnackBarComponent
    ]
})
export class SnackBarModule
{ }
