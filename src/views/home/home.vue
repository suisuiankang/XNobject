<template>
  <el-menu
    router
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    style="border-right:none"
    background-color="#f2fffe"
    text-color="#000"
    active-text-color="rgb(26, 145, 151)"
  >
    <el-submenu index="/">
      <template slot="title">
        <i class="el-icon-s-operation" />
        <span>辅助工具管理平台</span>
      </template>
      <!-- 入库业务 -->
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
      <!-- 上架业务 -->
      <el-menu-item
        index="/shangjd"
        class="el-icon-s-order"
      >
        上架单(stp)
      </el-menu-item>
      <!-- 出库业务 -->
      <el-menu-item
        index="/ylfh"
        class="el-icon-s-order"
      >
        预留发货(stp)
      </el-menu-item>
      <!-- 下架业务 -->
      <el-menu-item
        index="/jhd"
        class="el-icon-s-order"
      >
        拣货单(sl)
      </el-menu-item>
      <!-- 冲销业务 -->
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
      <!-- 库内移货 -->
      <el-menu-item
        index="/kcyk"
        class="el-icon-s-order"
      >
        移库单(stp)
      </el-menu-item>
      <!-- 数据查询 -->
      <el-menu-item
        index="/kchd"
        class="el-icon-s-order"
      >
        库存核对(stp)
      </el-menu-item>
      <!--  -->
      <el-menu-item
        index="/xlzd"
        class="el-icon-s-order"
      >
        系统字典(sl)
      </el-menu-item>
      <!-- 转储业务 -->
      <el-menu-item
        index="/zcyw"
        class="el-icon-s-order"
      >
        公司内转储业务(sl)
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
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
