import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useTodoStore = defineStore('todo',{
    state: () => ({
        todos: [],
    }), 

    getters: {

    },

    actions: {
            getAllTodos(){
                axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
                    console.log(response.data);
                })
            }
    }
})
 
