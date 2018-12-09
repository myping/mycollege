<template>
    <div>
        <van-collapse v-model="activeNames" v-for="item in data" accordion>
            <van-collapse-item :title="item.listitemname" :name="item.no">
                <van-cell is-link :to="{name:'article',params:{artno:item.no}}" :value="item.listitemname" is-link/>
                <Itemlist></Itemlist>
            </van-collapse-item>
        </van-collapse>
    </div>
</template>
<script>
    import Mock from 'mockjs'
    import Itemlist from './itemlist'
    export default{
        components:{
            Itemlist
        },
        data(){
            return{
                data:{},
                activeNames:['1']
            }
        },
        created(){
            var data = Mock.mock({
                "body|3-7":[{
                    "no": "@integer(6,6)",
                    "listitemname": "@name"
                }]
            });
            this.data = data.body;
        }
    }
</script>
<style scoped>

</style>
