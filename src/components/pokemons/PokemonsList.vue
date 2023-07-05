<script>
import axios from 'axios';
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';
import PokemonCard from './PokemonCard.vue';
export default {
    components: {PokemonCard},
    data() {
        return {
            pokemons: []
        };
    },
    created() {
        axios.get(endpoint).then(res => {
            this.pokemons = res.data.docs;
        });
    },
};
</script>

<template>
<section id="pokemons">

    <div class="row g-4 row-cols-2 row-cols-md-3 row-cols-lg-4">

        <div class="col" v-for="pokemon in pokemons" :key="pokemon._id">
            <PokemonCard :image="pokemon.imageUrl" :number="pokemon.number" :name="pokemon.name" :type1="pokemon.type1" :type2="pokemon.type2"/>
        </div>

    </div>

</section>
</template>

<style lang="scss" scoped>

</style>