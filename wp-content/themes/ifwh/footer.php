<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>

  <div id="newsletter-block">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-lg-offset-4">
                    <div id="newsletter-content">
                        <span class="title"><?php the_field('title_newsletter_home', 'options'); ?></span>

                        <!-- Begin MailChimp Signup Form -->
                        <div id="mc_embed_signup">
                        <form action="//ifwh.us10.list-manage.com/subscribe/post?u=9345446866dba83cf208f19b6&amp;id=bbab56a46a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                            <div id="mc_embed_signup_scroll">
                  
                         
                            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
               
                            <div id="mce-responses">
                                <div class="response" id="mce-error-response" style="display:none"></div>
                                <div class="response" id="mce-success-response" style="display:none"></div>
                            </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->

                            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_9345446866dba83cf208f19b6_bbab56a46a" tabindex="-1" value=""></div>

                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                         
                        </form>
                        </div>

                        <!--End mc_embed_signup-->

                        <ul class="social-icons">

                            <?php if( have_rows('socials_list_newsletter', 'options') ): ?>
                              <?php while( have_rows('socials_list_newsletter', 'options') ): the_row(); ?>

                                    <li><a href="<?php the_sub_field('url'); ?>" target="_blank" data-toggle="tooltip" data-placement="bottom" title="<?php the_sub_field('title'); ?>"><?php the_sub_field('icon'); ?></a></li>

                              <?php endwhile; ?>
                            <?php endif; ?>

                        </ul>
                        <!-- // socials  -->

                    </div>
                </div>
                <!-- // block  -->
            </div>
            <!-- // row  -->
        </div>
        <!-- // container  -->
    </div>
    <!-- // newsleter  -->


    <footer id="page-footer">

        <div class="container hidden-xs">

            <div class="row">

                <div class="col-md-4 col-sm-4">
                    <div class="footer-box">
                        <span class="title"><?php the_field('box_1_title', 'options'); ?></span>
                        <?php wp_nav_menu( array( 'theme_location' => 'advanced_menu' ) ); ?>
                    </div>
                </div>
                <!-- // footer box  -->

                <div class="col-md-4 col-sm-4">
                    <div class="footer-box">
                        <span class="title"><?php the_field('box_2_title', 'options'); ?></span>
                        <?php wp_nav_menu( array( 'theme_location' => 'reconstructive_menu' ) ); ?>
                    </div>
                </div>
                <!-- // footer box  -->

                <div class="col-md-4 col-sm-4">
                    <div class="footer-box">
                        <span class="title"><?php the_field('box_3_title', 'options'); ?></span>
                        <?php wp_nav_menu( array( 'theme_location' => 'fertility_menu' ) ); ?> 
                    </div>
                </div>
                <!-- // footer box  -->                                

            </div>
            <!-- // row  -->

            <hr>

            <div class="row">

                <div class="col-md-4 col-sm-4">
                    <div class="footer-box">
                        <span class="title"><?php the_field('box_4_title', 'options'); ?></span>
                        <?php wp_nav_menu( array( 'theme_location' => 'mature_menu' ) ); ?>   
                    </div>
                </div>
                <!-- // footer box  -->

                <div class="col-md-4 col-sm-4">
                    <div class="footer-box">
                        <span class="title"><?php the_field('box_5_title', 'options'); ?></span>
                        <?php wp_nav_menu( array( 'theme_location' => 'gynecology_menu' ) ); ?>  
                    </div>
                </div>
                <!-- // footer box  -->

                <div class="col-md-4 col-sm-4">
                    <div class="footer-box">
                        <span class="title"><?php the_field('box_6_title', 'options'); ?></span>
                        <?php wp_nav_menu( array( 'theme_location' => 'other_menu' ) ); ?>  
                    </div>
                </div>
                <!-- // footer box  -->                                

            </div>
            <!-- // row  -->            

        </div>
        <!-- // container  -->

        <div id="mobile-footer-nav" class="visible-xs">
            
            <span class="footer-title"><?php the_field('box_1_title', 'options'); ?></span>
            <div class="menu-content">
                <?php wp_nav_menu( array( 'theme_location' => 'advanced_menu' ) ); ?>               
            </div>
            <!-- // menu content  -->

            <span class="footer-title"><?php the_field('box_2_title', 'options'); ?></span>
            <div class="menu-content">
                <?php wp_nav_menu( array( 'theme_location' => 'reconstructive_menu' ) ); ?>             
            </div>
            <!-- // menu content  -->         
            

            <span class="footer-title"><?php the_field('box_3_title', 'options'); ?></span>
            <div class="menu-content">
                <?php wp_nav_menu( array( 'theme_location' => 'fertility_menu' ) ); ?>             
            </div>
            <!-- // menu content  -->              

            <span class="footer-title"><?php the_field('box_4_title', 'options'); ?></span>
            <div class="menu-content">
                <?php wp_nav_menu( array( 'theme_location' => 'mature_menu' ) ); ?>              
            </div>
            <!-- // menu content  -->       

            <span class="footer-title"><?php the_field('box_5_title', 'options'); ?></span>
            <div class="menu-content">
                <?php wp_nav_menu( array( 'theme_location' => 'gynecology_menu' ) ); ?>              
            </div>
            <!-- // menu content  -->       
            
            <span class="footer-title"><?php the_field('box_6_title', 'options'); ?></span>
            <div class="menu-content">
                <?php wp_nav_menu( array( 'theme_location' => 'other_menu' ) ); ?>              
            </div>
            <!-- // menu content  -->                                         

        </div>
        <!-- // nav  -->

        <div id="copy-bar">
            <div class="container">
                <div class="row">
                    
                    <div class="col-lg-8 col-md-7">
                        <div class="copy-notice">
                            <small>&copy; <?php echo date("Y"); ?> <?php the_field('copyright_notice', 'options'); ?> <?php the_field('developed_label', 'options'); ?>
                            <a href="https://digitalmarketingsapiens.com/" class="visible-xs dms-ico" target="_blank">DMS</a> <a href="https://digitalmarketingsapiens.com/" target="_blank" class="hidden-xs" title="Website Design & Development San Antonio">
                            <img src="<?php bloginfo('template_directory'); ?>/img/ico/dms.png" alt="Digital Marketing Sapiens" title="Website Design & Development in San Antonio"></a></small>
                            <a href="https://www.ifwh.org/sitemap/" style="color:#fff;margin-left: 100px;" class="careers-btn" title="Sitemap">Sitemap</a>
                        </div>
                    </div>
                    <!-- // notice  -->

                    <div class="col-lg-4 col-md-5">
                        <div class="footer-cta">
                            <small><?php the_field('cta_label_copy_right', 'options'); ?> <a href="tel:<?php the_field('cta_phone_copy_right', 'options'); ?>"><?php the_field('cta_phone_copy_right', 'options'); ?></a></small>

                          <?php if( get_field('careers_label_footer', 'options') ): ?>
                            <a href="<?php the_field('careers_link_footer', 'options'); ?>" class="careers-btn" title="Employment Opportunities"><?php the_field('careers_label_footer', 'options'); ?></a>
                          <?php endif; ?>
				
                        </div>
                    </div>
                    <!-- // cta  -->

                </div>
                <!-- // row  -->
            </div>
            <!-- // container  -->
        </div>
        <!-- // copy bar  -->

    </footer>
    <!-- // page footer  -->


