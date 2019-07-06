<template>
	<div id="app">
		<router-view />
	
	</div>
</template>

<script>

	export default {
		name: 'App',
		
	}
</script>

<style>
	#app {
		width: 100%;
		/* height: 100%; */
		font-family: 'PingFang-SC-Regular';
		background: #F8F8F8;
	}
	html,
	body {
		width: 100%;
		height: 100%;
		/* background: #031928; */
		/* color: #1485D9; */
		/* touch-action: none; */
	}
	input{
		font-size: 0.693333rem !important;
	}
	.center{
		text-align: center !important;
	}
	.flexbox {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* 字体加粗 */
	.bold {
		font-weight: bold;
	}
	.color{
		color: #039BE6;
	}
	/* 超出隐藏 */
	.overfont {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	/* 表单的样式 */
	::-webkit-input-placeholder {
		color: #999999
	}

	:-moz-placeholder {
		color: #999999
	}

	::-moz-placeholder {
		color: #999999
	}

	:-ms-input-placeholder {
		color: #999999
	}
	 .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover{
		color: #2d8cf0;
	}
</style>
