<?php
/**
 * Template Name: Careers Template
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
                
                <div class="col-md-8 col-sm-8">
                    <div id="main-content">
                        
                        <?php while ( have_posts() ) : the_post(); ?>
                        <?php get_template_part( 'template-parts/content', 'page' ); ?>
                        <?php endwhile; // end of the loop. ?> 

                    </div>

                    <div id="open-positions-block">
                      <header>

                        <?php if(ICL_LANGUAGE_CODE=='en'): ?>
            
                          <h4>Open Positions</h4>

                        <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                          <h4>Trabajos</h4>

                        <?php endif;?>  

                      </header>
                      <div class="jobs-content-block">
                        
                            <?php
                            $loop = new WP_Query( array( 'post_type' => 'careers', 'posts_per_page' => 55) ); ?>  
                            <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>

                                <span class="span-title"><?php the_title(''); ?></span>
                                <div class="acc-content">
                                    <?php get_template_part( 'template-parts/content', 'page' ); ?>
                                    <footer>
                                        <a href="<?php echo get_permalink(); ?>" class="apply-btn">Apply Now <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                    </footer>
                                </div>
                                <!-- // acc content  -->   

                            <?php endwhile; ?>
                            <?php wp_reset_postdata(); ?>                              

                      </div>
                      <!-- // jobs content block  -->
                    </div>
                    <!-- // open positions  -->

                </div>
                <!-- // main content  -->

                <aside class="col-md-4 col-sm-4">
                    <div id="regular-sidebar">

                        <?php get_sidebar(); ?>
                    
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