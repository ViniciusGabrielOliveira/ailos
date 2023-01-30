import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent
{
    constructor(
        private readonly translate: TranslateService
    )
    {
        this.translate.addLangs(['en', 'pt-br', 'es']);
        this.translate.setDefaultLang('pt-br');

        const browserLang: string | undefined = this.translate.getBrowserLang();

        if (browserLang)
        {
            this.translate.use(browserLang.match(/en|pt-br|es/)
                ? browserLang
                : 'pt-br'
            );
        }
    }
}
