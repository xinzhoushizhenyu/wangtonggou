<template>
	<div>
		<myhead>
			<h4 slot="title">登录</h4>
		</myhead>
        <div class="main">
        	<div class="username">
				<img src="../../../static/imgs/user.jpg"/>
				<input type="text" placeholder="网通账号/手机号/邮箱" />
			</div>
			<div class="password">
				<img src="../../../static/imgs/pas.jpg"/>
				<input type="text" placeholder="请输入密码"/>
			</div>
			<div class="mem">
				<input type="checkbox" id="zi" /><label for="zi">自动登录</label> 
				<a>忘记密码</a>
			</div>
			
			<div class="log">
				登录
			</div>
			
			<div class="register">
				<a>还没有网通账号？</a>
				<router-link to="/register" tag="div" class="zhuce">马上注册</router-link>
			</div>
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
		components: {
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
        font-size: 0.32rem;
        color: white;
        display: block;
        line-height:0.72rem;
        margin-left: 0.15rem;
    }
    .main{
    	position: fixed;
    	top: 0.72rem;
    	bottom: 0;
    	width: 100%;
    	height: auto;
    	background: #eee;
    	overflow-y: auto;
    	.username{
	    	width: 100%;
	    	height: 0.69rem;
	    	background: #ffffff;
	    	margin-top: 0.29rem;
	    	position:relative;
	    	img{
	    		width: 0.31rem;
	    		height: 0.33rem;
	    		position: absolute;
	    		left: 0.2rem;
	    		top: 0.2rem;
	    	}
	    	input{
	    		border: 0;
	    		width: 100%;
	    		height: 0.69rem;
	    		padding-left: 0.7rem;
	    		box-sizing: border-box;
	    		font-size: 0.23rem;
	    		outline: none;
	    		
	    	}

    	}
    	.password{
    		width: 100%;
	    	height: 0.69rem;
	    	background: #ffffff;
	    	margin-top: 0.02rem;
	    	position:relative;
	    	img{
	    		width: 0.33rem;
	    		height: 0.43rem;
	    		position: absolute;
	    		left: 0.2rem;
	    		top: 0.14rem;
	    	}
	    	input{
	    		border: 0;
	    		width: 100%;
	    		height: 0.69rem;
	    		padding-left: 0.7rem;
	    		box-sizing: border-box;
	    		font-size: 0.23rem;
	    		outline: none;
	    		
	    	}
    	}
    	.mem{
    		width: 100%;
    		height: 0.93rem;
    		/*background: pink;*/
    		line-height: 0.93rem;
    		color: #000;
    		position: relative;
    		label{
    			font-size: 0.18rem;
    			position: absolute;
    			left: 0.57rem;
    		}
    		a{
    			font-size: 0.18rem;
    			position: absolute;
    			right: 0.23rem;
    		}
    		input{
    			width: 0.25rem;
    			height: 0.25rem;
    			position: absolute;
    			left: 0.20rem;
    			top: 0.35rem;
    		}
    	}
    	.log{
    		width: 95%;
    		height: 0.7rem;
    		margin: 0 2.5%;
    		background: #d51413;
    		border-radius: 0.1rem;
    		text-align: center;
    		line-height: 0.7rem;
    		font-size: 0.22rem;
    		color: white;
    		cursor: pointer;
    	}
		
		.register{
			width: 100%;
			height: 1.6rem;
			position: relative;
			line-height: 1.6rem;
			a{
				font-size: 0.2rem;
				color: #2f2f2f;
				position: absolute;
				left: 0.26rem;
			}
			.zhuce{
				width: 2.54rem;
				height: 0.69rem;
				border: 0.04rem solid #dbdbdb;
				border-radius: 0.1rem;
				color: #2f2f2f;
				text-align: center;
				line-height: 0.69rem;
				font-size: 0.2rem;
				position: absolute;
				right: 0.16rem;
				top: 0.38rem;
			}
			
			
		}
		
    	
    	
    }
    
</style>