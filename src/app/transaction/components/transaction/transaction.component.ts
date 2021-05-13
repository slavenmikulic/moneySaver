import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import { TransactionService } from '../../services/transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionType } from '../../enums/transaction-type.enum';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {
  items: Transaction[];
  amountSum: number;
  title: string;

  constructor(private transactionService: TransactionService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.items = data.items;
      this.title = data.title;

      this.amountSum = this.calculateSum(this.items);
    });
  }

  onSave(data: Transaction): void {
    const item = new Transaction(data);
    this.transactionService.insert(item);
  }

  calculateSum(items: Transaction[]): number {
    const incomes = items.filter(item => item.type === TransactionType.income);
    const expenses = items.filter(item => item.type === TransactionType.expense);

    if (incomes?.length === 0) {
      return this.transactionService.getSum(expenses);
    }

    return this.transactionService.getSum(incomes) - this.transactionService.getSum(expenses);
  }
}
