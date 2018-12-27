import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import * as fromSearchCriteria from "../../shared/states/search-criteria/search-criteria.reducer";
import { EffectsModule } from "@ngrx/effects";
import { SearchCriteriaEffects } from "../../shared/states/search-criteria/search-criteria.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("searchCriteria", fromSearchCriteria.reducer),
    EffectsModule.forFeature([SearchCriteriaEffects])
  ]
})
export class SearchCriteriaStoreModule {}
