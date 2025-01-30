<?php

function create_custom_post_types() {
    // Register "Products" Custom Post Type
    $product_labels = array(
        'name'               => _x('Products', 'Post Type General Name', 'text_domain'),
        'singular_name'      => _x('Product', 'Post Type Singular Name', 'text_domain'),
        'menu_name'          => __('Products', 'text_domain'),
        'all_items'          => __('All Products', 'text_domain'),
        'add_new_item'       => __('Add New Product', 'text_domain'),
        'edit_item'          => __('Edit Product', 'text_domain'),
        'new_item'           => __('New Product', 'text_domain'),
        'view_item'          => __('View Product', 'text_domain'),
        'search_items'       => __('Search Products', 'text_domain'),
        'not_found'          => __('No products found', 'text_domain'),
        'not_found_in_trash' => __('No products found in Trash', 'text_domain'),
    );

    $product_args = array(
        'label'               => __('Products', 'text_domain'),
        'description'         => __('A custom post type for products', 'text_domain'),
        'labels'              => $product_labels,
        'supports'            => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_rest'        => true, // Enables Gutenberg
        'menu_position'       => 5,
        'menu_icon'           => 'dashicons-cart',
        'show_in_admin_bar'   => true,
        'show_in_nav_menus'   => true,
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => false,
        'publicly_queryable'  => true,
        'capability_type'     => 'post',
        'rewrite'             => array('slug' => 'products'),
    );

    register_post_type('product', $product_args);

    // Register "Gallery" Custom Post Type
    $gallery_labels = array(
        'name'               => _x('Galleries', 'Post Type General Name', 'text_domain'),
        'singular_name'      => _x('Gallery', 'Post Type Singular Name', 'text_domain'),
        'menu_name'          => __('Galleries', 'text_domain'),
        'all_items'          => __('All Galleries', 'text_domain'),
        'add_new_item'       => __('Add New Gallery', 'text_domain'),
        'edit_item'          => __('Edit Gallery', 'text_domain'),
        'new_item'           => __('New Gallery', 'text_domain'),
        'view_item'          => __('View Gallery', 'text_domain'),
        'search_items'       => __('Search Galleries', 'text_domain'),
        'not_found'          => __('No galleries found', 'text_domain'),
        'not_found_in_trash' => __('No galleries found in Trash', 'text_domain'),
    );

    $gallery_args = array(
        'label'               => __('Galleries', 'text_domain'),
        'description'         => __('A custom post type for galleries', 'text_domain'),
        'labels'              => $gallery_labels,
        'supports'            => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_rest'        => true, // Enables Gutenberg
        'menu_position'       => 6,
        'menu_icon'           => 'dashicons-format-gallery', // Optional: A Dashicons icon for the menu
        'show_in_admin_bar'   => true,
        'show_in_nav_menus'   => true,
        'can_export'          => true,
        'has_archive'         => false, // Enables archive page for this post type
        'exclude_from_search' => false,
        'publicly_queryable'  => true,
        'capability_type'     => 'post',
        'rewrite'             => array('slug' => 'gallery'),
    );

    register_post_type('gallery', $gallery_args);
}

add_action('init', 'create_custom_post_types');
