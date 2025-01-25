<?php
	/* Include theme functions */
	$function_dir_path = get_stylesheet_directory();
	$function_file_path = [
		'/libs/enqueue_styles_scripts.php',
		'/libs/core_tweaks.php',
	];

	if($function_file_path && is_array($function_file_path)){
		foreach ($function_file_path as $key => $value) {
			if (file_exists($function_dir_path . $value)) {
			    require_once($function_dir_path . $value);
			}
		}
	}

	/* end */

?>