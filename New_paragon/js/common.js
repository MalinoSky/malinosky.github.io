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

