import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'


// createApp(App)
//   .use(router)
//   .use(store)
//   .use(Antd)
//   .mount('#app')
createApp(App)
  .use(Antd)
  .mount('#app')
