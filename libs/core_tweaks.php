<?php
// Fix Focusloss Interactivity API stuff.
function remove_focusloss_from_navigation_block($block_content, $block)
{
    // Check if it's the core/navigation block
    if ($block['blockName'] === 'core/navigation') {
        // Use DOMDocument to manipulate the HTML
        $dom = new DOMDocument();
        @$dom->loadHTML(mb_convert_encoding($block_content, 'HTML-ENTITIES', 'UTF-8'), LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);

        // Find the elements with the specific attribute
        $xpath = new DOMXPath($dom);
        $elements = $xpath->query('//*[@data-wp-on--focusout]');

        foreach ($elements as $element) {
            // Remove the attribute
            $element->removeAttribute('data-wp-on--focusout');
        }

        // Return the modified HTML
        return $dom->saveHTML();
    }

    // Return the original content for other blocks
    return $block_content;
}

// Add the filter
add_filter('render_block', 'remove_focusloss_from_navigation_block', 10, 2);




//Remove Core Patterns
function longevitygraphics_remove_core_patterns() {
	remove_theme_support( 'core-block-patterns' );
}

add_action( 'after_setup_theme', 'longevitygraphics_remove_core_patterns' );
add_filter( 'should_load_remote_block_patterns', '__return_false' );
