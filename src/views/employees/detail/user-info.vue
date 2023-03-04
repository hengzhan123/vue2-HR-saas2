<template>
    <div class="user-info">
        <!-- 个人信息 -->
        <el-form label-width="220px" style="margin-top: 20px;">
            <!-- 工号 入职时间 -->
            <el-row class="inline-info">
                <el-col :span="12">
                    <el-form-item label="工号">
                        <el-input v-model="userInfo.workNumber" class="inputw" style="width: 300px;"></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="12">
                    <el-form-item label="入职时间">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="userInfo.timeOfEntry"
                                style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                </el-col>
            </el-row>

            <!-- 姓名 部门 -->
            <el-row class="inline-info">
                <el-col :span="12">
                    <el-form-item label="姓名 ">
                        <el-input v-model="userInfo.username" class="inputw" style="width: 300px;"></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="12">
                    <el-form-item label="部门">
                        <el-input v-model="userInfo.departmentName" class="inputw" style="width: 300px;"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <!-- 手机号 聘用形式 -->
            <el-row class="inline-info">
                <el-col :span="12">
                    <el-form-item label="手机号">
                        <el-input v-model="userInfo.mobile" class="inputw" style="width: 300px;"></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="12">
                    <el-form-item label="聘用形式">
                        <el-select v-model="userInfo.formOfEmployment" class="inputw">
                            <el-option v-for="itme in Employees.hireType" :key="itme.id" :value="itme.id"
                                :label="itme.value"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>

            <!-- 员工照片 -->
            <el-row class="inline-info">
                <el-col :span="12">
                    <el-form-item label="员工头像">
                        <!-- 放置上传图片 -->
                    </el-form-item>
                </el-col>
            </el-row>

            <!--保存个人信息-->
            <el-row c1ass="inline-info" type="flex" justify="center">
                <el-col :span="12">
                    <el-button type="primary" @click="saveUser">保存更新</el-button>
                    <el-button @click="$router.back()">返回</el-button>
                </el-col>
            </el-row>
        </el-form>

        <el-form label-width="220px" style="margin-top: 20px;">
            <!-- 基础信息 -->
            <el-row class="block">
                <div class="title">基础信息</div>
                <el-col :span="12">
                    <el-form-item label="最高学历">
                        <el-select v-model="userInfo.formOfEmployment" class="inputw">
                            <el-option v-for="itme in Employees.hireType" :key="itme.id" :value="itme.id"
                                :label="itme.value"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="员工照片">
                        <!-- 放置上传图片 -->
                    </el-form-item>

                    <el-form-item label="国家/地址">
                        <el-select v-model="userInfo.formOfEmployment" class="inputw">
                            <el-option v-for="itme in Employees.hireType" :key="itme.id" :value="itme.id"
                                :label="itme.value"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="护照号">
                        <el-input placeholder="正规护照格式"></el-input>
                    </el-form-item>

                    <el-form-item label="身份证号">
                        <el-input placeholder="正规身份证格式"></el-input>
                    </el-form-item>

                    <el-form-item label="籍贯">
                        <el-input placeholder="籍贯地址"></el-input>
                    </el-form-item>

                    <el-form-item label="民族">
                        <el-input placeholder="请输入民族"></el-input>
                    </el-form-item>

                    <el-form-item label="婚姻状况">
                        <el-select v-model="userInfo.formOfEmployment" class="inputw">
                            <el-option v-for="itme in Employees.hireType" :key="itme.id" :value="itme.id"
                                :label="itme.value"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="生日">
                        <el-input placeholder="示例0323"></el-input>
                    </el-form-item>

                    <el-form-item label="年龄">
                        <el-input></el-input>
                    </el-form-item>

                    <el-form-item label="星座">
                        <el-select v-model="userInfo.formOfEmployment" class="inputw">
                            <el-option v-for="itme in Employees.hireType" :key="itme.id" :value="itme.id"
                                :label="itme.value"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="血型">
                        <el-select v-model="userInfo.formOfEmployment" class="inputw">
                            <el-option v-for="itme in Employees.hireType" :key="itme.id" :value="itme.id"
                                :label="itme.value"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="户籍所在地">
                        <el-input></el-input>
                    </el-form-item>

                    <el-form-item label="政治面貌">
                        <el-input></el-input>
                    </el-form-item>

                    <el-form-item label="入党时间">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="userInfo.timeOfEntry"
                                style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>

                    <el-form-item label="存档机构">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>

                    <el-form-item label="子女状态">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>

                    <el-form-item label="子女有无商业险">
                        <el-radio-group>
                            <el-radio label="有"></el-radio>
                            <el-radio label="无"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="有无违法违纪状态">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>

                    <el-form-item label="有无重大病史">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <!-- 通讯信息 -->
            <el-row class="block">
                <div class="title">通讯信息</div>
                <el-col :span="12">
                    <el-form-item label="QQ">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>

                    <el-form-item label="微信">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>

                    <el-form-item label="现居住地">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>

                    <el-form-item label="通讯地址">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>

                    <el-form-item label="联系手机">
                        <el-input placeholder="11位字符"></el-input>
                    </el-form-item>

                    <el-form-item label="个人邮箱">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>

                    <el-form-item label="紧急联系人">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>

                    <el-form-item label="紧急联系电话">
                        <el-input placeholder="11位字符"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <!-- 账号信息 -->
            <el-row class="block">
                <div class="title">账号信息</div>
                <el-col :span="12">
                    <el-form-item label="社保电脑号">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>

                    <el-form-item label="公积金账号">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>

                    <el-form-item label="银行卡号">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>

                    <el-form-item label="开户行">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <!-- 教育信息 -->
            <el-row class="block">
                <div class="title">教育信息</div>
                <el-col :span="12">
                    <el-form-item label="学历类型">
                        <el-select v-model="userInfo.formOfEmployment" class="inputw">
                            <el-option v-for="itme in Employees.hireType" :key="itme.id" :value="itme.id"
                                :label="itme.value"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="毕业学校">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>

                    <el-form-item label="入学时间">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="userInfo.timeOfEntry"
                                style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>

                    <el-form-item label="毕业时间">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="userInfo.timeOfEntry"
                                style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>

                    <el-form-item label="专业">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <!-- 从业信息 -->
            <el-row class="block">
                <div class="title">从业信息</div>
                <el-col :span="12">
                    <el-form-item label="上家公司">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>

                    <el-form-item label="职称">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>

                    <el-form-item label="有无竞业限制">
                        <el-input placeholder="请输入"></el-input>
                    </el-form-item>

                    <el-form-item label="备注">
                        <el-input type="textarea" placeholder="请输入备注"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row c1ass="inline-info" type="flex" justify="center">
                <el-col :span="12">
                    <el-button type="primary" @click="saveUser">保存更新</el-button>
                    <el-button @click="$router.back()">返回</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
import { getDepartAPI } from '@/api'
import Employees from '@/api/constant'
export default {
    data() {
        return {
            userId: this.$route.query.id,
            userInfo: {}, //个人信息对象
            Employees
        }
    },
    created() {
        //获取用户信息
        this.getUserInfoFn()
    },
    methods: {
        async getUserInfoFn() {
            const res = await getDepartAPI(this.$route.query.id)
            // console.log(res);
            this.userInfo = res.data
        },

        //保存更新按钮->点击事件
        saveUser() {

        }
    }
}
</script>

<style lang="less" scoped>
/deep/ label {
    font-weight: 700;
}
</style>