<template>
  <a-layout-header class="flex-row">
    <menu-unfold-outlined v-if="isSide" class="trigger" @click="sideClick" />
    <menu-fold-outlined v-else class="trigger" @click="sideClick" />
    <div class="flex-wrap"></div>
    <a-avatar src="" style="margin-right: 10px">213</a-avatar>
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
</template>

<script>
export default {
  data() {
    return { isSide: false }
  },
  mounted() {},
  methods: {
    sideClick() {
      this.isSide = !this.isSide
      this.$store.dispatch('isSide', this.isSide)
    },
    onClick(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="less" scoped>
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