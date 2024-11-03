import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton, IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
             selector: 'app-report',
             standalone: true,
             templateUrl: './report.component.html',
             styleUrls: ['./report.component.scss'],
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
               IonTextarea,
               IonButton
             ]
           })
export class ReportComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  submitReport(): void {

  }
}
