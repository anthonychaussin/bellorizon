import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton, IonRouterLinkWithHref,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
             selector: 'app-login',
             standalone: true,
             templateUrl: './login.component.html',
             styleUrls: ['./login.component.scss'],
             imports: [
               IonHeader,
               IonToolbar,
               IonTitle,
               IonButtons,
               IonMenuButton,
               IonContent,
               IonItem,
               IonLabel,
               IonInput,
               IonButton,
               IonRouterLinkWithHref
             ]
           })
export class LoginComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  onLogin(): void {

  }
}
