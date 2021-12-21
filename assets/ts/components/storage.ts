/**
 * Creation of the IStorage interface to use on the abstract class
 */
interface IStorage {
    getItem(key : string): string | null;
    setItem(key: string, value: string) : void;
    removeItem(key: string): void;
}

/**
 * Creation of the abstract class which must have the properties defined in the IStorage interface
 * (here: getItem, setItem, removeItem)
 */
export default abstract class Storage<T extends string> {
    storage: IStorage;

    protected constructor(getStorage = (): IStorage => window.localStorage) {
        this.storage = getStorage();
    }

    public get(key: T): string | null {
        return this.storage.getItem(key);
    }

    public set(key: T, value: string): void {
        this.storage.setItem(key, value);
    }

    /**
     * Delete a single element in the localstorage
     * @param key
     * @protected
     */
    protected clearItem(key: T): void {
        this.storage.removeItem(key);
    }

    /**
     * Delete all data in the localstorage
     * @param keys
     * @protected
     */
    protected clearItems(keys: T[]): void {
        keys.forEach((key) => this.clearItem(key));
    }

}