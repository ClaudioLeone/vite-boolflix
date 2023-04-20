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
      // pushQryToArr() {
      //   store.languages = [];
      //   axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${store.apiKey}&query=${store.query}`).then(resp => {
      //     let totResults = resp.data.results.length;
      //     console.log(totResults);

      //     for (let i = 0; i < totResults;) {
      //       store.languages.push(resp.data.results[i]['original_language']);
      //       i++;
      //     }
      //     console.log(store.languages);

      //     return store.languages;
      //   });
      // },
      getQuery() {
        store.query = this.store.query.trim();
        
        if(store.query) {
          // this.pushQryToArr();
           
          axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${store.apiKey}&query=${store.query}`).then(resp => {
            console.log(resp);
            store.films = resp.data.results;
          })
        }
      },
    },
  }
</script>

<template>
  <AppSearchBar @search="getQuery"/>
  <div>
    <ul>
      <li v-for="film in store.films">
        <strong>Name:</strong> <i>{{film.name}}</i> ||| 
        <strong>Original name:</strong> <i>{{ film.original_name }}</i> ||| 
        <strong>Language:</strong> <lang-flag :iso="film.original_language" /> ||| 
        <strong>Vote:</strong> <i>{{ film.vote_average }}</i>
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
