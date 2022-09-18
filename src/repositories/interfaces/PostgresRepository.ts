import { Client } from "../../dev_deps.ts";
import { BaseRepository } from "./BaseRepository.ts";


export abstract class PostgresRepository<PostgresEntity> implements BaseRepository<PostgresEntity>{
    abstract readonly _client : Client;

    abstract create(item: PostgresEntity): Promise<boolean>;
    abstract update(id: string,item: PostgresEntity): Promise<boolean>;
    abstract delete(item: PostgresEntity): Promise<boolean>;
    abstract find(item: PostgresEntity): Promise<PostgresEntity[]>;
    abstract findOne(id: string): Promise<PostgresEntity>; 
}