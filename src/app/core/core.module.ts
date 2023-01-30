import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ApiModule } from './api/api.module';
import { EffectsModule } from './effects/effects.module';
import { ServicesModule } from './services/services.module';
import { StoreModule } from './stores/store.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule,
        ApiModule,
        CommonModule,
        ServicesModule,
        EffectsModule,
        SharedModule
    ]
})
export class CoreModule { }
