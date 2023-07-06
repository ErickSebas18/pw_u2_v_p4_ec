<template>
  <!--<img alt="Vue logo" src="./assets/logo.png" />
  <Contador titulo="Estudiante" v-bind:inicio="105" />
  <Contador titulo="Profesor" :inicio="101"/>-->
  <PokemonPage />
</template>
<script>
//import Contador from "./components/Contador.vue";
import PokemonPage from "./modules/pokemon/pages/PokemonPage.vue";

export default {
  name: "App",
  components: {
    PokemonPage,
  },
};
</script>
<style>
#app {
  
  align-items: center;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
</style>
