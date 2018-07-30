$(document).ready(function(){
	$("#jayNavBar .nav-item.dropdown").hover(function(){
		$(this).find(".dropdown-menu").addClass("show");
	}, function(){
		$(this).find(".dropdown-menu").removeClass("show");
	})
})