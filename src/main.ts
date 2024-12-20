import {provideHttpClient} from '@angular/common/http';
import {enableProdMode} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, RouteReuseStrategy, withComponentInputBinding} from '@angular/router';
import {IonicRouteStrategy, provideIonicAngular} from '@ionic/angular/standalone';
import { AppComponent } from './app/app.component';
import {routes} from './app/app.routes';
import {environment} from './app/environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ mode: 'md' }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
  ],
});
