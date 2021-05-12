import { StorageService } from './services/storage/storage.service';
import { Storage } from '@ionic/storage-angular';
import { APP_INITIALIZER } from '@angular/core';

export const STORAGE_INITIALIZER = [
  StorageService,
  {
    provide: APP_INITIALIZER,
    useFactory: (storage: Storage, storageService: StorageService) => () => storageService.init(storage),
    deps: [Storage, StorageService],
    multi: true
  }
];
