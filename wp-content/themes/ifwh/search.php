<?php
/**
 * The template for displaying Search Results pages.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?>

      <?php 
      $values = get_field( 'image_search_inner' );

      if ( $values ) { ?>

          <?php
            $imageID = get_field('image_search_inner');
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
                $values = get_field( 'title_search_inner_header', 'options' );

                if ( $values ) { ?>

                    <h1><?php the_field('title_search_inner_header', 'options'); ?></h1>

                <?php 
                } else { ?>

                    <h1>Search Results</h1>

                    <?php 
                }
                ?>

                <h2>"<?php the_search_query(); ?>"</h2>
            </div>
            <!-- // caption  -->
        </div>
    </header>
    <!-- // inner header  -->  

  <div id="filter-bar">
    <div class="container">
      <div class="row">

        <div class="col-md-8 col-sm-10">
         <div class="filters-box search-filter">

            <?php if(ICL_LANGUAGE_CODE=='en'): ?>

            <span>Display results :</span>

            <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

            <span>Categorías :</span>

            <?php endif;?>  


            <?php if(ICL_LANGUAGE_CODE=='en'): ?>

              <ul>
                <li><a href="<?php bloginfo('url'); ?>/?s=<?php the_search_query(); ?>">All</a></li>                
                <li><a href="<?php bloginfo('url'); ?>/?s=<?php the_search_query(); ?>&post_type=services">Services</a></li>
                <li><a href="<?php bloginfo('url'); ?>/?s=<?php the_search_query(); ?>&post_type=doctors">Physicians</a></li>
                <li><a href="<?php bloginfo('url'); ?>/?s=<?php the_search_query(); ?>&post_type=post">Blog</a></li>
                <li><a href="<?php bloginfo('url'); ?>/?s=<?php the_search_query(); ?>&post_type=ifwh_news">News</a></li>
              </ul>

            <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

              <ul>
                <li><a href="<?php bloginfo('url'); ?>/?s=<?php the_search_query(); ?>">Todas</a></li>                
                <li><a href="<?php bloginfo('url'); ?>/?s=<?php the_search_query(); ?>&post_type=services">Servicios</a></li>
                <li><a href="<?php bloginfo('url'); ?>/?s=<?php the_search_query(); ?>&post_type=doctors">Medicos</a></li>
                <li><a href="<?php bloginfo('url'); ?>/?s=<?php the_search_query(); ?>&post_type=post">Blog</a></li>
                <li><a href="<?php bloginfo('url'); ?>/?s=<?php the_search_query(); ?>&post_type=ifwh_news">Noticias</a></li>
              </ul>

            <?php endif;?>  

         </div>
        </div>
         <!-- // filters  -->

         <div class="col-md-4 col-sm-2">
           <div class="results-box">
             <small>

                  <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                   SHOWING:

                  <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                  RESULTADOS:

                  <?php endif;?>  

              <span>
                <?php
                global $wp_query;
                $total_results = $wp_query->found_posts;
                echo $total_results; ?>
                </span>
             </small>
           </div>
         </div>
         <!-- // results  -->

      </div>
      <!-- // row  -->
    </div>
  </div>
  <!-- // filter bar  -->   

  <div id="search-wrapper">
      <div class="container">

              <?php if (!have_posts()): ?>

                <div class="row">
                    <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                      <header>
                          <i class="fa fa-exclamation-circle" aria-hidden="true"></i>

                            <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                                <h3>No posts found.</h3>

                            <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                                <h3>Su resultado no pudo ser encontrado</h3>

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

            <?php while ( have_posts() ) : the_post(); ?>

                  <div class="search-box">
                      <div class="row">

                            <div class="col-md-2">
                                <div class="found-in">

                                  <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                                        <small>Found under: <strong>

                                  <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                                        <small>Encontradas bajo: <strong>

                                  <?php endif;?>  

                                        <?php
                                        $postType = get_post_type_object(get_post_type());
                                        if ($postType) {
                                            echo esc_html($postType->labels->singular_name);
                                        }
                                        ?>                                        
                                    </strong></small>
                                </div>
                            </div>
                            <!-- // found in  -->

                            <div class="col-md-10">
                                <span class="title"><a href="<?php echo get_permalink(); ?>"><?php the_title(''); ?></a></span>
                                <p><?php my_excerpt('regular');?></p>

                                <?php if(ICL_LANGUAGE_CODE=='en'): ?>

                                      <a href="<?php echo get_permalink(); ?>" class="read-btn">Read more <i class="fa fa-angle-right" aria-hidden="true"></i></a>

                                <?php elseif(ICL_LANGUAGE_CODE=='es'): ?>

                                      <a href="<?php echo get_permalink(); ?>" class="read-btn">Leer mas <i class="fa fa-angle-right" aria-hidden="true"></i></a>

                                <?php endif;?>  

                            </div>

                        </div>
                  </div>
                  <!-- // searrch box  -->

            <?php endwhile; // end of the loop. ?>

            <div id="pagination-block">
                <?php if( function_exists('wp_pagenavi') ) wp_pagenavi(); // WP-PageNavi function ?>
            </div>
            <!-- // pagination -->             
                  
      </div>
  </div>
  <!-- // search wrapper   -->  




<?php get_footer(); ?>