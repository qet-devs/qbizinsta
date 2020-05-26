jQuery(function(){
	
	 jQuery(window).scroll(function(){			
		if(jQuery(window).scrollTop()>=100){
			jQuery(".top-navigation").addClass("fixed");
			jQuery(".site-identity").addClass("fixed");
		}
		else {
			jQuery(".top-navigation").removeClass("fixed");	
			jQuery(".site-identity").removeClass("fixed");
		}
	});
	
});