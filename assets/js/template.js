// JavaScript Document
(function($) {
    "use strict";
	
	//calling foundation js
	$(document).foundation();
	
	//Saying page loaded
	$(window).on("load",function(){
        $("body").addClass("loaded");
		$(".preloader").html("");
		$(".preloader").css("display", "none");
     });
	
	//Display Scroll Btn on 1000px
	$(window).on("scroll",function() { 
		if($(this).scrollTop() > 1000) { 
			$("#top").fadeIn();
		} else { 
			$("#top").fadeOut();
		}
	});
	
	//scroll effect
	$("#top").on("click",function () {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});        
	
	$("#top").on("click",function (event) {
		event.stopPropagation();                
		var idTo = $(this).attr("data-atr");                
		var Position = $("[id='" + idTo + "']").offset();
		$("html, body").animate({ scrollTop: Position }, "slow");
		return false;
	});

	//Animation effect on Gallery
	$(".project").on("mouseenter",function() {
		var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
		$(this).children(".project-detail").addClass("animated fadeIn").on(animationEnd, function() {
		$(this).removeClass("animated fadeIn");
		});
	});
	
	//calling Brand Crousel
	$('.main-banner').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
	    autoplayTimeout:3000,
    	autoplayHoverPause:true,
		responsiveClass:true,
		dots:true,
		responsive:{
			0:{
				items:1,
				nav:true, 			
			},
			600:{
				items:1,
				nav:false, 			
			},
			1000:{
				items:1,
				nav:false, 			
			}
		}
	});
	
	//calling Brand Crousel
	$('.testimonials-box').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
	    autoplayTimeout:3000,
    	autoplayHoverPause:true,
		responsiveClass:true,
		dots:true,
		responsive:{
			0:{
				items:1,
				nav:true, 			
			},
			600:{
				items:1,
				nav:false, 			
			},
			1000:{
				items:1,
				nav:false, 			
			}
		}
	});
	
})(jQuery); //jQuery main function ends strict Mode on 
