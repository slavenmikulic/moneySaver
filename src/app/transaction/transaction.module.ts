import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './index/transaction.component';
import { CoreModule } from '../core/core.module';
import { IncomeResolver } from './resolver/income.resolver';
import { TransactionService } from './services/transaction.service';
import { ExpenseResolver } from './resolver/expense.resolver';
import { TransactionResolver } from './resolver/transaction.resolver';
import { TransactionItemComponent } from './transaction-item/transaction-item.component';
import { TransactionLocationResolver } from './resolver/transaction-location.resolver';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    TransactionComponent,
    TransactionItemComponent
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
