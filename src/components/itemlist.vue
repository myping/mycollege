<template>
    <div>
        <van-list v-for="item in data">
            <van-cell is-link to="/art/12132" :value="item.listitemname" is-link/>
        </van-list>
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
                "body|3-8":[{
                    listitemname: "@name"
                }]
            });
            this.data = data.body;
        }
    }
</script>
<style scoped>

</style>
