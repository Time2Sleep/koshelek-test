import {HttpService} from "@/service/httpService";
import {AxiosResponse} from "axios";

interface IOrderBookResponse {
    lastUpdateId: number
    bids: string[][]
    asks: string[][]
}

export const fetchOrderBook = (symbol: string, limit: number): Promise<AxiosResponse<IOrderBookResponse>> => {
    return HttpService.get('/v3/depth', {
        params: { symbol, limit }
    });
};