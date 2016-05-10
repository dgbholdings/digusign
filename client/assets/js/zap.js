$ = (jQuery);

(function($) {
$.fn.getHiddenDimensions = function(includeMargin) {
    var $item = this,
        props = { position: 'absolute', visibility: 'hidden', display: 'block' },
        dim = { width:0, height:0, innerWidth: 0, innerHeight: 0,outerWidth: 0,outerHeight: 0 },
        $hiddenParents = $item.parents().andSelf().not(':visible'),
        includeMargin = (includeMargin == null)? false : includeMargin;

    var oldProps = [];
    $hiddenParents.each(function() {
        var old = {};

        for ( var name in props ) {
            old[ name ] = this.style[ name ];
            this.style[ name ] = props[ name ];
        }

        oldProps.push(old);
    });

    dim.width = $item.width();
    dim.outerWidth = $item.outerWidth(includeMargin);
    dim.innerWidth = $item.innerWidth();
    dim.height = $item.height();
    dim.innerHeight = $item.innerHeight();
    dim.outerHeight = $item.outerHeight(includeMargin);

    $hiddenParents.each(function(i) {
        var old = oldProps[i];
        for ( var name in props ) {
            this.style[ name ] = old[ name ];
        }
    });

    return dim;
}
}(jQuery));

// SMOOTH LOADING PAGES
$(window).load(function() {
	$(".loading-pages").fadeOut("slow");
})

jQuery(document).ready(function(){
			
	var newHeight = Math.floor(jQuery('.header_container').height())-1;
	var menuHeight = jQuery('#menulava').height()-3;
	if ($('#headerStyleType').html() === "style4"){
		menuHeight += 3;
	}
	var output = ".sf-menu li:hover ul, .sf-menu li.sfHover ul {top: "+menuHeight+"px;}";

	window.smallmenuadded = false;
	if (jQuery('#menu.n-menu').length){
		var menuSmallHeight = jQuery('#menu.n-menu #menulava').height();
		output += "#menu.n-menu .sf-menu > li:hover ul, #menu.n-menu .sf-menu > li.sfHover ul {top: "+menuSmallHeight+"px;} #menu.n-menu .sf-menu > li:hover > ul ul, #menu.n-menu .sf-menu > li.sfHover ul ul {top: 0px;}";
		window.smallmenuadded = true;
	}
	
	if (window.BrowserDetect.browser === "Explorer" && window.BrowserDetect.version === 8){
		/**/
	} else {
		var styleNode = document.createElement('style');
		styleNode.setAttribute("type", "text/css");
		var textNode = document.createTextNode(output);
		styleNode.appendChild(textNode);
		document.getElementsByTagName('head')[0].appendChild(styleNode);						
	}
	
	/* Sticky Menu Effect */
	jQuery(window).scroll(function(){
		if (jQuery(this).scrollTop() > 10){
		    //make CSS changes here
		    jQuery('.slogan').addClass("n-slogan");
		    jQuery('.header_container').addClass("n-hc");
		    jQuery('#map').addClass("mapeff");
		    jQuery('.logo_and_menu').addClass("n-hm");
		    jQuery('.logo a').addClass("n-la");
		    jQuery('.logo img').addClass("n-li");
			jQuery('#menulava > li > a').addClass("n-ma");							
		    jQuery('#menu').addClass("n-menu");
		    jQuery('#slider_container').addClass("n-slider-container");
		    jQuery('.home-no-slider').addClass("n-home-no-slider");
		    jQuery('.flexslider_container').addClass("n-slider-flex");
		    jQuery('.fullwidth-container').addClass("n-fullwidthcontainer");
		    
		    if (jQuery('#headerStyleType').html() !== "style1"){
		    	jQuery('.fullwidth_container').not('.fullwidth_container_menu').slideUp(500, "easeOutExpo");
		    }
		    				    
		    setTimeout(function(){
			    if (!window.smallmenuadded){
			    	var menuSmallHeight = jQuery('#menu.n-menu #menulava').height()+8;
					var output = "#menu.n-menu .sf-menu > li:hover ul, #menu.n-menu .sf-menu > li.sfHover ul {top: "+menuSmallHeight+"px;} #menu.n-menu .sf-menu > li:hover > ul ul, #menu.n-menu .sf-menu > li.sfHover ul ul {top: 0px;}";
					window.smallmenuadded = true;
				    var styleNode = document.createElement('style');
					styleNode.setAttribute("type", "text/css");
					var textNode = document.createTextNode(output);
					styleNode.appendChild(textNode);
					document.getElementsByTagName('head')[0].appendChild(styleNode);
			    }
		    }, 500);
		} else {
		    //back to default styles
		    jQuery('.header_container').removeClass("n-hc");
		    jQuery('#map').removeClass("mapeff");
			jQuery('#menulava > li > a').removeClass("n-ma");							
		    jQuery('.logo_and_menu').removeClass("n-hm");
		    jQuery('.logo a').removeClass("n-la");
		    jQuery('.logo img').removeClass("n-li");
		    jQuery('#menu').removeClass("n-menu");
		    jQuery('#slider_container').removeClass("n-slider-container");
		    jQuery('.home-no-slider').removeClass("n-home-no-slider");
		    jQuery('.flexslider_container').removeClass("n-slider-flex");
		    jQuery('.slogan').removeClass("n-slogan");
		    jQuery('.fullwidth-container').removeClass("n-fullwidthcontainer");
		    
		    if (jQuery('#headerStyleType').html() !== "style1"){
		    	jQuery('.fullwidth_container').not('.fullwidth_container_menu').slideDown(500);
		    }
		    
		    if (jQuery('body > .fullwidth-section').length){
				jQuery('body > .fullwidth-section').each(function(){
					var thisClass = jQuery(this).attr('class');
						thisClass = thisClass.split('fullwidth-section ');	
						thisClass = thisClass[1];
					jQuery('body > .'+thisClass).css({'top': jQuery('.'+thisClass).eq(1).offset().top, 'position':'absolute', 'margin-bottom':'50px'});
			    });
		    }
		}
	});
	
});

jQuery(document).ready(function(){
	if (jQuery('#mc-embedded-subscribe').length){
		jQuery('#mce-EMAIL').after(jQuery('#mc-embedded-subscribe'));
		jQuery('#mce-EMAIL').val('ENTER YOUR EMAIL HERE');
		jQuery('#mce-EMAIL').focus(function(){
			if (jQuery(this).val() == 'ENTER YOUR EMAIL HERE')
				jQuery(this).val('');
		});
		jQuery('#mce-EMAIL').blur(function(){
			if (jQuery(this).val() == ''){
				jQuery(this).val('ENTER YOUR EMAIL HERE');
			}
		});
		jQuery('#mc-embedded-subscribe').parents('.form').find('label').remove();
	}						
});

/*****************************************************************************************
**************************   PARALLAX   **************************************************
*****************************************************************************************/
	$(window).bind('load', function() { 
		parallaxInit();	
		$.waypoints("refresh");
		var t=setTimeout(function(){$.waypoints("refresh");},3000);
		
	});
	function parallaxInit(){
		$('#parallax-1').parallax();
		$('#parallax-2').parallax();
		$('#parallax-3').parallax();
		$('#parallax-4').parallax();	
		$('#parallax-5').parallax();
		$('#parallax-6').parallax();		
		/* ADD AS NECESSARY */
	}	

function checkMenu(){
	
	if ($('#headerStyleType').html() === "style1" || $('#headerStyleType').html() === "style2"){
		if ($(window).width() < 980){
			$('header #menulava > li.current-menu-item, header #menulava > li.current-menu-ancestor').css({
			  	'border-bottom': '3px solid',
			  	'border-top': 'none'
		  	});
		} else {
			$('header #menulava > li.current-menu-item, header #menulava > li.current-menu-ancestor').css({
			  	'border-bottom': '0px'
		  	});
		}	
	}
	
}

function closestEdge(x , y, elx, ely, w, h) {
	var distTop = y - ely;
	var distBottom = ely + h - y;
	var distLeft = x - elx;
	var distRight = w - distLeft;
	var min = Math.min(distTop,distBottom,distLeft,distRight);
	switch(min){
		case distTop: return "top"; break;
		case distBottom: return "bottom"; break;
		case distLeft: return "left"; break;
		case distRight: return "right"; break;
	}
}



