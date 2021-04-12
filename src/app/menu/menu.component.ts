import { Component, OnInit} from '@angular/core';
import { Routes } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

const route : Routes = [
  {path: 'sign-up', component: SignUpComponent},
  {path: 'user-profile', component:UserProfileComponent}
]

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export {route}