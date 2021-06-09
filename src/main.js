import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
//注入全局属性$message
import { message, notification } from 'ant-design-vue'
import * as antIcons from '@ant-design/icons-vue'
import router from './routers/index'
import store from './plugins/store'

//全局注册
const app = createApp(App)
app.provide('$message', message)
app.provide('$notification', notification)
// 注册组件
Object.keys(antIcons).forEach(key => {
  app.component(key, antIcons[key])
})
// 添加到全局
app.config.globalProperties.$antIcons = antIcons

// createApp(App)
//   .use(router)
//   .use(store)
//   .use(Antd)
//   .mount('#app')
app
  .use(Antd)
  .use(router)
  .use(store)
  .mount('#app')
