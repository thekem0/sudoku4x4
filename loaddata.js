function loaddata(){
	$("#fn1").attr('value',sessionStorage.getItem('username'));
	$("#psw").attr('value',sessionStorage.getItem('password'));
	$("#email").attr('value',sessionStorage.getItem('email'));
}