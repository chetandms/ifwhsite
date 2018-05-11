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
    $values = get_field( 'image_careers_inner' , 'options' );

    if ( $values ) { ?>

          <?php
            $imageID = get_field('image_careers_inner', 'options');
            $image = wp_get_attachment_image_src( $imageID, 'innerheader-image' );
            $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true);
          ?> 


       <header id="inner-header" style="background: url(<?php echo $image[0]; ?>) no-repeat center top; background-size:cover">

    <?php 
    } else { ?>

      <header id="inner-header" style="background: url(<?php bloginfo('template_directory'); ?>/img/headers/sample.jpg) no-repeat center top; background-size:cover">

        <?php 
    }
    ?>

        <div class="header-overlay"></div>
        <div class="container">
            <div class="header-caption">
                <h1><?php the_field('title_careers_inner', 'options'); ?></h1>
            </div>
            <!-- // caption  -->
        </div>
    </header>
    <!-- // inner header  -->  

    <div id="blog-wrapper">
        <div class="container">

     <div class="row">
        
        <div class="col-md-8 col-sm-8">
          <div id="blog-left">

            <div id="blog-single-block">

                  <h2><?php the_title(''); ?></h2>

                  <?php while ( have_posts() ) : the_post(); ?>
                  <?php get_template_part( 'template-parts/content', 'page' ); ?>
                  <?php endwhile; // end of the loop. ?> 

            </div>
            <!-- // single  -->

            <div id="apply-form-block">
              <header>
                <span class="title">Apply for a job</span>
              </header>
              <div id="apply-content">
                
                <?php echo do_shortcode('[contact-form-7 id="1155" title="Apply for a Job"]'); ?>

              </div>
              <!-- // content  -->
            </div>
            <!-- // apply form block  -->

          </div>
        </div>
        <!-- // blog left  -->

        <div class="col-md-4 col-sm-4">
          <aside id="blog-sidebar">

            <?php get_sidebar('careers'); ?>

          </aside>
        </div>
        <!-- // sidebar  -->

      </div>
      <!-- // row  -->     

        </div>
        <!-- // container  -->
    </div>
    <!-- // page wraooer  -->  
	
<?php get_footer(); ?>