<script type='application/ld+json'> 
{
  "@context": "https://www.schema.org",
  "@type": "MedicalOrganization",
  "name": "The Institute For Women’s Health",
  "url": "https://www.ifwh.org/",
  "sameAs" : [
  "https://www.facebook.com/Instituteforwomenshealth/",
  "https://twitter.com/ifwhsa",
  "https://www.youtube.com/user/insforwomenshealth/videos",
  "https://plus.google.com/118282064827486880497"
  ],
  "logo": "https://www.ifwh.org/wp-content/uploads/2017/06/obgyn-logo.png",
  "description": "Institute for Women’s Health have team of more than 30 OBGYN physicians who offers a wide range of obstetrical and gynecology care services in San Antonio. Exceptional women’s healthcare, from obstetrics and gynecology to fertility and more.",
  "address": 
  [
  {
    "@type": "PostalAddress",
    "streetAddress": "Administrative Office Building - 1355 Central Parkway South, Suite 400",
    "addressLocality": "San Antonio",
    "addressRegion": "Texas",
    "postalCode": "78232",
    "addressCountry": "United States",
    "telephone":"(210) 349-9300 ",
    "url": "https://www.ifwh.org/offices/administrative-office-building/"   
  },
  {
    "@type": "PostalAddress",
    "streetAddress": "Metropolitan Professional Building - 1303 McCullough Ave., Suite GL70",
    "addressLocality": "San Antonio",
    "addressRegion": "Texas",
    "postalCode": "78212",
    "addressCountry": "United States",
    "telephone": "+1 (210) 226-9705 ",
    "url": "https://www.ifwh.org/offices/metropolitan-professional-building/"   
  },
  {
   "@type": "PostalAddress",
    "streetAddress": "Westover Hills Medical Office Building - 3903 Wiseman Blvd., Suite 200",
    "addressLocality": "San Antonio",
    "addressRegion": "Texas",
    "postalCode": "78251",
    "addressCountry": "United States",
    "telephone": "+1 (210) 684-4100",

    "url": "https://www.ifwh.org/offices/westover-hills-medical-office-building/"   
  },
   {
   "@type": "PostalAddress",
    "streetAddress": "Hardy Oak Medical Pavilion - 18707 Hardy Oak Blvd., Suite 230",
    "addressLocality": "San Antonio",
    "addressRegion": "Texas",
    "postalCode": "78258",
    "addressCountry": "United States",
    "telephone": "+1 (210) 494-2000 ",

    "url": "https://www.ifwh.org/offices/hardy-oak-medical-pavilion/"   
  },
   {
    "@type": "PostalAddress",
    "streetAddress": "The Advanced Fertility Center - 18707 Hardy Oak Blvd., Suite 500",
    "addressLocality": "San Antonio",
    "addressRegion": "Texas",
    "postalCode": "78258",
    "addressCountry": "United States",
    "telephone": "+1 (210) 616-0680",

    "url": "https://www.ifwh.org/offices/the-advanced-fertility-center/"    
  },
   {
    "@type": "PostalAddress",
    "streetAddress": "Northeast Methodist Plaza - 12709 Toepperwein, Suite 309",
    "addressLocality": "San Antonio",
    "addressRegion": "Texas",
    "postalCode": "78233",
    "addressCountry": "United States",
    "telephone": "+1 (210) 657-4099",

    "url": "https://www.ifwh.org/offices/northeast-methodist-plaza/"    
  },
  {
   "@type": "PostalAddress",
    "streetAddress": "The Shops at Lincoln Heights - 999 E. Basse Road, Suite 100",
    "addressLocality": "San Antonio",
    "addressRegion": "Texas",
    "postalCode": "78209",
    "addressCountry": "United States",
    "telephone": "+1 (210) 656-3040",

    "url": "https://www.ifwh.org/offices/the-shops-at-lincoln-heights/" 
  },
  {
   "@type": "PostalAddress",
    "streetAddress": "Medical Center Tower II - 7940 Floyd Curl Drive, Suite 900",
    "addressLocality": "San Antonio",
    "addressRegion": "Texas",
    "postalCode": "78229",
    "addressCountry": "United States",
    "telephone": "+1 (210) 614-1000",

    "url": "https://www.ifwh.org/offices/medical-center-tower-ii/"  
  },
   {
   "@type": "PostalAddress",
    "streetAddress": "Medical Center Tower I - 7950 Floyd Curl Drive, Suite 600",
    "addressLocality": "San Antonio",
    "addressRegion": "Texas",
    "postalCode": "78229",
    "addressCountry": "United States",
    "telephone": "+1 (210) 615-8585",

    "url": "https://www.ifwh.org/offices/medical-center-tower-i/"   
  }
  ]
}
</script>    

    <a href="#top" id="to-top-btn" class="hidden-xs">To The Top!</a>


    <?php if (get_field('turn_on_off', 'options') == 'Yes') { ?>
    <div id="noticeModal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          <div class="modal-body">

            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>

            <?php the_field('content_popup', 'options'); ?>

          </div>
          <div class="modal-footer">
            <button type="button" class="close-btn-new" data-dismiss="modal">Close</button>
          </div>
        </div>

      </div>
    </div>
    <!--End of BS popup-->  
    <?php } ?>                      

    <?php if (get_field('turn_on_off', 'options') == 'No') { ?>

    <?php } ?>       

    <div id="side-nav" class="hidden-xs hidden-sm">
        <a href="<?php the_field('appointment_link', 'options'); ?>" class="make-btn"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> <span><?php the_field('appointment_title_float', 'options'); ?></span></a>
        <a href="<?php the_field('patients_link_floating', 'options'); ?>" class="login-btn" target="_blank"><i class="fa fa-unlock-alt" aria-hidden="true"></i><span><?php the_field('patients_title_floating', 'options'); ?></span></a>
        <a href="<?php the_field('locations_link_floating', 'options'); ?>" class="location-btn"><i class="fa fa-map-marker" aria-hidden="true"></i> <span><?php the_field('locations_title_floating', 'options'); ?></span></a>
    </div>
    <!-- // side nav  -->

    <div id="side-nav-mobile" class="visible-xs visible-sm">
        <a href="<?php the_field('appointment_link', 'options'); ?>" class="make-btn"><i class="fa fa-calendar-check-o" aria-hidden="true"></i></a>
        <a href="<?php the_field('phone_number_float', 'options'); ?>" class="login-btn"><i class="fa fa-phone" aria-hidden="true"></i></a>
    </div>
    <!-- // side nav  -->    

    <script src="<?php echo get_template_directory_uri(); ?>/js/modernizr-2.7.1.min.js"></script>

    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/bootstrap-select.min.js"></script>
    <!-- Include all compiled plugins and libraries -->
    <script src="<?php echo get_template_directory_uri(); ?>/js/custom-dist.js"></script>   

    <script src="<?php echo get_template_directory_uri(); ?>/js/_main.js"></script>        

    <script src="<?php echo get_template_directory_uri(); ?>/js/js.cookie.js"></script>

    <script>
        $(document).ready(function(){
            setTimeout(function(){
            if(!Cookies.get('modalShown')) {
                $("#noticeModal").modal('show');
              Cookies.set('modalShown', true);
            } else {
            }
                    
    },3000);
 });
    </script>


    <script>
         var checkeventcount = 1,prevTarget;
    $('.modal').on('show.bs.modal', function (e) {
        if(typeof prevTarget == 'undefined' || (checkeventcount==1 && e.target!=prevTarget))
        {  
          prevTarget = e.target;
          checkeventcount++;
          e.preventDefault();
          $(e.target).appendTo('body').modal('show');
        }
        else if(e.target==prevTarget && checkeventcount==2)
        {
          checkeventcount--;
        }
     });
    </script>


