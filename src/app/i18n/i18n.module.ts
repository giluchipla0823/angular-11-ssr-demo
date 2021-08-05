import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Inject, NgModule, Optional, PLATFORM_ID } from '@angular/core';
import { BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Request } from 'express';
import { translateLoaderFactory } from './translate-loaders';
import { LanguageService } from '../services/language.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserTransferStateModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient, TransferState, PLATFORM_ID]
      }
    }),
  ],
  exports: [
    TranslateModule
  ]
})
export class I18nModule {
  private lang: string;

  constructor(
    translate: TranslateService,
    @Optional() @Inject(REQUEST) private req: Request,
    @Inject(PLATFORM_ID) private platform: any,
    private languageService: LanguageService
  ) {
    translate.addLangs(['en', 'es']);

    if (isPlatformServer(this.platform)) {
      this.lang = this.getLangFromServerUrl();
    }

    if (isPlatformBrowser(this.platform)) {
      this.lang = this.getLangFromUrl();
    }

    const lang = this.lang.match(/en|es/) ? this.lang : 'en';

    this.languageService.setLang(lang);
    translate.use(lang);
  }

  private getLangFromUrl(): string {
    return window.location.href.includes('/es/') ? 'es' : 'en';
  }

  private getLangFromServerUrl(): string {
    return this.req.route.path.includes('/es/') ? 'es' : 'en';
  }

  /* getLangFromServerSideCookie() {
    if (this.req) {
      return this.req.cookies.lang;
    }
  } */
}
