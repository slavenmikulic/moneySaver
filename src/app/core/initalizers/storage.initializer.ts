import { StorageService } from '../services/storage.service';
import { Storage } from '@ionic/storage-angular';
import { APP_INITIALIZER, Provider } from '@angular/core';

export const STORAGE_INITIALIZER = [
  StorageService,
  {
    provide: APP_INITIALIZER,
    useFactory: (storage: Storage, storageService: StorageService) => () => storageService.init(storage),
    deps: [Storage, StorageService],
    multi: true
  }
];
