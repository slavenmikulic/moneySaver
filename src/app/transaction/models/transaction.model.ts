import { TransactionType } from '../enums/transaction-type.enum';

export class Transaction {
  date: Date;
  amount: number;
  location: string;
  name: string;
  type: TransactionType;

  constructor(init?: Partial<Transaction>) {
    Object.assign(this, init);
  }
}
