import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HeaderService } from "../_service/header.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private _header: HeaderService) {}

  ngOnInit() {
    this._header.loginPage.next(true);
  }

  @ViewChild("myForm") myForm: NgForm;
  userName = "";
  defaultCourse = "Angular";

  onSubmit(form: NgForm) {
    console.log(this.myForm);
  }
}
