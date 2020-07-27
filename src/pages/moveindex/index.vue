<template>
  <div class="moveindex">
    <div v-if="false" class="topbar">
      <div class="left">
        <span>豆瓣</span>
        <i></i>
      </div>
      <div class="right">打开豆瓣App</div>
    </div>
    <div class="container">
      <p class="title">
        <span>正在热映</span><span @click="toMoreMove(1)">更多</span>
      </p>
      <div>
        <scroll-view scroll-x>
          <card :List="currentmove"></card>
        </scroll-view>
      </div>
    </div>
    <div class="container">
      <p class="title">
        <span>即将上映</span><span @click="toMoreMove(2)">更多</span>
      </p>
      <div>
        <scroll-view scroll-x>
          <card :List="Comingsoonmove"></card>
        </scroll-view>
      </div>
    </div>
    <div class="container">
      <p class="title">
        <span>Top250</span><span @click="toMoreMove(3)">更多</span>
      </p>
      <div>
        <scroll-view scroll-x>
          <card :List="top250move"></card>
        </scroll-view>
      </div>
    </div>
    <div class="finedmove">
      <p class="title">发现好电影</p>
      <ul class="ulfind">
        <li
          :style="{ color: item.color, border: item.border }"
          v-for="(item, index) in descType"
          :key="index"
        >
          {{ item.desc }}
        </li>
      </ul>
    </div>
    <div class="finedmove">
      <p class="title">分类浏览</p>
      <ul class="ulclass">
        <li v-for="(itm, idx) in moveType" :key="idx">
          <span
            ><i>{{ itm.name }}</i> <i @click="toType(itm.id)"> > </i></span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import card from "../../components/card.vue";
import {myrequest} from '../../request/index.js'
export default {
  components: {
    card,
  },
  data() {
    return {
      currentmove: [],
      Comingsoonmove: [],
      top250move: [],
      descType: [
        {
          desc: "同时入选【IMDB250】和豆瓣电影250的电影",
          color: "#65a9ef",
          border: "1px solid #65a9ef",
        },
        {
          desc: "使用APP [找电影]",
          color: "#42bd56",
          border: "1px solid #42bd56",
        },
        {
          desc: "科幻主题",
          color: "#ffc46c",
          border: "1px solid #ffc46c",
        },
        {
          desc: "经典电影",
          color: "#df464d",
          border: "1px solid #df464d",
        },
      ],
      moveType: [
        {
          name: "经典",
          id: 1,
        },
        {
          name: "冷门佳片",
          id: 2,
        },
        {
          name: "豆瓣高分",
          id: 3,
        },
        {
          name: "动作",
          id: 4,
        },
        {
          name: "喜剧",
          id: 5,
        },
        {
          name: "爱情",
          id: 6,
        },
        {
          name: "悬疑",
          id: 7,
        },
        {
          name: "恐怖",
          id: 8,
        },
        {
          name: "科幻",
          id: 9,
        },
        {
          name: "治愈",
          id: 10,
        },
        {
          name: "文艺",
          id: 11,
        },
        {
          name: "成长",
          id: 12,
        },
        {
          name: "动画",
          id: 13,
        },
        {
          name: "华语",
          id: 14,
        },
        {
          name: "欧美",
          id: 15,
        },
        {
          name: "韩国",
          id: 16,
        },
        {
          name: "日本",
          id: 17,
        },
      ],
    };
  },


  created() {
    this.getcurrent();
    this.getcommingsoon();
    this.gettop250();
  },
  methods: {
     //更多电影
    toMoreMove(id) {
      wx.navigateTo({
        url:`/pages/moremove/main?typeid=${id}`
      })
    },
    toType(id) {},
    
    filterNum(list){
      list.forEach(item => {
        if(!item.rating.average) return 
        item.rating.integer = Math.floor(item.rating.average / 2)
        item.rating.float = +(item.rating.average - (item.rating.integer * 2)).toFixed(1)
      })
      return list
    },
    async getcurrent() {
      //第一版自己封装的请求,但是觉得和原生的小程序的请求么有太大的差别 
      // myrequest({
      //   url: "http://huangjiangjun.top:9001/movie/in_theaters",
      //    data:{
      //     start:0,
      //     count:8
      //   },
      //   succ:(res)=>{
      //     console.log(res);
      //     this.currentmove = this.filterNum(res.data.subjects) || []
      //   }
      // })

      //第二版封装的请求,可以直接使用promise的then方法,
      // myrequest({
      //   url: "http://huangjiangjun.top:9001/movie/in_theaters",
      //    data:{
      //     start:0,
      //     count:8
      //   },
      // }).then((res)=>{
      //   this.currentmove = this.filterNum(res.data.subjects) || []
      // })

      //还可以使用async .await 来修饰Promise的请求
      let res = await myrequest({
        url: "http://huangjiangjun.top:9001/movie/in_theaters",
         data:{
          start:0,
          count:8
        },
      })
      this.currentmove = this.filterNum(res.data.subjects) || []
    },
    getcommingsoon() {
      wx.request({
        url: "http://huangjiangjun.top:9001/movie/coming_soon",
        data:{
          start:0,
          count:8
        },
        success:(res) => {
          if(res.statusCode){
            this.Comingsoonmove = this.filterNum(res.data.subjects) || []
          }
        },
      });
    },
    gettop250() {
      wx.request({
        url: "http://huangjiangjun.top:9001/movie/top250",
        data:{
          start:0,
          count:8
        },
        success:(res) => {
          if(res.statusCode){
            this.top250move = this.filterNum(res.data.subjects) || []
          }
        },
      });
    },
  },
  //监听下拉动作
  onPullDownRefresh(){
    console.log("我在执行下拉刷新的动作，清除之前左右的数据，加载最初的数据");
  },
  //监听上拉加载
  onReachBottom(){
    console.log('我接触到底部了，需要加载新的数据了，这里因为接口有限制，就只有打印看一下效果，没有数据的操作');

  }
};
</script>

<style lang="less" scoped>
.moveindex {
  height: 100vh;
  .container {
    margin-top: 0.533333rem;
    .title {
      font-size: 18px;
      font-weight: 700;
      display: flex;
      justify-content: space-between;
      padding: 0 0.133333rem;
      box-sizing: border-box;
      span {
        &:last-child {
          color: #1aad19;
        }
      }
    }
    div {
      width: 100vw;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  .finedmove {
    width: 100vw;
    padding: 0.266667rem;
    box-sizing: border-box;
    .title {
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
    }
    .ulfind {
      width: 100%;
      li {
        display: inline-block;
        padding: 5px;
        box-sizing: border-box;
        border: 0.026667rem solid #ccc;
        border-radius: 0.133333rem;
        margin-top: 0.133333rem;
        margin-right: 0.133333rem;
        font-size: 0.346667rem;
      }
    }
    .ulclass {
      width: 100%;
      margin-top: 0.133333rem;
      display: flex;
      flex-wrap: wrap;
      border-top: 0.026667rem solid #eeeeee;
      li {
        width: 49%;
        height: 0.8rem;
        display: flex;
        align-items: center;
        border-bottom: 0.026667rem solid #eeeeee;
        &:nth-child(2n-1) {
          border-right: 0.026667rem solid #eeeeee;
          span {
            padding-right: 0.266667rem;
            box-sizing: border-box;
          }
        }
        &:nth-child(2n) {
          span {
            padding-left: 0.266667rem;
            box-sizing: border-box;
          }
        }
        span {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          i {
            &:first-child {
              color: #42bd56;
            }
            &:last-child {
              color: #eeeeee;
            }
          }
        }
      }
    }
  }
}
</style>
