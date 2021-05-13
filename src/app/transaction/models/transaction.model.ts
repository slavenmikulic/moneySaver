import { TransactionType } from '../enums/transaction-type.enum';

export class Transaction {
  date: string;
  amount: number;
  location: string;
  name: string;
  type: TransactionType;

  constructor(init?: Partial<Transaction>) {
    Object.assign(this, init);

    if (init.date) {
      this.date = init.date.toLowerCase();
    }
  }
}
