<?php
/*
All the functions are in the PHP pages in the functions/ folder.
*/

// clean wordpress stuff
require_once locate_template('/functions/cleanup.php');

// basic configuration and reset of theme
require_once locate_template('/functions/setup.php');

// customize admin and login
require_once locate_template('/functions/customize.php');

// import css and js
require_once locate_template('/functions/enqueues.php');

// widgets
require_once locate_template('/functions/widgets.php');

// add custom post type support
require_once locate_template('/functions/ctp.php');

// general theme settings
require_once locate_template('/functions/settings.php');

// set image sizes
require_once locate_template('/functions/images.php');

// menus
require_once locate_template('/functions/menus.php');

require_once('wp_bootstrap_navwalker-mobile.php');

add_action('after_setup_theme', 'true_load_theme_textdomain');

function true_load_theme_textdomain(){
    load_theme_textdomain( 'bst', get_template_directory() . '/languages' );
}

remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5 );
remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );
remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20 );
remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );
remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );
remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs', 10 );

add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5 );
add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 10 );
add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20 );
add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 30 );




add_filter( 'widget_text', 'do_shortcode' );

// Create Shrotcode for custom sitemap
function sitemap_func( $atts ) {
    $wporg_atts = shortcode_atts( array(
        'location' => $atts,
		'menu' => $atts,
    ), $atts );
	return wp_nav_menu( array( 'theme_location' => $wporg_atts['location']) );
}
add_shortcode( 'sitemap', 'sitemap_func' );

function _remove_script_version( $src ){ 
$parts = explode( '?', $src ); 	
return $parts[0]; 
} 
add_filter( 'script_loader_src', '_remove_script_version', 15, 1 ); 
add_filter( 'style_loader_src', '_remove_script_version', 15, 1 );
