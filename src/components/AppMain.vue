<script>
import PokemonsList from '../components/pokemons/PokemonsList.vue';
export default {
    components: {PokemonsList},
};
</script>

<template>

    <main>
        <header class="d-flex align-items-center">
            <h1 class="text-white">Kanto</h1>
        </header>
        <div class="container shadow-lg">
            <PokemonsList />
        </div>
    </main>

</template>

<style lang="scss" scoped>

main {
    background-image: url("../assets/img/_overlay-bg.png");
    background-position: top;
    background-size: cover;
    border: 1px solid #700000;
    border-radius: 15px;
    
    height: 80vh;
    width: 150vh;

    overflow: auto;
}

header {
    height: 120px;
    background-image: url("../assets/img/_overlay-header-bg.png");
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;

    h1 {
        padding-left: 125px;
        padding-bottom: 10px;
    }
}
</style>