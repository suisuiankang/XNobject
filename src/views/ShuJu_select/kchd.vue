<template>
  <el-container>
    <el-main>
      <div class="kchd-top">
        <div class="kchd-wz">
          <img
            src="../../static/images/Ticon.png"
            alt
          >
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">
              首页
            </el-breadcrumb-item>
            <el-breadcrumb-item>库存核对</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <search-condition
          :search-params="searchParams"
          style="padding: 20px 0 0 0;"
          @params="getParams"
          @resetData="clearForm"
        />
        <!-- <el-form
          ref="hdform"
          class="hdform"
          label-width="100px"
          min-width="800px"
          size="mini"
          :model="hdform"
        >
          <el-row>
            <el-col
              :xl="{span:6,offset:0}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="物料编码:"
                prop="wlbm"
              >
                <el-input
                  v-model="hdform.wlbm"
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
                prop="factory"
              >
                <el-input v-model="hdform.factory" />
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
                prop="stock"
              >
                <el-select
                  v-model="hdform.stock"

                  placeholder
                />
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
                label="批次:"
                prop="batch"
              >
                <el-input v-model="hdform.batch " />
              </el-form-item>
            </el-col>
            <el-col
              :xl="{span:6,offset:0}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="是否处理:"
                prop="handle"
              >
                <el-select
                  v-model="hdform.handle"

                  placeholder
                />
              </el-form-item>
            </el-col>
            <el-col
              :xl="{span:11,offset:0}"
              :lg="{span:11,offset:0}"
              :md="{span:9,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item class="hdr">
                <el-button
                  type="primary"
                  size="small"
                  @click="qureySform"
                >
                  查询
                </el-button>
                <el-button
                  type="primary"
                  size="small"
                  style="background-color: #fff;color: #606266;border: 1px solid #dcdfe6;"
                  @click="restForm('hdform')"
                >
                  清除条件
                </el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form> -->
      </div>
      <div class="kchd-bt">
        <div class="kchd-jg">
          <img
            src="../../static/images/bicon.png"
            alt
          >
          查询结果
        </div>
        <div class="kchd-xuanxian">
          <el-button
            type="primary"
            size="small"
            @click="isDifference"
          >
            处理差异
          </el-button>
          <el-button
            type="primary"
            size="small"
            @click="isVoucher"
          >
            触发凭证核对
          </el-button>
          <el-button
            type="primary"
            size="small"
            @click="isInventory=true"
          >
            手动库存核对
          </el-button>
          <el-button
            type="primary"
            size="small"
          >
            数据拆分
          </el-button>
          <el-button
            type="primary"
            size="small"
          >
            数据删除
          </el-button>
        </div>
        <div class="kchd-xj">
          <el-dialog
            title="库存核对"
            :visible.sync="isInventory"
            width="40%"
            center
          >
            <el-form
              ref="iyform"
              :rules="rules"
              class="iyform"
              label-width="120px"
              size="mini"
              :model="iyform"
            >
              <el-row>
                <el-col
                  :xl="{span:20,offset:4}"
                  :lg="{span:20,offset:3}"
                  :md="{span:20,offset:1}"
                  :sm="{span:22,offset:0}"
                >
                  <el-form-item
                    label="移动类型:"
                    prop="xjf1"
                  >
                    <el-select
                      v-model="iyform.xjf1"
                      placeholder="请选择"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col
                  :xl="{span:20,offset:4}"
                  :lg="{span:20,offset:3}"
                  :md="{span:20,offset:1}"
                  :sm="{span:22,offset:0}"
                >
                  <el-form-item
                    label="移动类型描述:"
                    prop="xjf2"
                  >
                    <el-input
                      v-model="iyform.xjf2"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col
                  :xl="{span:20,offset:4}"
                  :lg="{span:20,offset:3}"
                  :md="{span:20,offset:1}"
                  :sm="{span:22,offset:0}"
                >
                  <el-form-item
                    label="特殊库存标识:"
                    prop="xjf3"
                  >
                    <el-select
                      v-model="iyform.xjf3"
                      placeholder="请选择"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col
                  :xl="{span:20,offset:4}"
                  :lg="{span:20,offset:3}"
                  :md="{span:20,offset:1}"
                  :sm="{span:22,offset:0}"
                >
                  <el-form-item
                    label="过帐日期:"
                    prop="xjf4"
                  >
                    <el-date-picker
                      v-model="iyform.xjf4"
                      type="date"
                      placeholder="选择日期"
                      format="yyyy 年 MM 月 dd 日"
                      value-format="yyyy-MM-dd"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col
                  :xl="{span:20,offset:4}"
                  :lg="{span:20,offset:3}"
                  :md="{span:20,offset:1}"
                  :sm="{span:22,offset:0}"
                >
                  <el-form-item
                    label="凭证日期:"
                    prop="xjf5"
                  >
                    <el-date-picker
                      v-model="iyform.xjf5"
                      type="date"
                      placeholder="选择日期"
                      format="yyyy 年 MM 月 dd 日"
                      value-format="yyyy-MM-dd"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col
                  :xl="{span:20,offset:4}"
                  :lg="{span:20,offset:3}"
                  :md="{span:20,offset:1}"
                  :sm="{span:22,offset:0}"
                >
                  <el-form-item
                    label="凭证抬头文本:"
                    prop="xjf6"
                  >
                    <el-input
                      v-model="iyform.xjf6"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col
                  :xl="{span:20,offset:4}"
                  :lg="{span:20,offset:3}"
                  :md="{span:20,offset:1}"
                  :sm="{span:22,offset:0}"
                >
                  <el-form-item
                    label="数据来源:"
                    prop="xjf7"
                  >
                    <el-input
                      v-model="iyform.xjf7"
                      :disabled="true"
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
                size="small"
              >保存</el-button>
            </span>
          </el-dialog>
        </div>
        <div class="sw-list">
          <template>
            <el-table
              :max-height="tableHeight"
              tooltip-effect="dark"
              style="width: 100%"
              :data="tabkdData"
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
                label="业务类型"
                width="80"
                align="center"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="supplyplancode"
                label="工厂编号"
                width="80"
                align="center"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="ebeln"
                label="工厂名称"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="ebelp"
                label="库存地点"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zsjdhsl"
                label="库存描述"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                :show-overflow-tooltip="true"
                prop="werks"
                label="物料编码"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="werksdescription"
                label="物料描述"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="lgort"
                label="特殊库存"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="lgortdescription"
                label="WBS元素"
                width="100"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="pstngDate"
                label="供应商"
                width="80"
              />
              <el-table-column
                header-align="center"
                prop="blart"
                label="批次"
                width="80"
                align="center"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="bwart"
                label="WMS非限制库存"
                width="180"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zwzgygsqz"
                label="ERP非限制库存差异"
                width="200"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="zwzgygssj"
                label="ERP非限制金额"
                width="160"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="zqmdwjsrqz"
                label="WMS质量检测库存"
                width="180"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="zqmdwjsrsj"
                label="ERP质量检测库存差异"
                width="220"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zgysjfrqz"
                label="WMS已冻结库存"
                width="160"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zgysjfrsj"
                label="ERP已冻结库存差异"
                width="200"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zjldwrqz"
                label="ERP已冻结金额"
                width="160"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zjldwrsj"
                label="计量单位"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zsgdwrqz"
                label="创建日期"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zsgdwrsj"
                label="是否处理"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="carrlinkman"
                label="处理人"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="carrlinkmantelep"
                label="处理时间"
                width="80"
              />
            </el-table>
          </template>
        </div>
        <div class="block kchd_fenye">
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
import SearchCondition from '../../components/SearchCondition/index.vue'

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { SearchCondition },
  data () {
    return {
      searchParams: {
        list: [{
          label: '物料编码',
          value: '',
          name: 'wlbm'
        }, {
          label: '工厂',
          value: '',
          name: 'factory'
        }, {
          label: '库存地点',
          value: '',
          name: 'stock',
          type: 'select',
          options: []
        },
        {
          label: '批次',
          value: '',
          name: 'batch'
        }, {
          label: '是否处理',
          value: '',
          name: 'handle',
          type: 'select',
          options: []
        }
        ]
      },
      rules: {
        cwh: [
          { required: true, message: '请选择目标储位号', trigger: 'change' }
        ],
        shsl: [
          {
            type: 'string',
            required: true,
            message: '请输入上货数量',
            trigger: 'blur'
          }
        ]
      },
      hdform: {
        wlbm: '',
        factory: '',
        werks: '',
        stock: '',
        batch: '',
        handle: ''
      },
      iyform: {
        xjf1: '',
        xjf2: '',
        xjf3: '',
        xjf4: '',
        xjf5: '',
        xjf6: '',
        xjf7: ''
      },
      cform: {
        supplyplancode: '',
        ebeln: '',
        werks: '',
        mblnr: '',
        gjahr: '',
        lgort: '',
        ks_pstngDate: '',
        js_pstngDate: ''
      },
      tabkdData: [
        {
          ext4: '入库',
          supplyplancode: '0',
          ebeln: '0',
          ebelp: '0',
          zsjdhsl: '0',
          werks: '0',
          werksdescription: '0',
          lgort: '0',
          lgortdescription: '0',
          pstngDate: '',
          blart: '',
          bwart: '',
          zwzgygsqz: '',
          zwzgygssj: '',
          zqmdwjsrqz: '',
          zqmdwjsrsj: '',
          zgysjfrqz: '',
          zgysjfrsj: '',
          zjldwrqz: '',
          zjldwrsj: '',
          zsgdwrqz: '',
          zsgdwrsj: '',
          carrlinkman: '',
          carrlinkmantelep: '',
          zjdhq: '',
          zyjfhq: '',
          eindt: '',
          zhtzs: '',
          zthsl: '',
          zbczcs: '',
          zbchhsl: '',
          remark: '',
          posid: '',
          post1Wbs: '',
          zxmdw: '',
          matnr: '',
          maktx: '',
          bukrs: '',
          bukrsdescription: '',
          meins: '',
          username: '',
          zsjjhq: '',
          msgcode: '',
          msgdesp: '',
          mblnr: '',
          gjahr: ''
        }
      ],
      editForm: {
        lgort: '',
        lgortlevel: '',
        lgortname: '',
        address: '',
        buildarea: '',
        usearea: '',
        shedarea: '',
        dumparea: '',
        remark: ''
      },
      multipleSelection: [],
      tableHeight: 536,
      isInventory: false,
      ecHeight: 0,
      formLabelWidth: '140px',
      total: 1
    }
  },
  created () {
  },
  mounted () {
    const that = this
    window.addEventListener('resize', function () {
      return (() => {
        that.fff()
      })()
    })
    that.fff()
  },
  methods: {
    // 获取筛选条件
    getParams (param) {
      // eslint-disable-next-line eqeqeq
      if (param.wlbm == '') {
        this.$message({
          message: '请输入移库计划号',
          type: 'warning'
        })
        // eslint-disable-next-line eqeqeq
      } else {
        this.$message({
          message: '暂无数据',
          type: 'warning'
        })
      }
      // else if (param.jjdh == '280100002432F1001314') {
      //   this.tabsData = this.tabsrData
      //   this.total = this.tabsrData.length
      // } else {
      // this.$message({
      //   message: '暂无数据',
      //   type: 'warning'
      // })
      // }
      // console.log(param)
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
    // 触发凭证核对
    isVoucher () {
      this.$confirm('确认触发凭证核对?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '处理成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '处理失败'
        })
      })
    },
    // 处理差异
    isDifference () {
      // eslint-disable-next-line eqeqeq
      if (this.multipleSelection.length == 0) {
        this.$message({
          message: '请至少选中一条记录',
          type: 'warning'
        })
      } else {
        console.info(this.multipleSelection)
        this.$message({
          message: '数据不存在，不可进行操作',
          type: 'warning'
        })
      }
    },
    // 保存提交
    clickButton (from) {
      console.log(from.shsl, '10')
    },
    // 保存验证
    submitForm (formName) {
      console.log(formName.shsl)
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 查询
    qureySform () {
      this.$message({
        message: '暂无数据',
        type: 'warning'
      })
    },
    // 重置
    restForm (form) {
      this.$nextTick(() => {
        this.$refs[form].resetFields()
      })
    },
    // 数据获取
    getkchd () {
      this.$ajax
        .get(
          `/tblkchd/?rnd=571502057613169&params={"columns":"wid,ext4,supplyplancode,ebeln,ebelp,zsjdhsl,werks,werksdescription,lgort,lgortdescription,pstngDate,blart,bwart,zwzgygsqz,zwzgygssj,zqmdwjsrqz,zqmdwjsrsj,zgysjfrqz,zgysjfrsj,zjldwrqz,zjldwrsj,zsgdwrqz,zsgdwrsj,carrlinkman,carrlinkmantelep,zjdhq,zyjfhq,eindt,zhtzs,zthsl,zbczcs,zbchhsl,remark,posid,post1Wbs,zxmdw,matnr,maktx,bukrs,bukrsdescription,meins,username,zsjjhq,msgcode,msgdesp,mblnr,gjahr","sorter":"zcsxh DESC","pageIndex":1,"pageSize":20}`
        )
        .then(res => {
          console.log(res.data.resultValue)
          this.total = res.data.resultValue.itemCount
          this.tabkdData = res.data.resultValue.items
        })
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
    .kchd-top {
      padding: 10px;
      background-color: #fff;

      .kchd-wz {
        position: relative;
        padding: 10px 10px 0 30px;
        img {
          position: absolute;
          top: 8px;
          left: 0;
        }
      }
      .hdform {
        width: 100%;
        box-sizing: border-box;
        padding: 14px 0 0 40px;

        .el-button {
          background-color: #09b09a;
          border: none;
        }
        .el-button:nth-child(2) {
          width: 80px;
        }
        .el-input,
        .el-select {
          width: 2.889rem !important;
        }
        /deep/.hdr {
          float: right;
          .el-form-item__content {
            margin-left: 0!important;
          }
        }
      }
    }
    .box-card {
        box-sizing: border-box;
        width: 100%;
        margin: 10px 0 10px;
        padding: 0 30px !important;

        .el-form {
          margin: 0 !important;

          .el-date-editor.el-input,
          .el-date-editor.el-input__inner {
            width: 190px;
          }
        }
      }
    .kchd-bt {
      margin-top: 10px;
      background-color: #fff;
      padding: 10px;
      .kchd-jg {
        position: relative;
        padding: 6px 10px 0 30px;
        font-size: 18px;

        img {
          position: absolute;
          top: 8px;
          left: 0;
        }
      }
      .kchd-xuanxian {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 64px;
        .el-button {
          background-color: #09b09a;
          border: none;
        }

        .el-button:nth-child(1) {
          width: 80px;
          position: absolute;
          top: 15px;
          left: 0;
        }
        .el-button:nth-child(2) {
          width: 102px;
          position: absolute;
          top: 15px;
          left: 94px;
        }
        .el-button:nth-child(3) {
          width: 102px;
          position: absolute;
          top: 15px;
          left: 220px;
        }
        .el-button:nth-child(4) {
          width: 80px;
          position: absolute;
          top: 15px;
          left: 346px;
        }
        .el-button:nth-child(5) {
          width: 80px;
          position: absolute;
          top: 15px;
          left: 450px;
        }
      }
      .kchd-xj {
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
      .tzd-xj {
        /deep/ .el-dialog {
          width: 35%!important;
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
          .iyform {
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
      .kchd_fenye {
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
