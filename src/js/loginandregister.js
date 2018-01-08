require(["config"],function(){
	require(["jquery"],function($){
		//给手机密码登录绑定点击事件
		$(".ulg2 .li21").click(function(){
			$(".lg3").css("display","none");
			$(".lg2").css("display","block");
			$(".lg").css("display","none");
		});
		$(".ulg2 .li22").click(function(){
			$(".lg3").css("display","block");
			$(".lg2").css("display","none");
			$(".lg").css("display","none");
		});
		//给手机验证码登录绑定点击事件
		$(".ulg3 .li31").click(function(){
			$(".lg2").css("display","block");
			$(".lg3").css("display","none");
			$(".lg").css("display","none");
			console.log(this)
		});
		$(".ulg3 .li32").click(function(){
			$(".lg2").css("display","none");
			$(".lg3").css("display","block");
			$(".lg").css("display","none");
			console.log(this)
		});
		//给手机验证码登录页面的注册账号绑定事件
		$(".mowei3 h3").click(function(){
			$(".lg2").css("display","none");
			$(".lg").css("display","block");
			$(".lg3").css("display","none");
		});
		//给手机登录页面的注册账号绑定点击事件
		$(".mowei2 h3").click(function(){
			$(".lg2").css("display","none");
			$(".lg").css("display","block");
			$(".lg3").css("display","none");
		});
		//给注册账号页面的手机验证码登录绑定事件
		$(".ulg1 .li11").click(function(){
			$(".lg").css("display","none");
			$(".lg2").css("display","block");
			$(".lg3").css("display","none");
		});
		//给注册账号页面的手机密码登录绑定事件
		$(".ulg1 .li12").click(function(){
			$(".lg").css("display","none");
			$(".lg3").css("display","block");
			$(".lg2").css("display","none");
		});
		//给导航上面的登录绑定事件
		$(".u0").click(function(){
			$(".lg").css("display","none");
			$(".lg2").css("display","block");
			$(".lg3").css("display","none");
		})
	});
});