import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Transaction } from '../models/transaction.model';
import { Observable } from 'rxjs';
import { TransactionService } from '../services/transaction.service';

@Injectable({
  providedIn: 'root'
})
export class IncomeResolver implements Resolve<Transaction[]> {
  constructor(private transactionService: TransactionService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Transaction[]> | Promise<Transaction[]> | Transaction[] {
    return this.transactionService.getIncomes();
  }

}
