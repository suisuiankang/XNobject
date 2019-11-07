<template>
  <el-container>
    <el-main>
      <div class="elbmb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">
            首页
          </el-breadcrumb-item>
          <el-breadcrumb-item>履约验收入库</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-form
        ref="gform"
        class="gform"
        label-width="100px"
        min-width="800px"
        size="mini"
        :model="gform"
      >
        <el-row>
          <el-col
            :xl="{span:6,offset:0}"
            :lg="{span:6,offset:0}"
            :md="{span:6,offset:0}"
            :sm="{span:7,offset:0}"
          >
            <el-form-item
              label="发货通知单号:"
              prop="supplyplancode"
            >
              <el-input
                v-model="gform.supplyplancode"
                placeholder="获取ERP数据字段接口"
              />
            </el-form-item>
          </el-col>
          <el-col
            :xl="{span:6,offset:0}"
            :lg="{span:6,offset:0}"
            :md="{span:6,offset:0}"
            :sm="{span:7,offset:0}"
          >
            <el-form-item
              label="采购订单:"
              prop="ebeln"
            >
              <el-input v-model="gform.ebeln" />
            </el-form-item>
          </el-col>
          <el-col
            :xl="{span:6,offset:0}"
            :lg="{span:6,offset:0}"
            :md="{span:6,offset:0}"
            :sm="{span:7,offset:0}"
          >
            <el-form-item
              label="工厂:"
              prop="werks"
            >
              <el-select
                v-model="gform.werks"
                placeholder="请选择"
                @change="specifiName($event)"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col
            :xl="{span:6,offset:0}"
            :lg="{span:6,offset:0}"
            :md="{span:6,offset:0}"
            :sm="{span:7,offset:0}"
          >
            <el-form-item
              label="物料凭证:"
              prop="mblnr"
            >
              <el-input v-model="gform.mblnr" />
            </el-form-item>
          </el-col>
          <el-col
            :xl="{span:6,offset:0}"
            :lg="{span:6,offset:0}"
            :md="{span:6,offset:0}"
            :sm="{span:7,offset:0}"
          >
            <el-form-item
              label="凭证年份:"
              prop="gjahr"
            >
              <el-input v-model="gform.gjahr " />
            </el-form-item>
          </el-col>
          <el-col
            :xl="{span:6,offset:0}"
            :lg="{span:6,offset:0}"
            :md="{span:6,offset:0}"
            :sm="{span:7,offset:0}"
          >
            <el-form-item
              label="库存地点:"
              prop="lgort"
            >
              <el-select
                v-model="gform.lgort"
                placeholder="请选择"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col
            :xl="{span:6,offset:0}"
            :lg="{span:6,offset:0}"
            :md="{span:6,offset:0}"
            :sm="{span:7,offset:0}"
          >
            <el-form-item
              label="凭证日期:"
              prop="ks_pstngDate"
            >
              <el-date-picker
                v-model="gform.ks_pstngDate"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
              />
            </el-form-item>
          </el-col>
          <el-col
            :xl="{span:6,offset:0}"
            :lg="{span:6,offset:0}"
            :md="{span:6,offset:0}"
            :sm="{span:7,offset:0}"
          >
            <el-form-item
              label="至:"
              prop="js_pstngDate"
            >
              <el-date-picker
                v-model="gform.js_pstngDate"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
              />
            </el-form-item>
          </el-col>
          <el-col
            :xl="{span:6,offset:0}"
            :lg="{span:6,offset:0}"
            :md="{span:6,offset:0}"
            :sm="{span:7,offset:0}"
          >
            <el-form-item>
              <el-button
                type="primary"
                @click="iscord=true"
              >
                查询
              </el-button>
              <el-button
                type="primary"
                @click="iscord=false"
              >
                重置
              </el-button>
              <!-- resetFields -->
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-card
        v-if="iscord"
        class="box-card"
      >
        <el-form
          ref="gform"
          class="gform"
          label-width="100px"
          size="mini"
          :model="gform"
        >
          <el-row>
            <el-col :span="4">
              <el-form-item
                label="发货通知单号:"
                prop="supplyplancode"
              >
                <el-input v-model="gform.supplyplancode" />
              </el-form-item>
            </el-col>
            <el-col
              :span="4"
              :offset="8"
            >
              <el-form-item
                label="采购订单:"
                prop="ebeln"
              >
                <el-input v-model="gform.ebeln" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <el-form-item
                label="发货方(签字):"
                prop="supplyplancode"
              >
                <el-input v-model="gform.supplyplancode" />
              </el-form-item>
            </el-col>
            <el-col
              :span="4"
              :offset="8"
            >
              <el-form-item
                label="发货方(时间):"
                prop="ks_pstngDate"
              >
                <el-date-picker
                  v-model="gform.ks_pstngDate"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <el-form-item
                label="收货方(签字):"
                prop="supplyplancode"
              >
                <el-input v-model="gform.supplyplancode" />
              </el-form-item>
            </el-col>
            <el-col
              :span="4"
              :offset="8"
            >
              <el-form-item
                label="收货方(时间):"
                prop="ks_pstngDate"
              >
                <el-date-picker
                  v-model="gform.ks_pstngDate"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <el-form-item
                label="实际交货地点:"
                prop="supplyplancode"
              >
                <el-input v-model="gform.supplyplancode" />
              </el-form-item>
            </el-col>
            <el-col
              :span="4"
              :offset="8"
            >
              <el-form-item
                label="实际交货日期:"
                prop="ks_pstngDate"
              >
                <el-date-picker
                  v-model="gform.ks_pstngDate"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <el-form-item
                label="供应商名称:"
                prop="supplyplancode"
              >
                <el-input v-model="gform.supplyplancode" />
              </el-form-item>
            </el-col>
            <el-col
              :span="4"
              :offset="8"
            >
              <el-form-item
                label="移动类型:"
                prop="ebeln"
              >
                <el-input v-model="gform.ebeln" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <el-form-item
                label="确定交货日期:"
                prop="ks_pstngDate"
              >
                <el-date-picker
                  v-model="gform.ks_pstngDate"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                />
              </el-form-item>
            </el-col>
            <el-col
              :span="4"
              :offset="8"
            >
              <el-form-item
                label="备注:"
                prop="ebeln"
              >
                <el-input v-model="gform.ebeln" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-card>
      <div class="lvys-xuanxian">
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-folder"
          @click="isPreservation()"
        >
          保存
        </el-button>
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-document-copy"
          @click="isJiaojie()"
        >
          确认交接
        </el-button>
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-document-copy"
          @click="isBid()"
        >
          绑定实物ID
        </el-button>
      </div>
      <div class="lvys-cd">
        <div class="cd-list">
          <template>
            <el-table
              max-height="314"
              tooltip-effect="dark"
              style="width: 100%"
              :data="tabgData"
              :header-cell-style="{background:'#edf5f2'}"
              @selection-change="handleSelectionChange"
            >
              <el-table-column
                fixed
                style="border-right: 1px solid #ccc;"
                type="selection"
                width="55"
              />
              <el-table-column
                header-align="center"
                prop="ext4"
                label="数据状态"
                width="80"
                align="center"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="supplyplancode"
                label="发货通知单号"
                width="180"
                align="center"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="ebeln"
                label="采购订单"
                width="110"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="ebelp"
                label="行项目"
                width="70"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="matnr"
                label="物料编码"
                width="100"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="maktx"
                label="物料描述"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zjjsl"
                label="交接数量"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="menge"
                label="发货数量"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="meins"
                label="计量单位"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="werks"
                label="工厂"
                width="60"
              />
              <el-table-column
                header-align="center"
                prop="werksdescription"
                label="工厂名称"
                width="110"
                align="center"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="posid"
                label="WBS元素"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="psphi"
                label="项目编码"
                width="120"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="xmpost1"
                label="项目描述"
                width="120"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="pratx"
                label="项目类型"
                width="120"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="zhtbh"
                label="合同编号"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zxmdw"
                label="项目单位"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="username"
                label="用户名"
                width="70"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zfhfqz"
                label="发货方（签字）"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zfhfsj"
                label="发货方（时间）"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zshfqz"
                label="收货方（签字）"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zshfsj"
                label="收货方（时间）"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zsjjhq"
                label="实际交货日期"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="actualdeliverypl"
                label="实际交货地点"
                width="140"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="remark"
                label="备注"
                width="60"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="pstngDate"
                label="过账日期"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="blart"
                label="凭证日期"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="bwart"
                label="移动类型"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="bukrs"
                label="公司代码"
                width="80"
              />
              <el-table-column
                header-align="center"
                prop="bukrsdescription"
                label="公司名称"
                width="140"
                align="center"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zyjfhq"
                label="预计发货日期"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="eindt"
                label="确定交货日期"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="suppliername"
                :show-overflow-tooltip="true"
                label="供应商名称"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="supplinkman"
                label="供应商联系人"
                width="120"
              />
              <el-table-column
                header-align="center"
                prop="supplinkmantelep"
                label="供应商联系人电话"
                width="140"
                align="center"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="carrlinkman"
                label="承运商联系人"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="carrlinkmantelep"
                label="承运商联系人固定电话"
                width="180"
              />
              <el-table-column
                align="center"
                header-align="center"
                prop="delinkman"
                label="收货联系人"
                width="120"
              />
              <el-table-column
                header-align="center"
                prop="delinkmantelepho"
                label="收货联系人固定电话"
                width="180"
                align="center"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="msgcode"
                label="反馈结果"
                width="120"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="msgdesp"
                label="反馈消息"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="mblnr"
                label="交接单入库凭证"
                width="160"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="gjahr"
                label="交接单入库凭证年度"
                width="180"
              />
            </el-table>
          </template>
        </div>
      </div>
      <div class="block fenyezhanshi">
        <el-pagination
          :page-sizes="[10, 20, 30, 40, 50,100,300]"
          :page-size="20"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      gform: {
        supplyplancode: '',
        ebeln: '',
        werks: '',
        mblnr: '',
        gjahr: '',
        lgort: '',
        ks_pstngDate: '',
        js_pstngDate: ''
      },
      tabgData: [
        {
          ext4: '未处理',
          supplyplancode: '0',
          ebeln: '0',
          ebelp: '0',
          matnr: '0',
          maktx: '0',
          zjjsl: '0',
          menge: '0',
          meins: '0',
          werks: '0',
          werksdescription: '0',
          posid: '',
          psphi: '',
          xmpost1: '',
          pratx: '',
          zhtbh: '',
          zxmdw: '',
          username: '',
          zfhfqz: '',
          zfhfsj: '',
          zshfqz: '',
          zshfsj: '',
          zsjjhq: '',
          actualdeliverypl: '',
          remark: '',
          pstngDate: '',
          blart: '',
          bwart: '',
          bukrs: '',
          bukrsdescription: '',
          zyjfhq: '',
          eindt: '',
          suppliername: '',
          supplinkman: '',
          supplinkmantelep: '',
          carrlinkman: '',
          carrlinkmantelep: '',
          delinkman: '',
          delinkmantelepho: '',
          msgcode: '',
          msgdesp: '',
          mblnr: '',
          gjahr: ''
        },
        {
          ext4: '未处理',
          supplyplancode: '0',
          ebeln: '0',
          ebelp: '0',
          matnr: '0',
          maktx: '0',
          zjjsl: '0',
          menge: '0',
          meins: '0',
          werks: '0',
          werksdescription: '0',
          posid: '',
          psphi: '',
          xmpost1: '',
          pratx: '',
          zhtbh: '',
          zxmdw: '',
          username: '',
          zfhfqz: '',
          zfhfsj: '',
          zshfqz: '',
          zshfsj: '',
          zsjjhq: '',
          actualdeliverypl: '',
          remark: '',
          pstngDate: '',
          blart: '',
          bwart: '',
          bukrs: '',
          bukrsdescription: '',
          zyjfhq: '',
          eindt: '',
          suppliername: '',
          supplinkman: '',
          supplinkmantelep: '',
          carrlinkman: '',
          carrlinkmantelep: '',
          delinkman: '',
          delinkmantelepho: '',
          msgcode: '',
          msgdesp: '',
          mblnr: '',
          gjahr: ''
        },
        {
          ext4: '未处理',
          supplyplancode: '0',
          ebeln: '0',
          ebelp: '0',
          matnr: '0',
          maktx: '0',
          zjjsl: '0',
          menge: '0',
          meins: '0',
          werks: '0',
          werksdescription: '0',
          posid: '',
          psphi: '',
          xmpost1: '',
          pratx: '',
          zhtbh: '',
          zxmdw: '',
          username: '',
          zfhfqz: '',
          zfhfsj: '',
          zshfqz: '',
          zshfsj: '',
          zsjjhq: '',
          actualdeliverypl: '',
          remark: '',
          pstngDate: '',
          blart: '',
          bwart: '',
          bukrs: '',
          bukrsdescription: '',
          zyjfhq: '',
          eindt: '',
          suppliername: '',
          supplinkman: '',
          supplinkmantelep: '',
          carrlinkman: '',
          carrlinkmantelep: '',
          delinkman: '',
          delinkmantelepho: '',
          msgcode: '',
          msgdesp: '',
          mblnr: '',
          gjahr: ''
        }
      ],
      multipleSelection: [],
      total: 1,
      iscord: false
    }
  },
  methods: {
    // 保存
    isPreservation () {
      this.$confirm('此操作将永久保存记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '保存成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          })
        })
    },
    // 绑定实物ID
    isBid () {
      // eslint-disable-next-line eqeqeq
      if (this.multipleSelection.length == 0) {
        this.$message({
          message: '未选中编辑内容',
          type: 'warning'
        })
      } else {
        this.$confirm('此操作将绑定实物ID, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$message({
              type: 'success',
              message: '操作成功!'
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消操作'
            })
          })
      }
    },
    // 确认交接
    isJiaojie () {
      // eslint-disable-next-line eqeqeq
      if (this.multipleSelection.length == 0) {
        this.$message({
          message: '未选中编辑内容',
          type: 'warning'
        })
      } else {
        this.$confirm('此操作将确认交接, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$message({
              type: 'success',
              message: '操作成功!'
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消操作'
            })
          })
      }
    },
    handleSizeChange (val) {
      // this.$ajax
      //   .get(
      //     `tBasicCangku/?params={"columns":"wid,lgort,lgortname,lgortlevel,address,buildarea,usearea,shedarea,dumparea,remark","pageIndex":1,"pageSize":${val}}`
      //   )
      //   .then(res => {
      //     //   console.log(res.data.resultValue);
      //     this.tabData = res.data.resultValue.items;
      //   });
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      // this.$ajax
      //   .get(
      //     `tBasicCangku/?params={"columns":"wid,lgort,lgortname,lgortlevel,address,buildarea,usearea,shedarea,dumparea,remark","pageIndex":${val},"pageSize":20}`
      //   )
      //   .then(res => {
      //     //   console.log(res.data.resultValue);
      //     this.tabData = res.data.resultValue.items;
      //   });
      console.log(`当前页: ${val}`)
    },
    // 保存选中结果
    handleSelectionChange (val) {
      this.multipleSelection = val
      //   console.info(this.multipleSelection, 1);
    }
  }
}
</script>

