import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './components/transaction/transaction.component';
import { CoreModule } from '../core/core.module';
import { IncomeResolver } from './resolvers/income.resolver';
import { TransactionService } from './services/transaction.service';
import { ExpenseResolver } from './resolvers/expense.resolver';
import { TransactionResolver } from './resolvers/transaction.resolver';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { TransactionLocationResolver } from './resolvers/transaction-location.resolver';
import { IonicModule } from '@ionic/angular';
import { TransactionHeaderComponent } from './components/transaction-header/transaction-header.component';



@NgModule({
  declarations: [
    TransactionComponent,
    TransactionItemComponent,
    TransactionHeaderComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    TransactionRoutingModule,
    IonicModule
  ],
  providers: [
    TransactionService,
    IncomeResolver,
    ExpenseResolver,
    TransactionResolver,
    TransactionLocationResolver
  ]
})
export class TransactionModule { }
