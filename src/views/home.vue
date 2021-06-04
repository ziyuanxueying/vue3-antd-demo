<template>
  <a-layout>
    <a-layout-sider class="left-sider" v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="flex-row-center">
        <img class="logo" src="../assets/img/ablogo.png" />
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
    <a-layout>
      <a-layout-header class="flex-row header">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        <div class="flex-wrap"></div>
        <a-avatar src="">213</a-avatar>
        <a-dropdown>
          <a class="ant-dropdown-link" @click.prevent>
            213
            <DownOutlined />
          </a>
          <template #overlay>
            <a-menu @click="onClick">
              <a-menu-item key="1">退出登录</a-menu-item>
              <a-menu-item>
                <div @click="loginOut">
                  <LogoutOutlined />
                  退出登录
                </div>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', height: '100%' }">content</div>
        <router-view />
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
    const onClick = ({ key }) => {
      console.log(`Click on item ${key}`)
    }

    return {
      onClick
    }
  }
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
.ant-layout-header {
  background: #fff;
  padding: 0 20px 0 0;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #1890ff;
  }
}
</style>