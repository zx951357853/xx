require(["config"],function(){
	require(["jquery","cookie"],function($){
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
		
		//创建正则判断是否为手机号码
		var reg=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g;						
		//给输入框绑定失去光标的事件
//		console.log(typeof num)
		$("#lg21").blur(function(){
			//获取输入的手机号
			var num=$("#lg21").val();
			//判断
			if(reg.test(num)==true){
			$(".inp2").html("手机号输入正确");
			}else{
			$(".inp2").html("手机号输入不正确，请重新输入");
			}			
		});
		
		//注册
		$(".lgp11").blur(function(){
			//获取输入的手机号
			var _num=$(".lgp11").val();
			//判断
			if(reg.test(_num)==true){
			$(".lgp1").html("手机号输入正确");
			}else{
			$(".lgp1").html("手机号输入不正确，请重新输入");
			}			
		});
		//设置图片验证码
		function generate(){
				var url = "http://route.showapi.com/932-2?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7";
				$.getJSON(url, function(data){
					// 设置图片的 src 属性，显示出验证码
					$(".lgp4").attr("src", data.showapi_res_body.image);
					// 缓存 sid 用于验证码校验
					$(".lgp4").data("sid", data.showapi_res_body.sid);
				});
		}
			generate();
			$(".lgp4").click(generate);			
			$(".lgp41").blur(function(){
				// 获取输入的字符串
				var _input = $(".lgp41").val();
				// sid
				var _sid = $(".lgp4").data("sid");
				// url
				var url = `http://route.showapi.com/932-1?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&checkcode=${_input}&sid=${_sid}`;
				// getJSON
				$.getJSON(url, function(data){
					if(data.showapi_res_body.valid)
						$(".lgp5").text("验证成功");
					else
						$(".lgp5").text("输入验证码有误");
				})
			});
			//注册	
			
			$("#longin").click(function(){
				
			var user=$(".lgp11").val(),
				_password=$(".lgp31").val();				
		 	var	values={
				"name":user,
				"value":_password
			};	
			if(user==''){
				$(".lgp1").html("请输入账号");
				$("#longin").attr("disabled","true");		
			}else{
				//判断是否存在cookie
			var _users=$.cookie("users");				
			if(_users){
			_users=JSON.parse(_users);
			_users=Array.from(_users);
			}
			else
			_users=[];
//			console.log(_users)
			//判断values里面的name是否存在于cookie中
//			var c=_users.name;
//			console.log(c)
			var index=$.inArray(values.name,_users.name);
//			console.log(index);
			if(index==-1)
				_users.push(values);
			else
			$(".lgp1").html("该账号以存在");			
			$.cookie("users",JSON.stringify(_users),{expires:1});
			var a=$.cookie("users");
			console.log(a)
			}
			
							
		});
				
	});
});