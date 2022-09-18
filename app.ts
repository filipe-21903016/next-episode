import { config, Database, Relationships, PostgresConnector} from "./dev_deps.ts";
import {Server} from "./models/Server.ts";
import {Show} from "./models/Show.ts";
const env = await config();

/*
const id = 123;
let jsonData = await getSeriesById(id);
jsonData = await searchSeries("shehulk");

for (let result of jsonData.results){
    console.log(`${result.name}\n${result.id}\n`);
}
*/

//connect to database
const connector = new PostgresConnector({
    database: env.POSTGRES_DB,
    host: "127.0.0.1",
    username: env.POSTGRES_USER,
    password: env.POSTGRES_PASSWORD,
    port: Number(env.POSTGRES_PORT)
});
const db = new Database(connector);


const ServerShow = Relationships.manyToMany(Server, Show);
db.link([ServerShow,Server,Show]);
db.sync({drop:true});

//bind them
/*await ServerShow.create([
    {serverId: server.id, showId: show.id},
])*/


//get server list from database

//create a thread for each server joined

//each server threads watches for episodes today
