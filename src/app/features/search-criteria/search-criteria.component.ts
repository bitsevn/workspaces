import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromSearchCriteriaActions from 'src/app/shared/states/search-criteria/search-criteria.actions';
import * as fromSearchCriteria from 'src/app/shared/states/search-criteria/search-criteria.reducer';
import { IStore } from '../../shared/interfaces/store.interface';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.scss']
})
export class SearchCriteriaComponent implements OnInit {
  searching$: Observable<boolean>;

  constructor(private store: Store<IStore>) {}

  ngOnInit() {
    this.searching$ = this.store.select(fromSearchCriteria.getSearching);
  }

  onApply(event: any) {
    this.store.dispatch(new fromSearchCriteriaActions.StartSearchAction());
    setTimeout(() => {
      this.store.dispatch(new fromSearchCriteriaActions.SearchSuccessAction(null));
    }, 1000);
  }
}
