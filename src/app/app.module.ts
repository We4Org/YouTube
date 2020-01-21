import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LayoutModule } from "@angular/cdk/layout";
import { NgModule } from "@angular/core";

import { AppRoutingModule, RoutingComponents } from "./app-routing.module";
import { MaterialModule } from "./material/material.module";
import { AppComponent } from "./app.component";
import { ApiService } from "./api.service";
import { AuthGuard } from "./auth.guard";
import { TokenIntercepterService } from "./token-intercepter.service";

@NgModule({
  declarations: [AppComponent, RoutingComponents],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    LayoutModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    ApiService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi: true
    }
  ]
})
export class AppModule {}
