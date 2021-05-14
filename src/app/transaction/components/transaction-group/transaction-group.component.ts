import { Component, Input, OnInit } from '@angular/core';
import { MonthTransaction } from '../../models/month-transaction.model';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-group',
  templateUrl: './transaction-group.component.html',
  styleUrls: ['./transaction-group.component.scss'],
})
export class TransactionGroupComponent implements OnInit {
  @Input() monthTransaction: MonthTransaction;
  amount: string;

  constructor(private transactionService: TransactionService) {
  }

  ngOnInit(): void {
    this.amount = this.transactionService.calculateSum(this.monthTransaction.transactions);
  }

}
