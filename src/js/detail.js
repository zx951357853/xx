require(["config"], function(){
	require(["jquery","load"], function(){
		var ab=location.search.substr(1);
//		var c=decodeURIComponent(ab);					     
		console.log(ab);
	})
});