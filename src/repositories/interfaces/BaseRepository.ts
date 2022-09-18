import { IRead } from "./IRead.ts";
import { IWrite } from "./IWrite.ts";

export  interface BaseRepository<T> extends IWrite<T>, IRead<T>{}