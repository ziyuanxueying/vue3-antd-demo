<template>
  <a-layout-sider class="left-sider" v-model:collapsed="sideShow" :trigger="null" collapsible>
    <div class="flex-row-center">
      <img class="logo" src="../../assets/img/ablogo.png" />
    </div>
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys" @click="onSelectChange">
      <template v-for="(item, i) of menus" :key="i">
        <sub-menu
          v-if="item.subs && item.subs.length > 0 && item.subs.filter(v => v.hidden).length !== item.subs.length"
          :item="item"
        ></sub-menu>
        <menu-item v-else :key="item.name" :item="item"></menu-item>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import MenuItem from './MenuItem.vue'
import SubMenu from './SubMenu.vue'
export default {
  // props: {
  //   menu: {
  //     required: true,
  //     type: Array
  //   }
  // },
  components: {
    MenuItem,
    SubMenu
  },
  data() {
    return {
      selectedKeys: ['test'],
      menus: [
        {
          name: 'test',
          title: 'a1',
          icon: 'HomeOutlined'
        },
        {
          name: 'Index',
          title: '首页',
          icon: 'HomeOutlined',
          subs: [
            {
              name: 'test1',
              title: '测试1'
            }
          ]
        }
      ]
    }
  },
  mounted() {},
  methods: {
    onSelectChange({ key }) {
      console.log(key)
      this.selectedKeys = [key]
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
  .logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 20px;
  }
}
</style>