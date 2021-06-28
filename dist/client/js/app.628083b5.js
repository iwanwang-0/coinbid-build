/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"app": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "client/js/" + ({}[chunkId]||chunkId) + "." + {"chunk-2d216626":"51dde05c","chunk-5aa6424c":"30ae1f93","chunk-64d226fe":"3b5a2ca5","chunk-3b62e49e":"c6daf911","chunk-6d6c6f43":"60fcb9ab","chunk-da727af0":"9f0f437c"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"chunk-5aa6424c":1,"chunk-64d226fe":1,"chunk-3b62e49e":1,"chunk-6d6c6f43":1,"chunk-da727af0":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "client/css/" + ({}[chunkId]||chunkId) + "." + {"chunk-2d216626":"31d6cfe0","chunk-5aa6424c":"6071bcf1","chunk-64d226fe":"3cb1c036","chunk-3b62e49e":"8e2b96ac","chunk-6d6c6f43":"16386b8e","chunk-da727af0":"fa4df901"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "015a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "199c":
/***/ (function(module, exports) {

//
//
//
//
//
//
// export default {
//   mounted() {
//   }
// }

/***/ }),

/***/ "23be":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("199c");
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "37fd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_2f3b06ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f1ea");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_2f3b06ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_2f3b06ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3dfd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _App_vue_vue_type_template_id_640962e9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3e0f");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("23be");
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5c0b");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_640962e9___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _App_vue_vue_type_template_id_640962e9___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "3e0f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ staticRenderFns; });

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d43d7e62-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=640962e9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=640962e9&


/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.common.js
var vue_common = __webpack_require__("5ee5");
var vue_common_default = /*#__PURE__*/__webpack_require__.n(vue_common);

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/index.js + 269 modules
var esm = __webpack_require__("5f5b");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/icons/plugin.js
var icons_plugin = __webpack_require__("b1e0");

// EXTERNAL MODULE: ./node_modules/echarts/index.js + 369 modules
var echarts = __webpack_require__("313e");

// EXTERNAL MODULE: ./node_modules/vue-echarts/dist/index.esm.min.js + 2 modules
var index_esm_min = __webpack_require__("5c7f");

// EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.esm.js
var vue_composition_api_esm = __webpack_require__("a6f4");

// EXTERNAL MODULE: ./src/App.vue
var App = __webpack_require__("3dfd");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d43d7e62-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/index.vue?vue&type=template&id=f219b70a&scoped=true&
var layoutvue_type_template_id_f219b70a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-wrapper"},[_c('div',{staticClass:"fixed-header"},[_c('navbar')],1),_c('router-view'),_c('LatestNews'),_c('footerbar')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/layout/index.vue?vue&type=template&id=f219b70a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d43d7e62-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/components/Navbar.vue?vue&type=template&id=2f3b06ac&scoped=true&
var Navbarvue_type_template_id_2f3b06ac_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-navbar',{staticClass:"navbar",attrs:{"toggleable":"lg","variant":(_vm.atTop && _vm.isHome) ? '' : 'light',"type":"light","fixed":"top"}},[_c('b-container',{attrs:{"fluid":"lg"}},[_c('b-navbar-brand',{attrs:{"href":"/"}},[_c('img',{staticClass:"logo",attrs:{"src":__webpack_require__("a5ed"),"alt":""}})]),_c('b-navbar-toggle',{attrs:{"target":"nav-collapse"},on:{"click":_vm.onToggleClick}}),_c('b-collapse',{attrs:{"id":"nav-collapse","is-nav":""}},[_c('b-navbar-nav',[_c('b-nav-item',{attrs:{"active":_vm.$route.path === '/'},on:{"click":function($event){return _vm.$router.push('/')}}},[_vm._v("Home")]),_c('b-nav-item',{attrs:{"active":_vm.$route.path.startsWith('/auction')},on:{"click":function($event){return _vm.$router.push('/auction')}}},[_vm._v("Auction")]),_c('b-nav-item',{attrs:{"active":_vm.$route.path.startsWith('/governance')},on:{"click":_vm.onClickGovernance}},[_vm._v("Governance")]),_c('b-nav-item',{attrs:{"active":_vm.$route.path.startsWith('/introduce')},on:{"click":function($event){return _vm.$router.push('/introduce')}}},[_vm._v("Introduce")])],1),_c('b-navbar-nav',{staticClass:"ml-auto"},[_c('b-nav-item-dropdown',{attrs:{"text":"English","right":""}},[_c('b-dropdown-item',{attrs:{"href":"#"}},[_vm._v("English")]),_c('b-dropdown-item',{attrs:{"href":"#"}},[_vm._v("Chinese")])],1),(_vm.user.address)?_c('b-button',{staticClass:"address-btn",attrs:{"variant":"link","to":"/mine"}},[_vm._v(" "+_vm._s(_vm._f("ellipsis")(_vm.user.address))+" ")]):_c('b-button',{staticClass:"sign-btn",attrs:{"size":"sm","variant":"outline-primary"},on:{"click":_vm.unlock}},[_c('img',{attrs:{"src":__webpack_require__("db13"),"alt":""}}),_vm._v(" Sign Up")]),_c('b-button',{staticClass:"whitepaper-btn",attrs:{"size":"sm","variant":"outline-primary","target":"_blank","href":"https://gateway.pinata.cloud/ipfs/QmY7SefA5JGuy2AJC8jdhQkNt2AKmBkse5bk5cpp9Xmgk1/COIN%20BID%20English%20version.pdf"}},[_c('img',{attrs:{"src":__webpack_require__("e5cd"),"alt":""}}),_vm._v(" White Paper")])],1)],1)],1)],1)}
var Navbarvue_type_template_id_2f3b06ac_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/layout/components/Navbar.vue?vue&type=template&id=2f3b06ac&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/components/Navbar.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  filters: {
    ellipsis: function ellipsis(address) {
      return address.replace(/^(.{4}).*(.{3})$/, '$1...$2');
    }
  },
  data: function data() {
    return {
      atTop: true,
      expand: false
    };
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(['user'])), {}, {
    isHome: function isHome() {
      return this.$route.path === '/';
    }
  }),
  mounted: function mounted() {
    var _this = this;

    document.addEventListener('scroll', function (e) {
      if (window.scrollY > 0) {
        _this.atTop = false;
      } else {
        _this.atTop = true;
      }
    });
  },
  methods: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({
    onToggleClick: function onToggleClick() {
      this.expand = !this.expand;
    }
  }, Object(vuex_esm["b" /* mapActions */])(['showComingSoon'])), {}, {
    unlock: function unlock() {
      this.$store.dispatch('unlockByMetaMask'); // __g_account__.unlockByMetaMask();
    },
    onClickGovernance: function onClickGovernance() {
      window.open('https://gov.coin-bid.io/#/');
    } // onClick() {
    //   __g_root__.$bvToast.toast('Coming soon...', {
    //     title: 'Notice',
    //     autoHideDelay: 5000,
    //   });
    // },

  })
});
// CONCATENATED MODULE: ./src/layout/components/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layout/components/Navbar.vue?vue&type=style&index=0&id=2f3b06ac&lang=scss&scoped=true&
var Navbarvue_type_style_index_0_id_2f3b06ac_lang_scss_scoped_true_ = __webpack_require__("37fd");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/layout/components/Navbar.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navbarvue_type_script_lang_js_,
  Navbarvue_type_template_id_2f3b06ac_scoped_true_render,
  Navbarvue_type_template_id_2f3b06ac_scoped_true_staticRenderFns,
  false,
  null,
  "2f3b06ac",
  null
  
)

