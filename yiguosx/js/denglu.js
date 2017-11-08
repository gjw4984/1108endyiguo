//取cookie
$("#btt").click(function(){
	var str=document.cookie;
	var arr=str.split("; ")
	var phone=arr[0].split("=")[1]
	var pwd=arr[1].split("=")[1]
	
	if($("#uname").val()==""||$("#upwd").val()==""){
		$(".banner_right #aa").css("display","block").html("账号或密码不能为空")
	}else{
		if($("#yz").val()==""){
			$(".banner_right #aa").css("display","block").html("验证码不能为空")
		}else{
			if($("#uname").val()==phone&&$("#upwd").val()==pwd&&$("#yz").val()=="5253"){
				$(".banner_right #aa").css({"display":"block","border-color":"green","color":"green","background":"#fff"}).html("登录成功")
				alert("欢迎您 "+ phone +" 易果将全力为您服务！ 点击确定自动为你跳转到主页")
				location="public_headr.html"
			}else{
				$(".banner_right #aa").css("display","block").html("账号或密码或验证码不正确")
			}
		}
	}	
})

$(".banner_right ul li").eq(7).children().click(function(){
	$("#zzc").css("display","block")
})
$(".zzc_banner em").click(function(){
//	$(this).parent().parent().animate({"top":"50%","height":0},300)
//	$(this).parent().slideUp(300)
	$(this).parent().parent().css("display","none")
})

























