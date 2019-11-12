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
            <el-breadcrumb-item>系统字典</el-breadcrumb-item>
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
                label="字典编码"
                prop="code"
              >
                <el-input v-model="mForm.code" />
              </el-form-item>
            </el-col>
            <el-col
              :xl="{span:6,offset:0}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="上级编码"
                prop="upcode"
              >
                <el-input v-model="mForm.upcode" />
              </el-form-item>
            </el-col>
            <el-col

              :xl="{span:6,offset:0}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="字典名称"
                prop="name"
              >
                <el-input v-model="mForm.name" />
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
                label="字典类型"
                prop="type"
              >
                <el-input v-model="mForm.type" />
              </el-form-item>
            </el-col>
            <el-col
              :xl="{span:6,offset:0}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="字典状态"
                prop="state"
              >
                <el-select
                  v-model="muForm.state"
                  placeholder
                >
                  <el-option
                    v-for="(item,i) in stateForm"
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
                label="字典年度"
                prop="year"
              >
                <el-input v-model="mForm.year" />
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
                label="备注"
                prop="remark"
              >
                <el-input v-model="mForm.remark" />
              </el-form-item>
            </el-col>
            <el-col
              :xl="{span:6,offset:0}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item
                label="排序"
                prop="codeorder"
              >
                <el-input v-model="mForm.codeorder" />
              </el-form-item>
            </el-col>
            <el-col
              :xl="{span:6,offset:5}"
              :lg="{span:6,offset:0}"
              :md="{span:7,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item class="yf">
                <el-button
                  type="primary"
                  size="small"
                  style="background-color: #09b09a;"
                  @click="queryForm(mForm)"
                >
                  查询
                </el-button>
                <el-button
                  type="primary"
                  size="small"
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
            @click="newlyBuild = true"
          >
            新建
          </el-button>
          <el-button
            type="primary"
            size="small"
            @click="setEdit() "
          >
            编辑
          </el-button>
          <el-button
            type="primary"
            size="small"
            @click="deleteList()"
          >
            删除
          </el-button>
        </div>
        <div class="sjd-xj">
          <el-dialog
            title="表单填写"
            :visible.sync="newlyBuild"
            width="38%"
            :before-close="handleClose"
            center
          >
            <el-form
              ref="muForm"
              :rules="rules"
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
                    label="字典编码"
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
                    label="上级编码"
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
                    label="字典名称"
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
                    label="字典类型:"
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
                    label="字典状态:"
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
                    label="字典年度:"
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
                    label="备注:"
                    prop="remark"
                  >
                    <el-input
                      v-model="muForm.remark"
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
                    label="排序:"
                    prop="codeorder"
                  >
                    <el-input
                      v-model="muForm.codeorder"
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
                @click="xinjian(muForm)"
              >保存</el-button>
            </span>
          </el-dialog>
        </div>
        <!-- 表单编辑 -->
        <div>
          <el-dialog
            title="表单编辑"
            :visible.sync="isEdit"
            width="42%"
            :before-close="handleClose"
            center
          >
            <el-form
              ref="editForm"
              class="muForm"
              :model="editForm"
            >
              <el-form-item
                label="字典编码:"
                :label-width="formLabelWidth"
                prop="code"
              >
                <el-col
                  :xl="{span:15,offset:0}"
                  :lg="{span:12,offset:0}"
                  :md="{span:9,offset:0}"
                  :sm="{span:8,offset:0}"
                >
                  <el-input
                    v-model="editForm.code"
                    autocomplete="off"
                  />
                </el-col>
              </el-form-item>
              <el-form-item
                label="上级编码:"
                :label-width="formLabelWidth"
                prop="upcode"
              >
                <el-col
                  :xl="{span:15,offset:0}"
                  :lg="{span:12,offset:0}"
                  :md="{span:9,offset:0}"
                  :sm="{span:8,offset:0}"
                >
                  <el-input
                    v-model="editForm.upcode"
                    autocomplete="off"
                  />
                </el-col>
              </el-form-item>
              <el-form-item
                label="字典名称:"
                :label-width="formLabelWidth"
                prop="name"
              >
                <el-col :span="16">
                  <el-input
                    v-model="editForm.name"
                    autocomplete="off"
                  />
                </el-col>
              </el-form-item>

              <el-form-item
                label="字典类型:"
                :label-width="formLabelWidth"
                prop="type"
              >
                <el-col
                  :xl="{span:15,offset:0}"
                  :lg="{span:12,offset:0}"
                  :md="{span:9,offset:0}"
                  :sm="{span:8,offset:0}"
                >
                  <el-input
                    v-model="editForm.type"
                    autocomplete="off"
                  />
                </el-col>
              </el-form-item>

              <el-form-item
                label="字典状态:"
                :label-width="formLabelWidth"
                prop="state"
              >
                <el-col
                  :xl="{span:15,offset:0}"
                  :lg="{span:12,offset:0}"
                  :md="{span:9,offset:0}"
                  :sm="{span:8,offset:0}"
                >
                  <el-input
                    v-model="editForm.state"
                    autocomplete="off"
                  />
                </el-col>
              </el-form-item>

              <el-form-item
                label="字典年度:"
                :label-width="formLabelWidth"
                prop="name"
              >
                <el-col
                  :xl="{span:15,offset:0}"
                  :lg="{span:12,offset:0}"
                  :md="{span:9,offset:0}"
                  :sm="{span:8,offset:0}"
                >
                  <el-input
                    v-model="editForm.name"
                    autocomplete="off"
                  />
                </el-col>
              </el-form-item>

              <el-form-item
                label="备注"
                :label-width="formLabelWidth"
                prop="remark"
              >
                <el-col
                  :xl="{span:15,offset:0}"
                  :lg="{span:12,offset:0}"
                  :md="{span:9,offset:0}"
                  :sm="{span:8,offset:0}"
                >
                  <el-input
                    v-model="editForm.remark"
                    autocomplete="off"
                  />
                </el-col>
              </el-form-item>
              <el-form-item
                label="排序:"
                :label-width="formLabelWidth"
                prop="codeorder"
              >
                <el-col
                  :xl="{span:15,offset:0}"
                  :lg="{span:12,offset:0}"
                  :md="{span:9,offset:0}"
                  :sm="{span:8,offset:0}"
                >
                  <el-input
                    v-model="editForm.codeorder"
                    autocomplete="off"
                  />
                </el-col>
              </el-form-item>
            </el-form>
            <span
              slot="footer"
              class="dialog-footer"
            >
              <el-button
                type="primary"
                @click="saveForm(editForm)"
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
                header-align="center"
                align="center"
                type="selection"
                width="55"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="code"
                label="字典编码"
                width="180"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="upcode"
                label="上级编码"
                width="180"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="name"
                label="字典名称"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="type"
                label="字典类型"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="state"
                label="字典状态"
                :formatter="formatSex"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="year"
                label="字典年度"
              />
              <el-table-column

                header-align="center"
                align="center"
                prop="remark"
                label="备注"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="codeorder"
                label="排序"
              />
            </el-table>
          </template>
        </div>
        <div class="block sw-fy">
          <el-pagination
            :page-sizes="[10, 20, 30, 40]"
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
    // 返回双向绑定的表单数据
    return {
      stateForm: {},
      muForm: {},
      editForm: {},
      multipleSelection: [],
      tableHeight: 300,
      mForm: {
        code: '',
        upcode: '',
        name: '',
        type: '',
        state: '',
        year: '',
        remark: '',
        codeorder: ''
      },
      // 定义规则 form表单中的一些字段特殊的要求，比如不能为空，或者别的
      rules: {
        code: [
          { required: true, message: '字典编码:值不能为空', trigger: 'change' }
        ],
        upcode: [
          { required: true, message: '上级编码:值不能为空', trigger: 'change' }
        ],
        name: [
          { required: true, message: '字典名称:值不能为空', trigger: 'change' }
        ],
        type: [
          { required: true, message: '字典类型:值不能为空', trigger: 'change' }
        ],
        state: [
          { required: true, message: '字典状态:值不能为空', trigger: 'change' }
        ],
        year: [
          { required: true, message: '字典年度:值不能为空', trigger: 'change' }
        ],
        remark: [
          { required: true, message: '备注:值不能为空', trigger: 'change' }
        ],
        codeorder: [
          { required: true, message: '排序:值不能为空', trigger: 'change' }
        ]

      },

      tabgData: [ // 从接口处获得数据返回到表格
        // {
        //   code: '',
        //   upcode: '',
        //   name: '',
        //   type: '',
        //   state: '',
        //   year: '',
        //   remark: '',
        //   codeorder: ''
        // }
      ],

      isEdit: false, // 没事使用时关闭
      newlyBuild: false,
      formLabelWidth: '140px', // form 表单的宽度
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
        that.fff() // 回调用fff这个方法
      })()
    })
    that.fff()
  },
  created () {
    this.getXtzd() // 刷新获取的数据
  },
  methods: {
    // 数据获取
    getXtzd () {
      this.$ajax
        .get(
          `tblsyscode/?params={"columns":"wid,code,upcode,name,type,state,year,remark,codeorder","filter":"state=1","pageIndex":1,"pageSize":20}`
        )
        .then(res => {
          console.log(res.data.resultValue)
          this.stateForm = res.data.resultValue.dicts[0].values // 获取状态的字段
          this.total = res.data.resultValue.itemCount // 获取总的页数
          this.tabgData = res.data.resultValue.items // 获取表格的数据
        })
    },
    //  转换
    formatSex: function (row, column, cellValue) {
      if (cellValue === '1') {
        return '是'
      } else if (cellValue === '0') {
        return '否'
      }
    },

    // 查询
    queryForm (mForm) {
      var arr = {}
      // eslint-disable-next-line eqeqeq
      if (mForm.code != '') { // 如果序号不为空的 arr集合获得序号字段
        arr = `code=${mForm.code}`
      }
      // eslint-disable-next-line eqeqeq
      if (mForm.upcode != '' && JSON.stringify(arr) == '{}') {
        arr = `upcode=${mForm.upcode}`
        // eslint-disable-next-line eqeqeq
      } else if (mForm.upcode != '') {
        arr = arr + `%26upcode=${mForm.upcode}`
      }
      // eslint-disable-next-line eqeqeq
      if (mForm.name != '' && JSON.stringify(arr) == '{}') {
        arr = `name=${mForm.name}`
        // eslint-disable-next-line eqeqeq
      } else if (mForm.name != '') {
        arr = arr + `%26name=${mForm.name}`
      }
      // eslint-disable-next-line eqeqeq
      if (mForm.type != '' && JSON.stringify(arr) == '{}') {
        arr = `type=${mForm.type}`
        // eslint-disable-next-line eqeqeq
      } else if (mForm.type != '') {
        arr = arr + `%26type=${mForm.type}`
      }
      // eslint-disable-next-line eqeqeq
      if (mForm.state != '' && JSON.stringify(arr) == '{}') {
        arr = `state=${mForm.state}`
        // eslint-disable-next-line eqeqeq
      } else if (mForm.state != '') {
        arr = arr + `%26type=${mForm.state}`
      }
      // eslint-disable-next-line eqeqeq
      if (mForm.year != '' && JSON.stringify(arr) == '{}') {
        arr = `year=${mForm.year}`
        // eslint-disable-next-line eqeqeq
      } else if (mForm.year != '') {
        arr = arr + `%26year=${mForm.year}`
      }
      // eslint-disable-next-line eqeqeq
      if (mForm.remark != '' && JSON.stringify(arr) == '{}') {
        arr = `remark=${mForm.remark}`
        // eslint-disable-next-line eqeqeq
      } else if (mForm.remark != '') {
        arr = arr + `%26remark=${mForm.remark}`
      }
      // eslint-disable-next-line eqeqeq
      if (mForm.codeorder != '' && JSON.stringify(arr) == '{}') {
        arr = `codeorder=${mForm.codeorder}`
        // eslint-disable-next-line eqeqeq
      } else if (mForm.codeorder != '') {
        arr = arr + `%26codeorder=${mForm.codeorder}`
      }
      // 判断对象是否为空;
      // eslint-disable-next-line eqeqeq
      if (JSON.stringify(arr) == '{}') { // 从接口处获得的数据，判断是否为空
        this.getXtzd()
      } else {
        arr = `"filter":"` + arr + `"`
        this.$ajax
          .get(
            'tblsyscode/?' +
              'params={"columns":"wid,code,upcode,name,type,state,year,remark,codeorder",' +
              arr +
              ',"pageIndex":1,"pageSize":20}'
          )
          .then(res => {
            //   console.log(res.data);
            this.total = res.data.resultValue.itemCount
            this.tabgData = res.data.resultValue.items
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
        _this.tableHeight = window.innerHeight - 401 // 获取表格的高度，屏幕的高度减去form表单的高度
        // eslint-disable-next-line no-irregular-whitespace
        let self = _this
        // eslint-disable-next-line no-irregular-whitespace
        window.onresize = function () {
          // eslint-disable-next-line no-irregular-whitespace
          self.tableHeight = window.innerHeight - 401 //  监听屏幕发生变化时的高度
        }
      })
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
    // 保存选中结果
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.info(this.multipleSelection, 1)
    },
    // 对话框关闭
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    // 重置
    restForm (bForm) {
      this.$nextTick(() => {
        this.$refs[bForm].resetFields()
      })
    },
    // 获取页数信息
    handleSizeChange (val) {
      this.$ajax
        .get(
          `tblsyscode/?params={"columns":"wid,code,upcode,name,type,state,year,remark,codeorder","filter":"state=1","pageIndex":1,"pageSize":${val}}`
        )
        .then(res => {
          //   console.log(res.data.resultValue);
          this.tabgData = res.data.resultValue.items
        })
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.$ajax
        .get(
          `tblsyscode/?params={"columns":"wid,code,upcode,name,type,state,year,remark,codeorder","filter":"state=1","pageIndex":${val},"pageSize":20}`
        )
        .then(res => {
          //   console.log(res.data.resultValue);
          this.tabgData = res.data.resultValue.items
        })
      console.log(`当前页: ${val}`)
    },
    indexMethod (index) { // 定义序号
      return index + 1
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
        padding: 10px 10px 10px 30px;
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
          background-color: #09b09a;
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
        /deep/.yf {
          float: right;
          .el-form-item__content {
            margin-left: 0!important;
          }
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
      }
      .sjd-xj {
       /deep/ .el-dialog {
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
          .muForm{
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
