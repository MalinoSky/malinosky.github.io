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
function arr(elem){
	var num=elem;        
	document.getElementById("feat"+num).style.display=(document.getElementById("feat"+num).style.display== 'none') ? '' : 'none';
	if(document.getElementById("pic"+num).className.indexOf("down")>-1){document.getElementById("pic"+num).className=document.getElementById("pic"+num).className.replace(new RegExp(" down\\b"), "");}else{ document.getElementById("pic"+num).className+=" down";}
}