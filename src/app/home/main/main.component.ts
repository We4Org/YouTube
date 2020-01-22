import { Component, OnInit } from "@angular/core";
import {
  LayoutModule,
  BreakpointObserver,
  BreakpointState,
  Breakpoints
} from "@angular/cdk/layout";
import { ScreenBreakpointService } from "src/app/services/breakpoint.service";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  constructor(
    public breakpointObserver: BreakpointObserver,
    public bp: ScreenBreakpointService
  ) {}
  breakPoint = { xs: false, sm: false, md: false };
  ngOnInit() {}

  tiles: Tile[] = [
    { text: "One", cols: 3, rows: 1, color: "lightblue" },
    { text: "Two", cols: 1, rows: 2, color: "lightgreen" },
    { text: "Three", cols: 1, rows: 1, color: "lightpink" },
    { text: "Four", cols: 2, rows: 1, color: "#DDBDF1" }
  ];
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
