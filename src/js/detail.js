require(["config"], function(){
	require(["jquery","template","load"], function($,template){
		var index=location.search.substr(1);
//		var c=decodeURIComponent(ab);
		$.getJSON("../mock/list.json", function(data){
			console.log(data)
			// 准备渲染数据
			var _index=data.res_body.data[index];
			var ar=[];
				ar.push(_index);							
			var renderData = {products :ar };			
			// 渲染数据
			var html = template("list_template", renderData);
			$(".main").html(html);
		});	
		
	})
});