<template>
  <div class="item" @click="itemClick">
    <img :src="img" alt="" />
    <div>
      <p class="title">{{ item.title }}</p>
      <div class="pricre-collect">
      <span class="price">￥{{ item.price }}</span>
      <div class="collect">
          <i class="el-icon-star-off"></i>
        <span >{{ item.cfav }}</span>
      </div>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    img() {
      return this.item.image || this.item.show.img
    }
  },
  methods: {
    itemClick() {
      this.$router.push('./detail/'+this.item.iid)
    }
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
  margin-right: 5px;
}
.title {
  margin: 5px 0 5px 0;
  font-size: 14px; 
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  // text-overflow: ellipsis;
  // white-space:nowrap;
  // overflow: hidden;
}
.collect{
    display: flex;
    justify-content: space-around;
}
.pricre-collect{
    display: flex;
    justify-content: space-around;
}
</style>