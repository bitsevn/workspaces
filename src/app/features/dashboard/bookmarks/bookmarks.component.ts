import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActionType } from 'src/app/shared/states/search-criteria/search-criteria.interface';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() bookmarkId: number;
  @Input() chartId: number;
  @Input() actionType: ActionType;
  loading = false;

  constructor() {}

  ngOnInit() {
    this.update();
  }

  ngOnChanges() {
    this.update();
  }

  update() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
