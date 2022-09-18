import client from "../Database.ts";
import { Show, ShowType } from "../entities/Show.ts";
import { IRead } from "../interfaces/IRead.ts";
import { IWrite } from "../interfaces/IWrite.ts";

class ShowRepository implements IWrite<Show>, IRead<Show>{
    create(item: Show){
        return client.queryArray(`
                INSERT INTO SHOWS (id, name, show_type, image_path, created_at, updated_at) 
                VALUES ('${item.id}' ,'${item.name}','${ShowType[item.show_type]}','${item.image_path}',${item.created_at}, ${item.updated_at});`);
    }

    update(id: string, item: Show) {
        throw new Error("Method not implemented.");
    }

    delete(item: Show) {
        return client.queryArray(`DELETE FROM SHOWS WHERE id = '${item.id}';`);
    }

    findAll(){
        throw new Error("Method not implemented.");
    }

    findOne(id: string){
        throw new Error("Method not implemented.");
    }
}

export default new ShowRepository();