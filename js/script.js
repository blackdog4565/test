jQuery(document).ready(function ($) {
	$('.some-sec__close-button').click(function () {
		$(".some-sec").animate({
			opacity: 0,

		}, 500, function () {

			$(this).css({
				'display': 'none'
			})

		});
		$(".footer").animate({
			marginTop: "-170"
		}, 510, function () {
			$(".footer").css({
				'margin-top': '30px'
			})
		})
	});
	$('a').click(function () {
		
		var pos = $(window).scrollTop();
		$('.alert__wait').text("Страница \"" + this.text + "\" загружается ... ");
		$('.alert').animate({
			opacity: "1"
		},500).css({
			'display': 'flex',
			'top': pos + '200px',
		});
		setTimeout(function () {
			$('.alert__wait').text("Страница загрузилась! ");	
			setTimeout(function () {
				$('.alert').animate({
					opacity: "0"
				},600)
			}, 1000);
			setTimeout(function () {
				$('.alert').css({
					'display': 'none'
				},600)
			}, 1500);
		}, 1000);
		
		

	});
	$('.login-entry').click(function () {

	});
	
	$('.login-social-bl-but__button_facebook, .login-social-bl-but__button_twitter, .login-social-bl-but__button_google').click(function () {
		var str = $(this).text();
		var pos = $(window).scrollTop();
		$('.entry-w-social__h2').text(str);	
		$('.entry-w-social').animate({
			opacity: "1"
		},600).css({
			'display':'flex',
			'top':pos + 100
		})
	});
	$('.entry-w-social__close-button').click(function(){
		$('.entry-w-social').animate({
			opacity: "0"
		},600)
		setTimeout(function(){
			$('.entry-w-social').css({
				'display':'none'
			})
		},1000);
		
	});
});