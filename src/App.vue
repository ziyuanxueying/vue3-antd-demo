<template>
  <router-view />
  <!-- <router-view v-wechat-title="$route.meta.title"   /> -->
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
/*每个页面公共css */
@import '../src/common/global.less';
</style>
