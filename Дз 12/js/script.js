$(document).ready(function() {
	
	var overlay = $('.overlay'),
		modal = $('.modal'),
		close = $('.close');

	$('.main_btna').on('click', function() {
		overlay.show(500);
		modal.show('slow');
	});
	$('.main_btn').on('click', function() {
		overlay.show(500);
		modal.show('slow');
	});
	close.on('click', function() {
		overlay.hide(500);
		modal.hide('slow');
	});
});