/* harmony default export */ var Navbar = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d43d7e62-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/components/Footerbar.vue?vue&type=template&id=6b969c2a&scoped=true&
var Footerbarvue_type_template_id_6b969c2a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer"},[_c('b-container',{attrs:{"fluid":"lg"}},[_c('b-row',{staticClass:"contact-bar"},[_c('b-col',{staticClass:"contact-col",attrs:{"cols":"4","lg":"2"}},[_c('h5',[_vm._v("COMPANY")]),_c('a',{attrs:{"target":"_blank","href":""}},[_vm._v("About Us")]),_c('br'),_c('a',{attrs:{"target":"_blank","href":""}},[_vm._v("Team")]),_c('br'),_c('a',{attrs:{"target":"_blank","href":""}},[_vm._v("Help Center")]),_c('br'),_c('a',{attrs:{"target":"_blank","href":""}},[_vm._v("Suggestions")]),_c('br'),_c('a',{attrs:{"target":"_blank","href":""}},[_vm._v("Voting")])]),_c('b-col',{staticClass:"contact-col",attrs:{"cols":"4","lg":"2"}},[_c('h5',[_vm._v("MEDIA LINK")]),_c('a',{attrs:{"target":"_blank","href":"https://twitter.com/CoinBid1"}},[_vm._v("Twitter")]),_c('br'),_c('a',{attrs:{"target":"_blank","href":"https://www.facebook.com/CoinBidNFT.io"}},[_vm._v("Facebook")]),_c('br'),_c('a',{attrs:{"target":"_blank","href":"https://youtube.com/channel/UCixE0PUHuHfEPTCTsoYO1Fw"}},[_vm._v("Youtube")]),_c('br'),_c('a',{attrs:{"target":"_blank","href":"https://t.me/Coinbidnft "}},[_vm._v("Telegram")]),_c('br'),_c('a',{attrs:{"target":"_blank","href":"https://discord.gg/RdNrCRcKdm"}},[_vm._v("Discord")])]),_c('b-col',{staticClass:"contact-col",attrs:{"cols":"4","lg":"2"}},[_c('h5',[_vm._v("LEGAL")]),_c('a',{attrs:{"href":""}},[_vm._v("Privacy")]),_c('br'),_c('a',{attrs:{"href":""}},[_vm._v("Terms")]),_c('br'),_c('a',{attrs:{"href":""}},[_vm._v("Security")])]),_c('b-col',{staticClass:"blog-card-container  ml-auto",attrs:{"cols":"12","lg":"4"}},[_c('div',{staticClass:"blog-card"},[_c('h4',{staticClass:"title"},[_vm._v("Blog Coin Bid")]),_c('div',{staticClass:"label"},[_vm._v("Write email to us in")]),_c('div',{staticClass:"email"},[_vm._v("contact@coin-bid.io")]),_c('b-button',{staticClass:"sign-btn",attrs:{"variant":"primary","size":"lg"}},[_c('img',{attrs:{"src":__webpack_require__("db13"),"alt":""}}),_vm._v(" Mail to us")])],1)])],1),_c('b-row',{staticClass:"footer-bar",attrs:{"align-h":"between","align-v":"center"}},[_c('b-col',{attrs:{"cols":"12","lg":"6"}},[_c('img',{staticClass:"logo",attrs:{"src":__webpack_require__("a5ed"),"alt":""}})]),_c('b-col',{attrs:{"cols":"12","lg":"6"}},[_c('div',{staticClass:"copy"},[_vm._v("© Copyright 2021 Coin Bid Capital Pty Ltd (ABN 45 4545 88888).")])])],1)],1)],1)}
var Footerbarvue_type_template_id_6b969c2a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/layout/components/Footerbar.vue?vue&type=template&id=6b969c2a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/components/Footerbar.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Footerbarvue_type_script_lang_js_ = ({
  methods: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapActions */])(['showComingSoon']))
});
// CONCATENATED MODULE: ./src/layout/components/Footerbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footerbarvue_type_script_lang_js_ = (Footerbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layout/components/Footerbar.vue?vue&type=style&index=0&id=6b969c2a&lang=scss&scoped=true&
var Footerbarvue_type_style_index_0_id_6b969c2a_lang_scss_scoped_true_ = __webpack_require__("95d2");

// CONCATENATED MODULE: ./src/layout/components/Footerbar.vue






/* normalize component */

var Footerbar_component = Object(componentNormalizer["a" /* default */])(
  components_Footerbarvue_type_script_lang_js_,
  Footerbarvue_type_template_id_6b969c2a_scoped_true_render,
  Footerbarvue_type_template_id_6b969c2a_scoped_true_staticRenderFns,
  false,
  null,
  "6b969c2a",
  null
  
)

