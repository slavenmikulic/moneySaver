import { StorageService } from './storage/storage.service';
import { Observable, of } from 'rxjs';
import { filter, find, take } from 'rxjs/operators';

export class BaseCrudService<T> {
  key: string;
  protected items: T[];

  constructor(protected storageService: StorageService) {
  }

  all(forceReload = false): T[] {
    if (this.items?.length && !forceReload) {
      return this.items;
      // return of(this.items).pipe(take(1));
    }

    return this.storageService.get(this.key) || [];

    // return of(this.items).pipe(take(1));
  }

  insert(item: T): void {

  const items = this.all();
    items.push(item);
    this.storageService.set(this.key, items);
  }

  update(index: number, item: T): void {
    const items = this.all();
    items[index] = item;
    this.storageService.set(this.key, items);
  }

  delete(index: number) {
    const items = this.all();
    items.splice(index, 1);
    this.storageService.set(this.key, items);
  }

  get(index: number): T {
    const items = this.all();
    return items[index];
  }
}
