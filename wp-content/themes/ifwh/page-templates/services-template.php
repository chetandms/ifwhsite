<?php
/**
 * Template Name: Services Template
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

   <section id="intro-services-block">
        <div class="container">
            <div class="row">
                
                <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2">
                    <div id="intro-content">
                        <h2><?php the_field('title_service_intro'); ?></h2>
                        <img src="<?php bloginfo('template_directory'); ?>/img/ico/ifwh-logo.png" alt="<?php the_field('title_service_intro'); ?>">
                        <?php the_field('content_services_intro'); ?>
                    </div>
                </div>
                <!-- // content  -->

            </div>
            <!-- // row  -->
        </div>
    </section>

    <?php if( have_rows('list_of_services') ): ?>
      <?php while( have_rows('list_of_services') ): the_row(); ?>


        <?php if (get_sub_field('background_color') == 'White') { ?>

          <section class="service-block white-box">

          <?php } elseif (get_sub_field('background_color') == 'Green') { ?>

          <section class="service-block green-box" style="background:url(<?php the_sub_field('background_image') ?>) 
          no-repeat 

          <?php if (get_sub_field('background_image_position') == 'Right') { ?>
          right 
          <?php } elseif (get_sub_field('background_image_position') == 'Left') { ?>
          left
          <?php } ?>   

          center;">

          <?php } elseif (get_sub_field('background_color') == 'Pink') { ?>

          <section class="service-block pink-box" style="background:url(<?php the_sub_field('background_image') ?>) 
          no-repeat 

          <?php if (get_sub_field('background_image_position') == 'Right') { ?>
          right 
          <?php } elseif (get_sub_field('background_image_position') == 'Left') { ?>
          left
          <?php } ?>   

          center;">     
          

          <?php } elseif (get_sub_field('background_color') == 'Blue') { ?>

          <section class="service-block blue-box" style="background:url(<?php the_sub_field('background_image') ?>) 
          no-repeat 

          <?php if (get_sub_field('background_image_position') == 'Right') { ?>
          right 
          <?php } elseif (get_sub_field('background_image_position') == 'Left') { ?>
          left
          <?php } ?>   
          
          center;">                    

        <?php } ?>  

        


            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h3><?php the_sub_field('title'); ?></h3>

                        <?php if( get_field('featured_icon') ): ?>
                          <?php
                            $imageID = get_sub_field('featured_icon');
                            $image = wp_get_attachment_image_src( $imageID, 'services-icon' );
                            $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true);
                          ?> 

                          <img  alt="<?php the_sub_field('title'); ?>" src="<?php echo $image[0]; ?>" />       

                          <?php endif; ?>
                        
                        <?php the_sub_field('content'); ?>

                    </div>
                    <!-- // col  -->
                </div>
                <!-- // row  -->
            </div>
        </section>
        <!-- // service block  -->

      <?php endwhile; ?>
    <?php endif; ?>



<?php get_footer(); ?>