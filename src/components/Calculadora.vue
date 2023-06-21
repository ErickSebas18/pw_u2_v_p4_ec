<template>
  <header class="cabecera">
    <h1>Calculadora Web con VUE</h1>
  </header>

  <nav></nav>
  <section class="calculadora">
    <div class="calcu">
      <div class="resultado">
        <input
          id="idResultado"
          placeholder="0"
          v-model="idResultado"
          readonly
        />
      </div>

      <div class="cont-numeros">
        <button class="button" v-on:click="numero(7)">7</button>
        <button class="button" v-on:click="numero(8)">8</button>
        <button class="button" v-on:click="numero(9)">9</button>
        <button class="button-signo" v-on:click="guardarOperacion('+')">
          +
        </button>
      </div>
      <div class="cont-numeros">
        <button class="button" v-on:click="numero(4)">4</button>
        <button class="button" v-on:click="numero(5)">5</button>
        <button class="button" v-on:click="numero(6)">6</button>
        <button class="button-signo" v-on:click="guardarOperacion('-')">
          -
        </button>
      </div>
      <div class="cont-numeros">
        <button class="button" v-on:click="numero(1)">1</button>
        <button class="button" v-on:click="numero(2)">2</button>
        <button class="button" v-on:click="numero(3)">3</button>
        <button class="button-signo" v-on:click="guardarOperacion('x')">
          x
        </button>
      </div>
      <div class="cero">
        <button class="button" v-on:click="numero(0)">0</button>
        <button class="button" v-on:click="inicializar()">C</button>
        <button class="button" v-on:click="igual">=</button>
        <button class="button-signo" v-on:click="guardarOperacion('/')">
          /
        </button>
      </div>
    </div>
  </section>

  <footer></footer>
</template>

<script>
export default {
  data() {
    return {
      operacion: "",
      num1: "",
      num2: "",
      bol: false,
      idResultado: "",
    };
  },

  methods: {
    numero(valor) {
      if (this.bol) {
        this.inicializar();
        this.idResultado = " ";
        this.bol = false;
      }
      this.operacion === "" ? (this.num1 += valor) : (this.num2 += valor);
      this.idResultado = parseInt(this.operacion == "" ? this.num1 : this.num2);
    },

    inicializar() {
      this.operacion = "";
      this.num1 = "";
      this.num2 = "";
      this.idResultado = "";
    },

    guardarOperacion(simbolo) {
      this.operacion = simbolo;
      console.log(this.operacion);
    },

    igual() {
      if (this.num2 != 0) {
        this.bol = true;
        this.idResultado = this.resultado;
      }
    },
  },

  computed: {
    resultado() {
      const numero1 = parseInt(this.num1);
      const numero2 = parseInt(this.num2);
      switch (this.operacion) {
        case "+": {
          return numero1 + numero2;
        }

        case "-": {
          return numero1 - numero2;
        }

        case "x": {
          return numero1 * numero2;
        }

        case "/": {
          return numero1 / numero2;
        }
      }
    },
  },
};
</script>

<style scoped>
.calculadora {
  display: grid;
  justify-content: center;
}
.cabecera h1 {
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 25px;
  margin-bottom: 0;
}

.calcu {
  align-items: center;
  justify-content: center;
  border: solid 5px;
  border-color: #34495e;
  width: 350px;
  height: auto;
  margin-left: 20px;
  margin-top: 50px;
  background-color: #f9e79f;
}

.resultado {
  width: auto;
  height: 30px;
  padding-bottom: 10px;
  border: 4px ridge #212f3c;
  font-size: 30px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: right;
  padding-right: 20px;
  display: grid;
  flex-wrap: wrap;
  justify-content: center;
}

.resultado input {
  border: none;
  background-color: #f9e79f;
  margin: 5px;
  font-size: 25px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.cont-numeros button {
  margin-inline-end: auto;
  width: 50px;
  font-size: 25px;
  margin-left: auto;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  border-radius: 12px;
  cursor: pointer;
}

.cont-numeros button:hover {
  background-color: #2980b9;
}

.cont-numeros {
  width: auto;
  height: 50px;
  display: flex;
  justify-content: center;
  margin: 20px;
}

.cero {
  width: auto;
  height: 50px;
  display: flex;
  justify-content: center;
  margin-left: 35px;
  margin-bottom: 25px;
}
.cero button {
  margin-inline-end: auto;
  width: 50px;
  font-size: 25px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  border-radius: 12px;
}

.cero button:hover {
  background-color: #2980b9;
}

.button-signo {
  color: red;
  background-color: #a9cce3;
}
</style>