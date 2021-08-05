import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private lang: string;

  constructor() {}

  setLang(lang: string): void {
    this.lang = lang;
  }

  getLang(): string {
    return this.lang;
  }
}
