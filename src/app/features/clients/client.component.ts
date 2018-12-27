import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { IClientState } from "src/app/shared/states/clients/clients.interface";
import { IStore } from "src/app/shared/interfaces/store.interface";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"]
})
export class ClientComponent implements OnInit {
  constructor(private store: Store<IStore>) {}

  ngOnInit() {
    this.store
      .select(state => state.clients)
      .subscribe(state => console.log("client state", state));
  }
}
