<template>
  <!--<img alt="Vue logo" src="./assets/logo.png" />
  <Contador titulo="Estudiante" v-bind:inicio="105" />
  <Contador titulo="Profesor" :inicio="101"/>-->
  <CaracolaMagica/>
</template>
<script>
//import Contador from "./components/Contador.vue";
import CaracolaMagica from "./components/CaracolaMagica.vue";

export default {
  name: "App",
  components: {
    CaracolaMagica,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