/*****************************************************************************************
**************************   PROJECT STYLE 1   *******************************************
*****************************************************************************************/
function checkProjStyle1(){
	
	var color = $('').html();
	/* if individual project thumbnail hover isn't default */
	$('.post-thumb').each(function(){
		var hoverOption = "";
		if ($(this).parent().attr('data-rel')){
			hoverOption = $(this).parent().attr('data-rel');
		} else hoverOption = $('#zap_thumbnails_hover_option').html();
		switch (hoverOption){
			case "link_magnifier":
				$(this).find('.mask').each(function(){
					$(this).removeAttr('onclick');
					$(this).children('.more').addClass('notalone').html('<i class="fa fa-search"></i><div class="scale"></div>');
					$(this).children('.link').addClass('notalone').html('<i class="fa fa-link"></i><div class="scale"></div>');
					$(this).parents('.post-thumb').hover(function(e){
						if (!$(this).hasClass('isHovered')){
							$(this).addClass('isHovered');
							var dir = closestEdge(e.pageX, e.pageY, $(this).offset().left, $(this).offset().top, $(this).width(), $(this).height());
							$(this).find('.mask > div').css('display','none');
							$(this).find('.mask').children().unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
							switch (dir){
								case "left": $(this).find('.mask').children().clone().addClass('new').css({
													'top':'50%',
													'left':'0%',
													'display':'block'
												}).appendTo($(this).find('.mask'));
												
												$(this).find('.mask').children('div:not(.new)').remove();
												$(this).find('.mask').children('.new').focus().css({
													'-webkit-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-moz-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-o-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-ms-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'opacity':'1',
													'filter':'alpha(opacity=100)',
													'top':'50%',
													'left':'50%'
												});
											 break;
								case "right": $(this).find('.mask').children().clone().addClass('new').css({
													'top':'50%',
													'left':'100%',
													'display':'block'
												}).appendTo($(this).find('.mask'));
												$(this).find('.mask').children('div:not(.new)').remove();
												$(this).find('.mask').children('.new').focus().css({
													'-webkit-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-moz-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-o-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-ms-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'opacity':'1',
													'filter':'alpha(opacity=100)',
													'top':'50%',
													'left':'50%'
												});	 
											  break;
								case "top": $(this).find('.mask').children().clone().addClass('new').css({
													'top':'-10%',
													'left':'50%',
													'display':'block'
												}).appendTo($(this).find('.mask'));
												$(this).find('.mask').children('div:not(.new)').remove();
												$(this).find('.mask').children('.new').focus().css({
													'-webkit-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-moz-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-o-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-ms-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'opacity':'1',
													'filter':'alpha(opacity=100)',
													'top':'50%',
													'left':'50%'
												});
											 break;
								case "bottom": $(this).find('.mask').children().clone().addClass('new').css({
													'top':'110%',
													'left':'50%',
													'display':'block'
												}).appendTo($(this).find('.mask'));
												$(this).find('.mask').children('div:not(.new)').remove();
												$(this).find('.mask').children('.new').focus().css({
													'-webkit-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-moz-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-o-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-ms-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'opacity':'1',
													'filter':'alpha(opacity=100)',
													'top':'50%',
													'left':'50%'
												});
											 break;
							}
							$(this).find('.mask').children().removeClass('new');
						}
					}, function(e){
						$(this).removeClass('isHovered');
						var dir = closestEdge(e.pageX, e.pageY, $(this).offset().left, $(this).offset().top, $(this).width(), $(this).height());
						switch (dir){
							case "left": $(this).find('.mask').children().css({
											'opacity':'0',
											'filter':'alpha(opacity=0)',
											'top':'50%',
											'left':'0%',
										 });
										 break;
							case "right": $(this).find('.mask').children().css({
											'opacity':'0',
											'filter':'alpha(opacity=0)',
											'left':'100%',
											'top':'50%'
										 });
										  break;
							case "top": $(this).find('.mask').children().css({
											'opacity':'0',
											'filter':'alpha(opacity=0)',
											'top':'0%',
											'left':'50%'
										 });
										 break;
							case "bottom": $(this).find('.mask').children().css({
											'opacity':'0',
											'filter':'alpha(opacity=0)',
											'top':'100%',
											'left':'50%'
										 });
										 break;
						}
					});
				});	
				break;
			case "link": 
				$(this).find('.mask').each(function(){
					$(this).removeAttr('onclick');
					$(this).children('.more').remove();
					$(this).children('.link').html('<i class="fa fa-link"></i><div class="scale"></div>');
					$(this).parents('.post-thumb').hover(function(e){
						if (!$(this).hasClass('isHovered')){
							$(this).addClass('isHovered');
							var dir = closestEdge(e.pageX, e.pageY, $(this).offset().left, $(this).offset().top, $(this).width(), $(this).height());
							$(this).find('.mask > div').css('display','none');
							$(this).find('.mask').children().unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
							switch (dir){
								case "left": $(this).find('.mask').children().clone().addClass('new').css({
													'top':'50%',
													'left':'0%',
													'display':'block'
												}).appendTo($(this).find('.mask'));
												
												$(this).find('.mask').children('div:not(.new)').remove();
												$(this).find('.mask').children('.new').focus().css({
													'-webkit-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-moz-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-o-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-ms-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'opacity':'1',
													'filter':'alpha(opacity=100)',
													'top':'50%',
													'left':'50%'
												});
											 break;
								case "right": $(this).find('.mask').children().clone().addClass('new').css({
													'top':'50%',
													'left':'100%',
													'display':'block'
												}).appendTo($(this).find('.mask'));
												$(this).find('.mask').children('div:not(.new)').remove();
												$(this).find('.mask').children('.new').focus().css({
													'-webkit-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-moz-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-o-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-ms-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'opacity':'1',
													'filter':'alpha(opacity=100)',
													'top':'50%',
													'left':'50%'
												});	 
											  break;
								case "top": $(this).find('.mask').children().clone().addClass('new').css({
													'top':'-10%',
													'left':'50%',
													'display':'block'
												}).appendTo($(this).find('.mask'));
												$(this).find('.mask').children('div:not(.new)').remove();
												$(this).find('.mask').children('.new').focus().css({
													'-webkit-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-moz-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-o-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-ms-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'opacity':'1',
													'filter':'alpha(opacity=100)',
													'top':'50%',
													'left':'50%'
												});
											 break;
								case "bottom": $(this).find('.mask').children().clone().addClass('new').css({
													'top':'110%',
													'left':'50%',
													'display':'block'
												}).appendTo($(this).find('.mask'));
												$(this).find('.mask').children('div:not(.new)').remove();
												$(this).find('.mask').children('.new').focus().css({
													'-webkit-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-moz-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-o-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-ms-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'opacity':'1',
													'filter':'alpha(opacity=100)',
													'top':'50%',
													'left':'50%'
												});
											 break;
							}
							$(this).find('.mask').children().removeClass('new');	
						} else return false;
					}, function(e){
						$(this).removeClass('isHovered');
						var dir = closestEdge(e.pageX, e.pageY, $(this).offset().left, $(this).offset().top, $(this).width(), $(this).height());
						switch (dir){
							case "left": $(this).find('.mask').children().css({
											'opacity':'0',
											'filter':'alpha(opacity=0)',
											'top':'50%',
											'left':'0%',
										 });
										 break;
							case "right": $(this).find('.mask').children().css({
											'opacity':'0',
											'filter':'alpha(opacity=0)',
											'left':'100%',
											'top':'50%'
										 });
										  break;
							case "top": $(this).find('.mask').children().css({
											'opacity':'0',
											'filter':'alpha(opacity=0)',
											'top':'0%',
											'left':'50%'
										 });
										 break;
							case "bottom": $(this).find('.mask').children().css({
											'opacity':'0',
											'filter':'alpha(opacity=0)',
											'top':'100%',
											'left':'50%'
										 });
										 break;
						}
					});
				});	
				break;
			case "magnifier":
				$(this).find('.mask').each(function(){
					$(this).removeAttr('onclick');
					$(this).children('.link').remove();
					$(this).children('.more').html('<i class="fa fa-search"></i><div class="scale"></div>');
					$(this).parents('.post-thumb').hover(function(e){
						if (!$(this).hasClass('isHovered')){
							$(this).addClass('isHovered');
							var dir = closestEdge(e.pageX, e.pageY, $(this).offset().left, $(this).offset().top, $(this).width(), $(this).height());
							$(this).find('.mask > div').css('display','none');
							$(this).find('.mask').children().unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
							switch (dir){
								case "left": $(this).find('.mask').children().clone().addClass('new').css({
													'top':'50%',
													'left':'0%',
													'display':'block'
												}).appendTo($(this).find('.mask'));
												$(this).find('.mask').children('div:not(.new)').remove();
												$(this).find('.mask').children('.new').focus().css({
													'-webkit-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-moz-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-o-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-ms-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'opacity':'1',
													'filter':'alpha(opacity=100)',
													'top':'50%',
													'left':'50%'
												});
											 break;
								case "right": $(this).find('.mask').children().clone().addClass('new').css({
													'top':'50%',
													'left':'100%',
													'display':'block'
												}).appendTo($(this).find('.mask'));
												$(this).find('.mask').children('div:not(.new)').remove();
												$(this).find('.mask').children('.new').focus().css({
													'-webkit-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-moz-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-o-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-ms-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'opacity':'1',
													'filter':'alpha(opacity=100)',
													'top':'50%',
													'left':'50%'
												});	 
											  break;
								case "top": $(this).find('.mask').children().clone().addClass('new').css({
													'top':'-10%',
													'left':'50%',
													'display':'block'
												}).appendTo($(this).find('.mask'));
												$(this).find('.mask').children('div:not(.new)').remove();
												$(this).find('.mask').children('.new').focus().css({
													'-webkit-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-moz-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-o-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-ms-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'opacity':'1',
													'filter':'alpha(opacity=100)',
													'top':'50%',
													'left':'50%'
												});
											 break;
								case "bottom": $(this).find('.mask').children().clone().addClass('new').css({
													'top':'110%',
													'left':'50%',
													'display':'block'
												}).appendTo($(this).find('.mask'));
												$(this).find('.mask').children('div:not(.new)').remove();
												$(this).find('.mask').children('.new').focus().css({
													'-webkit-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-moz-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-o-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'-ms-transition': 'all 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
													'opacity':'1',
													'filter':'alpha(opacity=100)',
													'top':'50%',
													'left':'50%'
												});
											 break;
							}
							$(this).find('.mask').children().removeClass('new');
						} else return false;
					}, function(e){
						$(this).removeClass('isHovered');
						var dir = closestEdge(e.pageX, e.pageY, $(this).offset().left, $(this).offset().top, $(this).width(), $(this).height());
						switch (dir){
							case "left": $(this).find('.mask').children().css({
											'opacity':'0',
											'filter':'alpha(opacity=0)',
											'top':'50%',
											'left':'0%',
										 });
										 break;
							case "right": $(this).find('.mask').children().css({
											'opacity':'0',
											'filter':'alpha(opacity=0)',
											'left':'100%',
											'top':'50%'
										 });
										  break;
							case "top": $(this).find('.mask').children().css({
											'opacity':'0',
											'filter':'alpha(opacity=0)',
											'top':'0%',
											'left':'50%'
										 });
										 break;
							case "bottom": $(this).find('.mask').children().css({
											'opacity':'0',
											'filter':'alpha(opacity=0)',
											'top':'100%',
											'left':'50%'
										 });
										 break;
						}
					});
				});
				break;
			case "none":
				$(this).find('.mask').each(function(){
					$(this).children('.more').remove();
					$(this).removeAttr('onclick').click(function(){ $(this).find('.link').trigger('click'); });
				});
				break;
		}
		
		if (window.BrowserDetect.browser == "Explorer" && window.BrowserDetect.version == 8){
			$(this).find('.mask').parents('.post-thumb').parent().hover(function(){
				$(this).find('i').css('opacity',1);
				var argb = '#CC'+$('').html().substring(1);
				$(this).find('.mask').css({
					'background':'none',
					'-ms-filter':'progid:DXImageTransform.Microsoft.gradient(startColorstr='+argb+',endColorstr='+argb+')',
					'filter':'progid:DXImageTransform.Microsoft.gradient(startColorstr='+argb+',endColorstr='+argb+')',
					'zoom':'1'
				});
			}, function(){
				$(this).find('.mask').css({
					'background':'none',
					'-ms-filter':'progid:DXImageTransform.Microsoft.gradient(startColorstr=#FFFFFFFF,endColorstr=#FFFFFFFF)',
					'filter':'progid:DXImageTransform.Microsoft.gradient(startColorstr=#FFFFFFFF,endColorstr=#FFFFFFFF)',
					'zoom':'1'
				});
			});
		} else {
			$(this).find('.mask').parents('.post-thumb').parent().hover(function(){
				$(this).find('i').css('opacity',1);
				$(this).find('.mask').css('background-color');
			}, function(){
				$(this).find('.mask').css('background-color');
			});		
		}
		
		$(this).find('.mask i').css('opacity',0);
	});

}



