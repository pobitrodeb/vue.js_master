
<script setup>
import {useWeatherStore} from './stores/weather'
const weatherStore = useWeatherStore();

</script>


<template>
  <h2 class="bg-primary text-white py-2 text-center">Weather App With Vue.js | www.pobitrodeb.com </h2>
  <div class="main-weather text-center">
  
    <!-- warther location search  -->
    <div class="search-box p-3">
      <input type="text" class="form-control" placeholder="search location"
      v-model="weatherStore.location_query"
      @keypress="weatherStore.fetchweather"
      />
    </div>
    <!-- weather-info  -->
    <div class="weather-info">
      <div class="location-box">
        <div class="location">
          {{ weatherStore.weather.name}}
        </div>
        <div class="date">
          {{ new Date().toLocaleString()}}
        </div>
      </div>
    </div>   

    <div class="weather-box">
      <!-- <div class="temp"> {{ weatherStore.weather.main.temp }}°C</div> -->
      <div class="temp"> 34 °C</div>
      <!-- <div class="weather text-white">{{ weatherStore.weather.weather[0].main}}</div> -->
      <div class="weather text-white">Hot Day </div>
      <div class="icon">
        <!-- <img :src="`https://openweathermap.org/img/wn/${ weatherStore.weather.weather[0].icon}@2x.png`" alt="icon"> -->
        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="icon">
      </div>
    </div>
  </div>
</template>

<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
h2{
  font-weight: 800;
}
.main-weather {
  margin: 0px auto;
  background-image: url("./assets/defult.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.4s;
  width: 320px;
  height: 480px;
  color: white;
  border-radius: 25px;
}
.location{
  font-size: 28px;
  font-weight: bold;
}
.date{
  font-weight: 800;
}
.temp{
  color:red; 
  font-size: 24px;
  font-weight: 600;
}
</style>