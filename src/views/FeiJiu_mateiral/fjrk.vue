<template>
  <el-container>
    <el-main>
      <div class="gwscrk-top">
        <div class="gwscrk-wz">
          <img
            src="../../static/images/Ticon.png"
            alt
          >
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">
              首页
            </el-breadcrumb-item>
            <el-breadcrumb-item>废旧入库</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <search-condition
          :search-params="searchParams"
          style="padding: 20px 0 0 0;"
          @params="getParams"
          @resetData="clearForm"
        />
        <!-- <el-form
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
                label="采购订单:"
                prop="ebeln"
              >
                <el-input
                  v-model="yform.ebeln"
                  placeholder="获取ERP数据字段接口"
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
                label="工厂:"
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
                label="库存地点:"
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
                label="物料凭证年份:"
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
                label="物资入库类型:"
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
              :xl="{span:6,offset:0}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="过账日期:"
                prop="pstngDate"
              >
                <el-date-picker
                  v-model="yform.pstngDate"
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
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="至:"
                prop="pstngDate"
              >
                <el-date-picker
                  v-model="yform.pstngDate"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                />
              </el-form-item>
            </el-col>
            <el-col
              :xl="{span:11,offset:1}"
              :lg="{span:11,offset:1}"
              :md="{span:9,offset:1}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item class="yfr">
                <el-button
                  type="primary"
                  size="small"
                  @click="queryform()"
                >
                  查询
                </el-button>
                <el-button
                  type="primary"
                  size="small"
                  style="background-color: #fff;color: #606266;border: 1px solid #dcdfe6;"
                  @click="clearForm(),resetForm('yform')"
                >
                  清除条件
                </el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form> -->
      </div>
      <div class="gwscrk-bt">
        <div class="gwscrk-jg">
          <img
            src="../../static/images/bicon.png"
          >
          查询结果
        </div>
        <div class="gwscrk-xuanxian">
          <el-button
            type="primary"
            size="small"
            @click="baocun(form)"
          >
            保存
          </el-button>
          <el-button
            type="primary"
            size="small"
            @click="guozhang()"
          >
            确认过账
          </el-button>
          <el-button
            type="primary"
            size="small"
            @click="isBid()"
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
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                type="selection"
                width="55"
              />
              <el-table-column
                header-align="center"
                prop="ext4"
                label="状态"
                width="80"
                align="center"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="ebeln"
                label="报废移交清单号"
                width="140"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="ebelp"
                label="公司代码"
                width="110"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="ext_6"
                label="固定资产报废申请单号"
                width="230"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="matnr"
                label="报废申请单序号"
                width="100"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="maktx"
                label="废旧物料号"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="menge"
                label="废旧物料描述"
                width="140"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="meins"
                label="移交单数量"
                width="150"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="bukrs"
                label="计量单位"
                width="110"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="bukrsdescription"
                label="实物代保管工厂"
                width="130"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="werks"
                label="实物代保管工厂名称"
                width="150"
              />
              <el-table-column
                header-align="center"
                prop="werksdescription"
                label="库存地点"
                width="110"
                align="center"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="lgort"
                label="库存地点名称"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="lgortdescription"
                label="资产编号"
                width="120"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="whsenumber"
                label="实物ID"
                width="120"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="ext_1"
                label="发货物料凭证"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="bldat"
                label="凭证年份"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="pstngDate"
                label="App过账标识"
                width="120"
              />
            </el-table>
          </template>
        </div>
        <div class="gwscrk_fenye">
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
// eslint-disable-next-line no-unused-vars
import SearchCondition from '../../components/SearchCondition/index.vue'
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { SearchCondition },
  data () {
    return {
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
      searchParams: {
        list: [{
          label: '公司代码',
          value: '',
          name: 'ebeln',
          placeholder: '获取ERP数据字段接口'
        }, {
          label: '报废移交清单号',
          value: '',
          name: 'werks',
          type: 'select',
          placeholder: '获取ERP数据字段接口'
        }, {
          label: '实物代保管工厂',
          value: '',
          name: 'lgort',
          type: 'select',
          options: [{
            label: '',
            value: 'asd'
          }]
        }, {
          label: '库存地点',
          value: '',
          name: 'lgort',
          type: 'select',
          options: [{
            label: '',
            value: 'asd'
          }]
        },
        {
          label: '废旧物料号',
          value: '',
          name: 'mblnr',
          type: 'select'
        }, {
          label: '凭证日期',
          value: '',
          name: 'mblnr',
          type: 'daterange'
        }
        ]
      },

      iscord: false,
      multipleSelection: [],
      tableHeight: 536,
      total: 0
    }
  },
  created () {
    // this.getGwscrk()
  },
  // 数据获取
  getGwscrk () {
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
    // 获取筛选条件
    getParams (param) {
      // eslint-disable-next-line eqeqeq
      if (param.jjdh == '') {
        this.$message({
          message: '请输入交接单号',
          type: 'warning'
        })
        // eslint-disable-next-line eqeqeq
      } else if (param.jjdh == '280200002531F1000859') {
        this.iscord = true
        this.tabgData = this.tabgrData
        this.total = this.tabgrData.length
        this.cform = this.cdform
        this.tableHeight = window.innerHeight - 687
      } else {
        this.$message({
          message: '暂无数据',
          type: 'warning'
        })
      }
      console.log(param)
      // if (param) {
      //   this.getList(param)
      // }
    },
    // 获取列表
    getList (param) {
      param = param || {}
      let params = {
        // page: this.pager.pageNo,
        // limit: this.pager.limit
      }
      // console.info(params)
      Object.assign(params, this.params)
      // console.info(Object.assign(params, this.params))
      // SupplyPlanCreateList(params).then(res => {
      //   if (res.code === 0) {
      //     this.tableData = res.data.rows
      //     this.pager.total = res.data.total
      //   }
      // })
    },
    // 实时获取高度
    fff () {
      let _this = this
      _this.$nextTick(function () {
        _this.tableHeight = window.innerHeight - 397
        // 监听窗口大小变化
        let self = _this
        window.onresize = function () {
          self.tableHeight = window.innerHeight - 397
        }
      })
    },
    // 打印
    dayin () {
      this.$message({
        message: '请选择打印的内容',
        type: 'warning'
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
    // 清除样式
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },

    // 查询
    queryform () {
      this.$message({
        message: '暂无数据',
        type: 'success'
      })
    },

    // 过账
    guozhang () {
      this.$message({
        message: '请选择过账内容',
        type: 'warning'
      })
    },

    // 设置表格高度
    clearForm () {
      this.iscord = false
      this.tableHeight = window.innerHeight - 401
    },

    handleSizeChange (val) {
    //   this.$ajax
    //     .get(
    //       `tBasicCangku/?params={"columns":"wid,lgort,lgortname,lgortlevel,address,buildarea,usearea,shedarea,dumparea,remark","pageIndex":1,"pageSize":${val}}`
    //     )
    //     .then(res => {
    //       //   console.log(res.data.resultValue);
    //       this.tabData = res.data.resultValue.items
    //     })
    //   console.log(`每页 ${val} 条`)
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
    .gwscrk-top {
      padding: 10px;
      background-color: #fff;

      .gwscrk-wz {
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
        .el-button:nth-child(1){
          width: 56px;
        }
        .el-button:nth-child(2){
          width: 80px;
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
    .gwscrk-bt {
      margin-top: 10px;
      background-color: #fff;
      padding: 10px;
      .gwscrk-jg {
        position: relative;
        padding: 6px 10px 0 30px;
        font-size: 18px;

        img {
          position: absolute;
          top: 8px;
          left: 0;
        }
      }
      .gwscrk-xuanxian {
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
          width: 56px;
        }
        .el-button:nth-child(2) {
          position: absolute;
          top: 15px;
          left: 70px;
          width: 80px;
        }
         .el-button:nth-child(3) {
          position: absolute;
          top: 15px;
          left: 170px;
          width: 92px;
        }
         .el-button:nth-child(4) {
          position: absolute;
          top: 15px;
          left: 282px;
          width: 56px;
        }
      }
      .gwscrk-xj {
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
      .gwscrk_fenye {
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
}
</style>
