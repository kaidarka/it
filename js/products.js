$(document).ready(function() {
	$('.btn-products').click(function(event) {
        $('.btn-products').removeClass('active');
        $(this).addClass('active');
		$('.products').removeClass('active')
		var num = $(this).attr('data-num');
		$('#block'+num).addClass('active')
	});
});