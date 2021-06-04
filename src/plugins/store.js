import { toRefs, reactive } from 'vue'
import { useStore } from 'vuex'
import Storage from '../utils/storage'
export default {
  namespaced: true,
  setup() {
    const state = reactive({
      name: ''
    })
    const store = useStore()
    state.name = store.state.Name
    return { ...toRefs(state) }
  },
  // module assets
  state: {
    // 当前登陆人
    user: undefined,
    // 未解密的token
    token: undefined,
    isSide: true
  },
  getters: {
    /**
     * 获取当前登陆用户
     *
     * @returns
     */
    user(state) {
      let user = Storage.getLocalItem('user')
      if (!state.user && user) {
        state.user = user
      }
      return state.user
    },
    /**
     * 未解密token
     *
     * @param {*} state
     * @returns
     */
    token(state) {
      let def = Storage.getLocalItem('token')
      if (!state.token && def) {
        state.token = def
      }
      return state.token
    },
    isSide(state) {
      let def = Storage.getLocalItem('isSide')
      if (!state.isSide && def) {
        state.isSide = def
      }
      return state.isSide
    }
  },
  mutations: {
    /**
     * 登陆成功
     *
     * @param {any} state
     * @param {any} [user=validKey()]
     */
    loginSuccess(state, user = Storage.validKey()) {
      state.user = user
      state.token = user.authorization
    },
    /**
     * 退出
     *
     * @param {any} state
     */
    logoutSuccess(state) {
      state.user = undefined
    },
    /**
     * 未解密token
     *
     * @param {*} state
     * @param {*} value
     */
    token(state, value) {
      state.token = value
    },
    isSide(state, value) {
      state.isSide = value
    }
  },
  actions: {
    /**
     * 登陆成功方法
     *
     * @param {any} context
     * @param {any} user
     */
    loginSuccess(context, user = Storage.validKey()) {
      Storage.setLocalItem('user', user)
      Storage.setLocalItem('token', user.authorization)
      context.commit('loginSuccess', user)
    },
    /**
     * 清空登陆人
     *
     * @param {any} context
     */
    logoutSuccess(context) {
      Storage.clearLocal('user')
      Storage.clearLocal('token')
      context.commit('logoutSuccess')
    },
    isSide(context, isSide = Storage.validKey()) {
      Storage.setLocalItem('isSide', isSide)
      context.commit('isSide', isSide)
    }
  }
}
