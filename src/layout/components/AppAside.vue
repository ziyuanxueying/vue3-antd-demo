<template>
  <a-layout-sider class="left-sider" v-model:collapsed="sideShow" :trigger="null" collapsible>
    <div class="flex-row-center">
      <img class="logo" src="../../assets/img/ablogo.png" />
    </div>
    <a-menu
      theme="dark"
      mode="inline"
      v-model:openKeys="openKeys"
      :selectedKeys="selectedKeys"
      @click="onSelectChange"
      @openChange="onOpenChange"
    >
      <template v-for="item of menus">
        <sub-menu
          v-if="item.subs && item.subs.length > 0 && item.subs.filter(v => v.hidden).length !== item.subs.length"
          :item="item"
          :key="item.name"
        ></sub-menu>
        <menu-item v-else :key="item.name" :item="item"></menu-item>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import MenuItem from './MenuItem.vue'
import SubMenu from './SubMenu.vue'
import menu from '../../routers/menu'
// import { ref, reactive, toRefs } from 'vue' // 引入Composition API
import _ from 'loadsh'
export default {
  components: {
    MenuItem,
    SubMenu
  },
  data() {
    return {
      openKeys: [],
      selectedKeys: ['index'],
      menus: []
    }
  },
  // setup() {
  //   // const selectedKeys = reactive([])
  //   return {
  //     // selectedKeys
  //   }
  // },
  created() {
    this.menus = menu
    this.openKeys = this.initMenu().opens
    this.selectedKeys = [this.initMenu().select]
  },
  methods: {
    initMenu() {
      let select = _.find(menu, i => {
        return i.path === this.$route.path
      })
      if (select) return { opens: [], select: select.name }
      for (const item of menu) {
        if (!item.path) {
          let val = _.find(item.subs, o => o.path === this.$route.path)
          val && (select = { opens: [item.name], select: val.name })
        }
      }
      console.log(select)
      return select
    },
    onSelectChange({ key }) {
      this.selectedKeys = [key]
      console.log(this.selectedKeys)
    },
    onOpenChange(v) {
      if (v.length === 0 || v.length === 1) {
        this.openKeys = v
        return void 0
      }
      const latestOpenKey = v[v.length - 1]
      // 这里与定义的路由规则有关
      if (latestOpenKey.includes(v[0])) {
        this.openKeys = v
      } else {
        this.openKeys = [latestOpenKey]
      }
    }
  },
  computed: {
    sideShow() {
      return this.$store.getters['isSide']
    }
  }
}
</script>

<style lang="less" scoped>
.left-sider {
  height: 100vh;
  color: white;
  .logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 20px;
  }
}
</style>