import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as root from '../shared/reducers';
import * as ui from '../shared/actions/ui-state';

import * as app from './actions/store'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSidebar$: Observable<boolean>;


  constructor(private store: Store<root.State>) {
    this.showSidebar$ = this.store.select(root.getShowSidebar);
    this.store.dispatch(new app.LoadAction())
  }

  openSidebar() {
    this.store.dispatch(new ui.OpenSidebarAction());
  }

  closeSidebar() {
    this.store.dispatch(new ui.CloseSidebarAction());
  }
}
