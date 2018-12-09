<template>
	<div>
		<div v-for="(data, index) in data" :key="index">
			<van-card
				:tag = "data.tag"
				:desc = "data.desc"  
				:title = "data.title"
				:thumb = "data.imageURL"
				:thumb-link = 'data.thumblink'
			>				
				<div slot="desc">{{data.desc}}</div>
				<div slot="tags">{{data.author}} {{data.datetime}}</div>
				<div slot="footer">
					<van-tag type="success">{{data.kind}}</van-tag>
					<van-button size="mini">详情</van-button>
					<van-button size="mini">更多<van-icon name="arrow"></van-icon></van-button>
				</div>
			</van-card>
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
                notice:'',
            }
        },
        created(){
            var Random = Mock.Random
            var data = Mock.mock({
                'body|4-8':[{
					'id': /[0-9]{12}/,
                    'tag': '@cword(0,2)',
                    'desc':'@csentence(4,12)',
                    'title':'@cword(1,8)',
                    'kind': '@cword(2,4)',
                    'imageURL':'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3173342806,2619496858&fm=58&bpow=472&bpoh=483',
                    'thumblink': 'http://www.baidu.com',
                    'author':'@cname',
                    'datetime':'@datetime'
                }],
            });
			this.data = data.body;
        }
	}
</script>  
<style>
	
</style>