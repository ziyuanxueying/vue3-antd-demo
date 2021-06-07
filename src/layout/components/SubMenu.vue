<template>
  <a-sub-menu>
    <template v-slot:title>
      <span>
        <component v-if="item.icon" :is="item.icon"></component>
        <span>{{ item.title }}</span>
      </span>
    </template>
    <template v-for="child of item.subs">
      <sub-menu
        v-if="child.subs && child.subs.length > 0 && child.subs.filter(v => v.hidden).length !== child.subs.length"
        :key="child.name"
        :item="child"
      ></sub-menu>
      <menu-item v-else :key="child.name" :item="child"></menu-item>
    </template>
  </a-sub-menu>
</template>
<script>
import MenuItem from './MenuItem.vue'
export default {
  name: 'SubMenu',
  components: {
    MenuItem
  },
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  data() {
    return {}
  }
}
</script>