$(function(){

	/* prettyphoto images */
	$('a.shortcode-img').each(function(e){
		$(this).wrap('<div class="image_container" style="position:relative;display:inline-block; "/>');
		$(this).before('<div class="mask"><div class="more" onclick="$(this).parents(\'.image_container\').find(\'.prettyphoto\').click();"></div></div>');
		$(this).prettyPhoto();
	});

	/* Hover in the Project Media */
	if ($('.projects_media .mask, .featured-image-thumb .mask, .image_container .mask').length){
		$('.projects_media .mask, .featured-image-thumb .mask, .image_container .mask').each(function(){
		
			$(this).css('z-index',999);
			$(this).removeAttr('onclick');
			$(this).children('.link').remove();
			$(this).children('.more').html('<i class="fa fa-search"></i><div class="scale"></div>');
			$(this).find('i').css('opacity',0);
			
			$(this).parent().hover(function(e){
				if (!$(this).hasClass('isHovered')){
					$(this).addClass('isHovered');
					$(this).find('i').css('opacity',1);
					var dir = closestEdge(e.pageX, e.pageY, $(this).offset().left, $(this).offset().top, $(this).width(), $(this).height());
					$(this).find('.mask > div').css('display','none');
					$(this).find('.mask').children().unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
					switch (dir){
						case "left": $(this).find('.mask').children().clone().addClass('new').css({
											'top':'50%',
											'left':'0%',
											'display':'block'
										}).appendTo($(this).find('.mask'));
										$(this).find('.mask').children('div:not(.new)').remove();
										$(this).find('.mask').children('.new').focus().css({
											'-webkit-transition': 'all 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
											'-moz-transition': 'all 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
											'-o-transition': 'all 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
											'-ms-transition': 'all 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
											'opacity':'1',
											'filter':'alpha(opacity=100)',
											'top':'50%',
											'left':'50%'
										});
									 break;
						case "right": $(this).find('.mask').children().clone().addClass('new').css({
											'top':'50%',
											'left':'100%',
											'display':'block'
										}).appendTo($(this).find('.mask'));
										$(this).find('.mask').children('div:not(.new)').remove();
										$(this).find('.mask').children('.new').focus().css({
											'-webkit-transition': 'all 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
											'-moz-transition': 'all 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
											'-o-transition': 'all 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
											'-ms-transition': 'all 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
											'opacity':'1',
											'filter':'alpha(opacity=100)',
											'top':'50%',
											'left':'50%'
										});	 
									  break;
						case "top": $(this).find('.mask').children().clone().addClass('new').css({
											'top':'-10%',
											'left':'50%',
											'display':'block'
										}).appendTo($(this).find('.mask'));
										$(this).find('.mask').children('div:not(.new)').remove();
										$(this).find('.mask').children('.new').focus().css({
											'-webkit-transition': 'all 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
											'-moz-transition': 'all 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
											'-o-transition': 'all 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
											'-ms-transition': 'all 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
											'opacity':'1',
											'filter':'alpha(opacity=100)',
											'top':'50%',
											'left':'50%'
										});
									 break;
						case "bottom": $(this).find('.mask').children().clone().addClass('new').css({
											'top':'110%',
											'left':'50%',
											'display':'block'
										}).appendTo($(this).find('.mask'));
										$(this).find('.mask').children('div:not(.new)').remove();
										$(this).find('.mask').children('.new').focus().css({
											'-webkit-transition': 'all 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
											'-moz-transition': 'all 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
											'-o-transition': 'all 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
											'-ms-transition': 'all 0.2s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
											'opacity':'1',
											'filter':'alpha(opacity=100)',
											'top':'50%',
											'left':'50%'
										});
									 break;
					}
					$(this).find('.mask').children().removeClass('new');	
				} else return false;
			}, function(e){
				$(this).removeClass('isHovered');
				var dir = closestEdge(e.pageX, e.pageY, $(this).offset().left, $(this).offset().top, $(this).width(), $(this).height());
				switch (dir){
					case "left": $(this).find('.mask').children().css({
									'opacity':'0',
									'filter':'alpha(opacity=0)',
									'top':'50%',
									'left':'0%',
								 });
								 break;
					case "right": $(this).find('.mask').children().css({
									'opacity':'0',
									'filter':'alpha(opacity=0)',
									'left':'100%',
									'top':'50%'
								 });
								  break;
					case "top": $(this).find('.mask').children().css({
									'opacity':'0',
									'filter':'alpha(opacity=0)',
									'top':'0%',
									'left':'50%'
								 });
								 break;
					case "bottom": $(this).find('.mask').children().css({
									'opacity':'0',
									'filter':'alpha(opacity=0)',
									'top':'100%',
									'left':'50%'
								 });
								 break;
				}
			});
		});
		
		if ($('.projects_media .flexslider').length){
			$('.projects_media .flexslider .mask .more').attr('onclick', '$(\'.projects_media .flexslider ul.slides li:not(.clone)\').eq(0).find(\'a\').trigger(\'click\');');
			$('.projects_media .flexslider ul.slides li a').prettyPhoto();
		}
		
		if ($('.flexslider .mask').length){
		    $('.flexslider .flex-direction-nav li a, .flexslider .flex-control-nav').hover(function(){
		    	$(this).closest('.flexslider').find('.mask .more').css('opacity',0);
		    }, function(){
		    	$(this).closest('.flexslider').find('.mask .more').css('opacity',1);				
		    });
		}
	
	}

	checkProjStyle1();
	
	$('.metas').each(function(){
		if ($(this).find('.tags').html() == ""){
			$(this).find('.tags').parent().remove();
		}
	});

	/* TOOLTIPS - OPEN TOP / OPEN BOTTOM */
	$.tools.tooltip.addEffect("designa_style4",
		  function(done) {
			  var conf = this.getConf(), tip = this.getTip();
		 	  if (!tip.find('.tt_triangle').length){ tip.append('<div class="tt_triangle" />'); } 
			  tip.find('.tt_triangle').css({ 'margin-left' : (tip.width() - tip.find('.tt_triangle').width())/2 });
			  
			  if ($('.n-hc').length){
				  tip.addClass('tooltipdown');
			 	  if (!tip.find('.tt_triangle').length){ tip.prepend('<div class="tt_triangle" />'); } 
				  tip.find('.tt_triangle').css({ 'margin-left' : (tip.width() - tip.find('.tt_triangle').width())/2 });
				  tip.stop().css('display','block').animate({opacity: 1, top: '+=10'}, 200);
			  } else {
				  tip.removeClass('tooltipdown');
				  tip.stop().css({'display':'block', 'cursor':'pointer'}).animate({opacity: 1, top: '-=10'}, 200);	  
			  }
			  
			  done.call();
		  },
		  function(done) {
		  
			  if ($('.n-hc').length){
				 this.getTip().animate({opacity: 0, top: '-=10'}, 200, function(){
				 	$(this).removeClass('tooltipdown');
				 	$(this).css('display','none');
				 	done.call();
			 	 });

			  } else {
				  this.getTip().animate({opacity: 0, top: '+=10'}, 200, function(){
				 	 $(this).css('display','none');
				 	 done.call();
			 	  });
			  }		  
		  
		  
		 	 
		  }
	);
	
	$.tools.tooltip.addEffect("designa",
		  function(done) {
			  var conf = this.getConf(), tip = this.getTip();
		 	  if (!tip.find('.tt_triangle').length){ tip.append('<div class="tt_triangle" />'); } 
			  tip.find('.tt_triangle').css({ 'margin-left' : (tip.width() - tip.find('.tt_triangle').width())/2 });
			  tip.stop().css({'display':'block', 'cursor':'pointer'}).animate({opacity: 1, top: '-=10'}, 200);
			  done.call();
		  },
		  function(done) {
		 	 this.getTip().animate({opacity: 0, top: '+=10'}, 200, function(){
			 	 $(this).css('display','none');
			 	 done.call();
		 	 });
		  }
	);
	
	$.tools.tooltip.addEffect("designaDowner",
		  function(done) {
			  var conf = this.getConf(), tip = this.getTip();
			  tip.addClass('tooltipdown');
		 	  if (!tip.find('.tt_triangle').length){ tip.prepend('<div class="tt_triangle" />'); } 
			  tip.find('.tt_triangle').css({ 'margin-left' : (tip.width() - tip.find('.tt_triangle').width())/2 });
			  tip.stop().css('display','block').animate({opacity: 1, top: '+=10'}, 200);
			  done.call();
		  },
		  function(done) {
		 	 this.getTip().animate({opacity: 0, top: '-=10'}, 200, function(){
			 	$(this).css('display','none');
			 	done.call();
		 	 });
		  }
	);
	
	$.tools.tooltip.addEffect("designaLight",
		  function(done) {
			  var conf = this.getConf(), tip = this.getTip();
			  tip.addClass('light');
		 	  if (!tip.find('.tt_triangle').length){ tip.append('<div class="tt_triangle" />'); } 
			  tip.find('.tt_triangle').css({ 'margin-left' : (tip.width() - tip.find('.tt_triangle').width())/2 });
			  tip.stop().css('display','block').animate({opacity: 1, top: '-=10'}, 200);
			  done.call();
		  },
		  function(done) {
		 	 this.getTip().animate({opacity: 0, top: '+=10'}, 200, function(){
			 	 $(this).css('display','none');
			 	done.call();
		 	 });
		  }
	);
	
	$.tools.tooltip.addEffect("designaDark",
		  function(done) {
			  var conf = this.getConf(), tip = this.getTip();
			  tip.addClass('dark');
		 	  if (!tip.find('.tt_triangle').length){ tip.append('<div class="tt_triangle" />'); } 
			  tip.find('.tt_triangle').css({ 'margin-left' : (tip.width() - tip.find('.tt_triangle').width())/2 });
			  tip.stop().css('display','block').animate({opacity: 1, top: '-=10'}, 200);
			  done.call();
		  },
		  function(done) {
		 	 this.getTip().animate({opacity: 0, top: '+=10'}, 200, function(){
			 	 $(this).css('display','none');
			 	 done.call();
		 	 });
		  }
	);

	/* GO BLOG */
	$('div.goto_projects[title], div.goto_blog[title]').tooltip({
		effect: "designa"
	});
		
	$('span.tooltiper[title]').each(function(i){
		if ($(this).hasClass('tooltip-Light')){
			$(this).tooltip({ effect: "designaLight", delay: 250 });
			$(this).trigger('mouseenter').trigger('mouseleave');
			if (isMobile.any()){
				$(this).click(function(){
					$(this).trigger('mouseenter');
				});
			}
		} else {
			$(this).tooltip({ effect: "designaDark", delay: 250 });
			$(this).trigger('mouseenter').trigger('mouseleave');
			if (isMobile.any()){
				$(this).click(function(){
					$(this).trigger('mouseenter');
				});
			}
		}
	});
	
	/* ACCORDEON SUBSTITUTE FOR VERTICAL TABS AND CIRCLE SERVICES */
	if ($('.shortcode-accs').length){
		$('.shortcode-accs').each(function(e){
			$(this).tabs(
			    ".shortcode-accs div.pane",
			    {tabs: '.acc-title > h2', effect: 'slide', initialIndex: 0}
			);
		});
	}

	/* TOP PANEL */
	if ($("#toppanel").length){
		$('#toppanel').css({'opacity':0, 'display':'none'});
	}

	if ($('#nav-below').length){
		$('#nav-below').children('div').each(function(){
			if ($(this).html().length < 1){
				$(this).css('display','none');
			}
		});		
	}	    
  
    
	/* GENEREATE MENU */
	$('ul#menulava, ul#menulava_top').supersubs({ 
	  minWidth:    10,   // minimum width of sub-menus in em units 
	  maxWidth:    22,   // maximum width of sub-menus in em units 
	  extraWidth:  1     // extra width can ensure lines don't sometimes turn over 
	                     // due to slight rounding differences and font-family 
	}).superfish({ 
	  animation: {height:'show'},   // slide-down effect without fade-in 
	  delay:     0,               // 1.2 second delay on mouseout 
	  disableHI: true
	});
	
	$("header #menulava > li > a").each(function(){
	
		$(".dropdown-menu" ).change(
		      function() { 
		      	if($(this).find("option:selected").val() != "")
		          window.location = $(this).find("option:selected").val();
		      }
		 );
		  
		 $(this).find('span').eq($(this).find('span').length - 1).after($(this).children('p'));
	});
});



$(window).load(function(){

	/* HIDE MASK ON FLEXSLIDER CONTROLS HOVER */
	jQuery('.single-p .projects_media .flex-control-nav li').add(jQuery('.single-p .projects_media .flex-direction-nav li')).hover(function(){
		jQuery(this).parent().siblings('.mask').css('opacity',0);
	}, function(){
		jQuery(this).parent().siblings('.mask').css('opacity',1);		
	});
	
	/* TOP PANEL STUFF */
	if ($('#toppanel').length){
		$('#toppanel').stop().slideUp(1).css('opacity',1);
		$("#toppanel_trigger").click(function(){
			if (!$(this).hasClass('open')) {
				$(this).stop().animate({'top':'-25px'}, 200, function(){
					$(this).css('opacity',0);
					$('#toppanel').stop().slideDown( 500, "easeOutSine", function(){
					
						if ($('#toppanel').height() > $(window).height()){
							$('#toppanel .toppanel_content > .container').css('overflow-y','scroll');
							$('.toppanel_content > .fullwidth_container.ontoppanel').css({'position':'fixed','bottom':'0'});
							$('#toppanel .toppanel_content > .container').height( $(window).height()-$(this).siblings('.fullwidth_container.ontoppanel').height());
							var lowest = 0;
							var bottom = 0;
							$('#toppanel .toppanel_content > .container').children().each(function(e){
								if ($(this).offset().top+$(this).height() > bottom) {
									bottom = $(this).offset().top + $(this).height();
									lowest = e;
								}
							});
							$('#toppanel .toppanel_content > .container').children().eq(lowest).css('margin-bottom',$(window).height()/2);
						} 
						
					});								
				});
				$(this).addClass('open');
			} 
			else {
				$('#toppanel').stop().slideUp(500, "easeOutSine", function(){
					$('#toppanel_trigger').stop().css('opacity',1).animate({'top':'0px'}, 200, function(){
						$('#toppanel .toppanel_content').css('overflow-y','hidden');
						$('.toppanel_content > .fullwidth_container.ontoppanel').css({'position':'relative','bottom':'0'});
					});	
				});
				$(this).removeClass('open');
			}
		});	
	}

	/* BLOG SLIDER IMAGES */
	if ($('.rp_style1_img').length){
		$('.rp_style1_img').each(function(){
			$(this).animate({'opacity':1},500);
			if ($(this).height() < $(this).parents('ul').siblings('.magnifier').height()){
				$(this).css({'width':'auto', 'height':'100%'}).addClass('altered');
			}
		});
	}

});

/* DESIGNARE SLIDER */
function randomXToY(minVal,maxVal,floatVal){
  var randVal = minVal+(Math.random()*(maxVal-minVal));
  return typeof floatVal=='undefined'?Math.round(randVal):randVal.toFixed(floatVal);
}

function animateElement($el, type, animation){
	
	var delay = 0;
	switch (type){
		case "title": delay = 0; speedTrans = randomXToY(500,1500) ; break;
		case "text": delay = 300;  speedTrans = randomXToY(500,1500); break;
		case "image": delay = 300;  speedTrans = randomXToY(500,1500); break;
		case "button": delay = 900;  speedTrans = randomXToY(500,1500); break;
	}
	
	switch (animation){
		case "des_moveFromTop": 
			$el
				.css({'opacity':0, 'top':'-100%'})
				.delay(delay)
				.animate({ 'opacity': 1, 'top': '0px' },speedTrans, 'easeInOutExpo');
			break;
		case "des_moveFromBottom": 
			$el
				.css({'opacity':0, 'bottom':'-100%'})
				.delay(delay)
				.animate({ 'opacity': 1, 'bottom': '0px' },speedTrans, 'easeInOutExpo');
			break;
		case "des_moveFromLeft": 
			if (type == "text"){
				$el
					.css({'opacity':0, 'margin-left':'-100%'})
					.delay(delay)
					.animate({ 'opacity': 1, 'margin-left': '0px' },speedTrans, 'easeInOutExpo');
			} else {
				$el
					.css({'opacity':0, 'left':'-100%'})
					.delay(delay)
					.animate({ 'opacity': 1, 'left': '0px' },speedTrans, 'easeInOutExpo');	
			}
			break;
		case "des_moveFromRight": 
			if (type == "text"){
				$el
					.css({'opacity':0, 'margin-right':'-100%'})
					.delay(delay)
					.animate({ 'opacity': 1, 'margin-right': '0px' },speedTrans, 'easeInOutExpo');
			} else {
				$el
					.css({'opacity':0, 'right':'-100%'})
					.delay(delay)
					.animate({ 'opacity': 1, 'right': '0px' },speedTrans, 'easeInOutExpo');	
			}
			break;
		case "des_fade":
			$el
				.css({'opacity':0})
				.delay(delay)
				.animate({ 'opacity': 1},1500, 'easeInOutExpo');
			break;
	}
}


