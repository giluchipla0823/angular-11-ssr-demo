import { BrowserModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedComponentsModule } from './components/shared/shared-components.module';
import { AppRoutingModule } from './app-routing.module';

//Translation
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TransferHttpCacheModule } from '@nguniversal/common';
// import { REQUEST } from '@nguniversal/express-engine/tokens';
import { translateBrowserLoaderFactory } from './shared/loaders/translate-browser.loader';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { I18nModule } from './i18n/i18n.module';
// import { I18nModule } from './i18n/i18n.module';

/* export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
} */

// console.log(APP_BASE_HREF);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    I18nModule,
    AppRoutingModule,
    SharedComponentsModule,
    // HttpClientModule,
    // TransferHttpCacheModule,
    /* TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    }) */

    /* TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState]
      }
    }) */
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
