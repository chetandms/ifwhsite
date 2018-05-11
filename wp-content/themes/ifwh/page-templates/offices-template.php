<?php
/**
 * Template Name: Location Template
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

         <header id="inner-header" style="background: url(<?php echo $image[0]; ?><meta http-equiv="Content-Type" content="text/html; charset=gb18030">) no-repeat center top; background-size:cover">

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

    <div id="page-wrapper">
        <div class="container">
            <div id="map-wrapper">
                <?php echo do_shortcode('[google_maps id="758"]'); ?>
            </div>
            <!-- // map wrapper  -->

            <div class="row">

                <?php
                $loop = new WP_Query( array( 'post_type' => 'locations', 'posts_per_page' => 20) ); ?>  
                <?php while ( $loop->have_posts() ) : $loop->the_post(); 

                $address = get_field('address');
                $suite   = get_field('suite');
                $city    = get_field('city');
                $state   = get_field('state');
                $zip     = get_field('zip');

                ?>

                        <div class="col-md-4 col-sm-6">
                            <div class="location-box" itemscope itemtype="http://schema.org/MedicalOrganization">
                                <span class="location-title" itemprop="name"><?php the_title(''); ?></span>
                                <div class="location-content">
                                    <div class="image-holder">

                                          <?php
                                            $imageID = get_field('image_of_office');
                                            $image = wp_get_attachment_image_src( $imageID, 'location-image' );
                                            $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true);
                                          ?> 

                                          <img class="img-responsive" alt="<?php the_title(''); ?>" src="<?php echo $image[0]; ?>" />       

                                        <div class="image-opacity"><a href="<?php echo get_permalink(); ?>"></a></div>
                                    </div>
                                    <!-- // image holder  -->
                                    <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
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

                                    </div>
                                    <!-- // content  -->
                                    <div class="oqra-widget-content">
                                        
                                    </div>
                                    <!-- // widgtet content  -->

                                        <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                                        <a href="<?php echo get_permalink(); ?>" class="see-details-btn">View Location <i class="fa fa-angle-right" aria-hidden="true"></i></a>

                                        <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                                        <a href="<?php echo get_permalink(); ?>" class="see-details-btn">Ver ubicación <i class="fa fa-angle-right" aria-hidden="true"></i></a>

                                        <?php endif;?>  

                                    
                                </div>
                                <!-- // content  -->
                            </div>
                        </div>
                        <!-- // locaiton box  -->            

                <?php endwhile; ?>
                <?php wp_reset_postdata(); ?>                  

                                         
            </div>

        </div>
    </div>
    <!-- // page wraooer  -->
  

<?php get_footer(); ?>