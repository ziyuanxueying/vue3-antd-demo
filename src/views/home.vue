<template>
  <a-layout>
    <a-layout-sider class="left-sider" v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu mode="inline" v-model:selectedKeys="selectedKeys">
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
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', height: '100%' }">content</div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { ref } from 'vue'
export default {
  data() {
    return {
      collapsed: ref(false),
      selectedKeys: ref(['1'])
    }
  },
  setup() {
    const onCollapse = (collapsed, type) => {
      console.log(collapsed, type)
    }

    const onBreakpoint = broken => {
      console.log(broken)
    }

    return {
      onCollapse,
      onBreakpoint
    }
  }
}
</script>
<style lang="less" scoped>
.left-sider {
  background-color: white;
  height: 100vh;
}
</style>