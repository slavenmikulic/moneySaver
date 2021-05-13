import { StorageService } from './storage.service';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Base } from '../models/base.model';

export class BaseCrudService<T extends Base> {
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

  delete(id: number): void {
    this.all().subscribe(() => {
      const index = this.items.findIndex((item) => item.id === id);
      this.items.splice(index, 1);

      this.storageService.set(this.key, this.items).catch(console.log);
    });
  }

  get(index: number): Observable<T> {
    return this.all().pipe(map(items => items[index]));
  }


  generateId(base = 1): number {
    let id = this.items.length + base;
    if (this.items.find(item => item.id === id)) {
      id = this.generateId(id + 1);
    }

    return id;
  }
}
