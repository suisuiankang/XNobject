<template>
  <div class="search-condition">
    <el-form
      ref="searchForm"
      :model="searchForm"
    >
      <el-dropdown
        v-if="searchParams.list.length>4?true:false"
        trigger="click"
        class="fr pointer searchDropdown"
        :style="elLink"
        @visible-change="visibleChange"
      >
        <span class="el-dropdown-link base-color">
          <el-button>
            更多条件
            <i
              :class="disPlayIcon"
              style="margin-left: 8px;"
            />
          </el-button>
        </span>
        <el-dropdown-menu slot="dropdown">
          <div style="padding:10px 20px;width: 600px">
            <el-checkbox
              v-model="checkAll"
              :indeterminate="isIndeterminate"
              @change="handleCheckAllChange"
            >
              全选
            </el-checkbox>
            <div style="margin: 15px 0;border-bottom:1px solid #ccc" />
            <el-checkbox-group
              v-model="checkedCities"
              class="elCheckBox"
              @change="handleCheckedCitiesChange"
            >
              <el-row>
                <el-col
                  v-for="(col,index) in searchParams.list"
                  :key="index"
                  :span="8"
                >
                  <el-checkbox
                    :key="index"
                    :label="col.label"
                    :disabled="col.rules?col.rules.required:false"
                  >
                    {{ col.label }}
                  </el-checkbox>
                </el-col>
              </el-row>
            </el-checkbox-group>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
      <el-row>
        <el-col
          v-for="(search,index) of searchForm.list"
          :key="index"
          eslint-disable-next-line
          vue
          no-template-shadow
          class="clearfix"
          :span="6"
          style="marginBottom:12px;padding: 0 16px"
        >
          <div v-if="!search.type">
            <el-form-item
              :label="search.label+':'"
              :prop="'list.'+index+'.value'"
              :rules="search.rules?search.rules:{}"
            >
              <el-input
                v-model="search.value"
                size="small"
                :placeholder="search.placeholder?search.placeholder:'请输入内容'"
              />
            </el-form-item>
          </div>
          <div v-if="search.type&&search.type==='select'">
            <el-form-item
              :label="search.label+':'"
              :prop="'list.'+index+'.value'"
              :rules="search.rules?search.rules:{}"
            >
              <el-select
                v-model="search.value"
                filterable
                clearable
                :placeholder="search.placeholder?search.placeholder:'请选择'"
              >
                <el-option
                  v-for="item in search.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </div>
          <div v-if="search.type&&search.type==='date'">
            <el-form-item
              :label="search.label+':'"
              :prop="'list.'+index+'.value'"
              :rules="search.rules?search.rules:{}"
            >
              <el-date-picker
                v-model="search.value"
                align="right"
                type="date"
                value-format="yyyy-MM-dd HH:mm:ss"
                :placeholder="search.placeholder?search.placeholder:'选择日期'"
                :picker-options="pickerOptionsDate"
              />
              <!-- <el-date-picker
                  v-model="search.value"
                  align="right"
                  type="date"
                  value-format="date"
                  :placeholder="search.placeholder?search.placeholder:'选择日期'"
                  :picker-options="pickerOptionsDate"
                ></el-date-picker>-->
            </el-form-item>
          </div>
          <div v-if="search.type&&search.type==='section'">
            <el-form-item
              :label="search.label+':'"
              :prop="'list.'+index+'.value'"
              :rules="search.rules?search.rules:{}"
            >
              <el-date-picker
                v-model.number="search.value"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="~"
                :start-placeholder="search.startName?search.startName:'开始日期'"
                :end-placeholder="search.endName?search.endName:'结束日期'"
                :picker-options="pickerOptionsDateSection"
              />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <div
      class="searchBtn"
      style="text-align:right;padding-bottom:10px;"
    >
      <el-button
        type="primary"
        @click="search"
      >
        查 询
      </el-button>
      <el-button @click="resetForm">
        清除条件
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  // eslint-disable-next-line vue/require-prop-types
  props: ['searchParams'],
  // props: ["searchParams", "MoreSearchParams"],
  // watch: {
  //   MoreSearchParams() {
  //     if (!this.MoreSearchParams) {
  //       return [];
  //     }
  //   }
  // },
  data () {
    return {
      checkedCities: [],
      key: 1,
      checkAll: false,
      newColumns: [],
      isIndeterminate: true,
      disPlayIcon: 'el-icon-caret-bottom',
      elLink: 'backgroundColor:#fff',
      searchForm: {},
      pickerOptionsDate: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: '今天',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: '昨天',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: '一周前',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
      },
      pickerOptionsDateSection: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      }
    }
  },
  watch: {
    checkedCities (valArr) {
      let arr = []
      valArr.forEach(val => {
        this.newColumns.forEach(item => {
          if (item.label === val) {
            arr.push(item)
          }
        })
      })
      this.searchForm.list = arr
    }
  },
  mounted () {
    let lists = []
    let itemArr = []
    // this.newColumns = this.$copy(this.searchParams.list);
    this.newColumns = this.searchParams.list

    this.checkedCitiesdisabled()

    // let itemArr = this.newColumns.filter(item=>{
    // eslint-disable-next-line no-tabs
    // 	return item.default
    // }).map(item=>{
    // eslint-disable-next-line no-tabs
    // 	return item.label
    // })
    this.newColumns.slice(0, 4).forEach(item => {
      itemArr.push(item.label)
    })
    this.checkedCities = Array.from(
      new Set(this.checkedCities.concat(itemArr))
    )

    this.searchParams.list.forEach((item, index) => {
      lists.push(item)
    })

    this.searchForm.list = lists
  },
  created () {
    // this.searchForm = this.$copy(this.searchParams);
    this.searchForm = this.$copy(this.searchParams)
  },
  methods: {
    handleCheckAllChange (val) {
      if (val) {
        this.checkedCitiesdisabled()
        this.$emit('showColumns', this.columns)
        let itemArr = []
        this.newColumns.forEach(item => {
          itemArr.push(item.label)
        })
        this.checkedCities = Array.from(
          new Set(this.checkedCities.concat(itemArr))
        )
      } else {
        this.$emit('showColumns', [])
        this.checkedCities = []
        this.checkedCitiesdisabled()
      }
      // this.checkedCities = val;
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.searchParams.list.length
      this.isIndeterminate =
          checkedCount > 0 && checkedCount < this.searchParams.list.length
    },
    visibleChange (val) {
      if (val) {
        this.disPlayIcon = 'el-icon-caret-top'
        this.elLink = 'backgroundColor:#edf5f2'
      } else {
        this.disPlayIcon = 'el-icon-caret-bottom'
        this.elLink = 'backgroundColor:#fff'
      }
    },
    checkedCitiesdisabled () {
      this.newColumns.forEach(item => {
        if (item.rules) {
          if (item.rules.required) {
            this.checkedCities.push(item.label)
          }
        }
      })
    },
    search () {
      this.$refs['searchForm'].validate(valid => {
        if (valid) {
          let params = {}
          this.searchForm.list.forEach(res => {
            params[res.name] = res.value
          })
          this.$emit('params', params)
        } else {
          this.$emit('params', false)
        }
      })
    },
    resetForm () {
      this.$refs['searchForm'].resetFields()
      this.$emit('resetData', '')
    }
  }
}
</script>
  <style lang="less">
  .search-condition {
    position: relative;
    .el-form-item__content {
      display: flex;
      & > div:last-child {
        flex: 1;
      }
    }
  }
  </style>
  <style scoped lang="less">
  .show-hidden-columns {
    display: inline-block;
    vertical-align: middle;
    .elCheckBox {
      display: flex;
      flex-wrap: wrap;
    }
  }
  .searchDropdown {
    position: absolute;
    right: 20px;
    top: -38px;
    margin-left: 10px;
    .el-button {
      color: #09b09a;
      border: none;
      font-size: 14px;
    }
  }
  .search-condition {
    // padding: 20px;
    font-size: 13px;
    color: #9c9c9c;

    .el-select {
      .el-input {
        width: 100%;
      }
    }

    // padding: 5px 0;

    .el-col {
      vertical-align: middle;
      height: 32px;
      line-height: 32px;
      text-align: right;

      .el-date-editor .el-range__icon {
        line-height: 25px;
      }

      .el-date-editor .el-range-separator {
        line-height: 25px;
        width: 7%;
      }

      .el-input__inner {
        height: 30px;
        line-height: 30px;
        vertical-align: middle;
      }
    }
  }
  </style>
