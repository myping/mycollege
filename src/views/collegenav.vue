<template>
    <div>
        <van-tabbar v-model="active" :fixed = 'false'>
            <van-tabbar-item style="color:#19B5FE" icon="records" to="/college">校园校史</van-tabbar-item>
            <van-tabbar-item style="color:#36D7B7" icon="photo" to="/depart">院系专业</van-tabbar-item>
            <van-tabbar-item style="color:#FF5500" icon="chat" to="/imagelist/">风景建筑</van-tabbar-item>
        </van-tabbar>
        <van-tabbar v-model="active" :fixed = 'false'>
            <van-tabbar-item style="color:#5b5bff" icon="records">交通</van-tabbar-item>
            <van-tabbar-item style="color:#f53dff" icon="photo">美食</van-tabbar-item>
            <van-tabbar-item style="color:#23ff98" icon="chat">景点</van-tabbar-item>
        </van-tabbar>
        <van-tabbar v-model="active" :fixed = 'false'>
            <van-tabbar-item style="color:#ffff42" icon="records">宿舍</van-tabbar-item>
            <van-tabbar-item style="color:#000000" icon="photo">敬请期待</van-tabbar-item>
            <van-tabbar-item style="color:#000000" icon="chat">敬请期待</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
    import Mock from 'mockjs'
    export default{
        data(){
            return{
                active: -1
            }
        },
        methods:{

        },
        created(){
            var data = Mock.mock({

            })
        }
    }
</script>
<style scoped>
    .van-row{
        font-size:36px;
        text-align:center;
        line-height:72px;
        padding-top:3px;
    }
    .van-tabbar{
        height: 96px;
    }
    .van-hairline--top-bottom::after{
        height:120px;
        border:none;
    }
</style>