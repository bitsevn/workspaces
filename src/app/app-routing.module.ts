import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { TreeContainerComponent } from './features/tree/tree-container.component';
import { CustomRouterStateSerializer } from './shared/root.reducer';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tree' },
  { path: 'tree', component: TreeContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), StoreRouterConnectingModule.forRoot()],
  exports: [RouterModule],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomRouterStateSerializer
    }
  ]
})
export class AppRoutingModule {}
