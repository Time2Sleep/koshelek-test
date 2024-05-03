import {defineStore} from "pinia";
import {fetchOrderBook} from "@/service/apiService";

interface ISettingsStoreState {
    currentSymbol: string
    bids: string[][]
    asks: string[][]
    oldPrice: number
    ws: WebSocket|null
    lastUpdateId: number
    limit: number
}

export const useDataStore = defineStore('settings', {
    state: (): ISettingsStoreState => ({
        currentSymbol: 'BTCUSDT',
        bids: [],
        asks: [],
        oldPrice: 0,
        ws: null,
        lastUpdateId: 0,
        limit: 100
    }),
    getters: {
        limitedBids: state => state.bids.slice(-(state.limit/2)),
        limitedAsks: state => state.asks.slice(0, state.limit/2),
        actualPrice: state => state.bids.length ? Number(state.bids[state.bids.length - 1][0]) : 0
    },
    actions: {
        fetchStockBook(){
            fetchOrderBook(this.currentSymbol, this.limit)
                .then(({data}) => {
                    const { bids, asks, lastUpdateId } = data;

                    this.bids = bids;
                    this.asks = asks;
                    this.lastUpdateId = lastUpdateId;

                    this.listenToUpdate();
                })
                .catch(err => console.error(err));
        },

        listenToUpdate(){
            this.stopListen();
            const pair = this.currentSymbol.toLowerCase();
            this.ws = new WebSocket(`wss://stream.binance.com:9443/ws/${pair}@depth`);

            this.ws.onmessage = ( ({data}) => {
                if(data.u <= this.lastUpdateId || data.U >= this.lastUpdateId)
                    return;


                this.oldPrice = this.actualPrice;
                let {a: asks,b: bids} = JSON.parse(data) as {a: string[][], b: string[][]};

                asks = asks.filter(([_, quantity]) => Number(quantity) > 0);
                bids = bids.filter(([_, quantity]) => Number(quantity) > 0);

                this.bids = bids.sort((a,b) => +a[0] - +b[0]);
                this.asks = asks.sort((a,b) => +a[0] - +b[0]);
                this.lastUpdateId = data.u;
            });
        },

        stopListen(){
            this.ws?.close();
        }
    }
});