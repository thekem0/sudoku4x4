function loadprofile(){
	var username = sessionStorage.getItem("user");
	var pass = sessionStorage.getItem("pass");
	var url2 = "https://script.google.com/macros/s/AKfycbzCvWNB5l5U74vTCBnzwbKF1K7jIIOE_-EqDjq4zgR_jshosiw/exec?user="+username+"&pass="+pass;
	$.getJSON(url2, function (json){
		document.getElementById("loader").style.display = "none";
		if( json.user[0].stat == pass){
			$("#weblogo").attr("style","display:none");
			$("#body").attr("style","display:block");
			$("#myprofile").attr("href","#");
			$("#myprofile").text(username);
			setTimeout(loadsolution, 3000);
		}
		else {
			$("#body2").attr("style","display:block");
		}
	});
}
function logout(){
	sessionStorage.clear();
} 