<template>
  <div class="hello">
    <button @click="toHome">toHome</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    return {
      router: useRouter()
    }
  },
  methods: {
    toHome() {
      console.log(this.$router)
      this.$router.push({
        name: 'About',
        query: '1'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
