import { Component, OnInit } from "@angular/core";
import { HeaderService } from "../_service/header.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private _header: HeaderService) {}

  ngOnInit() {
    this._header.loginPage.next(true);
  }
}
