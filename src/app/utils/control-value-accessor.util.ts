import { Component, forwardRef, Type } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export function createCustomInputControlValueAccessor(extendedInputComponent: Type<any>)
{
    return {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => extendedInputComponent),
        multi: true
    };
}

/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/component-class-suffix */

/**
 * Abstract component that implements Angular's Control Value Accessor.
 * It is useful when you need to create a custom ngModel two way data bind.
 */
@Component({ template: '' })
export abstract class ControlValueAccessorUtil<T> implements ControlValueAccessor
{
    public registerOnTouched(): void
    { }

    public setDisabledState?(): void
    { }

    /**
     * The internal data model
     */
    public innerValue: T | undefined;

    /**
     * Implements ControlValueAccessor interface
     *
     * @param value
     */
    public writeValue(value: T): void
    {
        if (value !== this.innerValue)
        {
            this.innerValue = value;
            this.onWriteValue(value);
        }
    }

    /**
     * Implements ControlValueAccessor interface
     *
     * @param fn
     */
    public registerOnChange(fn: (_: T) => void): void
    {
        this.onChangeCallback = (change: T) =>
        {
            fn(change);
            this.onWriteValue(change);
        };
    }

    /**
     * Placeholders for the callbacks which are later provided
     * by the Control Value Accessor
     */
    protected onChangeCallback: (_: T) => void = (change: T) =>
    {
        this.onWriteValue(change);
    };

    /**
     * It will run when the write value hook is called by Angular.
     */
    protected onWriteValue(change: T): void
    { }
}
