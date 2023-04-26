<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="home">
    <div class="featured-movi-card">
      <router-link to="/movie/tt0078346">
        <img
          src="https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
          alt=""
        />
        <div class="movi-detail">
          <h3>Super Man</h3>
          <p>
            An alien orphan is sent from his dying planet to Earth, where he
            grows up to become his adoptive home's first and greatest superhero.
          </p>
        </div>
      </router-link>
    </div>

    <!-- Search in your movie  -->
    <form action="">
      <div class="">
        <input type="text" class="" placeholder="search movie" />
        <button type="submit">Search</button>
      </div>
    </form>

    <!-- All Movie List  -->
    <div class="movies-list">
      <div class="movie">
        <router-link to="/movie/tt0078346" class="movie-link">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
            alt=""
          />
          <div class="movie-type">Actions, Drama, Horor</div>

          <div class="movi-detail">
            <div class="movie-year">1987</div>
            <h3>Superman</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>