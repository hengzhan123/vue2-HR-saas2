<template>
    <div class="job-info">
        <el-form :model="sizeForm" label-width="220px" style="margin-top: 20px;">
            <!-- 基础信息 -->
            <el-row class="block">
                <div class="title">基础信息</div>
                <el-col :span="12">
                    <el-form-item label="岗位">
                        <el-input></el-input>
                    </el-form-item>

                    <el-form-item label="转正状态">
                        <el-select v-model="sizeForm.region" disabled="disabled" readonly="readonly" autocomplete="off">
                            <input type="text" placeholder="请选择" value="000">
                        </el-select>
                    </el-form-item>

                    <el-form-item label="职级">
                        <el-input></el-input>
                    </el-form-item>

                    <el-form-item label="转正评价">
                        <el-input type="textarea" placeholder="1-300位字符"></el-input>
                    </el-form-item>

                    <el-form-item label="汇报对象">
                        <el-select v-model="sizeForm.region">
                            <input type="text" placeholder="请选择" value="000">
                        </el-select>
                    </el-form-item>

                    <el-form-item label="HRBP">
                        <el-select v-model="sizeForm.region">
                            <input type="text" placeholder="请选择" value="000">
                        </el-select>
                    </el-form-item>

                    <el-form-item label="调整司龄(天):">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>

                    <el-form-item label="首次参加工作时间">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>

                    <el-form-item label="调整工龄">
                        <el-input disabled="disabled" readonly="readonly" autocomplete="off" placeholder="0.00年"
                            style="width: 200px;"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row class="block">
                <div class="title">合同信息</div>
                <el-col :span="12">
                    <el-form-item label="首次合同开始时间:">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>

                    <el-form-item label="首次合同结束时间:">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>

                    <el-form-item label="现合同开始时间:">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>

                    <el-form-item label="现合同结束时间:">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>

                    <el-form-item label="合同期限">
                        <el-select v-model="sizeForm.region">
                            <input type="text" placeholder="请选择" value="000">
                        </el-select>
                    </el-form-item>

                    <el-form-item label="续签次数">
                        <el-select v-model="sizeForm.region">
                            <input type="text" placeholder="请选择" value="000">
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row class="block">
                <div class="title">招聘信息</div>
                <el-col :span="12">
                    <el-form-item label="其他招聘渠道">
                        <el-select v-model="sizeForm.region">
                            <input type="text" placeholder="请选择" value="000">
                        </el-select>
                    </el-form-item>

                    <el-form-item label="招聘渠道">
                        <el-select v-model="sizeForm.region">
                            <input type="text" placeholder="请选择" value="000">
                        </el-select>
                    </el-form-item>

                    <el-form-item label="社招/校招">
                        <el-select v-model="sizeForm.region">
                            <input type="text" placeholder="请选择" value="000">
                        </el-select>
                    </el-form-item>

                    <el-form-item label="推荐企业人">
                        <el-input placeholder="请输入"></el-input>
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
export default {
    data() {
        return {
            sizeForm: {
                region: ''
            }
        };
    },
}
</script>

<style lang="less" scoped>
/deep/ label {
    font-weight: 700;
}
</style>