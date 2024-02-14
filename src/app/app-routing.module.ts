import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)},
  {path: 'bellorizon-news', loadChildren: () => import('./pages/news/news.module').then((m) => m.NewsModule)},
  {path: 'artisants', loadChildren: () => import('./pages/artisants/artisants.module').then((m) => m.ArtisantsModule)},
  {path: 'les-bon-plans', loadChildren: () => import('./pages/bon-plans/bon-plans.module').then((m) => m.BonPlansModule)},
  {path: 'login', loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule)},
  {path: 'register', loadChildren: () => import('./pages/register/register.module').then((m) => m.RegisterModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
