import { TransactionType } from '../enums/transaction-type.enum';
import { Base } from '../../core/models/base.model';

export class Transaction implements Base {
  id: number;
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
