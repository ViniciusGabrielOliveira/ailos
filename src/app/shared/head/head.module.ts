import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeadComponent } from './head.component';

@NgModule({
    declarations: [
        HeadComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
    ],
    exports: [
        HeadComponent
    ]
})
export class HeadModule { }
