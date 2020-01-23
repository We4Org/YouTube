import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LayoutModule } from "@angular/cdk/layout";
import { NgModule } from "@angular/core";

import { AppRoutingModule, RoutingComponents } from "./app-routing.module";
import { TokenIntercepterService } from "./services/token-intercepter.service";
import { ScreenBreakpointService } from "./services/breakpoint.service";
import { MenuComponent } from './home/main/menu/menu.component';
import { SideNavService } from "./services/side-nav.service";
import { MaterialModule } from "./material/material.module";
import { ApiService } from "./services/api.service";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./auth.guard";

@NgModule({
  declarations: [AppComponent, RoutingComponents, MenuComponent],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule ,
    MaterialModule,
    BrowserModule,
    LayoutModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    TokenIntercepterService,
    ScreenBreakpointService,
    SideNavService,
    ApiService,
    AuthGuard,
    {
      useClass: TokenIntercepterService,
      provide: HTTP_INTERCEPTORS,
      multi: true
    }
  ]
})
export class AppModule {}
