<script>
    import { store } from '../store';
    import LangFlag from 'vue-lang-code-flags';

    export default {
        name: 'AppSeriesCard',
        components: {
            LangFlag,
        },
        proprs: {
            serie: Object
        },
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    
    <div class="series-card" v-for="singleSeries in store.series">
        <h5 class="title">{{ singleSeries.name }}</h5>
        <h6>Original name: <i>{{ singleSeries.original_name }}</i></h6>
        <h6>Language: <span><lang-flag :iso="singleSeries.original_language" /></span></h6>
        <h6>Vote: {{ singleSeries.vote_average }}</h6>
        <h6 class="series-type"><i>Series</i></h6>
    </div>
</template>

<style>
    .series-card {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;
        width: calc((100% / 4) - 5px);
        height: 350px;
        border: 1px solid #c9c9c9;
        border-radius: 10px;
        background-color: #0a090a;
        margin: 5px 0;
        padding: 0 5px;
        cursor: pointer;
    }

    .title {
        color: coral;
        text-shadow: 0 0 3px coral;
    }

    .series-type {
        color: #b799c4;
        font-size: 0.85rem;
        text-shadow: 0 0 3px #7a6085;
    }
</style>