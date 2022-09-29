import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {
  username: string | null = '';
  constructor(private routeActive: ActivatedRoute) {}

  ngOnInit(): void {
    this.username = this.routeActive.snapshot.paramMap.get('username');
    console.log('Bienvenue sur le composant AccueilComponent ' + Date());
  }
}
