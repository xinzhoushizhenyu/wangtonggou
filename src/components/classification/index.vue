<template>
	<div>
		<myhead>
			<input type="search" slot="search" class="inputstyle keywords" value="请输入关键字" onfocus='if(this.value=="请输入关键字"){this.value="";}; ' onblur='if(this.value==""){this.value="请输入关键字";};' />
		</myhead>
		<main>
			<div class="species">
				<ul>
					<router-link :to="v.url" tag="li" v-for="(v,k) in species">{{v.name}}</router-link>
				</ul>
			</div>
			<div class="commodity">
				<router-view></router-view>
			</div>
		</main>
		<myfoot></myfoot>
	</div>
</template>
<script>
	import myhead from '@/components/header'
	import myfoot from '@/components/footer'
	export default {
		data() {
				return {
					species:[
					{id:1,name:"家用电器",url:"jydq"},
					{id:2,name:"食品饮料",url:"spyl"},
					{id:3,name:"个护美妆",url:"ghmz"},
					{id:4,name:"手机数码",url:"sjsm"},
					{id:5,name:"家居用品",url:"jjyp"},
					{id:6,name:"母婴玩具",url:"mywj"},
					{id:7,name:"电脑办公",url:"dnbg"},
					{id:8,name:"厨房用品",url:"cfyp"},
					{id:9,name:"服饰鞋包",url:"fsxb"},
					{id:10,name:"运动户外",url:"ydhw"},
					{id:11,name:"汽车摩托",url:"qcmt"},
					{id:12,name:"钟表饰品",url:"zbsp"},
					]
				}
			},
			components: {
				myhead,
				myfoot
			}
	}
</script>
<style scoped>
    main{
    	width: 100%;
    	height: auto;   	
    }
    .species{
    	float: left;
    	width: 25%;
    	position: absolute;
    	top: 0.72rem;
    	bottom: 1.04rem;
    	height: auto;
    	overflow: auto;
    }
    .species ul li {
    	height: 0.85rem;
    	font-size: 0.2rem;
    	text-align: center;
    	line-height: 0.84rem;
    	background-color: #f2f2f2;
    	border-top: 0.04rem solid #e7e7e7;
    }
    .species ul .router-link-active{
    	background-color: #fff;
    }
    .commodity{
    	float: left;
    	width: 73%;
    	height: auto;
    	position: absolute;
    	top: 0.72rem;
    	bottom: 1.04rem;
    	left: 25%;
    	overflow: auto;
    	margin-left: 2%;
    }
</style>