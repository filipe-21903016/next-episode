import { PostgresEntity } from "./PostgresEntity.ts";

export enum ShowType{
    tvshow,
    movie,
}

export class Show extends PostgresEntity{
    id: number;
    name: string;
    show_type: ShowType;
    image_path: string;

    constructor (id: number, name: string, show_type: ShowType, image_path: string){
        super()
        this.id = id;
        this.name = name;
        this.show_type = show_type;
        this.image_path = image_path;
    }
}