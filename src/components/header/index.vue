<template>
	<header>
		<slot name="search"></slot>
		<slot name="title"></slot>
	</header>
</template>
<script>
	export default{
		name:'header',
		data(){
			return{
				
			}
		}
	}
</script>
<style scoped>
	header{
		width: 100%;
		height: 0.72rem;
		background-color: #d73435;
		text-align: center;
		position: relative;
	}
	header input{
		width: 90%;
		height: 0.46rem;
		padding-left: 0.46rem;
		margin-top: 0.12rem;
		background-image: url(../../assets/public_titlebar_search.png);
		background-size: 0.24rem;
		background-repeat:no-repeat;
		background-position:0.1rem;
		border: none;
		border-radius: 0.1rem;
		color: #838383;
		font-size: 0.16rem;
	}
	h4{
		text-align: left;
		font-size: 0.34rem;
		color: #fff;
		line-height: 0.72rem;
		margin-left: 0.3rem;
		font-weight:bold;
	}
	h3{
		float: right;
		text-align: right;
		font-size: 0.34rem;
		color: #fff;
		line-height: 0.72rem;
		margin-right: 0.3rem;
		font-weight:bold;
	}
</style>