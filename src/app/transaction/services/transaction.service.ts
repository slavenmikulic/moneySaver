import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { BaseCrudService } from '../../core/services/base-crud.service';
import { StorageService } from '../../core/services/storage.service';
import { TransactionType } from '../enums/transaction-type.enum';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TransactionService extends BaseCrudService<Transaction> {
  key = 'transactions';

  constructor(protected storageService: StorageService) {
    super(storageService);
  }



  getIncomes(): Observable<Transaction[]> {
    return this.all().pipe(map(items => items.filter(item => item.type === TransactionType.income)));
  }

  getExpenses(): Observable<Transaction[]> {
    return this.all().pipe(map(items => items.filter(item => item.type === TransactionType.expense)));
  }

  getByLocation(location: string): Observable<Transaction[]> {
    return this.all().pipe(map(items => items.filter(item => item.location === location)));
  }

  calculateSum(items: Transaction[]): number {
    const incomes = items.filter(item => item.type === TransactionType.income);
    const expenses = items.filter(item => item.type === TransactionType.expense);

    if (incomes?.length === 0) {
      return this.getSum(expenses);
    }

    return this.getSum(incomes) - this.getSum(expenses);
  }

  getSum(transactions: Transaction[]): number {
    if (!(transactions && transactions.length)) {
      return 0;
    }

    return transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  }
}
