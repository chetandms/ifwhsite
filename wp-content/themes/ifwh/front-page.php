<?php get_header(); ?>

 <header id="mas-header">
        <div class="top-slider">

          <?php if( have_rows('slider_header') ): ?>
            <?php while( have_rows('slider_header') ): the_row(); ?>

            <?php
              $imageID = get_sub_field('image');
              $image = wp_get_attachment_image_src( $imageID, 'slider-image' );
              $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true);
            ?>               

                <div class="item">
                    <div class="slider-item" style="background:url(<?php echo $image[0]; ?>) no-repeat center top;background-size:cover">
                        <div class="container">
                            <div class="slider-caption">
                            </div>
                            <!-- // caption  -->
                        </div>
                        <!-- // container  -->
                    </div>
                    <!-- // slider item  -->
                </div>
                <!-- // item  -->    

            <?php endwhile; ?>
          <?php endif; ?>
                         
        </div>
        <!-- // slider  -->

        <div id="form-wrapper" class="hidden-xs">
            <div class="container">
                <div class="form-box">
                    <header>
                        <span class="title"><?php the_field('title_home'); ?></span>
                    </header>
                    <div id="form-shadow"></div>
                    <div class="form-content">

                        <?php the_field('form_shortcode'); ?>

                    </div>
                    <!-- // form content  -->
                </div>
                <!-- // form box  -->
            </div>
            <!-- // container  -->
        </div>
        <!-- // form wrapper  -->

    </header>
    <!-- // mas hader  -->

    <section id="get-started-block">
        <div class="container">
            <header>
                <span class="title"><?php the_field('title_started_home'); ?></span>
            </header>

            <div class="row">

                <?php if( have_rows('get_started_content') ): ?>
                  <?php while( have_rows('get_started_content') ): the_row(); ?>

                      <?php
                        $imageID = get_sub_field('image');
                        $image = wp_get_attachment_image_src( $imageID, 'started-image' );
                        $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true);
                      ?>            

                        <div class="col-md-3 col-sm-6">
                            <div class="started-box">
                                <a href="<?php the_sub_field('link'); ?>">

                                    <img class="img-responsive" alt="<?php the_sub_field('title'); ?>" src="<?php echo $image[0]; ?>" />     

                                    <div class="box-caption">
                                        <span class="title"><?php the_sub_field('title'); ?></span>
                                        <p><?php the_sub_field('content'); ?></p>

                                            <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                                                 <span class="read-btn">More <i class="fa fa-angle-right" aria-hidden="true"></i></a>

                                            <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                                                 <span class="read-btn">Mas <i class="fa fa-angle-right" aria-hidden="true"></i></a>
    
                                            <?php endif;?>  

                                    </div>
                                    <!-- // box caption  -->
                                </a>
                            </div>
                        </div>
                        <!-- // started box  -->

                  <?php endwhile; ?>
                <?php endif; ?>

            </div>
            <!-- // row  -->

        </div>
        <!-- // container  -->
    </section>
    <!-- // get started  -->

    <section id="paralax-1" class="intro-block">
        <div class="bcg" 
        data-top-bottom="background-position: 50% -100px;" 
        data-bottom-top="background-position: 50% 100px;" 
        data-anchor-target="#paralax-1">   

            <div class="container">
                
                <header>
                    <h1><?php the_field('title_home_about'); ?></h1>
                </header>

                <img src="<?php the_field('featured_image_home_about'); ?>" alt="<?php the_field('title_home_about'); ?>" class="img-responsive image-bottom">

                <div class="intro-content">
                    <?php the_field('content_home_about'); ?>

                     <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                    <a href="<?php the_field('link_home_about'); ?>" class="read-btn">Read more <i class="fa fa-angle-right" aria-hidden="true"></i></a>

                    <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                    <a href="<?php the_field('link_home_about'); ?>" class="read-btn">Mas <i class="fa fa-angle-right" aria-hidden="true"></i></a>

                    <?php endif;?>  
                    
                </div>
                <!-- // content  -->

            </div>
            <!-- // container  -->

        </div>
        <!-- // bcg   -->
    </section>
    <!-- // intro  -->

    <section id="white-block">
        <div class="container">
            <article class="half-content">
                <h2><?php the_field('title_healthcare_home'); ?></h2>
                <?php the_field('content_heathcare_home'); ?>

                
                 <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                    <a href="<?php the_field('link_healthcare_home'); ?>" class="read-btn">Read more <i class="fa fa-angle-right" aria-hidden="true"></i></a>

                <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                    <a href="<?php the_field('link_healthcare_home'); ?>" class="read-btn">Mas <i class="fa fa-angle-right" aria-hidden="true"></i></a>

                <?php endif;?>  


            </article>
            <!-- // content  -->
            <img src="<?php the_field('featured_image'); ?>" alt="<?php the_field('title_healthcare_home'); ?>" class="img-responsive image-bottom">
        </div>
        <!-- // container  -->
    </section>
    <!-- // white block  womens healthcare  -->

    <section id="pink-block">
        <div class="image-holder">

              <?php
                $imageID = get_field('image_physicians_image');
                $image = wp_get_attachment_image_src( $imageID, 'half-image' );
                $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true);
              ?> 

              <img class="img-responsive" alt="<?php the_field('title_physician_home'); ?>" src="<?php echo $image[0]; ?>" />               

        </div>
        <!-- // image holder  -->
        <div class="half-content">
            <div class="main-content">
                <h3><?php the_field('title_physician_home'); ?></h3>
                <?php the_field('content_physician_home'); ?>
                <a href="<?php the_field('button_link_home_physician'); ?> " class="read-btn"><?php the_field('button_label_home_physician'); ?> <i class="fa fa-angle-right" aria-hidden="true"></i></a>
            </div>
            <!-- // main content  -->
        </div>
        <!-- // half content  -->
    </section>
    <!-- // pink bloc k -->

    <section id="green-block">
        <div class="image-holder">

              <?php
                $imageID = get_field('image_locations_image');
                $image = wp_get_attachment_image_src( $imageID, 'half-image' );
                $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true);
              ?> 

              <img class="img-responsive" alt="<?php the_field('title_home_locations'); ?>" src="<?php echo $image[0]; ?>" />   

        </div>
        <!-- // image holder  -->    
        <article class="half-content">
            <div class="main-content">
                <h3><?php the_field('title_home_locations'); ?></h3>
                <?php the_field('content_home_locations'); ?>
                <a href="<?php the_field('button_link_home_locations'); ?>" class="read-btn"><?php the_field('button_label_locations_home'); ?> <i class="fa fa-angle-right" aria-hidden="true"></i></a>                    
            </div>
            <!-- // main content  -->
        </article>
        <!-- //  half cotent  -->
    </section>
    <!-- // green block  -->

    <section id="video-block">
        <div class="container">
            <div class="row">
                
                <div class="col-md-6 col-md-offset-0 col-sm-8 col-sm-offset-2">
                    <div id="video-content">
                        <h4><?php the_field('title_home_video'); ?></h4>
                        <hp><?php the_field('content_home_video'); ?></h4>
                        <img src="<?php the_field('logo_home_video'); ?>" alt="<?php the_field('title_home_video'); ?>">
                    </div>    
                </div>
                <!-- // content  -->

                <div class="col-md-6 col-md-offset-0 col-sm-8 col-sm-offset-2">
                    <div id="video-box">

                          <?php
                            $imageID = get_field('video_image');
                            $image = wp_get_attachment_image_src( $imageID, 'video-image' );
                            $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true);
                          ?> 

                          <img class="img-responsive" alt="<?php echo $alt_text; ?>" src="<?php echo $image[0]; ?>" />       

                        <a href="<?php the_field('video_link'); ?>?rel=0&amp;autoplay=1"><span></span></a>
                    </div>
                </div>
                <!-- // video box  -->

            </div>
            <!-- // row -->
        </div>
        <!-- // container  -->
    </section>
    <!-- // video block  -->

    <section id="paralax-2" class="reviews-block">
        <div class="bcg" 
        data-top-bottom="background-position: 50% -100px;" 
        data-bottom-top="background-position: 50% 100px;" 
        data-anchor-target="#paralax-2">   

        <div class="paralax-overlay"></div>

            <div class="container">
                <header>
                    <span class="title"><?php the_field('title_reviews_home'); ?></span>
                </header>


            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <iframe src="https://1qreputation.com/ifwh/iframe/" width="100%" height="500" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0"></iframe>   
                </div>
            </div>
                

            </div>
            <!-- // container -->

        </div>
        <!-- // bcg  -->
    </section>
    <!-- // reviews  -->

    <section id="caring-block">
        <div class="container">
            <header>
                <h5><?php the_field('title_caring_home'); ?></h5>
            </header>

            <div class="row">
                
                <div class="col-md-4 col-sm-6">
                    <div class="caring-box news-box">
                        <header>
                            <span class="title"><?php the_field('news_title_home'); ?></span>
                        </header>

                        <div class="caring-slider">


                        <?php
                            $args = array(
                                'posts_per_page'         => '3',
                                'post_type'              => array( 'ifwh_news' ),
                            );

                            // The Query
                            $query = new WP_Query( $args );

                            // The Loop
                            if ( $query->have_posts() ) {
                                while ( $query->have_posts() ) {
                                    $query->the_post();

                            ?>
                                
                                    <div class="slider-item">
                                        <article>
                                            <div class="image-holder">


                                                <?php 
                                                $values = get_field( 'featured_image_of_blog' );

                                                if ( $values ) { ?>

                                                      <?php
                                                        $imageID = get_field('featured_image_of_blog');
                                                        $image = wp_get_attachment_image_src( $imageID, 'blogsmall-image' );
                                                        $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true);
                                                      ?> 

                                                      <img class="img-responsive featured-blog-image" alt="<?php the_title(''); ?>" src="<?php echo $image[0]; ?>" />     

                                                <?php 
                                                } else { ?>

                                                        <img class="img-responsive featured-blog-image" alt="<?php the_title(''); ?>" src="<?php bloginfo('template_directory'); ?>/img/misc/blog-placeholder.jpg" />   

                                                    <?php 
                                                }
                                                ?>

                                                <div class="image-opacity"><a href="<?php echo get_permalink(); ?>"></a></div>
                                            </div>
                                            <!-- // image holder  -->
                                            <span class="title"><a href="<?php echo get_permalink(); ?>"><?php the_title(''); ?></a></span>
                                            <a href="<?php echo get_permalink(); ?>" class="read-btn">Read more <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                        </article>
                                    </div>
                                    <!-- // sider item  -->

                            <?php

                                }
                            } else {
                                // no posts found
                            }

                            // Restore original Post Data
                            wp_reset_postdata();

                            ?>                        
                                                                                                             

                        </div>
                        <!-- // slide  -->

                    </div>
                </div>
                <!-- // caring box  -->

                <div class="col-md-4 col-sm-6">
                    <div class="caring-box blog-box">
                        <header>
                            <span class="title"><?php the_field('blog_title_home'); ?></span>
                        </header>

                        <div class="caring-slider">

                        <?php
                            $args = array(
                                'posts_per_page'         => '3',
                            );

                            // The Query
                            $query = new WP_Query( $args );

                            // The Loop
                            if ( $query->have_posts() ) {
                                while ( $query->have_posts() ) {
                                    $query->the_post();

                            ?>
                                
                                    <div class="slider-item">
                                        <article>
                                            <div class="image-holder">


                                                <?php 
                                                $values = get_field( 'featured_image_of_blog' );

                                                if ( $values ) { ?>

                                                      <?php
                                                        $imageID = get_field('featured_image_of_blog');
                                                        $image = wp_get_attachment_image_src( $imageID, 'blogsmall-image' );
                                                        $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true);
                                                      ?> 

                                                      <img class="img-responsive featured-blog-image" alt="<?php the_title(''); ?>" src="<?php echo $image[0]; ?>" />     

                                                <?php 
                                                } else { ?>

                                                        <img class="img-responsive featured-blog-image" alt="<?php the_title(''); ?>" src="<?php bloginfo('template_directory'); ?>/img/misc/blog-placeholder.jpg" />   

                                                    <?php 
                                                }
                                                ?>

                                                <div class="image-opacity"><a href="<?php echo get_permalink(); ?>"></a></div>
                                            </div>
                                            <!-- // image holder  -->
                                            <span class="title"><a href="<?php echo get_permalink(); ?>"><?php the_title(''); ?></a></span>
                                            <a href="<?php echo get_permalink(); ?>" class="read-btn">Read more <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                        </article>
                                    </div>
                                    <!-- // sider item  -->

                            <?php

                                }
                            } else {
                                // no posts found
                            }

                            // Restore original Post Data
                            wp_reset_postdata();

                            ?>                                                                        

                        </div>
                        <!-- // slide  -->

                    </div>
                </div>
                <!-- // caring box  -->  

                <div class="col-md-4 col-sm-4 hidden-sm">
                    <div class="caring-box social-box">
                        <header>
                            <span class="title"><?php the_field('social_title_home'); ?></span>
                        </header>
                        <div class="social-feed">
                             <h5><?php the_field('title_ann'); ?></h5>
                             <p><?php the_field('description_ann'); ?></p>
                        </div>
                        <!-- // feed  -->
                        <a href="<?php the_field('button_url_social_home'); ?>" class="read-btn" target="_blank"><?php the_field('button_label_social_home'); ?>  <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                    </div>
                </div>   
                <!-- // social box   -->

            </div>
            <!-- // row  -->

        </div>
    </section>
    <!-- // caring  -->

    <?php include(TEMPLATEPATH . '/template-parts/inc-locations.php'); ?>    

<?php get_footer(); ?>