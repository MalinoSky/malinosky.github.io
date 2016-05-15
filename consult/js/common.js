$(document).ready(function() {
	$(".main_mnu_button").click(function(){
		$(".main_mnu ul").slideToggle();
	});

	$("#button_grid").mixItUp();


	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline", midClick: true});

	$(".button_item").each(function(i){
		$(this).find("a").attr("href", "#work_"+i);
		$(this).find(".but_descr").attr("id", "work_"+i)
	});

	$("#button_zel_grid").mixItUp();

	$(".button_item_zel").each(function(i){
		$(this).find("a").attr("href", "#work_"+i);
		$(this).find(".but_descr_zel").attr("id", "work_"+i)
	});

});