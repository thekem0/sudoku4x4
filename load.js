function loadsolution(){
	document.getElementById("loader2").style.display = "none";
	document.getElementById("row1").style.visibility = "visible";
	var username = sessionStorage.getItem("user");
	var pass = sessionStorage.getItem("pass");
	for(j=0;j<24;j++){
		var url = "https://script.google.com/macros/s/AKfycbxSf9Bazk9PasmQs-G2gEDn5MoqNWs66Dsv8jmiUcSc-x8T1jQ/exec?uname="+ username +"&pass="+ pass +"&num="+(j+1);
			$.getJSON(url, function(json){
				for (i=1;i<13;i++){
					 var solution = "json.user[0].sol"+i;
					 if (eval(solution).search("X")==-1){
							$("#row1").append('<li><a href="#" id="'+ eval(solution) +'" >'+eval(solution).replace(/,| ,/gi,"<br>") +'</a></li><br>');
						}
				}
			});
	}
	setTimeout(countItems, 10000);
}

function countItems(){
	var ul = document.getElementById("row1");
	var i=0, itemCount =0;
	while(ul.getElementsByTagName('li') [i++]) itemCount++;
	$("#row2").append("<li>"+itemCount+" Solution </li>");
}

function show(event){
	$("#zoomsol").attr("style","display:block");
	var solu = event.target.id;
	$("#sol1").text(solu[0]);
	$("#sol2").text(solu[1]);
	$("#sol3").text(solu[2]);
	$("#sol4").text(solu[3]);
	$("#sol5").text(solu[5]);
	$("#sol6").text(solu[6]);
	$("#sol7").text(solu[7]);
	$("#sol8").text(solu[8]);
	$("#sol9").text(solu[10]);
	$("#sol10").text(solu[11]);
	$("#sol11").text(solu[12]);
	$("#sol12").text(solu[13]);
	$("#sol13").text(solu[15]);
	$("#sol14").text(solu[16]);
	$("#sol15").text(solu[17]);
	$("#sol16").text(solu[18]);
}
function closee(){
	$("#zoomsol").attr("style","display:none");
}