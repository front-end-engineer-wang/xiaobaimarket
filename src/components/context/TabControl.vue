<template>
  <div class="tabcontrol">
    <div class="tab-item" 
    v-for="(item, index) in title" 
    :key="index"
    :class="{isactive:index===currentindex}"
    >
      <span @click="change(index,title[index])">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
      return {
          currentindex: 0
      }
  },
  methods: {
      change(index,good) {
          this.currentindex=index
          this.$emit("changegood",good)
      },
  },
};
</script>

<style lang="scss" scoped>
.tabcontrol{
    display: flex;
    justify-content: space-around;
    font-size: 15px;
    background-color: #fff;
    padding: 3px 0;
    width: 100%;
}
.isactive{
    color: palevioletred;
    span{
        border-bottom: 2px solid palevioletred;
    }
}
</style>