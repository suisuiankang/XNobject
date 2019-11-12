import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home'
import '../static/js/rem.js'
// 入库业务
import Ggrk from '../views/RK_ggrk/ggrk'
import Ysrk from '../views/RK_ysrk/ysrk'
import Gwscrk from '../views/RK_gwscrk/gwscrk'
import Tycz from '../views/RK_tyzc/tyzc'
import Gcjy from '../views/RK_gcjy/gcjy'
import Wzbf from '../views/RK_wzbf/wzbf'
// 上架业务
import Shangjd from '../views/SJ_sjd/shangjd'
import Yscx from '../views/yscx/yscx'
import Jjcx from '../views/jjcx/jjcx'
import Xlzd from '../views/xlzd/xtzd'
import Kchd from '../views/kc_check/kchd'
import Ylfh from '../views/ylfh/ylfh'
import Kcyk from '../views/kcyk/kcyk'
import Jhd from '../views/XJ_jhd/jhd'
// 转储业务
import Zcyw from '../views/ZC_zcyw/zcyw'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home
},
{
  path: '/shangjd',
  name: 'shangjd',
  component: Shangjd
},
{
  path: '/ysrk',
  name: 'ysrk',
  component: Ysrk
},
{
  path: '/ggrk',
  name: 'ggrk',
  component: Ggrk
},
{
  path: '/yscx',
  name: 'yscx',
  component: Yscx
},
{
  path: '/jjcx',
  name: 'jjcx',
  component: Jjcx
},
{
  path: '/tyzc',
  name: 'tyzc',
  component: Tycz
},
{
  path: '/xlzd',
  name: 'xlzd',
  component: Xlzd
},
{
  path: '/gwscrk',
  name: 'gwscrk',
  component: Gwscrk
},
{
  path: '/gcjy',
  name: 'gcjy',
  component: Gcjy
},
{
  path: '/wzbf',
  name: 'wzbf',
  component: Wzbf
},
{
  path: '/kchd',
  name: 'kchd',
  component: Kchd
},
{
  path: '/ylfh',
  name: 'ylfh',
  component: Ylfh
},
{
  path: '/kcyk',
  name: 'kcyk',
  component: Kcyk
},
{
  path: '/jhd',
  name: 'jhd',
  component: Jhd
},
{
  path: '/zcyw',
  name: 'zcyw',
  component: Zcyw
}
]

const router = new VueRouter({
  routes
})

export default router
