<template>
    <div class="job-info">
        <el-form label-width="220px" style="margin-top: 20px;">
            <!-- 基础信息 -->
            <el-row class="block">
                <div class="title">基础信息</div>
                <el-col :span="12">
                    <el-form-item label="岗位">
                        <el-input v-model="positionInfo.post"></el-input>
                    </el-form-item>

                    <el-form-item label="转正状态">
                        <el-select v-model="positionInfo.stateOfCorrection" disabled="disabled" readonly="readonly"
                            autocomplete="off">
                            <input type="text" placeholder="请选择" value="000">
                        </el-select>
                    </el-form-item>

                    <el-form-item label="职级">
                        <el-input v-model="positionInfo.rank"></el-input>
                    </el-form-item>

                    <el-form-item label="转正评价">
                        <el-input v-model="positionInfo.correctionEvaluation" type="textarea"
                            placeholder="1-300位字符"></el-input>
                    </el-form-item>

                    <el-form-item label="汇报对象">
                        <el-select v-model="positionInfo.reportId" placeholder="请选择">
                            <el-option v-for="item in simpleList" :label="item.username" :key="item.id" :value="item.id" />
                        </el-select>
                    </el-form-item>

                    <el-form-item label="HRBP">
                        <el-select v-model="positionInfo.hrbp">
                            <el-option v-for="item in simpleList" :label="item.username" :key="item.id" :value="item.id" />
                        </el-select>
                    </el-form-item>

                    <el-form-item label="调整司龄(天):">
                        <el-input v-model="positionInfo.adjustmentAgedays" placeholder="请输入"></el-input>
                    </el-form-item>

                    <el-form-item label="首次参加工作时间">
                        <el-col :span="11">
                            <el-date-picker v-model="positionInfo.workingTimeForTheFirstTime" type="date" placeholder="选择日期"
                                style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>

                    <el-form-item label="调整工龄">
                        <el-input v-model="positionInfo.adjustmentOfLengthOfService" disabled="disabled" readonly="readonly"
                            autocomplete="off" placeholder="0.00年" style="width: 200px;"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row class="block">
                <div class="title">合同信息</div>
                <el-col :span="12">
                    <el-form-item label="首次合同开始时间:">
                        <el-col :span="11">
                            <el-date-picker v-model="positionInfo.initialContractStartTime" type="date" placeholder="选择日期"
                                style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>

                    <el-form-item label="首次合同结束时间:">
                        <el-col :span="11">
                            <el-date-picker v-model="positionInfo.firstContractTerminationTime" type="date"
                                placeholder="选择日期" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>

                    <el-form-item label="现合同开始时间:">
                        <el-col :span="11">
                            <el-date-picker v-model="positionInfo.currentContractStartTime" type="date" placeholder="选择日期"
                                style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>

                    <el-form-item label="现合同结束时间:">
                        <el-col :span="11">
                            <el-date-picker v-model="positionInfo.closingTimeOfCurrentContract" type="date"
                                placeholder="选择日期" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>

                    <el-form-item label="合同期限">
                        <el-select v-model="positionInfo.contractPeriod">
                            <input type="text" placeholder="请选择" value="000">
                        </el-select>
                    </el-form-item>

                    <el-form-item label="续签次数">
                        <el-select v-model="positionInfo.renewalNumber">
                            <input type="text" placeholder="请选择" value="000">
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row class="block">
                <div class="title">招聘信息</div>
                <el-col :span="12">
                    <el-form-item label="其他招聘渠道">
                        <el-select v-model="positionInfo.otherRecruitmentChannels">
                            <input type="text" placeholder="请选择" value="000">
                        </el-select>
                    </el-form-item>

                    <el-form-item label="招聘渠道">
                        <el-select v-model="positionInfo.recruitmentChannels">
                            <input type="text" placeholder="请选择" value="000">
                        </el-select>
                    </el-form-item>

                    <el-form-item label="社招/校招">
                        <el-select v-model="positionInfo.socialRecruitment">
                            <input type="text" placeholder="请选择" value="000">
                        </el-select>
                    </el-form-item>

                    <el-form-item label="推荐企业人">
                        <el-input v-model="positionInfo.recommenderBusinessPeople" placeholder="请输入"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row c1ass="inline-info" type="flex" justify="center">
                <el-col :span="12">
                    <el-button type="primary" @click="">保存更新</el-button>
                    <el-button @click="$router.back()">返回</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
import { getEmployeePositionAPI, getSimpleAPI } from '@/api'
export default {
    data() {
        return {
            userId: this.$route.query.id,
            positionInfo: {},  //员工岗位信息对象
            simpleList: {}    //员工简单对象
        }
    },
    created() {
        //获取员工岗位信息
        this.getEmployeePositionFn()
        //获取员工简单列表
        this.getSimpleFn()
    },
    methods: {
        //获取员工岗位信息列表
        async getEmployeePositionFn() {
            const res = await getEmployeePositionAPI(this.userId)
            // console.log(res);
            this.positionInfo = res.data
        },
        //获取员工简单列表
        async getSimpleFn() {
            const res = await getSimpleAPI()
            // console.log(res);
            this.simpleList = res.data
        }
    }
}
</script>
<style lang="less" scoped>
/deep/ label {
    font-weight: 700;
}
</style>