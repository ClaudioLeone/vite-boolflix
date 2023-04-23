<script>
  import { store } from "./store";
  import axios from "axios";
  import AppSearchBar from './components/AppSearchBar.vue';
  import AppCard from "./components/AppCard.vue";

  export default {
    components: {
      AppSearchBar,
      AppCard
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getQuery() {
        store.query = this.store.query.trim();
        
        if(store.query) {           
          axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${store.apiKey}&query=${store.query}`).then(resp => {
            store.films = resp.data.results;
            console.log(store.films);
          });

          axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${store.apiKey}&query=${store.query}`).then(resp => {
            store.series = resp.data.results;
            console.log(store.series);
          });
        }
      },
    },
  }
</script>

<template>
  <div class="header d-flex justify-content-between align-items-center p-4">
    <h1 id="logo-title"><span id="first-title-letter">B</span>oolflix</h1>
    <AppSearchBar @search="getQuery"/>
  </div>
  <div class="container d-flex flex-wrap films-container justify-content-between align-items-center">
      <AppCard />
    <!-- <ul>
      <li v-for="singleSeries in store.series">
        <strong>Name:</strong> <i>{{singleSeries.name}}</i> ||| 
        <strong>Original name:</strong> <i>{{ singleSeries.original_name }}</i> ||| 
        <strong>Language:</strong> <lang-flag :iso="singleSeries.original_language" /> ||| 
        <strong>Vote:</strong> <i>{{ singleSeries.vote_average }}</i>
      </li>
    </ul> -->
  </div>
</template>

<style scoped lang="scss">
@use "./style/general.scss";

#first-title-letter {
  color: red;
  font-style: oblique;
  font-size: 3.25rem;
}

#logo-title {
  line-height: var(--header-height);
  vertical-align: center;
}

.header {
  height: var(--header-height);
  background-color: black;
}
.films-container {
  width: 100%;
  height: fit-content;
}
</style>
