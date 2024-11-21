import { Request, Response } from "express";
import { HttpResponse } from "../utils/http-response";
import { getClubsByIdService, getClubsService } from "../services/clubs-service";

export const getClubsController = async (request: Request, response: Response) => {

    const res: HttpResponse = await getClubsService();
    response.status(res.statusCode).json(res.body);

}

export const getClubsByIdController = async (request: Request, response: Response) => {

    const id: number = parseInt(request.params.id);

    const res: HttpResponse = await getClubsByIdService(id);
    response.status(res.statusCode).json(res.body);
    
}