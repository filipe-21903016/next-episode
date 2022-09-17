import { getMovieById, getSeriesById, getImageUrl } from "./tmdb.ts";
const id = 123;

const jsonData = await getSeriesById(id);
console.log(getImageUrl(jsonData["backdrop_path"], "w500"));

//console.log(jsonData);