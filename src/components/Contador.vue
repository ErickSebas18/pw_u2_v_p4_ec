<template>
  <h3>{{ tituloComponente }}</h3>
  <h3>{{ titulo }}</h3>
  <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
  <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
  <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
  <button v-on:click="addNumber">+</button>
  <button v-on:click="substractNumber">-</button>
</template>

<script>
export default {
  name: "Contador",

  data() {
    return {
      numero: 5,
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
  },
  props: ["titulo", "valor2"],
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
