$(document).ready(function(){
  $('.bxslider').bxSlider();
});


	$(window).load(function(){
	$("[data-toggle]").click(function() {
	var toggle_el = $(this).data("toggle");
	$(toggle_el).toggleClass("open-sidebar");
	});
});

$('.arrow_clicked').click(function () {
	$(this).find('span').toggleClass('actived');
});

$(document).ready(function(){
	    $('.tabs_menu a').click(function(e) {
	        e.preventDefault();
	        
	        var tab = $(this).attr('href');
	        $('.tab').not(tab).css({'display':'none'});
	        $(tab).fadeIn(400);
	    });
	});
$(document).ready(function(){
   	$("select").selecter();
});