<style scoped lang = "less">
.el-main {
  padding: 0 !important;
  overflow: hidden;
  min-width: 800px;
  .elbmb {
    height: 40px;
    margin: 10px 0 -20px 20px;
  }
  .gform {
    width: 98.5%;

    box-sizing: border-box;
    margin: 20px 0 0 20px;

    .el-button {
      background-color: #09b09a;
      border: none;
    }

    /* .el-input--mini .el-input__inner {
      width: 180px;
      height: 28px;
      line-height: 28px;
    }

    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 206px;
    } */

    .el-input,
    .el-select,
    .el-date-picker {
      width: 2.889rem !important;
    }
  }
  .box-card {
    box-sizing: border-box;
    width: 99%;
    margin-left: 0.5%;
    margin-bottom: 10px;
    padding: 0 40px !important;

    .el-form {
      margin: 0 !important;

      .el-date-editor.el-input,
      .el-date-editor.el-input__inner {
        width: 190px;
      }
    }
  }
  .lvys-xuanxian {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    border-top: 1px solid #ccc;
    padding-left: 30px;

    /* .deload {
      box-sizing: border-box;
      display: inline-block;
      margin: 0 10px;
    } */

    .el-button {
      background-color: #09b09a;
      border: none;
    }

    .el-button:nth-child(1) {
      position: absolute;
      top: 7px;
      left: 30px;
    }
    .el-button:nth-child(2) {
      position: absolute;
      top: 7px;
      left: 112px;
    }
    .el-button:nth-child(3) {
      position: absolute;
      top: 7px;
      left: 230px;
    }
    /* .el-checkbox__input.is-checked .el-checkbox__inner,
    .el-checkbox__input.is-indeterminate .el-checkbox__inner {
      background-color: #09b09a;
      border-color: none;
    } */
    float: right;
    padding-right: 20px;
    background-color: #fff;

  }
  .fenyezhanshi {
    position: relative;
    height: 36px!important;
    margin-top: 10px;
    .el-pagination {
      position: absolute;
      right: 0;
      bottom: 0;
      height: 34px!important;
    }
  }
}
</style>
