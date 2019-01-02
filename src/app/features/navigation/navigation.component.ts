import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from 'src/app/shared/interfaces/store.interface';
import * as fromDashboardActions from 'src/app/shared/states/dashboard/dashboard.action';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  collapsed = true;
  sidebarOpened = false;

  constructor(private store: Store<IStore>) {}

  ngOnInit() {}

  openNav() {
    document.getElementById('sidebar').style.width = '20%';
    document.getElementById('main').style.marginLeft = '20%';
    document.getElementById('folder-container').style.display = 'block';
    this.sidebarOpened = !this.sidebarOpened;
    this.notifyToggle();
  }

  closeNav() {
    document.getElementById('sidebar').style.width = '40px';
    document.getElementById('main').style.marginLeft = '40px';
    document.getElementById('folder-container').style.display = 'none';
    this.sidebarOpened = !this.sidebarOpened;
    this.notifyToggle();
  }

  notifyToggle() {
    this.store.dispatch(new fromDashboardActions.SideBarToggledAction());
  }
}
