<template>
  <div class="moremove">
    <p class="title">影院热映</p>
    <div class="content">
      <card></card>
    </div>
  </div>
</template>

<script>
import card from "../../components/card.vue";
export default {
  components: {
    card,
  },
  created () {
    console.log("90909");   
  },
  onLoad(){
      console.log("6787686");
  }

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
