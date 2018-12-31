import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from 'src/app/shared/interfaces/store.interface';
import * as fromSearchCriteriaActions from 'src/app/shared/states/search-criteria/search-criteria.actions';
import * as fromSearchCriteria from 'src/app/shared/states/search-criteria/search-criteria.reducer';
import { IWorkspace } from 'src/app/shared/states/workspaces/workspaces.interface';
import * as fromWorkspaces from 'src/app/shared/states/workspaces/workspaces.reducer';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  workspaces$: Observable<IWorkspace[]>;

  workspace$: Observable<IWorkspace>;

  searching$: Observable<boolean>;

  constructor(private store: Store<IStore>) {}

  ngOnInit() {
    this.workspaces$ = this.store.select(fromWorkspaces.getAllWorkspaces);
    this.searching$ = this.store.select(fromSearchCriteria.getSearching);
    this.store.select(fromSearchCriteria.getWorkspaceId).subscribe(workspaceId => {
      this.workspace$ = this.store.select(fromWorkspaces.getWorkspaceById(workspaceId));
    });
  }

  onSelect(workspaceId: number) {
    this.store.dispatch(new fromSearchCriteriaActions.WorkspaceChangedAction(workspaceId));
  }
}
