<template>
  <div class="moremove">
    <p class="title">影院热映</p>
    <div class="content">
      <card :List="DATALIST"></card>
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
      typeid: 0,
      DATALIST:[]
    };
  },
  created() {

  },
  onLoad(query) {
    if (query.typeid === 1) {
      console.log("1");
      this.getcurrent();
    } else if (query.typeid === 2) {
      console.log("2");
      this.getcommingsoon();
    } else {
      console.log("3");
      this.gettop250();
    }
  },
  methods: {
    filterNum(list) {
      list.forEach((item) => {
        if (!item.rating.average) return;
        item.rating.integer = Math.floor(item.rating.average / 2);
        item.rating.float = +(
          item.rating.average -
          item.rating.integer * 2
        ).toFixed(1);
      });
      return list;
    },
    getcurrent() {
      let that = this;
      wx.request({
        url: "http://huangjiangjun.top:9001/movie/in_theaters",
        data: {
          start: 0,
          count: 30,
        },
        success: (res) => {
          console.log(res);
          if (res.statusCode) {
            this.DATALIST = this.filterNum(res.data.subjects) || [];
          }
        },
      });
    },
    getcommingsoon() {
      wx.request({
        url: "http://huangjiangjun.top:9001/movie/coming_soon",
        data: {
          start: 0,
          count: 30,
        },
        success: (res) => {
          console.log(res); 
          if (res.statusCode) {
            this.DATALIST = this.filterNum(res.data.subjects) || [];
          }
        },
      });
    },
    gettop250() {
      wx.request({
        url: "http://huangjiangjun.top:9001/movie/top250",
        data: {
          start: 0,
          count: 30,
        },
        success: (res) => {
          console.log(res);
          if (res.statusCode) {
            this.DATALIST = this.filterNum(res.data.subjects) || [];
          }
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.moremove {
  padding: 0 0.266667rem;
  box-sizing: border-box;
  .title {
    font-size: 0.48rem;
  }
  .content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
