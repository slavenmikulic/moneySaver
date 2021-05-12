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
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.prepareForm();
  }

  prepareForm() {
    this.form = new FormGroup({
      type: new FormControl(TransactionType.expense),
      name: new FormControl(''),
      amount: new FormControl(0),
      location: new FormControl(''),
      date: new FormControl(),
    });
  }

  saveData() {
    this.modalController.dismiss(this.form.value);
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
