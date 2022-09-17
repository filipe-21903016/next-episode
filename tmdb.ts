import {config} from "./dev_deps.ts";
const env = await config();

export async function getMovieById(movieId: number){
    const uri = `${env["TMDB_ENDPOINT"]}/movie/${movieId}?api_key=${env["TMDB_API"]}`;
    const jsonResponse = await fetch(uri);
    const movieData = await jsonResponse.json()
    return movieData;
}

export async function getSeriesById(seriesId: number){
    const uri = `${env["TMDB_ENDPOINT"]}/tv/${seriesId}?api_key=${env["TMDB_API"]}`;
    const jsonResponse = await fetch(uri);
    const movieData = await jsonResponse.json()
    return movieData;
}

export function getImageUrl(filePath: String, fileSize:String){
    return `${env["TMDB_IMAGE_ENDPOINT"]}/${fileSize}${filePath}`
}