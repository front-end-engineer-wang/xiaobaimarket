<template>
  <div class="params">
    <table class="table1" v-if="params.rule">
      <tr
        class="tr"
        v-for="(item, index) in params.rule.tables[0]"
        :key="index"
      >
        <td v-for="(it, index) in item" :key="index">{{ it }}</td>
      </tr>
    </table>

    <table class="table2" v-if="params.info">
        <tr  v-for="(item,index) in params.info.set" :key="index">
           <td class="key">{{item.key}}</td>
           <td class="value">{{item.value}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    params: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.params {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}

.table1 {
  width: 100%;
  border-collapse: collapse;
  tr {
      height: 42px;
    td {
      border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    }
  }
}

.table2{
    margin-top: 30px;
    width: 100%;
    tr{
        height: 42px;
        td{
           border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
    }
}
.key{
    width: 30px;
}
.value{
    padding-left: 30px;
    color: rgb(199, 10, 158);
}
</style>