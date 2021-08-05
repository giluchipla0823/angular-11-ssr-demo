import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateCacheService } from 'ngx-translate-cache';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  activeLang: string;

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {

  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {

      this.activeLang = this.languageService.getLang();

      // this.activeLang = this.translate.getBrowserLang();

      // const browserLang = this.translate.getBrowserLang();

      // this.activeLang = browserLang.match(/en|es/) ? browserLang : 'en';

      // this.translate.setDefaultLang(this.activeLang);

      // this.activeLang = this.getLang();
    }

  }

  onChangeLanguage(lang: string): void {
    let newUrl: string = window.location.href;

    if (lang === 'en') {
      newUrl = newUrl.replace('/es/', '/en/');
    } else {
      newUrl = newUrl.replace('/en/', '/es/');
    }

    this.setLang(lang);

    window.location.href = newUrl;
  }


  /* private getLangFromUrl(): string {
    return window.location.href.includes('/es/') ? 'es' : 'en';
  } */

  private setLang(lang: string): void {
    this.activeLang = lang;
    // this.translate.use(lang);
    // sessionStorage.setItem('lang', lang);
    this.languageService.setLang(lang);
  }

/*   private getLang(): string {
    // return sessionStorage.getItem('lang') || 'en';
  }

  private getLangFromUrl(): string {
    // return window.location.href.includes('/es/') ? 'es' : 'en';
  } */

}
