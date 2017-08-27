<template>
	<div>
		<myhead>
			<h4 slot="title">商品评论</h4>
		</myhead>
		<div class="main">
			<div class="well">
				<div class="shang">
					<span>好评率:</span><a>99.3%</a>
				</div>
				<div class="xia">
					<dl class="one">
						<dt>
							<span>
								99.0%
							</span>
						</dt>
						<dd>好评数<a>(150)</a></dd>
					</dl>
					<dl class="two">
						<dt>
							<span>
								0.0%
							</span>
						</dt>
						<dd>中评数<a>(1)</a></dd>
					</dl>
					<dl class="three">
						<dt>
							<span>
								0.0%
							</span>
						</dt>
						<dd>差评数<a>(0)</a></dd>
					</dl>
				</div>
			</div>
			<div class="lun">
				<img src="../../../static/imgs/zuan.jpg"/>
				<p><b>3200417</b> <a>2017/03/10 20:56</a></p>
				<p>优点:价格便宜</p>
				<p>不足:暂时没有发现缺点</p>
			</div>
<div class="lun">
				<img src="../../../static/imgs/zuan.jpg"/>
				<p><b>3200417</b> <a>2017/03/10 20:56</a></p>
				<p>优点:价格便宜</p>
				<p>不足:暂时没有发现缺点</p>
			</div>
			<div class="lun">
				<img src="../../../static/imgs/zuan.jpg"/>
				<p><b>3200417</b> <a>2017/03/10 20:56</a></p>
				<p>优点:价格便宜</p>
				<p>不足:暂时没有发现缺点</p>
			</div>
			<div class="lun">
				<img src="../../../static/imgs/zuan.jpg"/>
				<p><b>3200417</b> <a>2017/03/10 20:56</a></p>
				<p>优点:价格便宜</p>
				<p>不足:暂时没有发现缺点</p>
			</div>
			<div class="lun">
				<img src="../../../static/imgs/zuan.jpg"/>
				<p><b>3200417</b> <a>2017/03/10 20:56</a></p>
				<p>优点:价格便宜</p>
				<p>不足:暂时没有发现缺点</p>
			</div>
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
		myhead
	}
}
</script>

<style lang="less" scoped>
* {
	margin: 0;
	padding: 0;
}

.top {
	width: 100%;
	height: 0.68rem;
	background: #d73334;
	line-height: 0.68rem;
	a {
		color: white;
		font-size: 0.3rem;
		margin-left: 0.18rem;
	}
}

.main {
	width: 100%;
	position: fixed;
	top: 0.68rem;
	bottom: 0;
	overflow-y: auto;
	.well {
		width: 100%;
		height: 2.1rem;
		background: #eeeeee;
		.shang {
			width: 100%;
			height: 0.65rem;
			line-height: 0.65rem;
			span {
				font-size: 0.24rem;
				margin-left: 0.13rem;
			}
			a {
				font-size: 0.24rem;
				color: #f80813;
			}
		}
		.xia {
			width: 100%;
			height: 1.44rem;
			display: flex;
			flex-direction: row;
			dl {
				flex: 1;
				dt {
					margin: 0 auto;
					span {
						font-size: 0.2rem;
					}
				}
				dd {
					text-align: center;
					margin-top: 0.13rem;
					color: #737373;
					font-size: 0.2rem;
				}
			}
			.one {
				dt {
					width: 0.92rem;
					height: 0.92rem;
					border: 0.03rem solid #ee0007;
					border-radius: 50%;
					text-align: center;
					line-height: 0.92rem;
				}
			}
			.two {
				dt {
					width: 0.92rem;
					height: 0.92rem;
					border: 0.01rem solid #ee0007;
					border-radius: 50%;
					text-align: center;
					line-height: 0.92rem;
				}
			}
			.three {
				dt {
					width: 0.92rem;
					height: 0.92rem;
					border: 0.01rem solid #ee0007;
					border-radius: 50%;
					text-align: center;
					line-height: 0.92rem;
				}
			}
		}
	}
	.lun {
		width: 95%;
		height: 1.45rem;
		margin: 0 2.5%;
		border-bottom: 0.04rem solid #eeeeee;
		margin: 0 0.14rem;
		position: relative;
		overflow: hidden;
		img {
			position: absolute;
			top: 0.45rem;
			width: 0.64rem;
			height: 0.5rem;
			display: block;
		}
		p {
			font-size: 0.21rem;
			color: #686868;
			margin-left: 0.8rem;
			margin-top: 0.07rem;
			position: relative;
			b {
				color: #000000;
				font-size: 0.2rem;
			}
			a {
				font-size: 0.18rem;
				position: absolute;
				right: 0;
			}
		}
	}
}</style>