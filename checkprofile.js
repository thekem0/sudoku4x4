function checkp(){
			if($("#st1").text()=="good" && $("#st2").text()=="good" && $("#result").text()=="good"){
				return senddata();
			}else{
				 return false;
			}
}
function senddata(){
	var username = $("#fn1").val();
	var url = "https://script.google.com/macros/s/AKfycbzFfkJdWfNBbn6gczh4phS-k2xQTTPI9Vo8oSSFUwySos9vlHY/exec?user="+username;
	$.getJSON(url, function(json){
				var aa=1;
				});
}
function setprofile(){
	var username = $("#fn1").val();
	var firstname = $("#fn2").val();
	var lastname = $("#fn3").val();
	var pass = $("#psw").val();
	var email = $("#email").val();
	var tel = $("#tel").val();
	var dob = $("#dob").val();
	var url2 = "https://script.google.com/macros/s/AKfycbz8AqoSSk9aile-7GJks_kvGsys3rEjt--I2wOYYgq5VxLtEw/exec?user="+username+"&fn="+firstname+"&ln="+lastname+"&pass="+pass+"&email="+email+"&tel="+tel+"&bod="+dob;
	$.getJSON(url2, function(json){
				var ab =2;
				});
}
function resetdata(){
	$("#st1").text('');
	$("#st2").text('');
	$("#result").text('');
}
//https://script.google.com/macros/s/AKfycbxOYwcjSRqvOyhoES4566Ux5-hvvQqrMjfKc0T1IFHagG9N6yU/exec//