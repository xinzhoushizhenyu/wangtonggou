<template>
	<div>
		<myhead>
			<h4 slot="title">我的网通</h4>
		</myhead>
		<div class="main">
			<div class="tou">
				<img src="../../../static/imgs/profile_avatar_bg.png" id="nei" />
				<img src="../../../static/imgs/profile_no_avarta_icon.png" id="wai" />
				<router-link to="/login" tag="a">点击此处登录</router-link>
			</div>
			<div class="chuli">
				<dl>
					<dt><img class="i1" src="../../../static/imgs/QQ图片20170814201625_06.png"/></dt>
					<dd>
						<a>待处理</a>
					</dd>
				</dl>
				<dl>
					<dt><img class="i2" src="../../../static/imgs/QQ图片20170814201625_08.png"/></dt>
					<dd>
						<a>配送中</a>
					</dd>
				</dl>
				<dl class="d_t">
					<dt><img class="i3" src="../../../static/imgs/QQ图片20170814201625_03.png"/></dt>
					<dd>
						<a>已完成</a>
					</dd>
				</dl>
			</div>
			<div class="dingdan">
				<a>订单反馈</a>
				<img src="../../../static/imgs/item_right_arrow.png" />
			</div>
			<div class="dizhi">
				<a>地址管理</a>
				<img src="../../../static/imgs/item_right_arrow.png" />
			</div>
			<div class="youhui">
				<a>优惠券</a>
				<img src="../../../static/imgs/item_right_arrow.png" />
			</div>
			<div class="yuyue">
				<a>我的预约</a>
				<img src="../../../static/imgs/item_right_arrow.png" />
			</div>
			<div class="shezhi">
				<a>设置</a>
				<img src="../../../static/imgs/item_right_arrow.png" />
			</div>
		</div>
		<myfoot>

		</myfoot>
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
<style lang="less" scoped>
	.main{
		width: 100%;
		height: auto;
		background: #efefef;
		overflow-y: auto;
		position: fixed;
		top:0.72rem ;
		bottom: 0.96rem;
		.tou{
			width: 100%;
			height: 2.56rem;
			background: url(../../../static/imgs/profile_bg.png) no-repeat;
			background-size: 100% auto;
			position:relative;
			#wai{
				width: 0.93rem;
				height: 0.93rem;
				position: absolute;
				left: 2.21rem;
				top: 0.725rem;
			}
			#nei{
				width: 1.02rem;
				height: 1.02rem;
				position: absolute;
				left: 2.17rem;
				top: 0.7rem;
			}
			a{
				font-size: 0.25rem;
				color: white;
				position: absolute;
				left: 1.93rem;
				top: 1.85rem;
			}
		}
		.chuli{
			width: 100%;
			height: 1.24rem;
			background: #5a5d4a;
			display: flex;
			flex-direction:row;
			justify-content:space-around;
			align-items:center;
			.d_t{
				background:none;
			}
			dl{
			flex-grow: 1;
			background: url(../../../static/imgs/shu_03.png) no-repeat right  ;
			dt{
				text-align: center;
				height: 0.6rem;
				img{
					margin-top: 0.1rem;
				}
				.i1{
					width:0.48rem;
					height: 0.36rem;
				}
				.i2{
					width:0.48rem;
					height: 0.40rem;
				}
				.i3{
					width:0.48rem;
					height: 0.48rem;
				}
				}
				dd{
					text-align: center;
					a{
						font-size: 0.22rem;
						color: white;
					}
				}
			}
		}
		.dingdan{
			width: 100%;
			height: 0.83rem;
			background: white;
			margin-top:0.18rem;
			position: relative;
			img{
				width:0.12rem;
				height: 0.17rem;
				position: absolute;
				top: 0.33rem;
				right: 0.19rem;
			}
			a{
				line-height: 0.83rem;
				padding-left: 0.26rem;
				font-size: 0.22rem;
				color: black;
			}
		}
		.dizhi{
			width: 100%;
			height: 0.83rem;
			background: white;
			margin-top:0.18rem;
			position: relative;
			img{
				width:0.12rem;
				height: 0.17rem;
				position: absolute;
				top: 0.33rem;
				right: 0.19rem;
			}
			a{
				line-height: 0.83rem;
				padding-left: 0.26rem;
				font-size: 0.22rem;
				color: black;
			}
		}
		.youhui{
			width: 100%;
			height: 0.83rem;
			background: white;
			margin-top:0.18rem;
			position: relative;
			img{
				width:0.12rem;
				height: 0.17rem;
				position: absolute;
				top: 0.33rem;
				right: 0.19rem;
			}
			a{
				line-height: 0.83rem;
				padding-left: 0.26rem;
				font-size: 0.22rem;
				color: black;
			}
		}
		.yuyue{
			width: 100%;
			height: 0.83rem;
			background: white;
			margin-top:0.18rem;
			position: relative;
			img{
				width:0.12rem;
				height: 0.17rem;
				position: absolute;
				top: 0.33rem;
				right: 0.19rem;
			}
			a{
				line-height: 0.83rem;
				padding-left: 0.26rem;
				font-size: 0.22rem;
				color: black;
			}
		}
		.shezhi{
			width: 100%;
			height: 0.83rem;
			background: white;
			margin-top:0.18rem;
			position: relative;
			img{
				width:0.12rem;
				height: 0.17rem;
				position: absolute;
				top: 0.33rem;
				right: 0.19rem;
			}
			a{
				line-height: 0.83rem;
				padding-left: 0.26rem;
				font-size: 0.22rem;
				color: black;
			}
		}
	}
	
	
</style>