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
                  @click="qureySform()"
                >
                  查询
                </el-button>
                <el-button
                  type="primary"
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
          <el-button type="primary">
            保存
          </el-button>
          <el-button
            type="primary"
            @click="setEdit()"
          >
            编辑
          </el-button>
          <el-button
            type="primary"
            @click="cheakBa()"
          >
            确认验收
          </el-button>
          <el-button
            type="primary"
            @click="bindingID()"
          >
            绑定实物ID
          </el-button>
        </div>
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
                @click="submitForm('edform');clickButton(edform)"
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
                align="center"
                prop="werks"
                label="库存地点描述"
                width="120"
              />
              <el-table-column
                header-align="center"
                prop="werksdescription"
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
                label="物料库存标识"
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
                align="center"
                prop="zxmdw"
                label="供应商编号"
                width="120"
              />
              <el-table-column
                header-align="center"
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
      isEdit: false,
      // eslint-disable-next-line no-undef
      tableHeight: 536,
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
    // 绑定ID
    bindingID () {
      // eslint-disable-next-line eqeqeq
      if (this.multipleSelection.length == 0) {
        this.$message({
          message: '未选中编辑内容',
          type: 'warning'
        })
      } else {
        this.$message({
          message: '已绑定ID',
          type: 'success'
        })
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
      } else {
        this.$message({
          message: '已验收',
          type: 'success'
        })
      }
    },
    // 重置
    resetForm (formName) {
      this.$refs[formName].resetFields()
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
        this.editForm = this.multipleSelection[0]
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
    // 序号索引
    indexMethod (index) {
      return index * 1
    },
    // 查询
    qureySform () {
      this.$message({
        message: '暂无数据',
        type: 'warning'
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
          left: 290px;
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
