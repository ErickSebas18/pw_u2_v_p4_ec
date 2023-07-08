<template>
  <div>
    <router-link to="/">Bienvenida</router-link>
    <router-link to="/reglas">Reglas</router-link>
    <router-link to="/juego">Juego Pokemon</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
div{
    display: flexbox;
    width: 100%;
    margin-bottom: 30px;
}

div a {
  font-weight: bold;
  color: blue;
  filter: drop-shadow(0 5px 2px rgba(9,99,184,0.8));
  border-radius: 10px;
  margin-inline-start: 100px;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px 15px;
  
}

div a:hover{
  background-color: rgba(9,99,184,0.8);
  color: black;
}

div a:focus{
  background-color: rgba(9,99,184,0.8);
  color: black;
}
</style>