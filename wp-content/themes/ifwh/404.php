<?php
/**
 * The template for displaying 404 pages (Not Found)
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?>

    <header id="not-found-header">
        <div class="error-overlay"></div>
        <div class="container">
            <h3><?php the_field('title_of_not_found', 'options'); ?></h3>
            <div class="row">
                
                <div class="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
                    <div id="not-box">
                        <span class="title"><?php the_field('box_title_not_found', 'options'); ?></span>
                        <span class="subtitle"><?php the_field('subtitle_in_box', 'options'); ?></span>

                        <div class="form-box">

                            <form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>">
                                <label>
                                    <input type="text" class="search-field"
                                        placeholder="<?php echo esc_attr_x( 'Search …', 'placeholder' ) ?>"
                                        value="<?php echo get_search_query() ?>" name="s"
                                        title="<?php echo esc_attr_x( 'Search for:', 'label' ) ?>" />
                                </label>
                                <input type="submit" class="search-submit"
                                    value="<?php echo esc_attr_x( 'Search', 'submit button' ) ?>" />
                            </form>

                        </div>
                        <!-- // form box  -->
                    </div>
                </div>
                <!-- // not box  -->

            </div>
            <!-- // row  -->
        </div>
    </header>
    <!-- // not found header  --> 
   
<?php get_footer(); ?>