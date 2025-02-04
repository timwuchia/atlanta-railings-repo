/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/navigation.js":
/*!*****************************************!*\
  !*** ./src/js/components/navigation.js ***!
  \*****************************************/
/***/ (() => {

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
        list.css('left', `${window.document.body.clientWidth - listRenderEndPoint - 1}px`); // render just enough farther left that it fits on screen properly.
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
        transform: 'rotateX(180deg)'
      });
    }
    $(list).stop().slideToggle({
      duration: 500,
      start: function () {
        console.log('triggered');
        $(this).css('display', 'flex');
      }
    });
  }
  $(document).ready(function () {
    if (window.screen.availWidth < 1440) {
      $('.wp-block-navigation-item.has-child').children('ul').slideToggle();
    }
    if (window.screen.availWidth < 1440) {
      $('.wp-block-navigation-item.has-child').on('click', mobileMenuHandling);
    }
    if (window.screen.availWidth > 1440) {
      $('.wp-block-navigation-item.has-child').on('mouseenter', desktopMenuHover);
    }
  });
  $(window).on('resize', function () {
    $('.wp-block-navigation-item.has-child').off('mouseenter');
    $('.wp-block-navigation-item.has-child').off('click');
    if (window.screen.availWidth < 1440) {
      $('.wp-block-navigation-item.has-child').children('ul').slideUp();
    }
    if (window.screen.availWidth < 1440) {
      $('.wp-block-navigation-item.has-child').on('click', mobileMenuHandling);
    }
    if (window.screen.availWidth > 1439) {
      $('.wp-block-navigation-item.has-child').children('ul').slideDown();
      $('.wp-block-navigation__responsive-container-close').click();
      $('.wp-block-navigation-item.has-child').off('mouseenter');
      $('.wp-block-navigation-item.has-child').on('mouseenter', desktopMenuHover);
    }
  });
})(jQuery);

/***/ }),

/***/ "./src/js/window-event/load.js":
/*!*************************************!*\
  !*** ./src/js/window-event/load.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
// Windows Load Handler

(function ($) {
  $(window).on('load', function () {});
})((jquery__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ "./src/js/window-event/ready.js":
/*!**************************************!*\
  !*** ./src/js/window-event/ready.js ***!
  \**************************************/
/***/ (() => {

// Windows Ready Handler
(function ($) {
  $(document).ready(function () {
    $('.exit-get-free-quote').click(function () {
      $('.get-quote-form').removeClass('show');
    });
    $('.get-a-quote').click(function () {
      $('.get-quote-form').addClass('show');
    });
  });
})(jQuery);

/***/ }),

/***/ "./src/js/window-event/resize.js":
/*!***************************************!*\
  !*** ./src/js/window-event/resize.js ***!
  \***************************************/
/***/ (() => {

// Window Resize Handler

(function ($) {
  $(window).on('resize', function () {});
})(jQuery);

/***/ }),

/***/ "./src/js/window-event/scroll.js":
/*!***************************************!*\
  !*** ./src/js/window-event/scroll.js ***!
  \***************************************/
/***/ (() => {

// Window Scroll Handler

(function ($) {
  $(window).on('scroll', function () {
    const headerImage = $('.site-header .logo-column .wp-block-image img');
    const shrinkClass = 'shrink-on-scroll';
    if (window.scrollY > 150) {
      headerImage.addClass(shrinkClass); // Shrink element when scrolled down
    } else {
      headerImage.removeClass(shrinkClass); // Restore size when back at top
    }
  });
})(jQuery);

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["jQuery"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__(/*! ./window-event/ready.js */ "./src/js/window-event/ready.js");
__webpack_require__(/*! ./window-event/load.js */ "./src/js/window-event/load.js");
__webpack_require__(/*! ./window-event/resize.js */ "./src/js/window-event/resize.js");
__webpack_require__(/*! ./window-event/scroll.js */ "./src/js/window-event/scroll.js");
__webpack_require__(/*! ./components/navigation.js */ "./src/js/components/navigation.js");
})();

/******/ })()
;
//# sourceMappingURL=main.js.map