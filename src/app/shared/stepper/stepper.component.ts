import { Component, Input } from '@angular/core';

export interface Stepper {
    label: string;
    status: 'none' | 'active' | 'completed'
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

    @Input()
    public width = '100%';

    @Input()
    public stepper: Array<Stepper> = [
        {label: '1', status: 'completed'},
        {label: '2', status: 'active'},
        {label: '3', status: 'none'}
    ];
}
