import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { TransactionType } from '../enums/transaction-type.enum';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionItemComponent implements OnInit {
  @Input() item: Transaction;

  transactionLabel: string;
  icon: string;
  dateTime: string;

  constructor() {
  }

  ngOnInit() {
    this.setLabelByType(this.item.type);
    this.setIconByType(this.item.type);
    this.formatDateTime(this.item.date);
  }

  setLabelByType(type: TransactionType): void {
    this.transactionLabel = type === 'INCOME' ? 'Income' : 'Expense';
  }

  setIconByType(type: TransactionType): void {
    this.icon = type === 'INCOME' ? 'trending-down' : 'trending-up';
  }

  formatDateTime(date: string): void {
    const dateTime = new Date(date);
    this.dateTime = dateTime.toDateString();
  }

}
