$(function() {
	

	
	/*var navs = $('.main-menu-link');
	$('.tracked').waypoint(function(){
		$(this).addClass('active-link')
	})*/





	$('#st-accordion').accordion({
		//oneOpenedItem	: true
	});

	var myNav = $('nav.my-menu');  
	







	$(".menu--link").click(function (event) {			//Плавный скролл
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 750);
    });
    

	$('.hamburger').click(function(event){					//обработка клика на кнопку
		event.preventDefault();
		if(! myNav.hasClass('active')/* || myNav.css('display', 'none')*/){
			myNav.addClass('active');
			myNav.fadeIn();
			$(this).addClass('is-active');
		}else{
			myNav.removeClass('active');
			$(this).removeClass('is-active');
			myNav.fadeOut();
		};

	});

	$('.main-menu-link').click(function(){				// клик на пункт меню
		$('.hamburger').removeClass('is-active');
		if($('body').width()<768){
			myNav.fadeOut();
		}
		
		
	});

	
    
	$(window).scroll(function(){						// изменение цвета меню при скролле
		if($(window).scrollTop()>100){
			$('.main-nav-wrap').addClass('active-menu');
			
		}else{
			$('.main-nav-wrap').removeClass('active-menu');

		};
	});
	
	


       
 //функция выделения активного пункта меню при скролле
	var menu_selector = ".main-menu-link"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
 
	function onScroll(){					
	    var scroll_top = $(document).scrollTop();
	    $(menu_selector).each(function(){
	        var hash = $(this).attr("href");
	        var target = $(hash);
	        if (target.position().top-500 <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
	            $(menu_selector).removeClass("active-link");
	            $(this).addClass("active-link");
	        } else {
	            $(this).removeClass("active-link");
	        }
	    });
	};
    $(document).on("scroll", onScroll);
    $("a[href^=#]").click(function(e){
        e.preventDefault();
        $(document).off("scroll");
        $(menu_selector).removeClass("active-link");
        $(this).addClass("active-link");
        var hash = $(this).attr("href");
        var target = $(hash);
 
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
 
    });
	onScroll();
   

});
