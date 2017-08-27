<template>
	<div>
		<myhead>
			<!--<input type="search" slot="search" class="inputstyle keywords" value="请输入关键字" onfocus='if(this.value=="请输入关键字"){this.value="";}; ' onblur='if(this.value==""){this.value="请输入关键字";};' />-->
			<!--<router-link to="/search" tag="input" slot="search" class="inputstyle keywords" value="请输入关键字" onfocus='if(this.value=="请输入关键字"){this.value="";}; ' onblur='if(this.value==""){this.value="请输入关键字";};'>请输入关键词</router-link>-->
			<div class="search" slot="search">
                <img src="../../../static/picture/public_titlebar_search.png" alt="">
                <router-link to="/one" tag="a">请输入关键词</router-link>
            </div>
		</myhead>
		<main>
			<swiper :options="setOption">
				<swiper-slide v-for="(v,y) in list">
					<img :src="v.url" />
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
				<div class="swiper-button-prev" slot="button-prev"></div>
				<div class="swiper-button-next" slot="button-next"></div>
			</swiper>
			<div class="nav">
				<router-link to="/cuxiao" tag="dl">
					<dt><img src="../../assets/icon_cuxiao.png"></dt>
					<dd class="animated shake">活动促销</dd>
				</router-link>

				<router-link to="/dingzhi" tag="dl">
					<dt><img src="../../assets/icon_dingzhi.png"></dt>
					<dd>我要定制</dd>
				</router-link>
				<dl>
					<dt><img src="../../assets/icon_ingyue.png"></dt>
					<dd>预约中心</dd>
				</dl>
				<dl>
					<dt><img src="../../assets/icon_chaxun.png"></dt>
					<dd>订单查询</dd>
				</dl>
			</div>
			<div class="selling">
				<div class="left">
					<img src="../../assets/123.jpg" />
				</div>
				<div class="right">
					<div class="top">
						<dl>
							<dt>
								<h4>特价商品</h4>
								<p>伊利牛奶</p>
							</dt>
							<dd><img src="../../assets/hot1.jpg" /></dd>
						</dl>
					</div>
					<div class="botton">
						<dl>
							<dt>
								<h4>热卖商品</h4>
								<p>乐视max</p>
							</dt>
							<dd><img src="../../assets/hot2.jpg" /></dd>
						</dl>
					</div>
				</div>
			</div>
			<div class="lun">
				<div class="title">
					<h4>手机专享</h4>
					<span>秒杀</span>
				</div>
				<div class="main">
					<div class="kuaiall">
						<dl class="kuai" v-for="(v,k) in lun">
							<dt><img :src="v.url"/></dt>
							<dd>
								<p class="jj">{{v.jj}}</p>
								<p class="sj">{{v.sj}}</p>
							</dd>
						</dl>
					</div>
				</div>
			</div>
			<div class="img-all">
				<img src="../../assets/225.png" />
			</div>
			<div class="sells">
				<div class="title">
					<h4>热卖市场</h4>
				</div>
				<div class="selling1">
					<div class="left">
						<img src="../../assets/123.jpg" />
					</div>
					<div class="right">
						<div class="top">
							<dl>
								<dt>
								<h4>特价商品</h4>
								<p>伊利牛奶</p>
							</dt>
								<dd><img src="../../assets/hot1.jpg" /></dd>
							</dl>
						</div>
						<div class="botton">
							<dl>
								<dt>
								<h4>热卖商品</h4>
								<p>乐视max</p>
							</dt>
								<dd><img src="../../assets/hot2.jpg" /></dd>
							</dl>
						</div>
					</div>
				</div>
				<div class="recommends">
					<div class="recommend" v-for="(v,k) in lun">
						<dl>
							<dt>{{v.name}}</dt>
							<dd><img :src="v.url" /></dd>
						</dl>
					</div>
				</div>
			</div>
			<div class="img-all">
				<img src="../../assets/225.png" />
			</div>
			<div class="three">
				<div class="one">
					<div class="h1">
						热卖电器
					</div>
					<div class="h4">商品一</div>
					<img src="../../../static/imgs/fre_1.jpg" />
				</div>
				<div class="one">
					<div class="h2">
						热卖电器
					</div>
					<div class="h4">商品一</div>
					<img src="../../../static/imgs/fre_1.jpg" />
				</div>
				<div class="one">
					<div class="h3">
						热卖电器
					</div>
					<div class="h4">商品一</div>
					<img src="../../../static/imgs/fre_1.jpg" />
				</div>
			</div>
			<div class="brands">
				<div class="title">
					<h4>品牌特惠</h4>
				</div>
				<div class="brand" v-for="(v,k) in brand">
					<img :src="v.src" />
				</div>
			</div>
			<div class="goods">
				<div class="title">
					<h4>为您推荐</h4>
				</div>
				<div class="good" v-for="(v,k) in lun">
					<dl>
						<dt><img :src="v.url"/></dt>
						<dd>
							<p class="name">{{v.name}}</p>
							<p class="price">
								<span class="jj">{{v.jj}}</span>
								<span class="sj">{{v.sj}}</span>
							</p>
						</dd>
					</dl>
				</div>
			</div>
		</main>
		<myfoot></myfoot>
	</div>
