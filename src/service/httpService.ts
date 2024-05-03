import axios, {AxiosRequestConfig} from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.binance.com/api'
});

export class HttpService {
    static get(url: string, params: AxiosRequestConfig){
        return axiosInstance.get(url, params);
    }
}