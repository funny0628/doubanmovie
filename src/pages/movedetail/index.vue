<template>
  <div class="detail">
    <div class="movedesc">
      <p class="name">name</p>
      <div class="msg">
        <div class="left">
          <div class="point">
            <p>
              <i
                v-for="(item, index) in 4"
                :key="index"
                class="iconfont icon-star-full"
              ></i>
              <i v-if="1.6 > 1" class="iconfont icon-star-half"></i>
            </p>
            <p>9.2</p>
            <p>112983人评价</p>
          </div>
          <div class="movejieshao">
            <p>
              105分钟/喜剧/动画/奇幻/105分钟/喜剧/动画/奇幻/105分钟/喜剧/动画/奇幻/105分钟/喜剧/动画/奇幻/105分钟/喜剧/动画/奇幻/105分钟/喜剧/动画/奇幻/105分钟/喜剧/动画/奇幻/105分钟/喜剧/动画/奇幻/
            </p>
          </div>
        </div>
        <div class="right">
          <img
            src="https://hbimg.huabanimg.com/4845314ec5d5d4ddf3a97feafaaaa8bdb01648d5120be-l7PjG7_fw658/format/webp"
          />
        </div>
      </div>
    </div>
    <div class="want">
      <span>想看</span>
      <span>看过</span>
    </div>
    <div class="channel">
      <p class="title">所属频道</p>
      <ul>
        <li v-for="(item, index) in 10" :key="item">温情 ></li>
      </ul>
    </div>
    <div class="dream">
      <p class="title">寻梦环游记的剧情介绍</p>
      <p class="desc">
        {{ filterjieshao }}
        <span v-if="filterjieshao.length < 36">... <span>(更多)</span> </span>
      </p>
    </div>
    <div class="people">
      <p class="title">影人</p>
      <div class="container">
        <div>
          <scroll-view scroll-x>
            <div v-for="(item, index) in 5" :key="index">
              <img
                src="https://hbimg.huabanimg.com/4845314ec5d5d4ddf3a97feafaaaa8bdb01648d5120be-l7PjG7_fw658/format/webp"
              />
              <p class="name">name</p>
              <p class="point">pingfen</p>
            </div>
          </scroll-view>
        </div>
      </div>
    </div>
    <div class="people">
      <p class="title">寻梦环游记的预告片</p>
      <div class="container">
        <div>
          <scroll-view scroll-x>
            <div v-for="(item, index) in 5" :key="index">
              <img
                src="https://hbimg.huabanimg.com/4845314ec5d5d4ddf3a97feafaaaa8bdb01648d5120be-l7PjG7_fw658/format/webp"
              />
              <p class="name">name</p>
              <p class="point">pingfen</p>
            </div>
          </scroll-view>
        </div>
      </div>
    </div>
    <div class="peoplecomments">
      <p class="title">寻梦环游记的短评</p>
      <div class="container">
        <ul>
          <li>
            <div class="left">
              <img
                src="https://hbimg.huabanimg.com/4845314ec5d5d4ddf3a97feafaaaa8bdb01648d5120be-l7PjG7_fw658/format/webp"
              />
            </div>
            <div class="right">
              <p class="name">
                name
              </p>
              <p class="time">2020-05-20 11:01:46</p>
              <p class="comment">
                播频率或其它无线电通讯频率的波段特定的无线电广播频率或其它无线电通讯频率的波段特播频率或其它无线电通讯频率的波段特定的无线电广播频率或其它无线电通讯频率的波段特播频率或其它无线电通讯频率的波段特定的无线电广播频率或其它无线电通讯频率的波段特播频率或其它无线电通讯频率的波段特定的无线电广播频率或其它无线电通讯频率的波段特播频率或其它无线电通讯频率的波段特定的无线电广播频率或其它无线电通讯频率的波段特
              </p>
              <p class="good">
                <span
                  ><i class="iconfont icon-dianzan_leave-copy"></i> <i>2566</i> </span
                >
                <span>...</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jieshao:
        "特定的无线电广播频率或其它无线电通讯频率的波段特定的无线电广播频率或其它无线电通讯频率的波段特定的无线电广播频率或其它无线电通讯频率的波段",
      shortjieshao: "",
    };
  },
  beforeCreate() {
    let that = this;
  },

  created() {},
  computed: {
    filterjieshao: function () {
      if (this.jieshao.length > 35) {
        console.log(this.jieshao.substr(0, 35));
        return this.jieshao.substr(0, 35);
      }
      return this.jieshao;
    },
  },
};
</script>