/* harmony default export */ var Footerbar = (Footerbar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d43d7e62-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LatestNews.vue?vue&type=template&id=750ead50&scoped=true&
var LatestNewsvue_type_template_id_750ead50_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-container',{staticClass:"latest-news",attrs:{"fluid":"lg"}},[_c('b-row',[_c('b-col',{staticClass:"col"},[_c('div',{staticClass:"sign-up-card"},[_c('h2',[_vm._v("Sign Up For The Latest News From Coin Bid")]),_c('div',{staticClass:"input-wrapper"},[_c('input',{attrs:{"type":"text"}}),_c('b-button',{staticClass:"sub-btn",attrs:{"variant":"primary"}},[_c('img',{attrs:{"src":__webpack_require__("67f3"),"alt":""}}),_c('span',[_vm._v("Subscribe")])])],1)])])],1)],1)}
var LatestNewsvue_type_template_id_750ead50_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LatestNews.vue?vue&type=template&id=750ead50&scoped=true&

// EXTERNAL MODULE: ./src/components/LatestNews.vue?vue&type=style&index=0&id=750ead50&lang=scss&scoped=true&
var LatestNewsvue_type_style_index_0_id_750ead50_lang_scss_scoped_true_ = __webpack_require__("d56b");

// CONCATENATED MODULE: ./src/components/LatestNews.vue

var script = {}



/* normalize component */

var LatestNews_component = Object(componentNormalizer["a" /* default */])(
  script,
  LatestNewsvue_type_template_id_750ead50_scoped_true_render,
  LatestNewsvue_type_template_id_750ead50_scoped_true_staticRenderFns,
  false,
  null,
  "750ead50",
  null
  
)

/* harmony default export */ var LatestNews = (LatestNews_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var layoutvue_type_script_lang_js_ = ({
  name: 'Layout',
  components: {
    Navbar: Navbar,
    Footerbar: Footerbar,
    LatestNews: LatestNews
  },
  computed: {},
  created: function created() {
    console.log(this.$bvToast); // require('@/initEnums');
  },
  methods: {// handleClickOutside() {
    //   this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    // }
  }
});
// CONCATENATED MODULE: ./src/layout/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_layoutvue_type_script_lang_js_ = (layoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layout/index.vue?vue&type=style&index=0&id=f219b70a&lang=scss&scoped=true&
var layoutvue_type_style_index_0_id_f219b70a_lang_scss_scoped_true_ = __webpack_require__("c757");

// CONCATENATED MODULE: ./src/layout/index.vue






/* normalize component */

var layout_component = Object(componentNormalizer["a" /* default */])(
  src_layoutvue_type_script_lang_js_,
  layoutvue_type_template_id_f219b70a_scoped_true_render,
  staticRenderFns,
  false,
  null,
  "f219b70a",
  null
  
)

/* harmony default export */ var layout = (layout_component.exports);
// CONCATENATED MODULE: ./src/router/index.js





 // import Home from '../views/Home.vue';

vue_common_default.a.use(vue_router_esm["a" /* default */]);
var routes = [{
  path: '/',
  // name: 'Home',
  component: layout,
  // redirect: '/home',
  children: [{
    path: '/',
    name: 'Home',
    component: function component() {
      return __webpack_require__.e(/* import() */ "chunk-6d6c6f43").then(__webpack_require__.bind(null, "16c0"));
    }
  }, {
    path: '/auction',
    name: 'Auction',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e("chunk-2d216626"), __webpack_require__.e("chunk-64d226fe")]).then(__webpack_require__.bind(null, "dd18"));
    }
  }, {
    path: '/auction/detail/:id',
    name: 'AuctionDetail',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e("chunk-2d216626"), __webpack_require__.e("chunk-5aa6424c")]).then(__webpack_require__.bind(null, "d0df"));
    }
  }, {
    path: '/mine',
    name: 'Mine',
    component: function component() {
      return __webpack_require__.e(/* import() */ "chunk-3b62e49e").then(__webpack_require__.bind(null, "70e8"));
    }
  }, {
    path: '/collection/create',
    name: 'CollectionCreate',
    component: function component() {
      return __webpack_require__.e(/* import() */ "chunk-da727af0").then(__webpack_require__.bind(null, "ba0b"));
    }
  }]
} // ...login,
];
var router = new vue_router_esm["a" /* default */]({
  mode: 'hash',
  routes: routes,
  scrollBehavior: function scrollBehavior() {
    var scrolls = document.getElementsByClassName('layout-content-scroll');
    if (scrolls.length > 0) scrolls[0].scrollTop = 0;
  }
}); // router.beforeEach((to, from, next) => {
//   // eslint-disable-next-line
//   if (to.meta.excludeLogin || __g_store__.state.user.isLogin) {
//     next();
//   } else {
//     next({
//       path: '/client/login',
//       replace: true,
//     });
//   }
// });

/* harmony default export */ var src_router = (router);
// EXTERNAL MODULE: ./node_modules/vuex-persistedstate/dist/vuex-persistedstate.es.js
var vuex_persistedstate_es = __webpack_require__("0e44");

// EXTERNAL MODULE: ./src/config/index.js + 3 modules
var src_config = __webpack_require__("f121");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// CONCATENATED MODULE: ./src/store/user.js



