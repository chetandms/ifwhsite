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
      $values = get_field( 'image_locations_inner' );

      if ( $values ) { ?>

          <?php
            $imageID = get_field('image_locations_inner');
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


                 <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                        <?php 
                        $values = get_field( 'title_of_location_page', 'options' );

                        if ( $values ) { ?>

                            <p style="font-size: 48px;color: #fff;text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);"><?php the_field('title_of_location_page', 'options'); ?></p>

                        <?php 
                        } else { ?>

                            <p style="font-size: 48px;color: #fff;text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);">Locations</p>

                            <?php 
                        }
                        ?>

                  <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>


                        <?php 
                        $values = get_field( 'title_of_location_page', 'options' );

                        if ( $values ) { ?>

                            <p style="font-size: 48px;color: #fff;text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);"><?php the_field('title_of_location_page', 'options'); ?></p>

                        <?php 
                        } else { ?>

                            <p style="font-size: 48px;color: #fff;text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);">Oficinas</p>

                            <?php 
                        }
                        ?>


                  <?php endif;?>             



            </div>
            <!-- // caption  -->
        </div>
    </header>
    <!-- // inner header  -->  

   <section id="location-single-wrapper">
        <div class="container">
            <div class="row">
                
                <div class="col-md-4 col-sm-5">
                    <div class="location-box" itemscope itemtype="http://schema.org/MedicalOrganization">
                        <header>
                            <h1 style="font-size: 18px;color: #fff;text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);font-family: 'Playfair Display', serif;padding-top: 20px;" class="title" itemprop="name"><?php the_title(''); ?></h1>
                        </header>
                        <div class="location-content"  itemscope itemtype="http://schema.org/PostalAddress">

                              <?php
                                $imageID = get_field('image_of_office');
                                $image = wp_get_attachment_image_src( $imageID, 'location-image' );
                                $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true);
                              ?> 

                              <img class="img-responsive" alt="<?php the_title(''); ?>" src="<?php echo $image[0]; ?>" />  

                            <?php
                            $address = get_field('address');
                            $suite   = get_field('suite');
                            $city    = get_field('city');
                            $state   = get_field('state');
                            $zip     = get_field('zip');

                            ?>

                            <address>
                                <?php echo $address ?>, Suite <?php echo $suite ?> </span><br>
                                <span itemprop="addressLocality"><?php echo $city ?></span>, 
                                 <span itemprop="addressRegion"><?php echo $state ?></span>
                                <span itemprop="postalCode"> <?php echo $zip ?> </span><br>
                            </address>

                            <?php if( get_field('phone') ): ?>
                                <p class="tel-ico" itemprop="telephone"><a href="tel:<?php the_field('phone') ?>"><?php the_field('phone') ?> </a></p>
                            <?php endif; ?>

                            <?php if( get_field('fax') ): ?>
                                <p class="fax-ico" itemprop="faxNumber"><a href="tel:<?php the_field('fax') ?>"><?php the_field('fax') ?></a></p>
                            <?php endif; ?>

                             <?php if(ICL_LANGUAGE_CODE=='en'): ?>
    
                                <a href="<?php bloginfo('url'); ?>/new-patients/schedule-an-appointment/" class="book-btn">Book an Appointment</a>

                            <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                                <a href="<?php bloginfo('url'); ?>/nuevos-pacientes/agendar-una-cita/" class="book-btn">Agendar una Cita</a>

                            <?php endif;?>  

                        </div>                        
                    </div>
                </div>
                <!-- // locaiton box  -->

                <div class="col-md-8 col-sm-7">
                    <div id="map-wrap">
                        <?php the_field('map_code'); ?>
                    </div>
                </div>
                <!-- // map  -->

            </div>
            <!-- // row  -->

            <div class="row">
                
                <div class="col-md-4 col-sm-4">
                    <div class="location-info-box">

                        <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                            <h5><img src="<?php bloginfo('template_directory'); ?>/img/ico/time.png" alt="Office Hours">Office Hours</h5>

                        <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                            <h5><img src="<?php bloginfo('template_directory'); ?>/img/ico/time.png" alt="Horario de oficina">Horario de oficina</h5>

                        <?php endif;?>  
                        
                        <div class="info-content">

                            <?php if( have_rows('hours_working_loc') ): ?>
                              <?php while( have_rows('hours_working_loc') ): the_row(); ?>

                                    <span class="day"><?php the_sub_field('day_of_week'); ?></span>
                                    <span class="time"><?php the_sub_field('hours_of_operation'); ?></span>

                              <?php endwhile; ?>
                            <?php endif; ?>

                            <?php if( get_field('hours_notice') ): ?>
                                <div class="hours-notice">
                                    <p><?php the_field('hours_notice'); ?></p>
                                </div>
                                <!-- // hours notice  -->
                            <?php endif; ?>

                        </div>
                        <!-- // content  -->
                    </div>
                </div>
                <!-- // info box  -->



                <div class="col-md-4 col-sm-4">
                    <div class="location-info-box">

                        <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                        <h5><img src="<?php bloginfo('template_directory'); ?>/img/ico/ifwh.png" alt="Caregivers at this Facility">Caregivers at this Facility</h5>

                        <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                        <h5><img src="<?php bloginfo('template_directory'); ?>/img/ico/ifwh.png" alt="Proveedores  en estas instalaciones">Nuestros proveedores</h5>

                        <?php endif;?>  


                        <div class="info-content">

                            <ul>
                                
                                <?php if( have_rows('doctor_at_location') ): ?>
                                  <?php while( have_rows('doctor_at_location') ): the_row(); ?>

                                    <?php $post_object = get_sub_field('doctor__caregiver_name'); ?>

                                        <li><a href="<?php echo get_permalink( $post_object->ID ) ?>"><?php echo $post_object->post_title; ?></a></li>

                                  <?php endwhile; ?>
                                <?php endif; ?>

                            </ul>

                        </div>
                        <!-- // content  -->
                    </div>
                </div>
                <!-- // info box  -->

                <div class="col-md-4 col-sm-4">
                    <div class="location-info-box">

                        <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                        <h5><img src="<?php bloginfo('template_directory'); ?>/img/ico/bus.png" alt="Nearby VIA Bus Routes">Nearby VIA Bus Routes</h5>

                        <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                        <h5><img src="<?php bloginfo('template_directory'); ?>/img/ico/bus.png" alt="Rutas de camiones VIA mas cercanas">Rutas de camiones VIA </h5>

                        <?php endif;?>  

                        
                        <div class="bus-content">

                            <ul>
                                <?php if( have_rows('routes') ): ?>
                                  <?php while( have_rows('routes') ): the_row(); ?>

                                        <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                                        <li><small><?php the_sub_field('number'); ?></small><span><a href="<?php the_sub_field('google_maps_link'); ?>" target="_blank">Map Direction</a></span></li>

                                        <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                                        <li><small><?php the_sub_field('number'); ?></small><span><a href="<?php the_sub_field('google_maps_link'); ?>" target="_blank">Direcciones</a></span></li>

                                        <?php endif;?>  

                                  <?php endwhile; ?>
                                <?php endif; ?>
                            </ul>

                        </div>
                        <!-- // content  -->
                    </div>
                </div>
                <!-- // info box  -->                                

            </div>
            <!-- // row  -->

        </div>
    </section>
    <!-- // single  -->
  


<?php get_footer(); ?>