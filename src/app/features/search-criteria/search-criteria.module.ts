import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchCriteriaComponent } from "./search-criteria.component";

@NgModule({
  declarations: [SearchCriteriaComponent],
  exports: [SearchCriteriaComponent],
  imports: [CommonModule]
})
export class SearchCriteriaModule {}
