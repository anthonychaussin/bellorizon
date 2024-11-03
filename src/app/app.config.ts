import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService} from '@angular/fire/analytics';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {initializeAppCheck, provideAppCheck, ReCaptchaEnterpriseProvider} from '@angular/fire/app-check';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getDatabase, provideDatabase} from '@angular/fire/database';
import {getPerformance, providePerformance} from '@angular/fire/performance';
import {provideRouter} from '@angular/router';
import {provideIonicAngular} from '@ionic/angular/standalone';

import {routes} from './app.routes';
import {environment} from './environments/environment.dev';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    provideAppCheck(() => {
      return initializeAppCheck(undefined,
                                {
                                  provider: new ReCaptchaEnterpriseProvider(environment.catpcha),
                                  isTokenAutoRefreshEnabled: true
                                });
    }),
    provideDatabase(() => getDatabase()),
    providePerformance(() => getPerformance()),
    provideIonicAngular({})]
};