/* eslint-disable no-param-reassign */
// import {
//   login,
//   logout,
//   getUser,
// } from '@/api/login';
// import { removeToken, setToken } from '@/common/auth';
// import Cookies from 'js-cookie';
var user = {
  // namespaced: true,
  state: {
    address: '',
    chainId: '',
    isMetamask: false
  },
  mutations: {
    UPDATE_STATE: function UPDATE_STATE(state, payload) {
      Object.assign(state, payload);
    },
    RESET_STATE: function RESET_STATE(state) {
      Object.assign(state, {
        address: '',
        chainId: '',
        isMetamask: false
      });
    }
  },
  actions: {
    handleAccountsChanged: function handleAccountsChanged(_ref, accounts) {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var commit, chainId;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;

                if (!(accounts.length === 0)) {
                  _context.next = 5;
                  break;
                }

                // MetaMask is locked or the user has not connected any accounts
                console.log('Please connect to MetaMask.');
                _context.next = 11;
                break;

              case 5:
                if (!(accounts[0] !== _this.address)) {
                  _context.next = 11;
                  break;
                }

                console.log(accounts);
                _context.next = 9;
                return window.ethereum.request({
                  method: 'eth_chainId'
                });

              case 9:
                chainId = _context.sent;
                commit('UPDATE_STATE', {
                  address: accounts[0],
                  chainId: chainId
                }); // Do any other work!

              case 11:
                console.log(_this);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    unlockByMetaMask: function unlockByMetaMask(_ref2) {
      var dispatch = _ref2.dispatch;

      if (typeof window.ethereum === 'undefined') {
        throw Error('MetaMask is not installed!');
      }

      window.ethereum.request({
        method: 'eth_requestAccounts'
      }).then(function (accounts) {
        dispatch('handleAccountsChanged', accounts);
      }).catch(function (err) {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      });
    } // 获取用户信息
    // async GetUserInfo({ state, commit }) {
    //   const response = await getUser(state.token);
    //   commit('SET_IS_LOGIN', true);
    //   commit('SET_ACCOUNT', response.name);
    //   commit('SET_NAME', response.name);
    //   commit('SET_UID', response.id);
    //   response.resources = [];
    //   return response;
    // },
    // // 登出
    // async LogOut({ commit }) {
    //   await logout();
    //   commit('RESET_STATE');
    //   window.location.href = '/login';
    // },
    // LoginByUsername({ commit }, payload) {
    //   return new Promise((resolve, reject) => {
    //     login({
    //       username: payload.username,
    //       password: payload.password,
    //       // csrfmiddlewaretoken: Cookies.get('csrftoken'),
    //     })
    //       .then((response) => {
    //         commit('SET_IS_LOGIN', true);
    //         commit('SET_ACCOUNT', payload.username);
    //         commit('SET_NAME', payload.username);
    //         resolve(response);
    //         return null;
    //       })
    //       .catch((error) => {
    //         reject(error);
    //         return null;
    //       });
    //   });
    // },

  }
};
/* harmony default export */ var store_user = (user);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("ade3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/js-cookie/src/js.cookie.js
var js_cookie = __webpack_require__("a78e");

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__("4328");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/common/axios.js







 // import { Message, Loading } from 'element-ui';
// import { getCsrf } from '@/api/utils';

var BIZ_ERROR = 'BizError';
var instance = axios_default.a.create({
  baseURL: '/service',
  timeout: 30000
});
var loadingInstance;
instance.interceptors.request.use( /*#__PURE__*/function () {
  var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
    var __interceptorOptions__;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            __interceptorOptions__ = options.__interceptorOptions__;

            if (__interceptorOptions__ && __interceptorOptions__.loading) {// loadingInstance = Loading.service({
              //   fullscreen: true,
              // });
            }

            if (__interceptorOptions__ !== null && __interceptorOptions__ !== void 0 && __interceptorOptions__.encode && options.data) {
              // eslint-disable-next-line no-param-reassign
              options.data = lib_default.a.stringify(options.data);
            } // eslint-disable-next-line no-param-reassign
            // options.headers['X-CSRFToken'] = Cookies.get('csrftoken');


            return _context.abrupt("return", options);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

function outputError(error) {
  var _error$response = error.response,
      response = _error$response === void 0 ? {} : _error$response; // eslint-disable-next-line no-console

  console.error('%s\n url: %s\n method: %s\n params: %s\n response: %s', error.message, response.config.url, response.config.method, JSON.stringify(response.config.data || response.config.params || null), JSON.stringify(response.data));
}

instance.interceptors.response.use(function (response) {
  if (loadingInstance) {
    loadingInstance.close();
  }

  var result = response.data;
  var __interceptorOptions__ = response.config.__interceptorOptions__; // 符合约定接口格式

  if (result.Code != null && result.Message != null) {
    if (result.Code === 0) {
      return result.data;
    }

    var error = new Error("Request failed with biz status code ".concat(result.Code).concat(result.Message ? ", ".concat(result.Message) : ''));
    error.name = BIZ_ERROR;
    error.response = response; // 104 105为后端限制聊天条数特殊定制

    if ((__interceptorOptions__ === null || __interceptorOptions__ === void 0 ? void 0 : __interceptorOptions__.hideMsg) !== true) {// Message.error({
      //   message: result.Message || ' 未知错误',
      //   customClass: 'messager',
      // });
    }

    if (false) {}

    return Promise.reject(error);
  }

  return result;
}, function (error) {
  var _response$data, _config$__interceptor;

  // console.dir(error);
  if (false) {}

  if (loadingInstance) {
    loadingInstance.close();
  }

  var config = error.config,
      response = error.response;

  if (response.status === 401 && (response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.Code) === 2) {
    window.location.href = '/login';
  } // eslint-disable-next-line no-underscore-dangle


  if ((config === null || config === void 0 ? void 0 : (_config$__interceptor = config.__interceptorOptions__) === null || _config$__interceptor === void 0 ? void 0 : _config$__interceptor.hideMsg) !== true) {// Message.error({
    //   message: response?.data?.Message || response.statusText || ' 未知错误',
    //   customClass: 'messager',
    // });
  }

  return Promise.reject(error);
});
/* harmony default export */ var common_axios = (instance);
// CONCATENATED MODULE: ./src/store/enums/staticEnums/index.js
var staticEnums = {
  // yes or no
  yesOrNo: [{
    value: 0,
    label: '否'
  }, {
    value: 1,
    label: '是'
  }],
  // 启用禁用
  onOrOff: [{
    value: false,
    label: '停用'
  }, {
    value: true,
    label: '启用'
  }],
  valueType: [{
    value: 'FLOAT',
    label: '浮点数'
  }, {
    value: 'INT',
    label: '整数'
  }, {
    value: 'BOOLEAN',
    label: '布尔型'
  }, {
    value: 'STRING',
    label: '字符串'
  }, {
    value: 'ENUM',
    label: '枚举类型'
  }]
};
/* harmony default export */ var enums_staticEnums = (staticEnums);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__("3835");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/lodash.mapvalues/index.js
var lodash_mapvalues = __webpack_require__("ebd5");
var lodash_mapvalues_default = /*#__PURE__*/__webpack_require__.n(lodash_mapvalues);

// CONCATENATED MODULE: ./src/store/enums/asyncEnums/index.js







/* eslint-disable guard-for-in */

/* eslint-disable no-restricted-syntax */
 // 异步枚举获取配置

var enumsConfig = {
  // deviceCollectors: {
  //   url: '/device/adaptor/list',
  //   init: true,
  //   method: 'GET',
  //   responseIntercepter: data => data.map(item => ({
  //     label: item.name,
  //     value: item.id,
  //     original: item,
  //   })),
  // },
  deviceTemplates: {
    url: '/device/template/list',
    init: true,
    method: 'GET',
    responseIntercepter: function responseIntercepter(data) {
      return data.map(function (item) {
        for (var key in item.data_points) {
          var point = item.data_points[key];

          if (point.type === 'ENUM' && point.enum) {
            (function () {
              var enumList = point.enum.split('\n');
              var enumData = {};
              enumList.forEach(function (enumItem) {
                var _enumItem$split = enumItem.split(':'),
                    _enumItem$split2 = Object(slicedToArray["a" /* default */])(_enumItem$split, 2),
                    label = _enumItem$split2[0],
                    value = _enumItem$split2[1];

                enumData[value] = label;
              });
              point.enum = enumData;
            })();
          }
        }

        return {
          label: item.name,
          value: item.id,
          original: item
        };
      });
    }
  },
  stations: {
    url: '/station/list',
    init: true,
    method: 'GET',
    responseIntercepter: function responseIntercepter(data) {
      return data.map(function (item) {
        return {
          label: item.name,
          value: item.id,
          original: item
        };
      });
    }
  }
};
var asyncEnums = lodash_mapvalues_default()(enumsConfig, function () {
  return [];
});

// CONCATENATED MODULE: ./src/store/enums/index.js








var enums = {
  namespaced: 'enums',
  state: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, enums_staticEnums), asyncEnums),
  mutations: {
    SET_ENUM_STATE: function SET_ENUM_STATE(state, resEnums) {
      Object.assign(state, resEnums);
    }
  },
  actions: {
    /**
     * 获取选项数据
     */
    FetchEnum: function FetchEnum(_ref, _ref2) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var commit, name, params, config, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                name = _ref2.name, params = _ref2.params;
                config = enumsConfig[name];

                if (!config) {
                  _context.next = 16;
                  break;
                }

                _context.prev = 4;
                _context.next = 7;
                return common_axios({
                  url: config.url,
                  method: config.method || 'GET',
                  data: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, config.params), params),
                  hideMessage: true
                });

              case 7:
                data = _context.sent;
                commit('SET_ENUM_STATE', Object(defineProperty["a" /* default */])({}, name, config.responseIntercepter(data)));
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](4);
                console.error("\n            \u83B7\u53D6\u679A\u4E3E\u6570\u636E".concat(name, "\u5931\u8D25\u3002\n          "));

              case 14:
                _context.next = 17;
                break;

              case 16:
                if (Object({"NODE_ENV":"production","BASE_URL":"/"}).BUILD_ENV === 'development') {
                  // eslint-disable-next-line
                  console.error("\n          \u627E\u4E0D\u5230\u540D\u79F0\u4E3A".concat(name, "\u7684\u679A\u4E3E\u914D\u7F6E\u9879\uFF0C\u65E0\u6CD5\u901A\u8FC7name\u83B7\u53D6\u679A\u4E3E\u6570\u636E\u3002\n        "));
                }

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 11]]);
      }))();
    }
  }
};
/* harmony default export */ var store_enums = (enums);
// CONCATENATED MODULE: ./src/store/getters.js


