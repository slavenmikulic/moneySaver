import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { BaseCrudService } from '../../core/services/base-crud.service';
import { StorageService } from '../../core/services/storage/storage.service';
import { TransactionType } from '../enums/transaction-type.enum';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TransactionService extends BaseCrudService<Transaction> {
  key = 'transactions';

  constructor(protected storageService: StorageService) {
    super(storageService);
  }

  getSum(incomes: Transaction[]): number {
    if (!(incomes && incomes.length)) {
      return 0;
    }

    return incomes.reduce((sum, income) => sum + income.amount, 0);
  }

  getIncomes(): Observable<Transaction[]> {
    return this.all().pipe(map(items => items.filter(item => item.type === TransactionType.income)));
  }

  getOutcomes(): Observable<Transaction[]> {
    return this.all().pipe(map(items => items.filter(item => item.type === TransactionType.expense)));
  }

  getByLocation(location: string): Observable<Transaction[]> {
    return this.all().pipe(map(items => items.filter(item => item.location === location)));
  }
}
