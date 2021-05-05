import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './index/transaction.component';
import { NgModule } from '@angular/core';
import { IncomeResolver } from './resolver/income.resolver';
import { OutcomeResolver } from './resolver/outcome.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'income'
  },
  {
    path: 'income',
    component: TransactionComponent,
    resolve: {
      items: IncomeResolver
    },
    data: {
      title: 'Income'
    }
  },
  {
    path: 'outcome',
    component: TransactionComponent,
    resolve: {
      items: OutcomeResolver
    },
    data: {
      title: 'Outcome'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TransactionRoutingModule {
}
