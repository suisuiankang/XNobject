<template>
  <el-menu
    router
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    style="border-right:none"
    background-color="#f2fffe"
    text-color="#000"
    active-text-color="rgb(26, 145, 151)"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="/">
      <i class="el-icon-s-operation" />
      <span slot="title">辅助工具管理平台</span>
    </el-menu-item>
    <!-- 入库业务 -->
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-menu" />
        <span>入库业务</span>
      </template>
      <el-menu-item
        index="/ggrk"
        class="el-icon-s-order"
      >
        履约货物交接(stp)
      </el-menu-item>
      <el-menu-item
        index="/ysrk"
        class="el-icon-s-order"
      >
        履约验收入库(stp)
      </el-menu-item>
      <el-menu-item
        index="/gwscrk"
        class="el-icon-s-order"
      >
        国网商城入库(sl)
      </el-menu-item>
      <el-menu-item
        index="/tyzc"
        class="el-icon-s-order"
      >
        退役资产代保管(stp)
      </el-menu-item>
      <el-menu-item
        index="/gcjy"
        class="el-icon-s-order"
      >
        工程结余物资退库(sl)
      </el-menu-item>
      <el-menu-item
        index="/wzbf"
        class="el-icon-s-order"
      >
        库存物资报废(stp)
      </el-menu-item>
    </el-submenu>
    <!-- 上架业务 -->
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu" />
        <span>上架业务</span>
      </template>
      <el-menu-item
        index="/shangjd"
        class="el-icon-s-order"
      >
        上架单(stp)
      </el-menu-item>
    </el-submenu>
    <!-- 出库业务 -->
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-menu" />
        <span>出库业务</span>
      </template>
      <el-menu-item
        index="/ylfh"
        class="el-icon-s-order"
      >
        预留发货(stp)
      </el-menu-item>
      <el-menu-item
        index="/gdfh"
        class="el-icon-s-order"
      >
        工单发货(sl)
      </el-menu-item>
    </el-submenu>
    <!-- 下架业务 -->
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-menu" />
        <span>下架业务</span>
      </template>
      <el-menu-item
        index="/jhd"
        class="el-icon-s-order"
      >
        拣货单(sl)
      </el-menu-item>
    </el-submenu>
    <!-- 废旧物资 -->
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-menu" />
        <span>废旧物资</span>
      </template>
      <el-menu-item
        index="/fjrk"
        class="el-icon-s-order"
      >
        废旧入库(sl)
      </el-menu-item>
    </el-submenu>
    <!-- 冲销业务 -->
    <el-submenu index="6">
      <template slot="title">
        <i class="el-icon-menu" />
        <span>冲销业务</span>
      </template>
      <el-menu-item
        index="/jjcx"
        class="el-icon-s-order"
      >
        交接冲销(sl)
      </el-menu-item>
      <el-menu-item
        index="/yscx"
        class="el-icon-s-order"
      >
        验收冲销(stp)
      </el-menu-item>
    </el-submenu>
    <!-- 库内移货 -->
    <el-submenu index="7">
      <template slot="title">
        <i class="el-icon-menu" />
        <span>库内移货</span>
      </template>
      <el-menu-item
        index="/ykd"
        class="el-icon-s-order"
      >
        移库单(stp)
      </el-menu-item>
    </el-submenu>
    <!-- 数据查询 -->
    <el-submenu index="8">
      <template slot="title">
        <i class="el-icon-menu" />
        <span>数据查询</span>
      </template>
      <el-menu-item
        index="/kchd"
        class="el-icon-s-order"
      >
        库存核对(stp)
      </el-menu-item>
    </el-submenu>
    <!-- 管理报表 -->
    <el-submenu index="9">
      <template slot="title">
        <i class="el-icon-menu" />
        <span>管理报表</span>
      </template>
      <el-menu-item
        index="/zztj"
        class="el-icon-s-order"
      >
        库存周转率统计(stp)
      </el-menu-item>
    </el-submenu>
    <!--运维模式 -->
    <el-submenu index="10">
      <template slot="title">
        <i class="el-icon-menu" />
        <span>运维模式</span>
      </template>
      <el-menu-item
        index="/xlzd"
        class="el-icon-s-order"
      >
        系统字典(sl)
      </el-menu-item>
    </el-submenu>
    <!-- 转储业务 -->
    <el-submenu index="11">
      <template slot="title">
        <i class="el-icon-menu" />
        <span>转储业务</span>
      </template>
      <el-menu-item
        index="/zcyw"
        class="el-icon-s-order"
      >
        公司内转储业务(sl)
      </el-menu-item>
      <el-menu-item
        index="/dbrk"
        class="el-icon-s-order"
      >
        调拨物质入库(sl)
      </el-menu-item>
      <el-menu-item
        index="/dbck"
        class="el-icon-s-order"
      >
        调拨物质出库(sl)
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
      // console.log(key)
    },
    handleClose (key, keyPath) {
      console.log(key)
      // console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang = "less">
.el-menu {
  width: 300px;
  /deep/.el-menu--inline {
    line-height: 1px;
  }
}
</style>
