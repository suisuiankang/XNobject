<template>
  <el-container>
    <el-main>
      <div class="gcjy-top">
        <div class="gcjy-wz">
          <img
            src="../../static/images/Ticon.png"
            alt
          >
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">
              首页
            </el-breadcrumb-item>
            <el-breadcrumb-item>移库单</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <el-form
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
                label="移库计划号:"
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
                label="优先级:"
                prop="factory"
              >
                <el-select
                  v-model="hdform.factory"
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
                label="当前状态:"
                prop="stock"
              >
                <el-select
                  v-model="hdform.stock"
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
                label="工厂:"
                prop="batch"
              >
                <el-select
                  v-model="hdform.batch"
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
                prop="handle"
              >
                <el-select
                  v-model="hdform.handle"
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
                >
                  查询
                </el-button>
                <el-button
                  type="primary"
                  size="small"
                  style="background-color: #fff;color: #606266;border: 1px solid #dcdfe6;"
                >
                  清除条件
                </el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="gcjy-bt">
        <div class="gcjy-jg">
          <img
            src="../../static/images/bicon.png"
            alt
          >
          查询结果
        </div>
        <div class="gcjy-xuanxiane">
          <el-button
            type="primary"
            size="small"
            @click="isBuild=true"
          >
            新增
          </el-button>
          <el-button
            type="primary"
            size="small"
            @click="isPosting()"
          >
            编辑
          </el-button>
          <el-button
            type="primary"
            size="small"
            @click="release"
          >
            发布移库单
          </el-button>
          <el-button
            type="primary"
            size="small"
            @click="isDelete()"
          >
            作废
          </el-button>
        </div>
        <div class="gcjy-xj">
          <el-dialog
            title="表单填写"
            :visible.sync="isBuild"
            width="40%"
            center
          >
            <el-form
              ref="xjform"
              :rules="rules"
              class="xjform"
              label-width="120px"
              size="mini"
              :model="xjform"
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
                      v-model="xjform.xjf1"
                      placeholder="222"
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
                      v-model="xjform.xjf2"
                      placeholder="工程结余物资退库"
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
                      v-model="xjform.xjf3"
                      placeholder="Q"
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
                      v-model="xjform.xjf4"
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
                      v-model="xjform.xjf5"
                      type="date"
                      placeholder="选择日期"
                      format="yyyy 年 MM 月 dd 日"
                      value-format="yyyy-MM-dd"
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
                @click="clickButtone(xjform)"
              >保存</el-button>
            </span>
          </el-dialog>
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
                    prop="supplyplancode"
                  >
                    <el-select
                      v-model="edform.supplyplancode"
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
                    />
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
                    prop="ebeln"
                  >
                    <el-input
                      v-model="edform.ebeln"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-form-item
                    label="公司代码:"
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
                    label="公司名称:"
                    prop="ebeln"
                  >
                    <el-input
                      v-model="edform.ebeln"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-form-item
                    label="工厂:"
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
                    label="工厂名称:"
                    prop="ebeln"
                  >
                    <el-input
                      v-model="edform.ebeln"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-form-item
                    label="库存地点:"
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
                    label="库存地点描述:"
                    prop="ebeln"
                  >
                    <el-input
                      v-model="edform.ebeln"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-form-item
                    label="物料编码:"
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
                    label="物料名称:"
                    prop="ebeln"
                  >
                    <el-input
                      v-model="edform.ebeln"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-form-item
                    label="物料存储标识:"
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
                    label="WBS元素:"
                    prop="ebeln"
                  >
                    <el-input
                      v-model="edform.ebeln"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-form-item
                    label="计划上货数量:"
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

                    label="实际上货数量:"
                    prop="shsl"
                  >
                    <el-input
                      v-model="edform.shsl"
                      v-only-number="{max:10,min:0,precision:2}"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-form-item
                    label="数量计量单位:"
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
                    label="供应商编号:"
                    prop="ebeln"
                  >
                    <el-input
                      v-model="edform.ebeln"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-form-item
                    label="批次:"
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
                    label="移动类型:"
                    prop="ebeln"
                  >
                    <el-input
                      v-model="edform.ebeln"
                      :disabled="true"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4">
                  <el-form-item
                    label="完成任务员工号:"
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
                    label="备注:"
                    prop="ebeln"
                  >
                    <el-input v-model="edform.ebeln" />
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
                @click="clickButtonr(edform)"
              >保存</el-button>
            </span>
          </el-dialog>
        </div>
        <div class="sw-liste">
          <template>
            <el-table
              :max-height="tableHeight"
              tooltip-effect="dark"
              style="width: 100%"
              :data="tabteData"
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
                label="移库计划号"
                width="140"
                align="center"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="supplyplancode"
                label="当前状态"
                width="80"
                align="center"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="ebeln"
                label="移库类别"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="ebelp"
                label="优先级"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="matnr"
                label="工厂"
                width="60"
              />
              <el-table-column
                header-align="center"
                align="center"
                :show-overflow-tooltip="true"
                prop="maktx"
                label="库存地点"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zjjsl"
                label="计划开始时间"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="menge"
                label="计划结束时间"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="meins"
                label="备注"
                width="60"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="werks"
                label="创建者"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="werks"
                label="创建时间"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="werks"
                label="最后编辑者"
                width="100"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="werks"
                label="最后编辑时间"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="werks"
                label="APP移库标识"
                width="140"
              />
              <el-table-column />
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
        <div class="gcjy-xuanxianr">
          <el-button
            type="primary"
            size="small"
            @click="isBuildr()"
          >
            新增
          </el-button>
          <el-button
            type="primary"
            size="small"
            @click="isbjr()"
          >
            编辑
          </el-button>
          <el-button
            type="primary"
            size="small"
            @click="isDeleter()"
          >
            删除
          </el-button>
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
                label="物料编码:"
                prop="ebeln"
              >
                <el-input v-model="mForm.ebeln" />
              </el-form-item>
            </el-col>

            <el-col
              class="marf"
              :xl="{span:4}"
              :lg="{span:5}"
              :md="{span:6}"
              :sm="{span:7}"
            >
              <el-form-item style="float: right;">
                <el-button
                  type="primary"
                  size="small"
                >
                  查询
                </el-button>
                <el-button
                  type="primary"
                  size="small"
                  style="background-color: #fff;color: #606266;border: 1px solid #dcdfe6;"
                >
                  清除条件
                </el-button>
                <!-- resetFields -->
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div class="sw-listr">
          <template>
            <el-table
              :max-height="tableHeight"
              tooltip-effect="dark"
              style="width: 100%"
              :data="tabtrData"
              :header-cell-style="{background:'#edf5f2'}"
              @selection-change="handleSelectionChanger"
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
                ext4
                prop="ext4"
                label="移库原始储位"
                width="140"
                align="center"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="supplyplancode"
                label="移库目标储位 "
                width="140"
                align="center"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="ebeln"
                label="物料编码"
                width="100"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="ebelp"
                label="物料描述"
                width="100"
              />
              <el-table-column
                header-align="center"
                align="center"
                :show-overflow-tooltip="true"
                prop="maktx"
                label="计量单位"
                width="100"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zjjsl"
                label="非限制数量"
                width="140"
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
                label="WBS元素"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="werks"
                label="供应商"
                width="100"
              />
              <el-table-column
                header-align="center"

                prop="werksdescription"
                label="移库个数"
                width="120"
                align="center"
              />
              <el-table-column />
            </el-table>
          </template>
        </div>
        <div class="block sw-fyr">
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
      xjform: {
        xjf1: '',
        xjf2: '',
        xjf3: '',
        xjf4: '',
        xjf5: '',
        xjf6: '',
        xjf7: ''
      },
      mForm: {
        supplyplancode: '',
        mblnr: '',
        gjahr: '',
        bukrs: '',
        werks: '',
        lgort: '',
        ebeln: ''
      },
      hdform: {
        wlbm: '',
        factory: '',
        werks: '',
        stock: '',
        batch: '',
        handle: ''
      },
      edform: {
        cwh: '',
        shsl: '',
        supplyplancode: '',
        ebeln: '',
        werks: '',
        mblnr: '',
        gjahr: '',
        lgort: '',
        ks_pstngDate: '',
        js_pstngDate: ''
      },
      rules: {
        xjf1: [
          { required: true, message: '移动类型:值不能为空', trigger: 'change' }
        ],
        xjf2: [
          { required: true, message: '移动类型描述:值不能为空', trigger: 'change' }
        ],
        xjf4: [
          { required: true, message: '过帐日期:值不能为空', trigger: 'change' }
        ],
        xjf5: [
          { required: true, message: '凭证日期:值不能为空', trigger: 'change' }
        ],
        xjf7: [
          { required: true, message: '数据来源:值不能为空', trigger: 'change' }
        ]
      },
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
      tabteData: [
        {
          ext4: '已处理',
          supplyplancode: '1',
          ebeln: '2',
          ebelp: '3',
          matnr: '4',
          maktx: '5',
          zjjsl: '6',
          menge: '7',
          meins: '8',
          werks: '9',
          werksdescription: '10',
          posid: '1',
          psphi: '2',
          xmpost1: '3',
          pratx: '4',
          zhtbh: '5',
          zxmdw: '6',
          username: '7',
          zfhfqz: '8',
          zfhfsj: '9',
          zshfqz: '10',
          zshfsj: '11',
          zsjjhq: '12',
          actualdeliverypl: '13',
          remark: '14',
          pstngDate: '15',
          blart: '16',
          bwart: '17',
          bukrs: '18',
          bukrsdescription: '19',
          zyjfhq: '20',
          eindt: '21',
          suppliername: '22',
          supplinkman: '23',
          supplinkmantelep: '24',
          carrlinkman: '25',
          carrlinkmantelep: '26',
          delinkman: '27',
          delinkmantelepho: '28',
          msgcode: '29',
          msgdesp: '30',
          mblnr: '31',
          gjahr: '32'
        }

      ],
      tabtrData: [
        {
          ext4: '已处理',
          supplyplancode: '1',
          ebeln: '2',
          ebelp: '3',
          matnr: '4',
          maktx: '5',
          zjjsl: '6',
          menge: '7',
          meins: '8',
          werks: '9',
          werksdescription: '10',
          posid: '1',
          psphi: '2',
          xmpost1: '3',
          pratx: '4',
          zhtbh: '5',
          zxmdw: '6',
          username: '7',
          zfhfqz: '8',
          zfhfsj: '9',
          zshfqz: '10',
          zshfsj: '11',
          zsjjhq: '12',
          actualdeliverypl: '13',
          remark: '14',
          pstngDate: '15',
          blart: '16',
          bwart: '17',
          bukrs: '18',
          bukrsdescription: '19',
          zyjfhq: '20',
          eindt: '21',
          suppliername: '22',
          supplinkman: '23',
          supplinkmantelep: '24',
          carrlinkman: '25',
          carrlinkmantelep: '26',
          delinkman: '27',
          delinkmantelepho: '28',
          msgcode: '29',
          msgdesp: '30',
          mblnr: '31',
          gjahr: '32'
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
      multipleSelectionr: [],
      isBuild: false,
      isEdit: false,
      // eslint-disable-next-line no-undef
      tableHeight: 300,
      formLabelWidth: '140px',
      total: 1
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
    //   删除r
    isDeleter () {
      // eslint-disable-next-line eqeqeq
      if (this.multipleSelection.length == 0) {
        this.$message({
          message: '未选中删除内容',
          type: 'warning'
        })
      } else {
        this.$message({
          message: '当前状态不能删除',
          type: 'warning'
        })
      }
    },
    // 编辑r
    isbjr () {
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
        this.$message({
          message: '当前状态不可以编辑。',
          type: 'warning'
        })
      }
    },
    // 新增r
    isBuildr () {
      // eslint-disable-next-line eqeqeq
      if (this.multipleSelection.length == 0) {
        this.$message({
          message: '请选中上方列表具体数据',
          type: 'warning'
        })
      } else {
        this.$message({
          message: '只能新增未处理数据',
          type: 'warning'
        })
      }
    },
    // 实时获取高度
    fff () {
      let _this = this
      _this.$nextTick(function () {
        _this.tableHeight = (window.innerHeight - 544) / 2
        // 监听窗口大小变化
        let self = _this
        window.onresize = function () {
          self.tableHeight = (window.innerHeight - 544) / 2
        }
      })
    },
    // 删除
    isDelete () {
      // eslint-disable-next-line eqeqeq
      if (this.multipleSelection.length == 0) {
        this.$message({
          message: '未选中作废内容',
          type: 'warning'
        })
      } else {
        this.$confirm('此操作将永久作废该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    },
    // 编辑
    isPosting () {
      // eslint-disable-next-line eqeqeq
      if (this.multipleSelection.length == 0) {
        this.$message({
          message: '请至少选中一条记录',
          type: 'warning'
        })
      } else {
        this.isEdit = true
      }
    },
    //
    release () {
      // eslint-disable-next-line eqeqeq
      if (this.multipleSelection.length == 0) {
        this.$message({
          message: '请至少选中一条记录',
          type: 'warning'
        })
      } else {
        this.$message({
          message: '明细数据不存在，不可以进行发布',
          type: 'warning'
        })
      }
    },
    // 新建保存提交e
    clickButtone (from) {
      this.isBuild = false
      console.log(from.shsl, '10')
    },
    // 编辑保存提交e
    clickButtonr (from) {
      this.isEdit = false
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
    // 序号索引
    indexMethod (index) {
      return index * 1
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
    handleSelectionChanger (val) {
      this.multipleSelectionr = val
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
    .gcjy-top {
      padding: 10px;
      background-color: #fff;

      .gcjy-wz {
        position: relative;
        padding: 2px 10px 0 30px;
        img {
          position: absolute;
          top: 0;
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
    .gcjy-bt {
      margin-top: 10px;
      background-color: #fff;
      padding: 10px;
      .gcjy-jg {
        position: relative;
        padding: 6px 10px 0 30px;
        font-size: 18px;

        img {
          position: absolute;
          top: 8px;
          left: 0;
        }
      }
      .gcjy-xuanxiane {
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
          width: 92px;
          position: absolute;
          top: 15px;
          left: 150px;
        }
        .el-button:nth-child(4) {
          position: absolute;
          top: 15px;
          left: 266px;
        }
      }
      .gcjy-xj {
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
          .xjform {
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
          .edform {
            .el-input__inner {
              width: 1.8rem;
            }
          }
        }
      }
      .sw-liste {
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
      .gcjy-xuanxianr {
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
          position: absolute;
          top: 15px;
          left: 150px;
        }
      }
      .mForm {
        width: 100%;
        box-sizing: border-box;
        padding: 14px 0 0 40px;

        .el-button {
          background-color: #09b09a;
          border: none;
        }

        .el-input,
        .el-select {
          width: 2.889rem !important;
        }
        .el-button:nth-child(2) {
          width: 80px;
        }
        /deep/.el-form-item__content {
          margin-left: 0!important;
        }
      }
      .sw-listr {
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
      .sw-fyr {
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