</template>
<script>
	import myhead from '@/components/header'
	import myfoot from '@/components/footer'
	import {
		swiper,
		swiperslide
	} from 'vue-awesome-swiper'
	import "swiper/dist/css/swiper.css"
	export default {
		data() {
				return {
					list: [{
						url: "../../../static/imgs/1.jpg"
					}, {
						url: "../../../static/imgs/2.jpg"
					}, {
						url: "../../../static/imgs/3.jpg"
					}],
					brand: [{
						src: "../../../static/imgs/pp1.jpg"
					}, {
						src: "../../../static/imgs/pp2.png"
					}, {
						src: "../../../static/imgs/pp3.png"
					}, {
						src: "../../../static/imgs/pp1.jpg"
					}, {
						src: "../../../static/imgs/pp2.png"
					}, {
						src: "../../../static/imgs/pp3.png"
					}],
					lun: [{
						url: "../../../static/imgs/fre_1.jpg",
						name: "秋风美蟹",
						jj: "￥45.8",
						sj: "￥65.0"
					}, {
						url: "../../../static/imgs/fre_2.jpg",
						name: "秋风美蟹",
						jj: "￥45.8",
						sj: "￥65.0"
					}, {
						url: "../../../static/imgs/fre_3.jpg",
						name: "商品二",
						jj: "￥45.8",
						sj: "￥65.0"
					}, {
						url: "../../../static/imgs/fre_4.jpg",
						name: "商品三",
						jj: "￥45.8",
						sj: "￥65.0"
					}, {
						url: "../../../static/imgs/fre_5.jpg",
						name: "商品四",
						jj: "￥45.8",
						sj: "￥65.0"
					}, {
						url: "../../../static/imgs/fre_6.jpg",
						name: "商品五",
						jj: "￥45.8",
						sj: "￥65.0"
					}],
					setOption: {
						pagination: '.swiper-pagination',
						nextButton: '.swiper-button-next',
						prevButton: '.swiper-button-prev',
						autoplay: 3000,
						loop: true
					}
				}
			},
			components: {
				myhead,
				myfoot,
				swiper,
				swiperslide
			}
	}
