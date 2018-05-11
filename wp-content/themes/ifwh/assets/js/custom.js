//@prepros-prepend libs/bootstrap.min.js
//@prepros-prepend easing.js
//@prepros-prepend libs/jquery-ui.min.js
//@prepros-prepend libs/slick.min.js
//@prepros-prepend jquery.matchHeight.js

/* Init slick slider homepage top */
$(".top-slider").slick({
  // normal options...
  infinite: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnFocus: false,
  pauseOnHover:false,
  pauseOnDotsHover: false,

  // the magic
  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        infinite: true,
        dots: true,
        arrows: false,
      }

    }]
});

// caring slider
$(".caring-slider").slick({
  // normal options...
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  centerMode: false,
  arrows:false,
  dots: true,
});


// caring slider
$(".location-slider").slick({
  // normal options...
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  centerMode: false,
  arrows:false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3500,  
});

// Remove placeholder
$('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
});
$('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
});

// tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

$(function() {
  $('.caring-box').matchHeight();
});

$(function() {
  $('.location-info-box').matchHeight();
});


$(function() {
  $('#news-wrapper .news-box').matchHeight();
});

$(function() {
  $('#news-wrapper .news-box h3').matchHeight();
});

$(function() {
  $('.patient-box .title').matchHeight();
});

$(function() {
  $('#phy-list .provider-box .doctor-title').matchHeight();
});

$(function() {
  $('#phy-list .provider-box').matchHeight();
});


$(function() {
  $('#news-wrapper .career-box h3').matchHeight();
});

$(function() {
  $('#brochure-wrapper .brochure-box h3').matchHeight();
});

$(function() {
  $('.location-box address').matchHeight();
});


$(function() {
  $('.location-box .location-title').matchHeight();
});

$(function() {
  $('#page-wrapper .location-box location-content').matchHeight();
});

// sidebar accordion
$('#mobile-footer-nav').accordion({
    collapsible:true,
      heightStyle: "content" ,
    beforeActivate: function(event, ui) {
         // The accordion believes a panel is being opened
        if (ui.newHeader[0]) {
            var currHeader  = ui.newHeader;
            var currContent = currHeader.next('.ui-accordion-content');
         // The accordion believes a panel is being closed
        } else {
            var currHeader  = ui.oldHeader;
            var currContent = currHeader.next('.ui-accordion-content');
        }
         // Since we've changed the default behavior, this detects the actual status
        var isPanelSelected = currHeader.attr('aria-selected') == 'true';
        
         // Toggle the panel's header
        currHeader.toggleClass('ui-corner-all',isPanelSelected).toggleClass('ui-accordion-header-active ui-state-active ui-corner-top',!isPanelSelected).attr('aria-selected',((!isPanelSelected).toString()));
        
        // Toggle the panel's icon
        currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);
        
         // Toggle the panel's content
        currContent.toggleClass('accordion-content-active',!isPanelSelected)    
        if (isPanelSelected) { currContent.slideUp(); }  else { currContent.slideDown(); }

        return false; // Cancels the default action
    }
});

// sidebar accordion
$('#services-acc').accordion({
    collapsible:true,
      heightStyle: "content" ,
    beforeActivate: function(event, ui) {
         // The accordion believes a panel is being opened
        if (ui.newHeader[0]) {
            var currHeader  = ui.newHeader;
            var currContent = currHeader.next('.ui-accordion-content');
         // The accordion believes a panel is being closed
        } else {
            var currHeader  = ui.oldHeader;
            var currContent = currHeader.next('.ui-accordion-content');
        }
         // Since we've changed the default behavior, this detects the actual status
        var isPanelSelected = currHeader.attr('aria-selected') == 'true';
        
         // Toggle the panel's header
        currHeader.toggleClass('ui-corner-all',isPanelSelected).toggleClass('ui-accordion-header-active ui-state-active ui-corner-top',!isPanelSelected).attr('aria-selected',((!isPanelSelected).toString()));
        
        // Toggle the panel's icon
        currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);
        
         // Toggle the panel's content
        currContent.toggleClass('accordion-content-active',!isPanelSelected)    
        if (isPanelSelected) { currContent.slideUp(); }  else { currContent.slideDown(); }

        return false; // Cancels the default action
    }
});

