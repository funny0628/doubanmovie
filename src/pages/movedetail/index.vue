<template>
  <div class="detail">
    <div class="movedesc">
      <p class="name">{{moveData.title}}  ( {{moveData.year}})</p>
      <div class="msg">
        <div class="left">
          <div class="point" v-if="moveData.rating">
            <p >
             <i
              v-for="(itm, idx) in moveData.rating.integer"
              :key="idx"
              class="iconfont icon-star-full"
            ></i>
            <i v-if="moveData.rating.float > 1" class="iconfont icon-star-half"></i>
            </p>
            <p>{{moveData.rating.average === 0 ? '暂无评分' : moveData.rating.average}}</p>
            <p>{{moveData.ratings_count}}人评价</p>
          </div>
          <div class="movejieshao">
            <p v-if="moveData.durations">
              {{moveData.countries[0]}}/{{moveData.genres[0]}}/{{moveData.genres[1]}}/{{moveData.pubdates[1]}}上映/片长{{moveData.durations[0]}}
              
            </p>
          </div>
        </div>
        <div class="right" v-if="moveData.images">
          <img
            :src="moveData.images.large"
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
        <li v-for="(item, index) in moveData.tags" :key="item">{{item}} ></li>
      </ul>
    </div>
    <div class="dream">
      <p class="title">{{moveData.title}}</p>
      <p class="desc" v-if="moveData.summary">
        {{ shortjieshao }}
        <span v-if="moveData.summary.length > 36">... <span @click="all">({{activename}})</span> </span>
      </p>
    </div>
    <div class="people">
      <p class="title">影人</p>
      <div class="container">
        <div>
          <scroll-view scroll-x>
            <div v-for="(item, index) in moveData.casts" :key="index">
              <img
               :src="item.avatars.small"
              />
              <p class="name">{{item.name}}</p>
              <p class="point">{{item.name_en}}</p>
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
            <div v-for="(item, index) in moveData.trailers" :key="index">
              <img
                :src="item.medium"
              />
            </div>
          </scroll-view>
        </div>
      </div>
    </div>
    <div class="peoplecomments">
      <p class="title">寻梦环游记的短评</p>
      <div class="container">
        <ul>
          <li v-for="(it,inx) in moveData.popular_comments" :key="inx">
            <div class="left">
              <img
                src="https://hbimg.huabanimg.com/4845314ec5d5d4ddf3a97feafaaaa8bdb01648d5120be-l7PjG7_fw658/format/webp"
              />
            </div>
            <div class="right">
              <p class="name">
                {{it.author.name}}
              </p>
              <p class="time">{{it.created_at}}</p>
              <p class="comment">
                {{it.content}}
              </p>
              <p class="good">
                <span
                  ><i class="iconfont icon-dianzan_leave-copy"></i> <i>{{it.useful_count}}</i>
                </span>
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
      shortjieshao: "",
      moveData:{},
      activename:'更多',
    };
  },
  beforeCreate() {
    let that = this;
  },

  onLoad(query) {
    this.moveData = {}
    this.getmovedetail(query.moveid)
  },
  methods: {
    all(){
      if(this.activename === '更多'){
        this.shortjieshao = this.moveData.summary;
        this.activename = '收起'
      }else{
        this.shortjieshao = this.moveData.sub;
        this.activename = '更多'
      }
    },
    filterNum(obj){
        obj.rating.integer = Math.floor(obj.rating.average / 2);
        obj.rating.float = +(obj.rating.average - (obj.rating.integer * 2)).toFixed(1);
        obj.sub = obj.summary.substr(0,35)
      return obj
    },
    getmovedetail(id) {
      let that = this
      wx.request({
        url: `http://huangjiangjun.top:9001/movie/subject/${id}`,
        success : (res) => {
          if(res.statusCode === 200){
            this.moveData = this.filterNum(res.data) || {}
            this.shortjieshao = this.moveData.sub
            console.log(this.moveData);
          }
        }
      });
    },
  },
  filters: {
    filterjieshao: function (value) {
      if (value.length > 35) {
        return value.substr(0, 35);
      }
      return value;
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
            margin-right: 0.133333rem;
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
              font-size: 0.346667rem;
            }
            .good {
              display: flex;
              justify-content: space-between;
              padding-bottom: 20px;
              span {
                i {
                  &:first-child {
                    font-size: 0.426667rem;
                  }
                  &:last-child {
                    font-size: 0.373333rem;
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
            font-size: 13px;
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
