<template>
	<div>
		<myhead>
			<h4 slot="title">购物车</h4>
		</myhead>
		<main>
			<div class="details">
				<div class="store">
					<div class="selectall checked"></div>
					<h6>名品运动专卖店</h6>
				</div>
				<div class="commodity">
					<div class="select checked"></div>
					<dl>
						<dt><img src="../../assets/yx.jpg"/></dt>
						<dd>
							<p class="name">Bose SoundLink Mini 蓝牙扬声器II-白色</p>
							<p class="color">颜色分类:<span>白色</span></p>
							<p class="num">
								<span class="jq">￥240.00</span>
								<span class="gs">×1</span>
							</p>
						</dd>
					</dl>
				</div>
			</div>
		</main>
		<div class="bill">
			<div class="selectA checked"></div>
			<h6>全选</h6>
			<div class="btn">结算</div>
			<div class="prices">
				<p class="price">合集:<span>￥249.00</span></p>
				<p class="yf">不含运费</p>
			</div>
		</div>
		<myfoot></myfoot>
	</div>
</template>
<script>
	import myhead from '@/components/header'
	import myfoot from '@/components/footer'
	export default {
		data() {
				return {}
			},
			components: {
				myhead,
				myfoot
			}
	}
</script>
<style scoped>
	main {
		width: 100%;
		height: auto;
		position: absolute;
		top: 0.72rem;
		bottom: 1.76rem;
		background-color: #eeeeee;
		overflow: auto;
	}
	
	.details {
		width: 100%;
		height: auto;
	}
	
	.store h6 {
		float: left;
		font-size: 0.2rem;
	}
	
	.store {
		width: 100%;
		height: 0.66rem;
		line-height: 0.66rem;
		background-color: #fff;
		margin-top: 0.14rem;
	}
	
	.selectall {
		float: left;
		width: 0.26rem;
		height: 0.26rem;
		border: 0.01rem solid #eee;
		margin: 0.2rem 0.18rem 0;
		border-radius: 50%;
	}
	
	.checked {
		background-image: url(../../assets/yes.png);
		background-size: cover;
	}
	
	.commodity {
		width: 100%;
		height: 1.56rem;
		background-color: #f5f5f5;
		margin-bottom: 0.2rem;
	}
	
	.select {
		float: left;
		width: 0.26rem;
		height: 0.26rem;
		border: 0.01rem solid #eee;
		margin: 0.65rem 0.18rem 0;
		border-radius: 50%;
	}
	
	.commodity dl {
		float: left;
		margin-top: 0.12rem;
	}
	
	.commodity dl dt {
		float: left;
	}
	
	.commodity dl dt img {
		float: left;
		width: 1.33rem;
		height: 1.33rem;
	}
	
	.commodity dl dd {
		float: left;
		margin-left: 0.15rem;
		margin-right: 0.15rem;
		text-align: left;
	}
	
	.commodity dl dd p{
		height: 0.24rem;
		margin-bottom: 0.13rem;
	}
	.commodity dl dd .name{
		font-weight: bolder;
		width: 3rem;
		height: auto;
	}
	.commodity dl dd .color{
		color: #999999;
	}
	.commodity dl dd .num .jq{
		float: left;
	}
	.commodity dl dd .num .gs{
		float: right;
	}
	.bill{
		width: 100%;
		height: 0.72rem;
		background-color: #fff;
		position: absolute;
		bottom: 1.04rem;
		border-top:0.01rem solid #cacaca;
		line-height: 0.72rem;
	}
	.bill .selectA{
		float: left;
		width: 0.26rem;
		height: 0.26rem;
		border: 0.01rem solid #eee;
		margin: 0.21rem 0.18rem 0;
		border-radius: 50%;
	}
	h6 {
		float: left;
		font-size: 0.2rem;
	}
	.bill .btn{
		float: right;
		width: 1.44rem;
		text-align: center;
		background-color: #38b8ff;
		font-size: 0.24rem;
		color: #fff;
	}
	.bill .prices{
		float: right;
		height: 0.72rem;
		margin-right: 0.2rem;
		text-align: right;
	}
	.bill .prices p{
		height: 0.36rem;
		line-height: 0.36rem;
	}
	.bill .prices .yf{
		font-size: 0.14rem;
	}
	.bill .prices .price{
		font-size: 0.2rem;
	}
	.bill .prices .price span{
		color: #38b8ff;
	}
</style>