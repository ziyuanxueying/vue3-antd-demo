<template>
  <a-menu-item>
    <router-link :to="item.path">
      <component v-if="item.icon" :is="item.icon"></component>
      <span>{{ item.title }}</span>
    </router-link>
  </a-menu-item>
</template>
<script>
export default {
  name: 'MenuItem',
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