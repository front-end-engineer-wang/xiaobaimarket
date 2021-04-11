<template>
  <div class="detailbase">
    <div class="title">
      {{ detailbase.title }}
    </div>
    <div class="price">
      <div class="newprice">
        {{ detailbase.newPrice }}
      </div>
      <div class="oldprice">
        {{ detailbase.oldPrice }}
      </div>
      <div class="discount">
        {{ detailbase.discount }}
      </div>
    </div>
    <div class="info">
      <div v-for="(item, index) in detailbase.columns" :key="index">
        {{ item }}
      </div>
    </div>
    <div class="services">   
        <div v-for="(item,index) in detailbase.services" :key="index">
             <img class="icon" :src="item.icon" alt="">{{item.name}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailbase: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.detailbase{
    padding:  5px 5px 15px 5px;
    border-bottom: 5px solid #eee;
}
.title{
    font-size: 20px;
}
.price {
  display: flex;
  margin: 10px 0;
  .newprice {
    color: deeppink;
    font-size: 25px;
  }
  .oldprice{
      text-decoration: line-through;
      font-weight: 100;
      margin: 6px 0 0 10px;
  }
  .discount{
      color: #fff;
      padding: 3px 8px;
      border-radius: 18%;
      background-color: deeppink;
      font-size: 16px;
      margin-left: 20px;
  }
}

.info {

  display: flex;
  justify-content: space-around;
  margin: 10px 0;
}
.services{
    display: flex;
    justify-content: space-around;
    font-size: 10px;
}
.icon{
    height: 15px;
    width: auto;
}

</style>

<style lang="scss">
.el-carousel__button{
    width: 5px;
}
</style>
