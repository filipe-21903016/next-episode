import { Client } from "../dev_deps.ts";
import { IRead } from "./IRead.ts";
import { IWrite } from "./IWrite.ts";


export interface PostgresRepository<T> extends IWrite<T>, IRead<T>{
    readonly _client : Client;
}