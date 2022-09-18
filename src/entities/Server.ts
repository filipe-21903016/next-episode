/*
export class Server{
    static table = 'servers';
    static timestamps = true;
    static fields = {
        server_id: {
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            length: 60,
        },
        discord_id: {
            type: DataTypes.STRING,
            unique:true,
            length: 60,
        },
        channel_id: {
            type: DataTypes.STRING,
            length: 60,
        },
    };
    
    static shows() {
        return this.hasMany(Show);
    }
}
*/