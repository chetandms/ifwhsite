<?php
/**
 * Template Name: Our Medical Team Template
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

    <section id="phy-intro">
        <div class="container">
            <div class="row">
                
                <div class="col-lg-7 col-md-6">
                    <div id="intro-content">
                        <h2><?php the_field('title_find_phys'); ?></h2>
                        <?php the_field('content_find_phys'); ?>
                    </div>
                </div>
                <!-- // intro content  -->

                <div class="col-lg-5 col-md-6">
                    <div id="intro-search">
                        <p><?php the_field('form_description_find_phys'); ?></p>


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
                <h3><?php the_field('title_our_providers'); ?></h3>
                <h4>Founding Members</h4>
            </header>

            <div class="row">

                <?php
                $loop = new WP_Query( array( 'post_type' => 'doctors', 'posts_per_page' => 100) ); ?> 
                <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>

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