/**
 * 全局getter
 */
var getters = {
  name: function name(state) {
    return state.user.name;
  }
};
/* harmony default export */ var store_getters = (getters);
// CONCATENATED MODULE: ./src/store/index.js







vue_common_default.a.use(vuex_esm["a" /* default */]);
/* harmony default export */ var store = (new vuex_esm["a" /* default */].Store({
  plugins: [Object(vuex_persistedstate_es["a" /* default */])({
    storage: window.localStorage,
    key: "vuex_".concat(src_config["a" /* default */].storeVersion),
    paths: ['user.isLogin']
  })],
  modules: {
    user: store_user,
    enums: store_enums
  },
  state: {},
  getters: store_getters,
  mutations: {},
  actions: {
    showComingSoon: function showComingSoon() {
      __g_root__.$bvToast.toast('Coming soon...', {
        title: 'Notice',
        // toaster: 'b-toaster-top-center',
        autoHideDelay: 5000
      });
    }
  }
})); // import app from './app';
// import user from './user';
// import station from './station';
// import permission from './permission';
// import tagsView from './tagsView';
// import enums from './enums';
// import settings from './settings';
// import getters from './getters';
// Vue.use(Vuex);
// export default new Vuex.Store({
//   plugins: [
//     createPersistedState({
//       storage: window.localStorage,
//       key: `vuex_${config.storeVersion}`,
//       paths: ['user.isLogin', 'station.selectStation'],
//     }),
//   ],
//   modules: {
//     app,
//     user,
//     station,
//     permission,
//     enums,
//     tagsView,
//     settings,
//   },
//   getters,
//   strict: false,
// });
// EXTERNAL MODULE: ./src/styles/theme-overrides/index.scss
var theme_overrides = __webpack_require__("b38f");

// CONCATENATED MODULE: ./src/main.js








 // import Account from '@/eth/Account';




 // Make BootstrapVue available throughout your project

vue_common_default.a.use(esm["a" /* BootstrapVue */]); // Optionally install the BootstrapVue icon components plugin

vue_common_default.a.use(icons_plugin["a" /* IconsPlugin */]);
vue_common_default.a.use(vue_composition_api_esm["b" /* default */]);
vue_common_default.a.component('v-charts', index_esm_min["a" /* default */]);
vue_common_default.a.config.productionTip = false;
window.__g_store__ = store;
window.__g_router__ = src_router; // window.__g_account__ = new Account();
// Vue.prototype.$account = window.__g_account__;

if (window.ethereum) {
  window.ethereum.on('chainChanged', function () {
    window.location.reload();
  }); // For now, 'eth_accounts' will continue to always return an array

  window.ethereum.request({
    method: 'eth_accounts'
  }).then(function (accounts) {
    store.dispatch('handleAccountsChanged', accounts);
  }).catch(function (err) {
    // Some unexpected error.
    // For backwards compatibility reasons, if no accounts are available,
    // eth_accounts will return an empty array.
    console.error(err);
  }); // Note that this event is emitted on page load.
  // If the array of accounts is non-empty, you're already
  // connected.

  window.ethereum.on('accountsChanged', function (accounts) {
    store.dispatch('handleAccountsChanged', accounts);
  });
} // eslint-disable-next-line no-underscore-dangle


window.__g_root__ = new vue_common_default.a({
  router: src_router,
  store: store,
  render: function render(h) {
    return h(App["default"]);
  }
}).$mount('#app'); // __g_root__.$bvToast.toast(`提示`, {
//   title: 'BootstrapVue Toast',
//   autoHideDelay: 5000,
// })

/***/ }),

