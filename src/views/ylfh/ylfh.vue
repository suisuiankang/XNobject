<template>
  <el-container>
    <el-main>
      <div class="rs-top">
        <div class="rs-wz">
          <img
            src="../../static/images/Ticon.png"
            alt="图标"
          >
          <el-breadcrumb separator-class="el-ico-arrow-right">
            <el-breadcrumb-item :to="{path:'/'}">
              首页
            </el-breadcrumb-item>
            <el-breadcrumb-item>预留发货</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="rs-bt">
        <div class="rs-jg">
          <img
            src="../../static/images/bicon.png"
            alt="下图标"
          >
          查询结果
        </div>
        <div class="rs-xuanxiang">
          <el-button
            type="primary"
            @click="setone = true"
          >
            编辑
          </el-button>
          <el-button
            type="primary"
            @click="qrck()"
          >
            确认出库
          </el-button>
          <el-button
            type="primary"
            @click="llddy()"
          >
            领料单打印
          </el-button>
          <el-button
            type="primary"
            @click="ckddy()"
          >
            出库单打印
          </el-button>
        </div>
        <div class="rs-bj">
          <el-dialog
            title="表单编辑"
            :visible.sync="setone"
            width="40%"
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
                  :xl="{span:20,offset:4}"
                  :lg="{span:20,offset:3}"
                  :md="{span:20,offset:1}"
                  :sm="{span:22,offset:0}"
                >
                  <el-form-item
                    label="过账日期:"
                    prop="xjf1"
                  >
                    <el-date-picker
                      v-model="bjform.xjf4"
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
                    prop="xjf2"
                  >
                    <el-date-picker
                      v-model="bjform.xjf2"
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
                    label="预留号:"
                    prop="xjf3"
                  >
                    <el-input
                      v-model="bjform.xjf3"
                    
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
                    label="工厂:"
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
                  :xl="{span:20,offset:4}"
                  :lg="{span:20,offset:3}"
                  :md="{span:20,offset:1}"
                  :sm="{span:22,offset:0}"
                >
                  <el-form-item
                    label="库存地点:"
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
                  :xl="{span:20,offset:4}"
                  :lg="{span:20,offset:3}"
                  :md="{span:20,offset:1}"
                  :sm="{span:22,offset:0}"
                >
                  <el-form-item
                    label="库存地点描述:"
                    prop="xjf6"
                  >
                    <el-input v-model="bjform.xjf6" />
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
                    label="库存地点描述:"
                    prop="xjf7"
                  >
                    <el-input
                      v-model="bjform.xjf7"
                   
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
                    label="WBS编码:"
                    prop="xjf8"
                  >
                    <el-input
                      v-model="bjform.xjf8"
                     
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
                    label="物料凭证创建用户:"
                    prop="xjf9"
                  >
                    <el-input
                      v-model="bjform.xjf9"
                     
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
                    prop="xjf10"
                  >
                    <el-input v-model="bjform.xjf10" />
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
                @click="xinjian()"
              >保存</el-button>
            </span>
          </el-dialog>
        </div>

        <div class="bangding">
          <el-dialog
            title="绑定实物ID"
            :visible.sync="bd"
            center
          >
            <el-table style="width: 100%">
              <el-table-column
                prop="q"
                label="项目1"
              />
              <el-table-column
                prop="w"
                label="项目2"
              />
              <el-table-column
                prop="e"
                label="项目3"
              />
              <el-table-column
                prop="r"
                label="项目4"
              />
              <el-table-column
                prop="t"
                label="项目5"
              />
              <el-table-column
                prop="y"
                label="项目6"
              />
              <el-table-column
                prop="u"
                label="项目7"
              />
              <el-table-column
                prop="i"
                label="项目8"
              />
              <el-table-column
                prop="o"
                label="项目9"
              />
              <el-table-column
                prop="p"
                label="项目10"
              />
            </el-table>
            <span
              slot="footer"
              class="dialog-footer"
            >
              <el-button
                style="border-color: #09b09a"
                type="primary"
                @click="xinjian2()"
              >保存</el-button>
            </span>
          </el-dialog>
        </div>

        <div class="rs-bj">
          <el-dialog
            title="表单编辑"
            :visible.sync="settwo"
            width="40%"
            center
          >
            <el-form
              ref="bjtwoform"
              :rules="rules"
              class="bjform"
              label-width="130px"
              size="mini"
              :model="bjform"
            >
              <el-row>
                <el-col
                  :xl="{span:20,offset:4}"
                  :lg="{span:20,offset:3}"
                  :md="{span:20,offset:1}"
                  :sm="{span:22,offset:0}"
                >
                  <el-form-item
                    label="过账日期:"
                    prop="xjf11"
                  >
                    <el-date-picker
                      v-model="bjtwoform.xjf11"
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
                    prop="xjf12"
                  >
                    <el-date-picker
                      v-model="bjtwoform.xjf12"
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
                    label="预留号:"
                    prop="xjf13"
                  >
                    <el-input
                      v-model="bjtwoform.xjf13"
                      
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
                    label="工厂:"
                    prop="xjf14"
                  >
                    <el-input
                      v-model="bjtwoform.xjf14"
                    
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
                    label="库存地点:"
                    prop="xjf15"
                  >
                    <el-input
                      v-model="bjtwoform.xjf15"
                    
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
                    label="库存地点描述:"
                    prop="xjf16"
                  >
                    <el-input v-model="bjtwoform.xjf16" />
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
                    label="库存地点描述:"
                    prop="xjf17"
                  >
                    <el-input
                      v-model="bjtwoform.xjf17"
                    
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
                    label="WBS编码:"
                    prop="xjf18"
                  >
                    <el-input
                      v-model="bjtwoform.xjf18"
                     
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
                    label="物料凭证创建用户:"
                    prop="xjf19"
                  >
                    <el-input
                      v-model="bjtwoform.xjf19"
                    
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
                    prop="xjf20"
                  >
                    <el-input v-model="bjtwoform.xjf20" />
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
                @click="xinjian3()"
              >保存</el-button>
            </span>
          </el-dialog>
        </div>
        <div class="sw-listone">
          <template>
            <el-table
              :max-height="tableHeight"
              tooltip-effect="dark"
              style="width:100%"
              :data="tabgdata"
              :header-cell-style="{background:'#edf5f2'}"
              @selection-change="handleSelectionChange"
            >
              <el-table-column
                style="boeder-right:1px solid #ccc;"
                type="selection"
                width="55"
              />
              <el-table-column
                header-align="center"
                prop="ext4"
                label="状态"
                width="140"
                align="center"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                header-align="center"
                prop="wlpz"
                label="物料凭证"
                width="140"
                align="center"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                header-align="center"
                prop="wlpznf"
                :formatter="formatDate"
                label="物料凭证年份"
                width="140"
                align="center"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                header-align="center"
                prop="gzrq"
                :formatter="formatDate"
                label="过账日期"
                width="140"
                align="center"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                header-align="center"
                prop="pzrq"
                :formatter="formatDate"
                label="凭证日期"
                width="140"
                align="center"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                header-align="center"
                prop="ylh"
                :formatter="formatDate"
                label="预留号"
                width="140"
                align="center"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                header-align="center"
                prop="gc"
                :formatter="formatDate"
                label="工厂"
                width="140"
                align="center"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                header-align="center"
                prop="kcdd"
                :formatter="formatDate"
                label="库存地点"
                width="140"
                align="center"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                header-align="center"
                prop="ydlx"
                :formatter="formatDate"
                label="移动类型"
                width="140"
                align="center"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                header-align="center"
                prop="bm"
                :formatter="formatDate"
                label="WBS编码"
                width="140"
                align="center"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                header-align="center"
                prop="xmbh"
                :formatter="formatDate"
                label="项目编号"
                width="140"
                align="center"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                header-align="center"
                prop="xmmc"
                :formatter="formatDate"
                label="项目名称"
                width="140"
                align="center"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                header-align="center"
                prop="xmlx"
                :formatter="formatDate"
                label="项目类型"
                width="140"
                align="center"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                header-align="center"
                prop="pzttwb"
                :formatter="formatDate"
                label="凭证抬头文本"
                width="140"
                align="center"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                header-align="center"
                prop="wlpzcjyh"
                :formatter="formatDate"
                label="物料凭证创建用户"
                width="140"
                align="center"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                header-align="center"
                prop="gzbs"
                :formatter="formatDate"
                label="APP过账标识"
                width="140"
                align="center"
                :show-overflow-tooltip="true"
              />
            </el-table>
          </template>
        </div>
        <div class="block sw-fye">
          <el-pagination
            :page-sizes="[10, 20, 30, 40, 50,100,300]"
            :page-size="20"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
        <div class="rs-xuanxiangtwo">
          <el-button
            type="primary"
            @click="saveForm(bjform)"
          >
            保存
          </el-button>
          <el-button
            type="primary"
            @click="settwo=true"
          >
            编辑
          </el-button>
          <el-button
            type="primary"
            @click="bd=true"
          >
            绑定实物ID
          </el-button>
          <el-button
            type="primary"
            @click="isDelete()"
          >
            删除
          </el-button>
        </div>

        <div class="sw-listtwo">
          <template>
            <el-table
              :max-height="tableHeight"
              tooltip-effect="dark"
              style="width:100%"
              :data="tabgData"
              :header-cell-style="{background:'#edf5f2'}"
              @selection-change="handleSelectionChange"
            >
              <el-table-column
                style="border-right: 1px solid #ccc;"
                type="selection"
                width="55"
              />
              <el-table-column
                header-align="center"
                prop="ext4"
                label="预留行号"
                align="center"
              />
              <el-table-column
                header-align="center"
                prop="wlbh"
                label="物料编号"
                align="center"
              />
              <el-table-column
                header-align="center"
                prop="wlms"
                label="物料描述"
                align="center"
              />
              <el-table-column
                header-align="center"
                prop="klsl"
                label="可领数量"
                align="center"
              />
              <el-table-column
                header-align="center"
                prop="ythsl"
                label="已提货数量"
                align="center"
              />
              <el-table-column
                header-align="center"
                prop="tmdw"
                label="条目单位"
                align="center"
              />
              <el-table-column
                header-align="center"
                prop="pc"
                label="批次"
                align="center"
              />
              <el-table-column
                header-align="center"
                prop="ys"
                label="WBS元素"
                align="center"
              />
              <el-table-column
                header-align="center"
                prop="fhsl"
                label="发货数量"
                align="center"
              />
              <el-table-column
                header-align="center"
                prop="wbje"
                label="外部金额LC(RMB)"
                align="center"
              />
            </el-table>
          </template>
        </div>
        <div class="block sw-fyetwo">
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
        xjf5: [
          { required: true, message: '库存地点为选定值', trigger: 'change' }
        ],
        xjf15: [
          { required: true, message: '库存地点为选定值', trigger: 'change' }
        ]
      },
      bjtwoform: {
        xjf11: '',
        xjf12: '',
        xjf13: '',
        xjf14: '',
        xjf15: '',
        xjf16: '',
        xjf17: '',
        xjf18: '',
        xjf19: '',
        xjf20: ''
      },
      tabgdata: [
        // {
        //   ext4: '',
        //   wlpz: '',
        //   wlpznf: '',
        //   gzrq: '',
        //   pzrq: '',
        //   ylh: '',
        //   gc: '',
        //   kcdd: '',
        //   ydlx: '',
        //   bm: '',
        //   xmbh: '',
        //   xmmc: '',
        //   xmlx: '',
        //   pzttwb: '',
        //   wlpzcjyh: '',
        //   gzbs: ''
        // }
      ],
      tabgData: [
        // {
        //   ext4: '',
        //   wlpz: '',
        //   wlpznf: '',
        //   gzrq: '',
        //   pzrq: '',
        //   ylh: '',
        //   gc: '',
        //   kcdd: '',
        //   ydlx: '',
        //   bm: '',
        //   xmbh: '',
        //   xmmc: '',
        //   xmlx: '',
        //   pzttwb: '',
        //   wlpzcjyh: '',
        //   gzbs: ''
        // }
      ],
      multipleSelection: [],
      setone: false,
      settwo: false,
      bd: false,
      tableHeight: 300,
      formLabelWidth: '140px',
      total: 0
    }
  },
  created () {
    // 表格数据
  },
  mounted: function () {
    const that = this
    window.addEventListener('resize', function () {
      return (() => {
        that.fff()
      })()
    })
    that.fff()
  },
  methods: {
    getRs () {
      this.$agax
        .get(
          // 接口处获取字段值

        )
        .then(res => {
          this.total = res.data.resultValue.itemCount // 获取总的页数
          this.tabgData = res.data.resultValue.items // 获取表格的数据
        })
    },
    // 时间格式转换
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
    // 获取高度
    fff () {
      let _this = this
      _this.$nextTick(function () {
        _this.tableHeight = (window.innerHeight - 357) / 2
        // 监听窗口大小变化
        let self = _this
        window.onresize = function () {
          self.tableHeight = (window.innerHeight - 357) / 2
        }
      })
    },
    // 提示对话框关闭
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },

    // 确认出库
    qrck () {
      this.$message({
        message: '当前无数据。',
        type: 'warning'
      })
    },
    llddy () {
      this.$message({
        message: '当前无数据。',
        type: 'warning'
      })
    },
    ckddy () {
      this.$message({
        message: '当前无数据。',
        type: 'warning'
      })
    },
    //  编辑保存
    xinjian () {
      this.setone = false
    },
    xinjian2 () {
      this.bd = false
    },
      xinjian3 () {
      this.settwo = false
    },
    // 获取页数
    handleSizeChange (val) {

    },

    handleCurrentChange (val) {

    },
    // 保存选中结果
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.info(this.multipleSelection, 1)
    },
    // 删除
    isDelete () {
      // eslint-disable-next-line eqeqeq
      if (this.multipleSelection.length == 0) {
        this.$message({
          message: '未选中删除内容',
          type: 'warning'
        })
      } else {
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
      }
    }
  }
}
</script>
<style scoped lang="less">
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
    .rs-top {
      padding: 10px;
      background-color: #fff;
      .rs-wz {
        position: relative;
        padding: 2px 10px 0 30px;
        img {
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
    .rs-bt {
      margin-top: 10px;
      background-color: #fff;
      padding: 10px;
    }
    .rs-jg {
      position: relative;
      padding: 6px 10px 0 30px;
      font-size: 18px;
      img {
        position: absolute;
        top: 8px;
        left: 0;
      }
    }
    .rs-xuanxiang {
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
      }
      .el-button:nth-child(2) {
        position: absolute;
        top: 15px;
        left: 80px;
      }
      .el-button:nth-child(3) {
        position: absolute;
        top: 15px;
        left: 198px;
      }
      .el-button:nth-child(4) {
        position: absolute;
        top: 15px;
        left: 335px;
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
        width: 35% !important;
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
    .sw-listone {
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
    .sw-fye {
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
    .rs-xuanxiangtwo {
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
      }
      .el-button:nth-child(2) {
        position: absolute;
        top: 15px;
        left: 80px;
      }
      .el-button:nth-child(3) {
        position: absolute;
        top: 15px;
        left: 170px;
      }
      .el-button:nth-child(4) {
        position: absolute;
        top: 15px;
        left: 300px;
      }
    }
    .sw-listtwo {
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
    .sw-fyetwo {
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
</style>
