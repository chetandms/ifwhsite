<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package tnea
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>

  <meta charset="<?php bloginfo('charset'); ?>">
  <title><?php wp_title('|', TRUE, 'right'); ?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="profile" href="https://gmpg.org/xfn/11">

  <link rel="icon" type="image/png"  href="<?php echo get_template_directory_uri(); ?>/img/ico/favicon.png">

  <meta name="msvalidate.01" content="081C01FC327172663ECCBE04888DA378" />

  <?php wp_head(); ?>

  <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K658C6');</script>
<!-- End Google Tag Manager -->

<script async src="https://i.simpli.fi/dpx.js?cid=82511&action=100&segment=alphasanantoniositepixel&m=1&sifi_tuid=47701"></script>

<script async src="https://i.simpli.fi/dpx.js?cid=82511&conversion=40&campaign_id=0&m=1&tid=view_through&c=alphasanantoniovtpixel&sifi_tuid=47701"></script>
<style>
.column-image{float:left;}
.image_bottom_section{clear: both;}
div.wp-caption.alignleft{}
#main-content{overflow: hidden;}
</style>
</head>

<?php if(ICL_LANGUAGE_CODE=='en'): ?>

    <body <?php body_class(); ?>>


<?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

    <body <?php body_class(); ?> id="spanish-website">


