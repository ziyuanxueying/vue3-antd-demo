<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <a-button type="primary" @click="btnLogin">按钮</a-button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { toFeishu } from './utils/common'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    btnLogin() {
      console.log(123)
      toFeishu()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
