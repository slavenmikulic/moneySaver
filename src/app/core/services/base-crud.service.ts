import { StorageService } from './storage/storage.service';

export class BaseCrudService<T> {
  key: string;
  protected items: T[];

  constructor(protected storageService: StorageService) {
  }

  all(forceReload = false): T[] {
    if (this.items?.length && !forceReload) {
      return this.items;
    }

    this.items = this.storageService.get(this.key) || [];
    return this.items;
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
