import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'ousmane1.sall@uvs.edu.sn';
  pwd = 'passer123';

  nombre = 0;

  constructor(private router: Router, private auth: AuthentificationService) {}

  ngOnInit(): void {}

  valider() {
    if (this.auth.seLoguer(this.username, this.pwd)) {
      this.router.navigateByUrl('accueil/' + this.username);
    } else {
      alert('Vérifier le login et le mot de passe saisies !!!');
    }
  }
}