<?php endif;?>  

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K658C6"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

    <div id="search-wrapper-pop">
        <a href="javascript:;" class="close-btn"></a>
        <div id="search-box">

            <div id="search-content">

                <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                   <span class="title">Enter your search term below:</span>  

                <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                    <span class="title">Favor de ingresar su búsqueda:</span>  

                <?php endif;?>  

                    <div class="form-box">

                        <form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>">
                            <label>
                                <input type="text" class="search-field"
                                    placeholder="<?php echo esc_attr_x( 'Search …', 'placeholder' ) ?>"
                                    value="<?php echo get_search_query() ?>" name="s"
                                    title="<?php echo esc_attr_x( 'Search for:', 'label' ) ?>" />
                            </label>
                            <input type="submit" class="search-submit"
                                value="<?php echo esc_attr_x( 'Search', 'submit button' ) ?>" />
                        </form>

                    </div>
                    <!-- // form box  -->

                    <hr>

                    <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                        <footer class="hidden-xs hidden-sm">
                            <small>Most visited pages: <a href="<?php bloginfo('url'); ?>/services/" class="green-btn">Services</a> 
                            <a href="<?php bloginfo('url'); ?>/locations/" class="pink-btn">Locations</a> 
                            <a href="<?php bloginfo('url'); ?>/schedule-an-appointment/" class="blue-btn">Schedule an Appointment</a></small>
                        </footer>

                    <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                        <footer class="hidden-xs hidden-sm">
                            <small>Paginas con mayor número de visitas: 
                            <a href="<?php bloginfo('url'); ?>/ubicaciones/" class="pink-btn">Ubicaciones</a> 
                            <a href="<?php bloginfo('url'); ?>/nuevos-pacientes/agendar-una-cita/" class="blue-btn">Agendar una Cita</a></small>
                        </footer>

                    <?php endif;?>  

            </div>
            <!-- // search content  -->
            
        </div>
        <!-- // box  -->
    </div>
    <!-- // search  -->

    <a name="top"></a>
    
    <div id="top-bar">
        <div class="container">
            <div class="row">

                <div class="col-sm-2 hidden-xs">
                    <div id="lang-bar">

                         <?php wp_nav_menu( array( 'theme_location' => 'lang_menu' ) ); ?>
      

                    </div>
                </div>
                <!-- // language  -->

                <div class="col-sm-10 col-xs-12">
                    <div id="info-bar">
                        <?php if( get_field('patients_login_label', 'options') ): ?>
                            <a href="<?php the_field('patients_login_link', 'options'); ?>" class="patients-login-btn" target="_blank" title="<?php the_field('patients_login_label', 'options'); ?>">
                              <?php the_field('patients_login_label', 'options'); ?>
                            </a>
                        <?php endif; ?>

                        <ul class="action-btns">

                            <?php if( get_field('find_label', 'options') ): ?>
                                <li><a href="<?php the_field('find_link', 'options'); ?>"><i class="fa fa-map-marker" aria-hidden="true"></i> <?php the_field('find_label', 'options'); ?></a></li>
                            <?php endif; ?>

                            <li><a href="javascript:;" class="search-icon"><i class="fa fa-search" aria-hidden="true"></i><?php the_field('search_label', 'options'); ?></a></li>

                        </ul>
                        <!-- // actions  -->
                        <?php if( get_field('social_label', 'options') ): ?>
                            <small><?php the_field('social_label', 'options'); ?></small>
                        <?php endif; ?>
                        <ul class="social-icons">

                            <?php if( have_rows('social_links', 'options') ): ?>
                              <?php while( have_rows('social_links', 'options') ): the_row(); ?>

                                    <li><a href="<?php the_sub_field('url__link'); ?>" target="_blank" data-toggle="tooltip" data-placement="bottom" title="<?php the_sub_field('title'); ?>"><?php the_sub_field('icon'); ?></a></li>

                              <?php endwhile; ?>
                            <?php endif; ?>

                        </ul>
                        <!-- // socials  -->
                    </div>
                </div>
                <!-- // info bar  -->

            </div>
            <!-- // row  -->
        </div>
        <!-- // container  -->
    </div>
    <!-- // top bar  -->

    <div id="main-bar">
        <div class="container">
            <div class="row">
                
                <div class="col-lg-3 col-md-3 col-sm-4">
                    <div id="brand-box">
                        <a href="<?php echo icl_get_home_url() ?>" title="Institute for Women’s Health"><img src="<?php the_field('logo_of_site', 'options'); ?>" alt="OBGYN San Antonio - Ob Gyn Doctors" class="img-responsive"></a>
                    </div>
                </div>
                <!-- // branding  -->

                <div class="col-lg-7 col-md-6 col-sm-8">
                    <div id="main-cta">

                        <p><?php the_field('phone_label', 'options'); ?> <i class="fa fa-phone" aria-hidden="true"></i> 
                            <a href="tel:<?php the_field('phone_number', 'options'); ?>" title="Call us Now"><?php the_field('phone_number', 'options'); ?></a>
                        </p>

                        <a href="<?php the_field('cta_link_main', 'options'); ?>" class="make-app-btn"><?php the_field('main_cta_label', 'options'); ?></a>
                    </div>
                </div>
                <!-- // main cta  -->

                <div class="col-lg-2 col-md-3 hidden-sm hidden-xs">
                    <div id="oqra-box">

                        <link rel="stylesheet" type="text/css" href="https://1qreputation.com/institute-for-womens-health/w2/style.css">
                        <script src="https://1qreputation.com/institute-for-womens-health/w2/oneq.js"></script>
                        <script >loadScript("https://1qreputation.com/institute-for-womens-health/w2/data.js", function() { init(2); });
                        </script>
			

                        <a href="<?php bloginfo('url'); ?>/reviews/"><div id="oReviews"></div></a>

                    </div>
                </div>
                <!-- // oqra box  -->

            </div>
            <!-- // row  -->
        </div>
        <!-- // container  -->
    </div>
    <!-- // main bar  -->

    <div id="menu-bar" class="hidden-xs hidden-sm">
        <div class="container">
            <?php wp_nav_menu( array( 'theme_location' => 'main_menu' ) ); ?>
        </div>
        <!-- // container  -->
    </div>
    <!-- // menu bar -->

    <!--
    <div id="mobile-menu-bar" class="visible-xs">
        <div class="container">
            <div class="row">

                <div class="col-xs-6">
                    <div id="lang-bar">
                        <ul>
                            <li><a href="#">Espanol</a></li>
                        </ul>
                    </div>                    
                </div>
               

                <div class="col-xs-6">
                    <div id="menu-btn">
                        <a href="#" class="menu-btn">
                          <span></span>
                          <span></span>
                          <span class="last-span"></span>
                        </a>                           
                    </div>                  
                </div>
                

            </div>
        </div>
    </div>
    // mobile menu bar  -->

