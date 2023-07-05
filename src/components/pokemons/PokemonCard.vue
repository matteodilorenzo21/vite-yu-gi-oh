<script>
export default {
    props: {
        image: String,
        number: String,
        name: String,
        type1: String,
        type2: String,
    }
};
</script>

<template>
<div class="pokemon-card p-2 text-center shadow-lg">
    <img :src="image" :alt="name">
    <p>{{ number }}</p>
    <h4>{{ name }}</h4>
    <p>{{ type1 }}</p>
</div>
</template>

<style lang="scss" scoped>

.pokemon-card {
    background-color: #fff;
    border: 1px solid rgb(30, 30, 30);
    border-radius: 10px;
}

img {
    height: 90px;
    width: 90px;
}

</style>