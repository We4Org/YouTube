import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

import { ApiService } from "../api.service";
import { Example } from "./Example";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private _apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public params: number;
  public technologies: Array<string> = ["Angular", "React", "Vue", "Vanilla"];
  public userModel = new Example("", "", "", "default", "", false);

  @Input() childData: string;

  @Output() public events = new EventEmitter();

  sendMessage() {
    this.events.emit("hey bro");
  }

  goToHome() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.params = parseInt(params.get("id"));
    });
  }

  handleSubmit() {
    this._apiService.login(this.userModel).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }
}
