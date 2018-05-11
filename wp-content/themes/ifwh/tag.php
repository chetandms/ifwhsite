<?php
/**
 * The template for displaying Tag pages
 *
 * Used to display archive-type pages for posts in a tag.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
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
                <h1><?php the_field('title_blog_header', 'options'); ?></h1>
                <h2>Tag: <?php single_tag_title(); ?> </h2>
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


           <?php while ( have_posts() ) : the_post(); ?>

                <article class="blog-box">
                  <div class="blog-content">
                    <h3><a href="<?php echo get_permalink(); ?>"><?php the_title(''); ?></a></h3>

                      <?php
                        $imageID = get_field('featured_image_of_blog');
                        $image = wp_get_attachment_image_src( $imageID, 'blog-image' );
                        $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true);
                      ?> 

                  <?php if( get_field('featured_image_of_blog') ): ?>
                      <img class="img-responsive featured-blog-image" alt="<?php echo $alt_text; ?>" src="<?php echo $image[0]; ?>" />     
                    <?php endif; ?> 


                            <p><?php my_excerpt('regular');?></p>

                          <a href="<?php echo get_permalink(); ?>" class="read-btn">Read more <i class="fa fa-angle-right" aria-hidden="true"></i></a>                
                        </div>
                        <!-- // content  -->
                        <footer>
                          <div class="row">
                            <div class="col-sm-6" id="blog-author">
                              <small>by <?php the_author(); ?> </small>
                            </div>
                            <div class="col-sm-6" id="blog-share">
                              <small><?php echo get_the_date( 'F j, Y' ); ?></small>
                            </div>
                          </div>
                          <!-- // roow  -->
                        </footer>
                        <!-- // footer  -->
                      </article>
                      <!-- // blog box  -->                            
              
            <?php endwhile; // end of the loop. ?> 


            <div id="pagination-block">
                <?php if( function_exists('wp_pagenavi') ) wp_pagenavi(); // WP-PageNavi function ?>
            </div>
            <!-- // pagination -->

              <?php wp_reset_query(); ?>
              <?php wp_reset_postdata(); ?>            
            
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