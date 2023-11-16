import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { User } from '../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
errorMessage: string = '';  
user : User = {
  id: 0,
	name: '',
  age: 0,
  phone: '',
  address: '',
  email: '',
  password: '',
  role: ''

}


  constructor(private loginService: LoginService,private router :Router) {}

  login(): void {
    
    if (this.loginService.login(this.user.email, this.user.password)) {
      
      const user = this.loginService.getRolUser();
        if (user === 'admin') {
          this.router.navigate(['/dashboard/admin']);
        } else if (user === 'gamer') {
          this.router.navigate(['/dashboard/gamer']);
        } else if (user === 'invitado') {
          this.router.navigate(['/dashboard/invitado']);
        } else {
          console.error('Rol de usuario no reconocido');
        }
    } else {
      this.errorMessage = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
    }
  }

}
