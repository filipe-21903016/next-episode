import { Client } from "../dev_deps.ts";
import { Show, ShowType } from "../entities/Show.ts";
import { PostgresRepository } from "./interfaces/PostgresRepository.ts"

export default class ShowRepository implements PostgresRepository<Show>{
    _client: Client;
    private static instance: ShowRepository;

    private constructor(client:Client){
        this._client = client;        
    }

    public static getInstance(client: Client) : ShowRepository{
        if (!ShowRepository.instance){
            ShowRepository.instance = new ShowRepository(client);
        }
        return ShowRepository.instance;
    }

    async create(item: Show): Promise<boolean> {
        try{
            await this._client.queryArray(`
                INSERT INTO SHOWS (id, name, show_type, image_path, created_at, updated_at) 
                VALUES ('${item.id}' ,'${item.name}','${ShowType[item.show_type]}','${item.image_path}',${item.created_at}, ${item.updated_at});`);
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
        
        
    }

    update(id: string, item: Show): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async delete(item: Show): Promise<boolean> {
        try{
            await this._client.queryArray(
                `DELETE FROM SHOWS WHERE id = '${item.id}';`
            );
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    }

    //TODO IMPLEMENT
    async find(): Promise<Show[]> {
        try{
            const res = await this._client.queryArray(
                `SELECT * FROM SHOWS;`
            );
            const shows = res.rows.forEach(show => {
                //workaround because 1 constructor allowed
                console.log(new Show(
                    show[1] as string,
                    show[2] as number,
                    ShowType[show[3] as keyof typeof ShowType],
                    show[4] as string
                ));
            });
        }catch(e){
            console.log(e);
            return [] as Show[];
        }
    }

    findOne(id: string): Promise<Show> {
    throw new Error("Method not implemented.");
    }
}