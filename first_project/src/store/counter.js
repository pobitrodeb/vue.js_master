import { defineStore } from "pinia";


export const useCounter = defineStore('counter',{
    state: () => ({
        count: 0,
        title: 'v3 master class', 
    }),

    actions: {
        increments(n){
                this.count  += n
        }
    }
});
