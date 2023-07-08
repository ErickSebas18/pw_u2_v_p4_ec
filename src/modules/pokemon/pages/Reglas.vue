<template>
  <div class="parrafo">
    <p>
      El juego consiste en adivinar el Pokemon oculto con las opciones que se
      encuentran en la parte de abajo
    </p>
    <p>Tienes 3 intentos para hacerlo:</p>
    <p id="intento1">En el primer intento, tú puntaje será de 5 puntos</p>
    <p id="intento2">En el segundo intento, tú puntaje será de 2 puntos</p>
    <p id="intento3">En el tercer intento, tú puntaje será de 1 punto</p>
    <p id="intentalo">Try it!</p>
  </div>

  <div class="imagen">
    <img
      id="pokemon"
      src="https://svgsilh.com/png-512/1574006.png"
      alt="No se puede cargar"
    />
  </div>

  <div class="imagen2">
    <img
      id="pokemon2"
      src="https://cdn.shopify.com/s/files/1/0607/7408/8942/products/Pikachu1thumb_994aaee9-932c-41a3-96ca-869f7fbdb777.png?v=1678429481&width=1445"
      alt="No se puede cargar"
    />
    <h1 class="winner">WIN!!</h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.imagen {
  position: absolute;
  right: 30%;
  top: 40%;
}
#pokemon {
  width: 400px;
  height: 400px;
  filter: drop-shadow(0 10px 1px rgba(9,99,184,0.8));
}

.parrafo {
  font-size: 30px;
  margin-top: 50px;
  font-weight: bold;
}

.imagen2 {
  position: absolute;
  left: 35%;
  top: 35%;
}
#pokemon2 {
  width: 450px;
  height: 450px;
  filter: drop-shadow(0 10px 1px rgba(9,99,184,0.8));
}

p {
  margin: 60px;
}
.winner {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 50px;
  animation: escalar 1s linear infinite;
  filter: drop-shadow(0 5px 1px rgba(9, 152, 184, 0.8))
    drop-shadow(0 10px 1px rgba(9, 101, 184, 0.8));
  color: rgba(184, 154, 9);
}

@keyframes escalar {
  50% {
    transform: scale(2);
  }
}

#intentalo {
  color: red;
  font-style: italic;
  font-size: 50px;
}

#intento1{
    color: rgb(214, 60, 7);
}
#intento2{
    color: rgb(220, 125, 30);
}
#intento3{
    color: rgb(223, 160, 24);
}
</style>