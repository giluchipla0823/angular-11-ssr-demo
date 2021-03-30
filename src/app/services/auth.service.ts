import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated: boolean = false;

  constructor() {
    this.loadStorage();
  }

  login(): void {
    this.authenticated = true;
    this.saveStorage();
  }

  logout(): void {
    this.authenticated = false;
    this.removeStorage();
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  saveStorage(): void {
    sessionStorage.setItem('logged', 'true');
  }

  loadStorage(): void {
    if (sessionStorage.getItem('logged')) {
      this.authenticated = true;
    }
  }

  removeStorage(): void {
    sessionStorage.removeItem('logged');
  }
}
