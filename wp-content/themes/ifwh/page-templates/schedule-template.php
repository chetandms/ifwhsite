<?php
/**
 * Template Name: Schedule Template
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

    <div id="schedule-wrapper">
      <div class="container">
        <div class="row">

          <div class="col-md-6">
            <div id="schedule-content">
              <?php while ( have_posts() ) : the_post(); ?>
              <?php get_template_part( 'template-parts/content', 'page' ); ?>
              <?php endwhile; // end of the loop. ?> 
            </div>
          </div>
          <!-- // scheduyle content  -->

          <div class="col-md-6">
            <div id="schedule-form">
              
              <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                <?php echo do_shortcode('[contact-form-7 id="1152" title="Schedule Your Appointment"]'); ?>

              <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                <?php echo do_shortcode('[contact-form-7 id="1956" title="Schedule Your Appointment ES"]'); ?>

              <?php endif;?>  


            </div>
          </div>
          <!-- // form  -->

        </div>
      </div>
    </div>
    <!-- // contact -->

   <?php include(TEMPLATEPATH . '/template-parts/inc-locations.php'); ?>  

<?php get_footer(); ?>