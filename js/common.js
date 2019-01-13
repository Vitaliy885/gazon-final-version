$(document).ready(function() {

	$(document).ready(function(){
		$('.btn-up').mPageScroll2id();
	});

	$(".zakazatu-premium").click(function(){
		$(".fixed-overlay-modal-premium").css("display","block");
	});
	$(".zakazanu-premium-gazon .fa").click(function(){
		$(".fixed-overlay-modal-premium").hide(100);
	});

	$(".zakazatu-parkovii").click(function(){
		$(".fixed-overlay-modal-parkovii").css("display","block");
	});
	$(".zakazanu-parkovii-gazon .fa").click(function(){
		$(".fixed-overlay-modal-parkovii").hide(100);
	});

	$(".zakazatu-sportivnii").click(function(){
		$(".fixed-overlay-modal-sportivnii").css("display","block");
	});
	$(".zakazanu-sportivnii-gazon .fa").click(function(){
		$(".fixed-overlay-modal-sportivnii").hide(100);
	});


		$(".btn-get-price").click(function(){
			$(".fixed-overlay-modal").css("display","block");
		});
		$(".zakrutu").click(function(){
			$(".fixed-overlay-modal").css("display","none");
		});
	

});
