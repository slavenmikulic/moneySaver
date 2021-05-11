import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss'],
})
export class TransactionItemComponent implements OnInit {
  @Input() item: Transaction;
  transactionLabel: string;
  icon: string;

  constructor() {
  }

  ngOnInit() {
    this.transactionLabel = this.item.type === 'INCOME' ? 'Income' : 'Expense';
    this.icon = this.item.type === 'INCOME' ? 'trending-down' : 'trending-up';
  }

}
