<template>
  <h2 class="bg-primary text-white py-2 text-center">Weather App With Vue.js | www.pobitrodeb.com </h2>
  <div class="main-weather text-center">
  
    <!-- warther location search  -->
    <div class="search-box p-3">
      <input type="text" class="form-control" placeholder="search location"/>
    </div>
    <!-- weather-info  -->
    <div class="weather-info">
      <div class="location-box">
        <div class="location">Dhaka</div>
        <div class="date">26 Aprril 2023</div>
      </div>
    </div>

    <div class="weather-box">
      <div class="temp">22 °C</div>
      <div class="weather">habi jabi</div>
    </div>
  </div>
</template>

<script setup>
</script>

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