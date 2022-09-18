export interface IWrite<T> {
    create(item: T);
    update(id: string, item: T);
    delete(item: T);
}