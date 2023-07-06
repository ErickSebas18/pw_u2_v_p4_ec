<template>
  <div class="container">
    <ul>
      <li
        v-for="pokemon in opciones"
        :key="pokemon.id"
        @click="$emit('seleccionar', pokemon.id)"
      >
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      correcto: false,
    };
  },
  methods: {
    eleccion() {
      console.log("prueba de evento");
    },
  },
  props: {
    opciones: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
ul {
  list-style-type: none;
}
li {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: antiquewhite;
  margin-bottom: 10px;
  width: 200px;
  cursor: pointer;
}

li:hover {
  background-color: aqua;
  transform: scale(1.1);
}
</style>
