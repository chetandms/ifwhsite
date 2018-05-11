<?php

function wpbts_enqueues() {

  	wp_register_style('wp-bt-sass-css', get_template_directory_uri() . '/css/main.min.css', false, null);
	wp_enqueue_style('wp-bt-sass-css');

	if (is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}
}
add_action('wp_enqueue_scripts', 'wpbts_enqueues', 100);


