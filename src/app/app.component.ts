import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Income', url: '/transaction/income', icon: 'trending-down' },
    { title: 'Outcome', url: '/transaction/outcome', icon: 'trending-up' }
  ];
  constructor() {}
}
