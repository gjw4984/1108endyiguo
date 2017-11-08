
$("#fenl").mouseover(function(){
	$("#fenl2 ul").css("display","block")
})
$("#fenl").mouseout(function(){
	$("#fenl2 ul").css("display","none")
})
$("#fenl2 ul li").mouseover(function(){
	$("#fenl2 ul").css("display","block")
	$("#fenl2 ol li").eq($(this).index()).css("display","block")
	$(this).find("s").stop().animate({"margin-left":20},300)
})
$("#fenl2 ul li").mouseout(function(){
	$("#fenl2 ul").css("display","none")
	$("#fenl2 ol li").eq($(this).index()).css("display","none")
	$(this).find("s").stop().animate({"margin-left":0},300)
})
$("#fenl2 ol li").mouseover(function(){
	$("#fenl2 ul").css("display","block")
	$(this).css("display","block")
})
$("#fenl2 ol li").mouseout(function(){
	$("#fenl2 ul").css("display","none")
	$(this).css("display","none")
})
//放大镜
$("#bottom li").mouseenter(function(){
	$("#small img").eq($(this).index()).fadeIn().siblings().fadeOut()
	$("#big img").eq($(this).index()).fadeIn().siblings().fadeOut()
})
$("#small").mouseover(function(){
	$("#mask").css("display","block")
	$("#big").css("display","block")
	
	$("#big").css({"width":200,"height":200,"left":150,"top":150,"opacity":0})
	$("#big").stop().animate({"left":505,"top":0,"width":600,"height":600,"opacity":1},200)
})
$("#small").mouseout(function(){
	$("#mask").css("display","none")
	$("#big").css("display","none")
})
$("#small").mousemove(function(e){
	var e=e||event;
	var x=e.pageX-$("#fdj_box").offset().left-$("#mask").width()/2;
	var y=e.pageY-$("#fdj_box").offset().top-$("#mask").height()/2;
	var maxx=$("#small").width()-$("#mask").width();
	var maxy=$("#small").height()-$("#mask").height();
	x<0?x=0:x>maxx?x=maxx:x;
	y<0?y=0:y>maxy?y=maxy:y;
	$("#mask").css({"left":x+"px","top":y+"px"});
	var bigimgx=$("#big img").width()/$("#small").width()*x
	var bigimgy=$("#big img").height()/$("#small").height()*y
	$("#big img").css({"left":-bigimgx,"top":-bigimgy})	
//	$("#big img").stop().animate({"left":-bigimgx,"top":-bigimgy},500)	
	
})

	var count=$("#sl").val();
$("#jia").click(function(){
	$("#sl").val(++count)
	$("#xq2_left p i").html((count*19.9).toFixed(2))
})
	
$("#jian").click(function(){
	$("#sl").val(--count)
	$("#xq2_left p i").html((count*19.9).toFixed(2))
})

$("#nr ul").on("click","li",function(){
	$(this).addClass("yao").siblings().removeClass("yao")
	$("#nr ol").find("li").eq($(this).index()).css("display","block").siblings().css("display","none")
})


















