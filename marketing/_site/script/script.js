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
	if($(this).scrollTop()>=($('.how-it-works-row').position().top-250)){      
		$('#marketing-feature-image-6').css({opacity: 0.0, visibility: "visible"}).stop(true,true).animate({opacity: 1.0},1000);
		$('#marketing-feature-image-6').siblings('.marketing-fa-arrow-right').delay(1000).fadeIn(500);
		$('#marketing-feature-image-mobile-unselect').css({opacity: 0.0, visibility: "visible"}).stop(true,true).delay(2000).animate({opacity: 1.0},1000);
		if (screen.width > 350){
			$('.marketing-feature-image-mobile-hand').fadeIn().stop(true,true).delay(3000).animate({right: '-19', bottom: '71'}, 1000, function(){
				$('.marketing-feature-image-mobile-hand').delay(100).queue(function (next) { 
					$(this).css('width', '39px'); 
					next(); 
				});
				$('.marketing-feature-image-mobile-hand').delay(200).queue(function (next) { 
					$(this).css('width', '40px'); 
					next(); 
				});
				$('#marketing-feature-image-mobile-unselect.marketing-feature-imagecommon').attr('id','').addClass('marketing-feature-image-mobile-select');
				$('.marketing-fa-arrow-right-unselect').delay(1000).fadeIn(500);
				$('#marketing-feature-image-8').css({opacity: 0.0, visibility: "visible"}).stop(true,true).delay(2000).animate({opacity: 1.0},2000);
			});
		}
		else if (screen.width <= 350) {
			$('.marketing-feature-image-mobile-hand').fadeIn().stop(true,true).delay(3000).animate({right: '-13',bottom: '64'}, 4000,function(){
				$('.marketing-feature-image-mobile-hand').delay(100).queue(function (next) { 
					$(this).css('width', '29px'); 
					next(); 
				});
				$('.marketing-feature-image-mobile-hand').delay(100).queue(function (next) { 
				  $(this).css('width', '30px'); 
				  next(); 
				});
				$('#marketing-feature-image-mobile-unselect.marketing-feature-imagecommon').attr('id','').addClass('marketing-feature-image-mobile-select');
				$('.marketing-fa-arrow-right-unselect').delay(1000).fadeIn(500);
				$('#marketing-feature-image-8').css({opacity: 0.0, visibility: "visible"}).stop(true,true).delay(2000).animate({opacity: 1.0},2000);
			});  
		} 
		$(document).off('scroll');
    }
});