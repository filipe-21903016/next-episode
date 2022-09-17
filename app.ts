import { getMovieById, getSeriesById, getImageUrl, searchMovie } from "./tmdb.ts";
const id = 123;

let jsonData = await getSeriesById(id);

jsonData = await searchMovie("Avengers");
//console.log(jsonData.results);

for (let result of jsonData.results){
    console.log(`${result.title}\n${result.id}\n`);
}
