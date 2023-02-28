<template>
  <div>
    <el-row type="flex" justify="end">
      <el-col style="text-align: right;">
        <!-- 年份 -->
        <el-select v-model="newYear" @change="dateChange" size="small" style="width: 100px;margin-right: 10px;">
          <el-option v-for="item in yearList" :key="item" :label="item" :value="item">{{item }}</el-option>
        </el-select>
        <!-- 月份 -->
        <el-select v-model="newMonth" @change="dateChange" size="small" style="width: 100px;">
          <el-option v-for="item in 12" :key="item" :label="item" :value="item">{{item }}</el-option>
        </el-select>
        <!-- 日期 -->
        <el-calendar v-model="newDate">
          <!-- 通过设置名为 dateCell 的 scoped-slot 来自定义日历单元格中显示的内容。在 scoped-slot 可以获取到 date（当前单元格的日期）, data是对象 对象里有要显示的day,data（包括 type，isSelected，day 属性） -->
          <template slot="dateCell"  slot-scope="{date, data}" >
            <div class="date-content">
              <span class="text" :class="data.isSelected ? 'is-selected' : ''" >
              {{ data.day.split('-')[2] | getday}}
            </span>
            <span v-if="isWeek(date)" class="rest">休</span>
            </div>
          </template>
        </el-calendar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   value: new Date(),
      newYear: null,
      newMonth: null,
      newDate: null,//当前时间
      yearList: [],

    }
  },
  created() {
    this.newYear = new Date().getFullYear()
    this.newMonth = new Date().getMonth() + 1
    // this.newDay = new Date().getDay()
    this.yearList = Array.from(Array(11), (val, index) => index + this.newYear - 5)
    // console.log(data.day);

  },
  methods: {
    dateChange() {
      const year = this.newYear
      const month = this.newMonth
      this.newDate = new Date(`${year}-${month}-1`)
    },
    isWeek(value){
      // console.log(63, value.getDay());
      return value.getDay() === 6 || value.getDay() === 0
    }

  },
  filters:{
    getday(value){
      const day =value
    return day.startsWith('0') ? day.substr(1) : day
    }
    
  }

}
</script>

<style lang="less" scoped>

.date-content {
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
}

.date-content .rest {
    color: #fff;
    border-radius: 50%;
    background: rgb(250, 124, 77);
    width: 20px;
    height: 20px;
    line-height: 20px;
    display: inline-block;
    font-size: 12px;
    margin-left: 10px;
}

.date-content .text {
    width: 20px;
    height: 20px;
    line-height: 20px;
    display: inline-block;

}
::v-deep .el-calendar-table td.is-selected .text {
    background: #dfa70c;
    color: #fff;
    border-radius: 50%;
}
::v-deep .el-calendar-day {
    height: auto;
}

::v-deep .el-calendar-table__row td,
::v-deep .el-calendar-table tr td:first-child,
::v-deep .el-calendar-table__row td.prev {
    border: none;
}

::v-deep  .el-calendar-table td.is-today .text {
        background: #409eff;
    color: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    line-height: 20px;
}
</style>