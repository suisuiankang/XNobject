import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import axios from 'axios'
// import '../src/static/js/rem'
// eslint-disable-next-line no-unused-vars

import onlyNumber from '../src/directive/el-input'
import common from '../src/util/common'

axios.defaults.timeout = 5000 // 请求超时
axios.defaults.baseURL = '/api/' // api 即上面 vue.config.js 中配置的地址
Vue.prototype.$ajax = axios
Vue.prototype.common = common

Vue.use(ElementUI)

Vue.use(onlyNumber)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
