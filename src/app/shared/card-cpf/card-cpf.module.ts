import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardCpfComponent } from './card-cpf.component';



@NgModule({
    declarations: [
        CardCpfComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        MatRippleModule
    ],
    exports: [
        CardCpfComponent
    ]
})
export class CardCpfModule { }
