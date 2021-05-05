import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './index/transaction.component';
import { CoreModule } from '../core/core.module';
import { IncomeResolver } from './resolver/income.resolver';
import { TransactionService } from './services/transaction.service';
import { OutcomeResolver } from './resolver/outcome.resolver';



@NgModule({
  declarations: [
    TransactionComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    TransactionRoutingModule
  ],
  providers: [
    TransactionService,
    IncomeResolver,
    OutcomeResolver
  ]
})
export class TransactionModule { }
