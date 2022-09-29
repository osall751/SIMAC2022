import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'ousmane1.sall@uvs.edu.sn';
  pwd = 'passer123';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  valider() {
    if (this.username.indexOf('@uvs.edu.sn') != -1) {
      this.router.navigateByUrl('accueil/'+this.username);
    } else {
      alert('Vérifier le login et le mot de passe saisies !!!');
    }
  }
}
