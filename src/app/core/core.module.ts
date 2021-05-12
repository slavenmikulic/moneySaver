import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveDialogComponent } from './components/save-dialog/save-dialog.component';
import { CreateButtonComponent } from './components/create-button/create-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  declarations: [
    SaveDialogComponent,
    CreateButtonComponent
  ],
  exports: [
    CreateButtonComponent
  ],
  providers: [
  ]
})
export class CoreModule {
}
