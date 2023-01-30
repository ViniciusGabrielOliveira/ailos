import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, Optional, ViewChild } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl } from '@angular/forms';
import { Nullable } from '../../core/models/nullable.model';
import { ValidationUtilService } from '../../core/services/validation-util.service';
import { ControlValueAccessorUtil, createCustomInputControlValueAccessor } from '../../utils/control-value-accessor.util';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: [ './input.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        createCustomInputControlValueAccessor(AppInputComponent)
    ]
})
export class AppInputComponent extends ControlValueAccessorUtil<string> implements AfterViewInit
{
    @Input()
    public label= '';

    @Input()
    public placeholder = '';

    @Input()
    public hint?: string;

    @Input()
    public error?: string;

    @ViewChild('field')
    public inputRef?: ElementRef<HTMLInputElement>;

    @Input()
    public formControlName?: string;

    @Input()
    public formControl?: FormControl;

    @Input()
    public hideRequiredMarker = false;

    @Input()
    public required = false;

    @Input()
    public mask = '';

    @Input()
    public width?: string;

    constructor(
        private elRef: ElementRef,
        @Optional() private readonly validationUtilService?: ValidationUtilService,
        @Optional() private readonly controlContainer?: ControlContainer
    )
    {
        super();
    }

    public get resolvedFormControl(): any
    {
        return this.formControl || this.controlContainer?.control?.get(this.formControlName || '');
    }

    public get formGroup(): Nullable<AbstractControl>
    {
        return this.controlContainer?.control;
    }

    /**
     * Validates automatically the field.
     */
    public get currentDefaultFormError(): string | undefined
    {
        if (!this.formGroup || !this.validationUtilService)
        {
            return;
        }

        return this.validationUtilService.getCurrentFormError(
            this.formGroup,
            this.formControlName
        );
    }

    public get isRequired(): boolean
    {
        return this.resolvedFormControl
            ? this.resolvedFormControl.errors?.required !== undefined
            : this.required;
    }

    /**
     * Setup the two way data bind.
     */
    public ngAfterViewInit(): void
    {
        const inputElement = this.inputRef?.nativeElement;

        if (inputElement)
        {
            inputElement.onchange = () => this.onChange();
            inputElement.onkeyup = () => this.onChange();
        }
    }

    /**
     * Change events from the textarea
     */
    private onChange(): void
    {
        const input = this.inputRef?.nativeElement;

        if (input?.value !== undefined && this.onChangeCallback)
        {
            // get value from text area
            const newValue: string = input.value;

            // update the form
            this.onChangeCallback(newValue);
        }
    }
}
