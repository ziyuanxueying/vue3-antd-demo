import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@fortawesome/fontawesome-free/css/all.css' // 确保您正在使用 css-loader
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'fa'
  },
  theme: {
    themes: {
      light: {
        primary: colors.green.darken1, // #2FAB51
        secondary: colors.green.lighten1, // #66BB6A
        accent: colors.blue.lighten1, // #3F51B5
        grayDark: colors.grey.darken3, // #2FAB51
        warning: colors.orange.lighten1, // #FFA726
        white: colors.shades.white,
        orange: colors.orange.darken4,
        red: colors.red.darken4
      }
    }
  }
})
