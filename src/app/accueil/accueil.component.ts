import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Bienvenue sur le composant AccueilComponent ' + Date());
  }
}
