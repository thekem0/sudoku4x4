function registermember(){
	var fn1 = $("#fn1").val();
	var fn2 = $("#fn2").val();
	var fn3 = $("#fn3").val();
	var pass = $("#psw").val();
	var email = $("#email").val();
	var tel = $("#tel").val();
	var date = $("#date").val();
	if(fn1=="" || fn2=="" || fn3=="" || pass=="" || email=="" || tel=="" || date==""){
		$("#re").text("Cannot register!");
	}
	else{
		$("#re").text("Register success...");
		var url7 = "https://script.google.com/macros/s/AKfycbzFfkJdWfNBbn6gczh4phS-k2xQTTPI9Vo8oSSFUwySos9vlHY/exec?user=";
		var url6 = url7+fn1+"&name="+fn2+"&lname="+fn3+"&pass="+pass+"&email="+email+"&tel="+tel+"&date="+date;
		var mywindow2 = window.open(url6, "", "width=200,height=100");
	}
}