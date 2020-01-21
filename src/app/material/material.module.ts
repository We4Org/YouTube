import { NgModule } from "@angular/core";

import {
  MatButtonToggleModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatBadgeModule,
  MatIconModule,
  MatListModule
} from "@angular/material";

const MaterialComponents = [
  MatButtonToggleModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatBadgeModule,
  MatListModule,
  MatIconModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
