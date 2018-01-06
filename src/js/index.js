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
		})
	});
});