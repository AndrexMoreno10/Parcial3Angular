import { Component,Input, Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  @Input() resultStatus: boolean = true;
  @Output() resultStatusChange = new EventEmitter<boolean>();

  constructor(private router:Router) {

  }

  cerrarSesion(){
  sessionStorage.removeItem("user");
  this.router.navigate(["Login"])
}
  

}
