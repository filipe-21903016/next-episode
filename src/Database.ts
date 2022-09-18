import { env, Client} from "./dev_deps.ts";

class Database{
    client!: Client;
    private _connection;

    constructor(){
        this._connection = this.connect();
    }

    async connect(){
        this.client = new Client({
            database: env.POSTGRES_DB,
            hostname: env.POSTGRES_HOST,
            password: env.POSTGRES_PASSWORD,
            port: env.POSTGRES_PORT,
            user: env.POSTGRES_USER,
        });
        await this.client.connect();
    }
}

export default new Database().client;