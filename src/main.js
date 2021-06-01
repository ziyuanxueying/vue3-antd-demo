import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
//注入全局属性$message
import { message, notification } from 'ant-design-vue'
import router from './routers/index'

//全局注册
const app = createApp(App)
app.provide('$message', message)
app.provide('$notification', notification)
// createApp(App)
//   .use(router)
//   .use(store)
//   .use(Antd)
//   .mount('#app')
app
  .use(Antd)
  .use(router)
  .mount('#app')
