<script>
  import { store } from "./store";
  import axios from "axios";
  import AppSearchBar from './components/AppSearchBar.vue';
  import LangFlag from 'vue-lang-code-flags';

  export default {
    components: {
      AppSearchBar,
      LangFlag
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
  <AppSearchBar @search="getQuery"/>
  <div class="container p-0">
    <ul>
      <li v-for="film in store.films">
        <strong>Name:</strong> <i>{{ film.title }}</i> ||| 
        <strong>Original name:</strong> <i>{{ film.original_title }}</i> ||| 
        <strong>Language:</strong> <lang-flag :iso="film.original_language" /> ||| 
        <strong>Vote:</strong> <i>{{ film.vote_average }}</i>
      </li>
      <hr>
      <li v-for="singleSeries in store.series">
        <strong>Name:</strong> <i>{{singleSeries.name}}</i> ||| 
        <strong>Original name:</strong> <i>{{ singleSeries.original_name }}</i> ||| 
        <strong>Language:</strong> <lang-flag :iso="singleSeries.original_language" /> ||| 
        <strong>Vote:</strong> <i>{{ singleSeries.vote_average }}</i>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "./style/general.scss";
li {
  list-style: square;
}
</style>
