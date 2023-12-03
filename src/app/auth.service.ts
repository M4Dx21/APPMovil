import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = true;

  login(username: string, password: string): boolean {
    if (username === 'alejandro' && password === 'valdivia') {
      this.isLoggedIn = true;
      return true;
    } else if (username === 'diego' && password === 'cares') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}

