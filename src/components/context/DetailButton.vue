<template>
  <div class="box">
    <div class="detailbutton">
      <div class="item">
        <i class="el-icon-service"></i>
        <span>客服</span>
      </div>
      <div class="item">
        <i class="el-icon-s-shop"></i>
        <span>店铺</span>
      </div>
      <div class="item">
        <i class="el-icon-star-off"></i>
        <span>收藏</span>
      </div>
      <span class="add" @click="addto">加入购物车</span>
      <span class="buy">立即购买</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addto() {
      this.$emit('addto')
    }
  },
};
</script>

<style lang="scss" scoped>
.box{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
}
.detailbutton {
  display: flex;
  justify-content: space-around;
  height: 49px;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  font-size: 20px;
  span {
    text-align: center;
    font-size: 14px;
  }
  i {
    text-align: center;
  }
}
.add {
  line-height: 49px;
  background-color: rgb(208, 230, 13);
  padding: 0 5px;
}
.buy {
  line-height: 49px;
  background-color: rgb(209, 33, 194);
  color: #fff;
  padding: 0 5px;
}
</style>