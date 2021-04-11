<template>
    <div class="toast" v-show="isshow">
        {{message}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: '',
                delay:0,
                isshow:false,
            }
        },
        methods: {
            show(message,delay=1000) {
                this.isshow=true
                this.message=message
                setTimeout(()=>{
                    this.isshow=false
                    this.message=''
                },delay)
            }
        },
    }
</script>

<style lang="scss" scoped>
.toast{
    background-color: rgba(0, 0, 0, 0.75);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 999;
    font-size: 20px;
    padding: 8px 10px;
    color: #fff;
}
</style>