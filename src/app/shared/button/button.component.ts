import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Nullable } from 'src/app/core/models/nullable.model';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: [ './button.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent
{
    @Input()
    public glyph?: string;

    @Input()
    public iconClass?: string;

    @Input()
    public caption?: string;

    @Input()
    public disabled = false;

    @Input()
    public loading: Nullable<boolean>;

    @Input()
    public innerHide = false;

    @Input()
    public textSize = '12px';

    public domBG?: string;

    public _type: Array<string> = ['primary'];

    @Input()
    public set type(newType: string)
    {
        this._type = newType.trim().split(' ');
    }

    @Input()
    public set bg(newBg: string)
    {
        this.domBG = `url('${newBg}')`;
    }
}
