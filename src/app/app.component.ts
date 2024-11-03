import {DatePipe} from '@angular/common';
import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {
  IonAlert,
  IonApp,
  IonAvatar, IonBadge, IonContent, IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem, IonLabel,
  IonList,
  IonLoading,
  IonRouterOutlet, IonSkeletonText, IonTitle, IonToolbar
} from '@ionic/angular/standalone';
import {FooterComponent} from './footer/footer.component';
import {MenuComponent} from './menu/menu.component';

@Component({
	           selector: 'app-root',
	           standalone: true,
	           templateUrl: './app.component.html',
	           styleUrl: './app.component.scss',
             imports: [IonApp, IonRouterOutlet, RouterOutlet,
                       IonHeader,
                       IonToolbar,
                       IonTitle,
                       IonContent,
                       IonLabel,
                       IonBadge,
                       IonAvatar,
                       IonItem,
                       IonList,
                       IonLoading,
                       IonInfiniteScroll,
                       IonInfiniteScrollContent,
                       IonSkeletonText,
                       IonAlert,
                       DatePipe, MenuComponent, FooterComponent]
           })

export class AppComponent {
	title = 'Bellhorizon';
}
