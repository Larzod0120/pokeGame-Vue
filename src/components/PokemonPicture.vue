<template>
    <div class="pokemon-container">
        
        <img draggable="false"
        :src="imgSrc" 
        class="hidden-pokemon" 
        alt="pokemon">

        <img v-if="showPokemon" 
        draggable="false" 
        :src="imgSrc"
        class="fade-in"
        alt="pokemon">

    </div>



</template>

<script>


export default {
    props: {
        pokemonId: {
            type: Number,
            required: true
        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }
    },

    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    
    }


}

</script>

<style scoped>
/* Pokemon Picture */
.pokemon-container {
    height: 200px;
    position: relative;
}
img {
    height: 200px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}




</style>