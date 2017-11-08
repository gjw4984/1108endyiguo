 //轮播图
 $(function(){
	 	var index=1;
	 	var z=0;
	 	var y=10;
	 	setInterval(function(){
		 	$(".wrapper ul li").eq(index).css({"z-index":z++});
		 	$(".wrapper ul li").eq(index).fadeIn(2000).siblings().fadeOut(2000);
		 	$(".wrapper ol").css("z-index",y++);
		 	$(".wrapper ol li").eq(index).addClass("current")
		 	          .siblings()
		 	          .removeClass("current")
	 		index++
	 		if(index==$(".wrapper ul li").length){
	 			index=0
	 		}
	 	},3000)
})
// 分类
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
//楼层内图片划入效果
//$(".lou1img img").mouseover(function(){
//	$(this).
//})








