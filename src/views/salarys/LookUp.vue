<template>
  <div class="lookupBox">
    <!-- 工资---查看 -->
    <el-col class="lookup_left">
      <el-row class="lookup_l-t">
        <el-col :span="3">
          <div class="block">
            <el-avatar :size="100" :src="circleUrl"></el-avatar>
          </div>
        </el-col>
        <el-col :span="20">
          <p>周乐天<span>在职</span></p>
          <p>
            入职时间: 2018-01-01 最新工资：0<i class="el-icon-question"></i>
          </p>
          <p>当月基本工资 / 当月岗位工资: /</p>
        </el-col>
      </el-row>
      <el-row class="lookup_l-c">
        <h3 class="title">津贴</h3>
        <el-row class="salarys">
          <el-col :span="6">
            <p>津贴类型</p>
            <p>交通补助</p>
            <p>午餐补助</p>
          </el-col>
          <el-col :span="6"
            ><p>补贴金额</p>
            <p>0</p>
            <p>0</p></el-col
          >
          <el-col :span="6"
            ><p>津贴类型</p>
            <p>通讯补助</p>
            <p>住房补助</p></el-col
          >
          <el-col :span="6"
            ><p>补贴金额</p>
            <p>0</p>
            <p>0</p></el-col
          >
        </el-row>
      </el-row>
      <el-row class="lookup_l-c">
        <h3 class="title">社保公积金</h3>
        <h3 class="title">企业0</h3>
        <h3 class="title">个人0</h3>
        <el-row class="salarys">
          <el-col :span="6">
            <p>缴费项目</p>
            <p>社保</p>
            <p>公积金</p>
            <p>缴费合计</p>
          </el-col>
          <el-col :span="6">
            <p>基数</p>
          </el-col>
          <el-col :span="6">
            <p>企业缴纳</p>
            <p></p>
            <p></p>
            <p>0</p>
          </el-col>
          <el-col :span="6">
            <p>个人缴纳</p>
            <p></p>
            <p></p>
            <p>0</p>
          </el-col>
        </el-row>
      </el-row>
      <el-row class="lookup_l-b">
        <el-col :span="5">
          <p>实际出勤天数（正式）：</p>
          <p>计薪天数（正式）：</p>
        </el-col>
        <el-col :span="18">
          <p><el-input placeholder="0" disabled></el-input></p>
          <p><el-input placeholder="0" disabled></el-input></p>
        </el-col>
      </el-row>
    </el-col>
    <el-col class="lookup_right">
      <el-row> 招聘日程 </el-row>
      <el-timeline :reverse="reverse">
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp"
        >         
          {{ activity.content2 }}
          <h4>{{ activity.content }}</h4>
        </el-timeline-item>
      </el-timeline>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reverse: true,
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      activities: [
        {
          content: "放弃",
          content2: "HR专员",
          timestamp: "2018-04-15",
        },
        {
          content: "放弃",
          content2: "HR专员",
          timestamp: "2018-04-13",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  .lookupBox {
    width: 98%;
    margin: 0 auto;
    .lookup_left {
      width: 77%;
      padding: 20px;
      background: white;
      box-shadow: 0px 0px 10px rgb(177, 177, 177);
      .lookup_l-t {
        margin-bottom: 20px;
        .el-col:first-of-type {
          width: 100px;
          height: 100px;
          .block {
            margin: 0 auto;
            margin-right: 56px;
          }
        }
        .el-col:last-of-type {
          text-align: left;
          padding-left: 30px;
          p {
            font-size: 14px;
            color: #555;
            line-height: 25px;
            span {
              display: inline-block;
              height: 22px;
              width: 44px;
              background: #67c23a;
              color: white;
              margin-left: 15px;
              border-radius: 3px;
              line-height: 22px;
              text-align: center;
              font-size: 12px;
            }
            .el-icon-question {
              color: #ababab;
              margin-left: 10px;
              font-size: 16px;
              line-height: 25px;
            }
          }
          p:first-of-type {
            color: #555;
            font-size: 14px;
            font-weight: bold;
          }
        }
      }
      .lookup_l-c {
        .title {
          font-size: 14px;
          font-weight: bold;
          height: 40px;
          line-height: 40px;
          color: #555;
        }
        .salarys {
          padding: 15px 0;
          width: 100%;
          background: rgb(249, 249, 249);
          .el-col {
            text-align: center;
            p {
              font-size: 14px;
              color: #666;
              height: 30px;
              line-height: 30px;
            }
            p:first-of-type {
              font-size: 14px;
              font-weight: bold;
              height: 40px;
              line-height: 40px;
              color: #555;
            }
          }
        }
      }
      .lookup_l-c:last-of-type {
        h3 {
          height: 40px;
          line-height: 40px;
          color: #555;
          float: left;
        }
        h3:not(:first-of-type) {
          color: #555;
          font-weight: normal;
          padding: 0 80px;
        }
        .salarys {
          clear: left;
        }
      }
      .lookup_l-b {
        .el-col:first-of-type {
          p {
            font-size: 14px;
            color: #606266;
          }
        }
        .el-col:last-of-type {
          p {
            .el-input {
              width: 240px;
              height: 36px;
            }
          }
        }
      }
    }
    .lookup_right {
      height: 710px;
      width: 22%;
      float: right;
      background: white;
      padding: 0 15px;
      box-shadow: 0px 0px 10px rgb(177, 177, 177);
      .el-row:first-of-type {
        color: #555;
        font-size: 14px;
        border-bottom: 1px solid #ccc;
        font-weight: bold;
        line-height: 40px;
      }
      .el-timeline {
        margin-top: 30px;
        padding-left: 110px;
        .el-timeline-item {
          width: 100%;
          margin: 0 auto;
          text-align: center;
          /deep/ .el-timeline-item__tail {
            background: #555;
            left:10px;
          }
          /deep/ .el-timeline-item__node {
            width: 7px;
            height: 7px;
            background-color: white;
            border: 2px solid #44b549;
            left: 6px;
          }
          /deep/ .el-timeline-item__wrapper {
            width: 200px;
            right: 170px;
            position: relative;
            color: #555;
            h4{
                color: #555;
                position: absolute;
                top: -10px;
                right: 0px;
            }
          }
        }
      }
    }
  }
}
</style>