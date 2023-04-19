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
        <input type="text" placeholder="Search a movie..." v-model="store.query" @keyup.enter="$emit('search')">
        <input type="button" value="Search" @click="$emit('search')">
    </div>
</template>

<style scoped lang="scss">

</style>