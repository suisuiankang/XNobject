import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home'
import '../static/js/rem.js'
// 入库业务
import Ggrk from '../views/RuKu/ggrk'
import Ysrk from '../views/RuKu/ysrk'
import Gwscrk from '../views/RuKu/gwscrk'
import Tycz from '../views/RuKu/tyzc'
import Gcjy from '../views/RuKu/gcjy'
import Wzbf from '../views/RuKu/wzbf'
// 上架业务
import Shangjd from '../views/ShangJia/shangjd'
// 出库业务
import Ylfh from '../views/ChuKu/ylfh'
import Gdfh from '../views/ChuKu/gdfh'
// 下架业务
import Jhd from '../views/XiaJia/jhd'
// 废旧物资
import Fjrk from '../views/FeiJiu_mateiral/fjrk'
// 冲销业务
import Jjcx from '../views/ChunXiao/jjcx'
import Yscx from '../views/ChunXiao/yscx'
// 库内移货
import Ykd from '../views/KuNeiyihuo/ykd'
// 数据查询
import Kchd from '../views/ShuJu_select/kchd'
// 管理报表
import Zztj from '../views/GuanLi_reportForm/zztj'
// 运维模式
import Xlzd from '../views/YunWe_Pattern/xtzd'
// 转储业务
import Zcyw from '../views/ZhuanChu/zcyw'
import Dbrk from '../views/ZhuanChu/dbrk'
import Dbck from '../views/ZhuanChu/dbck'

Vue.use(VueRouter)

const routes = [
  {
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
    path: '/ykd',
    name: 'ykd',
    component: Ykd
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
  },
  {
    path: '/dbrk',
    name: 'dbrk',
    component: Dbrk
  },
  {
    path: '/dbck',
    name: 'dbck',
    component: Dbck
  },
  {
    path: '/fjrk',
    name: 'fjrk',
    component: Fjrk
  },
  {
    path: '/zztj',
    name: 'zztj',
    component: Zztj
  },
  {
    path: '/gdfh',
    name: 'gdfh',
    component: Gdfh
  }
]

const router = new VueRouter({
  routes
})

export default router
