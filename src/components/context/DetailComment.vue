<template>
  <div>
    <div class="info">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div class="comment" v-if="comment.user">
      <div class="user">
        <div class="userimg">
          <img :src="comment.user.avatar" alt="" />
        </div>
        <div class="username">
          {{ comment.user.uname }}
        </div>
      </div>

      <div class="content">
        <p>{{ comment.content }}</p>
        <div class="other">
          <span class="date">{{ date }}</span>
          <span class="sty">{{ comment.style }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    date() {
      const date = new Date(this.comment.created * 1000);
      return date.toLocaleDateString();
      //   return date
    },
  },
};
</script>

<style lang="scss" scoped>
.comment {
  font-size: 14px;
  padding: 0 10px;
}
.info {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}
.user {
  display: flex;
  img {
    height: 42px;
    width: auto;
  }
  .username {
    padding-left: 20px;
    line-height: 42px;
    height: 42px;
  }
}
.sty {
  padding-left: 20px;
}
</style>