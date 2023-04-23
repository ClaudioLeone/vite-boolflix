<script>
    import { store } from '../store';
    import LangFlag from 'vue-lang-code-flags';

    export default {
        name: 'AppCard',
        components: {
            LangFlag,
        },
        proprs: {
            film: Object
        },
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="card" v-for="film in store.films">
        <h5 class="title">{{ film.title }}</h5>
        <h6>Original name: <i>{{ film.original_title }}</i></h6>
        <h6>Language: <span><lang-flag :iso="film.original_language" /></span></h6>
        <h6>Vote: {{ film.vote_average }}</h6>
    </div>
</template>

<style>
    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;
        width: calc((100% / 4) - 5px);
        height: 350px;
        border: 1px solid #c9c9c9;
        border-radius: 10px;
        background-color: #0b0b0b;
        margin: 5px 0;
        padding: 0 5px;
    }

    .title {
        color: coral;
    }
</style>