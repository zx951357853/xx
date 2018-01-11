require(["config"], function(){
	require(["jquery","template","load"], function($,template){
		var index=location.search.substr(1);
//		var c=decodeURIComponent(ab);
		$.getJSON("../mock/list.json", function(data){
//			console.log(data)
			// 准备渲染数据
			var _index=data.res_body.data[index];
			var ar=[];
				ar.push(_index);
//				console.log(ar)
			var renderData = {products :ar };			
			// 渲染数据
			var html = template("list_template", renderData);
			$(".main").html(html);
		}).done(function(){
				$(".left-top").mouseenter(function(){
					$(".tu2").show();
					$(".box4").show();	
					console.log("a")
				});
				$(".left-top").mouseleave(function(){
					$(".tu2").css("display","none");
					$(".box4").css("display","none");
				});
				$(".left-top").mousemove(function(e){
					$(".box4").offset({
						top:e.pageY-70,
						left:e.pageX-70
						
					});
					var _le=$(".left-top").offset().left,
						_to=$(".left-top").offset().top;
					var _left=$(".box4").offset().left-_le;
					var _top=$(".box4").offset().top-_to;
					
					if(_top<0){
						_top=0;
					};
					if(_top>280)
					   _top=280
					if(_left<0)
						_left=0
					if(_left>280)
						_left=280
					$(".box4").css({
						"top":_top+"px",
						"left":_left+"px"
					});
					var dx=_left*1.5,
						dy=_top*1.5;
					$(".tu2 img").css({
						top:-dy+"px",
						left:-dx+"px"
					})
						
				})
				
			});
		})
		
		//放大镜
//		var bigH=$(".left-top").innerHeight(),
//			bigS=$(".left-top").innerWidth(),
//			smaH=$(".box4").outerHeight(),
//			smaW=$(".box4").outerWidth();
//			console.log($(".left-top"));
		
});