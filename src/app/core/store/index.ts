import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { metaReducers, reducers } from '../../shared/root.reducer';
import { BookmarkFoldersStoreModule } from './bookmark-folders-store.module';
import { ClientsStoreModule } from './clients-store.module';
import { DashboardStoreModule } from './dashboard-store.module';
import { FundsStoreModule } from './funds-store.module';
import { IndicesStoreModule } from './indices-store.module';
import { LayoutsStoreModule } from './layouts-store.module';
import { SearchCriteriaStoreModule } from './search-criteria-store.module';
import { TimePeriodsStoreModule } from './time-periods-store.module';
import { UserPrefsStoreModule } from './user-prefs-store.module';
import { WorkspacesStoreModule } from './workspaces-store.module';

const instruments = !environment.production ? [StoreDevtoolsModule.instrument({ maxAge: 50 })] : [];

const rootStoreModules = [
  StoreModule.forRoot(reducers, { metaReducers }),
  EffectsModule.forRoot([]),
  instruments
];

const featureStoreModules = [
  WorkspacesStoreModule,
  LayoutsStoreModule,
  ClientsStoreModule,
  SearchCriteriaStoreModule,
  FundsStoreModule,
  IndicesStoreModule,
  TimePeriodsStoreModule,
  BookmarkFoldersStoreModule,
  UserPrefsStoreModule,
  DashboardStoreModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...rootStoreModules, ...featureStoreModules]
})
export class RootStoreModule {}