/***/ "5c0b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9c0c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "65f9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "67f3":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABCCAQAAABEQ7gkAAAHXUlEQVQYGeXBeVBUhx0H8J/EI151tB5pNFbGeLTVaTJpoxknatOOPWynts44o9M4ndRhOqamTUnVqm2eqAgYFkRkNUBAQJDlHHBBYbmWUxBFBA/kUFhxFwRRdjn2+tZ5+94b3x7s21XjH/186FU54Zvhf/XiE1hhRWEyvQrHfDN21hVqzRDoQd8uxRs5Wyuyu4dg5yHo2xI1M31rXYb2kQnOlF+gl082OXVL9dnOfhNcsSDhd/QyMVOSNlTJ72pNsGfBw4fqhF4dWO0d9LIwExN+WSC/ozHCUc9wdX72juDpR9/VD4GVdYhehuj1eRF3WobhSGepUyk/jV9MrPJ8sAZxaAm9WKlryo42NhngqA+XSgv+mbycBMyiAdjUltCLk/IT1cGmawNwNIDrl9IORP6I7KT/F5zT2+hFiFuZs+/q5cdwNIjGxpyDMe+SU7c6wdL0yybT84lcmra7oaIfjgbRdKMg6MwH5FL8Bgtsck+Q90IWp35Wr+qFIz1aWkpD49aTG8XZYI3g+AryhmLhhR3q/AdGOBjGvbaKqJSfMz7kVsScPiNY9ZfJUwlzFR9XZeueWGHPjLbugpiojYrJJFGSPzgJfyXpTs9I3lqj0Dwyw54FHQ/LziZuZr5DHrneDJZ26NhUkoKZkri5/ExHvwn2LNDoqxRJ24Knk8dCV5tgU5xE7jCvJ/ym6JvWB2bYs0Krr805t10+l7x0MR4sI8I+INcUr0X8QnmytcMIRz0jtflZfkkL6DkEzdAOgdV8g1wJnn4xUHNDD0c91uqSi36Kt0mimLeVx3P2HZtKDjJ2gHP27+Tcrkl1NXDQh4byjN3hy8gDx3/Wa8BT9WrFa2SnvhasPsuR75FzXy2HiAFNddn7IpeSh8I2GqzgHJ5PImE/0MOmMp1c2T29Vw+OGZmhJ94kL8i2DILXdX/XJBLJDQHLivC15FrYpkHYWFGVyfiQx078aQS8HmPoahKRTe7qBav1No3tGz89eA23mNnkkdOfGsDT6gPWkJ2EbeBkHiR34j8fBq/u6hdTSbJ4/yHwOvsD3iMHVSVgPbEGLST3kveawKu+5DeBJEnaPwKeRndiOTkIWTIIm4oCkibjSzN4laUkQWqAEbzb96N9yYm0I+DEbiapLhyEQH2e3MgMMYPX3BGxgJxgfNo0YLX3MD4kXV4QBEUpNIa8CCt4DbfC55FTMRstsFGGkmeyTkJQnUgulJyC4PK1r2aTC9W5YBkQuJw8pUyA4GIsOaGMg6C69uhMcuHIvD4rWFeqyBv5aRDkRpGdAgUEFRXMNHIpcw84cX8m7xQqwbEiPZSeUXwegjKV3wQaQ9MdsLofM9PIW2Wl4FhwLphYuyaVFUGgyqExRa0zwaZQTt5jxlfVgGPGmS+JmImVlRDkp5AbhUlgjSJyFT0P2eTaenCMiN2nzofgfCy5EfhdrQGsq1foeclmNTTBibJIcit5Jzgpn5EnmFlxPyUHEXOaW2EnL5gkuF4Plm7k6EySLn2TRjeMppqghWRHPvfuXQieGBP/RhLI3h+BjSqJpIvdPgqb3KPkIOSNe53gDAyHvUMSFJ4Gy4hTa0kq5Q4TeCWHyQn/73fpwBk0Jq4nN5gp9x+D1dxCUsXsNIF3r/PwfBI55hu2iJ76z8r7enB05ugPaUzx28HJ3kvSJP4Lgo4HzCISyQvQGXT6vD30VMCqB6PgdA9HrqIx1FWCNYDgN0mKFAaC23f3zyeR4kiwrPh6KT0Vsq7HAs69wdAfkwuHlhhgo84lKbJCIbh+w382iZTGQnD8PWKF/KoPvLbHwcvIqfMysKyI2kjuZUdAcLt2zwwSUaVAoMokgewP/eDd7ju0mByN69CC1aqhceQeBA2Vca/TMxif4gwI1EpmPD0jatsAeDe79r9FdqL/CE5aIEkBTm0JM5FE1EUQqNLIQexf9OA13mJmkUhVHliDCF9GUtztByyozMU4Eqkpg6A6jpxK2jkC3pVrzBQSBC18YgGrspSkCV6gDlR8TCJ7Z9aVQ1AgJ5fS/mEEr67ObwJxUg+Ak7iVvHVk3pUWCNRhNKa8LyCoLSEW43OnHaz2PmYieSd8YWM7OFacP0ZuJe+H4IqSngr7tRk2F8LIO2GLbt0Dx4qsABI5OW3go/Ql5CA1GIKaLKKiaLAMkK8gb0T7treBY0bybhIJWdPaYcLD0VO/JwfZMghKlZ1dYDVUkze+XtqtBWcUCZ+TSNh63ShYXZfJCeUZOIj5hDwXsFL7CJwhRPuTSNSmXvAa1eRUngIiPcNBM8hTgT/UDYEzDPknJBK7eQC8AYSvJRdUOXhGfhx57loxOAZEbiGRxC2D4PWa5R/RGEqLwLEgYjV57k49WP0I/y2JZGwzgKc1yj6kMTE+VSqwrjaQN+Qf9T4GerpObiCRgh3D4D3oD36f3GLGF0Xfx83mIyvIOxELItbFTieRc9uN4Gn6mKUkkcIX4+jFkS/qBq9Nc2AZvSpn3zHA5mbL/rfo1WHGF8WZYEZT+b/n0P+P/wFV5iS7OEQqqgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "95d2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footerbar_vue_vue_type_style_index_0_id_6b969c2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dc96");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footerbar_vue_vue_type_style_index_0_id_6b969c2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footerbar_vue_vue_type_style_index_0_id_6b969c2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9c0c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a5ed":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "client/img/logo@2x.b85850b5.png";

/***/ }),

/***/ "b38f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c757":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f219b70a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("65f9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f219b70a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f219b70a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d56b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestNews_vue_vue_type_style_index_0_id_750ead50_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("015a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestNews_vue_vue_type_style_index_0_id_750ead50_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestNews_vue_vue_type_style_index_0_id_750ead50_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "db13":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAilBMVEUAAAAA1VAA11AA108A11AA51IA11AA108A11AA2FAA2VMA2FAA11AA11AA11AA11AA11EA2FAA2FAA11AA2FAA11AA2E8A2E4A2VAA1lAA11AA2FAA11AA108A2FAA2FAA11AA2FAA2E8A11AA11IA2E4A1FIA11AA2E8A11AA2FAA11AA1U8A11AvZGwYAAAALXRSTlMACuPnSgP795gcBvHqyLTUrmIpgHBFNRoV3NvOqZOPiXleVVExIBHsupxtpT3q3XqmAAABa0lEQVQ4y3VTWZaDMAxzCimUlgJd6b6vM9z/ehMZOjV+RF9YKIkVKySRXF6bRzXK8veSPDCzXvVBFN86NYtVJREVHZpLVCnEVmvmrBnu5yWZxTFj1U5pyhGvvTelPQ1Rn9uil6P6sosJTARGagZ9R01J4gpqJpmjI9YJtXBw3EYST70Ku6OruyACV09IARZ/RY3zjRaNHXkR9dAnCkW9dvVCi3AJV1FvXX1QmisGKB2fMJKyLcodl0vCYCpjS2odWhKYgdqK3gsYTqkFm0K1/jSf/HCk9NUtOZWPZq93BRx1dOOK0WR7ykV/107BptZsP/tmdZ3d2uGBvfm3x/DJVDD534c1K0gEwhXY3qCxws5yQwomB58m3y5j6gC7mfJh0fe2FSyCEOHAnfsYldSJe1BP3iBLBXlQYPKGzrBgfSIL42dubk9e7NlUqhKhEHIYkKSBX3SDLX4oiV9kMGg8uYD8qP+HQS8kP/j/Hy7NOjwejuATAAAAAElFTkSuQmCC"

/***/ }),

