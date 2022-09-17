import { getMovieById, getSeriesById, getImageUrl, searchMovie, searchSeries } from "./tmdb.ts";
const id = 123;

let jsonData = await getSeriesById(id);

jsonData = await searchSeries("shehulk");

for (let result of jsonData.results){
    console.log(`${result.name}\n${result.id}\n`);
}
