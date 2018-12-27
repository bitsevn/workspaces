import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  collapsed: boolean = true;
  sidebarOpened: boolean = false;

  constructor() {}

  ngOnInit() {}

  openNav() {
    document.getElementById("sidebar").style.width = "20%";
    document.getElementById("main").style.marginLeft = "20%";
    document.getElementById("folder-container").style.display = "block";
    this.sidebarOpened = !this.sidebarOpened;
  }

  closeNav() {
    document.getElementById("sidebar").style.width = "40px";
    document.getElementById("main").style.marginLeft = "40px";
    document.getElementById("folder-container").style.display = "none";
    this.sidebarOpened = !this.sidebarOpened;
  }
}
