<template>
  <div v-if="!mostrar">
    <h1 v-if="!pokemonCorrecto">Espere por favor...</h1>
    <div v-else class="juego">
      <h1>Juego Pokemon</h1>
      <h2>
        Puntaje: <span>{{ puntaje }}</span>
      </h2>
      <h2>
        Intentos: <span>{{ intentos }}</span>
      </h2>
      <PokemonImg
        :pokemonId="pokemonCorrecto.id"
        :muestraPokemon="showPokemon"
      ></PokemonImg>
      <PokemonOps
        :opciones="arregloPokemon"
        @seleccionar="manejoDatoOpciones($event)"
      />
    </div>
  </div>
  <div v-else>
    <div :class="lose ? 'win' : 'loser'">
      <Mensaje :puntaje="puntaje" :ganar="lose"> </Mensaje>
      <PokemonImg
        :pokemonId="pokemonCorrecto.id"
        :muestraPokemon="showPokemon"
        class="imagen"
      ></PokemonImg>
      <button class="reiniciar" @click="reiniciar">REINICIAR</button>
    </div>
  </div>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";
import obtenerFachadaPokemon from "../helpers/clientePokemonAPI";
import Mensaje from "../components/Mensaje.vue";

export default {
  data() {
    return {
      arregloPokemon: [],
      pokemonCorrecto: null,
      showPokemon: false,
      lose: false,
      puntaje: 0,
      intentos: 0,
      mostrar: false,
    };
  },
  components: {
    PokemonImg,
    PokemonOps,
    Mensaje,
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
      this.intentos++;
      if (this.showPokemon) {
        this.puntaje =
          this.intentos == 1
            ? 5
            : this.intentos == 2
            ? 2
            : this.intentos == 3
            ? 1
            : 0;
        this.lose = true;
        this.mostrar = true;
      } else {
        if (this.intentos == 3) {
          this.lose = false;
          this.mostrar = true;
          this.showPokemon = true;
        }
      }
    },
    reiniciar(){
      this.arregloPokemon = [];
      this.pokemonCorrecto = null;
      this.showPokemon = false;
      this.lose = false;
      this.puntaje = 0;
      this.intentos = 0;
      this.mostrar = false;
      this.cargaJuegoInicial();
    }
  },

  mounted() {
    console.log("Se montó el componente");
    this.cargaJuegoInicial();
  },
};
</script>

<style>
.win,
.loser {
  font-size: 25px;
  font-weight: bold;
}
.win .imagen {
  filter: drop-shadow(0 10px 1px rgba(128, 244, 66, 0.8)) drop-shadow(0 10px 1px rgba(24, 205, 68, 0.8) );
}
.win{
  color: #38BE06;
  text-shadow: 0 0 10px black;
}
.loser{
  color: red;
  text-shadow: 0 0 10px black;
}
.loser .imagen{
  filter: drop-shadow(0 10px 1px rgba(205, 54, 24, 0.8)) drop-shadow(0 10px 1px rgba(190, 51, 6, 0.8));
}

.reiniciar {
  margin-top: 50px;
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;
  border: 2px solid;
}

.reiniciar:hover {
  background-color: #DD680C;
}

</style>
