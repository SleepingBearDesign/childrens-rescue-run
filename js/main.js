$(function(){
	
	
	$(window).load(function() {
		$(".loader").delay(800).fadeOut("slow");
	})
	
	$window = $(window);
	if( $window .width() > 800){
	
		$('.parallax-scroll1').parallax("50%", 0.5);
		$('.parallax-scroll3').parallax("50%", 0.5);
		$('.parallax-scroll4').parallax("50%", 0.5);
		$('.parallax-scroll5').parallax("50%", 0.5);
	}
	
	wow = new WOW(
	    {
	      boxClass:     'wow',      // default
	      animateClass: 'animated', // default
	      offset:       0,          // default
	      mobile:       false,       // default
	      live:         true        // default
	    }
	);
	
	wow.init();
	
	//--- fixed header on scroll
	var test = 0;
	
	var $navbar = $('.navbar');
	var $white_logo_img = $('.white-logo-img');
	var $dark_logo_img = $('.dark-logo-img');
	
	function scrolled(test){
		
		if(test === 0){
			$navbar.stop().addClass("sticky-navbar");
			$white_logo_img.fadeOut();
			$dark_logo_img.fadeIn();
		}else{
			$navbar.stop().removeClass("sticky-navbar");
			$dark_logo_img.fadeOut();
			$white_logo_img.fadeIn();
		}
	}
	
	if($(window).scrollTop() > 50){
		scrolled(test);
	}
	
	$(window).scroll(function() {
		if ($(document).scrollTop() > 50) {
	    	if(test===0){
	    		scrolled(test);
	    	}
	    	test=1;
	    } else {
	    	if(test===1){
	        	scrolled(test);        	
	        }
	        test = 0;
	    }
	}); 
	//--- end scroll
	
	
	$('.menu-links').onePageNav({
		
		filter: ':not(.external)',
	    currentClass: 'current',
		scrollOffset: 85,
	    scrollSpeed: 1000,
	    scrollThreshold: 0.5 ,
	    easing: 'easeInOutExpo',
	    begin: function(){
		    $("#menu-overlay").toggleClass('open');
		    $("#nav-toggle").toggleClass('show-menu');
	    },
	    end: function(){
		    if($(window).scrollTop() > 50 && !$(".navbar").hasClass('sticky-navbar')){
		    	test = 0;
			    scrolled(test);
		    }
	    }
	   
	});
    
    
	$('.scrollTo').onePageNav({
		
		filter: ':not(.external)',
	    currentClass: 'current',
		scrollOffset: 85,
	    scrollSpeed: 1000,
	    scrollThreshold: 0.5 ,
	    easing: 'easeInOutExpo',
	    end: function(){
		    if($(window).scrollTop() > 50 && !$(".navbar").hasClass('sticky-navbar')){
		    	test = 0;
			    scrolled(test);
		    }
	    }
	   
	});
	
		
    $('#nav-toggle').click(function () {
        
        $(this).toggleClass('show-menu');
        $("#menu-overlay").toggleClass('open');
        
        if($(window).scrollTop() > 50 && $(".navbar").hasClass('sticky-navbar')){
        	test = 1;
        	scrolled(test);
	    }else if($(window).scrollTop() > 50 && !$(".navbar").hasClass('sticky-navbar')){
		    test = 0;
		    scrolled(test)
	    }
	    
    });
	
	
	
	$('#menu-overlay').bind('mousewheel DOMMouseScroll', function(e) {
	    var scrollTo = null;
	
	    if (e.type == 'mousewheel') {
	        scrollTo = (e.originalEvent.wheelDelta * -1);
	    }
	    else if (e.type == 'DOMMouseScroll') {
	        scrollTo = 40 * e.originalEvent.detail;
	    }
	
	    if (scrollTo) {
	        e.preventDefault();
	        $(this).scrollTop(scrollTo + $(this).scrollTop());
	    }
	})


	$('.video-link').magnificPopup({
		type : 'iframe',
		closeBtnInside : false,
		mainClass: 'mfp-fade',
		removalDelay: 160
	});
	
	
	$(".slides").owlCarousel({
		singleItem: true,
		slideSpeed : 400,
		navigation : true,
		pagination: false,
		transitionStyle : "goDown",
		autoPlay : true,
		navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	});
	
		
	
	$('.curved-text').circleType({radius:200});
	
	$("#features-slider").owlCarousel({
		items : 1,
		itemsDesktop : [1199,1],
		
	});
	
	$("#team-slider").owlCarousel({
		items : 1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [996,1],
		itemsTablet: [600,1],
		itemsMobile : false
	});
	
	$("#gallery-slider").owlCarousel({
		singleItem: true,
		slideSpeed : 400,
		navigation : true,
		pagination: false,
		navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	});
	
	$("#testi-slider").owlCarousel({
		singleItem: true,
		slideSpeed : 400
	});
	
	$('#plan-select').selectpicker();
	
});