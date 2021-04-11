<template>
  <div v-if="list">
    <nav-bar class="nar-bar">
      <div slot="left" class="back" @click="goback"><i class="el-icon-arrow-left"></i></div>
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>
    <div class="boxbox">
      <div class="list" v-for="(item, index) in list" :key="index">
        <i
          class="el-icon-circle-check"
          :class="{ isactive: ischeck[index] }"
          @click="change(index)"
        ></i>
        <img :src="item.image" alt="" />
        <div class="content">
          <div class="box1">
            <p class="title">{{ item.title }}</p>
            <p class="desc">{{ item.desc }}</p>
          </div>
          <div class="box2">
            <span class="price">￥{{ item.price }}</span>
            <span>X{{ item.count }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottombox">
      <div class="bottom">
        <div >
          <i class="el-icon-circle-check" :class="{ isactive: ischeckall }" @click="selectAll"></i>
          <span>全选</span>
        </div>

        <div class="totalprice">
          <div>总价:</div>
          <div>{{ totalprice }}</div>
        </div>
        <div class="pay" @click="pay">去结算</div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/common/NavBar.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      ischeck: [],
      ischeckall: false,
    };
  },
  components: {
    navBar,
  },
  computed: {
    ...mapGetters(["length", "list"]),
    totalprice() {
      let totalprice = 0;
      for (let index = 0; index < this.list.length; index++) {
        if (this.ischeck[index]) {
          totalprice += parseFloat(this.list[index].price);
        }
      }
      return totalprice;
    },
  },
  mounted() {
    for (let i = 0; i < this.list.length; i++) {
      this.ischeck.push(false);
    }
  },
  methods: {
    change(index) {
      //   this.ischeck[index]=!this.ischeck[index]
      this.$set(this.ischeck, index, !this.ischeck[index]);
    },
    selectAll(){
        this.ischeckall=!this.ischeckall
        for (let index = 0; index < this.list.length; index++) {
            this.$set(this.ischeck,index,this.ischeckall)            
        }
    },
    goback(){
      this.$router.back()
    },
    pay(){
      this.$toast.show('跳转支付...',2000)
    }
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgb(243, 73, 178);
}
.list {
  margin: 5px 0;
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-around;
  img {
    height: 100px;
    width: auto;
  }
}
div {
  p {
    font-size: 14px;
    margin: 10px 0 0 0;
    height: 30px;
    width: 190px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.desc {
  font-weight: 100;
}
.price {
  font-size: 18px;
  color: rgb(223, 19, 121);
}
.content {
  height: 100px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.box2 {
  display: flex;
  justify-content: space-between;
}
.boxbox {
  margin-top: 44px;
}
.isactive {
  background-color: yellow;
  border-radius: 50%;
}
.bottombox{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
.bottom {
  background-color: rgba(87, 57, 57, 0.356);
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pay {
  height: 44px;
  line-height: 44px;
  width: 100px;
  text-align: center;
  background-color: rgb(212, 69, 69);
}
.totalprice {
  display: flex;
  width: 100px;
}
.back {
  font-size: 25px;
  text-align: center;
}
</style>