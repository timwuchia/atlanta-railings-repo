(function ($) {
	function desktopMenuHover(e) {
		e.stopPropagation();

		let item = $(this);
		let parent = item.closest('.wp-block-navigation__submenu-container')[0];
		let list = $(item.children('ul'));
		let child = list.children('.wp-block-navigation-submenu')[0];

		let listRenderEndPoint = list.offset().left + list[0].clientWidth;

		if (parent === undefined) {
			// First level dropdowns must always be natural or adjusted just enough to not bump off screen.
			if (listRenderEndPoint > window.screen.availWidth) {
				// if the item is first level and would run off the screen.
				list.css(
					'left',
					`${window.document.body.clientWidth - listRenderEndPoint - 1}px`
				); // render just enough farther left that it fits on screen properly.
			}
		} else {
			// This code will hit second-level and greater dropdowns.
			if (item.data('reversed')) {
				// If reversed true (set when the first item would roll off the right of the screeen) Keep the nav opening left until we hit another wall
				list.css('left', `-${list[0].clientWidth}px`); // render on left of previous menu.
				if (child !== undefined) {
					$(child).data('reversed', true); // propagate this along.
				}

				if (list.offset().left < 0) {
					// If the menu would run off the left of the screen, switch back.
					$(child).data('reversed', false); // Stop the reversal, which breaks back to the listRenderEndPoint check for next child tested (which will prevent run off right side)
					list.css('left', `${list[0].clientWidth}px`); //render on right of previous menu.
				}
				return;
			}
			if (listRenderEndPoint > window.screen.availWidth) {
				// If the dropdown would render off the screen.
				list.css('left', `-${list[0].clientWidth}px`); // render of left of previous menu
				if (child !== undefined) {
					// if there is a child.
					$(child).data('reversed', true); // set the child to continue expanding left instead of right.
				}
			}
		}
	}

	function mobileMenuHandling(e) {
		e.stopPropagation();
		let item = $(this);
		let button = item.children('button');
		let list = item.children('ul');

		let isCurrentlyVisible = $(list).is(':visible');
		if (isCurrentlyVisible) {
			button.css('transform', 'rotate(0deg)');
		} else {
			button.css({
				transform: 'rotateX(180deg)',
			});
		}
		$(list)
			.stop()
			.slideToggle({
				duration: 500,
				start: function () {
					console.log('triggered')
					$(this).css('display', 'flex');
				},
			});
	}

	$(document).ready(function () {
		if (window.screen.availWidth < 1200) {
			$('.wp-block-navigation-item.has-child')
				.children('ul')
				.slideToggle();
		}

		if (window.screen.availWidth < 1200) {
			$('.wp-block-navigation-item.has-child').on(
				'click',
				mobileMenuHandling
			);
		}

		if (window.screen.availWidth > 1199) {
			$('.wp-block-navigation-item.has-child').on(
				'mouseenter',
				desktopMenuHover
			);
		}
	});
	$(window).on('resize', function () {
		$('.wp-block-navigation-item.has-child').off('mouseenter');
		$('.wp-block-navigation-item.has-child').off('click');
		if (window.screen.availWidth < 1200) {
			$('.wp-block-navigation-item.has-child').children('ul').slideUp();
		}

		if (window.screen.availWidth < 1200) {
			$('.wp-block-navigation-item.has-child').on(
				'click',
				mobileMenuHandling
			);
		}
		if (window.screen.availWidth > 1199) {
			$('.wp-block-navigation-item.has-child').children('ul').slideDown();
			$('.wp-block-navigation__responsive-container-close').click();
			$('.wp-block-navigation-item.has-child').off('mouseenter');
			$('.wp-block-navigation-item.has-child').on(
				'mouseenter',
				desktopMenuHover
			);
		}
	});
})(jQuery);
