import { deletePlayers, getPlayers, getPlayersById, patchPlayers, postPlayers } from "../data/players/players-data";
import Player from "../models/player-model";
import { HttpResponse } from "../utils/http-response";
import { StatusCode } from "../utils/status-code";

let response: HttpResponse = {
    statusCode: 0,
    body: [],
}

export const getPlayersService = async (): Promise<HttpResponse> => {

    const data: Player[] = await getPlayers();
    response.statusCode = data.length === 0 ? StatusCode.NoContent : StatusCode.OK;
    response.body = data;
    return response;
}

export const getPlayersByIdService = async (id: number): Promise<HttpResponse> => {

    const data: Player[] = await getPlayersById(id);
    response.statusCode = data.length === 0 ? StatusCode.NoContent : StatusCode.OK;
    response.body = data;
    return response;
}

export const postPlayersService = async (newPlayer: any): Promise<HttpResponse> => {

    let player: Player = {
        id: -1,
        ...newPlayer
    }

    const data: Player = await postPlayers(player);
    response.statusCode = StatusCode.Created;
    response.body = data;
    return response;
}

export const patchPlayersService = async (id: number, updatedPlayer: any): Promise<HttpResponse> => {

    const data: Player[] = await patchPlayers(id, updatedPlayer);
    response.statusCode = StatusCode.OK;
    response.body = data;
    return response;
}

export const deletePlayersService = async (id: number): Promise<HttpResponse> => {

    const idDeleted: number= await deletePlayers(id);
    response.statusCode = StatusCode.OK;
    response.body = idDeleted;
    return response;
}