import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './index/transaction.component';
import { NgModule } from '@angular/core';
import { IncomeResolver } from './resolver/income.resolver';
import { ExpenseResolver } from './resolver/expense.resolver';
import { TransactionResolver } from './resolver/transaction.resolver';
import { TransactionLocationResolver } from './resolver/transaction-location.resolver';

const routes: Routes = [
  {
    path: '',
    component:  TransactionComponent,
    pathMatch: 'full',
    resolve: {
      items: TransactionResolver
    },
    data: {
      title: 'All'
    }
  },
  {
    path: 'incomes',
    component: TransactionComponent,
    resolve: {
      items: IncomeResolver
    },
    data: {
      title: 'Income'
    }
  },
  {
    path: 'expenses',
    component: TransactionComponent,
    resolve: {
      items: ExpenseResolver
    },
    data: {
      title: 'Expense'
    }
  },
  {
    path: ':location',
    component: TransactionComponent,
    resolve: {
      items: TransactionLocationResolver
    },
    data: {
      title: 'Location'
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
