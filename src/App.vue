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
        })
        }
      }
    },
  }
</script>

<template>
  <AppSearchBar @search="getQuery"/>
</template>

<style scoped lang="scss">
@use "./style/general.scss";

</style>
