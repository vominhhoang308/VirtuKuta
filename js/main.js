console.log("javascript worked");

jQuery(document).ready(function($){
	
	$('#block-viku-main-menu >ul :nth-child(2) >a').hover(function(){
		console.log("detected hover");
		$(".sub-menu").css("display","block");
	});	
	$('.sub-menu').mouseout(function(){		
		$(".sub-menu").css("display","none");
	});	
});
