import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class LocalStorageService implements StorageService {
  get<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key));
  }

  set<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

}
