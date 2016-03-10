// JavaScript by TeckStack.com
function validateForm() {
    var fname=$('#fname').val();
    var email=$('#email').val();
   	var ph=$('#phnumber').val();
   	var msg=$('#message').val();
   	javascript:location.href="mailto:debjeet.das@hashworks.co?subject=Hello%20you&body=Name:"+fname+" "+lname+"%0DPhone:"+ph+"%0DMessage:"+msg;
}
$(document).ready(function() {
 //  var clickTooltip = $(".marketing-feature-footer").kendoTooltip({
	// filter: ".has-tooltip", 
	// content: $(".popup").html(),
	// showOn: "click",
	// autoHide: false,
	// position: "top",
	// autoClose: false
 //  }).data("kendoTooltip");
	$('#marketing-footer-list-contact').popover({
		html : true,
		content: function(){
			return $('.popup').html();
		},
		placement:'top',
		container:'body'
	});
});
$(document).scroll(function(){
	var scrollTop = $(window).scrollTop();
	if($("#marketing-homepage").length != 0) {
		if (scrollTop>10) {
			$('.navbar').addClass('navbar-top-fixed-banner');
		}
		else{
			$('.navbar').removeClass('navbar-top-fixed-banner');
		}
	}
});