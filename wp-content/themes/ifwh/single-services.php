<?php
/**
 * The Template for displaying all single posts
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?>

      <?php 
      $values = get_field( 'image_doctors_inner' );

      if ( $values ) { ?>

          <?php
            $imageID = get_field('image_doctors_inner');
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

                <h1><?php the_title(''); ?></h1>

                 <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                    <h2>Services</h2>

                  <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                    <h2>Servicios</h2>

                  <?php endif;?>  
                  
            </div>
            <!-- // caption  -->
        </div>
    </header>
    <!-- // inner header  -->  

   <section id="regular-wrapper">
        <div class="container">
            <div class="row">
                
                <div class="col-md-8 col-sm-8">
                    <div id="main-content">
                        
                        <?php while ( have_posts() ) : the_post(); ?>
                        <?php get_template_part( 'template-parts/content', 'page' ); ?>
                        <?php endwhile; // end of the loop. ?> 

                    </div>
                </div>
                <!-- // main content  -->

                <aside class="col-md-4 col-sm-4">
                    <div id="regular-sidebar">

                        <?php get_sidebar('services'); ?>
                    
                    </div>
                </aside>
                <!-- // sidebar  -->

            </div>
            <!-- // row  -->
        </div>
        <!-- // container  -->
    </section>
    <!-- // regular wrapper  -->  

<?php get_footer(); ?>