(function($){

	$.fn.hivefull = function(options){
		return this.each(function(){
			$.hivefull(this, options);
		});
	};

	$.hivefull = function(container, options){
		var settings ={
			obj : $(container),
			trans : true,
			clipobj : $(container).find('.m_cont'),
			widthsize : 1024,
			browser : navigator.userAgent
		};
		if(options){$.extend(settings, options);};

		var ie8 = settings.browser.indexOf("MSIE 8");
		var ie7 = settings.browser.indexOf("MSIE 7");
		if(ie8 > 0 || ie7 > 0){
			settings.ie7 = true;
		};
		if($(window).width() > settings.widthsize){
			$.hivefull.effect(settings);
			/*
			$.hivefull.transition(settings);
			*/
			settings.clipobj.css({
				position : 'fixed'
			});
		};
		$(window).resize(function(){
			if($(window).width() > settings.widthsize){
				$.hivefull.effect(settings);
				/*
				settings.trans = true;
				$.hivefull.transition(settings);
				*/
				settings.clipobj.css({
					position : 'fixed'
				});
			}else{
				settings.obj.children().css({
					height : ''
				});
				settings.clipobj.css({
					clip : ''
				});
				settings.clipobj.css({
					position : ''
				});
			};
		});
		$(window).scroll(function(){
			setNavi();
			if($(window).width() > settings.widthsize){
				$.hivefull.effect(settings);
				/*
				settings.trans = false;
				$.hivefull.transition(settings);
				*/
				settings.clipobj.css({
					position : 'fixed'
				});
			}else{
				settings.obj.children().css({
					height : ''
				});
				settings.clipobj.css({
					clip : ''
				});
				settings.clipobj.css({
					position : ''
				});

			};
		});
	};

	$.hivefull.transition = function(settings){
		if(settings.trans){
			settings.clipobj.css({
				transition : 'all 250ms ease-out'
			});
		}else{
			settings.clipobj.css({
				transition : 'none'
			});
		}
	};

	$.hivefull.effect = function(settings){
		settings.obj.children().css({
			height : $(window).height()
		});
		settings.clipobj.each(function(){
			var font = $(this).position().top;
			var top = $(this).parents('li').offset().top;
			var height = $(this).parents('li').outerHeight(true);
			var body = $('html').scrollTop() || $('body').scrollTop();
			$(this).css({
				clip : 'rect(' + ((top-font) - body + 'px') + ' auto ' + (((height)+(top-font)) - body + 'px') + ' 0px)'
			});
		});
	};

	$.fn.removeStyle = function(style) {
        var search = new RegExp(style + '[^;]+;?', 'g');

        return this.each(function()
        {
            $(this).attr('style', function(i, style)
            {
                return style.replace(search, '');
            });
        });
    };
})(jQuery);

// index.jsp로 이동
//$(function(){
//	if($('body').hasClass('t') || $('body').hasClass('m')){
//	}else{
//		$('.m_article').hivefull();
//	};
//});

var _gMenuLocation = 1;
function moveMenu(type) {

	tmp = type == 'footer' ? $('#footer').offset().top : $('.m_article li.li'+(type)).offset().top;
	$('html, body').stop().animate({scrollTop:tmp},500);

}

function moveTo(num) {
	var tmp = $('.m_article li.li'+(num)).offset().top;
	$('html, body').stop().animate({scrollTop:tmp},500);

}

_gMenuScrollTop = new Array(
	0
);
function setNavi() {
	$.each($('ul.m_remarea button.m_rem'), function() {
		$(this).removeClass('on');
	});

	var header = $('#header').height();

	var currentScroll = $(window).scrollTop()+header;
	
	var sec1 = $('.m_article li.li1').offset().top;
	var sec2 = $('.m_article li.li2').offset().top;
	var sec3 = $('.m_article li.li3').offset().top;
	var sec4 = $('.m_article li.li4').offset().top;
	var sec5 = $('.m_article li.li5').offset().top;
	var sec6 = $('.m_article li.li6').offset().top;

	if(currentScroll >= sec1 &&
		currentScroll < sec2 &&
		currentScroll < sec3 &&
		currentScroll < sec4 &&
		currentScroll < sec5 &&
		currentScroll < sec6) {
		_gMenuLocation = 1;
		$('#btn_1').addClass('on');

	} else if(currentScroll > sec1 &&
		currentScroll >= sec2 &&
		currentScroll < sec3 &&
		currentScroll < sec4 &&
		currentScroll < sec5 &&
		currentScroll < sec6) {
		_gMenuLocation = 2;
		$('#btn_2').addClass('on');
	} else if(currentScroll > sec1 &&
		currentScroll > sec2 &&
		currentScroll >= sec3 &&
		currentScroll < sec4 &&
		currentScroll < sec5 &&
		currentScroll < sec6) {
		_gMenuLocation = 3;
		$('#btn_3').addClass('on');
	} else if(currentScroll > sec1 &&
		currentScroll > sec2 &&
		currentScroll > sec3 &&
		currentScroll >= sec4 &&
		currentScroll < sec5 &&
		currentScroll < sec6) {
		_gMenuLocation = 4;
		$('#btn_4').addClass('on');
	} else if(currentScroll > sec1 &&
		currentScroll > sec2 &&
		currentScroll > sec3 &&
		currentScroll > sec4 &&
		currentScroll >= sec5 &&
		currentScroll < sec6) {
		_gMenuLocation = 5;
		$('#btn_5').addClass('on');
	} else if(currentScroll > sec1 &&
		currentScroll > sec2 &&
		currentScroll > sec3 &&
		currentScroll > sec4 &&
		currentScroll > sec5 &&
		currentScroll >= sec6) {
		_gMenuLocation = 6;
		$('#btn_6').addClass('on');
	}
}
