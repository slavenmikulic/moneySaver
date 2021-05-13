import { Transaction } from './transaction.model';

export class MonthTransaction {
  date: string;
  transactions: Transaction[];

  constructor(init?: Partial<MonthTransaction>) {
    Object.assign(this, init);
  }
}
