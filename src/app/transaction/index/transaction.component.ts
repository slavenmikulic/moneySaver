import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { TransactionService } from '../services/transaction.service';
import { ActivatedRoute } from '@angular/router';
import { TransactionType } from '../models/transaction-type.enum';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {
  items: Transaction[];
  amountSum: number;
  title: string;

  constructor(private transactionService: TransactionService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.items = data.items;
      this.amountSum = this.transactionService.getSum(this.items);
      this.title = data.title;
    });
  }

  onSave(data: Transaction): void {
    const item = new Transaction(data);
    item.type = TransactionType.income;
    this.transactionService.insert(item);
  }
}
