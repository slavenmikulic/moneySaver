import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class AndroidStorageService implements StorageService {
  get<T>(key: string): T {
    return null;
  }

  set<T>(key: string, value: T) {
  }
}
