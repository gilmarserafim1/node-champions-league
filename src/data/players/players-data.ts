import path from "path";
import fs from "fs"
import Player from "../../models/player-model";


const pathData = path.join(__dirname, "../players/players.json");

const readPlayersFromJson = async (id?: number): Promise<Player[]> => {
    try {
        const data:string = fs.readFileSync(pathData, "utf-8");
        let player: Player[] = JSON.parse(data);
        if(id){
            player = player.filter((player: Player) => player.id === id);
        }
        return player;
    }catch(error){
        console.log(error);
        throw error;
    }
}

const writePlayersToJson = async (player: Player[]): Promise<void> => {
    try {
        fs.writeFileSync(pathData, JSON.stringify(player, null, 2));
    }catch(error){
        console.log(error);
        throw error;
    }
}

export const getPlayers = async (): Promise<Player[]> => await readPlayersFromJson();

export const getPlayersById = async (id: number): Promise<Player[]> => await readPlayersFromJson(id);

export const postPlayers = async (newPlayer: Player): Promise<Player> => {
    const players = await readPlayersFromJson();
    newPlayer.id = players.length > 0 ? Math.max(...players.map((player: Player) => player.id)) + 1 : 1;
    players.push(newPlayer);
    await writePlayersToJson(players);
    return newPlayer;
}

export const deletePlayers = async (id: number): Promise<number> => {
    let players: Player[] = await readPlayersFromJson();
    players = players.filter((player: Player) => player.id !== id);
    writePlayersToJson(players);
    return id;
}


export const patchPlayers = async (id: number, updatedPlayer: Player): Promise<Player[]> => {
    let players: Player[] = await readPlayersFromJson();
    players = players.map((player: Player) => player.id === id ? {...player, ...updatedPlayer} : player);
    writePlayersToJson(players);
    return await getPlayersById(id);
}