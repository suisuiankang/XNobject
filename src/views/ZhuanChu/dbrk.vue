<template>
  <el-container>
    <el-main>
      <div class="dbwzrk-top">
        <div class="dbwzrk-wz">
          <img
            src="../../static/images/Ticon.png"
            alt
          >
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">
              首页
            </el-breadcrumb-item>
            <el-breadcrumb-item>调拨物质入库</el-breadcrumb-item>
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
                <el-select v-model="yform.mblnr">
                  <el-option
                    v-for="(item,i) in ext_6Form"
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
                <el-date-picker
                  v-model="value3"
                  type="year"
                  placeholder="选择年份"
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
                label="状态:"
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
                  @click="queryform()"
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
        </el-form>-->
      </div>
      <div class="dbwzrk-bt">
        <div class="dbwzrk-jg">
          <img
            src="../../static/images/bicon.png"
          >
          查询结果
        </div>
        <div
          class="dbwzrk-xuanxian"
          style="text-align: center;"
        >
          <el-button
            type="primary"
            size="small"
            @click="newlyBuild=true"
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
            @click="guozhang()"
          >
            过账
          </el-button>
          <el-button
            type="primary"
            size="small"
            @click="isBid()"
          >
            绑定实物ID
          </el-button>
        </div>
        <!-- 表单编辑 -->
        <div class="sjd-xj">
          <el-dialog
            title="表单编辑"
            :visible.sync="isEdit"
            width="38%"
            :before-close="handleClose"
            center
          >
            <el-form
              ref="muForm"
              class="muForm"
              :model="muForm"
              size="mini"
              label-width="120px"
            >
              <el-row>
                <el-col
                  :xl="{span:20,offset:4}"
                  :lg="{span:20,offset:3}"
                  :md="{span:20,offset:1}"
                  :sm="{span:22,offset:0}"
                >
                  <el-form-item
                    label="采购订单"
                    prop="code"
                  >
                    <el-input v-model="mForm.code" />
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
                    label="行项目"
                    prop="upcode"
                  >
                    <el-input v-model="mForm.upcode" />
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
                    label="工厂"
                    prop="name"
                  >
                    <el-input v-model="mForm.name" />
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
                    label="工厂名称:"
                    prop="type"
                  >
                    <el-input
                      v-model="muForm.type"
                      autocomplete="off"
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
                    style="width: 2.8rem !important;"
                    prop="state"
                  >
                    <el-select
                      v-model="muForm.state"
                      style="width: 2.8rem !important;"
                      placeholder
                    >
                      <el-option
                        v-for="(item,i) in stateForm"
                        :key="i"
                        style="width: 2.8rem !important;"
                        :label="item.text"
                        :value="item.value"
                      />
                    </el-select>
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
                    label="库存描述:"
                    prop="year"
                  >
                    <el-input
                      v-model="muForm.year"
                      autocomplete="off"
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
                    prop="remark"
                  >
                    <el-date-picker
                      v-model="muForm.remark"
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
                    label="过账日期:"
                    prop="codeorder"
                  >
                    <el-date-picker
                      v-model="muForm.codeorder"
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
                    label="物料编码:"
                    prop="year"
                  >
                    <el-input
                      v-model="muForm.year"
                      autocomplete="off"
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
                    label="物料描述:"
                    prop="year"
                  >
                    <el-input
                      v-model="muForm.year"
                      autocomplete="off"
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
                    label="储位号:"
                    prop="year"
                  >
                    <el-input
                      v-model="muForm.year"
                      autocomplete="off"
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
                    label="WBS元素:"
                    prop="year"
                  >
                    <el-input
                      v-model="muForm.year"
                      autocomplete="off"
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
                    label="WBS元素描述:"
                    prop="year"
                  >
                    <el-input
                      v-model="muForm.year"
                      autocomplete="off"
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
                    label="移动类型:"
                    prop="year"
                  >
                    <el-input
                      v-model="muForm.year"
                      autocomplete="off"
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
                    prop="year"
                  >
                    <el-input
                      v-model="muForm.year"
                      autocomplete="off"
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
                    label="收货数量:"
                    prop="year"
                  >
                    <el-input
                      v-model="muForm.year"
                      autocomplete="off"
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
                    label="计量单位:"
                    prop="year"
                  >
                    <el-input
                      v-model="muForm.year"
                      autocomplete="off"
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
                    label="入库来源:"
                    prop="year"
                  >
                    <el-input
                      v-model="muForm.year"
                      autocomplete="off"
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
                @click="saveForm(muForm)"
              >保存</el-button>
            </span>
          </el-dialog>
        </div>
        <div class="bangding">
          <el-dialog
            :before-close="handleClose"
            title="绑定实物ID"
            :visible.sync="isaBid"
            center
          >
            <el-table style="width: 100%">
              <el-table-column
                :show-overflow-tooltip="true"
                header-align="center"
                align="center"
                type="selection"
                width="80"
              />
              <el-table-column
                prop="q"
                label="交接单号"
                width="110"
              />
              <el-table-column
                prop="w"
                label="物料凭证"
                width="110"
              />
              <el-table-column
                prop="e"
                label="物料凭证年份"
                width="140"
              />
              <el-table-column
                prop="r"
                label="公司代码"
                width="110"
              />
              <el-table-column
                prop="t"
                label="工厂"
                width="60"
              />
              <el-table-column
                prop="y"
                label="库存地点"
                width="110"
              />
              <el-table-column
                prop="u"
                label="采购订单"
                width="110"
              />
            </el-table>
            <span
              slot="footer"
              class="dialog-footer"
            >
              <el-button
                style="border-color: #09b09a"
                type="primary"
                size="small"
                @click="bdone = false"
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
                prop="ext4"
                label="状态"
                width="60"
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
                width="110"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="ext_6"
                label="物料凭证"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="matnr"
                label="物料凭证年份"
                width="120"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="maktx"
                label="工厂"
                width="60"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="menge"
                label="工厂名称"
                width="110"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="bukrsdescription"
                label="凭证日期"
                width="110"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="werks"
                label="过账日期"
                width="110"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="meins"
                label="库存地点"
                width="110"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="bukrs"
                label="库存描述"
                width="110"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="bukrs"
                label="储位号"
                width="110"
              />
              <el-table-column
                header-align="center"
                prop="werksdescription"
                label="物料编码"
                width="110"
                align="center"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="lgort"
                label="物料描述"
                width="110"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="lgortdescription"
                label="WBS元素"
                width="110"
              />
              <el-table-column
                header-align="center"
                align="center"
                :show-overflow-tooltip="true"
                prop="whsenumber"
                label="WBS元素描述"
                width="130"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                align="center"
                prop="ext_1"
                label="移动类型"
                width="110"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="bldat"
                label="移动类型描述"
                width="140"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="pstngDate"
                label="入库来源"
                width="110"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="pstngDate"
                label="收货数量"
                width="110"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="posid"
                label="计量单位"
                width="110"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="pratx"
                label="APP过账标识"
                width="110"
              />
            </el-table>
          </template>
        </div>
        <div class="dbwzrk_fenye">
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
      stateForm: {},
      mForm: {},
      werksForm: {},
      lgortForm: {},
      ext_6Form: {},
      muForm: {},
      editForm: {},
      yform: {
        ebeln: '',
        werks: '',
        lgort: '',
        mblnr: '',
        gjahr: '',
        ext_6: '',
        pstngDate: ''
      },
      searchParams: {
        list: [{
          label: '采购订单',
          value: '',
          name: 'ebeln',
          placeholder: '获取ERP数据字段接口'
        },
        {
          label: '工厂',
          value: '',
          name: 'werks',
          type: 'select',
          options: [{
            label: '',
            value: 'asd'
          } ]
        },
        {
          label: '库存地点',
          value: '',
          name: 'lgort',
          type: 'select',
          options: [{
            label: '',
            value: 'asd'
          } ]
        }, {
          label: '物料凭证',
          value: '',
          name: 'mblnr'
        },
        {
          label: '物料凭证年份',
          value: '',
          name: 'gjahr',
          type: 'year'
        },
        {
          label: '状态',
          value: '',
          name: 'ext_6',
          type: 'select',
          options: [{
            label: '',
            value: 'asd'
          } ]
        }
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
      isaBid: false,
      isEdit: false,
      newlyBuild: false,
      iscord: false,
      multipleSelection: [],
      tableHeight: 536,
      total: 0
    }
  },
  created () {
    //   this.getdbwzrk()
  },
  // 数据获取
  getdbwzrk () {
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
        _this.tableHeight = window.innerHeight - 401
        // 监听窗口大小变化
        let self = _this
        window.onresize = function () {
          self.tableHeight = window.innerHeight - 401
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
          message: '未选中绑定的内容',
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
    //  新建保存
    xinjian (mForm) {
      this.$ajax
        .post('/tblsyscode/save?', { // 调用后台保存的方法
          items: [mForm]
        })
        .then(res => {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
          this.getXtzd()
        })
        .catch(ref => {}) // 关闭新建
      this.newlyBuild = false
    },
    // 删除
    deleteList () {
      // eslint-disable-next-line eqeqeq
      if (this.multipleSelection.length == 0) { // 判断是否选中数据
        this.$message({
          message: '请至少选中一条待选中记录',
          type: 'warning'
        })
      } else {
        this.$confirm('你确定删除数据吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.delList = this.multipleSelection // 删除已经选择的数据
            let wid = this.delList
            function widList (widLi) {
              let widStr = []
              for (let i = 0; i < widLi.length; i++) {
                widStr.push(widLi[i].wid)
              }
              return widStr
            }
            let wList = widList(wid)
            this.$ajax
              .post('/tblsyscode/delete?', { // 请求后台删除的方法
                ids: wList
              })
              .then(res => { //
                this.getXtzd()
              })
              .catch(ref => {})
            this.$message({
              type: 'success',
              message: '操作成功!'
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
      }
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
    // 编辑保存
    saveForm (editForm) {
      this.$ajax
        .post('/tblsyscode/save?', { // 调用后台保存的方法
          items: [editForm]
        })
        .then(res => {
          this.$message({
            message: '修改成功',
            type: 'success'
          })
          this.getXtzd()
        })
        .catch(ref => {}) // 关闭编辑
      this.isEdit = false
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
    //  this.$ajax
      //   .get(
      //     `tBasicCangku/?params={"columns":"wid,lgort,lgortname,lgortlevel,address,buildarea,usearea,shedarea,dumparea,remark","pageIndex":1,"pageSize":${val}}`
      //   )
      //   .then(res => {
      //     //   console.log(res.data.resultValue);
      //     this.tabData = res.data.resultValue.items
      //   })
      // console.log(`每页 ${val} 条`)
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
    .dbwzrk-top {
      padding: 10px;
      background-color: #fff;

      .dbwzrk-wz {
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
        .el-button:nth-child(2){
          size: small;
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
    .dbwzrk-bt {
      margin-top: 10px;
      background-color: #fff;
      padding: 10px;
      .dbwzrk-jg {
        position: relative;
        padding: 6px 10px 0 30px;
        font-size: 18px;

        img {
          position: absolute;
          top: 8px;
          left: 0;
        }
      }
      .dbwzrk-xuanxian {
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
           width: 56px;
        }
         .el-button:nth-child(3) {
          position: absolute;
          top: 15px;
          left: 150px;
           width: 56px;
        }
         .el-button:nth-child(4) {
          position: absolute;
          top: 15px;
          left: 230px;
          width: 92px;
        }
         .el-button:nth-child(5) {
          position: absolute;
          top: 15px;
          left: 346px;
           width: 56px;
        }
         .el-button:nth-child(6) {
          position: absolute;
          top: 15px;
          left: 426px;
          width: 92px;
        }
      }
      .sjd-xj {
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
          .muForm {
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
      .dbwzrk_fenye {
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

}
</style>
