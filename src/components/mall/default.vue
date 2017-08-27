<template>
	<main>
	    <router-link to="/goods" tag="dl">
	    	<dt><img src="../../assets/yx.jpg"/></dt>
	    	<dd>
	    		<ul>
	    			<li>Bose SoundLink Mini蓝牙扬声器II-黑色-黑色-黑色</li>
	    			<li><b>￥99.00</b><span class="scx">￥169.00</span></li>
	    			<li><span class="pl">评论数:281</span></li>
	    		</ul>
	    	</dd>
	    </router-link>
	    <dl>
	    	<dt><img src="../../assets/yx.jpg"/></dt>
	    	<dd>
	    		<ul>
	    			<li>Bose SoundLink Mini蓝牙扬声器II-黑色</li>
	    			<li><b>￥99.00</b><span class="scx">￥169.00</span></li>
	    			<li><span class="pl">评论数:281</span></li>
	    		</ul>
	    	</dd>
	    </dl>
	    <dl>
	    	<dt><img src="../../assets/yx.jpg"/></dt>
	    	<dd>
	    		<ul>
	    			<li>Bose SoundLink Mini蓝牙扬声器II-黑色</li>
	    			<li><b>￥99.00</b><span class="scx">￥169.00</span></li>
	    			<li><span class="pl">评论数:281</span></li>
	    		</ul>
	    	</dd>
	    </dl>
	    <dl>
	    	<dt><img src="../../assets/yx.jpg"/></dt>
	    	<dd>
	    		<ul>
	    			<li>Bose SoundLink Mini蓝牙扬声器II-黑色</li>
	    			<li><b>￥99.00</b><span class="scx">￥169.00</span></li>
	    			<li><span class="pl">评论数:281</span></li>
	    		</ul>
	    	</dd>
	    </dl>
	    <dl>
	    	<dt><img src="../../assets/yx.jpg"/></dt>
	    	<dd>
	    		<ul>
	    			<li>Bose SoundLink Mini蓝牙扬声器II-黑色</li>
	    			<li><b>￥99.00</b><span class="scx">￥169.00</span></li>
	    			<li><span class="pl">评论数:281</span></li>
	    		</ul>
	    	</dd>
	    </dl>
	</main>
</template>
<style scoped>
    main{
    	width: 100%;
    	overflow: auto;
    	position: absolute;
    	top: 1.44rem;
    	bottom: 0;
    }
	dl{
		padding:0.17rem 0.12rem;
		background-color: #f5f5f5;
		border-bottom: 0.01rem solid #dbdbdb;
	}
	dl dt{
		float: left;
	}
	dl dt img{
		width: 1.37rem;
		height: 1.37rem;
	}
	dl dd{
		float: left;
		margin-left: 0.12rem;
		width: 70%;	
	}
	dl dd ul li{
		/*width: 3.6rem;*/
		font-size: 0.2rem;
		font-weight: bold;
	} 
	dl dd ul li b{
		font-size: 0.24rem;
		color: #f22700;
		font-weight: bold;
	}
	dl dd ul li .scx{
		color: #696969;
		font-size: 0.14rem;
		text-decoration:line-through;
		margin-left: 0.22rem;
	}
	dl dd ul li .pl{
		float: right;
		font-size: 0.16rem;
		color: #7a7a7a;
	}
</style>
<script>
	export default {
		name: 'default',
		data() {
			return {
				
			}
		}
	}
</script>