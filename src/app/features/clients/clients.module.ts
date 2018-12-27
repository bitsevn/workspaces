import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientComponent } from "./client.component";

@NgModule({
  declarations: [ClientComponent],
  exports: [ClientComponent],
  imports: [CommonModule]
})
export class ClientsModule {}
