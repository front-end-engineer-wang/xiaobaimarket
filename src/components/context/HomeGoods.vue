<template>
    <div class="goods">        
        <good-item  v-for="(item,index) in list" :key="index" :item=item class="item"></good-item>          
    </div>
</template>

<script>
import goodItem from 'components/context/GoodItem.vue'
    export default {
        components: {
            goodItem,
        },
        props: {
            list: {
                type: Array,
                default(){
                    return []
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
.goods{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
}
.item{
    width: 48%;
    height: 350px;
}
</style>