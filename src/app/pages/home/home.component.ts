import {NgForOf, NgOptimizedImage} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle, IonCol,
  IonContent, IonGrid, IonHeader,
  IonIcon,
  IonItem,
  IonLabel, IonList,
  IonMenuButton, IonRow, IonTitle, IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {arrowDown, arrowUp, wifi} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
             imports: [
               IonCardTitle,
               IonCardContent,
               IonItem,
               IonIcon,
               IonLabel,
               IonCardHeader,
               IonCard,
               IonContent,
               IonMenuButton,
               IonButtons,
               IonTitle,
               IonToolbar,
               IonHeader,
               NgOptimizedImage,
               IonList,
               IonGrid,
               IonRow,
               IonCol,
               NgForOf
             ]
           })
export class HomeComponent  implements OnInit {

  public debits = [{
    fai: "Bouygues Telecom",
    up: "1 Gbit/s et plus",
    down: "100 Mbit/s à 1 Gbit/s",
  },{
    fai: "Free",
    up: "1 Gbit/s et plus",
    down: "1 Gbit/s et plus",
  },{
    fai: "Orange",
    up: "1 Gbit/s et plus",
    down: "1 Gbit/s et plus",
  },{
    fai: "SFR",
    up: "1 Gbit/s et plus",
    down: "100 Mbit/s à 1 Gbit/s",
  },{
    fai: "Kiwi",
    up: "1 Gbit/s et plus",
    down: "1 Gbit/s et plus",
  },{
    fai: "MilkyWan",
    up: "1 Gbit/s et plus",
    down: "100 Mbit/s à 1 Gbit/s",
  },{
    fai: "Nordnet",
    up: "1 Gbit/s et plus",
    down: "1 Gbit/s et plus",
  },{
    fai: "Ozone",
    up: "100 Mbit/s à 1 Gbit/s",
    down: "100 Mbit/s à 1 Gbit/s",
  },];

  constructor() {
    addIcons({wifi, arrowUp, arrowDown})
  }

  ngOnInit() {}

}
