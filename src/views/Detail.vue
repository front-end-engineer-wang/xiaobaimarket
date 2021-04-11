<template>
  <div>
    <nav-bar class="navbar">
      <div slot="left" class="back" @click="goback">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div slot="center" class="nav-bar">
        <div
          v-for="(item, index) in title"
          :key="index"
          @click="titleClick(index)"
        >
          <a :href="item.id" :class="{ isActive: currentindex == index }">
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav-bar>
    <div class="detail">
      <div id="block" class="block">
        <el-carousel height="300px">
          <el-carousel-item v-for="(item, index) in swiperImage" :key="index">
            <img :src="item" alt="" class="swiperImage" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="detailbase">
        <detail-base :detailbase="detailbaseinfo"></detail-base>
      </div>
      <div class="shopinfo">
        <shop-info :shopinfo="shopinfo"></shop-info>
      </div>
      <div class="detailinfo">
        <detail-info :detailinfo="detailinfo"></detail-info>
      </div>
      <div id="params" class="detailparams" ref="params">
        <detail-params :params="params"></detail-params>
      </div>
      <div id="comment" class="detailcomment">
        <detail-comment :comment="detailComment"> </detail-comment>
      </div>
      <div id="recommend" class="recommend">
        <home-good :list="recommend"> </home-good>
      </div>
    </div>
    <detail-button @addto='addto'></detail-button>
    <back-top
      class="back-top"
      @click.native="backCilck"
      v-show="topshow"
    ></back-top>
  </div>
</template>

<script>
import navBar from "components/common/NavBar.vue";
import detailBase from "components/context/DetailBase.vue";
import shopInfo from "components/context/ShopInfo.vue";
import detailInfo from "components/context/DetailInfo.vue";
import detailComment from "components/context/DetailComment.vue";
import detailParams from "components/context/DetailParams.vue";
import homeGood from "components/context/HomeGoods.vue";
import detailButton from "components/context/DetailButton.vue";
import backTop from "components/context/BackTop.vue";

import { getdetail, Goods, Shop, getrecommend } from "../network/detail.js";

export default {
  name: "Detail",
  data() {
    return {
      title: [
        {
          name: "商品",
          id: "#block",
        },
        {
          name: "参数",
          id: "#params",
        },
        {
          name: "评论",
          id: "#comment",
        },
        {
          name: "推荐",
          id: "#recommend",
        },
      ],
      // title: ["商品", "评论", "详情", "推荐"],
      itemdetail: {},
      swiperImage: [],
      itemid: "",
      currentindex: 0,
      detailbaseinfo: {},
      shopinfo: {},
      detailinfo: {
        desc: "",
        list: [],
        key: "",
      },
      params: {},
      detailComment: {},
      recommend: [],
      scrollTop: 0,
      itemclick: 1,
      topshow: false,
    };
  },
  created() {
    this.itemid = this.$route.params.id;
    getdetail(this.itemid).then((res) => {
      this.itemdetail = res.data;
      this.swiperImage = res.data.result.itemInfo.topImages;
      this.detailbaseinfo = new Goods(
        res.data.result.itemInfo,
        res.data.result.columns,
        res.data.result.shopInfo.services
      );
      this.shopinfo = new Shop(res.data.result.shopInfo);

      this.detailinfo.desc = res.data.result.detailInfo.desc;
      this.detailinfo.list = res.data.result.detailInfo.detailImage[0].list;
      this.detailinfo.key = res.data.result.detailInfo.detailImage[0].key;

      this.params = res.data.result.itemParams;
      if (res.data.result.rate.cRate !== 0)
        this.detailComment = res.data.result.rate.list[0];
    });
    getrecommend().then((res) => {
      this.recommend = res.data.data.list;
    });
  },
  components: {
    navBar,
    detailBase,
    shopInfo,
    detailInfo,
    detailComment,
    detailParams,
    homeGood,
    detailButton,
    backTop,
  },
  mounted() {
    this.itemclick = 1;

    window.onscroll = this.scroll;
  },
  methods: {
    titleClick(index) {
      this.itemclick += 1;
      this.currentindex = index;
      setTimeout(() => {
        window.scrollBy(0, -44);
      }, 10);
    },
    goback() {
      this.$router.go(-this.itemclick);
    },
    scroll() {
      //导航联动效果
      let winPos =
          document.documentElement.scrollTop || document.body.scrollTop;
      if (document.getElementById("params")) {   
        let params = document.getElementById("params");
        let comment = document.getElementById("comment");
        let recommend = document.getElementById("recommend");
        if (winPos <= params.offsetTop - 50) this.changeindex(0);
        else if (winPos <= comment.offsetTop - 50) this.changeindex(1);
        else if (winPos <= recommend.offsetTop - 50) this.changeindex(2);
        else this.changeindex(3);

        //回到顶部功能，显示图标
        if(winPos>500){
          this.topshow=true
        }
        else{
          this.topshow=false
        }
      }
    },
    changeindex(index) {
      this.currentindex = index;
    },
    backCilck() {
      window.scrollTo(0, 0);
    },
    addto(){
      let obj={}
      obj.id=this.itemid;
      obj.title=this.detailbaseinfo.title;
      obj.price=this.detailbaseinfo.realPrice;
      obj.desc=this.detailinfo.desc;
      obj.image=this.swiperImage[0];
      obj.count=0;
      this.$store.commit('addto',obj)
      this.$toast.show('加入购物车成功')
    }
  },
};
</script>

<style lang="scss" scoped>
.detail {
  // position: fixed;
  // top: 44px;
  // bottom: 0;
  // overflow-y: scroll;
  margin-top: 44px;
  margin-bottom: 49px;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: #fff;
  width: 100%;
}
.nav-bar {
  display: flex;
  justify-content: space-around;
  font-size: 13px;
}
.isActive {
  color: pink;
}
.back {
  font-size: 25px;
  text-align: center;
}
.swiperImage {
  height: 478px;
  width: auto;
  overflow: hidden;
}
.recommend {
  padding-top: 10px;
}
.detailcomment {
  margin-bottom: 5px;
}
</style>