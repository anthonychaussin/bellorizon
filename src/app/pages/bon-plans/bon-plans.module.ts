import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BonPlansRoutingModule} from "./bon-plans-routing.module";
import {BonPlansComponent} from "./bon-plans.component";

@NgModule({
  imports: [
    CommonModule,
    BonPlansRoutingModule
  ],
  declarations:[BonPlansComponent]
})
export class BonPlansModule {
}
