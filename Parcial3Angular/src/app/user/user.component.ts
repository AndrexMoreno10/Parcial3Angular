import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  idUserSelect?: number = undefined;
  crearEditar: boolean = false;
  nameUser: string = "";
  ageUser: number = 0;
  phoneUser: string = "";
  addressUser: string = "";
  emailUser: string = "";
  passwordUser: string = "";
  usernameUser: string = "";
  isAdmin: boolean = false;


  constructor() { }

  ngOnInit(): void {

 }


}
