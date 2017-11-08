$(".kefu").click(function(){
	window.open("https://www.baidu.com","_blank");
})
$(window).scroll(function(){
	if($(document).scrollTop()>=638){
		$(".zhid").css("display","block");
		$("#luoti li").css("display","block");
	}else{
		$(".zhid").css("display","none");
		$("#luoti li").css("display","none");
	}
	$(".zhid").click(function(){
		$("body,html").stop().animate({"scrollTop":0},1000);
	})
	$("#luoti").find("li").click(function(){
		var index=$(this).index();
		$("body,html").stop().animate({"scrollTop":$("#lou").find("li").eq(index).offset().top-200},1500);
	})
//	console.log(Math.ceil(($(document).scrollTop()-650)/$("#lou").find("li").height()))
	var nub=Math.ceil(($(document).scrollTop()-1000)/$("#lou").find("li").height())
	if(nub>=0){
		$("#luoti").find("li").eq(nub).css("background-color","#008842").siblings().css("background-color","")
		$("#luoti").find("li").eq(nub).find("span").css("visibility","visible").end().siblings().find("span").css("visibility","")
	}
})
