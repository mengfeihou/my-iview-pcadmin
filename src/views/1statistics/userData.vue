<template>
	<div>
		用户数据
		<page :current="current" :total="total"></page>
	</div>
</template>

<script>
import page from '../public/page';
export default {
	components:{
		page
	},
	data(){
		return{
			current:1,//当前页
			total:20000000,//总数
		}
	}
}
</script>


<style>
</style>
