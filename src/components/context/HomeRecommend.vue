<template>
    <div class="recommend">
        <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
            <a href="item.link" >
                <img class="recommend-img" :src="item.image" alt="">
            </a>
            <div class="recommend-title">
                {{item.title}}
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        props:{
            recommends:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.recommend{
    height: 100px;
    display: flex;
    justify-content: space-around;
    padding: 15px 3px 15px 0;
    border-bottom: 10px solid #eee;
    .recommend-img{
        flex:1;
        height: 65px;
        width: 65px;
    }
}
</style>