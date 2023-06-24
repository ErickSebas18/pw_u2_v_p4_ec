<template>
  <h1>Caracola Mágica</h1>
  <img
    v-if="imagen"
    :src="imagen"
    alt="No se puede presentar la imagen"
  /><br />
  <div class="bg-dark"></div>
  <div class="contenedor">
    <div class="mensaje" v-if="mensaje">
        <h1 v-if="mensaje">{{ mensaje }}</h1>
        <h1 v-if="cont">{{ cont }}</h1>
      </div>
    <input type="text" placeholder="Hazme una pregunta" v-model="pregunta" />
    <p>Recuerda Terminar con el signo "?"</p>
    <p>Acumula "yes" y suma puntos</p>
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
      indice: 1,
      pregunta: "",
      respuesta: "",
      imagen: null,
      mensaje: null,
      cont: "",
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
      this.verificar();
    },

    verificar() {
      if (this.respuesta.toLowerCase() === "yes") {
        this.mensaje = "GANASTE";
        this.cont = "Ganaste: " + this.indice;
        this.indice++;
      } else {
        this.mensaje = "PERDISTE";
      }
    },
  },
};
</script>

<style>
img,
.bg-dark {
  height: 100vh;
  width: 100vw;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}
.contenedor {
  position: relative;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}

p,
h1,
h2 {
  color: white;
}

p {
  font-size: 25px;
  margin-top: 0px;
}

.mensaje{
  border: solid black;
  width: 200px;
  padding: 15px;
  border-radius: 15px;
  margin: auto;
  margin-bottom: 10px;
  box-shadow: 0 0 10px 5px rgba(252, 245, 188, 0.4);
}
</style>
