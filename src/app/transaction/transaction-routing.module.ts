import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './components/transaction/transaction.component';
import { NgModule } from '@angular/core';
import { IncomeResolver } from './resolvers/income.resolver';
import { ExpenseResolver } from './resolvers/expense.resolver';
import { TransactionResolver } from './resolvers/transaction.resolver';
import { TransactionLocationResolver } from './resolvers/transaction-location.resolver';

const routes: Routes = [
  {
    path: '',
    component:  TransactionComponent,
    pathMatch: 'full',
    runGuardsAndResolvers: 'always',
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
    runGuardsAndResolvers: 'always',
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
    runGuardsAndResolvers: 'always',
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
    runGuardsAndResolvers: 'always',
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
