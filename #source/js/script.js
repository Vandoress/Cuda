function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.burger__logo,.header__burger,.menu-header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
function resize(){
	if( window.innerWidth >= 768 ){
		$('.burger__logo,.header__burger,.menu-header__menu').removeClass('active');
	} 
}
$(document).ready(function(){
    resize();
    $(window).resize(resize);
});
const length = document.getElementById('circle').getTotalLength();
console.log(length);
$(document).ready(function(){
	$('.menu-header__menu a[href^="#"]').click(function(){
		$('.menu-header__menu a[href^="#"]').removeClass('menu-header__link_active');
		$(this).addClass('menu-header__link_active');
	});
	$('.menu-header__link:first').click();
});