<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import ObserveDom from "@better-scroll/observe-dom";
BScroll.use(ObserveDom);

export default {
  data() {
    return {
      scroll: null,
    };
  },
  methods: {
    backTop() {
      console.log(11);
    },
    debounce(func, delay) {
      const timer = null;
      if (timer) clearTimeout(timer);
      return function debounce(...args) {
        setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    check() {
      this.scroll.on("scroll", (position) => {
        this.$emit("showtop", position);
      });
    },
    imageLoad() {
      this.$emit("imageLoad");
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      observeDOM: true,
      click: true,
      pullUpLoad: true,
      mouseWheel: true, //开启鼠标滚轮
      disableMouse: false, //启用鼠标拖动
      disableTouch: false, //启用手指触摸
    });
    this.check();
    // const fangdou=this.debounce(this.check,1000)
    // fangdou()
    this.scroll.on("pullingUp", () => {
      this.$emit("loadMore");
      this.scroll.finishPullUp();
    });
  },
};
</script>

<style lang="scss" scoped>
.content {
  overflow: hidden;
}
</style>