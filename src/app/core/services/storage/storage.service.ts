export abstract class StorageService {
  abstract set<T>(key: string, value: T);

  abstract get<T>(key: string): T;
}
