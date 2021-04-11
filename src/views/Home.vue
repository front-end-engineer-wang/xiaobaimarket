<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
     <tab-control ref="tabcon1" @changegood="changegood" class="tabcontrol2" :title="['流行','新款','精选']" v-show="fixedBar"></tab-control>
    <b-scroll class="b-scroll" ref="bscroll" @showtop="showtop" @loadMore="loadMore(currentgoods)" @imageLoad="swiperImageLoad">
    <div class="block">
      <el-carousel height="167px">
        <el-carousel-item v-for="(item, index) in banners" :key="index">
          <img :src="item.image" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <home-recommend :recommends=recommends></home-recommend>
    <a href="">
      <img src="~assets/img/recommend.png" alt="">
    </a>
    <tab-control  ref="tabcon2" @changegood="changegood" class="tab-control" :title="['流行','新款','精选']"></tab-control>
    <home-good :list="goods[currentgoods].list" >
    </home-good>
    </b-scroll>
    <back-top class="back-top" @click.native="backCilck" v-show="topshow"></back-top>
  </div>
  
</template>

<script>
// @ is an alias to /src
import navBar from "components/common/NavBar.vue";
import homeRecommend from "components/context/HomeRecommend.vue";
import tabControl from 'components/context/TabControl.vue'
import homeGood from 'components/context/HomeGoods.vue'
import bScroll from 'components/common/Scroll.vue'
import backTop from 'components/context/BackTop.vue'
import { getdata,getgoodsdata } from "../network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]},
      },
      currentgoods:"pop",
      topshow:false,
      fixedBar:false,
      positiony:0,
    };
  },
  components: {
    navBar,
    homeRecommend,
    tabControl,
    homeGood,
    bScroll,
    backTop,
  },
  created() {
    getdata().then((res) => {
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
    this.getgoodsdata("pop");
    this.getgoodsdata("new");
    this.getgoodsdata("sell");

    
  },
  mounted () {
    this.fixBar();
    this.$refs.bscroll.scroll.refresh()
  },
  computed: {
    offsettop() {
      return this.$refs.bscroll.$el.offsetTop 
    }
  },
  methods: {
    getgoodsdata(type) {
      const page=this.goods[type].page+1
      getgoodsdata(type,page).then(res=>{
      this.goods[type].page=page
      this.goods[type].list.push(...res.data.data.list)
      // console.log(this.goods[type])
    })
    },
    changegood(good){
      if(good=='流行')
      {this.currentgoods='pop'
      this.$refs.tabcon1.currentindex=0
      this.$refs.tabcon2.currentindex=0}
      if(good=='新款')
      {this.currentgoods='new'
      this.$refs.tabcon1.currentindex=1
      this.$refs.tabcon2.currentindex=1}
       if(good=='精选')
      {this.currentgoods='sell'
      this.$refs.tabcon1.currentindex=2
      this.$refs.tabcon2.currentindex=2}
      
    },
    backCilck(){
      this.$refs.bscroll.scroll.scrollTo(0,0,500)
    },
    showtop(position){
       if (-(position.y)>1000)
       this.topshow=true
       else 
       this.topshow=false
    },
    loadMore(type){
      this.getgoodsdata(type);
    },
    swiperImageLoad(){
      console.log(this.$refs.bscroll.$el.offsetTop)
    },
    fixBar(){
      this.$refs.bscroll.scroll.on('scroll',position=>{
        if(-position.y>520)
        this.fixedBar=true
        else
        this.fixedBar=false
      })
      // console.log(this.$refs.bscroll);
    }
  },
  activated(){
     this.$refs.bscroll.scroll.refresh()
    this.$refs.bscroll.scroll.scrollTo(0,this.positiony,0)
   
  },
  deactivated(){
    this.positiony=this.$refs.bscroll.scroll.y
  },
};
</script>

<style lang="scss" scoped>

.home-nav {
  background-color: rosybrown;
  color: white;
  // position: fixed;
  // left: 0;
  // top: 0;
  // width: 100%;
  // z-index: 9;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  width: 100%;
  border-bottom:  10px solid #eee
}
.tabcontrol2{
  // position: sticky;
  // top: 44px;
  // padding-bottom: 5px;
  position: relative;
  z-index: 15;
}
.b-scroll{
  position: absolute;
  bottom: 49px;
  top: 44px;
  overflow: hidden;
}
</style>
