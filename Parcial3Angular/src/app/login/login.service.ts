import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
  
})
export class LoginService {

  private currentUser: User | null = null;
  private users: User[];

  constructor(private router: Router) {
    // Recuperar usuarios del sessionStorage al iniciar el servicio.
    const storedUsers = sessionStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    } else {
      // Si no hay usuarios almacenados, inicializar con usuarios predeterminados.
      this.users = [
        {
          id: 1,
          name: 'Admin User',
          age: 30,
          phone: '123-456-7890',
          address: 'Admin Street, City',
          email: 'admin',
          password: '123',
          role: 'admin',
        },
        {
          id: 2,
          name: 'Gamer User',
          age: 25,
          phone: '987-654-3210',
          address: 'Gamer Street, City',
          email: 'gamer',
          password: '123',
          role: 'gamer',
        },
        {
          id: 3,
          name: 'User invitado',
          age: 22,
          phone: '111-222-3333',
          address: 'invitado Street, City',
          email: 'invitado',
          password: '123',
          role: 'invitado',
        },
      ];

      // Almacenar usuarios en sessionStorage para futuras sesiones.
      sessionStorage.setItem('users', JSON.stringify(this.users));
    }
  }


  login(email: string, password: string): boolean {
    const authenticatedUser = this.users.find(
      (user) => user.email === email && user.password === password
    );

    if (authenticatedUser) {
      this.currentUser = authenticatedUser;
      return true;
    }

    return false;
  }


  getRolUser(): String | null {
    return this.currentUser ? this.currentUser.role : null;
  }

  logout(): void {
    this.currentUser = null;
    this.router.navigate(['/login']);
  }
 
}