/***/ "dc96":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e5cd":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAvVBMVEUAAAAA/wAA/4AA1VUA32AA3VUA1VUA2E4A1UwA11AA2VMA11EA11AA2FEA2VAA1lEA11AA2FEA11AA1lAA11AA108A2FEA11AA2FEA1k8A2FAA1k8A11EA11AA2FAA1lAA2FEA11EA2FAA108A11AA108A1lAA11AA108A11AA11EA1lAA11AA11AA11AA11AA11AA11AA11AA11AA11AA11AA11AA11AA11AA11AA11AA11AA11AA11AA11AqAWsBAAAAPnRSTlMAAQIGCA8YGh4gKD9ASElYYGJtcHN0dXl7hImKi4yVlpueoqSlp6mttMDBydDS1eXo6err7e7w8fb4+fr7/QNBokIAAADASURBVDjL7ZTHFoIwFAWvBbuoYO8dsHew3f//LBdCMOiRvcdZTiYneZsHZXqhYGtkASBn7H13mSgYUaYfiw0Caogz7ycPmyTHE5K0hbzTAbmAINl53m0lfLcg5QiokKT2aj5E0RW5jIREaJINhEU6qf+jH46KZCE0ive68dDojX/kRmtdoKWeB2nNd2sSe2mBbDIAkNlJcouqvGactqq2HdmVgZJpecxunr8KZ5nFwCdV9/Fd/tsoSn1+PMxrimwfBAth3GbMQtAAAAAASUVORK5CYII="

/***/ }),

