$(document).ready(function(){

	$('#days_slider').slick({
		fade: true,
		dots: true,
		draggable: false
	});

	$('#stars_carousel').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		responsive: [
		    {
		      breakpoint: 1020,
		      settings: {
		        infinite: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				dots: true
		      }
		    },
		    {
		      breakpoint: 800,
		      settings: {
		        infinite: true,
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: true
		      }
		    },
		    {
		      breakpoint: 540,
		      settings: {
		        infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true
		      }
		    }
		  ]
	});

	$('#reasons_slider').slick({
		fade: true,
		dots: true,
		draggable: false
	});

	$('.dsc_dot').click(function(){
		$('.dsc_dot').removeClass('active');
		$(this).addClass('active');
		var thisDot = $(this).attr('data-index');
		$('#days_slider .slick-dots li button').each(function(){
			var indexSliderDot = $(this).html();
			if (indexSliderDot == thisDot) {
				$(this).click();
			}
		});
	});

	$('.slick-arrow').click(function(){
		$('.dsc_dot').removeClass('active');
		var activeDot = $('#days_slider .slick-dots li.slick-active button').html();
		$('.dsc_dot').each(function(){
			if ($(this).attr('data-index') == activeDot) {
				$(this).addClass('active');
			}
		});

	});

	$('#onpop_btn_1').click(function(){
		$('#one_person').addClass('active');
		return false;
	});

	$('#onpop_btn_2').click(function(){
		$('#vip_person').addClass('active');
		return false;
	});

	$('#onpop_btn_3').click(function(){
		$('#corp_person').addClass('active');
		return false;
	});

	$('.reg_btn').click(function(){
		$('#reg_popup').addClass('active');
		return false;
	});

	$('.close_popup').click(function(){
		$('.popup').removeClass('active');
		return false;
	});

	$('.vs_btn').click(function(){
		$('#video_frame').attr('src', 'https://www.youtube.com/embed/bB6ZeKwBihk?autoplay=1&rel=0&controls=0&showinfo=0');
		$('#video_sect').hide();
		$('.video_sect iframe').show();
		return false;
	});

});