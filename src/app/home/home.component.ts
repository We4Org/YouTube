import { Component, OnInit } from "@angular/core";
import { SideNavService } from "../services/side-nav.service";
import {
  onSideNavChange,
  onMainContentChange
} from "../animation/nav-animaiton";
import { ScreenBreakpointService } from "../services/breakpoint.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [onSideNavChange, onMainContentChange]
})
export class HomeComponent implements OnInit {
  constructor(
    public navService: SideNavService,
    public bp: ScreenBreakpointService
  ) {}

  ngOnInit() {}
}
