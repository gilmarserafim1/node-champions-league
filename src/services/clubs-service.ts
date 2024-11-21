import { getClubs, getClubsById } from "../data/clubs/clubs-data";
import Club from "../models/club-model";
import { HttpResponse } from "../utils/http-response";
import { StatusCode } from "../utils/status-code";


let response: HttpResponse = {
    statusCode: 0,
    body: [],
}

export const getClubsService = async (): Promise<HttpResponse> => {

    const data: Club[] = await getClubs();
    response.statusCode = data.length === 0 ? StatusCode.NoContent : StatusCode.OK;
    response.body = data;
    return response;
}

export const getClubsByIdService = async (id: number): Promise<HttpResponse> => {

    const data: Club[] = await getClubsById(id);
    response.statusCode = data.length === 0 ? StatusCode.NoContent : StatusCode.OK;
    response.body = data;
    return response;
}