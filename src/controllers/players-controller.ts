import { Request, Response } from "express";
import { HttpResponse } from "../utils/http-response";
import { deletePlayersService, getPlayersByIdService, getPlayersService, patchPlayersService, postPlayersService } from "../services/players-service";


export const getPlayersController = async (request: Request, response: Response) => {

    const res: HttpResponse = await getPlayersService();
    response.status(res.statusCode).json(res.body);

}

export const getPlayersByIdController = async (request: Request, response: Response) => {

    const id: number = parseInt(request.params.id);

    const res: HttpResponse = await getPlayersByIdService(id);
    response.status(res.statusCode).json(res.body);
    
}

export const postPlayersController = async (request: Request, response: Response) => {

    const newPlayer: any = request.body;

    const res: HttpResponse = await postPlayersService(newPlayer);
    response.status(res.statusCode).json(res.body);
    
}

export const deletePlayersController = async (request: Request, response: Response) => {

    const id: number = parseInt(request.params.id);

    const res: HttpResponse = await deletePlayersService(id);
    response.status(res.statusCode).json(res.body);
    
}

export const patchPlayersController = async (request: Request, response: Response) => {

    const id: number = parseInt(request.params.id);
    const updatedPlayer: any = request.body;

    const res: HttpResponse = await patchPlayersService(id, updatedPlayer);
    response.status(res.statusCode).json(res.body);
    
}