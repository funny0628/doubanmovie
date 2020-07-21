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
      <p class="title"><span>影院热映</span><span @click="toMoreMove()">更多</span></p>
      <div>
        <scroll-view scroll-x>
          <card></card>
        </scroll-view>
      </div>
    </div>
    <div class="container">
      <p class="title"><span>免费在线观影</span><span @click="toMoreMove()">更多</span></p>
      <div>
        <scroll-view scroll-x>
          <card></card>
        </scroll-view>
      </div>
    </div>
    <div class="container">
      <p class="title"><span>新片速递</span><span @click="toMoreMove()">更多</span></p>
      <div>
        <scroll-view scroll-x>
          <card></card>
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
            ><i>{{ itm.name }}</i> <i @click="toType(itm.id)"> > </i></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import card from "../../components/card.vue";
export default {
  components: {
    card,
  },
  data() {
    return {
      descType: [
        {
          desc: "同时入选IMDB250和豆瓣电影250的电影",
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
  methods: {
    //更多电影
    toMoreMove(){},
    toType(id){},
  },

  created() {},
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
