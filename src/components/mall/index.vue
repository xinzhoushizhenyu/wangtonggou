<template>
	<div>
		<myhead>
			<h4 slot="title">商品列表</h4>
			<h3 slot="search" v-on:click="shaixuan()">筛选</h3>
		</myhead>
		<div class="nav">
			<ul>
				<router-link to="/default" tag="li">默认</router-link>
				<router-link to="/price" tag="li">价格</router-link>
				<router-link to="/comment" tag="li">好评度</router-link>
			</ul>
		</div>
		<router-view></router-view>
		<div class="filter-all hidden" v-on:click="xianshi()"></div>
		<div class="filter hidden animated rollIn">
			<header>
				<h3>筛选</h3>
			</header>
			<div class="title">
				<span class="h4">品牌</span>
				<span class="span"><img src="../../assets/filter_arrow_normal.9.png"/></span>
			</div>
			<div class="title">
				<span class="h4">分类</span>
				<span class="span"><img src="../../assets/filter_arrow_expand.9.png"/></span>
			</div>
			<div class="main">
				<span class="h4">音响</span>
				<span class="span"><img src="../../assets/shopping_care_uncheck.png"/></span>
			</div>
		</div>
	</div>
</template>
<script>
	import myhead from '@/components/header'
	
</script>

<style scoped>
	.nav {
		height: 0.7rem;
		background-color: #efefef;
	}
	
	.nav ul li {
		width: 33%;
		float: left;
		line-height: 0.7rem;
		text-align: center;
		color: #989898;
		font-size: 0.24rem;
		border-bottom: 0.03rem solid #efefef;
	}
	
	.nav ul .router-link-active {
		border-bottom: 0.03rem solid #e25f67;
		color: #e25f67;
	}
	
	.filter-all {
		width: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		background-color: #000;
		opacity: 0.4;
	}
	
	.filter {
		width: 70%;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		background-color: #eeeeee;
		opacity: 1;
	}
	
	.filter header {
		width: 100%;
		height: 0.72rem;
		line-height: 0.72rem;
		background-color: #d73435;
	}
	
	.filter header h3 {
		font-size: 0.34rem;
		color: #fff;
		font-weight: bold;
		margin-left: 0.17rem;
	}
	
	.filter .title {
		height: 0.9rem;
		font-size: 0.24rem;
		line-height: 0.9rem;
		border-bottom: 0.01rem solid #e5e5e5;
		background-color: #fff;
	}
	
	.filter .title .h4 {
		float: left;
		margin-left: 0.33rem;
		font-weight: 400;
	}
	
	.filter .title .span {
		float: right;
		margin-right: 0.45rem;
	}
	
	.filter .title .span img {
		width: 0.22rem;
		height: 0.22rem;
	}
	
	.filter .main {
		height: 0.9rem;
		font-size: 0.24rem;
		line-height: 0.9rem;
		border-bottom: 0.01rem solid #e5e5e5;
	}
	
	.filter .main .h4 {
		margin-left: 0.6rem;
	}
	
	.filter .main .span {
		float: right;
		margin-right: 0.45rem;
		width: 0.3rem;
		height: 0.3rem;
	}
	
	.filter .main .span img {
		width: 0.3rem;
		height: 0.3rem;
	}
	
	.hidden {
		display: none;
	}
</style>
<script>
	import myhead from '@/components/header'
	export default {
		name: 'mall',
		data() {
			return {
				
			}
		},
		components: {
			myhead,
		},
		methods: {
			shaixuan:function(){
				var all = document.getElementsByClassName('filter-all')[0];
				var filter = document.getElementsByClassName('filter')[0];
				all.style.display = "block";
				filter.style.display = "block";
//				console.dir(all);
//				alert(all);
			},
			xianshi:function(){
				var all = document.getElementsByClassName('filter-all')[0];
				var filter = document.getElementsByClassName('filter')[0];
				all.style.display = "none";
				filter.style.display = "none";
			}
		}
	}
</script>
