        <nav id="blog-cats">
              <ul>
                <?php $categories = get_categories('taxonomy=news&post_type=ifwh_news'); ?>
				    <?php foreach ($categories as $category) : ?>
				     <li><a href="<?php echo get_category_link($category->cat_ID); ?>"><?php echo $category->name; ?></a></li>
				  <?php endforeach; ?>
              </ul>    
            </nav>
            <!-- // cats  -->

            <div class="archive-box">
            	<select name="archive-dropdown" onchange="document.location.href=this.options[this.selectedIndex].value;">
				  <option value=""><?php echo esc_attr( __( 'Archive by month' ) ); ?></option> 
				  <?php wp_get_archives( array( 'type' => 'monthly', 'format' => 'option', 'show_post_count' => 1, 'post_type'     => 'ifwh_news' ) ); ?>
				</select>
            </div>
            <!-- // archive box  -->    

            <div id="latest-blog">
              <header>
				<?php if(ICL_LANGUAGE_CODE=='en'): ?>

				<span class="title">Latest News</span>

				<?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

				<span class="title">Noticias actuales </span>

				<?php endif;?>  
              </header>

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