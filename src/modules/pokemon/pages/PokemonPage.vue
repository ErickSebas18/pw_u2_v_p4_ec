<template>
  <h1>Juego Pokemon</h1>
  <PokemonImg :pokemonId="25" :muestraPokemon="true"></PokemonImg>
  <PokemonOps :opciones="arregloPokemon"/>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";
import obtenerFachadaPokemon from "../helpers/clientePokemonAPI";

export default {

  data() {
    return {
      arregloPokemon: [],
    }
  },
  components: {
    PokemonImg,
    PokemonOps,
  },
  methods: {
    async cargaJuegoInicial(){
     this.arregloPokemon = await obtenerFachadaPokemon();
      console.log(this.arregloPokemon)
    }
  },
  mounted() {
    console.log("Se montó el componente")
    this.cargaJuegoInicial()
  }
};
</script>

<style></style>
