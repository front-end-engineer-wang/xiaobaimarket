<template>
    <div class="detailinfo">
        <div class="desc">
            {{detailinfo.desc}}
        </div>
        <div class="detailkey">
            {{detailinfo.key}}
        </div>
        <div class="deatilimg" v-for="(item,index) in detailinfo.list" :key="index">
            
            <img :src="item" alt="">
        </div>
 
    </div>
</template>

<script>
    export default {
        props: {
            detailinfo: {
                type: Object,
                default()
                {
                    return {}
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
img{
    width: 100%;
    height: auto;
}
.desc{
    font-size: 13px;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>