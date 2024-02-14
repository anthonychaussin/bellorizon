import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BonPlansComponent} from "./bon-plans.component";

const routes: Routes = [
  {
    path: '',
    component: BonPlansComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonPlansRoutingModule {
}
