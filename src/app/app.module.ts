import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "./_service/user.service";
import { HomeComponent } from "./home/home.component";
import { HeaderService } from "./_service/header.service";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },

  //otherwise redirect to home
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent],
  providers: [UserService, HeaderService]
})
export class AppModule {}
