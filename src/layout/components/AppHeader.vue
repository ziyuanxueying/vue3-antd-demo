<template>
  <a-layout-header class="flex-row header">
    <menu-unfold-outlined v-if="isSide" class="trigger" @click="sideClick" />
    <menu-fold-outlined v-else class="trigger" @click="sideClick" />
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(item, i) of breadList" :key="i">{{ item.title }}</a-breadcrumb-item>
      <!-- <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
      <a-breadcrumb-item>An Application</a-breadcrumb-item> -->
    </a-breadcrumb>
    <div class="flex-wrap"></div>
    <a-avatar src="" style="margin-right: 10px">213</a-avatar>
    <a-dropdown>
      <a class="ant-dropdown-link" @click.prevent>
        213
        <DownOutlined />
      </a>
      <template #overlay>
        <a-menu>
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
import menu from '../../routers/menu'
import _ from 'loadsh'
export default {
  data() {
    return { isSide: false, breadList: [] }
  },

  mounted() {
    this.breadList = this.initBreadcrumb()
  },
  methods: {
    initBreadcrumb() {
      let select = _.find(menu, i => {
        return i.path === this.$route.path
      })
      if (select) return [select]
      for (const item of menu) {
        if (!item.path) {
          let val = _.find(item.subs, o => o.path === this.$route.path)
          val && (select = [{ name: item.name, title: item.title }, val])
        }
      }
      return select
    },
    sideClick() {
      this.isSide = !this.isSide
      this.$store.dispatch('isSide', this.isSide)
    },
    onClick(val) {
      console.log(val)
    },
    loginOut() {
      console.log('退出登录')
    }
  },
  watch: {
    $route(newVal) {
      this.breadList = this.initBreadcrumb()
    }
  }
}
</script>

<style lang="less" scoped>
.ant-layout-header {
  background: #fff;
  padding: 0 20px 0 0;
  // position: fixed;
  // flex: 1;
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