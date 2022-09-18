import {Model, DataTypes} from "../dev_deps.ts"
import {Server} from "./Server.ts"

export class Show extends Model{
    static table = 'shows';
    static timestamps = true;
    static fields = {
        show_id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        tmdb_id: DataTypes.STRING,
        show_type: {
            type: DataTypes.ENUM,
            values: ["tvshow", "movie"],
        },
    };
    static servers() {
        return this.hasMany(Server);
    }
}