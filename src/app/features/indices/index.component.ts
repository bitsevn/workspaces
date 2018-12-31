import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from 'src/app/shared/interfaces/store.interface';
import { IIndex } from 'src/app/shared/states/indices/indices.interface';
import * as fromIndices from 'src/app/shared/states/indices/indices.reducer';
import * as fromSearchCriteriaActions from 'src/app/shared/states/search-criteria/search-criteria.actions';
import * as fromSearchCriteria from 'src/app/shared/states/search-criteria/search-criteria.reducer';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  indices$: Observable<IIndex[]>;
  index$: Observable<IIndex>;
  searching$: Observable<boolean>;

  constructor(private store: Store<IStore>) {}

  ngOnInit() {
    this.indices$ = this.store.select(fromIndices.getAllIndices);
    this.searching$ = this.store.select(fromSearchCriteria.getSearching);
    this.store.select(fromSearchCriteria.getIndexId).subscribe(indexId => {
      this.index$ = this.store.select(fromIndices.getIndexById(indexId));
    });
  }

  onSelect(indexId: number) {
    this.store.dispatch(new fromSearchCriteriaActions.IndexChangedAction(indexId));
  }
}
