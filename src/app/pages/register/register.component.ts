import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
             selector: 'app-register',
             standalone: true,
             templateUrl: './register.component.html',
             styleUrls: ['./register.component.scss'],
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
               IonButton
             ]
           })
export class RegisterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  onRegister(): void {

  }
}
