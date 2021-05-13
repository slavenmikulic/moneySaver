import { Transaction } from '../models/transaction.model';
import { MonthTransaction } from '../models/month-transaction.model';


export class MonthTransactionService {
  groupTransactionsByMonth(items: Transaction[]): MonthTransaction[] {
    const monthTransactions: MonthTransaction[] = [];

    for (const item of items) {
      const date = this.formatDate(new Date(item.date));

      const monthTransaction = this.findByDate(monthTransactions, date);
      if (monthTransaction) {
        monthTransaction.transactions.push(item);
        continue;
      }

      monthTransactions.push(
        new MonthTransaction({
          date,
          transactions: [item]
        }));
    }

    return monthTransactions;
  }

  protected findByDate(monthTransactions: MonthTransaction[], date: string): MonthTransaction | null {
    return monthTransactions?.find(monthTransaction => monthTransaction.date === date);
  }

  protected formatDate(date: Date): string {
    const month = date.toLocaleString('default', {month: 'long'});
    return `${month}/${date.getFullYear()}`;
  }
}
