import { NgModule } from '@angular/core';
import { ServicesModule } from '../core/services/services.module';
import { ButtonModule } from './button/button.module';
import { CardCpfModule } from './card-cpf/card-cpf.module';
import { HeadModule } from './head/head.module';
import { InputModule } from './input';
import { MenuModule } from './menu/menu.module';
import { SnackBarModule } from './snack-bar';
import { StepperModule } from './stepper/stepper.module';

const sharedModules = [
    InputModule,
    MenuModule,
    HeadModule,
    ButtonModule,
    CardCpfModule,
    StepperModule,
    SnackBarModule,
    ServicesModule
];

@NgModule({
    imports: [
        ...sharedModules
    ],
    exports: sharedModules
})
export class SharedModule { }
