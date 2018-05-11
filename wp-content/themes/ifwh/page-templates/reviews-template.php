<?php
/**
 * Template Name: Reviews Template
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

                <h1><?php the_title(''); ?></h1>
                

            </div>
            <!-- // caption  -->
        </div>
    </header>
    <!-- // inner header  -->  

   <section id="regular-wrapper">
        <div class="container">
            <div class="row">
                
                <div class="col-md-12">
                    <div id="main-content">
                        
                        <?php while ( have_posts() ) : the_post(); ?>
                        <?php get_template_part( 'template-parts/content', 'page' ); ?>
                        <?php endwhile; // end of the loop. ?> 

                    </div>

                </div>
                <!-- // main content  -->

            </div>
            <!-- // row  -->
        </div>
        <!-- // container  -->
    </section>
    <!-- // regular wrapper  -->     

<?php get_footer(); ?>