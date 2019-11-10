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
      <el-menu-item
        index="/ysrk"
        class="el-icon-s-order"
      >
        履约验收入库(stp)
      </el-menu-item>
      <el-menu-item
        index="/shangjd"
        class="el-icon-s-order"
      >
        上架单(stp)
      </el-menu-item>
      <el-menu-item
        index="/ggrk"
        class="el-icon-s-order"
      >
        履约货物交接(stp)
      </el-menu-item>
      <el-menu-item
        index="/yscx"
        class="el-icon-s-order"
      >
        验收冲销(stp)
      </el-menu-item>
      <el-menu-item
        index="/jjcx"
        class="el-icon-s-order"
      >
        交接冲销(sl)
      </el-menu-item>
      <!-- <el-menu-item
        index="/tyczd"
        class="el-icon-s-order"
      >
        退役资产代保管(stp)
      </el-menu-item>
      <el-menu-item
        index="/xlzd"
        class="el-icon-s-order"
      >
        系统字典(sl)
      </el-menu-item>
      <el-menu-item
        index="/gwscrk"
        class="el-icon-s-order"
      >
        国网商城入库(sl)
      </el-menu-item>
      <el-menu-item
        index="/gjwt"
        class="el-icon-s-order"
      >
        工程结余物资退库(sl)
      </el-menu-item>
      <el-menu-item
        index="/kchd"
        class="el-icon-s-order"
      >
        库存核对(stp)
      </el-menu-item>
      <el-menu-item
        index="/ylfh"
        class="el-icon-s-order"
      >
        预留发货(sl)
      </el-menu-item> -->
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
