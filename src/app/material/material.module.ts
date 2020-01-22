import { NgModule } from "@angular/core";

import {
  MatButtonToggleModule,
  MatFormFieldModule,
  MatGridListModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatBadgeModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatTabsModule,
  MatCardModule
} from "@angular/material";

const MaterialComponents = [
  MatButtonToggleModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatGridListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatBadgeModule,
  MatListModule,
  MatIconModule,
  MatMenuModule,
  MatTabsModule,
  MatCardModule,
  MatInputModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
