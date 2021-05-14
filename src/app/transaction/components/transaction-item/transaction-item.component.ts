import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import { TransactionType } from '../../enums/transaction-type.enum';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionItemComponent implements OnInit {
  @Input() transaction: Transaction;
  @Output() delete = new EventEmitter<void>();

  transactionLabel: string;
  icon: string;
  dateTime: string;

  constructor(private transactionService: TransactionService) {
  }

  ngOnInit() {
    this.setLabelByType(this.transaction.type);
    this.setIconByType(this.transaction.type);
    this.formatDateTime(this.transaction.date);
  }

  setLabelByType(type: TransactionType): void {
    this.transactionLabel = type === 'INCOME' ? 'Income' : 'Expense';
  }

  setIconByType(type: TransactionType): void {
    this.icon = type === 'INCOME' ? 'trending-down' : 'trending-up';
  }

  formatDateTime(date: string): void {
    const dateTime = new Date(date);
    this.dateTime = dateTime.toLocaleTimeString('default', {hour: '2-digit', minute: '2-digit'});
  }

  deleteTransaction() {

    this.transactionService.delete(this.transaction.id);
    this.delete.emit();
  }

}
