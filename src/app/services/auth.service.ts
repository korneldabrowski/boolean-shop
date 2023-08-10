import { UserService } from './user.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'token';
  private errorMessage = '';

  constructor(private router: Router, private user: UserService) {}

  async login(username: string, password: string): Promise<boolean> {
    try {
      if (!username || !password) {
        throw new Error('Username and password are required');
      }

      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        this.errorMessage = 'Invalid login credentials';
        throw new Error('Wrong login credentials');
      }

      const json = await response.json();

      if (json.token) {
        localStorage.setItem(this.tokenKey, json.token);

        this.user.setUserProfile(username);

        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('An error occurred during login:', error);

      return false;
    }
  }

  logout(): void {
    this.router.navigate(['/login']);
    localStorage.removeItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token;
  }

  getErrorMessage(): string {
    return this.errorMessage;
  }
}
