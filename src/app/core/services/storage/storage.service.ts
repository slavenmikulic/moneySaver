import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';


export class StorageService {
  private storage: Storage | null = null;

  constructor() {
  }

  async init(storageAngular: Storage): Promise<Storage> {
    return storageAngular.create().then(storage => this.storage = storage);
  }

  set<T>(key: string, value: T): Promise<any> {
    return this.storage.set(key, value);
  }

  get<T>(key: string): Observable<T[]> {
    return fromPromise(this.storage.get(key)).pipe(map(items => {
      if (items) {
        return items;
      }

      return [];
    }));
  }
}
