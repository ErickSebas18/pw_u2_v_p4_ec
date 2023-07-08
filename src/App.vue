<template>
  <!--<img alt="Vue logo" src="./assets/logo.png" />
  <Contador titulo="Estudiante" v-bind:inicio="105" />
  <Contador titulo="Profesor" :inicio="101"/>-->
  <img
    id="inicio"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
    alt="No se puede cargar la imagen"
  />
  <NavBar />
  <router-view />
</template>
<script>
//import Contador from "./components/Contador.vue";
import PokemonPage from "./modules/pokemon/pages/PokemonPage.vue";
import NavBar from "./modules/pokemon/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
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
  margin-top: 30px;
}

#inicio{ 
  width: 30%;
  height: 15vh;
  margin-bottom: 20px;
  filter: drop-shadow(0 10px 1px rgba(9,99,184,0.8));
}
</style>
