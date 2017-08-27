<template>
	<div>
		 <header-top>
            <div class="search" slot="search">
                <!--<img class="" src="../../../static/picture/public_titlebar_search.png" alt="">-->
                <input id="tex" type="text" @keyup="keys" v-model="name" placeholder="请输入关键词"/>
                <a>X</a>    
            </div>
           
		 </header-top>
        <div class="main">
        	<p><a>搜索历史</a></p>
        	<ul id="uu">
        		<li v-for="(item,index) in list">
        			<a>{{item.name}}</a>
        		</li>
        	</ul>
        	<div @click="clear">清空历史</div>   
        </div>
	</div>
</template>
<script>
import headerTop from '@/components/header'
export default{
    name:"search",
        data(){
            return { 
            	name:"",
            	list:[]
            }
        },
        methods:{
        	clear:function(){
        		this.list=[]
        	},
        	keys:function(){
        		this.list.push({
					name:this.name
				})
        		console.log(this.list)
        	}
        },
        mounted(){
        	var tex=document.getElementById("tex");
        	var aa=document.getElementsByTagName("a")[0];
        	var uu=document.getElementById("uu");
        	var ll=uu.getElementsByTagName("li");
        	var main=document.getElementsByClassName("main")[0];
        	var i2=document.getElementsByClassName("i2")[0];
        	var _this=this;
        	//点击清除内容
        	aa.onclick=function(){
        		tex.value="";
        		aa.style.display="none"
        	}
        	//松开键盘时
        	tex.onkeyup=function(){
        		aa.style.display="none"
	        	main.style.display="block";
        		if(tex.value!="")
        		{
        			aa.style.display="block"
        		}
        	}

        	
        },
        components:{
            headerTop,
        }
    }
</script>

<style lang="less" scoped>
	.search{
        /*width: 80%;
        height: 0.46rem;
        background: white;
        margin-left: 0.3rem;
         margin-top: 0.14rem;
        border-radius: 0.06rem;*/
        position:relative;
        a{
        	position: absolute;
        	top: 0.1rem;
   			right: 0.5rem;
   			font-size: 0.3rem;
   			color: gainsboro;
   			display: none;
        }        
    }
    .search .i1{
                width: 0.23rem;
                height: 0.23rem;
                position: relative;
                left:0.1rem ;
                top: 0.12rem;
        }
    .search input{
        width: 75%;
        height: 0.46rem;
        border:none;
        position: absolute;
        top: 0;
        left: 0.5rem;
        font-size: 0.18rem;
        outline: none;
    }
   	.i2{
   		width:0.3rem;
   		height:0.3rem;
   		position: absolute;
   		top: 0.23rem;
   		right: 0.31rem;
   	}
	.main{
		width: 100%;
		height: auto;
		position: fixed;
		top: 0.72rem;
		/*left: 0;*/
		bottom: 0;
		overflow-y: auto;
		display: none;
		box-sizing: border-box;
		p{
			width: 100%;
			height: 0.7rem;
			line-height: 0.7rem;
			/*border-bottom: 0.03rem solid #e9e9e9;*/
			/*padding-left: 0.16rem;*/
			font-size: 0.22rem;
			a{
				padding-left: 0.16rem;
			}
		}
		ul li{
			width: 100%;
			height: 0.7rem;
			line-height: 0.7rem;
			border-top: 0.03rem solid #e9e9e9;
			font-size: 0.22rem;
			a{
				padding-left: 0.16rem;
			}
		}
		div{
			width: 2.54rem;
			height: 0.69rem;
			border: 0.04rem solid #dbdbdb;
			border-radius: 0.1rem;
			color: #2f2f2f;
			text-align: center;
			line-height: 0.69rem;
			font-size: 0.2rem;
			margin: 0 auto;
			margin-top: 0.47rem;
		}
	}	
	



</style>