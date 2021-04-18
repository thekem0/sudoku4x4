function profileread(){
	var username = sessionStorage.getItem("user");
	var password = sessionStorage.getItem("pass");
	var url4 = "https://script.google.com/macros/s/AKfycbz4PuzLzjrkPKTA3nb5hhujDvqwHsIdwsL5FHhqP2-BSHD6Xw/exec?user="+username+"&pass="+password+"&action=read";
	$.getJSON(url4, function (json) {
		$("#name").text(json.user[0].name);
		$("#editname").val(json.user[0].name);
		$("#lastname").text(json.user[0].lastname);
		$("#editlastname").val(json.user[0].lastname);
		$("#email").text(json.user[0].email);
		$("#editemail").val(json.user[0].email);
	});
}
function profileedit() {
	var name = $("#editname").val();
	var lastname = $("#editlastname").val();
	var email = $("#editemail").val();
	var tel = String($("edittel").val());
	var username = sessionStorage.getItem("user");
	var password = sessionStorage.getItem("pass");
	var url5 = "https://script.google.com/macros/s/AKfycbz4PuzLzjrkPKTA3nb5hhujDvqwHsIdwsL5FHhqP2-BSHD6Xw/exec?user="+username+"&pass="+password+"&action=edit&name="+name+"&lastname="+lastname+"&email="+email+"&tel=099";
	var mywindow = window.open(url5, "", "width=200,height=100");
	setTimeout(location.reload(), 2000);
}