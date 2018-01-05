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
		})
	});
	$(".footer").load("/html/include/footer.html");
});