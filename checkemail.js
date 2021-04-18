function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var $result = $("#result");
  var email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text("good");
    $result.css("color", "green");
  } else {
    $result.text(" emailใช้ไม่ได้");
    $result.css("color", "red");
  }
  return false;
}

$(function (){
	$(document).ready(function(){
		$("#email").change(function(){
				return validate();
			});
		});
	}
)