(function ($) {
    "use strict";
  
    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        
            $('#mobile-menu').meanmenu({
                meanScreenWidth: "992",
                meanMenuContainer: '.mobile-menu',
             });



        $('.menu-open').click( function (){
                  
                $('.site-lfet-bar, .site-main-content-all').toggleClass('activee');  
                $('.menu-open').toggleClass('toggle');  
                  
        });

        $('.menu-close').click( function (){
                  
                $('.site-lfet-bar').removeClass('activee');  
               
                  
        });

    //header sticky
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
            $("#header-sticky").removeClass("sticky");
        } else {
            $("#header-sticky").addClass("sticky");
        }
    }); 
    
    
    
  
    $('.testimonial-active').owlCarousel({
      loop:true,
      dot:false,
      nav:false,
      autoplay:false,
      autoplayTimeout:3000,
      smartSpeed:1000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
    })

    $('.brand-active').owlCarousel({
        loop:true,
        items:5,
        dots:true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        margin:15,
        nav:true,
        autoplay:false,
        autoplayTimeout:3000,
        smartSpeed:1000,
        responsive:{
            0:{
                items:2,
                nav:false
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
      })



      AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });



      $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
      });
   
          
      
});  

}(jQuery));	