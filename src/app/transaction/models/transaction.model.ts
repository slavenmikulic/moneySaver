export class Transaction {
  date: Date;
  amount: number;
  location: string;
  name: string;
  isIncome: boolean;

  constructor(init?: Partial<Transaction>) {
    Object.assign(this, init);
  }
}
