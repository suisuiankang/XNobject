<template>
  <el-container>
    <el-main>
      <div class="jhd-top">
        <div class="jhd-wz">
          <img
            src="../../static/images/Ticon.png"
            alt
          >
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">
              首页
            </el-breadcrumb-item>
            <el-breadcrumb-item>拣货单</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <el-form
          ref="yform"
          class="yform"
          label-width="100px"
          min-width="800px"
          size="mini"
          :model="yform"
        >
          <el-row>
            <el-col
              :xl="{span:6,offset:0}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="工厂:"
                prop="ebeln"
              >
                <el-select v-model="yform.ebeln">
                  <el-option
                    v-for="(item,i) in werksForm"
                    :key="i"
                    :label="item.text"
                    :value="item.value"
                  />
                </el-select>
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
                prop="werks"
              >
                <el-select v-model="yform.werks">
                  <el-option
                    v-for="(item,i) in werksForm"
                    :key="i"
                    :label="item.text"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col
              :xl="{span:6,offset:0}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="原始储位:"
                prop="lgort"
              >
                <el-select v-model="yform.lgort">
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
                label="物料凭证:"
                prop="mblnr"
              >
                <el-input v-model="yform.mblnr" />
              </el-form-item>
            </el-col>
            <el-col
              :xl="{span:6,offset:0}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="物料编码:"
                prop="gjahr"
              >
                <el-input v-model="yform.gjahr " />
              </el-form-item>
            </el-col>
            <el-col
              :xl="{span:6,offset:0}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="当前状态:"
                prop="ext_6"
              >
                <el-select v-model="yform.ext_6">
                  <el-option
                    v-for="(item,i) in ext_6Form"
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
              :xl="{span:11,offset:13}"
              :lg="{span:11,offset:13}"
              :md="{span:9,offset:15}"
              :sm="{span:8,offset:16}"
            >
              <el-form-item class="yfr">
                <el-button
                  type="primary"
                  @click="setone = true"
                >
                  查询
                </el-button>
                <el-button
                  type="primary"
                  style="background-color: #fff;color: #606266;border: 1px solid #dcdfe6;"
                  @click="clearForm(),resetForm('yform')"
                >
                  清除条件
                </el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="rs-bj">
        <el-dialog
          :before-close="handleClose"
          title="表单编辑"
          :visible.sync="setone"
          width="80%"
          center
        >
          <el-form
            ref="bjform"
            :rules="rules"
            class="bjform"
            label-width="130px"
            size="mini"
            :model="bjform"
          >
            <el-row>
              <el-col
                :xl="{span:6,offset:0}"
                :lg="{span:20,offset:3}"
                :md="{span:20,offset:1}"
                :sm="{span:22,offset:0}"
              >
                <el-form-item
                  label="原始储位:"
                  prop="xjf3"
                >
                  <el-input
                    v-model="bjform.xjf3"
                  />
                </el-form-item>
              </el-col>
              <el-col
                :xl="{span:5,offset:5}"
                :lg="{span:20,offset:3}"
                :md="{span:20,offset:1}"
                :sm="{span:22,offset:0}"
              >
                <el-form-item
                  label="目标储位:"
                  prop="xjf4"
                >
                  <el-input
                    v-model="bjform.xjf4"
                  />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col
                :xl="{span:20,offset:0}"
                :lg="{span:20,offset:3}"
                :md="{span:20,offset:1}"
                :sm="{span:22,offset:0}"
              >
                <el-form-item
                  label="原始储位数量:"
                  prop="xjf5"
                >
                  <el-input
                    v-model="bjform.xjf6"
                  />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col
                :xl="{span:20,offset:0}"
                :lg="{span:20,offset:3}"
                :md="{span:20,offset:1}"
                :sm="{span:22,offset:0}"
              >
                <el-form-item
                  label="拣货物品:"
                  prop="xjf6"
                >
                  <el-input v-model="bjform.xjf6" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col
                :xl="{span:6,offset:0}"
                :lg="{span:20,offset:3}"
                :md="{span:20,offset:1}"
                :sm="{span:22,offset:0}"
              >
                <el-form-item
                  label="计划拣货数量:"
                  prop="xjf7"
                >
                  <el-input
                    v-model="bjform.xjf7"
                  />
                </el-form-item>
              </el-col>
              <el-col
                :xl="{span:5,offset:5}"
                :lg="{span:20,offset:3}"
                :md="{span:20,offset:1}"
                :sm="{span:22,offset:0}"
              >
                <el-form-item
                  label="实际拣货数量:"
                  prop="xjf8"
                >
                  <el-input
                    v-model="bjform.xjf8"
                  />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <span
            slot="footer"
            class="dialog-footer"
          >
            <el-button
              type="primary"
              @click="setone = false"
            >保存</el-button>
          </span>
        </el-dialog>
      </div>

      <div class="bangding">
        <el-dialog
          :before-close="handleClose"
          title="绑定实物ID"
          :visible.sync="settwo"
          center
        >
          <el-table style="width: 100%">
            <el-table-column
              :show-overflow-tooltip="true"
              header-align="center"
              align="center"
              type="selection"
              width="55"
            />
            <el-table-column
              prop="q"
              label="交接单号"
            />
            <el-table-column
              prop="w"
              label="物料凭证"
            />
            <el-table-column
              prop="e"
              label="物料凭证年份"
            />
            <el-table-column
              prop="r"
              label="公司代码"
            />
            <el-table-column
              prop="t"
              label="工厂"
            />
            <el-table-column
              prop="y"
              label="库存地点"
            />
            <el-table-column
              prop="u"
              label="采购订单"
            />
          </el-table>
          <span
            slot="footer"
            class="dialog-footer"
          >
            <el-button
              style="border-color: #09b09a"
              type="primary"
              @click="settwo = false"
            >保存</el-button>
          </span>
        </el-dialog>
      </div>
      <div class="jhd-bt">
        <div class="jhd-jg">
          <img
            src="../../static/images/bicon.png"
          >
          查询结果
        </div>
        <div class="jhd-xuanxian">
          <el-button
            type="primary"
            @click="setone = true"
          >
            编辑
          </el-button>
          <el-button
            type="primary"
            @click="qrfy()"
          >
            确认发运
          </el-button>
          <el-button
            type="primary"
            @click="settwo=true"
          >
            绑定实物ID
          </el-button>
        </div>
        <div class="sw-list">
          <template>
            <el-table
              :max-height="tableHeight"
              tooltip-effect="dark"
              style="width: 100%"
              :data="tabgData"
              :header-cell-style="{background:'#edf5f2'}"
              @selection-change="handleSelectionChange"
            >
              <el-table-column
                header-align="center"
                align="center"
                label="序号"
                type="index"
                :index="indexMethod"
                width="55"
              />
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                type="selection"
                width="55"
              />
              <el-table-column
                header-align="center"
                prop="ext4"
                label="当前状态"
                width="110"
                align="center"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="ebeln"
                label="绑定凭证"
                width="110"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="ebelp"
                label="工厂"
                width="70"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="ext_6"
                label="库存地点"
                width="110"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="matnr"
                label="物料编码"
                width="110"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="maktx"
                label="物料名称"
                width="110"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="menge"
                label="批次"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="meins"
                label="特殊库存标识"
                width="130"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="bukrs"
                label="WBS元素"
                width="110"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="bukrsdescription"
                label="供应商"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="werks"
                label="入库类型"
                width="110"
              />
              <el-table-column
                header-align="center"
                prop="werksdescription"
                label="原始储位"
                width="110"
                align="center"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="lgort"
                label="计划拣货数量"
                width="130"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="lgortdescription"
                label="实际拣货数量"
                width="130"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="whsenumber"
                label="数量计量单位"
                width="130"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="ext_1"
                label="预留号"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="bldat"
                label="发货单号"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="pstngDate"
                label="非限制金额(RMB)"
                width="140"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="posid"
                label="质检金额(RMB)"
                width="140"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="psphi"
                label="冻结金额(RMB)"
                width="140"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="xmpost1"
                :formatter="formatDate"
                label="拣货时间"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="pratx"
                label="拣货员"
                width="80"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="zhtbh"
                label="APP过账标识"
                width="120"
              />
            </el-table>
          </template>
        </div>
        <div class="jhd_fenye">
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
      settwo: false,
      setone: false,
      werksForm: {},
      lgortForm: {},
      ext_6Form: {},
      yform: {
        ebeln: '',
        werks: '',
        lgort: '',
        mblnr: '',
        gjahr: '',
        ext_6: '',
        pstngDate: ''
      },
      bjform: {
        xjf1: '',
        xjf2: '',
        xjf3: '',
        xjf4: '',
        xjf5: '',
        xjf6: '',
        xjf7: '',
        xjf8: '',
        xjf9: '',
        xjf10: ''
      },
      rules: {
        xjf3: [
          { required: true, message: '原始储位', trigger: 'change' }
        ],
        xjf8: [
          { required: true, message: '实际拣货数量', trigger: 'change' }
        ]
      },
      tabgData: [
        // {
        //   ext4: '',
        //   ebeln: '',
        //   ebelp: '',
        //   ext_6: '',
        //   matnr: '',
        //   maktx: '',
        //   menge: '',
        //   meins: '',
        //   bukrs: '',
        //   bukrsdescription: '',
        //   werks: '',
        //   werksdescription: '',
        //   lgort: '',
        //   lgortdescription: '',
        //   whsenumber: '',
        //   ext_1: '',
        //   bldat: '',
        //   pstngDate: '',
        //   posid: '',
        //   psphi: '',
        //   xmpost1: '',
        //   pratx: '',
        //   zhtbh: '',
        //   charg: '',
        //   bwart: '',
        //   ext_5: '',
        //   suppliercode: '',
        //   suppliername: '',
        //   username: '',
        //   msgcode: '',
        //   msgdesp: '',
        //   mblnr: '',
        //   gjahr: '',
        //   appFlag: ''
        // }
      ],

      multipleSelection: [],
      tableHeight: 536,
      total: 0
    }
  },
  created () {
    this.getjhd()
  },
  // 数据获取
  getjhd () {
    // this.$ajax
    //   .get(
    //     `tblrkpz/?params={"columns":"wid,ext_4,ebeln,ebelp,ext_6,matnr,maktx,menge,ext_8,meins,bukrs,bukrsdescription,werks,werksdescription,lgort,lgortdescription,whsenumber,ext_1,ext_7,bldat,pstngDate,posid,psphi,xmpost1,pratx,zhtbh,charg,bwart,ext_5,suppliercode,supplinkman,username,msgcode,msgdesp,mblnr,gjahr,appFlag","pageIndex":1,"pageSize":20}`
    //   )
    //   .then(res => {
    //     console.log(res.data.resultValue)
    //     this.stateForm = res.data.resultValue.dicts[0].values
    //     this.total = res.data.resultValue.itemCount
    //     this.tabgData = res.data.resultValue.items
    //   })
  },

  mounted () {
    const that = this
    window.addEventListener('resize', function () {
      return (() => {
        that.fff() // 回调fff这个方法
      })()
    })
    that.fff()
  },
  methods: {
    // 实时获取高度
    fff () {
      let _this = this
      _this.$nextTick(function () {
        _this.tableHeight = window.innerHeight - 401
        // 监听窗口大小变化
        let self = _this
        window.onresize = function () {
          self.tableHeight = window.innerHeight - 401
        }
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
    // 绑定实物ID
    // eslint-disable-next-line vue/no-dupe-keys
    bd () {
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
    // 清除样式
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    // 设置表格高度
    clearForm () {
      this.iscord = false
      this.tableHeight = window.innerHeight - 401
    },

    handleSizeChange (val) {
      this.$ajax
        .get(
          `tBasicCangku/?params={"columns":"wid,lgort,lgortname,lgortlevel,address,buildarea,usearea,shedarea,dumparea,remark","pageIndex":1,"pageSize":${val}}`
        )
        .then(res => {
          //   console.log(res.data.resultValue);
          this.tabData = res.data.resultValue.items
        })
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
    // 序号
    indexMethod (index) {
      return index + 1
    },
    // 保存选中结果
    handleSelectionChange (val) {
      this.multipleSelection = val
      //   console.info(this.multipleSelection, 1);
    },
    // 确认发运
    qrfy () {
      this.$message({
        message: '暂无数据',
        type: 'warning'
      })
    },
    // 对话框关闭
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
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
    .jhd-top {
      padding: 10px;
      background-color: #fff;

      .jhd-wz {
        position: relative;
        padding: 10px 10px 0 30px;
        img {
          position: absolute;
          top: 8px;
          left: 0;
        }
      }
      .yform {
        width: 100%;
        box-sizing: border-box;
        padding: 14px 0 0 40px;

        .el-button {
          background-color: #09b09a;
          border: none;
        }
          .el-button:nth-child(1) {
          height: 38px;
          width: 58px;

        }
         .el-button:nth-child(2) {
          height: 38px;
          width: 78px;
        }

        .el-input,
        .el-select {
          width: 2.889rem !important;
        }
            /deep/.yfr {
          float: right;
          .el-form-item__content {
            margin-left: 0!important;
          }
        }
      }
    }
    .jhd-bt {
      margin-top: 10px;
      background-color: #fff;
      padding: 10px;
      .jhd-jg {
        position: relative;
        padding: 6px 10px 0 30px;
        font-size: 18px;
        img {
          position: absolute;
          top: 8px;
          left: 0;
        }
      }
      .jhd-xuanxian {
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
            height: 38px;
          width: 68px;
        }
        .el-button:nth-child(2) {
          position: absolute;
          top: 15px;
          left: 80px;
            height: 38px;
          width: 98px;
        }
         .el-button:nth-child(3) {
          position: absolute;
          top: 15px;
          left: 200px;
            height: 38px;
          width: 108px;
        }
      }

      .jhd-xj {
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
        /* height: 4.16rem; */
        /deep/.el-checkbox {
          .el-checkbox__input.is-checked .el-checkbox__inner,
          .el-checkbox__input.is-indeterminate .el-checkbox__inner {
            background-color: #09b09a;
            border-color: #09b09a;
          }
          .el-checkbox__input.is-checked .el-checkbox__inner,
          .el-checkbox__input.is-indeterminate .el-checkbox__inner {
            background-color: #09b09a;
            border-color: #09b09a;
          }
          .el-checkbox__input.is-checked .el-checkbox__inner,
          .el-checkbox__input.is-indeterminate .el-checkbox__inner {
            background-color: #09b09a;
            border-color: #09b09a;
          }
          .el-checkbox__inner:hover {
            border-color: #09b09a;
          }
          .el-checkbox__input.is-focus .el-checkbox__inner {
            border-color: #09b09a;
          }
        }
        .el-table {
          height: 100%;
        }
      }
      .jhd_fenye {
        position: relative;
        height: 36px !important;
        margin-top: 20px;
        .el-pagination {
          position: absolute;
          right: 0;
          bottom: 0;
          height: 36px !important;
        }
      }
    }
  }
     .bangding {
      /deep/ .el-dialog {
        width: 50% !important;
        .el-dialog__header {
          padding: 0;
          height: 40px !important;
          line-height: 30px;
          .el-dialog__title {
            line-height: 12px;
          }
        }
        .el-dialog__body {
          padding-top: 40px;
        }
        .bjform {
          .el-input__inner {
            width: 2.8rem;
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
     .rs-bj {
      /deep/ .el-dialog {
        width: 50% !important;
        .el-dialog__header {
          padding: 0;
          height: 40px !important;
          line-height: 30px;
          .el-dialog__title {
            line-height: 12px;
          }
        }
        .el-dialog__body {
          padding-top: 40px;
        }
        .bjform {
          .el-input__inner {
            width: 2.8rem;
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
}
</style>
