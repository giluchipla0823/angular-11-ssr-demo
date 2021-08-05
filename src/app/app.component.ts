import { Component, OnInit } from '@angular/core';
// import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
/* import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-11-ssr-demo';

  constructor(
    /* private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: any */
  ) {
    /* if (isPlatformBrowser(this.platformId)) {

      const lang = this.getLangFromUrl();

      this.translate.setDefaultLang(lang);
    } */
  }

  ngOnInit(): void {

  }

  /* private getLangFromUrl(): string {
    return window.location.href.includes('/es/') ? 'es' : 'en';
  } */
}
