import path from "path";
import fs from "fs"
import Club from "../../models/club-model";


const pathData = path.join(__dirname, "../clubs/clubs.json");

const readClubsFromJson = async (id?: number): Promise<Club[]> => {
    try {
        const data:string = fs.readFileSync(pathData, "utf-8");
        let clubs: Club[] = JSON.parse(data);
        if(id){
            clubs = clubs.filter((club: Club) => club.id === id);
        }
        return clubs;
    }catch(error){
        console.log(error);
        throw error;
    }
}

export const getClubs = async (): Promise<Club[]> => await readClubsFromJson();

export const getClubsById = async (id: number): Promise<Club[]> => await readClubsFromJson(id);