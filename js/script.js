$(document).ready(function() {
	$('.advice__card_1').click(function(event){
		$('.advice__block-plus-minus_1,.advice__card_1').toggleClass('active');
	});
	$('.advice__card_2').click(function(event){
		$('.advice__block-plus-minus_2,.advice__card_2').toggleClass('active');
	});
	$('.advice__card_3').click(function(event){
		$('.advice__block-plus-minus_3,.advice__card_3').toggleClass('active');
	});
	$('.advice__card_4').click(function(event){
		$('.advice__block-plus-minus_4,.advice__card_4').toggleClass('active');
	});
});