<template>
  <a-layout>
    <AppAside></AppAside>
    <a-layout>
      <AppHeader></AppHeader>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
// import AppAside from './components/AppAside'
// 批量引入组件
const componentFiles = require.context('./components', true, /\.vue$/)

const components = componentFiles.keys().reduce((components, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = componentFiles(modulePath)
  components[moduleName] = value.default
  return components
}, {})
export default {
  components: {
    ...components
  },
  data() {
    return { collapsed: false }
  },
  mounted() {
    // console.log(this.$route.path)
  },
  methods: {},
  computed: {
    key() {
      console.log(this.$route.path)
      return this.$route.path
    },
    sideShow() {
      return this.$store.getters['isSide']
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  margin: 24px 16px 0;
  background-color: white;
}
</style>