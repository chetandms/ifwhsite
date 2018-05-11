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
      $values = get_field( 'image_doctors_inner' );

      if ( $values ) { ?>

          <?php
            $imageID = get_field('image_doctors_inner');
            $image = wp_get_attachment_image_src( $imageID, 'innerheader-image' );
            $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true);
          ?> 

         <header id="inner-header" style="background: url(<?php echo $image[0]; ?><meta http-equiv="Content-Type" content="text/html; charset=gb18030">) no-repeat center top; background-size:cover">

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
                $values = get_field( 'title_doctors_header', 'options' );

                if ( $values ) { ?>

                    <p style="font-size: 48px;color: #fff;text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);"><?php the_field('title_doctors_header', 'options'); ?></p>

                <?php 
                } else { ?>

                    <p style="font-size: 48px;color: #fff;text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);">Medicos</p>

                    <?php 
                }
                ?>

            </div>
            <!-- // caption  -->
        </div>
    </header>
    <!-- // inner header  -->  

    <section id="provider-single">
        <div class="container">
            <div class="row">
                
                <div class="col-md-4 col-sm-3">
                    <aside id="provider-sidebar">
                        <div class="provider-image">
                            <div class="row">
                                <div class="col-md-5 col-sm-12 col-xs-12">

                                    <?php 
                                    $values = get_field( 'profile_photo_doctor' );

                                    if ( $values ) { ?>

                                          <?php
                                            $imageID = get_field('profile_photo_doctor');
                                            $image = wp_get_attachment_image_src( $imageID, 'profile-image' );
                                            $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true);
                                          ?> 

                                          <img class="img-responsive" alt="<?php the_title(''); ?>" src="<?php echo $image[0]; ?>" />   

                                    <?php 
                                    } else { ?>

                                        <img class="img-responsive" alt="<?php the_title(''); ?>" src="<?php bloginfo('template_directory'); ?>/img/misc/placeholder.jpg" />   

                                        <?php 
                                    }
                                    ?>    

                                </div>
                                <div class="col-md-7 col-sm-12" itemscope itemtype="http://schema.org/MedicalSpecialty">

                                    <?php if( get_field('certified') ) : ?>


                                        <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                                        <span class="title">Board Certified:</span>

                                        <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                                        <span class="title">Certificación:</span>

                                        <?php endif;?>  


                                        <span class="value" itemprop="name"><?php the_field('certified'); ?></span>


                                    <?php endif; ?>

                                    <?php if( get_field('certified') ) : ?>


                                            <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                                             <span class="title">Languages:</span>

                                            <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                                             <span class="title">Idiomas:</span>

                                            <?php endif;?>  


                                        <div class="value"><?php the_field('languages'); ?></div>  
                                    <?php endif; ?>

                                </div>
                            </div>
                            <!-- // row  -->
                        </div>
                        <!-- // provider image  -->

                        <div id="schedule-box" class="hidden-xs hidden-sm">
                            <header>

                                <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                                <span class="title">Schedule Your Appointment</span>

                                <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                                <span class="title">Agendar una Cita</span>

                                <?php endif;?>  
                                

                            </header>
                            <div class="shadow-box">
                                
                            </div>
                            <!-- // shadow box  -->
                            <div class="form-content">

                                <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                                <?php echo do_shortcode('[contact-form-7 id="1153" title="Sidebar Schedule Form"]'); ?>

                                <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                                <?php echo do_shortcode('[contact-form-7 id="1957" title="Sidebar Schedule Form ES"]'); ?>

                                <?php endif;?>  

                            </div>
                            <!-- // content  -->
                        </div>
                        <!-- // schedule box  -->

                    </aside>
                </div>
                <!-- // sidebar  -->

                <div class="col-md-8 col-sm-9">
                    <div id="provider-content">
                        <article id="main-content">
                            <h1 style="color: #f05274;font-size: 32px;margin-bottom: 30px;"><?php the_title(''); ?></h1>

                            <?php while ( have_posts() ) : the_post(); ?>
                            <?php get_template_part( 'template-parts/content', 'page' ); ?>
                            <?php endwhile; // end of the loop. ?> 

                        </article>
                        <!-- // content  -->                

                    </div>
                    <!-- // provider content  -->


                        <div id="provider-office">
                            <header>

                                <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                                <span class="title">Office Hours</span>

                                <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                                <span class="title">Horas de oficina</span>

                                <?php endif;?>                              

                            </header>







        <?php 

        // check for rows (parent repeater)
        if( have_rows('office_list_new') ): ?>

          <?php 

          // loop through rows (parent repeater)
          while( have_rows('office_list_new') ): the_row(); ?>

            
            <?php $post_object = get_sub_field('office'); 

            ?>

            <div class="office-box">
                <div class="row">

                    <div class="col-sm-6">
                        <div class="office-content">

                              <?php
                                $imageID = get_field('image_of_office', $post_object->ID);
                                $image = wp_get_attachment_image_src( $imageID, 'location-image' );
                                $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true);
                              ?> 

                              <img class="img-responsive" alt="<?php echo $post_object->post_title; ?>" src="<?php echo $image[0]; ?>" />                         


                            <span class="location-title"><?php echo $post_object->post_title; ?> </span>

                            <div itemscope itemtype="http://schema.org/MedicalClinic">                              
                                <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">

                                <address>
                                    <span itemprop="streetAddress"> <?php the_field('address', $post_object->ID) ?>, Suite <?php the_field('suite', $post_object->ID) ?> </span> <br>
                                    <span itemprop="addressLocality"><?php the_field('city', $post_object->ID) ?></span>, 
                                    <span itemprop="addressRegion"><?php the_field('state', $post_object->ID) ?> </span>
                                    <span itemprop="postalCode"><?php the_field('zip', $post_object->ID) ?></span><br>                                
                                 </address>

                                <p class="tel-ico" itemprop="telephone"><a href="tel:<?php the_field('phone', $post_object->ID) ?> "> <?php the_field('phone', $post_object->ID) ?> </a></p>

                                <p class="fax-ico" itemprop="faxNumber"><a href="tel:<?php the_field('fax', $post_object->ID) ?>"><?php the_field('fax', $post_object->ID) ?> </a></p>

                                </div>
                            </div>


                            <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                             <a href="<?php echo get_permalink( $post_object->ID ) ?>" class="read-more-btn">See details <i class="fa fa-angle-right" aria-hidden="true"></i></a> 

                            <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                             <a href="<?php echo get_permalink( $post_object->ID ) ?>" class="read-more-btn">Ver ubicación <i class="fa fa-angle-right" aria-hidden="true"></i></a> 

                            <?php endif;?>  

                        </div>
                    </div>
                    <!-- // content  -->                

              <?php 

              // check for rows (sub repeater)
              if( have_rows('office_working_hours') ): ?>

                <div class="col-sm-6">
                    <div class="office-hours">

                <?php 

                // loop through rows (sub repeater)
                while( have_rows('office_working_hours') ): the_row();

                  // display each item as a list - with a class of completed ( if completed )
                  ?>

                    <span class="day"><?php the_sub_field('day_in_week'); ?></span>
                    <span class="timing"><?php the_sub_field('working_from'); ?> - <?php the_sub_field('working_to');?></span>
                     
                <?php endwhile; ?>


                 </div>
                </div>
                <!-- // ofice hours  -->

              <?php endif; //if( get_sub_field('items') ): ?>


                </div>
                <!-- // row  -->
            </div>
            <!-- // ofice box  -->

            <hr>


          <?php endwhile; // while( has_sub_field('to-do_lists') ): ?>

      

        <?php endif; // if( get_field('to-do_lists') ): ?>


                        </div>
                        <!-- // propvider office  -->   

                    <?php if( have_rows('services_list_doctors') ): ?>
                        <div id="services-block">
                            <header>

                                <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                                 <span class="title">Services</span>

                                <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                                 <span class="title">Servicios</span>

                                <?php endif;?>  

                               
                            </header>

                            <div id="services-acc">

                                
                                  <?php while( have_rows('services_list_doctors') ): the_row(); ?>

                                        <span class="span-title"><?php the_sub_field('service_name'); ?></span>
                                        <div class="acc-content">
                                            <?php the_sub_field('content'); ?>
                                        </div>
                                        <!-- // acc content  -->   

                                  <?php endwhile; ?>
                                <?php endif; ?>

                            </div>
                            <!-- // acc  -->

                        </div>
                        <!-- // services block  -->

                </div>
                <!-- // content  -->
                

            </div>
            <!-- // container  -->
        </div>
        <!-- // row  -->
    </section>
    <!-- // single  --> 

<?php get_footer(); ?>