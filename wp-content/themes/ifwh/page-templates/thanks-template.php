<?php
/**
 * Template Name: Thanks Template
**/

get_header(); ?>

    <header id="not-found-header">
        <div class="error-overlay"></div>
        <div class="container">
            <h3><?php the_field('title_tx'); ?></h3>
            <div class="row">
                
                <div class="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
                    <div id="not-box">
                    	<i class="fa fa-check-circle" aria-hidden="true"></i>

                        <span class="title"><?php the_content(''); ?></span>

                        <div class="form-box">

                            <a href="<?php the_field('button_link_tx'); ?>" class="back-tx-btn"><i class="fa fa-angle-left" aria-hidden="true"></i> <?php the_field('button_label_tx'); ?></a>

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