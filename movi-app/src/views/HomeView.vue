<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="home">
    <div class="featured-movi-card">
      <router-link  to="/movie/tt0078346">
        <img
              src="https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
              alt=""
            />
            <div class="movi-detail">
            <h3>Super Man</h3>
            <p>
              An alien orphan is sent from his dying planet to Earth, where he grows
              up to become his adoptive home's first and greatest superhero.
            </p>
          </div>
      </router-link>
    </div>
  </div>
</template>