/***/ "f121":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/config/config.dev.js
/* harmony default export */ var config_dev = ({
  // webUrl: 'http://47.75.74.35:8000',
  // defaultPricePrecision: 8,
  // defaultAmountPrecision: 4,
  // defaultExpireTime: 3600 * 24 * 365 * 10, // 秒
  // defaultGasPrice: 8,
  // defaultGasLimit: '0x186a0',
  // loopInterval: 30000,
  // localStorageVersion: '201901011200',
  // approveAllowance: '0xf000000000000000000000000000000000000000000000000000000000000000',
  // minAllowance: 10 ** 30,
  // appId: '1234567',
  // gethServer: 'https://mainnet.infura.io/v3/6ef437a0bfc743d0bbfe73f72c90afd4', 主网
  // chainId: 1,
  gethServer: 'https://kovan.infura.io/v3/6ef437a0bfc743d0bbfe73f72c90afd4',
  chainId: 42,
  addressZero: '0x0000000000000000000000000000000000000000',
  hashZero: '0x0000000000000000000000000000000000000000000000000000000000000000',
  // 本地测试节点
  // defaultServer: 'https://api-sandbox.i.ddex.io',
  // webSocketServer: 'https://ws-sandbox.i.ddex.io',
  // gethServer: 'http://0.0.0.0:8545',
  // hydroExchangeAddress: '0x5c0286bef1434b07202a5ae3de38e66130d5280d',
  // hydroProxyAddress: '0x04f67e8b7c39a25e100847cb167460d715215feb',
  // chainId: 1,
  // fundraisingToken: 'CER',
  // appDownload: '这是下载二维码',
  appDownload: '这是下载二维码',
  // NFTAuction: '0x6d03BA00b24c7126ddFDB0150851ed21e2426725',
  // NFTFactory: '0x6Ea4576B88013434FCC24A6af123a681eeE7a324',
  // coinBid: '0x2903Ac373a4680874500faA8e25658ba67D539Ad',
  // coinbidCreation: '0xd862D3465436Ac9c14EcCdD691f1B75F542F43Af',
  // mining: '0xC50874e61E8ECd7157468EBD7F6315A0d7C519C7',
  // canvasAuction: '0xF70E2eCE0f88301F6d462A2646e9121F53aE35ad',
  NFTAuction: '0xA0755CA6348b1AB5739fb7d6fAFF3e66B7E259A9',
  NFTFactory: '0x43C6a81B2A5297b21EF64c40f8135c6db5870B7B',
  coinBid: '0x61D2D5288ebF9Ea0D45F372C3Da982b199359427',
  coinbidCreation: '0x7dd33ea76fF9c4454234f4f77e58A0AF7D404A0F',
  mining: '0xe7534267Ff5D391f08EBF36b525A321b90e0f630',
  canvasAuction: '0x4e7C740AEE52D9135F1e634625a7fB798F272a77' // CoinBid			0x61D2D5288ebF9Ea0D45F372C3Da982b199359427
  // CoinBidCreation		0x7dd33ea76fF9c4454234f4f77e58A0AF7D404A0F
  // NFTFactory		0x43C6a81B2A5297b21EF64c40f8135c6db5870B7B
  // Mining			0xe7534267Ff5D391f08EBF36b525A321b90e0f630
  // CanvasAuction		0x4e7C740AEE52D9135F1e634625a7fB798F272a77
  // NFTAuction		0xA0755CA6348b1AB5739fb7d6fAFF3e66B7E259A9

});
// CONCATENATED MODULE: ./src/config/config.test.js
/* harmony default export */ var config_test = ({
  // webUrl: 'http://47.75.74.35:8000',
  // defaultPricePrecision: 8,
  // defaultAmountPrecision: 4,
  // defaultExpireTime: 3600 * 24 * 365 * 10, // 秒
  // defaultGasPrice: 8,
  // defaultGasLimit: '0x186a0',
  // loopInterval: 30000,
  // localStorageVersion: '201901011200',
  // approveAllowance: '0xf000000000000000000000000000000000000000000000000000000000000000',
  // minAllowance: 10 ** 30,
  // appId: '1234567',
  // gethServer: 'https://mainnet.infura.io/v3/6ef437a0bfc743d0bbfe73f72c90afd4', 主网
  // chainId: 1,
  gethServer: 'https://kovan.infura.io/v3/6ef437a0bfc743d0bbfe73f72c90afd4',
  chainId: 42,
  addressZero: '0x0000000000000000000000000000000000000000',
  hashZero: '0x0000000000000000000000000000000000000000000000000000000000000000',
  // 本地测试节点
  // defaultServer: 'https://api-sandbox.i.ddex.io',
  // webSocketServer: 'https://ws-sandbox.i.ddex.io',
  // gethServer: 'http://0.0.0.0:8545',
  // hydroExchangeAddress: '0x5c0286bef1434b07202a5ae3de38e66130d5280d',
  // hydroProxyAddress: '0x04f67e8b7c39a25e100847cb167460d715215feb',
  // chainId: 1,
  // fundraisingToken: 'CER',
  // appDownload: '这是下载二维码',
  appDownload: '这是下载二维码',
  // NFTAuction: '0x6d03BA00b24c7126ddFDB0150851ed21e2426725',
  // NFTFactory: '0x6Ea4576B88013434FCC24A6af123a681eeE7a324',
  // coinBid: '0x2903Ac373a4680874500faA8e25658ba67D539Ad',
  // coinbidCreation: '0xd862D3465436Ac9c14EcCdD691f1B75F542F43Af',
  // mining: '0xC50874e61E8ECd7157468EBD7F6315A0d7C519C7',
  // canvasAuction: '0xF70E2eCE0f88301F6d462A2646e9121F53aE35ad',
  NFTAuction: '0xA0755CA6348b1AB5739fb7d6fAFF3e66B7E259A9',
  NFTFactory: '0x43C6a81B2A5297b21EF64c40f8135c6db5870B7B',
  coinBid: '0x61D2D5288ebF9Ea0D45F372C3Da982b199359427',
  coinbidCreation: '0x7dd33ea76fF9c4454234f4f77e58A0AF7D404A0F',
  mining: '0xe7534267Ff5D391f08EBF36b525A321b90e0f630',
  canvasAuction: '0x4e7C740AEE52D9135F1e634625a7fB798F272a77' // CoinBid			0x61D2D5288ebF9Ea0D45F372C3Da982b199359427
  // CoinBidCreation		0x7dd33ea76fF9c4454234f4f77e58A0AF7D404A0F
  // NFTFactory		0x43C6a81B2A5297b21EF64c40f8135c6db5870B7B
  // Mining			0xe7534267Ff5D391f08EBF36b525A321b90e0f630
  // CanvasAuction		0x4e7C740AEE52D9135F1e634625a7fB798F272a77
  // NFTAuction		0xA0755CA6348b1AB5739fb7d6fAFF3e66B7E259A9

});
// CONCATENATED MODULE: ./src/config/config.prod.js
/* harmony default export */ var config_prod = ({
  // webUrl: 'http://47.75.74.35:8000',
  // defaultPricePrecision: 8,
  // defaultAmountPrecision: 4,
  // defaultExpireTime: 3600 * 24 * 365 * 10, // 秒
  // defaultGasPrice: 8,
  // defaultGasLimit: '0x186a0',
  // loopInterval: 30000,
  // localStorageVersion: '201901011200',
  // approveAllowance: '0xf000000000000000000000000000000000000000000000000000000000000000',
  // minAllowance: 10 ** 30,
  // appId: '1234567',
  // gethServer: 'https://mainnet.infura.io/v3/6ef437a0bfc743d0bbfe73f72c90afd4', 主网
  // chainId: 1,
  gethServer: 'https://kovan.infura.io/v3/6ef437a0bfc743d0bbfe73f72c90afd4',
  chainId: 42,
  addressZero: '0x0000000000000000000000000000000000000000',
  hashZero: '0x0000000000000000000000000000000000000000000000000000000000000000',
  // 本地测试节点
  // defaultServer: 'https://api-sandbox.i.ddex.io',
  // webSocketServer: 'https://ws-sandbox.i.ddex.io',
  // gethServer: 'http://0.0.0.0:8545',
  // hydroExchangeAddress: '0x5c0286bef1434b07202a5ae3de38e66130d5280d',
  // hydroProxyAddress: '0x04f67e8b7c39a25e100847cb167460d715215feb',
  // chainId: 1,
  // fundraisingToken: 'CER',
  // appDownload: '这是下载二维码',
  appDownload: '这是下载二维码',
  // NFTAuction: '0x6d03BA00b24c7126ddFDB0150851ed21e2426725',
  // NFTFactory: '0x6Ea4576B88013434FCC24A6af123a681eeE7a324',
  // coinBid: '0x2903Ac373a4680874500faA8e25658ba67D539Ad',
  // coinbidCreation: '0xd862D3465436Ac9c14EcCdD691f1B75F542F43Af',
  // mining: '0xC50874e61E8ECd7157468EBD7F6315A0d7C519C7',
  // canvasAuction: '0xF70E2eCE0f88301F6d462A2646e9121F53aE35ad',
  NFTAuction: '0xA0755CA6348b1AB5739fb7d6fAFF3e66B7E259A9',
  NFTFactory: '0x43C6a81B2A5297b21EF64c40f8135c6db5870B7B',
  coinBid: '0x61D2D5288ebF9Ea0D45F372C3Da982b199359427',
  coinbidCreation: '0x7dd33ea76fF9c4454234f4f77e58A0AF7D404A0F',
  mining: '0xe7534267Ff5D391f08EBF36b525A321b90e0f630',
  canvasAuction: '0x4e7C740AEE52D9135F1e634625a7fB798F272a77' // CoinBid			0x61D2D5288ebF9Ea0D45F372C3Da982b199359427
  // CoinBidCreation		0x7dd33ea76fF9c4454234f4f77e58A0AF7D404A0F
  // NFTFactory		0x43C6a81B2A5297b21EF64c40f8135c6db5870B7B
  // Mining			0xe7534267Ff5D391f08EBF36b525A321b90e0f630
  // CanvasAuction		0x4e7C740AEE52D9135F1e634625a7fB798F272a77
  // NFTAuction		0xA0755CA6348b1AB5739fb7d6fAFF3e66B7E259A9

});
// CONCATENATED MODULE: ./src/config/index.js
/* eslint-disable */

/**
 * 不同环境载入不同配置文件
 * @todo 按需加载配置文件
 */



var config = {};

if (false) {} else if (false) {} else {
  config = config_prod;
}

/* harmony default export */ var src_config = __webpack_exports__["a"] = (config);

/***/ }),

/***/ "f1ea":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });