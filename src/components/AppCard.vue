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
    <div class="movie-container" v-for="film in store.films">
        <div class="">
            <img v-if="film.poster_path" :src="'https://image.tmdb.org/t/p/w342' + film.poster_path" :alt="'Img_' + film.title" class="poster-img">
            <div v-else class="text-center"><span class="no-poster">We're sorry: there's no known poster for this movie!</span></div>
        </div>
        <div class="film-txt">
            <h5 class="title">{{ film.title }}</h5>
            <h6>Original name: <i>{{ film.original_title }}</i></h6>
            <h6>Language: <span><lang-flag :iso="film.original_language" /></span></h6>
            <h6>Vote: {{ film.vote_average }}</h6>
            <h6 class="film-type"><i>Film</i></h6>
        </div>
    </div>
</template>

<style lang="scss">

    .movie-container {
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

    .film-txt {
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

    .movie-container:hover {
        .poster-img {
            display: none;
        }

        .film-txt {
            display: flex;
        }

        .no-poster {
            display: none;
        }
    }

    .poster-img {
        height: 320px;
        width: 100%;
        border-radius: 10px;
    }

    .no-poster {
        color: red;
        text-shadow: 0 0 3px red; 
    }

    .title {
        color: coral;
    }

    .film-type {
        color: #98d99e;
        font-size: 0.85rem;
        text-shadow: 0 0 3px #508155; 
    }

    
</style>