// sidebar accordion
$('.jobs-content-block').accordion({
    collapsible:true,
      heightStyle: "content" ,
    beforeActivate: function(event, ui) {
         // The accordion believes a panel is being opened
        if (ui.newHeader[0]) {
            var currHeader  = ui.newHeader;
            var currContent = currHeader.next('.ui-accordion-content');
         // The accordion believes a panel is being closed
        } else {
            var currHeader  = ui.oldHeader;
            var currContent = currHeader.next('.ui-accordion-content');
        }
         // Since we've changed the default behavior, this detects the actual status
        var isPanelSelected = currHeader.attr('aria-selected') == 'true';
        
         // Toggle the panel's header
        currHeader.toggleClass('ui-corner-all',isPanelSelected).toggleClass('ui-accordion-header-active ui-state-active ui-corner-top',!isPanelSelected).attr('aria-selected',((!isPanelSelected).toString()));
        
        // Toggle the panel's icon
        currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);
        
         // Toggle the panel's content
        currContent.toggleClass('accordion-content-active',!isPanelSelected)    
        if (isPanelSelected) { currContent.slideUp(); }  else { currContent.slideDown(); }

        return false; // Cancels the default action
    }
});


// sidebar accordion
$('#insurances-acc').accordion({
    collapsible:true,
      heightStyle: "content" ,
    beforeActivate: function(event, ui) {
         // The accordion believes a panel is being opened
        if (ui.newHeader[0]) {
            var currHeader  = ui.newHeader;
            var currContent = currHeader.next('.ui-accordion-content');
         // The accordion believes a panel is being closed
        } else {
            var currHeader  = ui.oldHeader;
            var currContent = currHeader.next('.ui-accordion-content');
        }
         // Since we've changed the default behavior, this detects the actual status
        var isPanelSelected = currHeader.attr('aria-selected') == 'true';
        
         // Toggle the panel's header
        currHeader.toggleClass('ui-corner-all',isPanelSelected).toggleClass('ui-accordion-header-active ui-state-active ui-corner-top',!isPanelSelected).attr('aria-selected',((!isPanelSelected).toString()));
        
        // Toggle the panel's icon
        currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);
        
         // Toggle the panel's content
        currContent.toggleClass('accordion-content-active',!isPanelSelected)    
        if (isPanelSelected) { currContent.slideUp(); }  else { currContent.slideDown(); }

        return false; // Cancels the default action
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#to-top-btn').fadeIn();
    } else {
        $('#to-top-btn').fadeOut();
    }
});

$(function() {
  $('a[href*="#top"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// select 
$('.form-box select').selectpicker({
  size: 9,
});

// select 
$('#schedule-box select').selectpicker({
  size: 9,
});

// select 
$('.archive-box select').selectpicker({
  size: 9,
});

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});


$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows:true,
  centerMode: false,
  focusOnSelect: true,
  variableWidth: false,

    responsive: [

    {
      breakpoint: 1025,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },

    {
      breakpoint: 960,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },

    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1
      }
    }
  ]

});

$(function() {
  $('#schedule-content').matchHeight({
        target: $('#schedule-form'),
        property: 'min-height'
    });
});

// Seearch btn
$(document).ready(function() {
      $('.search-icon').click(function() {
        $('#search-wrapper-pop').fadeToggle(600);
        }
      );
      
    }
  );

// Seearch btn
$(document).ready(function() {
      $('.close-btn').click(function() {
        $('#search-wrapper-pop').fadeToggle();
        }
      );
      
    }
  );


  jQuery(document).ready(function($) {
    jQuery(".search-filter").find("a[href='"+window.location.href+"']").each(function(){
        jQuery(this).addClass("active-sidebar-menu");
        //add additional code here if needed
    })
}); 