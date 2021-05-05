import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SaveDialogComponent } from '../save-dialog/save-dialog.component';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.scss'],
})
export class CreateButtonComponent implements OnInit {
  @Output() saved = new EventEmitter<any>();

  constructor(private modalController: ModalController) {
  }

  ngOnInit() {
  }

  async openCreate() {
    const modal = await this.modalController.create({
      component: SaveDialogComponent
    });

    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
      this.saved.emit(data);
    }
  }
}
