import {config} from "./dev_deps.ts";
const env = await config();

export async function getMovieById(movieId: number){
    const uri = `${env["TMDB_ENDPOINT"]}/movie/${movieId}?api_key=${env["TMDB_API"]}`;
    const jsonResponse = await fetch(uri);
    const movieData = await jsonResponse.json();
    return movieData;
}

export async function getSeriesById(seriesId: number){
    const uri = `${env["TMDB_ENDPOINT"]}/tv/${seriesId}?api_key=${env["TMDB_API"]}`;
    const jsonResponse = await fetch(uri);
    const movieData = await jsonResponse.json();
    return movieData;
}

export function getImageUrl(filePath: string, fileSize:string){
    return `${env["TMDB_IMAGE_ENDPOINT"]}/${fileSize}${filePath}`;
}

export async function searchMovie(query: string){
    const uri = `${env["TMDB_ENDPOINT"]}/search/movie?api_key=${env["TMDB_API"]}&query=${query}`;
    const jsonResponse = await fetch(uri);
    const queryResults = await jsonResponse.json();
    return queryResults;
}

export async function searchSeries(query: string){
    const uri = `${env["TMDB_ENDPOINT"]}/search/tv?api_key=${env["TMDB_API"]}&query=${query}`;
    const jsonResponse = await fetch(uri);
    const queryResults = await jsonResponse.json();
    return queryResults;
}