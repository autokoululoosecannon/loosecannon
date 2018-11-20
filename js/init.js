/*
 * Made by WebDesignCrowd
 * http://webdesigncrowd.com
 *
 */
 
(function($){
	$(function(){
	
	  // Fixed header animates in after scrolling past welcome
	  $('#navbar').affix({
        offset: {
          top: function () {
              return (this.top = $('.section.welcome').height() - 70)
            }
        }
      });
    
    // MixItUp Grid
    $(function(){
      $('.gallery').mixitup({
        easing: 'snap',
        resizeContainer: true
      });
		});
    
    // client tab init
    $(document).off('click.tab.data-api');
    $('a.tab').hover(function () { $(this).tab('show'); });
    
    // Tooltip init
    $(".service-icon i").tooltip();
    $(".social-media a").tooltip();
      
    // custom parallax 
    $(window).scroll(function() {
      var top = $(window).scrollTop();
      var width = $(window).width();
      var bottom = top + $(window).height();
      if (width > 768) {
        $("img.background").css({top: -1 * Math.abs(top / 2)});
      }
      else {
        if (top > $(".section.welcome").height()) { $(".section.welcome").css("visibility", "hidden"); }
        else { $(".section.welcome").css("visibility", "visible"); }
      }
      
      $(".parallax").each(function() {
        if ((bottom > $(this).offset().top) && (width > 768)) {
          if ($(this).offset().top > top ) {
            var parallax = (Math.abs(top - $(this).offset().top) / 2);
          }
          else {
            var parallax = ($(this).offset().top - top) / 2;            
          }
          $(this).css("backgroundPosition", ("0px " + (parseInt(parallax)).toString() + "px"));
        }
        else {
          $(this).css("backgroundPosition", "0px 0px");
        }
      });
    });

    // Smooth Scrolling
    $("a.navbar-brand[href^='#'], ul.nav li a[href^='#'], a.scroll-down").click(function(e) {
       e.preventDefault();
       $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    });
    
    // Small Navbar closes Open toggle menus 

    $("ul.nav li a[href^='#']").click(function () {
      $(".navbar-collapse.in").collapse('hide');
    });

	}); // end of document ready
})(jQuery); // end of jQuery name space