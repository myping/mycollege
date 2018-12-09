<template>
    <div class="albumlist">
        <h2>风景建筑</h2>
        <div v-for="(item, index) in data" :key="index">
            <van-collapse v-model="activeNames" accordion >
                <van-collapse-item :title="item.albumname" :name="index">
                    <p>{{item.desc}}</p><van-rate v-model="item.hottempture" color="#ff0000" :size = "12" readonly/>
                    <span>{{item.author}}-{{item.photodate}}</span>
                    <img src="item.imgurl" v-lazy="item.imgurl">
                </van-collapse-item>
            </van-collapse>
        </div>
    </div>
</template>
<script>
    import Mock from 'mockjs'
    export default{
        components:{
        },
        data(){
            return{
                data:{},
                activeNames:['1'],
            }
        },
        created(){
            var data = Mock.mock({
                "body|5":[{
                    "imgurl":Mock.Random.image('600x360'),
                    "desc": Mock.Random.csentence(8,12),
                    "author": "@cname",
                    "photodate": "@date",
                    "albumname": "@ctitle",
                    "hottempture": "@integer(0,5)",
                    }
                ],
            });
            this.data = data.body;
        }
    }
</script>
<style scoped>
    .albumlist{
        padding: 0 12px
    }
    p{
        padding: 0;
        margin: 0;
        color:rgb(228, 228, 228);
        font-size: 14px
    }
    span{
        color: rgb(228, 228, 228);
        font-size: 12px;
    }
</style>