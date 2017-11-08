$("#inp").blur(function(){
//	var reg=/^\d{4}$/
	var reg=/^4931$/
	if(reg.test($("#inp").val())){
		$(this).parent().find("em").css("display","block").next().css("display","none")
	}else{
		$(this).parent().find("b").css("display","block").prev().css("display","none")
	}
})
$("#inp1").blur(function(){
	var reg=/^1[3578]\d{9}$/
	if(reg.test($("#inp1").val())){
		$(this).parent().find("em").css("display","block").next().css("display","none")
	}else{
		$(this).parent().find("b").css("display","block").prev().css("display","none")
	}
})
$("#inp2").blur(function(){
	var reg=/^\d{6}$/
	if(reg.test($("#inp2").val())){
		$(this).parent().find("em").css("display","block").next().css("display","none")
	}else{
		$(this).parent().find("b").css("display","block").prev().css("display","none")
	}
})
$("#inp3").blur(function(){
	var reg=/^[^\u4e00-\u9fa5 ]{6,18}$/
	if(reg.test($("#inp3").val())){
		$(this).parent().find("em").css("display","block").next().css("display","none")
	}else{
		$(this).parent().find("b").css("display","block").prev().css("display","none")
	}
})
$("#inp4").blur(function(){
	if($("#inp4").val()==$("#inp3").val()&&$(this).val()!=""){
		$(this).parent().find("em").css("display","block").next().css("display","none")
	}else{
		$(this).parent().find("b").css("display","block").prev().css("display","none")
	}
})
$("#inp5").dblclick(function(){
	var rand=Math.floor(Math.random()*(999999-111111+1)+111111)
	alert("您的邀请码是"+rand)
	$("#inp5").blur(function(){
		if($(this).val()==rand){
			$(this).parent().find("em").css("display","block").next().css("display","none")
		}else{
			$(this).parent().find("b").css("display","block").prev().css("display","none")
		}
	})
})
$("#che1").click(function(){
	if($("#che1").prop("checked")){
		$("#btn").css("background","#008842")
	}else{
		$("#btn").css("background","gray")
		
	}
})

$("#btn").hover(function(){
	if($("#che1").prop("checked")){
		$(this).css("background","#09964e")
	}
},function(){
	if($("#che1").prop("checked")){
		$(this).css("background","#008842")
	}
})
//存cookie
$("#btn").click(function(){
	if($("#che1").prop("checked")){
		document.cookie="phone="+$("#inp1").val();
		document.cookie="pwd="+$("#inp4").val();
//		alert(document.cookie);
		location="denglu.html"
	}
})




































