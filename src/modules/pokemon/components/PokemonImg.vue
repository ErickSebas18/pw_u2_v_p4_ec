<template>
  <div class="contenedorImg">
    <img
      class="ocultaPokemon"
      :src="imagenFuente"
      alt="No se puede mostrar imagen"
    />
    <img
      v-if="muestraPokemon"
      class="img2"
      :src="imagenFuente"
      alt="No se puede mostrar imagen"
    />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    muestraPokemon: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    imagenFuente() {
      /*return (
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
        this.pokemonId +
        ".svg"
      );*/

      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.ocultaPokemon {
  filter: brightness(0);
}
img {
  position: absolute;
  height: 200px;
  right: 43%;
}

.contenedorImg {
  height: 200px;
}
</style>
