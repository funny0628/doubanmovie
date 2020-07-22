<template>
  <div class="aa">
    <div @click="tomovedetail(item.id)" v-for="(item, index) in List" :key="index">
      <img :src="item.images.large" />
      <p class="name">{{ item.title }}</p>
      <p v-if="item.rating.average === 0" class="point">暂无评分</p>
      <p v-else class="point">
        <i
          v-for="(itm, idx) in item.rating.integer"
          :key="idx"
          class="iconfont icon-star-full"
        ></i>
        <i v-if="item.rating.float > 1" class="iconfont icon-star-half"></i>&nbsp;&nbsp; {{item.rating.average}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "List"],
  methods: {
    tomovedetail(id){
      wx.navigateTo({
        url:`/pages/movedetail/main?moveid=${id}`
      })
    }
  }
};
</script>

<style lang="less" scoped>
.aa {
  div {
    display: inline-block;
    width: 33.33%;
    padding: 5px;
    box-sizing: border-box;
    margin-top: 10px;

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
      &.point {
        display: flex;
        font-size: 14px;
        justify-content: center;
        i {
          font-size: 12px;
        }

      }
    }
  }
}
</style>
