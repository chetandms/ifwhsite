<?php
/**
 * Template Name: News Template
**/

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
                <h1><?php the_field('title_news_header', 'options'); ?></h1>
            </div>
            <!-- // caption  -->
        </div>
    </header>
    <!-- // inner header  -->  


   <section id="news-wrapper">
        <div class="container">
            <div class="row">

       <?php
          $current_page = (get_query_var('paged')) ? get_query_var('paged') : 1; // get current page number
          $args = array(
            'posts_per_page' => 6, // the value from Settings > Reading by default
            'paged'          => $current_page, // current page
             'post_type' => 'ifwh_news'
          );
          query_posts( $args );
           
          $wp_query->is_archive = true;
          $wp_query->is_home = false;
           
          while(have_posts()): the_post();
            ?>


                    <div class="col-md-6 col-sm-12">
                        <div class="news-box">
                            
                            <time class="pull-left"><?php echo get_the_date( 'F j, Y' ); ?></time>

                            <div class="clearfix"></div>

                            <h3><a href="<?php echo get_permalink(); ?>"><?php the_title(''); ?></a></h3>
                            <p><?php my_excerpt('regular');?></p>
                            <a href="<?php echo get_permalink(); ?>" class="read-btn">Read more <i class="fa fa-angle-right" aria-hidden="true"></i></a>

                        </div>
                    </div>
                    <!-- // news box  -->


            <?php endwhile; // end of the loop. ?> 


            <div class="col-md-12">
              <div id="pagination-block">
                  <?php if( function_exists('wp_pagenavi') ) wp_pagenavi(); // WP-PageNavi function ?>
              </div>
              <!-- // pagination -->                   
            </div>
            <!-- // col md 12  -->
     
            </div>
            <!-- // row  -->
        </div>
    </section>
    <!-- // regular  -->




<?php get_footer(); ?>