<template>
	<div>
		<myhead>
			<h4 slot="title">商品简介</h4>
			<router-link to="/home" slot="search" tag="h3">首页</router-link>
		</myhead>
		<div class="two">
			<img src="../../../static/imgs/tu1.jpg"/>
			<div class="jieshao">
				<div class="top"><p>Danis/皇冠 丹麦曲奇饼干原味72g*8进口食品休闲零食西点点心</p></div>
				<div class="bottom">
					<span>￥45.8</span>
					<a>￥54.9</a>
					<img src="../../../static/imgs/star.jpg"/>
				</div>
			</div>
			<div class="kucun"><span>库存</span><a>100</a></div>
			<div class="guige"><a>规格:此商品无视规格选择</a></div>
			<div class="xiang"><a>商品详情</a> <img src="../../../static/imgs/icon_list.png"/></div>
			<div class="pl"><router-link to="/pinglun" tag="a">商品评论</router-link><img src="../../../static/imgs/icon_list.png"/></div>
		</div>
		
		<div class="three">
			<div class="btn">加入购物车</div>
			<img src="../../../static/imgs/gou.jpg"/>
		</div>
		
	</div>
</template>

<script>
import myhead from '@/components/header'
export default {
	data() {
		return {

		}
	},
	components: {
		myhead,
	}
}</script>

<style lang="less" scoped>
.one {
	width: 100%;
	height: 0.68rem;
	background: #d63432;
	line-height: 0.68rem;
	position: fixed;
	top: 0;
	left: 0;
	position: relative;
	a {
		font-size: 0.35rem;
		color: white;
		position: absolute;
		left: 0.14rem;
	}
	span {
		font-size: 0.35rem;
		color: white;
		position: absolute;
		right: 0.21rem;
	}
}

.three {
	width: 100%;
	height: 0.68rem;
	background: #edeef0;
	line-height: 0.68rem;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	bottom: 0;
	left: 0;
	border-top: 0.01rem solid #b0b7a5;
	.btn {
		width: 2rem;
		height: 0.5rem;
		background: #cd1412;
		font-size: 0.23rem;
		color: white;
		line-height: 0.5rem;
		text-align: center;
		border-radius: 0.1rem;
	}
	img {
		width: 0.6rem;
		height: 0.6rem;
		position: absolute;
		right: 0.15rem;
		top: 0;
	}
}

.two {
	position: fixed;
	top: 0.68rem;
	bottom: 0.68rem;
	overflow-y: auto;
	background: #eeeeee;
	img {
		width: 100%;
		height: 5rem;
		display: block;
	}
	.jieshao{
		width: 100%;
		height: 1.2rem;
		background: white;
		.top{
			width:100%;
			height:0.68rem;
			p{
				font-size: 0.2rem;
				color: #282828;
				padding: 0 0.13rem;
				font-weight: bold;
			}
		}
		.bottom{
			width:100%;
			height:0.5rem;
			position: relative;
			img{
				width: 1.9rem;
				height: 0.33rem;
				display: block;
				position: absolute;
				right: 0.15rem;
				top: 0;
			}
			span{
				font-size:0.2rem;
				color: #ff0800;
				position: absolute;
				left: 0.11rem;
				top: 0.07rem;
				
			}
			a{
				font-size:0.15rem;
				text-decoration: line-through;
				position: absolute;
				left: 0.8rem;
				top: 0.12rem;
			}
			
		}
	}
	.kucun{
		width:100%;
		height:0.68rem;
		margin-top: 0.02rem;
		background: white;
		font-size: 0.24rem;
		color: #282828;
		line-height: 0.68rem;
		span{
			margin-left: 0.13rem;
		}
		a{
			margin-left: 0.20rem;
		}
		
		
	}
	.guige{
		width:100%;
		height:0.68rem;
		margin-top: 0.16rem;
		background: white;
		font-size: 0.24rem;
		color: #282828;
		line-height: 0.68rem;
		a{
			margin-left: 0.13rem;
		}
	}
	.xiang{
		width:100%;
		height:0.68rem;
		margin-top: 0.16rem;
		background: white;
		line-height: 0.68rem;
		position: relative;
		img{
			width:0.12rem;
			height: 0.18rem;
			display: block;
			position: absolute;
			right:0.16rem ;
			top: 0.22rem;
		}
		a{
			color: #282828;
			font-size: 0.24rem;
			margin-left: 0.13rem;
		}
	}
	.pl{
		width:100%;
		height:0.68rem;
		margin-top: 0.02rem;
		background: white;
		line-height: 0.68rem;
		position: relative;
		img{
			width:0.12rem;
			height: 0.18rem;
			display: block;
			position: absolute;
			right:0.16rem ;
			top: 0.22rem;
		}
		a{
			color: #282828;
			font-size: 0.24rem;
			margin-left: 0.13rem;
		}
	}
	
	
}
</style>