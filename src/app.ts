import { Show, ShowType } from "./entities/Show.ts";
import showRepo from "./repositories/ShowRepository.ts";
import { getImageUrl, searchSeries } from "./tmdb.ts";

const jsonData = await searchSeries(Deno.args[0]);
const result = jsonData.results[0];

const show = new Show(
  result.id,
  result.name.replace('\'', ''),
  ShowType.tvshow,
  result.poster_path,
);

console.log(getImageUrl(show.image_path, "w500"));
console.log(show);

showRepo.create(show);
//const res = await showRepo.delete(show);
//let res1 = await showRepo.find();

//get server list from database

//create a thread for each server joined

//each server threads watches for episodes today
