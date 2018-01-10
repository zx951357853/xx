require(["config"], function(){
	require(["jquery", "template", "load"], function($, template){
		// 异步加载列表页面数据，使用模板引擎渲染
		$.getJSON("../mock/list.json", function(data){
			// 准备渲染数据
			var renderData = {products : data.res_body.data};
			
			// 渲染数据
			var html = template("list_template", renderData);
			$(".main").html(html);
		});
		
		
		$(".main").on("click",".main1",function(){
			var index=$(this).index();
//				$.getJSON("../mock/list.json", function(data){
////					var send=data.res_body.data[index];
////						send=JSON.stringify(send)
//					var index=$(this).index();
						console.log(index)
					window.location.href=`http://localhost:8080/html/detail.html?${index}`;
//				})
//				console.log(index)
				
			
		});
		
	});
});