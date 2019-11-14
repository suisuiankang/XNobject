<template>
  <el-container>
    <el-main>
      <div class="yscx-top">
        <div class="yscx-wz">
          <img
            src="../../static/images/Ticon.png"
            alt
          >
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">
              首页
            </el-breadcrumb-item>
            <el-breadcrumb-item>验收冲销</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <search-condition
          :search-params="searchParams"
          style="padding: 20px 0 0 0;"
          @params="getParams"
          @resetData="clearForm"
        />
        <!-- <el-form
          ref="ycform"
          class="ycform"
          label-width="100px"
          min-width="800px"
          size="mini"
          :model="ycform"
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
                <el-input
                  v-model="ycform.supplyplancode"
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
                label="物料凭证:"
                prop="ebeln"
              >
                <el-input v-model="ycform.ebeln" />
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
                prop="werks"
              >
                <el-input v-model="ycform.gjahr " />
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
                prop="mblnr"
              >
                <el-select
                  v-model="ycform.werks"
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
                label="工厂:"
                prop="gjahr"
              >
                <el-select
                  v-model="ycform.werks"
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
                <el-select
                  v-model="ycform.lgort"
                  placeholder="请选择"
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
                label="采购订单:"
                prop="gjahr"
              >
                <el-input v-model="ycform.gjahr " />
              </el-form-item>
            </el-col>
            <el-col
              class="marf"
              :xl="{span:11,offset:6}"
              :lg="{span:11,offset:6}"
              :md="{span:9,offset:7}"
              :sm="{span:9,offset:7}"
            >
              <el-form-item style="float: right;">
                <el-button
                  type="primary"
                  size="small"
                  @click="qureySform(ycform)"
                >
                  查询
                </el-button>
                <el-button
                  type="primary"
                  size="small"
                  style="background-color: #fff;color: #606266;border: 1px solid #dcdfe6;"
                  @click="resetForm('ycform')"
                >
                  清除条件
                </el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form> -->
      </div>
      <div class="yscx-bt">
        <div class="yscx-jg">
          <img
            src="../../static/images/bicon.png"
            alt
          >
          查询结果
        </div>
        <div class="yscx-xuanxian">
          <el-button
            type="primary"
            size="small"
            @click="isChongx()"
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
              :data="tabsData"
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
                label="交接单号"
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
                prop="zsjdhsl"
                label="实际到货数量"
                width="110"
              />
              <el-table-column
                header-align="center"
                align="center"
                :show-overflow-tooltip="true"
                prop="werks"
                label="工厂"
                width="60"
              />
              <el-table-column
                header-align="center"
                align="center"
                :show-overflow-tooltip="true"
                prop="werksdescription"
                label="工厂名称"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="lgort"
                label="库存地点"
                width="80"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                align="center"
                prop="lgortdescription"
                label="库存描述"
                width="80"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                align="center"
                prop="pstngDate"
                label="过账日期"
                width="80"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="blart"
                label="凭证日期"
                width="80"
                align="center"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="bwart"
                label="移动类型"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zwzgygsqz"
                label="物资供应公司（签字）"
                width="160"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="zwzgygssj"
                label="物资供应公司（时间）"
                width="160"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="zqmdwjsrqz"
                label="项目单位接收人(签字)"
                width="180"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="zqmdwjsrsj"
                label="项目单位接收人(时间)"
                width="180"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zgysjfrqz"
                label="供应商交付人（签字）"
                width="160"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zgysjfrsj"
                label="供应商交付人（时间）"
                width="160"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zjldwrqz"
                label="监理单位人（签字）"
                width="160"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zjldwrsj"
                label="监理单位人（时间）"
                width="160"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zsgdwrqz"
                label="施工单位人（签字）"
                width="160"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zsgdwrsj"
                label="施工单位人（时间）"
                width="160"
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
                width="200"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="zjdhq"
                label="预计到货期"
                width="100"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="zjdhq"
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
                prop="zthsl"
                label="合同总数"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zthsl"
                label="换货数量"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zbczcs"
                label="本次正常收货数量"
                width="160"
              />
              <el-table-column
                header-align="center"
                prop="zbchhsl"
                label="本次换货数量"
                width="120"
                align="center"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="remark"
                label="备注"
                width="60"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                align="center"
                prop="posid"
                label="WBS元素"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="post1Wbs"
                :show-overflow-tooltip="true"
                label="WBS元素描述"
                width="160"
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
                :show-overflow-tooltip="true"
                prop="matnr"
                label="物料编号"
                width="80"
                align="center"
              />
              <el-table-column
                header-align="center"
                align="center"
                :show-overflow-tooltip="true"
                prop="maktx"
                label="物料描述"
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
                align="center"
                :show-overflow-tooltip="true"
                header-align="center"
                prop="bukrsdescription"
                label="公司名称"
                width="80"
              />
              <el-table-column
                header-align="center"
                prop="meins"
                label="计量单位"
                width="80"
                align="center"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="username"
                label="用户名"
                width="80"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="zsjjhq"
                label="实际收货日期"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="msgcode"
                label="反馈结果"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="msgdesp"
                label="反馈消息"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="mblnr"
                label="冲销物料凭证"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="gjahr"
                label="冲销物料凭证年份"
                width="160"
              />
            </el-table>
          </template>
        </div>
        <div class="block yscx_fenye">
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
import SearchCondition from '@/components/SearchCondition/index.vue'

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { SearchCondition },
  data () {
    return {
      searchParams: {
        list: [{
          label: '交接单号',
          value: '',
          name: 'jjdh',
          placeholder: '获取ERP数据字段接口'
        }, {
          label: '采购订单',
          value: '',
          name: '212'
        }, {
          label: '工厂',
          value: '',
          name: '221',
          type: 'select',
          options: []
        }, {
          label: '物料凭证',
          value: '',
          name: '252'
        }, {
          label: '凭证年份',
          value: '',
          name: '226'
        }, {
          label: '库存地点',
          value: '',
          name: '227',
          type: 'select'

        }, {
          label: '凭证日期',
          value: '',
          name: '227',
          type: 'daterange'

        }
        ]
      },
      ycform: {
        supplyplancode: '',
        ebeln: '',
        werks: '',
        mblnr: '',
        gjahr: '',
        lgort: '',
        ks_pstngDate: '',
        js_pstngDate: ''
      },
      tabsData: [
      ],
      tabsrData: [
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
          bwart: '106',
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
      iscord: false,
      multipleSelection: [],
      tableHeight: 536,
      ecHeight: 0,
      formLabelWidth: '140px',
      total: 0
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
      if (param.jjdh == '') {
        this.$message({
          message: '请输入交接单号',
          type: 'warning'
        })
        // eslint-disable-next-line eqeqeq
      } else if (param.jjdh == '280100002432F1001314') {
        this.tabsData = this.tabsrData
        this.total = this.tabsrData.length
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
    // 确认冲销
    isChongx () {
      // eslint-disable-next-line eqeqeq
      if (this.multipleSelection.length == 0) {
        this.$message({
          message: '未选中编辑内容',
          type: 'warning'
        })
      } else {
        this.$confirm('此操作将确认冲销, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$message({
              type: 'success',
              message: '冲销成功!'
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
    // 重置
    resetForm (formName) {
      this.$refs[formName].resetFields()
      this.tabsData = []
      this.total = 0
      this.tableHeight = window.innerHeight - 401
    },
    clearForm () {
      this.tabsData = []
      this.total = 0
    },
    // 查询
    qureySform (form) {
      // eslint-disable-next-line eqeqeq
      if (form.supplyplancode == '') {
        this.$message({
          message: '请输入交接单号',
          type: 'warning'
        })
      // eslint-disable-next-line eqeqeq
      } else if (form.supplyplancode == '280100002432F1001314') {
        this.tabsData = this.tabsrData
        this.total = this.tabsrData.length
      } else {
        this.$message({
          message: '暂无数据',
          type: 'warning'
        })
      }
    },
    // 数据获取
    getYscx () {
      // this.$ajax
      //   .get(
      //     `/tblyscx/?rnd=571502057613169&params={"columns":"wid,ext4,supplyplancode,ebeln,ebelp,zsjdhsl,werks,werksdescription,lgort,lgortdescription,pstngDate,blart,bwart,zwzgygsqz,zwzgygssj,zqmdwjsrqz,zqmdwjsrsj,zgysjfrqz,zgysjfrsj,zjldwrqz,zjldwrsj,zsgdwrqz,zsgdwrsj,carrlinkman,carrlinkmantelep,zjdhq,zyjfhq,eindt,zhtzs,zthsl,zbczcs,zbchhsl,remark,posid,post1Wbs,zxmdw,matnr,maktx,bukrs,bukrsdescription,meins,username,zsjjhq,msgcode,msgdesp,mblnr,gjahr","sorter":"zcsxh DESC","pageIndex":1,"pageSize":20}`
      //   )
      //   .then(res => {
      //     console.log(res.data.resultValue)
      //     this.total = res.data.resultValue.itemCount
      //     this.tabsData = res.data.resultValue.items
      //   })
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
    .yscx-top {
      padding: 10px;
      background-color: #fff;

      .yscx-wz {
        position: relative;
        padding: 10px 10px 0 30px;
        img {
          position: absolute;
          top: 8px;
          left: 0;
        }
      }
      .ycform {
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
        .marf {
          margin-left: 25%;
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
    .yscx-bt {
      margin-top: 10px;
      background-color: #fff;
      padding: 10px;
      .yscx-jg {
        position: relative;
        padding: 6px 10px 0 30px;
        font-size: 18px;

        img {
          position: absolute;
          top: 8px;
          left: 0;
        }
      }
      .yscx-xuanxian {
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
      }
      .yscx-xj {
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
      .yscx_fenye {
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
