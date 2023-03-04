<template>
  <!-- 雷达图 -->
  <div ref="radarImg" class="radar-echart" />
</template>

<script>
// 引入echarts模块 按需加载
var echarts = require('echarts/lib/echarts')//引入echarts主模块
require('echarts/lib/chart/radar') // 引入雷达图
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
  mounted() {
    var myChart = echarts.init(this.$refs.radarImg)
    myChart.setOption({ 
  title: {
    text: '人力资源基础绩效表'
  },
  tooltip: {},//提示
  legend: {
    data: ['Allocated Budget', 'Actual Spending']
  },
  radar: {
    // 名字字体样式
    name: {
          textStyle: {
            color: '#bbb',
          }
        },
    // 每个区域的最高值
    indicator: [
      { name: '考勤', max: 100 },
      { name: '工资', max: 100 },
      { name: ' 社保', max: 100 },
      { name: ' 工作效率', max: 100 },
      { name: '知识分享', max: 100 },
      { name: '代码行数', max: 100 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [70, 70, 70, 70, 70, 70],
          name: '白马'
        },
        {
          value: [30, 30, 30, 30, 30, 30],
          name: '黑马'
        },
        {
          value: [5, 0, 100, 10, 100, 100],
          name: '粉马'
        }
      ]
    }
  ]
});
  }
}
</script>

<style lang="less" scoped>
.radar-echart {
    width: 600px;
    height: 400px;
}
</style>
