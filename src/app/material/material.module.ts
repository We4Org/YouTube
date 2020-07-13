import { NgModule } from "@angular/core";

import {
  MatButtonToggleModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatBottomSheetModule,
  MatFormFieldModule,
  MatGridListModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatBadgeModule,
  MatInputModule,
  MatTableModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatTabsModule,
  MatCardModule
} from "@angular/material";
import { ScrollingModule } from "@angular/cdk/scrolling";

const MaterialComponents = [
  MatButtonToggleModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatBottomSheetModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatGridListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  ScrollingModule,
  MatBadgeModule,
  MatInputModule,
  MatTableModule,
  MatIconModule,
  MatMenuModule,
  MatListModule,
  MatCardModule,
  MatTabsModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
