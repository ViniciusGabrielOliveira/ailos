import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatLegacySnackBarRef as MatSnackBarRef, MAT_LEGACY_SNACK_BAR_DATA as MAT_SNACK_BAR_DATA } from '@angular/material/legacy-snack-bar';
import { SnackBarData } from './snack-bar.model';

const ANIM_TIMEOUT = 500;

@Component({
    selector: 'app-snack-bar',
    templateUrl: './snack-bar.component.html',
    styleUrls: ['./snack-bar.component.scss'],
    animations: [
        trigger('toggleSnack', [
            state('closed', style({
                transform: 'translate(-50%, 48px)',
                opacity: 0
            })),
            state('opened', style({
                transform: 'translate(-50%, -48px)',
                opacity: 1
            })),
            transition('closed <=> opened', animate(`${ANIM_TIMEOUT}ms ease-out`))
        ])
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackBarComponent implements OnInit
{
    public message = '';

    public typeClass = 'default';

    constructor(
        @Inject(MAT_SNACK_BAR_DATA) public data: SnackBarData,
        private readonly snackRef: MatSnackBarRef<SnackBarComponent>
    )
    { }

    public ngOnInit(): void
    {
        this.message = this.data.message;
        this.typeClass = this.data.typeClass;
    }

    public closeSnack(): void
    {
        this.snackRef.dismiss();
    }
}
