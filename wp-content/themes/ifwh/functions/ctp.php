<?php 

//  Locations
function wtp_locations() {

	$labels = array(
		'name'                  => _x( 'Locations', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'Locations', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Locations', 'text_domain' ),
		'name_admin_bar'        => __( 'Edit Our Locations', 'text_domain' ),
		'archives'              => __( 'Аrchive', 'text_domain' ),
		'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
		'all_items'             => __( 'All Locations', 'text_domain' ),
		'add_new_item'          => __( 'Add New Location', 'text_domain' ),
		'add_new'               => __( 'Add New Location', 'text_domain' ),
		'new_item'              => __( 'New Location', 'text_domain' ),
		'edit_item'             => __( 'Edit Location', 'text_domain' ),
		'update_item'           => __( 'Update Location', 'text_domain' ),
		'view_item'             => __( 'View Location', 'text_domain' ),
		'search_items'          => __( 'Search', 'text_domain' ),
		'not_found'             => __( 'Not Found', 'text_domain' ),
		'not_found_in_trash'    => __( 'Not Found', 'text_domain' ),
		'featured_image'        => __( 'Featured Image', 'text_domain' ),
		'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
		'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
		'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
		'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
		'items_list'            => __( 'List of Cards', 'text_domain' ),
		'items_list_navigation' => __( 'Items list navigation', 'text_domain' ),
		'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
	);
	$args = array(
		'label'                 => __( 'Locations', 'text_domain' ),
		'description'           => __( 'Locations', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-location',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,		
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'rewrite' 				=> array('slug' => 'offices')
	);
	register_post_type( 'locations', $args );

}
add_action( 'init', 'wtp_locations', 0 );



//  News
function wtp_news() {

	$labels = array(
		'name'                  => _x( 'News', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'News', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'News', 'text_domain' ),
		'name_admin_bar'        => __( 'Edit Our News', 'text_domain' ),
		'archives'              => __( 'Аrchive', 'text_domain' ),
		'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
		'all_items'             => __( 'All News', 'text_domain' ),
		'add_new_item'          => __( 'Add New Article', 'text_domain' ),
		'add_new'               => __( 'Add New Article', 'text_domain' ),
		'new_item'              => __( 'New Article', 'text_domain' ),
		'edit_item'             => __( 'Edit Article', 'text_domain' ),
		'update_item'           => __( 'Update Article', 'text_domain' ),
		'view_item'             => __( 'View Article', 'text_domain' ),
		'search_items'          => __( 'Search', 'text_domain' ),
		'not_found'             => __( 'Not Found', 'text_domain' ),
		'not_found_in_trash'    => __( 'Not Found', 'text_domain' ),
		'featured_image'        => __( 'Featured Image', 'text_domain' ),
		'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
		'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
		'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
		'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
		'items_list'            => __( 'List of Cards', 'text_domain' ),
		'items_list_navigation' => __( 'Items list navigation', 'text_domain' ),
		'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
	);

	$slug = get_bloginfo('language') == "es-ES" ? "noticias" : "news";

	$args = array(
		'label'                 => __( 'News', 'text_domain' ),
		'description'           => __( 'News', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'           	=> 'dashicons-rss',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,		
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'rewrite'             	=> array('slug' => $slug)
	);
	register_post_type( 'ifwh_news', $args );

}
add_action( 'init', 'wtp_news', 0 );

add_action( 'init', 'create_news_hierarchical_taxonomy', 0 );

//create a custom taxonomy name it topics for your posts

function create_news_hierarchical_taxonomy() {

// Add new taxonomy, make it hierarchical like categories
//first do the translations part for GUI

  $labels = array(
    'name' => _x( 'News Categories', 'taxonomy general name' ),
    'singular_name' => _x( 'News Categories', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Categories' ),
    'all_items' => __( 'All Categories' ),
    'parent_item' => __( 'Parent' ),
    'parent_item_colon' => __( 'Parent of Category:' ),
    'edit_item' => __( 'Edit Category' ), 
    'update_item' => __( 'Update Category' ),
    'add_new_item' => __( 'Add Category' ),
    'new_item_name' => __( 'New Category' ),
    'menu_name' => __( 'News Categories' ),
  ); 	

// Now register the taxonomy

  register_taxonomy('news',array('ifwh_news'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'show_tagcloud'              => true,
    'rewrite' => array( 'slug' => 'news-category' ),
  ));

}

//  Doctors
function wtp_doctors() {

	$labels = array(
		'name'                  => _x( 'Doctors', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'Doctors', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Doctors', 'text_domain' ),
		'name_admin_bar'        => __( 'Edit Our Doctors', 'text_domain' ),
		'archives'              => __( 'Аrchive', 'text_domain' ),
		'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
		'all_items'             => __( 'All Doctors', 'text_domain' ),
		'add_new_item'          => __( 'Add New Doctor', 'text_domain' ),
		'add_new'               => __( 'Add New Doctor', 'text_domain' ),
		'new_item'              => __( 'New Doctor', 'text_domain' ),
		'edit_item'             => __( 'Edit Doctor', 'text_domain' ),
		'update_item'           => __( 'Update Doctor', 'text_domain' ),
		'view_item'             => __( 'View Doctor', 'text_domain' ),
		'search_items'          => __( 'Search', 'text_domain' ),
		'not_found'             => __( 'Not Found', 'text_domain' ),
		'not_found_in_trash'    => __( 'Not Found', 'text_domain' ),
		'featured_image'        => __( 'Featured Image', 'text_domain' ),
		'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
		'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
		'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
		'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
		'items_list'            => __( 'List of Cards', 'text_domain' ),
		'items_list_navigation' => __( 'Items list navigation', 'text_domain' ),
		'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
	);
	$args = array(
		'label'                 => __( 'Doctors', 'text_domain' ),
		'description'           => __( 'Doctors', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-admin-users',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,		
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'rewrite' 				=> array('slug' => 'physicians')
	);
	register_post_type( 'doctors', $args );

}
add_action( 'init', 'wtp_doctors', 0 );



//  Services
function wtp_services() {

	$labels = array(
		'name'                  => _x( 'Services', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'Services', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Services', 'text_domain' ),
		'name_admin_bar'        => __( 'Edit Our Services', 'text_domain' ),
		'archives'              => __( 'Аrchive', 'text_domain' ),
		'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
		'all_items'             => __( 'All Services', 'text_domain' ),
		'add_new_item'          => __( 'Add New Service', 'text_domain' ),
		'add_new'               => __( 'Add New Service', 'text_domain' ),
		'new_item'              => __( 'New Service', 'text_domain' ),
		'edit_item'             => __( 'Edit Service', 'text_domain' ),
		'update_item'           => __( 'Update Service', 'text_domain' ),
		'view_item'             => __( 'View Service', 'text_domain' ),
		'search_items'          => __( 'Search', 'text_domain' ),
		'not_found'             => __( 'Not Found', 'text_domain' ),
		'not_found_in_trash'    => __( 'Not Found', 'text_domain' ),
		'featured_image'        => __( 'Featured Image', 'text_domain' ),
		'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
		'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
		'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
		'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
		'items_list'            => __( 'List of Cards', 'text_domain' ),
		'items_list_navigation' => __( 'Items list navigation', 'text_domain' ),
		'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
	);
	$args = array(
		'label'                 => __( 'Services', 'text_domain' ),
		'description'           => __( 'Services', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-editor-ol',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,		
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'rewrite' 				=> array('slug' => 'services')
	);
	register_post_type( 'services', $args );

}
add_action( 'init', 'wtp_services', 0 );

//  Services
function wtp_careers() {

	$labels = array(
		'name'                  => _x( 'Careers', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'Careers', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Careers', 'text_domain' ),
		'name_admin_bar'        => __( 'Edit Our Careers', 'text_domain' ),
		'archives'              => __( 'Аrchive', 'text_domain' ),
		'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
		'all_items'             => __( 'All Careers', 'text_domain' ),
		'add_new_item'          => __( 'Add New Job', 'text_domain' ),
		'add_new'               => __( 'Add New Job', 'text_domain' ),
		'new_item'              => __( 'New Job', 'text_domain' ),
		'edit_item'             => __( 'Edit Job', 'text_domain' ),
		'update_item'           => __( 'Update Job', 'text_domain' ),
		'view_item'             => __( 'View Job', 'text_domain' ),
		'search_items'          => __( 'Search', 'text_domain' ),
		'not_found'             => __( 'Not Found', 'text_domain' ),
		'not_found_in_trash'    => __( 'Not Found', 'text_domain' ),
		'featured_image'        => __( 'Featured Image', 'text_domain' ),
		'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
		'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
		'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
		'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
		'items_list'            => __( 'List of Cards', 'text_domain' ),
		'items_list_navigation' => __( 'Items list navigation', 'text_domain' ),
		'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
	);
	$args = array(
		'label'                 => __( 'Careers', 'text_domain' ),
		'description'           => __( 'Careers', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-portfolio',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,		
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'rewrite' 				=> array('slug' => 'open-positions')
	);
	register_post_type( 'careers', $args );

}
add_action( 'init', 'wtp_careers', 0 );




?>