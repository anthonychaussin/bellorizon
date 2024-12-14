import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'artisants',
    loadComponent: () => import('./pages/artisants/artisants.component').then((m) => m.ArtisantsComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then((m) => m.RegisterComponent)
  },
  {
    path: 'report',
    loadComponent: () => import('./pages/report/report.component').then((m) => m.ReportComponent)
  },
  {
    path: 'news',
    loadComponent: () => import('./pages/annonces/annonces.component').then((m) => m.AnnoncesComponent)
  }
];
