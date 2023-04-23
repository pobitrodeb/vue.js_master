import { defineStore } from "pinia";


export const useCounter = defineStore('counter',{
    state: () => ({
        count: 0,
        title: 'v3 master class', 
    })
})

// pinia basic function 
export const useCounterStore = defineStore('counter', {
    state: () => ({
      count: 0,
    }),
    actions: {
      // since we rely on `this`, we cannot use an arrow function
      increment() {
        this.count++
      },
      randomizeCounter() {
        this.count = Math.round(100 * Math.random())
      },
    },
  })