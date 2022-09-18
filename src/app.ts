import { name } from "https://deno.land/std@0.141.0/_wasm_crypto/crypto.wasm.mjs";
import { config, Client} from "./dev_deps.ts";
import { Show, ShowType } from "./entities/Show.ts";
import ShowRepository from "./repositories/ShowRepository.ts";
import { getImageUrl, searchSeries } from "./tmdb.ts";
const env = await config({
  path: "../.env",
});

let connectionParams = {
    applicationName: env.POSTGRES_APP_NAME,
    connection: {
      attempts: 1,
    },
    database: env.POSTGRES_DB,
    hostname: env.POSTGRES_HOST,
    password: env.POSTGRES_PASSWORD,
    port: env.POSTGRES_PORT,
    user: env.POSTGRES_USER
};
const client = new Client(connectionParams);


const showRepo = ShowRepository.getInstance(client);
const jsonData = await searchSeries(Deno.args[0]);
const result = jsonData.results[0];

const show = new Show(
  result.id,
  result.name,
  ShowType.tvshow,
  result.poster_path,
);

console.log(getImageUrl(show.image_path, "w500"));
console.log(show);

let res = await showRepo.create(show);
//const res = await showRepo.delete(show);
//let res1 = await showRepo.find();
console.log(res);

//get server list from database

//create a thread for each server joined

//each server threads watches for episodes today
