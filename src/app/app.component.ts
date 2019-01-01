import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from './shared/interfaces/store.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'workspaces';

  constructor(private store: Store<IStore>) {}

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //this.store.select(state => state).subscribe(state => console.log('app state', state));
  }
}
