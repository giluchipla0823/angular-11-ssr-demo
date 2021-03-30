import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  activeLang: string = 'es';

  constructor(
    private translate: TranslateService
  ) {

  }

  ngOnInit(): void {
    this.translate.setDefaultLang(this.activeLang);
  }

  onChangeLanguage(lang: string): void {
    this.activeLang = lang;
    this.translate.use(lang);
  }

}
