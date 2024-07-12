import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import '@mdi/font/css/materialdesignicons.css' // Make sure this path is correct

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi' // This sets the default icon font to Material Design Icons
  }
})
