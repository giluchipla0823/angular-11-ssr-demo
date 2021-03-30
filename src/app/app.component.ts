import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular11SSRDemo';

  activeLang: string = 'es';

  constructor(
    private translate: TranslateService
  ) {

  }

  ngOnInit(): void {
    this.translate.setDefaultLang(this.activeLang);
  }
}
