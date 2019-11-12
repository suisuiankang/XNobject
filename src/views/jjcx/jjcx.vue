<template>
  <el-container>
    <el-main>
      <div class="jjcx-top">
        <div class="jjcx-wz">
          <img
            src="../../static/images/Ticon.png"
            alt
          >
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">
              首页
            </el-breadcrumb-item>
            <el-breadcrumb-item>交接冲销单</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <el-form
          ref="mForm"
          class="mForm"
          label-width="100px"
          min-width="800px"
          size="mini"
          :model="mForm"
        >
          <el-row>
            <el-col
              :xl="{span:6,offset:0}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="交接单号:"
                prop="supplyplancode"
              >
                <el-input v-model="mForm.supplyplancode" />
              </el-form-item>
            </el-col>
            <el-col
              :xl="{span:6,offset:0}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="物料凭证:"
                prop="mblnr"
              >
                <el-input v-model="mForm.mblnr" />
              </el-form-item>
            </el-col>
            <el-col
              :xl="{span:6,offset:0}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="物料凭证年份:"
                prop="gjahr"
              >
                <el-input v-model="mForm.gjahr" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col
              :xl="{span:6,offset:0}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="公司代码:"
                prop="bukrs"
              >
                <el-select v-model="mForm.bukrs" />
              </el-form-item>
            </el-col>
            <el-col
              :xl="{span:6,offset:0}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="工厂:"
                prop="werks"
              >
                <el-select
                  v-model="mForm.werks"
                  placeholder="请选择"
                />
              </el-form-item>
            </el-col>
            <el-col
              :xl="{span:6,offset:0}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="库存地点:"
                prop="lgort"
              >
                <el-select v-model="mForm.lgort">
                  <el-option
                    v-for="(item,i) in lgortForm"
                    :key="i"
                    :label="item.text"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col
              :xl="{span:6,offset:0}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="采购订单:"
                prop="ebeln"
              >
                <el-input v-model="mForm.ebeln" />
              </el-form-item>
            </el-col>

            <el-col
              :xl="{span:11,offset:7}"
              :lg="{span:11,offset:6}"
              :md="{span:9,offset:7}"
              :sm="{span:9,offset:7}"
            >
              <el-form-item
                style="float: right;"
                class="ad"
              >
                <el-button
                  size="small"
                  type="primary"
                  @click="queryForm(mForm)"
                >
                  查询
                </el-button>
                <el-button
                  size="small"
                  type="primary"
                  style="background-color: #fff;color: #606266;border: 1px solid #dcdfe6;"
                  @click="restForm('mForm')"
                >
                  清除条件
                </el-button>
                <!-- resetFields -->
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="jjcx-bt">
        <div class="jjcx-jg">
          <img
            src="../../static/images/bicon.png"
            alt
          >
          查询结果
        </div>
        <div class="jjcx-xuanxian">
          <el-button
          size="small"
            type="primary"
            @click="qxForm()"
          >
            确认冲销
          </el-button>
        </div>
        <div class="sw-list">
          <template>
            <el-table
              :max-height="tableHeight"
              tooltip-effect="dark"
              style="width: 100%"
              :data="tabjData"
              :header-cell-style="{background:'#edf5f2'}"
              @selection-change="handleSelectionChange"
            >
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                type="selection"
                width="55"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="ext4"
                label="数据状态"
                :formatter="formatSex"
                width="80"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="supplyplancode"
                label="交接单号"
                width="110"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="ebeln"
                label="采购订单"
                width="80"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="ebelp"
                label="行项目"
                width="80"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="matnr"
                label="物料编码"
                width="80"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="maktx"
                label="物料描述"
                width="80"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="zjjsl"
                label="实际交接数量"
                width="120"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="menge"
                label="交接数量"
                width="80"
              />

              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="meins"
                label="计量单位"
                width="80"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="werks"
                label="工厂"
                width="60"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="werksdescription"
                label="工厂名称"
                width="80"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="lgort"
                label="库存地点"
                width="80"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="lgortdescription"
                label="库存描述"
                width="80"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="whsenumber"
                label="仓库号"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="posid"
                label="WBS元素"
                width="100"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="post1Wbs"
                label="WBS元素描述"
                width="120"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="zxmdw"
                label="项目单位"
                width="80"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="username"
                label="用户名"
                width="80"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="zfhfqz"
                label="发货方（签字）"
                width="120"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="zfhfsj"
                :formatter="formatDate"
                label="发货方（时间）"
                width="120"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="zshfqz"
                label="收货方（签字）"
                width="120"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="zshfsj"
                :formatter="formatDate"
                label="收货方（时间）"
                width="120"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="zsjjhq"
                :formatter="formatDate"
                label="实际交货日期"
                width="120"
              />

              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="actualdeliverypl"
                label="实际交货地点"
                width="120"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="remark"
                label="备注"
                width="60"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="pstngDate"
                :formatter="formatDate"
                label="过账日期"
                width="80"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="blart"
                :formatter="formatDate"
                label="凭证日期"
                width="80"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="bwart"
                label="移动类型"
                width="80"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="bukrs"
                label="公司代码"
                width="80"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="bukrsdescription"
                label="公司名称"
                width="80"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="zyjfhq"
                :formatter="formatDate"
                label="预计发货日期"
                width="120"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="eindt"
                :formatter="formatDate"
                label="确定交货日期"
                width="120"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="suppliername"
                label="供应商名称"
                width="110"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="supplinkman"
                label="供应商联系人"
                width="110"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="supplinkmantelep"
                label="供应商联系人电话"
                width="160"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="carrlinkman"
                label="承运商联系人"
                width="120"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="carrlinkmantelep"
                label="承运商联系人固定电话"
                width="200"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="delinkman"
                label="收货联系人"
                width="110"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="delinkmantelepho"
                label="收货联系人固定电话"
                width="180"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="msgcode"
                label="反馈结果"
                width="80"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="msgdesp"
                label="反馈消息"
                width="80"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="mblnr"
                label="交接单冲销凭证"
                width="140"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                prop="gjahr"
                label="交接单冲销凭证年度"
                width="180"
              />
            </el-table>
          </template>
        </div>
        <div class="block sw-fy">
          <el-pagination
            :page-sizes="[10, 20, 30, 40, 50,100,300]"
            :page-size="20"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      bukrsForm: {},
      werksForm: {},
      lgortForm: {},
      muForm: {},
      editForm: {},
      multipleSelection: [],
      mForm: {
        supplyplancode: '',
        mblnr: '',
        gjahr: '',
        bukrs: '',
        werks: '',
        lgort: '',
        ebeln: ''
      },
      tabjData: [
      ],
      tabjrData: [
        {
          ext4: '',
          supplyplancode: '280100002432F1001314',
          ebeln: '100002432',
          ebelp: '10',
          matnr: '510111749',
          maktx: '千兆纵向加密认证装置,4,明文吞吐量95Mbps,密文吞吐量25Mbps',
          zjjsl: '1',
          menge: '1',
          meins: '台',
          werks: 'XA01',
          werksdescription: '国网青海省西宁供电公司工厂',
          lgort: '91X1',
          lgortdescription: '青海省电力公司西宁项目直发虚拟库',
          whsenumber: '',
          posid: '16280114005B0021111140',
          post1Wbs: '变电工程－主控制室－照明',
          zxmdw: '',
          username: '',
          zfhfqz: '周专',
          zfhfsj: '2019.05.24',
          zshfqz: '王凯',
          zshfsj: '2019.05.24',
          zsjjhq: '2019.05.24',
          actualdeliverypl: '现场交货',
          remark: '',
          pstngDate: '2019.11.09',
          blart: '2019.11.09',
          bwart: '104',
          bukrs: '2800',
          bukrsdescription: '国网青海省电力公司',
          zyjfhq: '2019.05.24',
          eindt: '2019.05.24',
          suppliername: '江苏通光光缆有限公司',
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
      isEdit: false,
      tableHeight: 536,
      newlyBuild: false,
      formLabelWidth: '140px',
      total: 0
    }
  },
  // 监听屏幕大小
  // eslint-disable-next-line no-irregular-whitespace
  mounted () {
    // eslint-disable-next-line no-irregular-whitespace
    const that = this
    // eslint-disable-next-line no-irregular-whitespace
    window.addEventListener('resize', function () {
      // eslint-disable-next-line no-irregular-whitespace
      return (() => {
        that.fff()
      })()
    })
    that.fff()
  },
  created () {
  },
  methods: {
    // 数据获取
    getJjcx () {
      this.$ajax
        .get(
          `tbljjcx/?params={"columns":"wid,ext4,supplyplancode,ebeln,ebelp,matnr,maktx,zjjsl,menge,meins,werks,werksdescription,lgort,lgortdescription,whsenumber,posid,post1Wbs,zxmdw,username,zfhfqz,zfhfsj,zshfqz,zshfsj,zsjjhq,actualdeliverypl,remark,pstngDate,blart,bwart,bukrs,bukrsdescription,zyjfhq,eindt,suppliername,supplinkman,supplinkmantelep,carrlinkman,carrlinkmantelep,delinkman,delinkmantelepho,msgcode,msgdesp,mblnr,gjahr","sorter":"zcsxh DESC","pageIndex":1,"pageSize":20}`
        )
        .then(res => {
          console.log('页面初始化：', res.data.resultValue)
          this.bukrsForm = res.data.resultValue.dicts[0].values
          this.werksForm = res.data.resultValue.dicts[1].values
          this.total = res.data.resultValue.itemCount
          this.tabjData = res.data.resultValue.items
        })
    },
    // 时间转换
    formatDate (row, column, prop) {
      if (prop == null) {
        return
      }
      let date = new Date(parseInt(prop))
      let Y = date.getFullYear() + '-'
      let M =
        date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1) + '-'
          : date.getMonth() + 1 + '-'
      let D =
        date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' '
      // eslint-disable-next-line no-unused-vars
      let h =
        date.getHours() < 10
          ? '0' + date.getHours() + ':'
          : date.getHours() + ':'
      // eslint-disable-next-line no-unused-vars
      let m =
        date.getMinutes() < 10
          ? '0' + date.getMinutes() + ':'
          : date.getMinutes() + ':'
      // eslint-disable-next-line no-unused-vars
      let s =
        date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      return Y + M + D
    },
    // 是否验收  value转text
    formatSex: function (row, column, cellValue) {
      // eslint-disable-next-line eqeqeq
      if (cellValue == '0') {
        return '未验收'
      }
      // eslint-disable-next-line eqeqeq
      if (cellValue == '1') {
        return '已验收'
      }
      // eslint-disable-next-line eqeqeq
      if (cellValue == '2') {
        return '已冲销'
      }
    },
    // 冲销
    qxForm () {
      // eslint-disable-next-line eqeqeq
      if (this.multipleSelection.length == 0) {
        this.$message({
          message: '请选择需要冲销的数据',
          type: 'warning'
        })
      } else {
        this.$message({
          message: '冲销成功',
          type: 'success'
        })
      }
    },
    // eslint-disable-next-line no-irregular-whitespace
    fff () {
      // eslint-disable-next-line no-irregular-whitespace
      let _this = this
      // eslint-disable-next-line no-irregular-whitespace
      _this.$nextTick(function () {
        // eslint-disable-next-line no-irregular-whitespace
        _this.tableHeight = window.innerHeight - 401
        // eslint-disable-next-line no-irregular-whitespace
        let self = _this
        // eslint-disable-next-line no-irregular-whitespace
        window.onresize = function () {
          // eslint-disable-next-line no-irregular-whitespace
          self.tableHeight = window.innerHeight - 401
        }
      })
    },
    // 查询
    queryForm (form) {
      // eslint-disable-next-line eqeqeq
      if (form.supplyplancode == '') {
        this.$message({
          message: '请输入交接单号',
          type: 'warning'
        })
      // eslint-disable-next-line eqeqeq
      } else if (form.supplyplancode == '280100002432F1001314') {
        this.tabjData = this.tabjrData
        this.total = this.tabjrData.length
        this.tableHeight = window.innerHeight - 735
      } else {
        this.$message({
          message: '暂无数据',
          type: 'warning'
        })
      }
    },
    // 保存选中结果
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.info(this.multipleSelection, 1)
    },
    // 获取页数信息
    handleSizeChange (val) {
      // this.$ajax
      //   .get(
      //     `tbljjcx/?params={"columns":"wid,ext4,supplyplancode,ebeln,ebelp,matnr,maktx,zjjsl,menge,meins,werks,werksdescription,lgort,lgortdescription,whsenumber,posid,post1Wbs,zxmdw,username,zfhfqz,zfhfsj,zshfqz,zshfsj,zsjjhq,actualdeliverypl,remark,pstngDate,blart,bwart,bukrs,bukrsdescription,zyjfhq,eindt,suppliername,supplinkman,supplinkmantelep,carrlinkman,carrlinkmantelep,delinkman,delinkmantelepho,msgcode,msgdesp,mblnr,gjahr","sorter":"zcsxh DESC","pageIndex":1,"pageSize":${val}}`
      //   )
      //   .then(res => {
      //     //   console.log(res.data.resultValue);
      //     this.tabjData = res.data.resultValue.items
      //   })
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      // this.$ajax
      //   .get(
      //     `tbljjcx/?params={"columns":"wid,ext4,supplyplancode,ebeln,ebelp,matnr,maktx,zjjsl,menge,meins,werks,werksdescription,lgort,lgortdescription,whsenumber,posid,post1Wbs,zxmdw,username,zfhfqz,zfhfsj,zshfqz,zshfsj,zsjjhq,actualdeliverypl,remark,pstngDate,blart,bwart,bukrs,bukrsdescription,zyjfhq,eindt,suppliername,supplinkman,supplinkmantelep,carrlinkman,carrlinkmantelep,delinkman,delinkmantelepho,msgcode,msgdesp,mblnr,gjahr","sorter":"zcsxh DESC","pageIndex":${val},"pageSize":20}`
      //   )
      //   .then(res => {
      //     //   console.log(res.data.resultValue);
      //     this.tabjData = res.data.resultValue.items
      //   })
      console.log(`当前页: ${val}`)
    },
    indexMethod (index) {
      return index + 1
    },
    // 重置
    restForm (mForm) {
      this.tabjData = []
      this.total = 0
      this.$nextTick(() => {
        this.$refs[mForm].resetFields()
      })
    }
  }
}
</script>

