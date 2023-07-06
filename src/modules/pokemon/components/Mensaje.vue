<template>
  <div class="ganar" v-if="ganar">
    <h1>Has ganado</h1>
    <h1>
      Puntaje: <span> {{ puntaje }} </span>
    </h1>
  </div>
  <div class="perder" v-else>
    <h1>Has perdido</h1>
  </div>
</template>

<script>
export default {
  props: {
    puntaje: {
      type: Number,
      required: true,
    },

    ganar: {
        type: Boolean,
        required: true,
    }
  },
};
</script>

<style>

</style>