<template>
  <div class="texto">
    <h1>BIENVENIDOS</h1>
    <p>
      Este es el mejor juego de Pokemon, donde deberás mostrar todo tu
      conocimiento sobre el mundo Pokemon.
    </p>
    <p>
      Pondremos a prueba tu conocimiento sobre alrededor de 600 distintos
      Pokemones.
    </p>
    <p id="vamos">LET'S GO!!</p>
  </div>
  <div class="imagenes">
    <img
      src="https://cdn.freebiesupply.com/logos/large/2x/pokemon-6-logo-png-transparent.png"
      alt="No cargan las imagen"
    />
    <img
      src="https://seeklogo.com/images/C/charmander-logo-62F7FE99A5-seeklogo.com.png"
      alt="No carga la imagen"
    />
    <img
      src="https://seeklogo.com/images/S/squirtle-logo-4EA3D6011D-seeklogo.com.png"
      alt="No carga la imagen"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.texto {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  font-weight: bold;
}

#vamos {
  color: red;
  font-weight: bold;
  font-style: italic;
}

.imagenes {
  display: flex;
  justify-content: center;
  gap: 150px;
}
img {
  width: 300px;
  height: 300px;
  filter: drop-shadow(0 10px 1px rgba(9,99,184,0.8));
}
</style>