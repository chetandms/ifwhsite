<?php
/**
 * Template Name: Brochures Template
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

  <section id="brochure-wrapper">
        <div class="container">
            <div class="row">

              <?php if( have_rows('list_of_forms') ): ?>
                <?php while( have_rows('list_of_forms') ): the_row(); ?>

                    <div class="col-lg-3 col-md-4 col-sm-4">
                       <div class="brochure-box">
                            <a href="<?php the_sub_field('document'); ?>" target="_blank">
                                <div class="image-holder">

                                <?php 
                                $values = get_sub_field( 'thumbnail' );

                                if ( $values ) { ?>

                                    <?php
                                      $imageID = get_sub_field('thumbnail');
                                      $image = wp_get_attachment_image_src( $imageID, 'form-thumb' );
                                      $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true);
                                    ?> 

                                    <img class="img-responsive" alt="<?php the_sub_field('form_name'); ?>" src="<?php echo $image[0]; ?>" />   

                                <?php 
                                } else { ?>

                                   <img class="img-responsive" alt="<?php the_sub_field('form_name'); ?>" src="<?php bloginfo('template_directory'); ?>/img/misc/pdf.jpg" />   

                                    <?php 
                                }
                                ?>

                                    <div class="image-opacity"></div>
                                </div>
                                <!-- // image holder  -->
                                <div class="career-content">
                                    <h3><?php the_sub_field('form_name'); ?> </h3>

                                        <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                                        <span class="read-btn">Download <i class="fa fa-download" aria-hidden="true"></i></span>

                                        <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                                        <span class="read-btn">Descargar  <i class="fa fa-download" aria-hidden="true"></i></span>

                                        <?php endif;?>                                      


                                </div>
                                <!-- // content  -->
                            </a>
                       </div>
                   </div>     
                   <!-- // career box  -->

                <?php endwhile; ?>
              <?php endif; ?>                 

            </div>
            <!-- // row  -->
        </div>
    </section>
    <!-- // regular  -->          	

<?php get_footer(); ?>