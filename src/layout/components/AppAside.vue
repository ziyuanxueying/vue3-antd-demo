<template>
  <a-layout-sider class="left-sider" v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="flex-row-center">
      <img class="logo" src="../../assets/img/ablogo.png" />
    </div>
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
      <a-menu-item key="1">
        <user-outlined />
        <span class="nav-text">nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span class="nav-text">nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span class="nav-text">nav 3</span>
      </a-menu-item>
      <a-menu-item key="4">
        <user-outlined />
        <component :is="$antIcons['StepBackwardOutlined']" />
        <span class="nav-text">nav 4</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.left-sider {
  height: 100vh;
  .logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 20px;
  }
}
</style>