import { Component, VERSION } from "@angular/core";
import { HeaderService } from "./_service/header.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "library project ";
  loginPage: boolean = true;
  userPage: boolean = false;
  adminPage: boolean = false;

  constructor(private _header: HeaderService) {
    this._header.loginPage.subscribe(res => {
      this.loginPage = res;
    });

    this._header.userPage.subscribe(res => {
      this.userPage = res;
    });

    this._header.adminPage.subscribe(res => {
      this.adminPage = res;
    });
  }

  ngOnInit() {
    this._header.loginPage.next(true);
  }
}
