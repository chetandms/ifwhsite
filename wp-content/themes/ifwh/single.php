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
    $values = get_field( 'image_blog_inner' , 'options' );

    if ( $values ) { ?>

          <?php
            $imageID = get_field('image_blog_inner', 'options');
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
                <span class="title h1"><?php the_field('title_blog_header', 'options'); ?></span>
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

                  <h1><?php the_title(''); ?></h1>
                  <div id="meta-info">
                    <div class="row">

                      <div class="col-md-8 col-sm-12">
                        <div id="category-links">
                            <?php
                             global $post;
                             $categories = get_the_category($post->ID);
                             $cat_link = get_category_link($categories[0]->cat_ID);
                             echo '<a href="'.$cat_link.'">'.$categories[0]->cat_name.'</a>' 
                             ?>

                        </div>
                      </div>
                      <!-- // categoryu category-links -->

                      <div class="col-md-4 col-sm-12">
                        <div id="date-of-post">
                          <small><i class="fa fa-clock-o" aria-hidden="true"></i> Posted <strong><?php echo get_the_date( 'm/d/Y' ); ?></strong></small>
                        </div>
                      </div>
                      <!-- // date of post  -->

                    </div>
                  </div>
                  <!-- // meta info  -->
                
                  <?php while ( have_posts() ) : the_post(); ?>
                  <?php get_template_part( 'template-parts/content', 'page' ); ?>
                  <?php endwhile; // end of the loop. ?> 

            </div>
            <!-- // single  -->
          </div>
        </div>
        <!-- // blog left  -->

        <div class="col-md-4 col-sm-4">
          <aside id="blog-sidebar">

        <?php get_sidebar('blog'); ?>

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