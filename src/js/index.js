require(["config"], function(){
	require(["jquery","load"], function($){
		//自动轮播。大轮播图，淡入淡出的方式
		//获取所有的图片		
			var lis=$(".lb li"),
				len=lis.length,
				first=0,
				next=1;
			//获取小圆点
			var circle=$(".circle i"),
				jiange=3000;
			//定义一个轮播函数
			var _time=function(){
				$(lis[first]).fadeOut(600);
				$(lis[next]).fadeIn(600);
				$(circle[first]).css({
					"background":"white",
					"width": 14+"px",
	                "height": 14+"px",
	                "border-radius": 50+"%"
				})
				$(circle[next]).css({
					"background":"#ffc000",
					"width": 30+"px",
	                "height": 14+"px",
	                "border-radius": 5+"px"
					});
				first=next;
				next++;
				if(next>=len)
				next=0;
			};
		//启动自动轮播
		var	time=setInterval(_time,jiange);
		
		//绑定鼠标移入和移出事件
		$(".lunbo").mouseenter(function(){
			clearInterval(time);
		});
		$(".lunbo").mouseleave(function(){
			time=setInterval(_time,jiange);
		});
		//将获取到的小圆点转换成数组
		var circle=Array.from(circle);
		//通过事件委派获取点击到的小圆点的索引
		$(".circle").delegate("i","click",function(e){
			var index=$.inArray(this,circle);
			console.log(index);
				if(first===index)
				return;
				next=index;
				_time();
		})
		$(".jx").delegate(".gt","click",function(){
			$(".jx1 .uf1").css("margin-left",-1146+"px");
		});
		//定位楼层的位置
		//获取楼层的宽度和高度
		var lcW=$(".louceng").outerWidth(),
			lcH=$(".louceng").outerHeight();
		//获取窗口的宽度和高度
		var winW=$(window).innerWidth(),
			winH=$(window).innerHeight();
		var _w=winW-lcW,
			_h=winH-lcH;
			console.log(_w,_h);
		//设置css属性
		$(".louceng").css({
			"top":_h-18+"px",
			"left":_w-18+"px"
		});
		//给楼层设置显示与隐藏
			var _ve=$(".vebox").offset().top;
			$(window).scroll(function(){
				var _win=$(window).scrollTop();				    
				if(_win>=_ve)
				$(".louceng").css("display","block");
				else
				$(".louceng").css("display","none");
				
			});
						
		//通过事件委派给每个楼层绑定点击事件
		$(".louceng").delegate("li:not(:nth-child(10),:nth-child(11),:last)","click",function(){
				var _num=$(this).index(),
					_top=_ve+_num*520;				
				$("html,body").animate({scrollTop:_top},3000)
		});
		//给楼层里面的银犁商城绑定移入与移出事件
		$(".louceng .cl11").mouseenter(function(){
			$(".cl11 img").css("display","block")
		});
		$(".louceng .cl11").mouseleave(function(){
			$(".cl11 img").css("display","none")
		});
		$(".cl11 img").mouseenter(function(){
			$(".cl11 img").css("display","none")
		});
		$(".cl10 .sp-2").mouseenter(function(){
			$(".cl10 sp-2").css("display","block")
		});
		
//		$(".louceng").delegate("li:nth-child(12))","click",function(){
//				$("html,body").animate({scrollTop:0},3000)																		
//		});
	});
});