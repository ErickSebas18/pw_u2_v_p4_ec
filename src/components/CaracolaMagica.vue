<template>
  <h1>Caracola Mágica</h1>
  <img
    v-if="imagen"
    :src="imagen"
    alt="No se puede presentar la imagen"
  /><br />
  <div class="bg-dark"></div>
  <div class="contenedor">
    <input type="text" placeholder="Hazme una pregunta" v-model="pregunta" />
    <p>Recuerda Terminar con el signo "?"</p>
    <div>
      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: "",
      respuesta: "",
      imagen: null,
    };
  },
  watch: {
    pregunta(value, oldValue) {
      console.log(value);
      console.log(oldValue);
      if (value.includes("?")) {
        console.log("Consumir el API");
        this.consumirAPI();
      }
    },
  },
  methods: {
    async consumirAPI() {
      const respuesta = await fetch("https://yesno.wtf/api").then((r) =>
        r.json()
      );
      const { answer, image } = respuesta;
      this.respuesta = answer;
      this.imagen = image;
    },
  },
};
</script>

<style>
img, .bg-dark {
  height: 100vh;
  width: 100vw;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
}

.bg-dark{
  background-color: rgba(0, 0, 0, 0.4);
}
.contenedor{
  position: relative;
}

input{
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}

p, h1, h2 {
  color: white;
}

p {
  font-size: 25px;
  margin-top: 0px;
}
</style>
