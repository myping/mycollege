<template>
    <div class="image">
        <h2>{{data.albumname}}</h2>
        <h5>{{data.desc}}</h5>
        <hr>
        <div v-for="(item, index) in data" :key="index">
            <img src="item.imgurl" v-lazy="item.imgurl" >
            <p>{{item.author}}-{{item.photodate}}-{{item.area}}</p>
        </div>
    </div>
</template>
<script>
    import Mock from 'mockjs'
    export default{
        data(){
            return{
                data:{},
            }
        },
        created(){
            var data = Mock.mock({
                "albumname": "@ctitle",
                "desc": Mock.Random.csentence(4,8),
                "body|5":[{
                    "imgurl":Mock.Random.image('600x360'),
                    "author": "@cname",
                    "photodate": "@datetime",
                    "area": Mock.Random.county(true)
                    }
                ],
            });
            this.data = data.body;
            this.data.albumname = data.albumname;
            this.data.desc = data.desc
        }
    }
</script>
<style scoped>
    .image{
        padding:0 12px
    }
    .image h5{
        color: #bebebe;
        padding: 0;
        margin: 0;
    }
    .image p{
        color: #bebebe;
        text-align: center;
        font-size: 14px;
        padding: 0;
        margin: 0;
        margin-bottom: 12px;
    }
</style>