<style scoped lang = "less">
* {
  padding: 0;
  margin: 0;
}
.el-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  .el-main {
    padding: 10px;
    overflow-y: hidden;
    .jjcx-top {
      padding: 10px;
      background-color: #fff;

      .jjcx-wz {
        position: relative;
        padding: 10px 10px 0 30px;
        img {
          position: absolute;
          top: 8px;
          left: 0;
        }
      }
      .mForm {
        width: 100%;
        box-sizing: border-box;
        padding: 14px 0 0 40px;

       .el-button {
          background-color: #09b09a ;
          border: none;
        }
       /deep/ .el-button:nth-child(1) {
          width: 56px;

        }
         /deep/ .el-button:nth-child(2) {
          width: 80px;

        }

        .el-input,
        .el-select {
          width: 2.889rem !important;
        }
      }
    }
    .jjcx-bt {
      margin-top: 10px;
      background-color: #fff;
      padding: 10px;
      .jjcx-jg {
        position: relative;
        padding: 6px 10px 0 30px;
        font-size: 18px;

        img {
          position: absolute;
          top: 8px;
          left: 0;
        }
      }
      .jjcx-xuanxian {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 64px;
        .el-button {
          background-color: #09b09a;
          border: none;
        }

        .el-button:nth-child(1) {
          position: absolute;
          top: 15px;
          left: 0;
          width: 80px;
        }

      }
      .jjcx-xj {
        /deep/ .el-dialog {
          .el-dialog__header {
            padding: 0;
            height: 50px !important;
            line-height: 30px;
            .el-dialog__title {
              position: absolute;
              top: 10px;
              left: 48%;
            }
          }
          .edform {
            /* .el-input {
                width: 200px!important;
              } */
            .el-input__inner {
              width: 180px;
            }
          }
          .el-dialog__footer {
            padding: 0;
            height: 50px !important;
            .dialog-footer {
              position: relative;

              .el-button {
                position: absolute;
                left: -30px;
                background-color: #09b09a;
                border: none;
              }             
            }
            
          }
          .el-form-item__error {
            width: 180px;
          }
        }
      }
      .sw-list {
        .el-table {
          height: 100%;
        }
      }
      .sw-fy {
        position: relative;
        height: 36px !important;
        margin-top: 20px;
        .el-pagination {
          position: absolute;
          right: 0;
          bottom: 0;
          height: 34px !important;
        }
      }
    }
  }
}
</style>
