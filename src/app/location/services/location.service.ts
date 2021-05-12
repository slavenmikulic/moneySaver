import { Injectable } from '@angular/core';
import { StorageService } from '../../core/services/storage/storage.service';
import { Transaction } from '../../transaction/models/transaction.model';

@Injectable()
export class LocationService {
  constructor(private storageService: StorageService) {
  }

  all(): string[] {
    const transactions = (this.storageService.get('transactions') || []) as Transaction[];
    const locations = transactions.map(transaction => transaction.location);

    return [... new Set(locations)];
  }
}
