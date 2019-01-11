$(document).ready(function(){

$("#form").submit(function(){
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function(){
		alert("Заявка надіслана! В найближчий час з Вами зв'яжуться , очікуєте дзвінка!");
	});
	return false;
});
});
