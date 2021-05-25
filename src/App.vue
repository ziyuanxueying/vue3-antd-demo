<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <a-button type="primary" @click="btnLogin">飞书登录</a-button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { getQueryString, toFeishu } from './utils/common'
import { login } from './api/test'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    btnLogin() {
      console.log(getQueryString().code)
      getQueryString().code ? login(getQueryString().code) : toFeishu()
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
