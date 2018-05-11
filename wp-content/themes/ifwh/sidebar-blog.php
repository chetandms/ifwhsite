        <nav id="blog-cats">
              <ul>
                <?php wp_list_categories( array(
                      'orderby'    => 'name',
                      'show_count' => false,
                      'title_li' => '',
                  ) ); ?> 
              </ul>    
            </nav>
            <!-- // cats  -->


            <div class="archive-box">
            	<select name="archive-dropdown" onchange="document.location.href=this.options[this.selectedIndex].value;">

					 <?php if(ICL_LANGUAGE_CODE=='en'): ?>

					<option value=""><?php echo esc_attr( __( 'Archive by month' ) ); ?></option> 

					<?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

					<option value=""><?php echo esc_attr( __( 'Archivo por mes' ) ); ?></option> 

					<?php endif;?>	

				  <?php wp_get_archives( array( 'type' => 'monthly', 'format' => 'option', 'show_post_count' => 1 ) ); ?>
				</select>
            </div>
            <!-- // archive box  -->    

            <div class="tag-box">
            	
				<?php if ( function_exists( 'wp_tag_cloud' ) ) : ?>

				<ul>

				<?php $args = array(
					'smallest'                  => 11, 
					'largest'                   => 11,
					'unit'                      => 'pt', 
					'number'                    => 45,  
					'format'                    => 'flat',
					'separator'                 => ",",
					'orderby'                   => 'name', 
					'order'                     => 'ASC',
					'exclude'                   => null, 
					'include'                   => null, 
					'topic_count_text_callback' => default_topic_count_text,
					'link'                      => 'view', 
					'taxonomy'                  => 'post_tag', 
					'echo'                      => true,
					'child_of'                  => null, // see Note!
				); ?>

				<li><?php wp_tag_cloud( $args ); ?></li>
				</ul>

				<?php endif; ?>

            </div>
            <!-- // archive box          -->

            <div id="latest-blog">
              <header>

				 <?php if(ICL_LANGUAGE_CODE=='en'): ?>

					<span class="title">Latest blog entries</span>

				<?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

					<span class="title">Noticias actuales </span>

				<?php endif;?>	

               
              </header>


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
					
	              <div class="blog-box">
		                <a href="<?php echo get_permalink(); ?>" class="image-link">

					      <?php
					        $imageID = get_field('featured_image_of_blog');
					        $image = wp_get_attachment_image_src( $imageID, 'blog-small-image' );
					        $alt_text = get_post_meta($imageID , '_wp_attachment_image_alt', true);
					      ?> 

						<?php if( get_field('featured_image_of_blog') ): ?>
					      <img class="img-responsive featured-blog-image" alt="<?php the_title(''); ?>" src="<?php echo $image[0]; ?>" />     
					    <?php endif; ?>  

		                </a>
		                <h6><a href="<?php echo get_permalink(); ?>"><?php the_title(''); ?></a></h6>
		                <time><i class="fa fa-clock-o" aria-hidden="true"></i> <?php echo get_the_date( 'm/d/Y' ); ?></time>
		                <div class="clearfix"></div>
		              </div>
		              <!-- // blog box  -->		


				<?php

					}
				} else {
					// no posts found
				}

				// Restore original Post Data
				wp_reset_postdata();

				?>

            </div>
            <!-- // latest blog  -->

            <div id="facebook-block" class="hidden-sm hidden-xs">
              <header>

				 <?php if(ICL_LANGUAGE_CODE=='en'): ?>

					<span class="title">IFWH on Facebook</span>

				<?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

					<span class="title">IFWH en Facebook </span>

				<?php endif;?>	

                
              </header>
              <div class="facebook-content">
                
					<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FInstituteforwomenshealth%2F&tabs&width=320&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=194622577274465" width="320" height="214" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>

              </div>
              <!-- // content  -->
            </div>
            <!-- // face book block  -->