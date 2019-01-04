import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { BuilderComponent } from './features/builder/builder.component';
import { CustomRouterStateSerializer } from './shared/root.reducer';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'builder' },
  { path: 'builder', component: BuilderComponent }
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
