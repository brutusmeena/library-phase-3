import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class HeaderService {
  constructor() {}

  loginPage = new BehaviorSubject(false);
  userPage = new BehaviorSubject(false);
  adminPage = new BehaviorSubject(false);
}
