<template>
  <h1 v-if="!pokemonCorrecto">Espere por favor...</h1>
  <div v-else class="juego">
    <h1>Juego Pokemon</h1>
    <PokemonImg
      :pokemonId="pokemonCorrecto.id"
      :muestraPokemon="showPokemon"
    ></PokemonImg>
    <PokemonOps
      :opciones="arregloPokemon"
      @seleccionar="manejoDatoOpciones($event)"
    />
    <h1 v-if="showPokemon" class="win">WIN!!</h1>
    <h1 v-if="lose" class="lose">LOSE!!</h1>
  </div>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";
import obtenerFachadaPokemon from "../helpers/clientePokemonAPI";

export default {
  data() {
    return {
      arregloPokemon: [],
      pokemonCorrecto: null,
      showPokemon: false,
      lose: false,
    };
  },
  components: {
    PokemonImg,
    PokemonOps,
  },
  methods: {
    async cargaJuegoInicial() {
      this.arregloPokemon = await obtenerFachadaPokemon();
      console.log(this.arregloPokemon);
      const indicePokemon = Math.floor(Math.random() * 4);
      this.pokemonCorrecto = this.arregloPokemon[indicePokemon];
    },
    manejoDatoOpciones(idSeleccionado) {
      console.log("evento en el padre");
      console.log("id seleccionado " + idSeleccionado);
      this.showPokemon =
        idSeleccionado == this.pokemonCorrecto.id ? true : false;
      this.lose = !this.showPokemon;
    },
  },

  mounted() {
    console.log("Se montó el componente");
    this.cargaJuegoInicial();
  },
};
</script>

<style>
.win,
.lose {
  animation: enfasis 0.6s linear infinite;
}
.win {
  color: gold;
  text-shadow: 0 0 10px green;
}
.lose {
  color: brown;
  text-shadow: 0 0 10px red;
}
@keyframes enfasis {
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}
</style>
