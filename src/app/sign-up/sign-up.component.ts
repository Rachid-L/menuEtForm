import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  model: Order = new Order();
  submitted = false


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

    console.log(this.model);

  }

}


export class Order {

  firstname: Text;

  lastname: Text;

  date: Date;

  email: string;

  password : string;

}
