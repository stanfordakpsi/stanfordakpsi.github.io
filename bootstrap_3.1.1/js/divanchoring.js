$(document).ready(function() {
	$('#execucomm').scrollToFixed({limit: 600});
	$('#activmem').scrollToFixed({limit: $('#alum').offset().top - 2000});
	$('#finance').scrollToFixed();
	$('#consulting').scrollToFixed();
	$('#technology').scrollToFixed();
	$('#non-profit').scrollToFixed();
});