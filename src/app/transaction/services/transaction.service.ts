import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { BaseCrudService } from '../../core/services/base-crud.service';
import { StorageService } from '../../core/services/storage/storage.service';
import { TransactionType } from '../models/transaction-type.enum';

@Injectable()
export class TransactionService extends BaseCrudService<Transaction> {
  key = 'transactions';

  constructor(protected storageService: StorageService) {
    super(storageService);
  }

  getSum(incomes: Transaction[]): number {
    return incomes.reduce((sum, income) => sum + income.amount, 0);
  }

  getIncomes(): Transaction[] {
    return this.all().filter(item => item.type === TransactionType.income);
  }

  getOutcomes(): Transaction[] {
    return this.all().filter(item => item.type === TransactionType.expense);
  }
}
