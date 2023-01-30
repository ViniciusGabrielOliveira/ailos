import { ValidationErrors } from '@angular/forms';

export type ErrorTranslationMapper = <T>(i: ValidationErrors) => T;

export type ErrorTranslationTable = Record<
    string, // Error name (lookup)
    [
        string, // Translation string
        ErrorTranslationMapper? // Error mapper
    ]
>;
