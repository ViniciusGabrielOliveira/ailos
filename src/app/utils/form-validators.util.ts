import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const invalidCpfUtil: (error?: ValidationErrors) => ValidatorFn =
    (error) => (control: AbstractControl): ValidationErrors | null =>
        isValid(
            !isValidCPF(control.value),
            error || { cpfValid: [ 'cpf-valid' ] }
        );

function isValid(condition: boolean, error: ValidationErrors): ValidationErrors | null
{
    return condition
        ? error
        : null;
}

function isValidCPF(cpf: string): boolean
{
    cpf = cpf.replace(/[^\d]+/g, '')

    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false

    const cpfNum: Array<number> = cpf.split('').map(el => parseInt(el));

    const rest = (count: number) => (cpfNum.slice(0, count - 12)
        .reduce((soma, el, index) => (soma + el * (count - index)), 0) * 10) % 11 % 10;

    return rest(10) === cpfNum[ 9 ] && rest(11) === cpfNum[ 10 ];
}
