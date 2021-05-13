import { StorageService } from './storage.service';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export class BaseCrudService<T> {
  key: string;
  protected items: T[];

  constructor(protected storageService: StorageService) {
  }

  all(forceReload = false): Observable<T[]> {
    if (this.items?.length && !forceReload) {
      return of(this.items);
    }

    return this.storageService.get<T>(this.key).pipe(
      tap(items => this.items = items)
    );
  }

  insert(item: T): void {
    this.all().subscribe(() => {
      this.items.push(item);
      this.storageService.set(this.key, this.items).catch(console.log);
    });
  }

  update(index: number, item: T): void {
    this.items[index] = item;
    this.storageService.set(this.key, this.items).catch(console.log);
  }

  delete(index: number): void {
    this.all().subscribe(() => {
      this.items.splice(index, 1);
      this.storageService.set(this.key, this.items).catch(console.log);
    });
  }

  get(index: number): Observable<T> {
    return this.all().pipe(map(items => items[index]));
  }
}
