console.log("javascript worked");

jQuery(document).ready(function($){
	
	$('#block-viku-main-menu >ul :nth-child(2) >a').hover(function(){
		console.log("detected hover");
		$(this).parent().find('.sub-menu').toggle();
	});	
});
