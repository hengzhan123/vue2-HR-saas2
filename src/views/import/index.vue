<template>
    <upload-excel :on-success="success" />
  </template>
  
  <script>
  import { importEmployeeAPI } from '@/api/employees'
  import UploadExcel from "@/components/UploadExcel"
  export default {
    name:'',
    components:{
        UploadExcel
    },
    data() {
      return {

      }
    },
    methods: {
      async  success({ header, results }) {
        // header中的数据 是中文 results中的数据也是中文
        // 新增的员工的属性是一致的
          const userRelations = {
            '入职日期': 'timeOfEntry',
            '手机号': 'mobile',
            '姓名': 'username',
            '转正日期': 'correctionTime',
            '工号': 'workNumber'
          }

          console.log(results,666);
          let newArr = results.map(item => {
        let userInfo = {}
            Object.keys(item).forEach(key => {
            // userInfo[userRelations[key]] = item[key]
              if (userRelations[key] === 'timeOfEntry' || userRelations[key] === 'correctionTime') {
                // 转化时间类型
                userInfo[userRelations[key]] = new Date(this.formatDate(item[key], '/')) 
              } else {
                userInfo[userRelations[key]] = item[key] 
              }
            })
            return userInfo
          })
          await importEmployeeAPI(newArr) // 接收一个数组
          this.$message.success('导入excel成功')
          this.$router.back() // 回到上一个页面

      },
      // 转化excel的日期格式
      formatDate(numb, format) {
        const time = new Date((numb - 1) * 24 * 3600000 + 1)
        time.setYear(time.getFullYear() - 70)
        const year = time.getFullYear() + ''
        const month = time.getMonth() + 1 + ''
        const date = time.getDate() - 1 + ''
        if (format && format.length === 1) {
          return year + format + month + format + date
        }
        return year + (month < 10 ? '0' + month : month) + (date < 10 ? '0' + date : date)
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  