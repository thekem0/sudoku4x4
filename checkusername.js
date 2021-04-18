function check() {
  var uname  = $("#fn1").val();
  if(uname !== ''){
	  url = "https://script.google.com/macros/s/AKfycbz_0ORxddcmvMZeBRmyS0PCGJAxHfFS4q-B7Y0An3S855I2j8w/exec?checkuname="+ uname;
	  $.getJSON(url, function(json){
					if (json.user[0].stat == 'yes'){
						$("#st1").text("good");
						$("#st1").attr("style","color:green");
						//sessionStorage.setItem('username',uname);
					}else {
						$("#st1").text(" "+"usernameใช้ไปแล้ว"+" ");
						$("#st1").attr("style","color:red");
						//sessionStorage.setItem('username','');
					}
					});
	}
	else{
		$("#st1").text(" "+"ตั้งชื่อusername"+" ");
		$("#st1").attr("style","color:red");
	}
}
$(function (){
	$(document).ready(function(){
		$("#fn1").change(function(){
				return check();
			});
		});
	}
)