<?php
/**
 * The template for displaying Archive pages
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * If you'd like to further customize these archive views, you may create a
 * new template file for each specific one. For example, Twenty Twelve already
 * has tag.php for Tag archives, category.php for Category archives, and
 * author.php for Author archives.
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
                <h1><?php the_field('title_seach_doctor', 'options'); ?></h1>
                <h2><?php the_field('subtitle_search_doc', 'options'); ?></h2>
            </div>
            <!-- // caption  -->
        </div>
    </header>
    <!-- // inner header  -->  

    <section id="phy-intro">
        <div class="container">
            <div class="row">
                
                <div class="col-lg-7 col-md-6">
                    <div id="intro-content">
                        <h2><?php the_field('title_intro_search_doctor', 'options'); ?></h2>
                        <?php the_field('content_intro_search_dr', 'options'); ?>
                    </div>
                </div>
                <!-- // intro content  -->

                <div class="col-lg-5 col-md-6">
                    <div id="intro-search">
                        <p><?php the_field('description_form_dr', 'options'); ?></p>


                        <?php echo do_shortcode('[searchandfilter id="2399"]'); ?>

                    </div>
                </div>
                <!-- // search  -->

            </div>
            <!-- // row  -->
        </div>
        <!-- // container  -->
    </section>
    <!-- // intro  -->



    <div id="phy-list">
        <div class="container">

            <header>
                <h3><?php the_field('title_care_dr', 'options'); ?></h3>
            </header>

          <?php if (!have_posts()): ?>

                <div class="row">
                    <div class="col-md-12" id="no-results-dr">
                      <header>

                            <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                                <h6>No posts found.</h6>

                            <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                                <h6>Su resultado no pudo ser encontrado</h6>

                            <?php endif;?>  

                          
                            <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                                 <p>Sorry, we found 0 posts for your search, Please try searching again.</p>

                            <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                                 <p>Lo sentimos, no encontramos resultados dentro de su búsqueda, favor de intentar más tarde</p>

                            <?php endif;?>  

                      </header>                
                    </div>
                </div>
                <!-- // no results  -->
  
          <?php endif; ?>            

            <div class="row">

                  <?php while ( have_posts() ) : the_post(); ?>

                    <div class="col-md-3 col-sm-4">
                        <div class="provider-box">
                            <a href="<?php echo get_permalink(); ?>">
                                <div class="image-holder">

                                    <?php 
                                    $values = get_field( 'profile_photo_doctor' );

                                    if ( $values ) { ?>

                                          <?php
                                            $imageID = get_field('profile_photo_doctor');
                                            $image = wp_get_attachment_image_src( $imageID, 'profile-image' );
                                            $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true);
                                          ?> 

                                          <img class="img-responsive" alt="<?php the_title(''); ?> " src="<?php echo $image[0]; ?>" />   

                                    <?php 
                                    } else { ?>

                                        <img class="img-responsive" alt="<?php the_title(''); ?>" src="<?php bloginfo('template_directory'); ?>/img/misc/placeholder.jpg" />   

                                        <?php 
                                    }
                                    ?>    

                                    <div class="image-overlay"></div>
                                </div>
                                <!-- // image  -->
                                <span class="doctor-title"><?php the_title(''); ?> </span>
                                <span class="position"><?php the_field('practice'); ?> </span>
                            </a>
                        </div>
                    </div>
                    <!-- // provider box  -->                

                <?php endwhile; ?>
                <?php wp_reset_postdata(); ?>                                                                                  

            </div>
            <!-- // row  -->
        </div>
        <!-- // container  -->
    </div>
    <!-- // phy list  -->


<?php get_footer(); ?>