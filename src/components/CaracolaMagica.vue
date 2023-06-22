<template>
  <h1>Caracola Mágica</h1>
  <img
    src="https://play-lh.googleusercontent.com/Y3eEPFBdq4wv2x8XPg9hP06QIvc3tW7Mo8kba4H4OyQ4QqhFOo_43hwT-0-Mp9WHQ6I=w240-h480-rw"
    alt="No se puede presentar la imagen"
  /><br />
  <input type="text" placeholder="Hazme una pregunta" v-model="pregunta" />
  <p>Recuerda Terminar con un enter la pregunta</p>
  <div>
    <h2>Voy a pasar de año?</h2>
    <h1>SI,NO</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: "Hola Mundo",
    };
  },
};
</script>

<style></style>
