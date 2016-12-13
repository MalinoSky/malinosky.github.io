// $(window).load(function(){
// 	$("[data-toggle]").click(function() {
// 	var toggle_el = $(this).data("toggle");
// 	$(toggle_el).toggleClass("open-sidebar");
// 	});
// });

// $('.arrow_clicked').click(function () {
// 	$(this).find('span').toggleClass('actived');
// });
$(document).ready(function(){
    $('.tabs_menu a').click(function(e) {
        e.preventDefault();
        
        var tab = $(this).attr('href');
        $('.tab').not(tab).css({'display':'none'});

        $(tab).fadeIn(400);
        


    });

});




$('.grad_light_blue.arrow_clicked, .grad_lighter_blue.arrow_clicked').click(function () {
	$(this).find('span').toggleClass('actived');
	$(".accordion_toggle").prop("checked");
});

$('.grad_blue.arrow_clicked').click(function () {
	var arrow = $(this).find('span');
	if (arrow.hasClass('actived')) {
		arrow.removeClass('actived')
	} else {
		$('.grad_blue.arrow_clicked span.actived').removeClass('actived');
		arrow.addClass('actived');
	}
	$(".accordion_toggle").prop("checked");
});


var uncheckRadio = (function() {
var current;
return function(element) {
if(current == element) {
  element.checked = false;
  current = null;
} else
  current = element;
}
})();

// Скрипт для скрытия\открытия
function arr(elem){
	var num=elem;        
	document.getElementById("feat"+num).style.display=(document.getElementById("feat"+num).style.display== 'none') ? '' : 'none';
	if(document.getElementById("pic"+num).className.indexOf("down")>-1){document.getElementById("pic"+num).className=document.getElementById("pic"+num).className.replace(new RegExp(" down\\b"), "");}else{ document.getElementById("pic"+num).className+=" down";}
}



