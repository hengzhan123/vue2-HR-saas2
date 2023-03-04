<template>
  <div class="lookupBox">
    <!-- 工资---查看 因接口报错原因写不了功能-->
    <div class="lookup_left">
      <div class="header_t">
        <template>
          <img  alt="" />
          <ul class="header_r">
            <li>张三<span>在职</span></li>
            <li>
              入职时间: <span>2023-03-02</span> 最新工资：<span>0</span
              ><span>?</span>
            </li>
            <li>
              当月基本工资 / 当月岗位工资: <span>0</span>&nbsp;/&nbsp;<span
                >0</span
              >
            </li>
          </ul>
        </template>
      </div>
      <table cellpaceing="0" cellpadding="0">
        <thead>
          <tr>
            <th>津贴</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>津贴类型</td>
            <td>补贴金额</td>
            <td>津贴类型</td>
            <td>补贴金颜</td>
          </tr>
          <tr>
            <td>交通补助</td>
            <td>0</td>
            <td>通讯补助</td>
            <td>0</td>
          </tr>
          <tr>
            <td>午餐补助</td>
            <td>0</td>
            <td>住房补助</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      <table cellpaceing="0" cellpadding="0">
        <thead>
          <tr>
            <th>社保公积金</th>
            <th>企业0</th>
            <th>个人0</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>缴费项目</td>
            <td>基数</td>
            <td>企业缴纳</td>
            <td>个人缴纳</td>
          </tr>
          <tr>
            <td>社保</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>公积金</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>缴费合计</td>
            <td></td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      <p>
        实际出勤天数（正式）：<input type="text" placeholder="0" disabled />
      </p>
      <p>计薪天数（正式）：<input type="text" placeholder="0" disabled /></p>
    </div>
    <div class="lookup_right">
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
    </div>
  </div>
</template>

<script>
import { lookOverAPI, userSalarysAPI } from "@/api/salarys";
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
      loList: [],
    };
  },
  async created() {
    const res = await userSalarysAPI({ id: this.$route.query.id });
    this.loList = res.data.rows;
    console.log(res.data.rows);
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
    margin: 20px auto;
    .lookup_left {
      float: left;
      width: 71%;
      padding: 20px;
      background: white;
      box-shadow: 0px 0px 10px rgb(177, 177, 177);
      .header_t {
        overflow: hidden;
        img {
          float: left;
          width: 100px;
          height: 100px;
          margin-right: 10px;
        }
        .header_r {
          float: left;
          li {
            line-height: 25px;
            font-size: 12px;
            color: #555;
          }
          li:first-of-type {
            font-size: 14px;
            font-weight: bold;
            span {
              display: inline-block;
              width: 44px;
              height: 22px;
              line-height: 22px;
              text-align: center;
              color: white;
              background: rgb(255, 98, 99);
              border-radius: 3px;
              font-size: 12px;
              font-weight: none;
              margin-left: 5px;
            }
          }
          li:nth-of-type(2) {
            span:last-of-type {
              display: inline-block;
              width: 14px;
              height: 14px;
              border-radius: 50%;
              line-height: 14px;
              border: 1px solid #555;
              font-size: 14px;
              text-align: center;
              margin-left: 10px;
            }
          }
        }
      }
      table {
        border-collapse: collapse;
        width: 100%;
        border: 1px solid red;
        text-align: center;
        font-size: 14px;
        border: none;
        tr {
          height: 30px;
          line-height: 30px;
          td {
            color: #555;
          }
        }
        tr:first-of-type {
          td {
            padding-top: 20px;
            font-weight: bold;
          }
        }
        tr:last-of-type {
          td {
            padding-bottom: 20px;
          }
        }
        thead {
          th {
            text-align: left;
            line-height: 40px;
            color: black;
          }
        }
        tbody {
          background: rgb(249, 249, 249);
        }
      }
      table:first-of-type {
        margin-top: 20px;
      }
      p {
        color: #555;
        font-size: 14px;
        input {
          width: 240px;
          height: 34px;
          text-indent: 1em;
        }
      }
    }
  }
  .lookup_right {
    float: right;
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
          left: 10px;
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
          h4 {
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
</style>