</script>
<style lang="less" scoped>
.search{
        width: 5rem;
        height: 0.46rem;
        background: white;
        margin: 0 auto;
         /*margin-top: 0.14rem;*/
        border-radius: 0.06rem;
        position:relative;
        top:0.14rem;
            
    }
    .search img{
                width: 0.23rem;
                height: 0.23rem;
        		/*margin: 0.12rem 0 0 0.1rem;*/
        		position:absolute;
        		top:0.12rem;
        		left: 0.1rem;
        }
    .search a{
        position:absolute;
        left: 0.47rem;
        top: 0.11rem;
        font-size: 0.18rem;
        color: #7a7a7a;
        
    }
	main {
		width: 100%;
		position: absolute;
		top: 0.72rem;
		bottom: 1.04rem;
		background-color: #eeeeee;
		overflow: auto;
		.swiper-wrapper {
			width: 100%;
			height: 2.9rem;
			.swiper-slide img {
				width: 100%;
				height: 2.9rem;
			}
		}
		.nav {
			width: 100%;
			height: 1.6rem;
			font-size: 0.2rem;
			background: white;
			dl {
				width: 25%;
				float: left;
				text-align: center;
				margin-top: 0.2rem;
				dt {
					img {
						width: 0.81rem;
						height: 0.81rem;
					}
				}
			}
		}
		.selling {
			width: 100%;
			height: 2.7rem;
			background-color: #fff;
			margin-top: 0.15rem;
			.left {
				float: left;
				border-right: 0.01rem solid #f4f4f4;
				box-sizing: border-box;
				width: 50%;
				height: 2.7rem;
				img {
					width: 100%;
					height: 2.7rem;
				}
			}
			.right {
				float: left;
				width: 50%;
				height: 2.7rem;
				border-left: 0.01rem solid #f4f4f4;
				box-sizing: border-box;
				.top {
					height: 1.3rem;
					border-bottom: 0.01rem solid #f4f4f4;
					dl {
						dt {
							float: left;
							h4 {
								font-size: 0.2rem;
								margin: 0.2rem 0.15rem;
								font-weight: 600;
							}
							p {
								color: #a7a7a7;
								margin-left: 0.15rem;
								font-size: 0.16rem;
							}
						}
						dd {
							float: right;
							height: 1.3rem;
							margin-right: 0.1rem;
							img {
								width: 1.25rem;
								height: 1.25rem;
							}
						}
					}
				}
				.botton {
					height: 1.3rem;
					dl {
						dt {
							float: left;
							h4 {
								font-size: 0.2rem;
								margin: 0.2rem 0.15rem;
								font-weight: 600;
							}
							p {
								color: #a7a7a7;
								margin-left: 0.15rem;
								font-size: 0.16rem;
							}
						}
						dd {
							float: right;
							height: 1.3rem;
							margin-right: 0.1rem;
							img {
								width: 1.25rem;
								height: 1.25rem;
							}
						}
					}
				}
			}
		}
		.lun {
			width: 100%;
			height: 2.95rem;
			background-color: #fff;
			margin-top: 0.15rem;
			.title {
				width: 100%;
				height: 0.6rem;
				line-height: 0.6rem;
				border-bottom: 0.01rem solid #f3f3f3;
				background-size: 0.2rem 0.2rem;
				background-repeat: no-repeat;
				background-position: right center;
				background-image: url(../../../static/imgs/item_right_arrow.png);
				h4 {
					padding-left: 0.15rem;
					float: left;
					font-size: 0.24rem;
					font-weight: 600;
				}
				span {
					float: left;
					font-size: 0.24rem;
					font-weight: bold;
					color: #ff4420;
					margin-left: 0.3rem;
				}
			}
			.main {
				width: 100%;
				height: 2.3rem;
				overflow: auto;
				.kuaiall {
					width: 10.57rem;
				}
				.kuai {
					float: left;
					width: 1.5rem;
					height: 2.3rem;
					border-right: 0.01rem solid #f3f3f3;
					dt {
						img {
							width: 1.5rem;
							height: 1.5rem;
						}
					}
					dd {
						text-align: center;
						.jj {
							font-size: 0.16rem;
							font-weight: 600;
							color: #ff5a39;
						}
						.sj {
							font-size: 0.16rem;
							font-weight: 600;
							color: #979797;
							text-decoration: line-through;
						}
					}
				}
			}
		}
		.img-all {
			width: 100%;
			height: 1.5rem;
			margin-top: 0.15rem;
			img {
				width: 100%;
				height: 1.5rem;
			}
		}
		.sells {
			width: 100%;
			height: 7.2rem;
			background-color: #fff;
			margin-top: 0.15rem;
			.title {
				width: 100%;
				height: 0.6rem;
				line-height: 0.6rem;
				border-bottom: 0.01rem solid #f3f3f3;
				background-size: 0.2rem 0.2rem;
				background-repeat: no-repeat;
				background-position: right center;
				background-image: url(../../../static/imgs/item_right_arrow.png);
				h4 {
					padding-left: 0.15rem;
					float: left;
					font-size: 0.24rem;
					font-weight: 600;
				}
			}
			.selling1 {
				width: 100%;
				height: 2.7rem;
				background-color: #fff;
				.left {
					float: left;
					border-right: 0.01rem solid #f4f4f4;
					box-sizing: border-box;
					width: 50%;
					height: 2.7rem;
					img {
						width: 100%;
						height: 2.7rem;
					}
				}
				.right {
					float: left;
					width: 50%;
					height: 2.7rem;
					border-left: 0.01rem solid #f4f4f4;
					box-sizing: border-box;
					.top {
						height: 1.3rem;
						border-bottom: 0.01rem solid #f4f4f4;
						dl {
							dt {
								float: left;
								h4 {
									font-size: 0.2rem;
									margin: 0.2rem 0.15rem;
									font-weight: 600;
								}
								p {
									color: #a7a7a7;
									margin-left: 0.15rem;
									font-size: 0.16rem;
								}
							}
							dd {
								float: right;
								height: 1.3rem;
								margin-right: 0.1rem;
								img {
									width: 1.25rem;
									height: 1.25rem;
								}
							}
						}
					}
					.botton {
						height: 1.3rem;
						dl {
							dt {
								float: left;
								h4 {
									font-size: 0.2rem;
									margin: 0.2rem 0.15rem;
									font-weight: 600;
								}
								p {
									color: #a7a7a7;
									margin-left: 0.15rem;
									font-size: 0.16rem;
								}
							}
							dd {
								float: right;
								height: 1.3rem;
								margin-right: 0.1rem;
								img {
									width: 1.25rem;
									height: 1.25rem;
								}
							}
						}
					}
				}
			}
			.recommends {
				width: 100%;
				height: 4rem;
				.recommend {
					float: left;
					width: 33%;
					height: 2rem;
					border-top: 0.01rem solid #f4f4f4;
					border-right: 0.01rem solid #f4f4f4;
					box-sizing: border-box;
					dl {
						text-align: center;
						dt {
							height: 0.62rem;
							line-height: 0.62rem;
							font-size: 0.2rem;
							font-weight: 500;
						}
						dd {
							img {
								width: 1.56rem;
								height: 1.15rem;
							}
						}
					}
				}
			}
		}
		.three {
			width: 100%;
			height: 2.6rem;
			background-color: #fff;
			margin-top: 0.15rem;
			.one {
				float: left;
				width: 33%;
				height: 2.6rem;
				text-align: center;
				border-bottom: 0.01rem solid #f4f4f4;
				border-right: 0.01rem solid #f4f4f4;
				.h1 {
					width: 1.35rem;
					height: 0.42rem;
					line-height: 0.42rem;
					background-color: #00a5e2;
					font-size: 0.26rem;
					color: #fff;
					margin: 0 auto;
				}
				.h2 {
					width: 1.35rem;
					height: 0.42rem;
					line-height: 0.42rem;
					background-color: #ffa800;
					font-size: 0.26rem;
					color: #fff;
					margin: 0 auto;
				}
				.h3 {
					width: 1.35rem;
					height: 0.42rem;
					line-height: 0.42rem;
					background-color: #b343e7;
					font-size: 0.26rem;
					color: #fff;
					margin: 0 auto;
				}
				.h4 {
					height: 0.46rem;
					line-height: 0.46rem;
					font-size: 0.2rem;
					margin: 0 auto;
					color: #737373;
				}
				img {
					margin-top: 0.18rem;
					width: 1.56rem;
					height: 1.15rem;
				}
			}
		}
		.brands {
			width: 100%;
			height: 3rem;
			margin-top: 0.15rem;
			background-color: #fff;
			.title {
				width: 100%;
				height: 0.6rem;
				line-height: 0.6rem;
				border-bottom: 0.01rem solid #f3f3f3;
				background-size: 0.2rem 0.2rem;
				background-repeat: no-repeat;
				background-position: right center;
				background-image: url(../../../static/imgs/item_right_arrow.png);
				h4 {
					padding-left: 0.15rem;
					float: left;
					font-size: 0.24rem;
					font-weight: 600;
				}
			}
			.brand {
				float: left;
				width: 33%;
				height: 1.2rem;
				border-bottom: 0.01rem solid #f4f4f4;
				border-right: 0.01rem solid #f4f4f4;
				text-align: center;
				img {
					margin-top: 0.4rem;
					width: 1.4rem;
					height: 0.5rem;
				}
			}
		}
		.goods {
			width: 100%;
			height: auto;
			background-color: #fff;
			margin-top: 0.15rem;
			.title {
				width: 100%;
				height: 0.6rem;
				line-height: 0.6rem;
				border-bottom: 0.01rem solid #f3f3f3;
				background-size: 0.2rem 0.2rem;
				background-repeat: no-repeat;
				background-position: right center;
				background-image: url(../../../static/imgs/item_right_arrow.png);
				h4 {
					padding-left: 0.15rem;
					float: left;
					font-size: 0.24rem;
					font-weight: 600;
				}
			}
			.good {
				width: 50%;
				height: 3rem;
				float: left;
				border-bottom: 0.01rem solid #f4f4f4;
				border-right: 0.01rem solid #f4f4f4;
				box-sizing: border-box;
				text-align: center;
				dl {
					dt {
						img {
							width: 1.8rem;
							height: 1.8rem;
							margin-top: 0.2rem;
						}
					}
					dd {
						.name {
							width: 2.37rem;
							font-size: 0.2rem;
							margin: 0 auto;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							text-align: left;
						}
						.price {
							width: 2.37rem;
							margin: 0 auto;
							text-align: left;
							.jj {
								font-size: 0.16rem;
								font-weight: 600;
								color: #ff5a39;
							}
							.sj {
								font-size: 0.14rem;
								font-weight: 600;
								color: #979797;
								text-decoration: line-through;
								margin-left: 0.35rem;
							}
						}
					}
				}
			}
		}
	}
</style>