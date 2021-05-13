import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import { TransactionService } from '../../services/transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {
  items: Transaction[];
  amountSum$: Observable<number>;
  title: string;

  constructor(private transactionService: TransactionService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.items = data.items;

      this.amountSum$ = this.calculateSum();
      this.title = data.title;
    });
  }

  onSave(data: Transaction): void {
    const item = new Transaction(data);
    this.transactionService.insert(item);
  }

  calculateSum() {
    return forkJoin([this.transactionService.getIncomes(), this.transactionService.getExpenses()]).pipe(
      map(response => ({
        incomes: response[0],
        expenses: response[1]
      })),
      map(response => {
        const incomesSum = this.transactionService.getSum(response.incomes);
        const expensesSum = this.transactionService.getSum(response.expenses);

        return incomesSum - expensesSum;
      })
    );
  }
}
