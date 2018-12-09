<template>
    <div style="margin-bottom:48px">
        <van-swipe :autoplay="2000" indicator-color="white">
            <van-swipe-item>
                <img src="../assets/imgs/banner1.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/imgs/banner2.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/imgs/banner3.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/imgs/banner4.jpg" alt="">
            </van-swipe-item>
        </van-swipe>
        <!-- //首页导航 -->
        <van-tabbar v-model="active" :fixed = 'false'>
            <van-tabbar-item style="color:#19B5FE" icon="records" to="/cnav">校园</van-tabbar-item>
            <van-tabbar-item style="color:#36D7B7" icon="photo">图集</van-tabbar-item>
            <van-tabbar-item style="color:#FF5500" icon="chat">热门</van-tabbar-item>
        </van-tabbar>
        <!-- //公告栏 -->
        <van-notice-bar
            :text="notice"
            left-icon="//img.yzcdn.cn/vant/volume.png"
        />
        <!-- //首页列表 -->
        <Titlelist></Titlelist>
        <!-- //底部标签页 -->
        <van-tabbar v-model="active">
            <van-tabbar-item icon="shop">首页</van-tabbar-item>
            <van-tabbar-item icon="chat">功能</van-tabbar-item>
            <van-tabbar-item icon="records">标签</van-tabbar-item>
            <van-tabbar-item icon="gold-coin">寻找</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
    import Mock from 'mockjs'
    import Titlelist from '../components/titlelist'
    export default{
        components:{
            Titlelist
        },
        data(){
            return{
                active:0,
                data:{
                   
                },
                notice:'',
            }
        },
        created(){
            
        }
    }
</script>
<style scoped>
    .van-swipe{
        height: 180px;
        overflow: hidden
    }
    img{
        width: 100%;
    }
    .van-col{
        text-align: center;
        font-size: 36px;
        line-height: 60px;
    }
</style>