$(document).ready(function(){

	/*asshole IE*/
	if (window.BrowserDetect.browser === "Explorer"){
		$('.info_above_menu .telephone i, .info_above_menu .email i, .info_above_menu .address i').css('vertical-align', 'middle');	
	}	
	
	/* NEWSLETTER EMAIL VERIFICATION */
	if ($('#mc-embedded-subscribe').length){
		$('#mc-embedded-subscribe').click(function(e){
			if (!validate_email($('#mce-EMAIL').val())){
				e.stopPropagation();
				e.preventDefault();
				$('#mce-EMAIL').css({'border':'1px solid #D07F7F', 'color':'#D07F7F'}).val('Please insert a valid email');
				$('#mce-EMAIL').focus(function(){
					$(this).val('');
					$(this).css({
						'border':'none',
						'color': 'rgb(192, 191, 191)'
					});
				});
				return false;
			}
		});
	}
	
	/* PROJECTS PER ROW | RECENT PROJECTS WITHOUT SCROLLER */
	window.ration = .75;
	
	$('.recentProjects3 .projs_row .indproj1').each(function(){
		var newHeight = $(this).width() * window.ration;
		$(this).find('.ch-item a, .ch-item').css('height',newHeight);
	});
	$('.recentProjects4 .projs_row .indproj2').each(function(){
		var newHeight = $(this).width() * window.ration;
		$(this).find('.da-thumbs li a').css('height',newHeight);
	});
	
	/* PROJECTS IMAGE RATIO */
	if ($('#projects-1 .proj_list').length){
		$('#projects-1 .proj_list').each(function(){
			if ($(this).children().eq(0).length){
				var newHeight = Math.round($(this).children().eq(0).width() * window.ration);
			}
			$(this).children().find('li.nc').height(newHeight);
		});
	}
	if ($('#projects-2 ul.da-thumbs').length){
		$('#projects-2 ul.da-thumbs').each(function(){
			if ($(this).children().eq(0).length){
				var newHeight = Math.round($(this).children().eq(0).width() * window.ration);
			}
			$(this).children('li a').height(newHeight);
		});
	}
	
	/* FLEXSLIDER CAPTIONS */
	if ($('.flex-caption').length){
	    $('.flex-caption').each(function(){
	    	if (!$(this).parents('.flexslider_container').length){
		    	var hide = false;
			    if ($(this).parents('.flexslider').width() < 490){ 
				    hide = true;
			    } 
			    if ($(this).parents('.flexslider').height() < 250){
				    hide = true;
			    }
			    if (hide) $(this).css('display','none');
			    else $(this).css('display','block');	
	    	}
	    });
    }
	
	/* ADDTHIS STUFF */
	if ($('.addthiscode').length) $('.addthiscode').css('display','inline-block');
	
	
	/* BACK TO-TOP BUTTON */
	$(window).scroll(function(){
		if($(window).scrollTop() > 200){
			$("#back-to-top").fadeIn(200);
		} else{
			$("#back-to-top").fadeOut(200);
		}
	});
	
	$('#back-to-top a').click(function() {
		  $('html, body').animate({ scrollTop:0 }, 1300, "easeInOutCirc");
		  return false;
	});
	
	/* TOOLTIP UP OR DOWN DEPEND OF THE HEADER TYPE */	
	if ($('#headerStyleType').html() === "style1" || $('#headerStyleType').html() === "style4" ){
		if ($('#headerStyleType').html() === "style4"){
			$('.socialdiv li a[title]').each(function(){
				if ($(this).parents('.header_container').length){
					$(this).tooltip({
						effect: "designa_style4"
					});
				} else {
					$(this).tooltip({
						effect: "designa"
					});
				}
			});	
		} else {
			$('.socialdiv li a[title]').tooltip({
				effect: "designa"
			});	
		}
	} else {
		$('.socialdiv li a[title]').each(function(){
			if ($(this).parents('.header_container').length){
				$(this).tooltip({
					effect: "designaDowner"
				});
			} else {
				$(this).tooltip({
					effect: "designa"
				});
			}
		});
	}
	
	/* SERVICE ITEMS */
	if ($('ul.service-items').length){
		$('ul.service-items').each(function(){
			$(this).children().not('li').remove();
			var ipr = parseInt($(this).attr('class').slice(-1), 10);
			var layout = "";
			switch (ipr){
				case 2: layout = "eight columns"; break;
				case 3: layout = "one-third column"; break;
				case 4: layout = "four columns"; break;
			}
			var aux = 0;
			var row = 0;
			var elements = [];
				elements[row] = [];
			for (var i=0; i< $(this).children('li').length; i++){
				$(this).children('li').eq(i).addClass(layout);
				if ($(this).hasClass('bigfas')){
					$(this).children('li').eq(i).find('.designare_fa').css({
						'width':'70px',
						'height':'70px',
						'float':'left'
					});
					$(this).children('li').eq(i).find('.item-title').width('auto');
					$(this).children('li').eq(i).find('.item-desc').css({
						'float':'none',
						'margin': '30px 0 0 0'
					});
				}
				$el = $(this).children('li').eq(i);
				if (aux < ipr){
					elements[row][aux] = $el;
				} 
				else {
					aux = 0;
					row++;
					elements[row] = [];
					elements[row][aux] = $el;
				}
				aux++;
			}
			for (var i=0; i< elements.length; i++){
				$(this).append('<div class="row row-'+i+'" />');
				for (var j=0; j< elements[i].length; j++){
					$(this).children('.row-'+i).append(elements[i][j]);
				}
			}
		});
	}
	
	/* IF MOBILE REPLACE VERTICAL TABS AND CIRCLE SERVICES FOR ACCORDION */
	if (window.BrowserDetect.browser == "iPhone")
		$('.acc-substitute .pane p, #accordion .pane p').css({ 'font-size': '11px' });
	
	
	/* ADD BORDER BOTTOM TO THE MAIN LI TO HEADER STYLE 1 AND 2 */
	if ($('#headerStyleType').html() === "style1" || $('#headerStyleType').html() === "style2"){
		for (var idx = 0; idx < $('header #menulava > li').length; idx++){

			if ($('header #menulava > li').eq(idx).find('.sub-menu').length){
				
				if (!$('header #menulava > li').eq(idx).hasClass('current-menu-ancestor') && !$('header #menulava > li').eq(idx).hasClass('current-menu-item')){
					$('header #menulava > li').eq(idx).hover(function(){
						$(this).css("border-bottom", "3px solid ");
					}, function(){
						$(this).css("border-bottom", "3px solid transparent");
					});	
				}
				
			}
		}
		
	}
	
	/* IF HEADER STYLE 3 ADD A BACKGROUND COLOR TO THE MAIN LI */
	if ($('#headerStyleType').html() === "style3"){
		for (var idx = 0; idx < $('header #menulava > li').length; idx++){

			if ($('header #menulava > li').eq(idx).find('.sub-menu').length){
				
				if (!$('header #menulava > li').eq(idx).hasClass('current-menu-ancestor') && !$('header #menulava > li').eq(idx).hasClass('current-menu-item')){
					$('header #menulava > li').eq(idx).hover(function(){
						$(this).css("background").css('color','white');
					}, function(){
						$(this).css("background", "white");
					});	
				}
				
			}
		}
	}

	/* FLEXSLIDER STUFF */
	$('a.flex_this_thumb').prettyPhoto();
	if ($('.flexslider').length){
		$('.flexslider').css('overflow','hidden');
	}
					
	/* SEARCH EFFECT */
	if ($('.search_toggler')){
		$('.search_toggler').each(function(){
			$(this)
				.unbind('click')
				.bind('click', function(){
					if ($(this).siblings('#s').hasClass('search_close')){
						$(this).siblings('#s').toggleClass('search_close');
						$(this).parents('#searchform').removeClass('ie_searcher_close').addClass('ie_searcher_open');
						$(this).siblings('#s').trigger('focus');
					} else {
						if ($(this).siblings('#s').val() == $(this).siblings('.search_box_text').html()){
							$(this).siblings('#s').toggleClass('search_close');
							$(this).parents('#searchform').removeClass('ie_searcher_open').addClass('ie_searcher_close');
						} else {
							$(this).siblings('#searchsubmit').trigger('click');
						}
					}
				});
		});	
	}
	
	/* HORIZONTAL TABS EFFECT */
	$(".tabs").tabs(".panes > div", {effect: "slide", autoHeight: true, history: false});
	
	/* DESIGNARE SPECIAL TABS */
	if ($('.special_tabs').length){
	
		$('.special_tabs').each(function(e){
		
			$(this).addClass('st-'+e);
			$el = $('.st-'+e);
			
			$el.children("p, br").remove();

			$el.append('<div class="tab-selector four columns" />');
			$el.find('.label').appendTo($el.children('.tab-selector'));
			$el.append('<div class="tab-container twelve columns" />');
			$el.find('.content').appendTo($el.children('.tab-container'));
			
			$el.find('.tab-selector > .label').eq(0).addClass('current');
			$el.find('.tab-container > .content').eq(0).addClass('current').css({
				'opacity':1,
				'top':'0%'
			});
			
			if ($el.find('.tab-container > .content').find('img.aligncenter').length){
		    	$el.find('.tab-container > .content').find('img.aligncenter').parents('p').css('text-align','center');
		    }
			
			$el.css('min-height', $el.find('.tab-selector').height());
			if ($el.find('.tab-container > .content').eq(0).height() > $el.find('.tab-selector').height())
				$el.animate({'height': $el.find('.tab-container > .content').eq(0).height()}, 1000, 'easeInOutExpo');
			else $(this).parents('.special_tabs').animate({'height': $(this).parents('.tab-selector').height()}, 1000, 'easeInOutExpo');
			for ( var i = 1; i < $el.find('.tab-container > .content').length; i++){
				$el.find('.tab-container > .content').eq(i).css({
					'position':'absolute',
					'margin-top':'100%',
					opacity:0
				});
			}
			
			var elm = $(this).attr('class').split("special_tabs ");
			var elm = elm[1];
			
			$('.'+elm).find('.tab-selector > .label').each(function(){
			
				if (!$(this).find('.designare_fa_special_tabs').length){
					$(this).find('.tab_title').css('padding-left','10px');
				}
				
				$(this).append('<div class="tabpointer"><div class="triangle"></div></div>');

				var styleColor = $('').html();

				$(this).find('.triangle').css({
					'border-top': $(this).height()/2+'px solid transparent',
					'border-bottom': $(this).height()/2+'px solid transparent',
					'border-left': '10px solid '
				});
				
				$(this).click(function(){
				
					if (!$(this).hasClass('current')){
						var filterClass = $(this).attr('class').toString();
						var randid = filterClass.replace("label ","");
						$nextEl = $('.'+elm).find('.tab-container > .content.'+randid);
						if ($nextEl.height() > $(this).parents('.tab-selector').height())
							$(this).parents('.special_tabs').stop().animate({'height': $nextEl.height()}, 1000, 'easeInOutExpo');
						else 
							$(this).parents('.special_tabs').stop().animate({'height': $(this).parents('.tab-selector').height()}, 1000, 'easeInOutExpo');
						$nextEl.css({'margin-top':'100%','top':'0%', 'display':'block'});
						$current = $('.'+elm).find('.tab-container .current');
						var id = $current.attr('class').split(" ");
							id = id[1];
						$('.'+elm).find('.tab-selector > .label.'+id).css({'color':'#5c5c5c'});
						$('.'+elm).find('.tab-selector > .label.'+id+'.current').css({'color':'#5c5c5c'});
						$current.stop().animate({'margin-top':'100%', opacity:0}, 1000, 'easeInOutExpo', function(){
							$(this).css('display','none');
						}); 
						$('.'+elm).find('.tab-selector > .label.'+id).removeClass('current');
						$current.removeClass('current');
						$current.animate({
							'margin-top': '-100%',
							opacity: 0
						}, 1000, 'easeInOutExpo', function(){
							$(this).css({'margin-top':'100%'});
						});
						$('.'+elm).find('.tab-selector > .label.'+randid).css({'color': $('').html() });
						$('.'+elm).find('.tab-selector > .label.'+randid).addClass('current');
						$('.'+elm).find('.tab-selector > label.'+randid).css('color', $('').html());
						$('.'+elm).find('.tab-container > .content.'+randid).css('display','block');
						$('.'+elm).find('.tab-container > .content.'+randid).addClass('current').stop().animate({ 'margin-top': '0%', opacity:1 },1000, 'easeInOutExpo', function(){
							$(this).css('display','block');
							if ($(this).find('.services-graph').length){
								var id = $(this).find('.services-graph').attr('id');
								sliding_horizontal_graph(id,3000);
							}
							
							if (window.BrowserDetect.browser == "Explorer" && window.BrowserDetect.version == 8){
								if ($(this).find('.recent_testimonials').length){
									$(this).css('width','100%');
								}
							}
							
						});
					}		
				});
				
			});
			
		});
	}
	/* END: DESIGNARE SPECIAL TABS */
});

