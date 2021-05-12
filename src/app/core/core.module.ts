import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveDialogComponent } from './components/save-dialog/save-dialog.component';
import { CreateButtonComponent } from './components/create-button/create-button.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
  ],
  declarations: [
    SaveDialogComponent,
    CreateButtonComponent
  ],
  exports: [
    IonicModule,
    CreateButtonComponent
  ],
  providers: [
  ]
})
export class CoreModule {
}
