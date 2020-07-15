import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-channel-description",
  templateUrl: "./channel-description.component.html",
  styleUrls: ["./channel-description.component.css"],
})
export class ChannelDescriptionComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((param) => {
      console.log(param.get("id"));
    });
  }

  ngOnInit() {}
}
