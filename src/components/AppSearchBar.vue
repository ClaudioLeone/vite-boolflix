<script>
    import { store } from "../store";
    
    export default {
        name: "AppSearchBar",
        data() {
            return {
                store
            }
        }
    }

</script>

<template>
    <div class="container py-3">
        <input class="searchbar" type="text" placeholder="Search a movie/series" v-model="store.query" @keyup.enter="$emit('search')">
        <input class="searchbar-btn" type="button" value="Search" @click="$emit('search')">
    </div>
</template>

<style scoped lang="scss">
.searchbar {
    width: 20rem;
    border: 1px solid lightgrey;
    border-radius: 3px;
    background-color: wheat;
    padding: 0 5px;
}

.searchbar-btn {
    border: 1px solid lightgrey;
    border-radius: 3px;
    background-color: wheat;
    color: #2b2b2b;
    font-weight: bold;
    padding: 0 5px;
    margin-left: 5px;
}
</style>