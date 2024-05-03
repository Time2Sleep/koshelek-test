import {defineStore} from "pinia";

interface IHistoryItem {
    time: Date,
    currency: string
}

interface IHistoryStoreState {
    history: IHistoryItem[]
}

export const useHistoryStore = defineStore('historyStore', {
    state: (): IHistoryStoreState => ({
        history: []
    }),
    actions: {
        saveHistory(currency: string){
            this.history.push({
               time: new Date(),
               currency
            });
        }
    }
});