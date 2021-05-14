import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import { TransactionService } from '../../services/transaction.service';
import { ActivatedRoute } from '@angular/router';
import { MonthTransactionService } from '../../services/month-transaction.service';
import { MonthTransaction } from '../../models/month-transaction.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {
  monthTransactions: MonthTransaction[];
  amountSum: string;
  title: string;
  transactions: Transaction[];

  constructor(private transactionService: TransactionService,
              private monthTransactionService: MonthTransactionService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.title = data.title;

      this.transactions = data.items;
      this.initData(this.transactions);
    });
  }

  initData(items: Transaction[]): void {
    this.monthTransactions = this.monthTransactionService.groupTransactionsByMonth(items);
    this.amountSum = this.transactionService.calculateSum(items);
  }

  onSave(data: Transaction): void {
    const item = new Transaction(data);
    item.id = this.transactionService.generateId();
    this.transactionService.insert(item);

    this.initData(this.transactions);
  }
}
