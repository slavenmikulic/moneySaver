import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionListComponent implements OnInit {
  @Input() transactions: Transaction[];

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(transaction: Transaction): void {
    const index = this.transactions.findIndex(item => item.id === transaction.id);
    this.transactions.splice(index, 1);
  }

}
