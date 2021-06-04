<template>
  <div>
    <AppAside></AppAside>
  </div>
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
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="less" scoped>
</style>