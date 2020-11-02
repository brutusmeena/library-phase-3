import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HeaderService } from "../_service/header.service";
import { UserService } from "../_service/user.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  constructor(private _header: HeaderService, public service: UserService) {}

  @ViewChild("myForm") myForm: NgForm;
  userName = "";
  defaultCourse = "Angular";

  // onSubmit(form: NgForm) {
  //   console.log(this.myForm);
  // }

  defaultUser = "User";

  ngOnInit() {
    this._header.loginPage.next(true);
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      FirstName: "",
      LastName: "",
      UserName: "",
      Password: "",
      Email: "",
      ContactNo: "",
      AreYouAdmin: null
    };
  }

  onSubmit(form: NgForm) {
    console.log(this.myForm);
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.PostUser(form.value).subscribe(res => this.resetForm);
  }
}
