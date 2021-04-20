$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 80) {
	$(".subSect").addClass("slide");
	$(".subSect1").addClass("slide1");
	$(".subSect2").addClass("slide2");

	$(".subSect3").addClass("slide3");
	$('.subSect').css("display", "block");
	$('.fade-in-h3').css({"opacity": "1",'border':'8px solid white','font-size':'5vw','margin':'1px'});
	
	}
    /*$('.subsect').fadeIn();
  else {
   /* $('.subsect').fadeOut();*/

});