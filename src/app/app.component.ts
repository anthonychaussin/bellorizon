import {Component} from '@angular/core';
import {IonApp} from '@ionic/angular/standalone';
import {FooterComponent} from './footer/footer.component';
import {MenuComponent} from './menu/menu.component';

@Component({
	           selector: 'app-root',
	           standalone: true,
	           templateUrl: './app.component.html',
	           styleUrl: './app.component.scss',
             imports: [MenuComponent, FooterComponent, IonApp]
           })

export class AppComponent {
	title = 'Bellhorizon';
}