/* WAYPOINTS SCROLL INTO VIEW (USED IN THE NUMERICAL INCREMENTS / SLIDING GRAPHS / BUBBLE SERVICES) */
function isScrolledIntoView(id){
    var elem = "#" + id;
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    if ($(elem).length > 0){
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
    }

    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
      && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
}

/* SLIDING GRAPHS */
function sliding_horizontal_graph(id, speed){
    $("#" + id + " li span").each(function(i){                                  
        var cur_li = $("#" + id + " li").eq(i).find("span");
        var w = cur_li.attr("title");
        cur_li.animate({width: w + "%"}, speed);
    })
}
function graph_init(id, speed){
    $(window).scroll(function(){
    	if ($('#'+id).hasClass('notinview')){	    	
	    	if (isScrolledIntoView(id)){
	    		$('#'+id).removeClass('notinview');
	            sliding_horizontal_graph(id, speed);
	        }
    	}
    });
    
    if (isScrolledIntoView(id)){
        sliding_horizontal_graph(id, speed);
    }
}

/* NUMERICAL INCREMENTS */
function incrementNumerical(id, percent, speed){
	setTimeout(function(){
		var newVal = parseInt($(id+' .value').html(),10)+speed;

		if (newVal > percent) newVal = percent;
		$(id+' .value').html(newVal);
		if (newVal < percent){
			incrementNumerical(id, percent, speed);
		}
	}, 1);
}

/*
function htmlDecode(a) {
    var b = $("<div/>").html(a).text();
    return b
}
*/

/* DESIGNARE SLIDER BUTTONS PLAY/PAUSE */
function playpause($el){
	if ($el.hasClass('playing')){
		$('#slider_container').cameraResume();
		$el.removeClass('playing').addClass('paused');
	} else {
		$('#slider_container').cameraPause();
		$el.removeClass('paused').addClass('playing');
	}
}

/*****************************************************************************************
**************************   QUICKSAND FUNCTION   ****************************************
*****************************************************************************************/

function quicksandstart(obj){
(function($) {
	$.fn.sorted = function(customOptions) {
		var options = {
			reversed: false,
			by: function(a) {
				return a.text();
			}
		};
		$.extend(options, customOptions);
	
		$data = $(this);
		arr = $data.get();
		arr.sort(function(a, b) {
			
		   	var valA = options.by($(a));
		   	var valB = options.by($(b));
			if (options.reversed) {
				return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;				
			} else {		
				return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;	
			}
		});
		return $(arr);
	};

})(jQuery);

$(function() {

	var read_button = function(class_names) {
    var r = {
      selected: false,
      type: 0
    };
    for (var i=0; i < class_names.length; i++) {
      if (class_names[i].indexOf('selected-') == 0) {
        r.selected = true;
      }
      if (class_names[i].indexOf('segment-') == 0) {
        r.segment = class_names[i].split('-')[1];
      }
    };
    return r;
  };
  
  var determine_sort = function($buttons) {
    var $selected = $buttons.parent().filter('[class*="selected-"]');
    return $selected.find('a').attr('data-value');
  };
  
  var determine_kind = function($buttons) {
    var $selected = $buttons.parent().filter('[class*="selected-"]');
    return $selected.find('a').attr('data-value');
  };
  
  var $preferences = {
    duration: 800,
    easing: 'easeInOutQuad',
    adjustHeight: 'auto'
  };
  
  var $list = $('#'+obj+' .proj_list');
  var $data = $list.clone();
  
  var $controls = $('#'+obj+' ul.splitter');
  
  $controls.each(function(i) {
  
    
    var $control = $(this);
    var $buttons = $control.find('a');
    
    $buttons.bind('click', function(e) {

    	
      var $button = $(this);
      var $button_container = $button.parent();
      var button_properties = read_button($button_container.attr('class').split(' '));      
      var selected = button_properties.selected;
      var button_segment = button_properties.segment;

      if (!selected) {

        $buttons.parent().removeClass('selected-0').removeClass('selected-1').removeClass('selected-2');
        $button_container.addClass('selected-' + button_segment);
        
        var sorting_type = determine_sort($controls.eq(1).find('a'));
        var sorting_kind = determine_kind($controls.eq(0).find('a'));
        
        if (sorting_kind == 'all') {
          var $filtered_data = $data.find('li.view');
        } else {
          var $filtered_data = $data.find('li.' + sorting_kind);
        }
        
        if (sorting_type == 'size') {
          var $sorted_data = $filtered_data.sorted({
            by: function(v) {
              return parseFloat($(v).find('span').text());
            }
          });
        } else {
          var $sorted_data = $filtered_data.sorted({
            by: function(v) {
              return $(v).find('strong').text().toLowerCase();
            }
          });
        }
        $list.quicksand($sorted_data, $preferences, function(){
			
			if ($('#projects-1').length){
				checkProjStyle1();
				$('.flex_this_thumb').prettyPhoto();
			} else {
				$('#projects-2 .da-thumbs > li').hoverdir();
		        if ($('.imgloader').length){
					$('.imgloader').each(function(){
						$(this).animate({opacity: 0}, 500, function(){
							$(this).remove();
						});
						$(this).siblings('img').animate({opacity: 1}, 500);
					});
				}
			}
			
        });
                
      }
      e.preventDefault();

    });
    
  }); 
});
}

/* OPEN/CLOSE FILTER OF THE PROJECTS CATEGORIES */
function clickThumbsOverlay(obj){

$("#"+obj+" .projectCategories").find("a").click(function (event) {
		
    var p_cat = $(this).attr("data-value");
    
    $("#"+obj+" .projectCategories").find("li.termCat").each(function(){
    	$(this).removeClass('selected-1');
    })
    
    $(this).parent("li.termCat").addClass('selected-1');    
    if ($('#projects-1').length){
		checkProjStyle1();
		$("#"+obj+" .proj_list_overlay > li").each(function(e){
    	if(p_cat == "all"){
    		$(this).stop().animate({opacity: 1}, 1000);
    		if (window.BrowserDetect.browser == "Explorer" && window.BrowserDetect.version == 8){
    			$("#"+obj+" .proj_list_overlay li").eq(e).find('img').animate({'opacity':1}, 1000);
    			$("#"+obj+" .proj_list_overlay li").eq(e).find('.mask').css({'visibility':'visible'});
    		}
    	} else {
    		if($(this).hasClass(p_cat)){
    			$(this).stop().animate({opacity: 1}, 1000);
    			if (window.BrowserDetect.browser == "Explorer" && window.BrowserDetect.version == 8){
    				$("#"+obj+" .proj_list_overlay li").eq(e).find('img').animate({'opacity':1}, 1000);
    				$("#"+obj+" .proj_list_overlay li").eq(e).find('.mask').css({'visibility':'visible'});
    			}
    		} else {
    			$(this).stop().animate({opacity: 0.1}, 1000);
    			$(this).add($(this).find('*')).unbind("mouseover mouseout mouseenter mouseleave");
    			$(this).find('.mask').unbind('click');
    			if (window.BrowserDetect.browser == "Explorer" && window.BrowserDetect.version == 8){
	    			$("#"+obj+" .proj_list_overlay li").eq(e).find('img').animate({'opacity':.1}, 1000);
	    			$("#"+obj+" .proj_list_overlay li").eq(e).find('.mask').css({'visibility':'hidden'});
	    		}
    		}
    	}
    });
    } else {
	    $("#"+obj+" .proj_list_overlay > li").each(function(e){
	    	$(this).css('pointer-events','auto');
	    	if(p_cat == "all"){
	    		$(this).stop().animate({opacity: 1}, 1000);
	    		if (window.BrowserDetect.browser == "Explorer" && window.BrowserDetect.version == 8){
	    			$("#"+obj+" .proj_list_overlay li").eq(e).find('img').animate({'opacity':1}, 1000);
	    			$("#"+obj+" .proj_list_overlay li").eq(e).find('.mask').css({'visibility':'visible'});
	    		}
	    	} else {
	    		if($(this).hasClass(p_cat)){
	    			$(this).stop().animate({opacity: 1}, 1000);
	    			if (window.BrowserDetect.browser == "Explorer" && window.BrowserDetect.version == 8){
	    				$("#"+obj+" .proj_list_overlay li").eq(e).find('img').animate({'opacity':1}, 1000);
	    				$("#"+obj+" .proj_list_overlay li").eq(e).find('.mask').css({'visibility':'visible'});
	    			}
	    		} else {
	    			$(this).stop().animate({opacity: 0.1}, 1000);
	    			$(this).css('pointer-events','none');
	    			if (window.BrowserDetect.browser == "Explorer" && window.BrowserDetect.version == 8){
		    			$("#"+obj+" .proj_list_overlay li").eq(e).find('img').animate({'opacity':.1}, 1000);
		    			$("#"+obj+" .proj_list_overlay li").eq(e).find('.mask').css({'visibility':'hidden'});
		    		}
	    		}
	    	}
	    });
	    $('#projects-2 .da-thumbs > li:not(.disabled)').hoverdir();
    }
  });
}

/* BROWSER DETECT FUNCTION */
var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS"
    },
    searchString: function (a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b].string;
            var d = a[b].prop;
            this.versionSearchString = a[b].versionSearch || a[b].identity;
            if (c) {
                if (c.indexOf(a[b].subString) != -1) return a[b].identity
            } else if (d) return a[b].identity
        }
    },
    searchVersion: function (a) {
        var b = a.indexOf(this.versionSearchString);
        if (b == -1) return;
        return parseFloat(a.substring(b + this.versionSearchString.length + 1))
    },
    dataBrowser: [{
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
    }, {
        string: navigator.userAgent,
        subString: "OmniWeb",
        versionSearch: "OmniWeb/",
        identity: "OmniWeb"
    }, {
        string: navigator.vendor,
        subString: "Apple",
        identity: "Safari",
        versionSearch: "Version"
    }, {
        prop: window.opera,
        identity: "Opera",
        versionSearch: "Version"
    }, {
        string: navigator.vendor,
        subString: "iCab",
        identity: "iCab"
    }, {
        string: navigator.vendor,
        subString: "KDE",
        identity: "Konqueror"
    }, {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
    }, {
        string: navigator.vendor,
        subString: "Camino",
        identity: "Camino"
    }, {
        string: navigator.userAgent,
        subString: "Netscape",
        identity: "Netscape"
    }, {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer",
        versionSearch: "MSIE"
    }, {
        string: navigator.userAgent,
        subString: "Gecko",
        identity: "Mozilla",
        versionSearch: "rv"
    }, {
        string: navigator.userAgent,
        subString: "Mozilla",
        identity: "Netscape",
        versionSearch: "Mozilla"
    }],
    dataOS: [{
        string: navigator.platform,
        subString: "Win",
        identity: "Windows"
    }, {
        string: navigator.platform,
        subString: "Mac",
        identity: "Mac"
    }, {
        string: navigator.userAgent,
        subString: "iPhone",
        identity: "iPhone/iPod"
    }, {
        string: navigator.platform,
        subString: "Linux",
        identity: "Linux"
    }]
};
BrowserDetect.init();


/* Convert HEX to RGB */
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Grayscale w canvas method for partners style2
function grayscale(src){
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');
	var imgObj = new Image();
	imgObj.src = src;
	canvas.width = imgObj.width;
	canvas.height = imgObj.height; 
	ctx.drawImage(imgObj, 0, 0); 
	var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
	for(var y = 0; y < imgPixels.height; y++){
		for (var x = 0; x < imgPixels.width; x++){
			var i = (y * 4) * imgPixels.width + x * 4;
			var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
			imgPixels.data[i] = avg; 
			imgPixels.data[i + 1] = avg; 
			imgPixels.data[i + 2] = avg;
		}
	}
	ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
	return canvas.toDataURL();
}


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    },
    allExceptIpad: function(){
	    return (isMobile.Android() || isMobile.BlackBerry() || navigator.userAgent.match(/iPhone|iPod/i) || isMobile.Opera() || isMobile.Windows());
    }
};

/* VALIDATE EMAILS */
function validate_email(email) {
   var reg = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
   if(reg.test(email) == false) {
      return 0;
   } else {
   		return 1;
   }
}

