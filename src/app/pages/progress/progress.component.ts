import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["./progress.component.css"]
})
export class ProgressComponent implements OnInit {
  porcentBlue: number = 50;
  porcentGreen: number = 20;

  constructor() {}

  ngOnInit() {}


}
