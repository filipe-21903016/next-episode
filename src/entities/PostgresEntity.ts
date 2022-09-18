import { round } from "../dev_deps.ts";

export abstract class PostgresEntity {
    created_at: string = round(Date.now() / 1000, 0);
    updated_at: string = round(Date.now() / 1000, 0);
}