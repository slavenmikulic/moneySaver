import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TransactionType } from '../../../transaction/enums/transaction-type.enum';

@Component({
  templateUrl: './save-dialog.component.html',
  styleUrls: ['./save-dialog.component.scss'],
})
export class SaveDialogComponent implements OnInit {
  form: FormGroup;
  transactionType = TransactionType;

  constructor(private modalController: ModalController) {
  }

  ngOnInit(): void {
    this.prepareForm();
  }

  prepareForm(): void {
    this.form = new FormGroup({
      type: new FormControl(TransactionType.expense),
      name: new FormControl(''),
      amount: new FormControl(),
      location: new FormControl(''),
      date: new FormControl(new Date().toLocaleString()),
    });

  }

  saveData(): void {
    this.modalController.dismiss(this.form.value);
  }

  dismiss(): void {
    this.modalController.dismiss();
  }
}
