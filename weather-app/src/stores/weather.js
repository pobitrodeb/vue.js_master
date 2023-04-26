import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    api_key: '27bcc252742830381afd6856832da01a', 
    
    // baseURL: 'https://api.openweathermap.org/data/2.5/',
    weather_icon: 'https://openweathermap.org/img/wn/', 
    location_query: '', 
    weather: '', 
  }), 
  getters:{}, 
  actions:{
  async  fetchweather(e){
      if(e.key == 'Enter'){
      const  response  = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.location_query}&units=metric&appid=${this.api_key}`);
      };
      console.log(response);
    // this.weather = response; 

    },
  }


})