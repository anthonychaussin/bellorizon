import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonRouterLink,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {home, megaphone, alertCircle, mail, logIn} from 'ionicons/icons';

@Component({
             selector: 'app-menu',
             standalone: true,
             templateUrl: './menu.component.html',
             styleUrls: ['./menu.component.scss'],
             imports: [
               IonMenu,
               IonHeader,
               IonToolbar,
               IonTitle,
               IonContent,
               IonList,
               IonItem,
               IonIcon,
               IonLabel,
               IonRouterLink,
               RouterOutlet,
               RouterLink
             ]
           })
export class MenuComponent  implements OnInit {

  constructor() {
    addIcons({home, megaphone, alertCircle, mail, logIn})
  }

  ngOnInit() {}

}
