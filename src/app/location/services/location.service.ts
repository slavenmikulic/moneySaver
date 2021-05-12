import { Injectable } from '@angular/core';
import { StorageService } from '../../core/services/storage/storage.service';
import { Transaction } from '../../transaction/models/transaction.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class LocationService {
  constructor(private storageService: StorageService) {
  }

  all(): Observable<string[]> {
    return this.storageService.get('transactions').pipe(
      map((items: Transaction[]) => items.map(item => item.location)),
      map((locations: string[]) => [...new Set(locations)]));
  }
}
