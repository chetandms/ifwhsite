<?php
/**
 * Template Name: Contact Template
**/

get_header(); ?>

      <?php 
      $values = get_field( 'image_inner_page_main' );

      if ( $values ) { ?>

          <?php
            $imageID = get_field('image_inner_page_main');
            $image = wp_get_attachment_image_src( $imageID, 'innerheader-image' );
            $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true);
          ?> 

         <header id="inner-header" style="background: url(<?php echo $image[0]; ?>) no-repeat center top; background-size:cover">

      <?php 
      } else { ?>

         <header id="inner-header" style="background: url(<?php bloginfo('template_directory'); ?>/img/headers/phy.jpg) no-repeat center top; background-size:cover">

          <?php 
      }
      ?>

        <div class="header-overlay"></div>
        <div class="container">
            <div class="header-caption">

            <?php 
            $values = get_field( 'custom_title_inner_header' );

            if ( $values ) { ?>

                <h1><?php the_field('custom_title_inner_header'); ?></h1>

            <?php 
            } else { ?>

                    <h1><?php the_title(''); ?></h1>

                <?php 
            }
            ?>

            </div>
            <!-- // caption  -->
        </div>
    </header>
    <!-- // inner header  -->  

    <section id="contact-wrapper">
        <div class="container">
            <div class="row">

                <div class="col-md-4 col-sm-5">
                    <div id="location-wrap">
                        <div class="location-slider">

                            <?php
                            $loop = new WP_Query( array( 'post_type' => 'locations', 'posts_per_page' => 20) ); ?>  
                            <?php while ( $loop->have_posts() ) : $loop->the_post(); 

                            $address = get_field('address');
                            $suite   = get_field('suite');
                            $city    = get_field('city');
                            $state   = get_field('state');
                            $zip     = get_field('zip');

                            ?>                        
                                        
                                <div class="location-slide">
                                    <header>
                                        <span class="title"><?php the_title(''); ?></span>
                                    </header>
                                    <div class="location-content">
                                    
                                          <?php
                                            $imageID = get_field('image_of_office');
                                            $image = wp_get_attachment_image_src( $imageID, 'location-image' );
                                            $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true);
                                          ?> 

                                          <img class="img-responsive" alt="<?php the_title(''); ?>" src="<?php echo $image[0]; ?>" />      

                                        <address>
                                            <?php echo $address ?>, Suite <?php echo $suite ?> </span><br>
                                            <span itemprop="addressLocality"><?php echo $city ?></span>, 
                                             <span itemprop="addressRegion"><?php echo $state ?></span>
                                            <span itemprop="postalCode"> <?php echo $zip ?> </span><br>
                                        </address>

                                        <?php if( get_field('phone') ): ?>
                                            <p class="tel-ico" itemprop="telephone"><a href="tel:<?php the_field('phone') ?>"><?php the_field('phone') ?> </a></p>
                                        <?php endif; ?>

                                        <?php if( get_field('fax') ): ?>
                                            <p class="fax-ico" itemprop="faxNumber"><a href="tel:<?php the_field('fax') ?>"><?php the_field('fax') ?></a></p>
                                        <?php endif; ?>

                                        <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                                            <a href="<?php echo get_permalink(); ?>" class="read-btn">View Location  <i class="fa fa-angle-right" aria-hidden="true"></i></a>

                                        <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                                            <a href="<?php echo get_permalink(); ?>" class="read-btn">Ver ubicación  <i class="fa fa-angle-right" aria-hidden="true"></i></a>
    
                                        <?php endif;?>  

                                        
                                    </div>
                                </div>
                                <!-- // sluide  -->        

                            <?php endwhile; ?>
                            <?php wp_reset_postdata(); ?>                                                                              

                        </div>
                        <!-- // slider  -->
                    </div>
                    <!-- // location wrap  -->
                </div>
                <!-- // slider col -->

                <div class="col-md-8 col-sm-7">
                    <div id="map-wrap">
                        <?php echo do_shortcode('[google_maps id="758"]'); ?>
                    </div>
                </div>
                <!-- // map wrap  -->

            </div>
            <!-- // row  -->
        </div>
        <!-- // container  -->
    </section>
    <!-- // contact  -->

    <div id="form-wrapper-full">
        <div class="container">
            <div class="row">
                
                <div class="col-md-4 col-sm-5">
                    <div class="sidebar-cta">
                        
                        <a href="tel: <?php the_field('phone_number_sidebar_cta'); ?>" class="regular-btn"><i class="fa fa-phone" aria-hidden="true"></i> <?php the_field('phone_number_sidebar_cta'); ?></a>
                        <a href="mailto:<?php the_field('email_address_sidebar_cta'); ?>" class="regular-btn"><i class="fa fa-envelope-o" aria-hidden="true"></i> <?php the_field('email_address_sidebar_cta'); ?></a>
                        <a href="<?php the_field('book_button_link_sidbar_cta'); ?>" class="book-btn"><?php the_field('book_button_label_sidebar_cta'); ?></a>

                    </div>
                </div>
                <!-- // sidebar cta  -->

                <div class="col-md-8 col-sm-7">
                    <div class="form-content">
                        <header>
                            <span class="form-title"><?php the_field('title_of_form_contact'); ?></span>
                        </header>

                        <?php the_field('content_form_contact'); ?>

            

                    </div>
                </div>
                <!-- // form content  -->

            </div>
            <!-- // row  -->
        </div>
        <!-- // container  -->
    </div>
    <!-- // form wrapper  --> 	

<?php get_footer(); ?>