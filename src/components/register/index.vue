<template>
	<div>
		<myhead>
			<h4 slot="title">马上注册</h4>
		</myhead>
        <div class="main">
	        <div class="phone">
				<input type="text" placeholder="请输入手机号码" />
			</div>
			<div class="next">
				下一步
			</div>
			<p class="acept">点击下一步表示同意<a>网通用户服务协议</a></p>
	
        </div>
        
        
        
	</div>
		
</template>

<script>
	import myhead from '@/components/header'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			myhead
		}
	}
	
</script>

<style lang="less" scoped>
	.head{
		position: fixed;
		top: 0;
		left: 0;
	}
	.one{
        font-size: 0.3rem;
        color: white;
        display: block;
        margin-left: 0.15rem ;
        line-height: 0.72rem;
    }
    .main{
    	width: 100%;
    	height: auto;
    	position: fixed;
    	top:0.72rem;
    	bottom: 0;
    	background: #eee;
    	.phone{
	    	width: 100%;
	    	height: 0.69rem;
	    	background: #ffffff;
	    	margin-top: 0.15rem;
	    	input{
	    		border: 0;
	    		width: 100%;
	    		height: 0.69rem;
	    		box-sizing: border-box;
	    		font-size: 0.23rem;
	    		padding-left:0.1rem ;
	    		outline: none;
	    	}

    	}
    	.next{
    		width: 95%;
    		height: 0.7rem;
    		margin: 0 2.5%;
    		background: #d51413;
    		border-radius: 0.1rem;
    		text-align: center;
    		line-height: 0.7rem;
    		font-size: 0.23rem;
    		color: white;
    		cursor: pointer;
    		margin-top: 0.5rem;
    	}
    	p{
    		font-size: 0.21rem;
    		padding-left:0.3rem ;
    		margin-top: 0.3rem;
    		a{
    			font-size: 0.21rem;
    			color: #42B983;
    		}
    	}
    }
    
</style>