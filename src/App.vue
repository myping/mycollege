<template>
	<div id="app">
		<router-view v-wechat-title="$route.meta.title"></router-view>
	</div>
</template>
<script>
export default {
	name: 'app',
	components: {

	}
}
</script>

<style>
#app {
	width: 100%;
}
img{
	width: 100%;
}
</style>