<style lang="less" scoped>
.detail {
  .movedesc {
    padding: 0.266667rem;
    box-sizing: border-box;
    .name {
      font-size: 0.48rem;
    }
    .msg {
      display: flex;
      margin-top: 0.266667rem;
      .left {
        height: 0.426667rem;
        line-height: 0.426667rem;
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .point {
          display: flex;
          align-items: center;
          p {
            font-size: 0.32rem;
            margin-right: 0.213333rem;
            &:first-child {
              display: flex;
            }
            &:nth-child(3) {
              color: #c9c9c9;
            }
          }
        }
        .movejieshao {
          font-size: 0.346667rem;
          margin-top: 0.266667rem;
          color: #808080;
          padding: 0 0.133333rem;
        }
      }
      .right {
        flex: 1;
        img {
          width: 100%;
          height: 3.6rem;
        }
      }
    }
  }
  .want {
    margin-top: 0.533333rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.266667rem;
    box-sizing: border-box;
    span {
      width: 45%;
      height: 0.666667rem;
      border: 0.026667rem solid #ffb816;
      font-size: 0.373333rem;
      color: #ffb816;
      text-align: center;
      line-height: 0.666667rem;
      border-radius: 0.133333rem;
    }
  }
  .channel {
    margin-top: 20px;
    padding: 0 0.266667rem;
    box-sizing: border-box;
    .title {
      color: #808080;
      font-size: 18px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        padding: 0 0.16rem;
        box-sizing: border-box;
        color: #54c366;
        border: 0.026667rem solid #54c366;
        border-radius: 0.213333rem;
        font-size: 0.346667rem;
        margin-right: 0.266667rem;
        margin-top: 0.266667rem;
        background-color: #effaf0;
      }
    }
  }
  .dream {
    margin-top: 20px;
    padding: 0 0.266667rem;
    box-sizing: border-box;
    .title {
      color: #808080;
      font-size: 18px;
    }
    .desc {
      margin-top: 10px;
      font-size: 0.346667rem;
      span {
        span {
          color: #ffa808;
        }
      }
    }
  }
  .peoplecomments {
    margin-top: 20px;
    padding: 0 0.266667rem;
    box-sizing: border-box;
    .title {
      color: #808080;
      font-size: 18px;
    }
    .container {
      margin-top: 0.533333rem;
      ul {
        width: 100%;
        li {
          display: flex;
          .left {
            flex: 1;
            margin-right: .133333rem;
            img {
              width: 40px;
              height: 40px;
              border-radius: 50%;
            }
          }
          .right {
            flex: 7;
            .name {
              font-size: 16px;
              font-weight: 700;
              line-height: 40px;
            }
            .time {
              color: #808080;
              font-size: 14px;
            }
            .comment {
              font-size: .346667rem;
            }
            .good {
              display: flex;
              justify-content: space-between;
              padding-bottom: 20px;
              span {
                i {
                  
                  &:first-child {
                    font-size: .426667rem ;
                  }
                  &:last-child {
                      font-size: .373333rem;
                  }
                }
              }

            }
          }
        }
      }
    }
  }
  .people {
    margin-top: 20px;
    padding: 0 0.266667rem;
    box-sizing: border-box;
    .title {
      color: #808080;
      font-size: 18px;
    }
    .container {
      margin-top: 0.533333rem;
      div {
        width: 100vw;
        overflow: hidden;
        white-space: nowrap;
        div {
          display: inline-block;
          width: 33.33%;
          padding: 5rpx;
          box-sizing: border-box;
          margin-top: 10rpx;
          img {
            width: 100%;
            height: 2.666667rem;
          }
          p {
            font-size: 0.373333rem;
            line-height: 0.533333rem;
            text-align: center;
            overflow: hidden; /*超出部分隐藏*/
            white-space: nowrap; /*不换行*/
            text-overflow: ellipsis; /*超出部分文字以...显示*/
          }
        }
      }
    }
  }
}
</style>
