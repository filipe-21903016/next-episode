export interface IRead<T> {
    findAll();
    findOne(id: string);
}