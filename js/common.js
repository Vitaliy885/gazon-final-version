$(document).ready(function() {

	$(document).ready(function(){
		$('.btn-up').mPageScroll2id();
	});

	$(".zakazatu-premium").click(function(){
		$(".zakazanu-premium-gazon").css("display","block");
	});
	$(".zakazanu-premium-gazon .fa").click(function(){
		$(".zakazanu-premium-gazon").hide(100);
	});

	$(".zakazatu-parkovii").click(function(){
		$(".zakazanu-parkovii-gazon").css("display","block");
	});
	$(".zakazanu-parkovii-gazon .fa").click(function(){
		$(".zakazanu-parkovii-gazon").hide(100);
	});

});