/* SWITCH TO ACCORDION */
function changeTab(obj){
	$(obj).siblings('li').each(function(){
		$(this).find('a').removeClass('current');
	});
	$(obj).find('a').addClass('current');
	
}
function changeAccord(obj){

	$(obj).parent().find('h2').each(function(){
		$(this).removeClass('current').css('color','#555');
	});
	
	$(obj).addClass('current').css('color',$('#option_wrapper #color').val());
	
	$(obj).siblings('div.pane').each(function(){
		if (!$(this).prev().hasClass('current')) {
			//$(this).animate({ 'max-height': 0, 'padding-bottom': 0, 'opacity': 0 }, 500);
			$(this).slideUp(500).animate({'padding-bottom': 0, 'opacity': 0}, 500, function(){
				$(obj).next().slideDown(500).animate({'padding-bottom': '20px', 'opacity': 1}, 500, function(){
					$(obj).next().css('display','block');
					if ($(this).parents('.special_tabs').length){
					
						if ($(this).parents('.special_tabs').find('.tab-container > .content.current').height()> $(this).parents('.special_tabs').find('.tab-selector').height())
							$(this).parents('.special_tabs').animate({'height': $(this).parents('.special_tabs').find('.tab-container > .content.current').height()}, 200, 'easeInOutExpo');
						else 
							$(this).parents('.special_tabs').animate({'height': $(this).parents('.special_tabs').find('.tab-selector').height()}, 200, 'easeInOutExpo');
						
					}
				});
			});
		
		}
	});
}

/*****************************************************************************************
**************************   TOGGLE   ****************************************************
*****************************************************************************************/
function toggleTrigger(obj){
	
	if ($(obj).parents('.shortcode-toggle').hasClass('open')) {
		//close
		$(obj).html( $(obj).parents('.shortcode-toggle').find('#title_closed').val() );
		$(obj).parents('.shortcode-toggle').find('.toggle-content').slideUp(500, "easeOutCubic", function(){
			$(obj).parents('.shortcode-toggle').removeClass('open').addClass('closed');
			if ($(this).parents('.special_tabs').length){
				if ($(this).parents('.special_tabs').find('.tab-container > .content.current').height()> $(this).parents('.special_tabs').find('.tab-selector').height())
					$(this).parents('.special_tabs').animate({'height': $(this).parents('.special_tabs').find('.tab-container > .content.current').height()}, 200, 'easeInOutExpo');
				else 
					$(this).parents('.special_tabs').animate({'height': $(this).parents('.special_tabs').find('.tab-selector').height()}, 200, 'easeInOutExpo');
			}
		});
	}
	else {
		//open
		$(obj).html( $(obj).parents('.shortcode-toggle').find('#title_open').val() );
		$(obj).parents('.shortcode-toggle').find('.toggle-content').slideDown(500, "easeOutCubic", function(){
			$(obj).parents('.shortcode-toggle').addClass('open').removeClass('closed');
			if ($(this).parents('.special_tabs').length){				
				if ($(this).parents('.special_tabs').find('.tab-container > .content.current').height()> $(this).parents('.special_tabs').find('.tab-selector').height())
					$(this).parents('.special_tabs').animate({'height': $(this).parents('.special_tabs').find('.tab-container > .content.current').height()}, 200, 'easeInOutExpo');
				else 
					$(this).parents('.special_tabs').animate({'height': $(this).parents('.special_tabs').find('.tab-selector').height()}, 200, 'easeInOutExpo');
				
			}
		});
	} 
}

/*****************************************************************************************
**************************   SEND EMAIL FUCNTION   ***************************************
*****************************************************************************************/

