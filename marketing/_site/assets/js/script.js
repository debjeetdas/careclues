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
   	if($("#marketing-homepage").length != 0) {
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
	}
});
$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();
	if (scrollTop>10) {
		$('.navbar').addClass('navbar-top-fixed-banner');
		return false;
	}
	else if (scrollTop<10) {
		if($("#about-us").length != 1 && $("#privacy-policy").length != 1) {
			$('.navbar').removeClass('navbar-top-fixed-banner');
			return false;
		}
	}
});
if($("#marketing-homepage").length != 0) {
	$(window).scroll(function(){
		if($(this).scrollTop()>=($('.how-it-works-row').position().top-250)){
			$('#marketing-feature-image-6').css({visibility: "visible"});
			$('#marketing-feature-image-6 ~ h4.marketing-feature-center').css({visibility: "visible"});
			$('#marketing-feature-image-6').siblings('.marketing-fa-arrow-right').fadeIn(200);
			$('#marketing-feature-image-mobile-unselect').delay(500).queue(function (next) { 
			    $(this).css('visibility', 'visible');
			    $('#marketing-feature-image-mobile-unselect ~ h4.marketing-feature-center,.marketing-feature-image-mobile-select ~ h4.marketing-feature-center').css({visibility: "visible"});
			    next(); 
			  });
			if (screen.width > 600){
				$('.marketing-feature-image-mobile-hand').fadeIn().stop(true,true).delay(1000).animate({right: '-9', bottom: '80'}, 500, function(){
					$('.marketing-feature-image-mobile-hand').delay(100).queue(function (next) { 
						$(this).css('width', '39px'); 
						next(); 
					});
					$('.marketing-feature-image-mobile-hand').delay(150).queue(function (next) { 
						$(this).css('width', '40px'); 
						next(); 
					});
					$('#marketing-feature-image-mobile-unselect.marketing-feature-imagecommon').attr('id','').addClass('marketing-feature-image-mobile-select');
					$('.marketing-fa-arrow-right-unselect').fadeIn(200);
					$('#marketing-feature-image-8').delay(500).queue(function (next) { 
					    $(this).css('visibility', 'visible'); 
			    		$('#marketing-feature-image-8 ~ h4.marketing-feature-center').css({visibility: "visible"});
					    next(); 
					  });
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
					$('.marketing-fa-arrow-right-unselect').fadeIn(200);
					$('#marketing-feature-image-8').delay(500).queue(function (next) { 
					    $(this).css('visibility', 'visible'); 
			    		$('#marketing-feature-image-8 ~ h4.marketing-feature-center').css({visibility: "visible"});
					    next(); 
					  });
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
					$('.marketing-fa-arrow-right-unselect').fadeIn(200);
					$('#marketing-feature-image-8').delay(500).queue(function (next) { 
					    $(this).css('visibility', 'visible'); 
			    		$('#marketing-feature-image-8 ~ h4.marketing-feature-center').css({visibility: "visible"});
					    next(); 
					  });
				});  
			}
	    }
	});
	$(window).scroll(function(){
		if($(this).scrollTop()>=($('.feature-row').position().top-300)){
			$('#feature-1,#feature-2,#feature-3,#feature-4,#feature-5,#feature-6').delay(250).queue(function (next) { 
			    $(this).css({visibility: 'visible'}); 
			    next(); 
			  });
			return false;
		}
	});
}