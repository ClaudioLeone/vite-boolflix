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
    }
  }
</script>

<template>
  <AppSearchBar />
</template>

<style scoped lang="scss">
@use "./style/general.scss";

</style>
