import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../shared/interfaces/store.interface';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.scss']
})
export class SearchCriteriaComponent implements OnInit {
  constructor(private store: Store<IStore>) {}

  ngOnInit() {
    this.store
      .select(state => state.searchCriteria)
      .subscribe(state => console.log('search criteria state', state));
  }
}
