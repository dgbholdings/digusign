
	(function($){
	$(document).ready(function() {
		$('.styleswitch').click(function()
		{
			switchStylestyle(this.getAttribute("rel"));
			return false;
		});
		var c = readCookie('style');
		if (c) switchStylestyle(c);
	});
	
	function switchStylestyle(styleName) {
		$('link[rel*=style][title]').each(function(i) 
		{
			this.disabled = true;
			if (this.getAttribute('title') == styleName) this.disabled = false;
		});
		createCookie('style', styleName, 365);
	}
	})(jQuery);
	
	
	// cookie functions http://www.quirksmode.org/js/cookies.html
	function createCookie(name,value,days){
		if (days)	{
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}
	function readCookie(name){
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++)
		{
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	function eraseCookie(name){
		createCookie(name,"",-1);
	}
	
	/******************************************************************************************************************
	
	 Allure - Switcher
	
	******************************************************************************************************************/
	
	$(document).ready(function(){
		
		//class fade-image (home) onLoad
		$('.fade-image').each(function(){
			$(this).load(function(){
				$(this).animate({
					'opacity':'1'
				}, 1000);
			});
		});
	
		$('.hover').mouseover(function() {
			//Set "selected" the LI clicked
			$('.hover').each(function(){
			$(this).removeClass("isover");
			});
			$(this).addClass("isover");
		});
		
		$(".option_btn").click(function(){
			if($("#option_wrapper").css("left")!="0px"){
				$("#option_wrapper").animate({left:"0px"},{duration:300});
				$(this).animate({left:"201px"},{duration:300});
				$(this).removeClass("settings-close").addClass("settings-open");
			}else{
				$("#option_wrapper").animate({left:"-202px"},{duration:300});
				$(".option_btn").animate({left:"0"},{duration:300});
				$(this).removeClass("settings-open").addClass("settings-close");
			}
			
			
		//Change body background image
		$("#bg_body_image a").click(function(){
			
			$("body").css("background", "url("+$(this).attr('rel')+") fixed");

			$('.fade-image').load(function(){
				$(this).animate({
					'opacity': 1
				}, 1000);
			});
		});
		
		
		});
   
});
