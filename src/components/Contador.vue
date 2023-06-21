<template>
  <h3>{{ evaluarTitutlo }}</h3>
  <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
  <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
  <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
  <button @click="addNumber">+</button>
  <button v-on:click="substractNumber">-</button>
</template>

<script>
export default {
  name: "Contador",
  data() {
    return {
      numero: this.inicio,
      tituloComponente: this.titulo,
    };
  },
  methods: {
    obtenerCuadrado() {
      console.log("Entro al método cuadrado");
      return this.numero * this.numero;
    },
    addNumber() {
      this.numero++;
    },
    substractNumber() {
      this.numero--;
    },
  },
  computed: {
    obtenerCuadradoComputado() {
      console.log("Entro al método cuadrado computado");
      return this.numero * this.numero;
    },

    evaluarTitutlo() {
      return this.tituloComponente || "Valor Defecto";
    },
  },
  props: {
    titulo: String,
    inicio: {
      type: Number,
      required: false,
      default: 100,
      validator(value) {
        return value > 100;
      },
    },
  },
};
</script>

<style scoped>
button {
  text-align: center;
  padding: 0 15px;
  width: 60px;
  margin: 0 5px;
  border-radius: 10px;
  background-color: #64b687;
  font-size: 25px;
  font-weight: bold;
}
button:hover {
  background-color: greenyellow;
  cursor: pointer;
}
</style>
