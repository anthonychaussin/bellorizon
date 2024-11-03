import {DatePipe, NgForOf} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonButtons,
  IonCard, IonCardContent,
  IonCardHeader, IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Annonce} from '../../model/annonce';

@Component({
             selector: 'app-annonces',
             standalone: true,
             templateUrl: './annonces.component.html',
             styleUrls: ['./annonces.component.scss'],
             imports: [
               IonHeader,
               IonToolbar,
               IonTitle,
               IonButtons,
               IonMenuButton,
               IonContent,
               IonCard,
               IonCardHeader,
               IonCardTitle,
               NgForOf,
               IonCardSubtitle,
               IonCardContent,
               DatePipe
             ]
           })
export class AnnoncesComponent  implements OnInit {
  annonces: Array<Annonce> = [];

  constructor() { }

  ngOnInit() {}

}
