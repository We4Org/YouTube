import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
  selector: "app-main"
})
export class MainComponent implements OnInit {
  rows: Array<string>;
  public text =
    "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.";
  constructor() {
    this.rows = Array(40).fill(true);
  }

  ngOnInit() {}
}
