import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveDialogComponent } from './components/save-dialog/save-dialog.component';
import { CreateButtonComponent } from './components/create-button/create-button.component';
import { IonicModule, Platform } from '@ionic/angular';
import { StorageService } from './services/storage/storage.service';
import { storageFactory } from './services/storage/storage.factory';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  declarations: [
    SaveDialogComponent,
    CreateButtonComponent
  ],
  exports: [
    CreateButtonComponent,
    IonicModule
  ],
  providers: [
    {
      provide: StorageService,
      useFactory: storageFactory,
      deps: [Platform]
    }
  ]
})
export class CoreModule {
}
