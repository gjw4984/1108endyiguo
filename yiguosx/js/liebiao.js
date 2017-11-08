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
//json

$.ajax({
	type:"get",
	url:"liebiao.json",
	success:function(arr){
		var str = ""
		for(var i in arr){
			var item=arr[i]
			str += `
				<li>
					<img src="img/ICON06.png" class="xinp"/>
					<img src="${item.dt}" class="dimg"/>
					<img src="${item.dt}" class="tc"/>
					
					<div class="jiac">
						<h4>${item.gwc}</h4>
						<a href="javascript:;">加入购物车</a>
					</div>
					<div class="jj">
						<p>${item.name}</p>
						<p>￥${item.jg}</p>
					</div>
				</li>
			`
			$("#lbox ul").html(str)
		}
		var count=1;
		var cum=0;
		$(".jiac").find("a").click(function(){
		var sum=$(this).parent().next().find("p").eq(1).text();
		var bum=Number(sum.split("￥")[1]);
		 cum += bum;
		
			$(this).parent().parent().find(".tc").animate({"width":40,"height":40},800,function(){
				var top1=$(this).offset().top-$(document).scrollTop()
				var left1=$(this).offset().left
				$(this).css("position","fixed")
				.css({"left":left1,"top":top1,"z-index":"999999"})
				$(this).animate({"left":1062,"top":16},800,function(){
					$(this).remove()
					$(".shopcar span").html(count++);
					$(".shopcar b").html(cum.toFixed(2)+"元")
				})
			})
		})
	}
});
	





























