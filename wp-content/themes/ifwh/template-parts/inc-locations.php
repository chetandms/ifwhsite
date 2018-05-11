   <section id="location-block">

        <div class="container">

      <div class="slider slider-nav">

          <?php
          $loop = new WP_Query( array( 'post_type' => 'locations', 'posts_per_page' => 15) ); ?>  
          <?php while ( $loop->have_posts() ) : $loop->the_post(); 

                $address = get_field('address');
                $suite   = get_field('suite');
                $city    = get_field('city');
                $state   = get_field('state');
                $zip     = get_field('zip');          

          ?>

              <div class="location-box">
                  <div class="location-content">
                      <span class="location-title"><?php the_title(''); ?></span>

                            <address>
                                <?php echo $address ?>, Suite <?php echo $suite ?> </span><br>
                                <span itemprop="addressLocality"><?php echo $city ?></span>, 
                                 <span itemprop="addressRegion"><?php echo $state ?></span>
                                <span itemprop="postalCode"> <?php echo $zip ?> </span><br>
                            </address>

                    <?php if( get_field('phone') ): ?>
                      <p class="tel-ico"><a href="tel:<?php the_field('phone') ?> "><i class="fa fa-phone" aria-hidden="true"></i> <?php the_field('phone') ?>  </a></p>
                    <?php endif; ?>

                    <?php if( get_field('fax') ): ?>
                      <p class="fax-ico"><a href="tel:<?php the_field('fax') ?>"><i class="fa fa-fax" aria-hidden="true"></i> <?php the_field('fax') ?></a></p>
                    <?php endif; ?>

                  </div>
              </div>
              <!-- // location box  -->          

          <?php endwhile; ?>
          <?php wp_reset_postdata(); ?>      
                                                          
      </div>
    <!-- // product image slider  -->    

    </div>
    <!-- // container  -->
        
      <div class="slider slider-for">

        <?php
        $loop = new WP_Query( array( 'post_type' => 'locations', 'posts_per_page' => 15) ); ?>  
        <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>

             <div class="location-map">
                <?php the_field('map_code'); ?>
             </div>        

        <?php endwhile; ?>
        <?php wp_reset_postdata(); ?>      


      </div>

    </section>
    <!-- // location block  -->