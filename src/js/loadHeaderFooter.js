// 定义模块，加载头部、尾部资源
define(["jquery"], function($){
	// 将 header.html 加载显示，绑定交互效果
	$.ajax("/html/include/header.html").done(function(data){
		$(".header").html(data);
	}).done(function(){
		//绑定键盘按键事件
		$(".seach-en .te").keyup(function(){
			var url="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+$(this).val()+"&cb=?";			
			$.getJSON(url,function(data){
				var html="";
				data.s.forEach(function(curr){
					html+="<div>"+curr+"</div>"
				})
				$(".info").html(html);
			})
			
			})
		//绑定失去光标事件
		$(".seach-en .te").blur(function(){
			$(".info").css("display","none");
		})
		//绑定点击事件
		$(".seach-en .te").click(function(){
			$(".info").css("display","block");
		});
		}).done(function(){
			$(window).scroll(function(){
				var _scrolltop=$(window).scrollTop(),
					seachWidth=$(".seach").outerWidth(),
//					seachHeight=$(".seach").outerHeight(),
					windowWidth=$(window).innerWidth();
//					windowHeight=$(window).innerHeight();
				var _left=(windowWidth-seachWidth)/2;
				console.log(_left);
				if(_scrolltop>=60){
					$(".u0tow").css({
						"top":"0",
						"position":"fixed",
						"z-index":"200",						
						"borderBottom":"2px solid #36c573"
						});
					
				}else{
					$(".u0tow").css({
						"top":60+"px",
						"left":"_left",						
						"borderBottom":"none"
					});					
				}
			});
//		var top=$(".u3").scrollTop(),
//		top1=$().scrollTop();
//		console.log(top1);
//		if(top1>=30){			
//			$(".seach").css({
//				"top":-30+"px",
//				"borderBottom":"1px solid #7bbe2b",
//				"background":"rgba(255,255,255,0.5)"
//			});
//		};
	});
//	});
	$(".footer").load("/html/include/footer.html");
});