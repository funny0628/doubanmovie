<template>
  <div class="aa">
    <div v-for="(item, index) in 5" :key="index">
      <img
        src="https://hbimg.huabanimg.com/4845314ec5d5d4ddf3a97feafaaaa8bdb01648d5120be-l7PjG7_fw658/format/webp"
      />
      <p class="name">name</p>
      <p class="point">pingfen</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="less" scoped>
.aa {
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
</style>
