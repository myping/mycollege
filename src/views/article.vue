<template>
    <div>
        <div class="articlehead">
            <h2>{{data.title}}</h2>
            <p>分类：院系专业</p>
            <p>文章素材提供：{{data.supporter}}</p>
            <p>最后编辑于：{{data.editdate}}</p>
            <van-rate v-model="hottempture" color="#ff0000" :size = "12" readonly/>
            <img :src="data.titleimg" alt="">
        </div>
        <div class="articlebody">
            {{data.body}}
        </div>
        <div class="articlefooter">
            <p>本文来自：{{data.origin}}</p>
            <p>阅读：{{data.readnumber}}</p>
            <p>推荐阅读：{{data.recommend}}</p>
            <van-button type="default" size="mini">返回</van-button>
        </div>
    </div>
</template>
<script>
    import Mock from 'mockjs'
    export default{
        data(){
            return{
                data:{

                },
                hottempture:3,
            }
        },
        methods:{

        },
        created(){
            // this.$route.meta.title = this.$route.params.artno;
            // this.$route.meta.title = this.$route.query.artno;
            var data = Mock.mock({
                body:{
                    "title": "@name",
                    "supporter": "@name",
                    "editdate": "@date",
                    "titleimg": Mock.Random.image('600x360'),
                    "body|20": "@cparagraph",
                }
            });
            this.data = data.body;
            // console.log(this.$route.params.artno)
        }
    }
</script>
<style scoped>
    .articlehead{
        padding-left: 12px;
        padding-right: 12px;
    }
    .articlehead p{
        font-size: 12px;
        color:#C4C4C4;
        padding: 0;
        margin: 0;
    }
    .articlebody{
        margin-top: 16px;
        line-height: 32px;
        padding-left: 12px;
        padding-right: 12px;
    }
    .articlefooter{
        background-color: #e5e5e5;
        padding: 18px 12px 36px 12px;
    }
    .articlefooter p{
        padding:0;
        margin: 0;
        font-size: 14px
    }
</style>
