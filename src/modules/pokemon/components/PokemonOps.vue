<template>
  <div class="container">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container{
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
}

</style>
