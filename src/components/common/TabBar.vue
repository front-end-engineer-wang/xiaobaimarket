<template>
  <div class="tabbar-view" >
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    
    <div class="tabbar" v-if="ishome">
      <router-link
        class="bar-item"
        v-for="(item, index) in bararr"
        :key="item.name"
        :to="item.link"
        exact
      >
        <div class="bar-img"><i :class="item.icon"></i></div>
        <div :class="{ isactive: currenindex == index }" class="bar-name">
          {{ item.name }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bararr: [
        {
          name: "首页",
          icon: "el-icon-s-home",
          link: "/",
        },
        {
          name: "分类",
          icon: "el-icon-menu",
          link: "/category",
        },
        {
          name: "购物车",
          icon: "el-icon-shopping-cart-2",
          link: "/cart",
        },
        {
          name: "个人",
          icon: "el-icon-s-custom",
          link: "/profile",
        },
      ],
      currenindex: "0",
    };
  },
 
  computed: {
    barnum() {
      return this.bararr.length;
    },
    ishome(){
      return this.$route.path==="/"
    }
  },
};
</script>

<style lang="scss" scoped>
.tabbar {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 49px;
  justify-content: space-around;
  background-color: #f6f6f6;
}
.bar-img {
  padding-top: 3px;
  text-align: center;
}
.router-link-active{
    color: purple;
    .bar-name{
      color: red;
    }
}
.bar-item{

  text-decoration: none;
}
.bar-name{
  padding-top: 3px;
}
</style>