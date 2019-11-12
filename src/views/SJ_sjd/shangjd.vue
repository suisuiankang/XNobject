<template>
  <el-container>
    <el-main>
      <div class="sjd-top">
        <div class="sjd-wz">
          <img
            src="../../static/images/Ticon.png"
            alt
          >
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">
              首页
            </el-breadcrumb-item>
            <el-breadcrumb-item>入库-上架单</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <el-form
          ref="sjform"
          class="sjform"
          label-width="100px"
          min-width="800px"
          size="mini"
          :model="sjform"
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
                prop="supplyplancode"
              >
                <el-input v-model="sjform.supplyplancode" />
              </el-form-item>
            </el-col>
            <el-col
              :xl="{span:6,offset:0}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="入库批次编号:"
                prop="ebeln"
              >
                <el-input v-model="sjform.ebeln" />
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
                <el-input v-model="sjform.werks" />
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
                label="物料编码:"
                prop="mblnr"
              >
                <el-input v-model="sjform.mblnr" />
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
                prop="gjahr"
              >
                <el-input v-model="sjform.gjahr " />
              </el-form-item>
            </el-col>
            <el-col
              :xl="{span:6,offset:0}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="任务状态:"
                prop="lgort"
              >
                <el-select
                  v-model="sjform.lgort"
                  placeholder="请选择"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col
              :xl="{span:23,offset:0}"
              :lg="{span:23,offset:0}"
              :md="{span:23,offset:0}"
              :sm="{span:23,offset:0}"
            >
              <el-form-item style="float: right;">
                <el-button
                  type="primary"
                  size="small"
                  @click="qureySform(sjform)"
                >
                  查询
                </el-button>
                <el-button
                  type="primary"
                  size="small"
                  style="background-color: #fff;color: #606266;border: 1px solid #dcdfe6;"
                  @click="resetForm('sjform')"
                >
                  清除条件
                </el-button>
                <!-- resetFields -->
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="sjd-bt">
        <div class="sjd-jg">
          <img
            src="../../static/images/bicon.png"
            alt
          >
          查询结果
        </div>
        <div class="sjd-xuanxian">
          <el-button
            type="primary"
            size="small"
            @click="baocun"
          >
            保存
          </el-button>
          <el-button
            type="primary"
            size="small"
            @click="setEdit()"
          >
            编辑
          </el-button>
          <el-button
            type="primary"
            size="small"
            @click="cheakBa()"
          >
            确认验收
          </el-button>
          <el-button
            type="primary"
            size="small"
            @click="bindingID()"
          >
            绑定实物ID
          </el-button>
        </div>
        <el-dialog
          class="sjd_ID"
          title="关联实物ID"
          center
          :visible.sync="dialogTableVisible"
        >
          <el-table
            :data="gridData"
            @selection-change="handleSelectionChangr"
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
              style="border-right: 1px solid #ccc;"
              type="selection"
              width="55"
            />
            <el-table-column
              prop="ebad1"
              header-align="center"
              align="center"
              label="采购凭证"
              :show-overflow-tooltip="true"
              width="80"
            />
            <el-table-column
              prop="ebad2"
              header-align="center"
              align="center"
              label="行项目"
              width="80"
            />
            <el-table-column
              prop="ebad3"
              header-align="center"
              align="center"
              label="序列号"
              width="80"
            />
            <el-table-column
              prop="ebad4"
              header-align="center"
              align="center"
              label="序号"
              width="60"
            />
            <el-table-column
              prop="ebad5"
              header-align="center"
              align="center"
              label="子序号"
              width="80"
            />
            <el-table-column
              prop="ebad6"
              header-align="center"
              align="center"
              label="实物ID"
              :show-overflow-tooltip="true"
              width="80"
            />
            <el-table-column
              prop="ebad7"
              header-align="center"
              align="center"
              label="上级实物ID"
              width="120"
            />
            <el-table-column
              prop="ebad8"
              header-align="center"
              align="center"
              label="物料编码"
              :show-overflow-tooltip="true"
              width="80"
            />
            <el-table-column
              prop="ebad9"
              header-align="center"
              align="center"
              label="物料描述"
              :show-overflow-tooltip="true"
              width="80"
            />
            <el-table-column
              prop="ebad10"
              header-align="center"
              align="center"
              label="技术对象类型"
              width="120"
            />
            <el-table-column
              prop="ebad11"
              header-align="center"
              align="center"
              label="对象类型文本"
              width="120"
            />
            <el-table-column
              prop="ebad12"
              header-align="center"
              align="center"
              label="主设备标识"
              width="100"
            />
            <el-table-column
              prop="ebad13"
              header-align="center"
              align="center"
              label="公司代码"
              width="80"
            />
          </el-table>
          <span
            slot="footer"
            class="dialog-footer"
          >
            <el-button
              type="primary"
              size="small"
              @click="preservationBd"
            >保存</el-button>
          </span>
        </el-dialog>
        <div class="sjd-xj">
          <el-dialog
            title="表单编辑"
            :visible.sync="isEdit"
            width="40%"
            center
          >
            <el-form
              ref="edform"
              :rules="rules"
              class="edform"
              label-width="120px"
              size="mini"
              :model="edform"
            >
              <el-row>
                <el-col
                  :xl="{span:4,offset:0}"
                  :lg="{span:4,offset:0}"
                  :md="{span:5,offset:0}"
                  :sm="{span:5,offset:0}"
                >
                  <el-form-item
                    label="任务状态:"
                    prop="ext4"
                  >
                    <el-select
                      v-model="edform.ext4"
                      placeholder="请选择"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
                <el-col
                  :xl="{span:4,offset:8}"
                  :lg="{span:4,offset:8}"
                  :md="{span:5,offset:7}"
                  :sm="{span:5,offset:7}"
                >
                  <el-form-item
                    label="目标储位号:"
                    prop="cwh"
                  >
                    <el-select
                      v-model="edform.cwh"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="(item,i) in cwhForm"
                        :key="i"
                        :label="item.text"
                        :value="item.value"
                      />
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-form-item
                    label="物料凭证:"
                    prop="supplyplancode"
                  >
                    <el-input
                      v-model="edform.supplyplancode"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
                <el-col
                  :span="4"
                  :offset="8"
                >
                  <el-form-item
                    label="采购订单:"
                    prop="ebelp"
                  >
                    <el-input
                      v-model="edform.ebelp"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-form-item
                    label="公司代码:"
                    prop="matnr"
                  >
                    <el-input
                      v-model="edform.matnr"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
                <el-col
                  :span="4"
                  :offset="8"
                >
                  <el-form-item
                    label="公司名称:"
                    prop="maktx"
                  >
                    <el-input
                      v-model="edform.maktx"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-form-item
                    label="工厂:"
                    prop="zjjsl"
                  >
                    <el-input
                      v-model="edform.zjjsl"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
                <el-col
                  :span="4"
                  :offset="8"
                >
                  <el-form-item
                    label="工厂名称:"
                    prop="menge"
                  >
                    <el-input
                      v-model="edform.menge"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-form-item
                    label="库存地点:"
                    prop="meins"
                  >
                    <el-input
                      v-model="edform.meins"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
                <el-col
                  :span="4"
                  :offset="8"
                >
                  <el-form-item
                    label="库存地点描述:"
                    prop="werks"
                  >
                    <el-input
                      v-model="edform.werks"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-form-item
                    label="物料编码:"
                    prop="werksdescription"
                  >
                    <el-input
                      v-model="edform.werksdescription"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
                <el-col
                  :span="4"
                  :offset="8"
                >
                  <el-form-item
                    label="物料名称:"
                    prop="posid"
                  >
                    <el-input
                      v-model="edform.posid"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-form-item
                    label="物料存储标识:"
                    prop="psphi"
                  >
                    <el-input
                      v-model="edform.psphi"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
                <el-col
                  :span="4"
                  :offset="8"
                >
                  <el-form-item
                    label="WBS元素:"
                    prop="xmpost1"
                  >
                    <el-input
                      v-model="edform.xmpost1"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-form-item
                    label="计划上货数量:"
                    prop="pratx"
                  >
                    <el-input
                      v-model="edform.pratx"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
                <el-col
                  :span="4"
                  :offset="8"
                >
                  <el-form-item

                    label="实际上货数量:"
                    prop="shsl"
                  >
                    <el-input
                      v-model="edform.shsl"
                      v-only-number="{max:1,min:0,precision:1}"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-form-item
                    label="数量计量单位:"
                    prop="zhtbh"
                  >
                    <el-input
                      v-model="edform.zhtbh"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
                <el-col
                  :span="4"
                  :offset="8"
                >
                  <el-form-item
                    label="供应商编号:"
                    prop="zxmdw"
                  >
                    <el-input
                      v-model="edform.zxmdw"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-form-item
                    label="批次:"
                    prop="username"
                  >
                    <el-input
                      v-model="edform.username"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
                <el-col
                  :span="4"
                  :offset="8"
                >
                  <el-form-item
                    label="移动类型:"
                    prop="zfhfqz"
                  >
                    <el-input
                      v-model="edform.zfhfqz"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-form-item
                    label="完成任务员工号:"
                    prop="zfhfsj"
                  >
                    <el-input
                      v-model="edform.zfhfsj"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
                <el-col
                  :span="4"
                  :offset="8"
                >
                  <el-form-item
                    label="备注:"
                    prop="zshfsj"
                  >
                    <el-input v-model="edform.zshfsj" />
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
                @click="submitForm('edform')"
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
                style="border-right: 1px solid #ccc;"
                type="selection"
                width="55"
              />
              <el-table-column
                header-align="center"
                prop="ext4"
                label="任务状态"
                width="80"
                align="center"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="supplyplancode"
                label="物料凭证"
                width="80"
                align="center"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="ebeln"
                label="行项目"
                width="110"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                align="center"
                prop="ebelp"
                label="采购订单"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="matnr"
                label="公司代码"
                width="80"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="maktx"
                label="公司名称"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zjjsl"
                label="工厂"
                width="60"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                align="center"
                prop="menge"
                label="工厂名称"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="meins"
                label="库存地点"
                width="80"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                align="center"
                prop="werks"
                label="库存地点描述"
                width="120"
              />
              <el-table-column
                header-align="center"
                prop="werksdescription"
                :show-overflow-tooltip="true"
                label="物料编码"
                width="80"
                align="center"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="posid"
                label="物料名称"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="psphi"
                label="特殊库存标识"
                width="120"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="xmpost1"
                label="WBS元素"
                width="120"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="pratx"
                label="计划上架数量"
                width="120"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="zhtbh"
                label="数量计量单位"
                width="120"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                align="center"
                prop="zxmdw"
                label="供应商编号"
                width="120"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                align="center"
                prop="username"
                label="批次"
                width="60"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zfhfqz"
                label="移动类型"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zfhfsj"
                label="完成任务员工号"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zshfqz"
                label="APP上架标识"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zshfsj"
                label="备注"
                width="80"
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
      edform: {
        ext4: '',
        supplyplancode: '',
        ebeln: '',
        ebelp: '',
        cwh: '',
        matnr: '',
        maktx: '',
        zjjsl: '',
        menge: '',
        meins: '',
        werks: '',
        werksdescription: '',
        posid: '',
        psphi: '',
        xmpost1: '',
        pratx: '',
        shsl: '',
        zhtbh: '',
        zxmdw: '',
        username: '',
        zfhfqz: '',
        zfhfsj: '',
        zshfqz: '',
        zshfsj: ''
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
      cwhForm: [
        { text: 'F01-000001', value: 'F01-000001' },
        { text: 'B01-010101', value: 'B01-010101' },
        { text: 'B01-010104', value: 'B01-010104' },
        { text: 'B01-010113', value: 'B01-010113' },
        { text: 'B01-010123', value: 'B01-010123' }
      ],
      sjform: {
        supplyplancode: '',
        ebeln: '',
        werks: '',
        mblnr: '',
        gjahr: '',
        lgort: '',
        ks_pstngDate: '',
        js_pstngDate: ''
      },
      sgform: [
        {
          ebad1: '200002531',
          ebad2: '10',
          ebad3: '56',
          ebad4: '1',
          ebad5: '',
          ebad6: '001010000000000002061960',
          ebad7: '',
          ebad8: '000000000500000002',
          ebad9: '0.5S级三相本地费控智能电能表,射频卡,外置,微功率无线+485,57.7V',
          ebad10: '',
          ebad11: '',
          ebad12: '',
          ebad13: '2800'

        }
      ],
      gridData: [
      ],
      tabgData: [
      ],
      tabgrData: [
        {
          ext4: '',
          supplyplancode: '5000018892',
          ebeln: '1',
          ebelp: '100002432',
          matnr: '2800',
          maktx: '国网青海省电力公司',
          zjjsl: 'XA01',
          menge: '国网青海省西宁供电公司工厂',
          meins: '91X1',
          werks: '青海省电力公司西宁项目直发虚拟库',
          werksdescription: '510111749',
          posid: '千兆纵向加密认证装置,4,明文吞吐量95Mbps,密文吞吐量25Mbps',
          psphi: 'Q',
          xmpost1: '16280114005B0021111140',
          pratx: '1',
          zhtbh: '台',
          zxmdw: '1000015048',
          username: '0000022654',
          zfhfqz: '105',
          zfhfsj: '',
          zshfqz: '',
          zshfsj: ''
        }
      ],
      multipleSelectionr: [],
      multipleSelection: [],
      isEdit: false,
      dialogTableVisible: false,
      // eslint-disable-next-line no-undef
      tableHeight: 536,
      formLabelWidth: '140px',
      total: 0
    }
  },
  created () {
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
    // 保存
    baocun () {
      // eslint-disable-next-line eqeqeq
      if (this.multipleSelection.length == 0) {
        this.$message({
          message: '未选中编辑内容',
          type: 'warning'
        })
      // eslint-disable-next-line eqeqeq
      } else {
        this.$message({
          type: 'success',
          message: '保存成功!'
        })
      }
    },
    // 保存绑定
    preservationBd () {
      // eslint-disable-next-line eqeqeq
      if (this.multipleSelectionr.length == 0) {
        this.$message({
          message: '未选中绑定内容',
          type: 'warning'
        })
      } else {
        this.dialogTableVisible = false
        this.tabgData[0].zshfqz = 'app'
        this.$message({
          message: '绑定成功',
          type: 'success'
        })
      }
    },
    // 绑定ID
    bindingID () {
      // eslint-disable-next-line eqeqeq
      if (this.multipleSelection.length == 0) {
        this.$message({
          message: '未选中编辑内容',
          type: 'warning'
        })
      } else {
        this.dialogTableVisible = true
        this.gridData = this.sgform
      }
    },
    // 验收
    cheakBa () {
      // eslint-disable-next-line eqeqeq
      if (this.multipleSelection.length == 0) {
        this.$message({
          message: '未选中编辑内容',
          type: 'warning'
        })
      // eslint-disable-next-line eqeqeq
      } else if (this.tabgData[0].zshfqz == '') {
        this.$message({
          message: '未绑定实物ID',
          type: 'warning'
        })
      } else {
        this.$confirm('此操作将确认验收, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$message({
              type: 'success',
              message: '验收成功!'
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
    // 重置
    resetForm (formName) {
      this.$refs[formName].resetFields()
      this.tabgData = []
      this.total = 0
    },
    // 编辑
    setEdit () {
      // eslint-disable-next-line eqeqeq
      if (this.multipleSelection.length == 0) {
        this.$message({
          message: '未选中编辑内容',
          type: 'warning'
        })
      } else if (this.multipleSelection.length >= 2) {
        this.$message({
          message: '选定的记录条数不能超过一条',
          type: 'warning'
        })
      } else {
        this.isEdit = true
        this.edform = this.multipleSelection[0]
      }
    },
    // 保存验证 提交
    submitForm (formName) {
      console.log(formName.shsl)
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('信息无误')
          this.isEdit = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 序号索引
    indexMethod (index) {
      return index * 1
    },
    // 查询
    qureySform (form) {
      // eslint-disable-next-line eqeqeq
      if (form.supplyplancode == '') {
        this.$message({
          message: '请输入发货通知单号',
          type: 'warning'
        })
      // eslint-disable-next-line eqeqeq
      } else if (form.supplyplancode == '100002432') {
        this.tabgData = this.tabgrData
        this.total = this.tabgrData.length
        this.tableHeight = window.innerHeight - 735
      } else {
        this.$message({
          message: '暂无数据',
          type: 'warning'
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
    // 关联ID保存选中结果
    handleSelectionChangr (val) {
      this.multipleSelectionr = val
      //   console.info(this.multipleSelection, 1);
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
    .sjd-top {
      padding: 10px;
      background-color: #fff;

      .sjd-wz {
        position: relative;
        padding: 10px 10px 0 30px;
        img {
          position: absolute;
          top: 8px;
          left: 0;
        }
      }
      .sjform {
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
      }
    }
    .sjd-bt {
      margin-top: 10px;
      background-color: #fff;
      padding: 10px;
      .sjd-jg {
        position: relative;
        padding: 6px 10px 0 30px;
        font-size: 18px;

        img {
          position: absolute;
          top: 8px;
          left: 0;
        }
      }
      .sjd-xuanxian {
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
          left: 70px;
        }
        .el-button:nth-child(3) {
          width: 80px;
          position: absolute;
          top: 15px;
          left: 150px;
        }
        .el-button:nth-child(4) {
          width: 92px;
          position: absolute;
          top: 15px;
          left: 254px;
        }
      }
      .sjd_ID {
        /deep/.el-dialog__header {
            padding: 0;
            height: 50px !important;
            line-height: 0px;
        }
        /deep/.el-dialog__body {
          padding: 0;
        }
        /deep/.el-dialog__footer {
          padding: 10px 0!important;
          height: 60px !important;
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
      .sjd-xj {
        /deep/ .el-dialog {
          width: 60%!important;
          .el-dialog__header {
            padding: 0;
            height: 50px !important;
            line-height: 30px;
            .el-dialog__title {
              position: absolute;
              top: 10px;
              left: 46%;
            }
          }
          .edform {
            /* .el-input {
                width: 200px!important;
              } */
            .el-input__inner {
              width: 2rem;
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
