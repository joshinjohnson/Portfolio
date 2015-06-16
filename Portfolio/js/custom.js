
$(window).scroll(function() {
	
	var navbarColor = "0,0,0";
	var sectionL = ($('.section').height())*0.001;
	var scrollL = $(window).scrollTop();
	
	var navOpacity = (scrollL-sectionL)*0.001;
	
	if (navOpacity > 0.3) {
		navOpacity = 1;
	}else
	if (navOpacity < 0) {
		navOpacity = 0;
	}
	
	var navBackColor = 'rgba(' + navbarColor + ',' + navOpacity + ')';
	
	$('.navbar-collapse').css({
		"background-color": navBackColor
	});
	
	$('.navbar-header').css({
		"background-color": navBackColor
	});
	
	
});