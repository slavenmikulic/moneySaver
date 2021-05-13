import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transaction-header',
  templateUrl: './transaction-header.component.html',
  styleUrls: ['./transaction-header.component.scss'],
})
export class TransactionHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() amountSum$: Observable<number>;

  constructor() { }

  ngOnInit() {}

}
