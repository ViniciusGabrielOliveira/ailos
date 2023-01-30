import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule as NGEffectsModule, EffectsRootModule } from '@ngrx/effects';
import { CooperatedEffect } from './cooperated.effect';

/**
 * All application effects.
 */
const effects: ModuleWithProviders<EffectsRootModule> = NGEffectsModule.forRoot([
    CooperatedEffect
]);

@NgModule({
    imports: [effects]
})
export class EffectsModule
{ }
