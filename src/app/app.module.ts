import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

registerLocaleData(ptBr);

/**
 * i18n Http Loader Factory.
 *
 * AoT requires an exported function for factories.
 */
export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader
{
    return new TranslateHttpLoader(http, './assets/i18n/', `.json?v=${Date.now()}`);
}


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CoreModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [ HttpClient ]
            }
        }),
        BrowserAnimationsModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt' }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule
{ }
