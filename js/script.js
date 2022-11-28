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
	$('.btn-fast-order,.cancel-btn,.block-bg-blur').click(function(event){
		$('.block-fast-order,.block-bg-blur,.block-order-confirm').toggleClass('active');
	});
	$('.block-fast-order__btn-order').click(function(event){
		$('.block-fast-order,.block-order-confirm').toggleClass('ordered');
	});
	$('.header__language').click(function(event){
		$('.header__language-list').toggleClass('active');
	});
	$('.header__city').click(function(event){
		$('.header__city-list').toggleClass('active');
	});
	$('.book-form__btn-order').click(function(event){
		$('.block-order-confirm').toggleClass('active, ordered');
	});
	$('.header__burger,.block-hide-burger').click(function(event){
		$('.header__burger,.sidebar,.block-hide-burger').toggleClass('active');
	});
});