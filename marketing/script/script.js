// JavaScript by TeckStack.com
function validateForm() {
    var fname=$('#fname').val();
    var email=$('#email').val();
   	var ph=$('#phnumber').val();
   	var msg=$('#message').val();
   	javascript:location.href="mailto:debjeet.das@hashworks.co?subject=Hello%20you&body=Name:"+fname+"%0DPhone:"+ph+"%0DEmail:"+email+"%0DMessage:"+msg;
   	$('#marketing-footer-list-contact').trigger('click');
   	return false;
}
function validForm() {
    var name_f=$('#marketing-feature-input-1').val();
    var email_f=$('#marketing-feature-input-3').val();
   	var ph_f=$('#marketing-feature-input-2').val();
   	javascript:location.href="mailto:debjeet.das@hashworks.co?subject=Hello%20you&body=Name:"+name_f+"%0DPhone:"+ph_f+"%0DEmail:"+email_f;
	return false;
}
$(document).ready(function() {
	$('#marketing-footer-list-contact').popover({
		html : true,
		content: function(){
			return $('.popup').html();
		},
		placement:'top',
		container:'body'
	});	
   	$(document).on('click','.close-button',function () {
   		$(this).parents(".popover").popover('hide');
   	});
	if (screen.width > 600) {
		var heights = $(".feature-row > div").map(function (){
						             return $(this).height();
						           }).get(),
		maxHeight = Math.max.apply(null, heights);
		//maxHeight = maxHeight+56;
		$('.col-xs-6').css({height:maxHeight+'px','margin-top':'86px'});
	}	
	else if (screen.width <= 600) {
		var h=$(".feature-row > div").map(function (){
						             return $(this).height();
						           }).get(),
		maxHeight_mob = Math.max.apply(null, heights);
		$('.col-xs-6').css({height:maxHeight_mob+'px','margin-top':'0px'});
	}
	$(window).resize(function() {
		if (screen.width > 600) {
			var heights = $(".feature-row > div").map(function (){
								             return $(this).height();
								           }).get(),
			maxHeight = Math.max.apply(null, heights);
			$('.col-xs-6').css({height:maxHeight+'px','margin-top':'86px'});
		}
		else if (screen.width <= 600) {
			var h=$(".feature-row > div").map(function (){
						             return $(this).height();
						           }).get(),
			maxHeight_mob = Math.max.apply(null, heights);
			$('.col-xs-6').css({height:maxHeight_mob+'px','margin-top':'0px'});
		}
	});
});
if($("#marketing-homepage").length != 0) {
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if (scrollTop>10) {
			$('.navbar').addClass('navbar-top-fixed-banner');
			return false;
		}
		else if (scrollTop<10) {
			$('.navbar').removeClass('navbar-top-fixed-banner');
			return false;
		}
	});
	$(window).scroll(function(){
		if($(this).scrollTop()>=($('.how-it-works-row').position().top-250)){      
			$('#marketing-feature-image-6').css({opacity: 0.0, visibility: "visible"}).stop(true,true).animate({opacity: 1.0},500);
			$('#marketing-feature-image-6').siblings('.marketing-fa-arrow-right').delay(250).fadeIn(500);
			$('#marketing-feature-image-mobile-unselect').css({opacity: 0.0, visibility: "visible"}).stop(true,true).delay(500).animate({opacity: 1.0},1000);
			if (screen.width > 600){
				$('.marketing-feature-image-mobile-hand').fadeIn().stop(true,true).delay(750).animate({right: '-9', bottom: '80'}, 500, function(){
					$('.marketing-feature-image-mobile-hand').delay(100).queue(function (next) { 
						$(this).css('width', '39px'); 
						next(); 
					});
					$('.marketing-feature-image-mobile-hand').delay(150).queue(function (next) { 
						$(this).css('width', '40px'); 
						next(); 
					});
					$('#marketing-feature-image-mobile-unselect.marketing-feature-imagecommon').attr('id','').addClass('marketing-feature-image-mobile-select');
					$('.marketing-fa-arrow-right-unselect').delay(250).fadeIn(500);
					$('#marketing-feature-image-8').css({opacity: 0.0, visibility: "visible"}).stop(true,true).delay(500).animate({opacity: 1.0},1000);
				});
			}
			else if (screen.width <= 600 && screen.width > 350) {
				$('.marketing-feature-image-mobile-hand').fadeIn().stop(true,true).delay(750).animate({right: '-15',bottom: '37'}, 500,function(){
					$('.marketing-feature-image-mobile-hand').delay(100).queue(function (next) { 
						$(this).css('width', '34px'); 
						next(); 
					});
					$('.marketing-feature-image-mobile-hand').delay(150).queue(function (next) { 
					  $(this).css('width', '35px'); 
					  next(); 
					});
					$('#marketing-feature-image-mobile-unselect.marketing-feature-imagecommon').attr('id','').addClass('marketing-feature-image-mobile-select');
					$('.marketing-fa-arrow-right-unselect').delay(250).fadeIn(500);
					$('#marketing-feature-image-8').css({opacity: 0.0, visibility: "visible"}).stop(true,true).delay(500).animate({opacity: 1.0},1000);
				});  
			}
			else if (screen.width <= 350) {
				$('.marketing-feature-image-mobile-hand').fadeIn().stop(true,true).delay(750).animate({right: '-13',bottom: '45'}, 500,function(){
					$('.marketing-feature-image-mobile-hand').delay(100).queue(function (next) { 
						$(this).css('width', '29px'); 
						next(); 
					});
					$('.marketing-feature-image-mobile-hand').delay(150).queue(function (next) { 
					  $(this).css('width', '30px'); 
					  next(); 
					});
					$('#marketing-feature-image-mobile-unselect.marketing-feature-imagecommon').attr('id','').addClass('marketing-feature-image-mobile-select');
					$('.marketing-fa-arrow-right-unselect').delay(250).fadeIn(500);
					$('#marketing-feature-image-8').css({opacity: 0.0, visibility: "visible"}).stop(true,true).delay(500).animate({opacity: 1.0},1000);
				});  
			}
			return false;
	    }
	    else if($(this).scrollTop()<=($('.how-it-works-row').position().top-250)){      
			$('#marketing-feature-image-6').css({visibility: "hidden"});
			$('#marketing-feature-image-6').siblings('.marketing-fa-arrow-right').hide();
			$('#marketing-feature-image-mobile-unselect').css({visibility: "hidden"});
			$('.marketing-feature-image-mobile-hand').fadeOut().css({right: '-15', bottom: '0'});
			$('.marketing-feature-imagecommon.marketing-feature-image-mobile-select').attr('id','marketing-feature-image-mobile-unselect');
			$('.marketing-fa-arrow-right-unselect').hide();
			$('#marketing-feature-image-8').css({visibility: "hidden"});
			return false;
	    }
	});
	$(window).scroll(function(){
		if($(this).scrollTop()>=($('.feature-row').position().top-300)){
			$('#marketing-feature-image').css({visibility: "visible"});
			$('#marketing-feature-image-1').css({visibility: "visible"});
			$('#marketing-feature-image-2').css({visibility: "visible"});
			$('#marketing-feature-image-3').css({visibility: "visible"});
			$('#marketing-feature-image-4').css({visibility: "visible"});
			$('#marketing-feature-image-5').css({visibility: "visible"});
			return false;
		}
	});
}