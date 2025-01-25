<?php

/* BEGIN CSS FILE */

global $lg_styles, $lg_scripts;

$asset_files = array(
	"style" => include( get_stylesheet_directory() . '/build/frontend.asset.php' ),
	"editorStyle" => include( get_stylesheet_directory() . '/build/editor.asset.php' ),
	"js" => include( get_stylesheet_directory() . '/build/main.asset.php' ),
	"editorJs" => include( get_stylesheet_directory() . '/build/editorjs.asset.php' ),
);

$lg_styles = [
	(object) array(
		"handle" => "lg-fonts",
		"src" => "https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
		"dependencies" => [],
		"version" => false
	),
	(object) array(
		"handle" => "lg-fonts",
		"src" => "https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
		"dependencies" => [],
		"version" => false
	),
	(object) array(
		"handle" => "lg-style-child",
		"src" => get_stylesheet_directory_uri() . "/build/style-frontend.css",
		"dependencies" => $asset_files['style']['dependencies'],
		"version" => $asset_files['style']['version']
	)
];

/* END CSS FILE */

/* BEGIN JS FILE */

$lg_scripts = [
	(object) array(
		"handle" => "lg-script-child",
		"src" => get_stylesheet_directory_uri() . "/build/main.js",
		"dependencies" => $asset_files['js']['dependencies'],
		"version" => $asset_files['js']['version'],
	)
];
/* END JS FILE */

function lg_enqueue_styles_scripts() {

	global $lg_styles, $lg_scripts;

	/* INCLUDE MAIN */

	if($lg_styles && is_array($lg_styles)){
		foreach ($lg_styles as $key => $style) {

			wp_enqueue_style(
				$style->handle,
				$style->src,
				$style->dependencies,
				$style->version
			);
		}
	}

	if($lg_scripts && is_array($lg_scripts)){
		foreach ($lg_scripts as $key => $script) {
			wp_enqueue_script(
				$script->handle,
				$script->src,
				$script->dependencies,
				$script->version,
				true
			);

			wp_enqueue_script( $script->handle );
		}
	}

	/* END INCLUDE MAIN */

}

add_action( 'wp_enqueue_scripts', 'lg_enqueue_styles_scripts' );

//enqueue theme style in editor
if($lg_styles && is_array($lg_styles)){
	foreach ($lg_styles as $key => $style) {
		add_editor_style($style->src);
	}
}

//enqueue editor style
add_editor_style(get_stylesheet_directory_uri()."/build/editor.css");



/*Remove wordpress emoji code*/
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );

/*Remove WP embed*/
function my_deregister_scripts(){
	wp_deregister_script( 'wp-embed' );
}
add_action( 'wp_footer', 'my_deregister_scripts' );


/*Remove jquery migrate js*/
function remove_jquery_migrate($scripts)
{
	if (!is_admin() && isset($scripts->registered['jquery'])) {
		$script = $scripts->registered['jquery'];

		if ($script->deps) { // Check whether the script has any dependencies
			$script->deps = array_diff($script->deps, array(
				'jquery-migrate'
			));
		}
	}
}
add_action('wp_default_scripts', 'remove_jquery_migrate');