function sendemail($el, SendTo, Subject, NameErr, EmailErr, MessageErr, SuccessErr, UnsuccessErr){

	//Custom variables
	var sendTo = SendTo; //send the form elements to this email (company email)
	var subject = Subject; //subject of the email
	var nameErr = NameErr; //Error message when Name field is empty
	var emailErr = EmailErr; //Error message when Email field is empty or email is not valid
	var messageErr = MessageErr; //Error message when Message field is empty
	var successErr = SuccessErr; //Message when the email was sent successfully
	var unsuccessErr = UnsuccessErr; //Message when the email was not sent

	$el = $el.parents('.contact-form');
	
	if ($el.parents('.contact-widget-container').length){
		nameErr = $el.find('.yourname_error').html();
		emailErr = $el.find('.youremail_error').html();
		messageErr = $el.find('.yourmessage_error').html();
	}

	//Reset field errors/variables
	$el.find('.yourname').removeClass("with_error").removeClass("change_error");
	$el.find('.youremail').removeClass("with_error").removeClass("change_error");
	$el.find('.yourmessage').removeClass("with_error").removeClass("change_error");
	var err = 0;

    // Check fields
    var name = $el.find('.yourname_val').html();
    var email = $el.find('.youremail_val').html();
    var emailVer = validate_email(email);
    var message = $el.find('.yourmessage').val();    

    if (!name || name.length == 0 || name == nameErr || name == "Name")
    {
    	$el.find('.yourname').addClass("with_error");
        $el.find('.yourname').val(nameErr);
        err = 1;
    }
    if (!email || email.length == 0 || emailVer == 0)
    {
    	$el.find('.youremail').addClass("with_error");
        $el.find('.youremail').val(emailErr);
        err = 1;
    }
      
    if ($el.parents('.contact-widget-container').length){
	 	if (!message || message.length == 0 || message == messageErr || message == "Message")
	    {
	    	$el.find('.yourmessage').addClass("with_error");
	        $el.find('.yourmessage').val(messageErr);
	        err = 1;
	    } 
	} else {
	    if (!message || message.length == 0 || message == messageErr || message == "")
	    {
	    	$el.find('.yourmessage').addClass("with_error");
	        $el.find('.yourmessage').val(messageErr);
	        err = 1;
	    }
    }    
   	//If there's no error submit form
	if(err == 0)
    {
        // Request
        var data = {
            name: name,
            email: email,
            sendTo: sendTo,
            subject: subject,
            message: message,
            success: successErr,
            unsuccess: unsuccessErr
        };
        				
        // Send
        $.ajax({
            url: "js/sendemail.php",
            dataType: 'json',
            type: 'POST',
            data: data,
            success: function(data, textStatus, XMLHttpRequest)
            {
                if (data.response.error)
                {  
                    if(data.response.error == 1){
                    	$el.find('.message_success').css('background','#64943c');
                    	$el.find('.message_success').css('display','block');
                        $el.find('.message_success').html(data.response.message);
                    }
                    else{
                    	$el.find('.message_success').css('background','#C35D5D');
                    	$el.find('.message_success').css('display','block');
                        $el.find('.message_success').html(data.response.message);
                    }
                }
                else
                {
                    // Message
                   $el.find('.message_success').css('background','#C35D5D');
                   $el.find('.message_success').css('display','block');
                   $el.find('.message_success').html("An unexpected error occured, please try again.");
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown)
            {
                // Message
                $el.find('.message_success').css('background','#C35D5D');
                $el.find('.message_success').css('display','block');
                $el.find('.message_success').html("Error while contacting server, please try again.");
            }
        });
			
        // Message
        $el.find('.message_success').css('background','#64943c');
        $el.find('.message_success').css('display','block');
        $el.find('.message_success').html("Sending...");
    }

}

function checkerror(elem){
	if($(elem).hasClass('with_error')) {
		$(elem).removeClass('with_error').addClass('change_error');
		$(elem).val("");
	}
}

function validate_email(email) {
   var reg = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
   if(reg.test(email) == false) {
      return 0;
   } else {
   		return 1;
   }
}

/*****************************************************************************************
**************************   SERVICE BALLS   *********************************************
*****************************************************************************************/
$(function() {
    for (var e = 0; e < $(".serviceballs").length; e++) {
        $shortcodeservice = $(".serviceballs").eq(e);
        if ($(window).width() > 957) {
            $shortcodeservice.find("#banner ul li:first-child").css({
                left: "-31px"
            });
            $shortcodeservice.find("#banner ul li:nth-child(2)").css({
                left: "165px"
            });
            $shortcodeservice.find("#banner ul li:nth-child(3)").css({
                left: "363px"
            });
            $shortcodeservice.find("#banner ul li:last-child").css({
                left: "560px"
            })
        } else {
            $shortcodeservice.find("#banner ul li:first-child").css({
                left: "-50px"
            });
            $shortcodeservice.find("#banner ul li:nth-child(2)").css({
                left: "100px"
            });
            $shortcodeservice.find("#banner ul li:nth-child(3)").css({
                left: "250px"
            });
            $shortcodeservice.find("#banner ul li:last-child").css({
                left: "400px"
            })
        }
        $shortcodeservice.find("#banner ul li h2").unbind("click");
        $shortcodeservice.find("#banner ul li h2").click(function(e) {
            target = $(this).parent().attr("id");
            $service = $(this).parents(".serviceballs");
            if ($(window).width() > 957) {
                if ($(this).parent().is(":first-child")) {
                    if (window.BrowserDetect.browser == "Explorer" && window.BrowserDetect.version == 8) {
                        $(this).parent().children("ul").css("left", "240px")
                    }
                    if ($(this).parent().hasClass("open")) {
                        $("#" + target + " .servicesScroller").slideUp("100", function() {
                            $service.find("#banner ul li:first-child").animate({
                                left: "-31px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(2)").animate({
                                left: "165px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(3)").animate({
                                left: "363px"
                            }, "1200");
                            $service.find("#banner ul li:last-child").animate({
                                left: "560px"
                            }, "1200")
                        });
                        $(this).parent().removeClass("open")
                    } else {
                        if ($service.find("#banner ul li.open").length == 0) {
                            $service.find("#banner ul li:nth-child(2)").animate({
                                left: "445px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(3)").animate({
                                left: "545px"
                            }, "1200");
                            $service.find("#banner ul li:last-child").animate({
                                left: "645px"
                            }, "1200");
                            $("#" + target + " > ul").slideDown("slow", function() {
                                $(this).find(".scrollbar").css("display", "none");
                                $(this).tinyscrollbar({
                                    scroll: true
                                });
                                $(this).hover(function() {
                                    $(this).find(".scrollbar").stop().fadeTo(400, .8)
                                }, function() {
                                    $(this).find(".scrollbar").stop().fadeOut(400)
                                })
                            });
                            $(this).parent().addClass("open")
                        } else {
                            $service.find("#banner ul li.open > ul").slideUp("100", function() {
                                $service.find("#banner ul li:first-child").animate({
                                    left: "-31px"
                                }, "1200");
                                $service.find("#banner ul li:nth-child(2)").animate({
                                    left: "165px"
                                }, "1200");
                                $service.find("#banner ul li:nth-child(3)").animate({
                                    left: "363px"
                                }, "1200");
                                $service.find("#banner ul li:last-child").animate({
                                    left: "560px"
                                }, "1200", function() {
                                    $service.find("#banner ul li.open").removeClass("open");
                                    $service.find("#banner ul li:nth-child(2)").animate({
                                        left: "445px"
                                    }, "1200");
                                    $service.find("#banner ul li:nth-child(3)").animate({
                                        left: "545px"
                                    }, "1200");
                                    $service.find("#banner ul li:last-child").animate({
                                        left: "645px"
                                    }, "1200");
                                    $("#" + target + " > ul").slideDown("slow", function() {
                                        $(this).find(".scrollbar").css("display", "none");
                                        $(this).tinyscrollbar({
                                            scroll: true
                                        });
                                        $(this).hover(function() {
                                            $(this).find(".scrollbar").stop().fadeTo(400, .8)
                                        }, function() {
                                            $(this).find(".scrollbar").stop().fadeOut(400)
                                        })
                                    });
                                    $("#" + target).addClass("open")
                                })
                            })
                        }
                    }
                } else if ($(this).parent().is(":nth-child(2)")) {
                    if (window.BrowserDetect.browser == "Explorer" && window.BrowserDetect.version == 8) {
                        $(this).parent().children("ul").css("left", "240px")
                    }
                    if ($(this).parent().hasClass("open")) {
                        $("#" + target + " > ul").slideUp("100", function() {
                            $service.find("#banner ul li:first-child").animate({
                                left: "-31px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(2)").animate({
                                left: "165px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(3)").animate({
                                left: "363px"
                            }, "1200");
                            $service.find("#banner ul li:last-child").animate({
                                left: "560px"
                            }, "1200")
                        });
                        $(this).parent().removeClass("open")
                    } else {
                        if ($service.find("#banner ul li.open").length == 0) {
                            $service.find("#banner ul li:nth-child(1)").animate({
                                left: "-80px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(2)").animate({
                                left: "70px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(3)").animate({
                                left: "545px"
                            }, "1200");
                            $service.find("#banner ul li:last-child").animate({
                                left: "645px"
                            }, "1200");
                            $("#" + target + " > ul").slideDown("slow", function() {
                                $(this).find(".scrollbar").css("display", "none");
                                $(this).tinyscrollbar({
                                    scroll: true
                                });
                                $(this).hover(function() {
                                    $(this).find(".scrollbar").stop().fadeTo(400, .8)
                                }, function() {
                                    $(this).find(".scrollbar").stop().fadeOut(400)
                                })
                            });
                            $(this).parent().addClass("open")
                        } else {
                            $service.find("#banner ul li.open > ul").slideUp("100", function() {
                                $service.find("#banner ul li:first-child").animate({
                                    left: "-31px"
                                }, "1200");
                                $service.find("#banner ul li:nth-child(2)").animate({
                                    left: "165px"
                                }, "1200");
                                $service.find("#banner ul li:nth-child(3)").animate({
                                    left: "363px"
                                }, "1200");
                                $service.find("#banner ul li:last-child").animate({
                                    left: "560px"
                                }, "1200", function() {
                                    $service.find("#banner ul li.open").removeClass("open");
                                    $service.find("#banner ul li:nth-child(1)").animate({
                                        left: "-80px"
                                    }, "1200");
                                    $service.find("#banner ul li:nth-child(2)").animate({
                                        left: "70px"
                                    }, "1200");
                                    $service.find("#banner ul li:nth-child(3)").animate({
                                        left: "545px"
                                    }, "1200");
                                    $service.find("#banner ul li:last-child").animate({
                                        left: "645px"
                                    }, "1200");
                                    $("#" + target + " > ul").slideDown("slow", function() {
                                        $(this).find(".scrollbar").css("display", "none");
                                        $(this).tinyscrollbar({
                                            scroll: true
                                        });
                                        $(this).hover(function() {
                                            $(this).find(".scrollbar").stop().fadeTo(400, .8)
                                        }, function() {
                                            $(this).find(".scrollbar").stop().fadeOut(400)
                                        })
                                    });
                                    $("#" + target).addClass("open")
                                })
                            })
                        }
                    }
                } else if ($(this).parent().is(":nth-child(3)")) {
                    if (window.BrowserDetect.browser == "Explorer" && window.BrowserDetect.version == 8) {} else $(this).parent().children("ul").css("left", "270px");
                    if ($(this).parent().hasClass("open")) {
                        $("#" + target + " > ul").slideUp("100", function() {
                            $service.find("#banner ul li:first-child").animate({
                                left: "-31px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(2)").animate({
                                left: "165px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(3)").animate({
                                left: "363px"
                            }, "1200");
                            $service.find("#banner ul li:last-child").animate({
                                left: "560px"
                            }, "1200")
                        });
                        $(this).parent().removeClass("open")
                    } else {
                        if ($service.find("#banner ul li.open").length == 0) {
                            $service.find("#banner ul li:first-child").animate({
                                left: "-80px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(2)").animate({
                                left: "20px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(3)").animate({
                                left: "120px"
                            }, "1200");
                            $service.find("#banner ul li:last-child").animate({
                                left: "645px"
                            }, "1200");
                            $("#" + target + " > ul").slideDown("slow", function() {
                                $(this).find(".scrollbar").css("display", "none");
                                $(this).tinyscrollbar({
                                    scroll: true
                                });
                                $(this).hover(function() {
                                    $(this).find(".scrollbar").stop().fadeTo(400, .8)
                                }, function() {
                                    $(this).find(".scrollbar").stop().fadeOut(400)
                                })
                            });
                            $(this).parent().addClass("open")
                        } else {
                            $service.find("#banner ul li.open > ul").slideUp("100", function() {
                                $service.find("#banner ul li:nth-child(2)").animate({
                                    left: "165px"
                                }, "1200");
                                $service.find("#banner ul li:nth-child(3)").animate({
                                    left: "363px"
                                }, "1200");
                                $service.find("#banner ul li:last-child").animate({
                                    left: "560px"
                                }, "1200");
                                $service.find("#banner ul li:first-child").animate({
                                    left: "-31px"
                                }, "1200", function() {
                                    $service.find("#banner ul li.open").removeClass("open");
                                    $service.find("#banner ul li:first-child").animate({
                                        left: "-80px"
                                    }, "1200");
                                    $service.find("#banner ul li:nth-child(2)").animate({
                                        left: "20px"
                                    }, "1200");
                                    $service.find("#banner ul li:nth-child(3)").animate({
                                        left: "120px"
                                    }, "1200");
                                    $service.find("#banner ul li:last-child").animate({
                                        left: "645px"
                                    }, "1200");
                                    $("#" + target + " > ul").slideDown("slow", function() {
                                        $(this).find(".scrollbar").css("display", "none");
                                        $(this).tinyscrollbar({
                                            scroll: true
                                        });
                                        $(this).hover(function() {
                                            $(this).find(".scrollbar").stop().fadeTo(400, .8)
                                        }, function() {
                                            $(this).find(".scrollbar").stop().fadeOut(400)
                                        })
                                    });
                                    $("#" + target).addClass("open")
                                })
                            })
                        }
                    }
                } else {
                    if (window.BrowserDetect.browser == "Explorer" && window.BrowserDetect.version == 8) {} else $(this).parent().children("ul").css("left", "270px");
                    if ($(this).parent().hasClass("open")) {
                        $("#" + target + " > ul").slideUp("100", function() {
                            $service.find("#banner ul li:first-child").animate({
                                left: "-31px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(2)").animate({
                                left: "165px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(3)").animate({
                                left: "363px"
                            }, "1200");
                            $service.find("#banner ul li:last-child").animate({
                                left: "560px"
                            }, "1200")
                        });
                        $(this).parent().removeClass("open")
                    } else {
                        if ($service.find("#banner ul li.open").length == 0) {
                            $service.find("#banner ul li:first-child").animate({
                                left: "-80px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(2)").animate({
                                left: "20px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(3)").animate({
                                left: "120px"
                            }, "1200");
                            $service.find("#banner ul li:last-child").animate({
                                left: "220px"
                            }, "1200");
                            $("#" + target + " > ul").slideDown("slow", function() {
                                $(this).find(".scrollbar").css("display", "none");
                                $(this).tinyscrollbar({
                                    scroll: true
                                });
                                $(this).hover(function() {
                                    $(this).find(".scrollbar").stop().fadeTo(400, .8)
                                }, function() {
                                    $(this).find(".scrollbar").stop().fadeOut(400)
                                })
                            });
                            $(this).parent().addClass("open")
                        } else {
                            $service.find("#banner ul li.open > ul").slideUp("100", function() {
                                $service.find("#banner ul li:nth-child(2)").animate({
                                    left: "165px"
                                }, "1200");
                                $service.find("#banner ul li:nth-child(3)").animate({
                                    left: "363px"
                                }, "1200");
                                $service.find("#banner ul li:last-child").animate({
                                    left: "560px"
                                }, "1200");
                                $service.find("#banner ul li:first-child").animate({
                                    left: "-31px"
                                }, "1200", function() {
                                    $service.find("#banner ul li.open").removeClass("open");
                                    $service.find("#banner ul li:nth-child(3)").animate({
                                        left: "120px"
                                    }, "1200");
                                    $service.find("#banner ul li:nth-child(2)").animate({
                                        left: "20px"
                                    }, "1200");
                                    $service.find("#banner ul li:first-child").animate({
                                        left: "-80px"
                                    }, "1200");
                                    $service.find("#banner ul li:last-child").animate({
                                        left: "220"
                                    }, "1200");
                                    $("#" + target + " > ul").slideDown("slow", function() {
                                        $(this).find(".scrollbar").css("display", "none");
                                        $(this).tinyscrollbar({
                                            scroll: true
                                        });
                                        $(this).hover(function() {
                                            $(this).find(".scrollbar").stop().fadeTo(400, .8)
                                        }, function() {
                                            $(this).find(".scrollbar").stop().fadeOut(400)
                                        })
                                    });
                                    $("#" + target).addClass("open")
                                })
                            })
                        }
                    }
                }
            } else {
                if ($(this).parent().is(":first-child")) {
                    if ($(this).parent().hasClass("open")) {
                        $("#" + target + " .servicesScroller").slideUp("100", function() {
                            $service.find("#banner ul li:first-child").animate({
                                left: "-50px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(2)").animate({
                                left: "100px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(3)").animate({
                                left: "250px"
                            }, "1200");
                            $service.find("#banner ul li:last-child").animate({
                                left: "400px"
                            }, "1200")
                        });
                        $(this).parent().removeClass("open")
                    } else {
                        if ($service.find("#banner ul li.open").length == 0) {
                            $service.find("#banner ul li:first-child").animate({
                                left: "-80px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(2)").animate({
                                left: "300px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(3)").animate({
                                left: "380px"
                            }, "1200");
                            $service.find("#banner ul li:last-child").animate({
                                left: "460px"
                            }, "1200");
                            $("#" + target + " > ul").slideDown("slow", function() {
                                $(this).find(".scrollbar").css("display", "none");
                                $(this).tinyscrollbar({
                                    scroll: true
                                });
                                $(this).hover(function() {
                                    $(this).find(".scrollbar").stop().fadeTo(400, .8)
                                }, function() {
                                    $(this).find(".scrollbar").stop().fadeOut(400)
                                })
                            });
                            $(this).parent().addClass("open")
                        } else {
                            $service.find("#banner ul li.open > ul").slideUp("100", function() {
                                $service.find("#banner ul li:first-child").animate({
                                    left: "-80px"
                                }, "1200");
                                $service.find("#banner ul li:nth-child(2)").animate({
                                    left: "100px"
                                }, "1200");
                                $service.find("#banner ul li:nth-child(3)").animate({
                                    left: "250px"
                                }, "1200");
                                $service.find("#banner ul li:last-child").animate({
                                    left: "400px"
                                }, "1200", function() {
                                    $service.find("#banner ul li.open").removeClass("open");
                                    $service.find("#banner ul li:nth-child(2)").animate({
                                        left: "300px"
                                    }, "1200");
                                    $service.find("#banner ul li:nth-child(3)").animate({
                                        left: "380px"
                                    }, "1200");
                                    $service.find("#banner ul li:last-child").animate({
                                        left: "460px"
                                    }, "1200");
                                    $("#" + target + " > ul").slideDown("slow", function() {
                                        $(this).find(".scrollbar").css("display", "none");
                                        $(this).tinyscrollbar({
                                            scroll: true
                                        });
                                        $(this).hover(function() {
                                            $(this).find(".scrollbar").stop().fadeTo(400, .8)
                                        }, function() {
                                            $(this).find(".scrollbar").stop().fadeOut(400)
                                        })
                                    });
                                    $("#" + target).addClass("open")
                                })
                            })
                        }
                    }
                } else if ($(this).parent().is(":nth-child(2)")) {
                    if ($(this).parent().hasClass("open")) {
                        $("#" + target + " > ul").slideUp("100", function() {
                            $service.find("#banner ul li:first-child").animate({
                                left: "-50px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(2)").animate({
                                left: "100px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(3)").animate({
                                left: "250px"
                            }, "1200");
                            $service.find("#banner ul li:last-child").animate({
                                left: "400px"
                            }, "1200")
                        });
                        $(this).parent().removeClass("open")
                    } else {
                        if ($service.find("#banner ul li.open").length == 0) {
                            $service.find("#banner ul li:nth-child(1)").animate({
                                left: "-80px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(2)").animate({
                                left: "0px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(3)").animate({
                                left: "380px"
                            }, "1200");
                            $service.find("#banner ul li:last-child").animate({
                                left: "460px"
                            }, "1200");
                            $("#" + target + " > ul").slideDown("slow", function() {
                                $(this).find(".scrollbar").css("display", "none");
                                $(this).tinyscrollbar({
                                    scroll: true
                                });
                                $(this).hover(function() {
                                    $(this).find(".scrollbar").stop().fadeTo(400, .8)
                                }, function() {
                                    $(this).find(".scrollbar").stop().fadeOut(400)
                                })
                            });
                            $(this).parent().addClass("open")
                        } else {
                            $service.find("#banner ul li.open > ul").slideUp("100", function() {
                                $service.find("#banner ul li:first-child").animate({
                                    left: "-50px"
                                }, "1200");
                                $service.find("#banner ul li:nth-child(2)").animate({
                                    left: "100px"
                                }, "1200");
                                $service.find("#banner ul li:nth-child(3)").animate({
                                    left: "250px"
                                }, "1200");
                                $service.find("#banner ul li:last-child").animate({
                                    left: "400px"
                                }, "1200", function() {
                                    $service.find("#banner ul li.open").removeClass("open");
                                    $service.find("#banner ul li:nth-child(1)").animate({
                                        left: "-80px"
                                    }, "1200");
                                    $service.find("#banner ul li:nth-child(2)").animate({
                                        left: "0px"
                                    }, "1200");
                                    $service.find("#banner ul li:nth-child(3)").animate({
                                        left: "380px"
                                    }, "1200");
                                    $service.find("#banner ul li:last-child").animate({
                                        left: "460px"
                                    }, "1200");
                                    $("#" + target + " > ul").slideDown("slow", function() {
                                        $(this).find(".scrollbar").css("display", "none");
                                        $(this).tinyscrollbar({
                                            scroll: true
                                        });
                                        $(this).hover(function() {
                                            $(this).find(".scrollbar").stop().fadeTo(400, .8)
                                        }, function() {
                                            $(this).find(".scrollbar").stop().fadeOut(400)
                                        })
                                    });
                                    $("#" + target).addClass("open")
                                })
                            })
                        }
                    }
                } else if ($(this).parent().is(":nth-child(3)")) {
                    $(this).parent().children("ul").css("left", "180px");
                    if ($(this).parent().hasClass("open")) {
                        $("#" + target + " > ul").slideUp("100", function() {
                            $service.find("#banner ul li:first-child").animate({
                                left: "-50px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(2)").animate({
                                left: "100px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(3)").animate({
                                left: "250px"
                            }, "1200");
                            $service.find("#banner ul li:last-child").animate({
                                left: "400px"
                            }, "1200")
                        });
                        $(this).parent().removeClass("open")
                    } else {
                        if ($service.find("#banner ul li.open").length == 0) {
                            $service.find("#banner ul li:first-child").animate({
                                left: "-80px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(2)").animate({
                                left: "0px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(3)").animate({
                                left: "80px"
                            }, "1200");
                            $service.find("#banner ul li:last-child").animate({
                                left: "460px"
                            }, "1200");
                            $("#" + target + " > ul").slideDown("slow", function() {
                                $(this).find(".scrollbar").css("display", "none");
                                $(this).tinyscrollbar({
                                    scroll: true
                                });
                                $(this).hover(function() {
                                    $(this).find(".scrollbar").stop().fadeTo(400, .8)
                                }, function() {
                                    $(this).find(".scrollbar").stop().fadeOut(400)
                                })
                            });
                            $(this).parent().addClass("open")
                        } else {
                            $service.find("#banner ul li.open > ul").slideUp("100", function() {
                                $service.find("#banner ul li:nth-child(2)").animate({
                                    left: "100px"
                                }, "1200");
                                $service.find("#banner ul li:nth-child(3)").animate({
                                    left: "250px"
                                }, "1200");
                                $service.find("#banner ul li:last-child").animate({
                                    left: "400px"
                                }, "1200");
                                $service.find("#banner ul li:first-child").animate({
                                    left: "-50px"
                                }, "1200", function() {
                                    $service.find("#banner ul li.open").removeClass("open");
                                    $service.find("#banner ul li:first-child").animate({
                                        left: "-80px"
                                    }, "1200");
                                    $service.find("#banner ul li:nth-child(2)").animate({
                                        left: "0px"
                                    }, "1200");
                                    $service.find("#banner ul li:nth-child(3)").animate({
                                        left: "80px"
                                    }, "1200");
                                    $service.find("#banner ul li:last-child").animate({
                                        left: "460px"
                                    }, "1200");
                                    $("#" + target + " > ul").slideDown("slow", function() {
                                        $(this).find(".scrollbar").css("display", "none");
                                        $(this).tinyscrollbar({
                                            scroll: true
                                        });
                                        $(this).hover(function() {
                                            $(this).find(".scrollbar").stop().fadeTo(400, .8)
                                        }, function() {
                                            $(this).find(".scrollbar").stop().fadeOut(400)
                                        })
                                    });
                                    $("#" + target).addClass("open")
                                })
                            })
                        }
                    }
                } else {
                    $(this).parent().children("ul").css("left", "180px");
                    if ($(this).parent().hasClass("open")) {
                        $("#" + target + " > ul").slideUp("100", function() {
                            $service.find("#banner ul li:first-child").animate({
                                left: "-50px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(2)").animate({
                                left: "100px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(3)").animate({
                                left: "250px"
                            }, "1200");
                            $service.find("#banner ul li:last-child").animate({
                                left: "400px"
                            }, "1200")
                        });
                        $(this).parent().removeClass("open")
                    } else {
                        if ($service.find("#banner ul li.open").length == 0) {
                            $service.find("#banner ul li:first-child").animate({
                                left: "-80px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(2)").animate({
                                left: "0px"
                            }, "1200");
                            $service.find("#banner ul li:nth-child(3)").animate({
                                left: "80px"
                            }, "1200");
                            $service.find("#banner ul li:last-child").animate({
                                left: "160px"
                            }, "1200");
                            $("#" + target + " > ul").slideDown("slow", function() {
                                $(this).find(".scrollbar").css("display", "none");
                                $(this).tinyscrollbar({
                                    scroll: true
                                });
                                $(this).hover(function() {
                                    $(this).find(".scrollbar").stop().fadeTo(400, .8)
                                }, function() {
                                    $(this).find(".scrollbar").stop().fadeOut(400)
                                })
                            });
                            $(this).parent().addClass("open")
                        } else {
                            $service.find("#banner ul li.open > ul").slideUp("100", function() {
                                $service.find("#banner ul li:nth-child(2)").animate({
                                    left: "100px"
                                }, "1200");
                                $service.find("#banner ul li:nth-child(3)").animate({
                                    left: "250px"
                                }, "1200");
                                $service.find("#banner ul li:last-child").animate({
                                    left: "400px"
                                }, "1200");
                                $service.find("#banner ul li:first-child").animate({
                                    left: "-50px"
                                }, "1200", function() {
                                    $service.find("#banner ul li.open").removeClass("open");
                                    $service.find("#banner ul li:nth-child(3)").animate({
                                        left: "80px"
                                    }, "1200");
                                    $service.find("#banner ul li:nth-child(2)").animate({
                                        left: "0px"
                                    }, "1200");
                                    $service.find("#banner ul li:first-child").animate({
                                        left: "-80px"
                                    }, "1200");
                                    $service.find("#banner ul li:last-child").animate({
                                        left: "160"
                                    }, "1200");
                                    $("#" + target + " > ul").slideDown("slow", function() {
                                        $(this).find(".scrollbar").css("display", "none");
                                        $(this).tinyscrollbar({
                                            scroll: true
                                        });
                                        $(this).hover(function() {
                                            $(this).find(".scrollbar").stop().fadeTo(400, .8)
                                        }, function() {
                                            $(this).find(".scrollbar").stop().fadeOut(400)
                                        })
                                    });
                                    $("#" + target).addClass("open")
                                })
                            })
                        }
                    }
                }
            }
        })
    }
});
(function(e) {
    function t(t, n) {
        function r(e) {
            if (!(d.ratio >= 1)) {
                S.now = Math.min(m[n.axis] - g[n.axis], Math.max(0, S.start + ((y ? e.pageX : e.pageY) - x.start)));
                E = S.now * v.ratio;
                d.obj.css(b, -E);
                g.obj.css(b, S.now)
            }
            return false
        }
        function i(t) {
            e(document).unbind("mousemove", r);
            e(document).unbind("mouseup", i);
            g.obj.unbind("mouseup", i);
            document.ontouchmove = g.obj[0].ontouchend = document.ontouchend = null;
            return false
        }
        function s(t) {
            if (!(d.ratio >= 1)) {
                var t = t || window.event;
                var r = t.wheelDelta ? t.wheelDelta / 120 : -t.detail / 3;
                E -= r * n.wheel;
                E = Math.min(d[n.axis] - p[n.axis], Math.max(0, E));
                g.obj.css(b, E / v.ratio);
                d.obj.css(b, -E);
                t = e.event.fix(t);
                t.preventDefault()
            }
        }
        function o(t) {
            x.start = y ? t.pageX : t.pageY;
            var n = parseInt(g.obj.css(b));
            S.start = n == "auto" ? 0 : n;
            e(document).bind("mousemove", r);
            document.ontouchmove = function(t) {
                e(document).unbind("mousemove");
                r(t.touches[0])
            };
            e(document).bind("mouseup", i);
            g.obj.bind("mouseup", i);
            g.obj[0].ontouchend = document.ontouchend = function(t) {
                e(document).unbind("mouseup");
                g.obj.unbind("mouseup");
                i(t.touches[0])
            };
            return false
        }
        function u() {
            g.obj.bind("mousedown", o);
            g.obj[0].ontouchstart = function(e) {
                e.preventDefault();
                g.obj.unbind("mousedown");
                o(e.touches[0]);
                return false
            };
            m.obj.bind("mouseup", r);
            if (n.scroll && this.addEventListener) {
                h[0].addEventListener("DOMMouseScroll", s, false);
                h[0].addEventListener("mousewheel", s, false)
            } else if (n.scroll) {
                h[0].onmousewheel = s
            }
        }
        function f() {
            g.obj.css(b, E / v.ratio);
            d.obj.css(b, -E);
            x["start"] = g.obj.offset()[b];
            var e = w.toLowerCase();
            v.obj.css(e, m[n.axis]);
            m.obj.css(e, m[n.axis]);
            g.obj.css(e, g[n.axis])
        }
        function l() {
            c.update();
            u();
            return c
        }
        var c = this;
        var h = t;
        var p = {
            obj: e(".viewport", t)
        };
        var d = {
            obj: e(".overview", t)
        };
        var v = {
            obj: e(".scrollbar", t)
        };
        var m = {
            obj: e(".track", v.obj)
        };
        var g = {
            obj: e(".thumb", v.obj)
        };
        var y = n.axis == "x",
            b = y ? "left" : "top",
            w = y ? "Width" : "Height";
        var E, S = {
            start: 0,
            now: 0
        },
            x = {};
        this.update = function(e) {
            p[n.axis] = p.obj[0]["offset" + w];
            d[n.axis] = d.obj[0]["scroll" + w];
            d.ratio = p[n.axis] / d[n.axis];
            v.obj.toggleClass("disable", d.ratio >= 1);
            m[n.axis] = n.size == "auto" ? p[n.axis] : n.size;
            g[n.axis] = Math.min(m[n.axis], Math.max(0, n.sizethumb == "auto" ? m[n.axis] * d.ratio : n.sizethumb));
            v.ratio = n.sizethumb == "auto" ? d[n.axis] / m[n.axis] : (d[n.axis] - p[n.axis]) / (m[n.axis] - g[n.axis]);
            E = e == "relative" && d.ratio <= 1 ? Math.min(d[n.axis] - p[n.axis], Math.max(0, E)) : 0;
            E = e == "bottom" && d.ratio <= 1 ? d[n.axis] - p[n.axis] : isNaN(parseInt(e)) ? E : parseInt(e);
            f()
        };
        return l()
    }
    e.tiny = e.tiny || {};
    e.tiny.scrollbar = {
        options: {
            axis: "y",
            wheel: 40,
            scroll: false,
            size: "auto",
            sizethumb: "auto"
        }
    };
    e.fn.tinyscrollbar = function(n) {
        var n = e.extend({}, e.tiny.scrollbar.options, n);
        this.each(function() {
            e(this).data("tsb", new t(e(this), n))
        });
        return this
    };
    e.fn.tinyscrollbar_update = function(t) {
        return e(this).data("tsb").update(t)
    }
})(jQuery)


/*****************************************************************************************
**************************   PROJECT FILTER CATEGORIE   **********************************
*****************************************************************************************/
jQuery(document).ready(function($){
	$('#projects-2 .da-thumbs > li').hoverdir();
	$("#projects-2 .projectCategories").html($("#projects-2 .cat_helper").html());
	$("#projects-2 .cat_helper").html("").remove();
	
	quicksandstart("projects-2");
	$('.projectCategories .splitter').children('li').not('.active').slideHorzHide();			
	$('.entry-breadcrumb').appendTo($('#wrapper > .container'));
});

function toggleFilter($el){
	if ($el.hasClass('closed')){
		/* OPEN */
		$el.siblings('.projectCategories').children('.splitter').children('li').slideHorzShow();
		$el.removeClass('closed').addClass('open');										
	} else {
		/* CLOSE */									
		$el.siblings('.projectCategories').children('.splitter').children('li').not('.active').slideHorzHide();
		$el.removeClass('open').addClass('closed');
	}
}
jQuery.fn.slideHorzShow = function( speed, easing, callback ) { this.animate( { marginLeft : 'show', marginRight : 'show', paddingLeft : 'show', paddingRight : 'show', width : 'show' }, speed, easing, callback ); };
jQuery.fn.slideHorzHide = function( speed, easing, callback ) { this.animate( { marginLeft : 'hide', marginRight : 'hide', paddingLeft : 'hide', paddingRight : 'hide', width : 'hide' }, speed, easing, callback ); 
};