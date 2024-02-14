import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ArtisantsComponent} from "./artisants.component";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: ArtisantsComponent
    }
  ])],
  exports: [RouterModule],
})
export class ArtisantsRoutingModule {
}
