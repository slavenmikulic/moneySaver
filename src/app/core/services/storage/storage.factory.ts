import { AndroidStorageService } from './android-storage.service';
import { LocalStorageService } from './local-storage.service';
import { Platform } from '@ionic/angular';

export const storageFactory = (platform: Platform) => {
  if (platform.is('android')) {
    return new AndroidStorageService();
  }

  return new LocalStorageService();
};

