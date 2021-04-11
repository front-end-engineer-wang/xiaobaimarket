<template>
    <div>
        <div class="shop">
            <img :src="shopinfo.logo" alt="" class="logo">
            <div class="shopname"> {{shopinfo.name}}</div>
        </div>
        <div class="shopinfo">
            <div class="sell">
                {{shopinfo.sells}}
                <div >总销量</div>
            </div>
            <div class="goodsCount">
                {{shopinfo.goodsCount}}
                <div >全部宝贝</div>
            </div>
            <div>
                <div  class="score" v-for="(item,index) in shopinfo.score" :key="index">
                    <span> {{item.name}}</span>
                    <span>{{ item.score}}</span>
                    <span class="better" v-if="item.isBetter">高</span>
                    <span class="worse" v-else>低</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            shopinfo: {
                type: Object,
                default(){
                    return {}
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
.logo{
    height:70px ;
    width: auto;
}
.shop{
    display: flex;
    height: 100px;
    align-items: center;
}
.shopname{
    margin-left: 20px;
}
.shopinfo{
    display: flex;
    justify-content: space-around;
    .goodsCount{
        text-align: center;
    }
}
.score{
    display: flex;
    width: 130px;
    justify-content: space-between;
}
.better{
    background-color: rgb(238, 78, 78);
    color: #fff;
}
.worse{
    background-color: rgb(116, 168, 116);
    color: #fff;

}
</style>