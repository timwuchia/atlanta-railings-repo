<?php
/**
 * Plugin Name: Custom Star Block
 * Description: A simple Gutenberg block that displays 5 Font Awesome stars.
 * Version: 1.0
 * Author: Your Name
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

// Enqueue Font Awesome
function custom_star_block_enqueue_assets() {
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');
}
add_action('enqueue_block_assets', 'custom_star_block_enqueue_assets');

// Register Block
function custom_star_block_register()
