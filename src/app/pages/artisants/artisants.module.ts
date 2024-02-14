import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ArtisantsRoutingModule} from "./artisants-routing.module";
import {ArtisantsComponent} from "./artisants.component";

@NgModule({
  imports: [
    CommonModule,
    ArtisantsRoutingModule,
    NgOptimizedImage
  ],
  declarations:[
    ArtisantsComponent
  ]
})
export class ArtisantsModule {
}
