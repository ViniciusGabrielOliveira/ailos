import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ErrorTranslationTable } from '../models/error-translation-table.model';
import { Nullable } from '../models/nullable.model';

@Injectable()
export class ValidationUtilService
{
	/**
	 * Declare here your validations.
	 */
	private readonly errorTranslationTable: ErrorTranslationTable = {
		required: [ 'required' ],
		notEqual: [ 'not-equal' ],
		invalid: [ 'invalid' ],
		lessRewards: [ 'less-rewards' ],
		unavailable: [ 'unavailable' ],
		min: [ 'min', (error: any) => error.min ],
		max: [ 'max', (error: any) => error.max ],
		onlyNumber: [ 'only-number' ]
	};

	constructor(private readonly translateService: TranslateService)
	{ }

	/**
	 * Scan a form group for errors
	 *
	 * @param form The form group to inspect.
	 * @param control Isolate issues per control.
	 * @returns All errors in a single string (translated)
	 */
	public getCurrentFormError(form: AbstractControl | FormGroup, control?: string): string
	{
		const errorTable: ValidationErrors = {};
		const validationErrors: Array<Nullable<ValidationErrors>> = !(form instanceof FormGroup)
			? [ form.get(control || '')?.errors ]
			: Object.values(form.controls).map(i => i.errors);

		return Object.entries(this.errorTranslationTable)
			.filter(([ key ]) => errorTable[ key ] = validationErrors.find(e => e?.[ key ]))
			.map(([ key, [ translation, mapper = (e: ValidationErrors) => e ] ]) => this.translateService.instant(
				`form-validation.${translation}`,
				mapper(errorTable[ key ])
			))
			.join('');
	}
}
