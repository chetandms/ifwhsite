<?php

// Login config
function my_login_logo() { ?>
    <style type="text/css">
        .login h1 a {
            background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/img/logos/login-logo.png)!important;
            padding-bottom: 0px!important;
            width: 322px!important;
            height: 127px!important;
            background-size: cover!important;
        }
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'my_login_logo' );

function my_login_logo_url() {
    return home_url();
}
add_filter( 'login_headerurl', 'my_login_logo_url' );

function my_login_logo_url_title() {
    return 'Back to Homepage';
}
add_filter( 'login_headertitle', 'my_login_logo_url_title' );

function my_login_stylesheet() {
    wp_enqueue_style( 'custom-login', get_template_directory_uri() . '/css/login.css' );
}
add_action( 'login_enqueue_scripts', 'my_login_stylesheet' );

function custom_menu_page_removing() {
    remove_menu_page( $menu_slug );
}

// Rearrange the admin menu
function custom_menu_order($menu_ord) {
if (!$menu_ord) return true;
return array(
  'index.php', // Dashboard

  'edit.php?post_type=page', // Pages
  'separator2', // Second separator    
  'edit.php', // Posts
  'edit.php?post_type=ifwh_news', // Custom type five  
  'edit.php?post_type=locations', // Custom type five
  'edit.php?post_type=doctors', // Custom type five
  'edit.php?post_type=services', // Custom type five
  'edit.php?post_type=careers', // Custom type five
  'theme-general-settings',
  'separator1', // First separator

  'upload.php', // Media
  'themes.php', // Appearance
  'plugins.php', // Plugins
  'users.php', // Users
  'tools.php', // Tools
  'options-general.php', // Settings
  'separator-last', // Last separator

);
}

add_filter('custom_menu_order', 'custom_menu_order'); // Activate custom_menu_order
add_filter('menu_order', 'custom_menu_order');

 /* Admin Bar Color */
add_action('admin_head', 'change_bar_color');
function change_bar_color() {
?>
<style>
#wpadminbar{
background: #6bad4d!important;
}
#wpadminbar .quicklinks a,#wpadminbar .shortlink-input {
color:#fff!important;
text-shadow:#939393 0 0px 0!important;
}

#wpadminbar .quicklinks a:hover,#wpadminbar .shortlink-input:hover {
color:#fff!important;
text-shadow:false 0 0px 0!important;
background:#fff!important;
}
#wpadminbar .ab-top-menu > li > .ab-item:focus, #wpadminbar.nojq .quicklinks .ab-top-menu > li > .ab-item:focus, #wpadminbar .ab-top-menu > li:hover > .ab-item, #wpadminbar .ab-top-menu > li.hover > .ab-item{
background: #6bad4d!important;
}
.ab-sub-wrapper{
background: #f05a7b!important;
}
#wpadminbar:not(.mobile)>#wp-toolbar a:focus span.ab-label, #wpadminbar:not(.mobile)>#wp-toolbar li:hover span.ab-label, #wpadminbar>#wp-toolbar li.hover span.ab-label {
    color:#fff!important;
}
#wpadminbar .quicklinks .ab-sub-wrapper .menupop.hover>a, #wpadminbar .quicklinks .menupop ul li a:focus, #wpadminbar .quicklinks .menupop ul li a:focus strong, #wpadminbar .quicklinks .menupop ul li a:hover, #wpadminbar .quicklinks .menupop ul li a:hover strong, #wpadminbar .quicklinks .menupop.hover ul li a:focus, #wpadminbar .quicklinks .menupop.hover ul li a:hover, #wpadminbar li #adminbarsearch.adminbar-focused:before, #wpadminbar li .ab-item:focus:before, #wpadminbar li a:focus .ab-icon:before, #wpadminbar li.hover .ab-icon:before, #wpadminbar li.hover .ab-item:before, #wpadminbar li:hover #adminbarsearch:before, #wpadminbar li:hover .ab-icon:before, #wpadminbar li:hover .ab-item:before, #wpadminbar.nojs .quicklinks .menupop:hover ul li a:focus, #wpadminbar.nojs .quicklinks .menupop:hover ul li a:hover {
    color:#089bac!important;
}
#adminmenu, #adminmenu .wp-submenu, #adminmenuback, #adminmenuwrap {
    background:#089bac!important;
}
#adminmenu li.menu-top:hover, #adminmenu li.opensub>a.menu-top, #adminmenu li>a.menu-top:focus {
    background:#f05a7b!important;
    color:#fff!important;
}
#adminmenu li a:focus div.wp-menu-image:before, #adminmenu li.opensub div.wp-menu-image:before, #adminmenu li:hover div.wp-menu-image:before {
    color:#fff!important;
}
#adminmenu .wp-has-current-submenu .wp-submenu .wp-submenu-head, #adminmenu .wp-menu-arrow, #adminmenu .wp-menu-arrow div, #adminmenu li.current a.menu-top, #adminmenu li.wp-has-current-submenu a.wp-has-current-submenu, .folded #adminmenu li.current.menu-top, .folded #adminmenu li.wp-has-current-submenu {
    background:#f05a7b!important;
    color:#fff;
}
#adminmenu .wp-has-current-submenu .wp-submenu, #adminmenu .wp-has-current-submenu .wp-submenu.sub-open, #adminmenu .wp-has-current-submenu.opensub .wp-submenu, #adminmenu a.wp-has-current-submenu:focus+.wp-submenu, .no-js li.wp-has-current-submenu:hover .wp-submenu {
    background:#fff!important;
}
#adminmenu .wp-has-current-submenu ul>li>a, .folded #adminmenu li.menu-top .wp-submenu>li>a {
    color:#545f66!important;
}
#adminmenu .opensub .wp-submenu li.current a, #adminmenu .wp-submenu li.current, #adminmenu .wp-submenu li.current a, #adminmenu .wp-submenu li.current a:focus, #adminmenu .wp-submenu li.current a:hover, #adminmenu a.wp-has-current-submenu:focus+.wp-submenu li.current a {
    color:#f05a7b!important;
}
#adminmenu div.wp-menu-name {
    border-bottom:1px dotted #076d78!important;
    color:#fff;
}
#adminmenu li.wp-menu-separator {
    height:25px!important;
}
 #adminmenu a:hover, #adminmenu li.menu-top>a:focus {
    color:#fff!important;
}
#adminmenu .wp-submenu a:focus, #adminmenu .wp-submenu a:hover {
    color:#089bac!important;    
}

#adminmenu .wp-not-current-submenu li>a:hover, .folded #adminmenu .wp-has-current-submenu li>a:hover
 {
    color:#fff!important;
 } 
 #wpadminbar .quicklinks .menupop ul.ab-sub-secondary, #wpadminbar .quicklinks .menupop ul.ab-sub-secondary .ab-submenu {
 background:#f05a7b!important;
}
#collapse-menu:hover, #collapse-menu:hover #collapse-button div:after {
  color:#fff;
}
#adminmenu li.wp-has-submenu.wp-not-current-submenu:hover:after {
  border-right-color:#089bac!important;
}
#adminmenu .wp-submenu-head, #adminmenu a.menu-top {
  color:#c1c1c1;
}
#adminmenu div.wp-menu-image:before {
  color:#f05a7b;
}
</style>
<?php
}