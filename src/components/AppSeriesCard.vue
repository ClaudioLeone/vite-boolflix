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
    <div class="series-movie-container" v-for="singleSeries in store.series">
        <div class="series-poster">
            <img v-if="singleSeries.poster_path" :src="'https://image.tmdb.org/t/p/w342' + singleSeries.poster_path" :alt="'Img_' + singleSeries.title" class="series-poster-img">
            <div v-else class="text-center"><span class="no-series-poster">We're sorry: there's no known poster for this movie!</span></div>
        </div>

        <div class="series-txt">
            <h5 class="title">{{ singleSeries.name }}</h5>
            <h6>Original name: <i>{{ singleSeries.original_name }}</i></h6>
            <h6>Language: <span><lang-flag :iso="singleSeries.original_language" /></span></h6>
            <h6>Vote: {{ singleSeries.vote_average }}</h6>
            <h6 class="series-type"><i>Series</i></h6>
        </div>
    </div>
</template>

<style lang="scss">
        .series-movie-container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;
        width: calc((100% / 4) - 5px);
        border: 1px solid #c0ffc6;
        border-radius: 10px;
        background-color: #090a09;
        margin: 5px 2px;
        height: 332px;
        padding: 0 5px;
        cursor: pointer;
    }



    .series-txt {
    display: none;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    border-radius: 10px;
    background-color: #090a09;
    margin: 5px 2px;
    height: 332px;
    padding: 0 5px;
    cursor: pointer;
    }

    .series-movie-container:hover {
        .series-poster-img {
            display: none;
        }

        .series-txt {
            display: flex;
        }

        .no-series-poster {
            display: none;
        }
    }

    .series-poster-img {
        height: 320px;
        width: 100%;
        border-radius: 10px;
    }

    .no-series-poster {
        color: red;
        text-shadow: 0 0 3px red; 
    }

    .series-card {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;
        width: calc((100% / 4) - 5px);
        height: 350px;
        border: 1px solid #edc4ff;
        border-radius: 10px;
        background-color: #0a090a;
        margin: 5px 2px;
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