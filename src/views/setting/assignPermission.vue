<template>
    <div>
        <el-tree :data="PermissionsList"
         :props="{label:'name'}" 
         check-strictly 
         default-expand-all 
         show-checkbox
         node-key="id"
         ref="theTree"/>
        <el-row class="footer" type="flex" justify="center">
            <el-col :span="6">
                <el-button size="small" @click="cancelButton">取消</el-button>
                <el-button size="small" type="primary" @click="setRolesBtn">确定</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name:"AssignPermission",
        props:{
            PermissionsList:{
                type:Array,
                default:_=>[]
            },
            PermIds:{
                type:Array,
                default:()=>[]
            },
            // roleId:{
            //     type:[Number,String],
            //     required:true
            // }
        },
        data(){
            return{}
        },
        created(){},
        methods:{
            //取消按钮
            cancelButton(){
                this.$emit("input",false)
            },
            //确定
            setRolesBtn(){
                //获取现在已选的key对应值形成的数组(权限点id形成的数组)
                this.$emit("addPerEV",this.$refs.theTree.getCheckedKeys())
                this.$emit("input",false)
            }
        },
        watch:{
          PermIds(){
            this.$refs.theTree.setCheckedKeys(this.PermIds)
          }
        }

    }
</script>

<style  scoped>

</style>