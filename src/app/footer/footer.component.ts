import { Component, OnInit } from '@angular/core';
import {IonButton, IonCol, IonFooter, IonIcon, IonLabel, IonRouterLink, IonRow, IonToolbar} from '@ionic/angular/standalone';

@Component({
             selector: 'app-footer',
             standalone: true,
             templateUrl: './footer.component.html',
             styleUrls: ['./footer.component.scss'],
             imports: [
               IonFooter,
               IonToolbar,
               IonRow,
               IonCol,
               IonButton,
               IonIcon,
               IonLabel,
               IonRouterLink
             ]
           })
export class FooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
