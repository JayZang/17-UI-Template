$(document).ready(function(){
	$("#jayNavBar .nav-item.dropdown").hover(function(){
		$(this).find(".dropdown-menu").addClass("show");
	}, function(){
		$(this).find(".dropdown-menu").removeClass("show");
	})

	$(window).resize(function(){
		var height  = $("#jayContainer .middle").height();
		var width = height * 0.5628;
		$("#jayContainer .middle .liveVideo").css({"width": width})
	})

	$(window).resize();
})