import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from 'src/app/shared/interfaces/store.interface';
import * as fromSearchCriteriaActions from 'src/app/shared/states/search-criteria/search-criteria.actions';
import * as fromSearchCriteria from 'src/app/shared/states/search-criteria/search-criteria.reducer';
import { ITimePeriod } from 'src/app/shared/states/time-periods/time-periods.interface';
import * as fromPeriods from 'src/app/shared/states/time-periods/time-periods.reducer';

@Component({
  selector: 'app-time-period',
  templateUrl: './time-period.component.html',
  styleUrls: ['./time-period.component.scss']
})
export class TimePeriodComponent implements OnInit {
  periods$: Observable<ITimePeriod[]>;
  period$: Observable<ITimePeriod>;
  searching$: Observable<boolean>;

  constructor(private store: Store<IStore>) {}

  ngOnInit() {
    this.periods$ = this.store.select(fromPeriods.getAllPeriods);
    this.searching$ = this.store.select(fromSearchCriteria.getSearching);
    this.store.select(fromSearchCriteria.getTimePeriodId).subscribe(periodId => {
      this.period$ = this.store.select(fromPeriods.getPeriodById(periodId));
    });
  }

  onSelect(periodId: number) {
    this.store.dispatch(new fromSearchCriteriaActions.TimePeriodChangedAction(periodId));
  }
}
