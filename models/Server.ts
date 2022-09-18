import {Model, DataTypes} from "../dev_deps.ts"
import {Show} from "./Show.ts"

export class Server extends Model{
    static table = 'servers';
    static timestamps = true;
    static fields = {
        server_id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        discord_id: DataTypes.STRING,
        channel_id: DataTypes.STRING,
    };
    static shows() {
        return this.hasMany(Show);
    }
}