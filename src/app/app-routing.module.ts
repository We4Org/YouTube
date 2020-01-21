import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { LoginChildComponent } from "./login-child/login-child.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "login",
        component: LoginComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "admin",
    component: LoginChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponents = [
  LoginChildComponent,
  LoginComponent,
  HomeComponent
];
