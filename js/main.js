console.log("javascript worked");

jQuery(document).ready(function($){
	
	//$('#block-viku-main-menu >ul :nth-child(2) >a').hover(function(){
	//	console.log("detected hover");
	//	$(".sub-menu").css("display","block");
	//});	
	//$('.sub-menu').mouseout(function(){		
	//	$(".sub-menu").css("display","none");
	//});
	
	$('#nav1').click(function(){		
		window.location.replace("http://localhost/drupal1/");
	});

	/*$('#nav2').hover(function(){
		$("#nav2-s").css("visibility","visible");
	});	
	$('#nav2-s').mouseleave(function(){		
		$("#nav2-s").css("visibility","hidden");
	});	

	$('#nav3').hover(function(){
		$("#nav3-s").css("display","block");
	});	
	$('#nav3-s').mouseleave(function(){		
		$("#nav3-s").css("display","none");
	});	
	$('#nav4').hover(function(){
		$("#nav4-s").css("display","block");
	});	
	$('#nav4-s').mouseleave(function(){		
		$("#nav4-s").css("display","none");
	});*/	
});
