window.onload=function(){
	$(".cs a").mouseover(function(){
		$(".fl1").css("display","block")
	})
	$(".cs a").mouseout(function(){
		$(".fl1").css("display","none")
	})
	$(".fl1").mouseover(function(){
		$(this).css("display","block")
	})
	$(".fl1").mouseout(function(){
		$(this).css("display","none")
	})
	$(".ab li").eq(0).mouseover(function(){
		$(".a1").css("display","block")
		$(".a2").css("display","none")
	})
	$(".ab li").eq(1).mouseover(function(){
		$(".a1").css("display","none")
		$(".a2").css("display","block")
	})
	$(".fr li").eq(2).mouseover(function(){
		$(".my").css("display","block")
	})
	$(".fr li").eq(2).mouseout(function(){
		$(".my").css("display","none")
	})
	$(".my").mouseover(function(){
		$(".my").css("display","block")
	})
	$(".my").mouseout(function(){
		$(".my").css("display","none")
	})
	$(".fr li").eq(3).mouseover(function(){
		$(".phone").css("display","block")
	})
	$(".fr li").eq(3).mouseout(function(){
		$(".phone").css("display","none")
	})
	$(".phone").mouseover(function(){
		$(".phone").css("display","block")
	})
	$(".phone").mouseout(function(){
		$(".phone").css("display","none")
	})
	$(".shopcar").mouseover(function(){
		$(".shopcaryc").css("display","block")
	})
	$(".shopcar").mouseout(function(){
		$(".shopcaryc").css("display","none")
	})
	//搜索框
	$(".txt").click(function(e){
		e.stopPropagation()
		$(this).css({"background":"#fff"})
	})
	$(document).click(function(){
		$(".txt").css({"background":""})
	})
	$(".sub").click(function(){
		if($(".txt").val()==""){
			alert("请输入有效的关键词！")
		}
	})
	
	//滚动条 吸顶
	$(window).scroll(function(){
		if($(document).scrollTop()>=30){
			$("#headr2").css({"position":"fixed","top":0})
		}else{
			$("#headr2").css({"position":""})
		}
	})
}