$(document).ready(function(){
	$('.Appointment_span3 a').click(function(){
	  $(this).css({"font-family":"OpenSans-Bold","color":"#da346a"});
	  $('.Appointment_span4').css({"font-family":"OpenSans-Regular","color":"#333333"});
	});
	$('.Appointment_span4').click(function(){
	  $(this).css({"font-family":"OpenSans-Bold","color":"#da346a"});
	  $('.Appointment_span3 a').css({"font-family":"OpenSans-Regular","color":"#333333"});
	});
});