<?php if(ICL_LANGUAGE_CODE=='en'): ?>

    <?php if (is_page('home') ) { ?>

    <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
        location = 'https://www.ifwh.org/home-book-appoinment-thank-you/';
    }, false );
    </script>  

   <?php } elseif (is_page('contact-us') ) { ?>

    <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
        location = 'https://www.ifwh.org/contact-thank-you/';
    }, false );
    </script>  

   <?php } elseif (is_page(1058) ) { ?>

    <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
        location = 'https://www.ifwh.org/schedule-appoinment-thank-you/';
    }, false );
    </script>      

   <?php } elseif (is_singular('doctors') ) { ?>

    <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
        location = 'https://www.ifwh.org/sidebar-schedule-appoinment-thank-you/';
    }, false );
    </script>   

   <?php } elseif (is_singular('careers') ) { ?>

    <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
        location = 'https://www.ifwh.org/apply-job-thank-you/';
    }, false );
    </script>       

      <?php } else { ?>

    <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
        location = '';
    }, false );
    </script>

  <?php } ?>    

  <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

    <?php if (is_page('home') ) { ?>

    <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
        location = 'https://www.ifwh.org/es/home-book-appoinment-thank-you/';
    }, false );
    </script>  

   <?php } elseif (is_page_template('page-templates/contact-template.php') ) { ?>

    <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
        location = 'https://www.ifwh.org/es/contact-thank-you/';
    }, false );
    </script>  

   <?php } elseif (is_page(1356) ) { ?>

    <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
        location = 'https://www.ifwh.org/es/schedule-appoinment-thank-you/';
    }, false );
    </script>      

   <?php } elseif (is_singular('doctors') ) { ?>

    <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
        location = 'https://www.ifwh.org/es/sidebar-schedule-appoinment-thank-you/';
    }, false );
    </script>   

   <?php } elseif (is_singular('careers') ) { ?>

    <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
        location = 'https://www.ifwh.org/es/apply-job-thank-you/';
    }, false );
    </script>       

      <?php } else { ?>

    <script>
    document.addEventListener( 'wpcf7mailsent', function( event ) {
        location = '';
    }, false );
    </script>

  <?php } ?> 

<?php endif;?> 

<?php wp_footer(); ?>
</body>
</html>