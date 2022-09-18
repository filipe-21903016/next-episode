import { round } from "../dev_deps.ts";

export enum ShowType{
    tvshow,
    movie,
}

export class Show{
    id: number;
    name: string;
    show_type: ShowType;
    image_path: string;
    created_at: string;
    updated_at: string;

    constructor (id: number, name: string, show_type: ShowType, image_path: string){
        this.id = id;
        this.name = name;
        this.show_type = show_type;
        this.image_path = image_path;
        this.created_at = round(Date.now() / 1000, 0);
        this.updated_at = round(Date.now() / 1000, 0);
    }
}