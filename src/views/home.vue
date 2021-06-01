<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <a-button type="primary" @click="toHome">飞书登录</a-button>
    <br />
    <iframe id="fj-iframe" ref="iframe" :src="orderFoodUrl" frameborder="0" style="width: 200px; height: 200px" />
    <!-- <img :src="orderFoodUrl1" style="display: none" /> -->
    <a-button style="margin-top: 20px" type="primary" @click="btnBeiji">跳转北极星</a-button>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'
import { getQueryString, toFeishu } from '../utils/common'
import { login } from '../api/test'
import { useRouter } from 'vue-router'
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      orderFoodUrl: ''
      // orderFoodUrl: 'http://test-bi.naxions.com/decision?fr_username=seven'
    }
  },
  setup() {
    const router = useRouter()
    const toHome = () => {
      router.push({
        name: 'Home'
      })
    }
    return {
      toHome
    }
  },
  created() {
    console.log(window.self === window.top) //如果返回true –> 说明页面并没有被嵌套在iframe中
    // getQueryString().code && login(getQueryString().code)
  },
  methods: {
    btnLogin() {
      //   getQueryString().code ? this.getLogin() : toFeishu()
      //   this.$notification.info('哈哈')
    },
    getLogin() {
      login(getQueryString().code)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(`---${err}`)
        })
    },
    btnBeiji() {
      // this.orderFoodUrl = 'http://test-bi.naxions.com/decision?fr_username=seven'
      this.$refs.iframe.contentWindow.location.replace(
        'http://10.101.0.71:6060/about'
        // 'http://test-bi.naxions.com/decision?code=g5eobK6ZAI0SblPQNKaZEtgT9dVP0w8uwSy2yf+Pv1Nei/TXMunLczOG+FjWR5eX'
      )
      setTimeout(() => {
        let myIframe = document.getElementById('fj-iframe').contentWindow.document.getElementsByTagName('body')[0]
          .innerText
        if (JSON.parse(myIframe).code === 300) {
          toFeishu()
        } else {
          window.location.replace('http://test-bi.naxions.com')
        }
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
</style>