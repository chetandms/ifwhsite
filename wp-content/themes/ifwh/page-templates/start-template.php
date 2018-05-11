<?php
/**
 * Template Name: New Patients Template
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

    <section id="patients-list-block">
    	<div class="container">
    		<div class="row">

				<?php if( have_rows('list_of_pages') ): ?>
				  <?php while( have_rows('list_of_pages') ): the_row(); ?>
    			
						<div class="col-md-4 col-sm-6">
							<a href="<?php the_sub_field('link'); ?>">
								<div class="patient-box">
										<small><?php the_sub_field('icon'); ?></small>
										<span class="title"><?php the_sub_field('title'); ?></span>

                      <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                      <span class="read-btn">Read More <i class="fa fa-angle-right" aria-hidden="true"></i></span>

                      <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                      <span class="read-btn">Leer mas <i class="fa fa-angle-right" aria-hidden="true"></i></span>

                      <?php endif;?>  

								</div>
								<!-- // patient box  -->
							</a>
						</div>
						<!-- // patient box md  -->

				  <?php endwhile; ?>
				<?php endif; ?>

    		</div>
    		<!-- // row  -->
    	</div>
    	<!-- // container  -->
    </section>      	
    <!-- // patients lit block  -->

<?php get_footer(); ?>