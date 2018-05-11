<?php 


if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page(array(
		'page_title' 	=> 'Main Options',
		'menu_title'	=> 'Main Options',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Header Settings',
		'menu_title'	=> 'Header Settings',
		'parent_slug'	=> 'theme-general-settings',
	));	

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Inner Header Settings',
		'menu_title'	=> 'Inner Header Settings',
		'parent_slug'	=> 'theme-general-settings',
	));		

	acf_add_options_sub_page(array(
		'page_title' 	=> '404 Page Settings',
		'menu_title'	=> '404 Page Settings',
		'parent_slug'	=> 'theme-general-settings',
	));		

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Results Doctors Settings',
		'menu_title'	=> 'Results Doctors Settings',
		'parent_slug'	=> 'theme-general-settings',
	));			


	acf_add_options_sub_page(array(
		'page_title' 	=> 'Newsletter Settings',
		'menu_title'	=> 'Newsletter Settings',
		'parent_slug'	=> 'theme-general-settings',
	));	

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Footer Settings',
		'menu_title'	=> 'Footer Settings',
		'parent_slug'	=> 'theme-general-settings',
	));	

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Copybar Settings',
		'menu_title'	=> 'Copybar Settings',
		'parent_slug'	=> 'theme-general-settings',
	));	

}


?>