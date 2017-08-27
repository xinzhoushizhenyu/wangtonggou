<template>
	<footer>
		<router-link to="/home" tag="dl" @click.native="a">
			<dt><img src="../../../static/picture/footer_home_active_icon.png" id="one"/></dt>
			<dd>首页</dd>
		</router-link>
		<router-link to="/classification" tag="dl"@click.native="b">
			<dt><img src="../../../static/picture/footer_category_icon.png" id="two"/></dt>
			<dd>分类</dd>
		</router-link>
		<router-link to="/shopping" tag="dl"@click.native="c">
			<dt><img src="../../../static/picture/footer_shoppingcart_icon.png" id="three"/></dt>
			<dd>购物车</dd>
		</router-link>
		<router-link to="/my" tag="dl"@click.native="d">
			<dt><img src="../../../static/picture/footer_user_icon.png" id="four"/></dt>
			<dd>我</dd>
		</router-link>
	</footer>
</template>
<script>
	export default{
		name:'footer',
		data(){
			return{		
				
			}
		},
		methods:{
			a(){
				var aa=document.getElementById("one");
        		var bb=document.getElementById("two");
        		var cc=document.getElementById("three");
        		var dd=document.getElementById("four");
        		aa.src="../../../static/picture/footer_home_active_icon.png";
                bb.src="../../../static/picture/footer_category_icon.png";
                cc.src="../../../static/picture/footer_shoppingcart_icon.png";
                dd.src="../../../static/picture/footer_user_icon.png";	
			},
			b(){
				var aa=document.getElementById("one");
        		var bb=document.getElementById("two");
        		var cc=document.getElementById("three");
        		var dd=document.getElementById("four");
        		aa.src="../../../static/picture/footer_home_icon.png";
                bb.src="../../../static/picture/footer_category_active_icon.png";
                cc.src="../../../static/picture/footer_shoppingcart_icon.png";
                dd.src="../../../static/picture/footer_user_icon.png";
			},
			c(){
				var aa=document.getElementById("one");
        		var bb=document.getElementById("two");
        		var cc=document.getElementById("three");
        		var dd=document.getElementById("four");
        		aa.src="../../../static/picture/footer_home_icon.png";
                bb.src="../../../static/picture/footer_category_icon.png";
                cc.src="../../../static/picture/footer_shoppingcart_active_icon.png";
                dd.src="../../../static/picture/footer_user_icon.png";
			},
			d(){
				var aa=document.getElementById("one");
        		var bb=document.getElementById("two");
        		var cc=document.getElementById("three");
        		var dd=document.getElementById("four");
        		aa.src="../../../static/picture/footer_home_icon.png";
                bb.src="../../../static/picture/footer_category_icon.png";
                cc.src="../../../static/picture/footer_shoppingcart_icon.png";
                dd.src="../../../static/picture/footer_user_active_icon.png";
			},
			
			
		}
	}
</script>
<style scoped>
	footer{
		width: 100%;
		position: absolute;
		bottom: 0;
		display: flex;
		flex-direction:row;
		justify-content:space-around;
		align-items:center;
		border-top:0.02rem solid #ebebeb;
		color: #464646;
	}
	dl{
		flex: 1;
	}
	dl dt{
		text-align: center;
	}
	dl dt img{
		width: 0.5rem;
		height: 0.5rem;
	}
	dl dd{
		font-size: 0.18rem;
		text-align: center;
	}
</style>