<?php

function custom_theme_register_blocks() {
    register_block_type(get_template_directory() . '/blocks/custom-star-block');
}
add_action('init', 'custom_theme_register_blocks');

// Enqueue Font Awesome
function custom_theme_enqueue_assets() {
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');
}
add_action('wp_enqueue_scripts', 'custom_theme_enqueue_assets');
add_action('enqueue_block_editor_assets', 'custom_theme_enqueue_assets');
