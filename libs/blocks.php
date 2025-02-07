<?php

function register_accordion_block() {
    register_block_type(get_template_directory() . '/blocks/accordion');
}
add_action('init', 'register_accordion_block');
