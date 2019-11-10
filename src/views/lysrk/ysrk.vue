<template>
  <el-container>
    <el-main>
      <div class="ysrk-top">
        <div class="ysrk-wz">
          <img
            src="../../static/images/Ticon.png"
            alt
          >
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">
              首页
            </el-breadcrumb-item>
            <el-breadcrumb-item>履约验收入库</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <el-form
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
                label="交接单号:"
                prop="supplyplancode"
              >
                <el-input
                  v-model="yform.supplyplancode"
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
                label="采购订单:"
                prop="ebeln"
              >
                <el-input v-model="yform.ebeln" />
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
                <el-select
                  v-model="yform.werks"
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
                label="凭证年份:"
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
                label="库存地点:"
                prop="lgort"
              >
                <el-select
                  v-model="yform.lgort"
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
                label="凭证日期:"
                prop="ks_pstngDate"
              >
                <el-date-picker
                  v-model="yform.ks_pstngDate"
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
                prop="js_pstngDate"
              >
                <el-date-picker
                  v-model="yform.js_pstngDate"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                />
              </el-form-item>
            </el-col>
            <el-col
              :xl="{span:11,offset:0}"
              :lg="{span:11,offset:0}"
              :md="{span:9,offset:0}"
              :sm="{span:8,offset:0}"
            >
              <el-form-item class="yfr">
                <el-button
                  type="primary"
                  @click="qureySform(yform)"
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
        </el-form>
      </div>
      <el-card
        v-if="iscord"
        ref="ecid"
        class="box-card"
      >
        <el-form
          ref="cform"
          class="cform"
          label-width="100px"
          size="mini"
          :model="cform"
        >
          <el-row>
            <el-col :span="4">
              <el-form-item
                label="交接单号:"
                prop="supplyplancode"
              >
                <el-input v-model="cform.supplyplancode" />
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
                <el-input v-model="cform.ebeln" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <el-form-item
                label="发货方(签字):"
                prop="zfhfqz"
              >
                <el-input v-model="cform.zfhfqz" />
              </el-form-item>
            </el-col>
            <el-col
              :span="4"
              :offset="8"
            >
              <el-form-item
                label="发货方(时间):"
                prop="zfhfsj"
              >
                <el-date-picker
                  v-model="cform.zfhfsj"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <el-form-item
                label="收货方(签字):"
                prop="zshfqz"
              >
                <el-input v-model="cform.zshfqz" />
              </el-form-item>
            </el-col>
            <el-col
              :span="4"
              :offset="8"
            >
              <el-form-item
                label="收货方(时间):"
                prop="zshfsj"
              >
                <el-date-picker
                  v-model="cform.zshfsj"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <el-form-item
                label="实际交货地点:"
                prop="actualdeliverypl"
              >
                <el-input v-model="cform.actualdeliverypl" />
              </el-form-item>
            </el-col>
            <el-col
              :span="4"
              :offset="8"
            >
              <el-form-item
                label="实际交货日期:"
                prop="zsjjhq"
              >
                <el-date-picker
                  v-model="cform.zsjjhq"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <el-form-item
                label="供应商名称:"
                prop="suppliername"
              >
                <el-input v-model="cform.suppliername" />
              </el-form-item>
            </el-col>
            <el-col
              :span="4"
              :offset="8"
            >
              <el-form-item
                label="移动类型:"
                prop="bwart"
              >
                <el-input v-model="cform.bwart" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <el-form-item
                label="确定交货日期:"
                prop="eindt"
              >
                <el-date-picker
                  v-model="cform.eindt"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                />
              </el-form-item>
            </el-col>
            <el-col
              :span="4"
              :offset="8"
            >
              <el-form-item
                label="备注:"
                prop="remarks"
              >
                <el-input v-model="cform.remarks" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-card>
      <div class="ysrk-bt">
        <div class="ysrk-jg">
          <img
            src="../../static/images/bicon.png"
            alt
          >
          查询结果
        </div>
        <div class="ysrk-xuanxian">
          <el-button
            type="primary"
            @click="isPreservation()"
          >
            保存
          </el-button>
          <el-button
            type="primary"
            @click="isJiaojie()"
          >
            确认交接
          </el-button>
          <el-button
            type="primary"
            @click="isBid()"
          >
            绑定实物ID
          </el-button>
        </div>
        <el-dialog
          class="ysrk_ID"
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
              @click="preservationBd"
            >保存</el-button>
          </span>
        </el-dialog>
        <div class="ysrk-list">
          <template>
            <el-table
              :max-height="tableHeight"
              tooltip-effect="dark"
              style="width: 100%"
              :data="tabyData"
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
                width="120"
                align="center"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                align="center"
                prop="ebeln"
                label="采购订单"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="ebelp"
                label="行项目"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="matnr"
                label="物料编码"
                :show-overflow-tooltip="true"
                width="80"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="maktx"
                label="物料描述"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zjjsl"
                label="验收数量"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="menge"
                label="换货数量"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="meins"
                label="本次正常收货数量"
                width="160"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="werks"
                label="本次换货数量"
                width="120"
              />
              <el-table-column
                header-align="center"
                prop="gsdm"
                :show-overflow-tooltip="true"
                label="公司代码"
                width="80"
                align="center"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="werksdescription"
                label="公司名称"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="posid"
                label="工厂"
                width="80"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="psphi"
                label="工厂名称"
                width="80"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="xmpost1"
                label="库存地点"
                width="80"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="pratx"
                label="库存描述"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zhtbh"
                label="仓库号"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zxmdw"
                label="目标储位号"
                width="100"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                align="center"
                prop="username"
                label="WBS元素"
                width="100"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                align="center"
                prop="zfhfqz"
                label="过账日期"
                width="80"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                align="center"
                prop="zfhfsj"
                label="凭证日期"
                width="80"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                align="center"
                prop="zshfqz"
                label="移动类型"
                width="80"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                align="center"
                prop="zshfsj"
                label="批次"
                width="60"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="zsjjhq"
                label="合同总数"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="actualdeliverypl"
                label="计量单位"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="remark"
                label="物资供应公司（签字）"
                width="170"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="pstngDate"
                label="物资供应公司（时间）"
                width="170"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="blart"
                label="项目单位接收人(签字)"
                width="200"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="bwart"
                label="项目单位接收人(时间)"
                width="170"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="bukrs"
                label="供应商交付人（签字）"
                width="160"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="bukrsdescription"
                label="供应商交付人（时间）"
                width="160"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="zyjfhq"
                label="监理单位人（签字）"
                width="150"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="eindt"
                label="监理单位人（时间）"
                width="150"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="suppliername"
                label="施工单位人（签字）"
                width="150"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="supplinkman"
                label="施工单位人（时间）"
                width="150"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="supplinkmantelep"
                label="承运商联系人"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="carrlinkman"
                label="承运商联系人固定电话"
                width="200"
              />
              <el-table-column
                header-align="center"
                prop="carrlinkmantelep"
                label="预计到货期"
                width="120"
                align="center"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="delinkman"
                label="预计发货日期"
                width="120"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                align="center"
                prop="delinkmantelepho"
                label="确定交货日期"
                width="120"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="msgcode"
                :show-overflow-tooltip="true"
                label="项目编码"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="msgdesp"
                label="项目描述"
                width="80"
              />
              <el-table-column
                header-align="center"
                prop="mblnre"
                label="项目类型"
                width="80"
                align="center"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                align="center"
                prop="gjahr"
                label="合同编号"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="msgcode1"
                label="项目单位"
                width="80"
              />
              <el-table-column
                align="center"
                header-align="center"
                prop="msgdesp1"
                label="物资入库类型"
                width="120"
              />
              <el-table-column
                header-align="center"
                prop="mblnre1"
                label="实际收货日期"
                width="120"
                align="center"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                align="center"
                prop="gjahr1"
                label="用户名"
                width="80"
              />
              <el-table-column
                header-align="center"
                :show-overflow-tooltip="true"
                prop="msgcode2"
                label="反馈消息"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="msgdesp2"
                label="本位币金额(RMB)"
                width="160"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="mblnre2"
                label="操作时间"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="gjahr2"
                label="备注"
                width="60"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="msgco2de"
                label="物料凭证"
                width="80"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="msg2desp1"
                label="物料凭证的年份"
                width="140"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="mblnr2e1"
                label="APP过账标识"
                width="140"
              />
            </el-table>
          </template>
        </div>
        <div class="block ysrk-fy">
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
      yform: {
        supplyplancode: '',
        ebeln: '',
        werks: '',
        mblnr: '',
        gjahr: '',
        lgort: '',
        ks_pstngDate: '',
        js_pstngDate: ''
      },
      cform: {
      },
      cdform: {
        supplyplancode: '280200001820F1000875',
        ebeln: '0200001820',
        zfhfqz: '张亮',
        zfhfsj: '2019.09.09',
        zshfqz: '马文',
        zshfsj: '2019.09.09',
        actualdeliverypl: '现场交货',
        zsjjhq: '2019.09.09',
        suppliername: '联想(北京)有限公司',
        bwart: '105',
        eindt: '2019.09.09',
        remarks: ''
      },
      ykform: [
        {
          ebad1: '0200001820',
          ebad2: '10',
          ebad3: '57',
          ebad4: '',
          ebad5: '',
          ebad6: '001010000000000002061961',
          ebad7: '',
          ebad8: '510111749',
          ebad9: '千兆纵向加密认证装置,4,明文吞吐量95Mbps,密文吞吐量25Mbps',
          ebad10: '',
          ebad11: '',
          ebad12: '',
          ebad13: '2800'

        }
      ],
      gridData: [
      ],
      tabyData: [
      ],
      tabyrData: [
        {
          ext4: '',
          supplyplancode: '280200001820F1000875',
          ebeln: '0200001820',
          ebelp: '10',
          matnr: '510111749',
          maktx: '千兆纵向加密认证装置,4,明文吞吐量95Mbps,密文吞吐量25Mbps',
          zjjsl: '11',
          menge: '11',
          meins: '11',
          werks: '1',
          gsdm: '2800',
          werksdescription: '国网青海省电力公司',
          posid: 'XA01',
          psphi: '国网青海省西宁供电公司工厂',
          xmpost1: '95X1',
          pratx: '国网青海电力门源路仓库',
          zhtbh: '',
          zxmdw: '',
          username: '17280215006L0121111140',
          zfhfqz: '2019.09.09',
          zfhfsj: '2019.09.09',
          zshfqz: '105',
          zshfsj: '0000019095',
          zsjjhq: '11',
          actualdeliverypl: 'CAR',
          remark: '牛莉',
          pstngDate: '2019.09.09',
          blart: '马武',
          bwart: '2019.09.09',
          bukrs: '张立军',
          bukrsdescription: '2019.09.09',
          zyjfhq: '刘武',
          eindt: '2019.09.09',
          suppliername: '张凤山',
          supplinkman: '2019.09.09',
          supplinkmantelep: '',
          carrlinkman: '',
          carrlinkmantelep: '2019.09.08',
          delinkman: '2019.09.08',
          delinkmantelepho: '2019.09.09',
          msgcode: '',
          msgdesp: '',
          mblnre: '',
          gjahr: 'QH2016000091',
          msgcode1: '',
          msgdesp1: '',
          mblnre1: '2019.09.09',
          gjahr1: 'QH28_XUCS',
          msgcode2: '',
          msgdesp2: '18',
          mblnre2: '',
          gjahr2: '',
          msgco2de: '',
          msg2desp1: '',
          mblnr2e1: ''
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
      dialogTableVisible: false,
      iscord: false,
      multipleSelection: [],
      multipleSelectionr: [],
      tableHeight: 536,
      ecHeight: 0,
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
        this.tabyData[0].mblnr2e1 = 'app'
        this.$message({
          message: '绑定成功',
          type: 'success'
        })
      }
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
        this.dialogTableVisible = true
        this.gridData = this.ykform
      }
    },
    // 确认交接
    isJiaojie () {
      // eslint-disable-next-line eqeqeq
      if (this.multipleSelection.length == 0) {
        this.$message({
          message: '未选中编辑内容',
          type: 'warning'
        })
      // eslint-disable-next-line eqeqeq
      } else if (this.tabyData[0].mblnr2e1 == '') {
        this.$message({
          message: '未绑定实物ID',
          type: 'warning'
        })
      } else {
        this.$confirm('此操作将确认交接, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.iscord = false
            this.$message({
              type: 'success',
              message: '交接成功!'
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
    // 保存
    isPreservation () {
      // eslint-disable-next-line eqeqeq
      if (this.multipleSelection.length == 0) {
        this.$message({
          message: '未选中编辑内容',
          type: 'warning'
        })
      } else {
        this.$confirm('此操作将永久保存记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$message({
              type: 'success',
              message: '保存成功!'
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
    // 查询
    qureySform (form) {
      // eslint-disable-next-line eqeqeq
      if (form.supplyplancode == '') {
        this.$message({
          message: '请输入交接单号',
          type: 'warning'
        })
      // eslint-disable-next-line eqeqeq
      } else if (form.supplyplancode == '280200001820F1000875') {
        this.iscord = true
        this.tabyData = this.tabyrData
        this.total = this.tabyrData.length
        this.cform = this.cdform
        this.tableHeight = window.innerHeight - 735
      } else {
        this.$message({
          message: '暂无数据',
          type: 'warning'
        })
      }
    },
    // 清楚条件
    clearForm () {
      this.iscord = false
      this.tabyData = []
      this.total = 0
      this.tableHeight = window.innerHeight - 401
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
    indexMethod (index) {
      return index + 1
    },
    // 保存选中结果(绑定ID)
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
    .ysrk-top {
      padding: 10px;
      background-color: #fff;

      .ysrk-wz {
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
    .ysrk-bt {
      margin-top: 10px;
      background-color: #fff;
      padding: 10px;
      .ysrk-jg {
        position: relative;
        padding: 6px 10px 0 30px;
        font-size: 18px;

        img {
          position: absolute;
          top: 8px;
          left: 0;
        }
      }
      .ysrk-xuanxian {
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
          left: 200px;
        }
      }
      .ysrk-xj {
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
      .ysrk_ID {
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
      .ysrk-list {
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
      .ysrk-fy {
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
