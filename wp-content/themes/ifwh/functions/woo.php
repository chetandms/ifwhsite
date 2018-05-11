<?php
// Display Fields
add_action('woocommerce_product_options_general_product_data', 'woo_add_custom_general_fields');

// Save Fields
add_action('woocommerce_process_product_meta', 'woo_add_custom_general_fields_save');

function woo_add_custom_general_fields() {

  global $woocommerce, $post;

  echo '<div class="options_group">';

  woocommerce_wp_text_input(
    array(
      'id' => '_feature1',
      'label' => __('Feature1', 'woocommerce'),
    )
  );

  woocommerce_wp_text_input(
    array(
      'id' => '_feature2',
      'label' => __('Feature2', 'woocommerce'),
    )
  );
  woocommerce_wp_text_input(
    array(
      'id' => '_feature3',
      'label' => __('Feature3', 'woocommerce'),
    )
  );
  woocommerce_wp_text_input(
    array(
      'id' => '_feature4',
      'label' => __('Feature4', 'woocommerce'),
    )
  );
  woocommerce_wp_text_input(
    array(
      'id' => '_feature5',
      'label' => __('Feature5', 'woocommerce'),
    )
  );
  woocommerce_wp_text_input(
    array(
      'id' => '_feature6',
      'label' => __('Feature6', 'woocommerce'),
    )
  );
  echo '</div>';

}

function woo_add_custom_general_fields_save($post_id) {

  // Text Field
  $woocommerce_text_field = $_POST['_feature1'];
  if (!empty($woocommerce_text_field)) {
    update_post_meta($post_id, '_feature1', esc_attr($woocommerce_text_field));
  }

  $woocommerce_text_field = $_POST['_feature2'];
  if (!empty($woocommerce_text_field)) {
    update_post_meta($post_id, '_feature2', esc_attr($woocommerce_text_field));
  }

  $woocommerce_text_field = $_POST['_feature3'];
  if (!empty($woocommerce_text_field)) {
    update_post_meta($post_id, '_feature3', esc_attr($woocommerce_text_field));
  }

  $woocommerce_text_field = $_POST['_feature4'];
  if (!empty($woocommerce_text_field)) {
    update_post_meta($post_id, '_feature4', esc_attr($woocommerce_text_field));
  }

  $woocommerce_text_field = $_POST['_feature5'];
  if (!empty($woocommerce_text_field)) {
    update_post_meta($post_id, '_feature5', esc_attr($woocommerce_text_field));
  }

  $woocommerce_text_field = $_POST['_feature6'];
  if (!empty($woocommerce_text_field)) {
    update_post_meta($post_id, '_feature6', esc_attr($woocommerce_text_field));
  }

}
remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);

add_action('woocommerce_before_main_content', 'my_theme_wrapper_start', 10);
add_action('woocommerce_after_main_content', 'my_theme_wrapper_end', 10);

function my_theme_wrapper_start() {
  echo '<div class="container">';
}

function my_theme_wrapper_end() {
  echo '</div>';
}

function technology_init() {
  // create a new taxonomy
  register_taxonomy(
    'technology',
    'product',
    array(
      'label' => __('Technology'),
      'rewrite' => array('slug' => 'technology'),
      'capabilities' => array(
        'manage_terms' - 'manage_technologies',
        'edit_terms' - 'manage_technologies',
        'delete_terms' - 'manage_technologies',
        'assign_terms' - 'edit_technologies'
      )
    )
  );
}

add_action('init', 'technology_init');

function shape_init() {
  // create a new taxonomy
  register_taxonomy(
    'shape',
    'product',
    array(
      'label' => __('Shape'),
      'rewrite' => array('slug' => 'shape'),
      'capabilities' => array(
        'manage_terms' - 'manage_shapes',
        'edit_terms' - 'manage_shapes',
        'delete_terms' - 'manage_shapes',
        'assign_terms' - 'edit_shapes'
      )
    )
  );
}

add_action('init', 'shape_init');

function shape_series_init() {
  // create a new taxonomy
  register_taxonomy(
    'shape-series',
    'product',
    array(
      'label' => __('Shape Series'),
      'rewrite' => array('slug' => 'shape-series'),
      'capabilities' => array(
        'manage_terms' - 'manage_shapes',
        'edit_terms' - 'manage_shapes',
        'delete_terms' - 'manage_shapes',
        'assign_terms' - 'edit_shapes'
      )
    )
  );
}

add_action('init', 'shape_series_init');

function usage_init() {
  // create a new taxonomy
  register_taxonomy(
    'usage',
    'product',
    array(
      'label' => __('Usage'),
      'rewrite' => array('slug' => 'usage'),
      'capabilities' => array(
        'manage_terms' - 'manage_usages',
        'edit_terms' - 'manage_usages',
        'delete_terms' - 'manage_usages',
        'assign_terms' - 'edit_usages'
      )
    )
  );
}

add_action('init', 'usage_init');

function product_type_init() {
  // create a new taxonomy
  register_taxonomy(
    'type',
    'product',
    array(
      'label' => __('Product Type'),
      'rewrite' => array('slug' => 'product-type'),
      'capabilities' => array(
        'manage_terms' - 'manage_types',
        'edit_terms' - 'manage_types',
        'delete_terms' - 'manage_types',
        'assign_terms' - 'edit_types'
      )
    )
  );
}

add_action('init', 'product_type_init');

function fixture_type_init() {
  // create a new taxonomy
  register_taxonomy(
    'fixture_type',
    'product',
    array(
      'label' => __('Fixture Type'),
      'rewrite' => array('slug' => 'fixture-type'),
      'capabilities' => array(
        'manage_terms' - 'manage_types',
        'edit_terms' - 'manage_types',
        'delete_terms' - 'manage_types',
        'assign_terms' - 'edit_types'
      )
    )
  );
}

add_action('init', 'fixture_type_init');

add_action( 'after_setup_theme', 'woocommerce_support' );
function woocommerce_support() {
  add_theme_support( 'woocommerce' );
}