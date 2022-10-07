import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rendezvous } from '../outils/rendezvous';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {
  username: string | null = '';

  rendezvous = [
    new Rendezvous(
      1,
      'Rv chez le docteur',
      'Eno de Diourbel',
      new Date('01/12/2022')
    ),
    new Rendezvous(2, 'Examene', 'Eno de THIES', new Date('01/12/2022')),
    new Rendezvous(3, 'Cours Dev Web', 'Eno de Mbour', new Date('12/21/2022')),
    new Rendezvous(
      4,
      'RV avec un camerade',
      'Eno de Dakar',
      new Date('12/16/2022')
    ),
    new Rendezvous(
      5,
      'Rv chez le docteur',
      'Eno de Louga',
      new Date('01/12/2022')
    ),
    new Rendezvous(
      6,
      'Rv chez le docteur',
      'Eno de Podor',
      new Date('01/12/2022')
    ),
    new Rendezvous(
      7,
      'Rv chez le docteur',
      'Eno de Saint-Louis',
      new Date('01/12/2022')
    ),
    new Rendezvous(
      8,
      'Rv chez le docteur',
      'Eno de Kaolack',
      new Date('01/12/2022')
    ),
    new Rendezvous(
      9,
      'Rv chez le docteur',
      'Eno de Zinguinchor',
      new Date('01/12/2022')
    ),
    new Rendezvous(
      10,
      'Rv chez le docteur',
      'Eno de Saraya',
      new Date('01/12/2022')
    ),
  ];

  constructor(private routeActive: ActivatedRoute) {}

  ngOnInit(): void {
    this.username = this.routeActive.snapshot.paramMap.get('username');
    console.log('Bienvenue sur le composant AccueilComponent ' + Date());
  }

  supprimer(id: number) {
    this.rendezvous = this.rendezvous.filter((rv) => {
      return rv.id != id;
    });
  }
}
