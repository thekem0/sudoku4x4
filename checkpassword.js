function checkpassword(){
	var psw = $("#psw").val();
	var ips = $("#inputpass").val();
	if( psw.length > 5 && psw == ips ){
		$("#st2").text("good");
		$("#st2").attr("style","color:green");
		//sessionStorage.setItem('password',psw);
	}else{
		$("#st2").text(" "+"รหัสผ่านไม่ถูกต้อง"+" ");
		$("#st2").attr("style","color:red");
		//sessionStorage.setItem('password','');
}
}
$(function (){
	$(document).ready(function(){
		$("#psw").change(function(){
				return checkpassword();
			});
		});
	}
)