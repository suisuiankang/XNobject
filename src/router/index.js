import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home'
import '../static/js/rem.js'
import Shangjd from '../views/shangjd/shangjd'
import Ysrk from '../views/lysrk/ysrk'
import Ggrk from '../views/ggrk/ggrk'
import Yscx from '../views/yscx/yscx'
import Jjcx from '../views/jjcx/jjcx'
import Tyczd from '../views/tyzcd/tyzcd'
import Xlzd from '../views/xlzd/xtzd'
import Gwscrk from '../views/gwscrk/gwscrk'
import Gjwt from '../views/gjwt/gcjywztk'

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
  path: '/tyczd',
  name: 'tyczd',
  component: Tyczd
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
  path: '/gjwt',
  name: 'gjwt',
  component: Gjwt
}
]

const router = new VueRouter({
  routes
})

export default router
