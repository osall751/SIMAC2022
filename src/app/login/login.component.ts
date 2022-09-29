import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'ousmane1.sall@uvs.edu.sn';
  pwd = 'passer123';

  constructor() {}

  ngOnInit(): void {}

  valider() {
    alert('Bienevnue ' + this.username);
  }
}
