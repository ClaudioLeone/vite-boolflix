<script>
  import { store } from "./store";
  import axios from "axios";
  import AppSearchBar from './components/AppSearchBar.vue';

  export default {
    components: {
      AppSearchBar
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
          axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${store.apiKey}&query=${store.query}`).then(resp => {
          console.log(resp.data.results);
          store.films = resp.data.results;
        })
        }
      }
    },
  }
</script>

<template>
  <AppSearchBar @search="getQuery"/>
  <div>
    <ul>
      <li v-for="film in store.films"><strong>Name:</strong> <i>{{film.name}}</i> ||| <strong>Original name:</strong> <i>{{film.original_name}}</i> ||| <strong>Language:</strong> <i>{{film.original_language}}</i> ||| <strong>Vote:</strong> <i>{{ film.vote_average }}</i></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "./style/general.scss";
li {
  list-style: square;
}
</style>
