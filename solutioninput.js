function input(){
	var username = sessionStorage.getItem("user");
	var pass = sessionStorage.getItem("pass");
	var n1 = "&node1="+$("#node1").val();
	var n2 = "&node2="+$("#node2").val();
	var n3 = "&node3="+$("#node3").val();
	var n4 = "&node4="+$("#node4").val();
	var n5 = "&node5="+$("#node5").val();
	var n6 = "&node6="+$("#node6").val();
	var n7 = "&node7="+$("#node7").val();
	var n8 = "&node8="+$("#node8").val();
	var n9 = "&node9="+$("#node9").val();
	var n10 = "&node10="+$("#node10").val();
	var n11 = "&node11="+$("#node11").val();
	var n12 = "&node12="+$("#node12").val();
	var n13 = "&node13="+$("#node13").val();
	var n14 = "&node14="+$("#node14").val();
	var n15 = "&node15="+$("#node15").val();
	var n16 = "&node16="+$("#node16").val();
	var url3 = "https://script.google.com/macros/s/AKfycbx_QEVms2axth_pCJ9ofQcx1Zqv14E5KmZFx7oGsqkK7I7MwHM/exec?uname="+username+"&pass="+pass+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11+n12+n13+n14+n15+n16;
	var myWindow = window.open(url3, "", "width=200,height=100");
		
	return solution();
}
function solution(){
	window.location.reload();	
}
