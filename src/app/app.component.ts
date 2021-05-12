import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'All', url: '/transaction', icon: 'wallet'},
    {title: 'Incomes', url: '/transaction/incomes', icon: 'trending-down'},
    {title: 'Expenses', url: '/transaction/expenses', icon: 'trending-up'},
    {title: 'Location', url: '/location', icon: 'location'}
  ];

  constructor() {
  }
}
