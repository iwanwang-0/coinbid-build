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
/******/ 		return __webpack_require__.p + "client/js/" + ({}[chunkId]||chunkId) + "." + {"chunk-2d216626":"5338d9f4","chunk-4a7363ac":"31213270","chunk-5aa6424c":"30ae1f93","chunk-3b62e49e":"c6daf911","chunk-40d50afb":"0d643cb5","chunk-da727af0":"9f0f437c"}[chunkId] + ".js"
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
/******/ 		var cssChunks = {"chunk-4a7363ac":1,"chunk-5aa6424c":1,"chunk-3b62e49e":1,"chunk-40d50afb":1,"chunk-da727af0":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "client/css/" + ({}[chunkId]||chunkId) + "." + {"chunk-2d216626":"31d6cfe0","chunk-4a7363ac":"b6a1234d","chunk-5aa6424c":"6071bcf1","chunk-3b62e49e":"8e2b96ac","chunk-40d50afb":"00314bd8","chunk-da727af0":"fa4df901"}[chunkId] + ".css";
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

/***/ 10:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1243":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {// Schema Help： https://github.com/yiminghe/async-validator
// required: value should be not empty eg: null, undefined, ''
var basicSchemas = {
  STRING: {
    type: "string",
    required: true
  },
  OPTION_NUMBER: {
    validator: function validator(rule, value, cb) {
      if (value) {
        if (typeof value === "number") {
          cb();
        } else {
          cb("page number valid");
        }
      } else {
        cb();
      }
    }
  },
  URL: {
    type: "url",
    required: true
  },
  ADDRESS: {
    type: "string",
    required: true,
    pattern: /^0x[0-9a-fA-F]{40}$/g
  },
  HEX: {
    type: "string",
    required: true,
    pattern: /^0x[0-9a-fA-F]+$/g
  },
  ETH_DATA: {
    type: "string",
    required: true,
    pattern: /^0x[0-9a-fA-F]{1,64}$/g
  },
  QUANTITY: {
    type: "string",
    required: true
  },
  PRIVATE_KEY: {
    type: "string",
    required: true,
    len: 64
  },
  TX_HASH: {
    type: "string",
    required: true,
    pattern: /^0x[0-9a-fA-F]{64}$/g
  },
  ABI_METHOD: {
    type: "enum",
    required: true,
    enum: ["cancelOrder", "cancelAllOrders", "cancelOrdersByTokenPairs", "approve", "deposit", "withdraw", "transfer", "balanceOf", "allowance", "symbol", "name", "decimals", "bind", "unbind", "getBindingAddress"]
  },
  RPC_TAG: {
    type: "enum",
    required: true,
    enum: ["latest", "earliest", "pending"]
  },
  TIMESTAMP: {
    type: "string"
  },
  PROJECT_ID: {
    type: "number",
    required: true,
    min: 1
  },
  LOOPRING_TOKEN: {
    type: "enum",
    required: true,
    enum: ["LRC", "LRN", "LRQ"]
  },
  PRIVATE_KEY_BUFFER: {
    validator: function validator(rule, value, cb) {
      if (value instanceof Buffer && value.length === 32) {
        cb();
      } else {
        cb("private_key must be buffer");
      }
    }
  },
  CURRENCY: {
    type: "string",
    required: true,
    enum: ["USD", "CNY"]
  },
  DEFAULT_BLOCK: {
    type: "string",
    required: true,
    enum: ["earliest", "latest", "pending"]
  }
};
/* harmony default export */ __webpack_exports__["a"] = (basicSchemas);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("b639").Buffer))

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 17:
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

/***/ "1af2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decryptKeystoreToPkey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pkeyToKeystore; });
/* unused harmony export decryptUtcKeystoreToPkey */
/* unused harmony export determineKeystoreType */
/* unused harmony export decryptPresaleToPrivKey */
/* unused harmony export decryptMewV1ToPrivKey */
/* unused harmony export isKeystorePassRequired */
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("25f0");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("fb6a");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("99af");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("1c46");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _decrypt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3518");
/* harmony import */ var ethereumjs_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("b671");
/* harmony import */ var ethereumjs_util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var scryptsy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("fdc3");
/* harmony import */ var scryptsy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(scryptsy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("11c1");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_8__);





/*

  MIT License

  Copyright (c) 2016 MyEtherWallet

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

*/





var kdf = 'scrypt';
function decryptKeystoreToPkey(keystore, password) {
  var wallet;
  var parsed = JSON.parse(keystore);

  switch (determineKeystoreType(keystore)) {
    case 'presale':
      wallet = decryptPresaleToPrivKey(keystore, password);
      break;

    case 'v1-unencrypted':
      wallet = Buffer.from(parsed.private, 'hex');
      break;

    case 'v1-encrypted':
      wallet = decryptMewV1ToPrivKey(keystore, password);
      break;

    case 'v2-unencrypted':
      wallet = Buffer.from(parsed.privKey, 'hex');
      break;

    case 'v2-v3-utc':
      wallet = decryptUtcKeystoreToPkey(keystore, password);
      break;

    default:
      return new Error('unrecognized type of keystore');
  }

  return wallet;
}
function pkeyToKeystore(privateKey, password) {
  var salt = Object(crypto__WEBPACK_IMPORTED_MODULE_4__["randomBytes"])(32);
  var iv = Object(crypto__WEBPACK_IMPORTED_MODULE_4__["randomBytes"])(16);
  var kdfparams = {
    dklen: 32,
    salt: salt.toString('hex')
  };
  kdfparams.n = 1024;
  kdfparams.r = 8;
  kdfparams.p = 1;
  var derivedKey = scryptsy__WEBPACK_IMPORTED_MODULE_7___default()(Buffer.from(password), salt, kdfparams.n, kdfparams.r, kdfparams.p, kdfparams.dklen);
  var cipher = Object(crypto__WEBPACK_IMPORTED_MODULE_4__["createCipheriv"])('aes-128-ctr', derivedKey.slice(0, 16), iv);

  if (!cipher) {
    throw new Error('Unsupported cipher');
  }

  var ciphertext = Buffer.concat([cipher.update(privateKey), cipher.final()]);
  var mac = Object(ethereumjs_util__WEBPACK_IMPORTED_MODULE_6__["sha3"])(Buffer.concat([derivedKey.slice(16, 32), Buffer.from(ciphertext, 'hex')]));
  var address = Object(ethereumjs_util__WEBPACK_IMPORTED_MODULE_6__["privateToAddress"])(privateKey).toString('hex');
  return {
    version: 3,
    id: uuid__WEBPACK_IMPORTED_MODULE_8___default.a.v4({
      random: Object(crypto__WEBPACK_IMPORTED_MODULE_4__["randomBytes"])(16)
    }),
    address: address,
    Crypto: {
      ciphertext: ciphertext.toString('hex'),
      cipherparams: {
        iv: iv.toString('hex')
      },
      cipher: 'aes-128-ctr',
      kdf: kdf,
      kdfparams: kdfparams,
      mac: mac.toString('hex')
    }
  };
}
function decryptUtcKeystoreToPkey(keystore, password) {
  var kstore = JSON.parse(keystore.toLowerCase());

  if (kstore.version !== 3) {
    throw new Error('Not a V3 wallet');
  }

  var derivedKey, kdfparams;

  if (kstore.crypto.kdf === 'scrypt') {
    kdfparams = kstore.crypto.kdfparams;
    derivedKey = scryptsy__WEBPACK_IMPORTED_MODULE_7___default()(Buffer.from(password), Buffer.from(kdfparams.salt, 'hex'), kdfparams.n, kdfparams.r, kdfparams.p, kdfparams.dklen);
  } else if (kstore.crypto.kdf === 'pbkdf2') {
    kdfparams = kstore.crypto.kdfparams;

    if (kdfparams.prf !== 'hmac-sha256') {
      throw new Error('Unsupported parameters to PBKDF2');
    }

    derivedKey = Object(crypto__WEBPACK_IMPORTED_MODULE_4__["pbkdf2Sync"])(Buffer.from(password), Buffer.from(kdfparams.salt, 'hex'), kdfparams.c, kdfparams.dklen, 'sha256');
  } else {
    throw new Error('Unsupported key derivation scheme');
  }

  var ciphertext = Buffer.from(kstore.crypto.ciphertext, 'hex');
  var mac = Object(ethereumjs_util__WEBPACK_IMPORTED_MODULE_6__["sha3"])(Buffer.concat([derivedKey.slice(16, 32), ciphertext]));

  if (mac.toString('hex') !== kstore.crypto.mac) {
    throw new Error('Key derivation failed - possibly wrong passphrase');
  }

  var decipher = Object(crypto__WEBPACK_IMPORTED_MODULE_4__["createDecipheriv"])(kstore.crypto.cipher, derivedKey.slice(0, 16), Buffer.from(kstore.crypto.cipherparams.iv, 'hex'));
  var seed = Object(_decrypt__WEBPACK_IMPORTED_MODULE_5__[/* decipherBuffer */ "a"])(decipher, ciphertext);

  while (seed.length < 32) {
    var nullBuff = Buffer.from([0x00]);
    seed = Buffer.concat([nullBuff, seed]);
  }

  return seed;
}
function determineKeystoreType(keystore) {
  var parsed = JSON.parse(keystore);

  if (parsed.encseed) {
    return 'presale';
  } else if (parsed.Crypto || parsed.crypto) {
    return 'v2-v3-utc';
  } else if (parsed.hash && parsed.locked === true) {
    return 'v1-encrypted';
  } else if (parsed.hash && parsed.locked === false) {
    return 'v1-unencrypted';
  } else if (parsed.publisher === 'MyEtherWallet') {
    return 'v2-unencrypted';
  } else {
    throw new Error('Invalid keystore');
  }
}
function decryptPresaleToPrivKey(keystore, password) {
  var json = JSON.parse(keystore);
  var encseed = Buffer.from(json.encseed, 'hex');
  var derivedKey = Object(crypto__WEBPACK_IMPORTED_MODULE_4__["pbkdf2Sync"])(Buffer.from(password), Buffer.from(password), 2000, 32, 'sha256').slice(0, 16);
  var decipher = Object(crypto__WEBPACK_IMPORTED_MODULE_4__["createDecipheriv"])('aes-128-cbc', derivedKey, encseed.slice(0, 16));
  var seed = Object(_decrypt__WEBPACK_IMPORTED_MODULE_5__[/* decipherBuffer */ "a"])(decipher, encseed.slice(16));
  var privkey = Object(ethereumjs_util__WEBPACK_IMPORTED_MODULE_6__["sha3"])(seed);
  var address = Object(ethereumjs_util__WEBPACK_IMPORTED_MODULE_6__["privateToAddress"])(privkey);

  if (address.toString('hex') !== json.ethaddr) {
    throw new Error('Decoded key mismatch - possibly wrong passphrase');
  }

  return privkey;
}
function decryptMewV1ToPrivKey(keystore, password) {
  var json = JSON.parse(keystore);
  var privkey;
  var cipher = json.encrypted ? json.private.slice(0, 128) : json.private;
  cipher = Object(_decrypt__WEBPACK_IMPORTED_MODULE_5__[/* decodeCryptojsSalt */ "b"])(cipher);
  var evp = Object(_decrypt__WEBPACK_IMPORTED_MODULE_5__[/* evp_kdf */ "c"])(Buffer.from(password), cipher.salt, {
    keysize: 32,
    ivsize: 16
  });
  var decipher = Object(crypto__WEBPACK_IMPORTED_MODULE_4__["createDecipheriv"])('aes-256-cbc', evp.key, evp.iv);
  privkey = Object(_decrypt__WEBPACK_IMPORTED_MODULE_5__[/* decipherBuffer */ "a"])(decipher, Buffer.from(cipher.ciphertext));
  privkey = Buffer.from(privkey.toString(), 'hex');
  var address = Object(ethereumjs_util__WEBPACK_IMPORTED_MODULE_6__["privateToAddress"])(privkey).toString('hex');

  if (address !== json.address) {
    throw new Error('Invalid private key or address');
  }

  return privkey;
}
function isKeystorePassRequired(keystore) {
  switch (determineKeystoreType(keystore)) {
    case 'presale':
      return true;

    case 'v1-unencrypted':
      return false;

    case 'v1-encrypted':
      return true;

    case 'v2-unencrypted':
      return false;

    case 'v2-v3-utc':
      return true;

    default:
      return false;
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("b639").Buffer))

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "23be":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("199c");
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2a2b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return toBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return toHex; });
/* unused harmony export toNumber */
/* unused harmony export toBig */
/* unused harmony export toBN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return formatKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formatAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addHexPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return clearPrefix; });
/* unused harmony export getDisplaySymbol */
/* unused harmony export toFixed */
/* unused harmony export toBaseUnitAmount */
/* unused harmony export toUnitAmount */
/* unused harmony export fromNumberToPrice */
/* unused harmony export formatDateTime */
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("25f0");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4d63");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ac1f");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("a9e3");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2ca0");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("fb6a");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("1276");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("b680");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("38cf");
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ethereumjs_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("b671");
/* harmony import */ var ethereumjs_util__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_util__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("901e");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("399f");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("5a0c");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_13__);














function toBuffer(buffer) {
  if (buffer instanceof Buffer) {
    return buffer;
  } else {
    return ethereumjs_util__WEBPACK_IMPORTED_MODULE_10___default.a.toBuffer(buffer);
  }
} // Number | BigNumber |  BN  | Buffer | String

function toHex(mixed) {
  if (typeof mixed === 'number' || mixed instanceof bignumber_js__WEBPACK_IMPORTED_MODULE_11___default.a || mixed instanceof bn_js__WEBPACK_IMPORTED_MODULE_12___default.a) {
    return '0x' + mixed.toString(16);
  }

  if (mixed instanceof Buffer) {
    return '0x' + mixed.toString('hex');
  }

  if (typeof mixed === 'string') {
    var regex = new RegExp(/^0x[0-9a-fA-F]*$/);
    return regex.test(mixed) ? mixed : '0x' + ethereumjs_util__WEBPACK_IMPORTED_MODULE_10___default.a.toBuffer(+mixed).toString('hex');
  }

  throw new Error('Unsupported type');
}
function toNumber(mixed) {
  if (typeof mixed === 'number') {
    return mixed;
  }

  if (mixed instanceof bignumber_js__WEBPACK_IMPORTED_MODULE_11___default.a || mixed instanceof bn_js__WEBPACK_IMPORTED_MODULE_12___default.a) {
    return mixed.toNumber();
  }

  if (typeof mixed === 'string') {
    return Number(mixed);
  }

  throw new Error('Unsupported type');
}
function toBig(mixed) {
  if (mixed instanceof bignumber_js__WEBPACK_IMPORTED_MODULE_11___default.a) {
    return mixed;
  }

  if (typeof mixed === 'number') {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_11___default.a(mixed.toString());
  }

  if (typeof mixed === 'string') {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_11___default.a(mixed);
  }

  throw new Error('Unsupported type');
}
function toBN(mixed) {
  return mixed instanceof bn_js__WEBPACK_IMPORTED_MODULE_12___default.a ? mixed : new bn_js__WEBPACK_IMPORTED_MODULE_12___default.a(toBig(mixed).toString(10), 10);
}
function formatKey(mixed) {
  if (mixed instanceof Buffer) {
    return mixed.toString('hex');
  }

  if (typeof mixed === 'string') {
    return mixed.startsWith("0x") ? mixed : mixed;
  }

  throw new Error('Unsupported type');
}
function formatAddress(mixed) {
  if (mixed instanceof Buffer) {
    return '0x' + mixed.toString('hex');
  }

  if (typeof mixed === 'string') {
    return mixed.startsWith("0x") ? mixed : "0x" + mixed;
  }

  throw new Error('Unsupported type');
}
function addHexPrefix(input) {
  if (typeof input === 'string') {
    return input.startsWith('0x') ? input : "0x" + input;
  }

  throw new Error('Unsupported type');
}
function clearPrefix(input) {
  if (typeof input === 'string') {
    return input.startsWith('0x') ? input.slice(2) : input;
  }

  throw new Error('Unsupported type');
}
function getDisplaySymbol(settingsCurrency) {
  switch (settingsCurrency) {
    case 'CNY':
      return '￥';

    case 'USD':
      return '$';

    default:
      return '';
  }
}
function toFixed(number, precision) {
  if (number > 0 && precision > 0) {
    var numberArr = null;

    if (number.toString().indexOf('e-') > -1) {
      numberArr = number.toFixed(16).toString().split('.');
    } else {
      numberArr = number.toString().split('.');
    }

    if (numberArr.length === 2) {
      var decimal = numberArr[1].substring(0, Math.min(numberArr[1].length, precision));

      if (toNumber(decimal) === 0) {
        if (toNumber(numberArr[0]) === 0) {
          return "0." + '0'.repeat(precision);
        } else {
          return numberArr[0] + "." + '0'.repeat(precision);
        }
      } else {
        return numberArr[0] + "." + decimal;
      }
    } else {
      return numberArr[0] + "." + '0'.repeat(precision);
    }
  } else {
    return '0';
  }
}
function toBaseUnitAmount(number, digits) {
  return toBig(number).times('1e' + digits);
}
function toUnitAmount(number, digits) {
  if (!number) {
    return number;
  }

  return toBig(number).div(Number('1e' + digits)).toString();
}
function fromNumberToPrice(hex, digits) {
  var amount = toUnitAmount(toNumber(hex), digits);
  return amount;
}
function formatDateTime(timestamp, formatter) {
  return dayjs__WEBPACK_IMPORTED_MODULE_13___default()(timestamp).format(formatter);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("b639").Buffer))

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3518":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* unused harmony export decryptPrivKey */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return decodeCryptojsSalt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decipherBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return evp_kdf; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fb6a");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("25f0");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("99af");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("1c46");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_4__);





/*

  MIT License

  Copyright (c) 2016 MyEtherWallet

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

*/

function decryptPrivKey(encprivkey, password) {
  var cipher = encprivkey.slice(0, 128);
  cipher = decodeCryptojsSalt(cipher);
  var evp = this.evp_kdf(Buffer.from(password), cipher.salt, {
    keysize: 32,
    ivsize: 16
  });
  var decipher = Object(crypto__WEBPACK_IMPORTED_MODULE_4__["createDecipheriv"])('aes-256-cbc', evp.key, evp.iv);
  var privKey = this.decipherBuffer(decipher, Buffer.from(cipher.ciphertext));
  return Buffer.from(privKey.toString(), 'hex');
}
function decodeCryptojsSalt(input) {
  var ciphertext = Buffer.from(input, 'base64');

  if (ciphertext.slice(0, 8).toString() === 'Salted__') {
    return {
      salt: ciphertext.slice(8, 16),
      ciphertext: ciphertext.slice(16)
    };
  } else {
    return {
      ciphertext: ciphertext
    };
  }
}
function decipherBuffer(decipher, data) {
  return Buffer.concat([decipher.update(data), decipher.final()]);
}
function evp_kdf(data, salt, opts) {
  function iter(block) {
    var hash = Object(crypto__WEBPACK_IMPORTED_MODULE_4__["createHash"])(opts.digest || 'md5');
    hash.update(block);
    hash.update(data);
    hash.update(salt);
    block = hash.digest();

    for (var _i = 1; _i < (opts.count || 1); _i++) {
      hash = Object(crypto__WEBPACK_IMPORTED_MODULE_4__["createHash"])(opts.digest || 'md5');
      hash.update(block);
      block = hash.digest();
    }

    return block;
  }

  var keysize = opts.keysize || 16;
  var ivsize = opts.ivsize || 16;
  var ret = [];
  var i = 0;

  while (Buffer.concat(ret).length < keysize + ivsize) {
    ret[i] = iter(i === 0 ? Buffer.from(0) : ret[i - 1]);
    i++;
  }

  var tmp = Buffer.concat(ret);
  return {
    key: tmp.slice(0, keysize),
    iv: tmp.slice(keysize, keysize + ivsize)
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("b639").Buffer))

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

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

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

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d4ec");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("bee2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/ethereumjs-tx/dist/index.js
var dist = __webpack_require__("8d23");

// EXTERNAL MODULE: ./src/common/formatter.js
var formatter = __webpack_require__("2a2b");

// EXTERNAL MODULE: ./node_modules/bip39/src/index.js
var src = __webpack_require__("29c9");

// EXTERNAL MODULE: ./node_modules/ethereumjs-util/dist/index.js
var ethereumjs_util_dist = __webpack_require__("b671");

// EXTERNAL MODULE: ./src/common/keystore.js
var keystore = __webpack_require__("1af2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./node_modules/hdkey/lib/hdkey.js
var hdkey = __webpack_require__("bd46");

// CONCATENATED MODULE: ./src/common/mnemonic.js



function mnemonictoPrivatekey(phrase, pass, path) {
  phrase = phrase.trim();

  if (!Object(src["validateMnemonic"])(phrase)) {
    throw new Error('Invalid mnemonic');
  }

  var seed = Object(src["mnemonicToSeed"])(phrase, pass);
  var derived = Object(hdkey["fromMasterSeed"])(seed).derive(path);
  return derived.privateKey;
}
function isValidateMnemonic(phrase) {
  return Object(src["validateMnemonic"])(phrase);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("53ca");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__("2b3d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.to-json.js
var web_url_to_json = __webpack_require__("bf19");

// CONCATENATED MODULE: ./src/common/Blob.js










function makeBlob(content, mime) {
  content = Object(esm_typeof["a" /* default */])(content) === 'object' ? JSON.stringify(content) : content;

  if (content === null) {
    return '';
  }

  var blob = new Blob([content], {
    type: mime
  });
  return window.URL.createObjectURL(blob);
}
function getFileName(address) {
  var ts = new Date();
  return ['UTC--', ts.toJSON().replace(/:/g, '-'), '--', Object(formatter["b" /* clearPrefix */])(address), '.json'].join('');
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/async-validator/dist-web/index.js
var dist_web = __webpack_require__("2a95");

// EXTERNAL MODULE: ./src/common/validator_schemas.js
var validator_schemas = __webpack_require__("1243");

// CONCATENATED MODULE: ./src/common/validator.js





var schemas = {
  basic: Object(objectSpread2["a" /* default */])({}, validator_schemas["a" /* default */])
};

var handleErrors = function handleErrors(errors, fields) {
  var msgs = errors.map(function (err) {
    return err.message;
  }).join();
  throw new Error("data type invalid: ".concat(msgs, " \n"));
};

var validator_validate = function validate(payload) {
  var type = payload.type,
      value = payload.value,
      onError = payload.onError,
      onSuccess = payload.onSuccess;
  var source = {};
  var schema = {}; // fix bug: if value undefined or null

  if (typeof value === 'undefined') {
    throw new Error("data type invalid: ".concat(type, " should not be undefined"));
  }

  if (value === null) {
    throw new Error("data type invalid: ".concat(type, " should not be null"));
  }

  if (schemas['basic'][type]) {
    // validate one field , schema & source must just has one field
    schema[type] = schemas['basic'][type];
    source[type] = value;
  } // TODO: if schema empty


  var validator = new dist_web["a" /* default */](schema);
  validator.validate(source, function (errors, fields) {
    if (errors) {
      console.log('validate start source', source);
      console.log('validate start schema', schema);

      if (onError) {
        onError(errors, fields);
      } else {
        handleErrors(errors, fields);
      }
    } else {
      if (onSuccess) {
        onSuccess();
      }
    }
  });
};

/* harmony default export */ var common_validator = ({
  validate: validator_validate
});
// CONCATENATED MODULE: ./src/common/accountUtils.js







var DEFAULT_DPATH = "m/44'/60'/0'/0/0";
function privateKeytoAddress(privateKey) {
  try {
    if (typeof privateKey === 'string') {
      common_validator.validate({
        value: privateKey,
        type: 'PRIVATE_KEY'
      });
      privateKey = Object(formatter["e" /* toBuffer */])(Object(formatter["a" /* addHexPrefix */])(privateKey));
    } else {
      common_validator.validate({
        value: privateKey,
        type: 'PRIVATE_KEY_BUFFER'
      });
    }
  } catch (e) {
    throw new Error('Invalid private key');
  }

  return Object(formatter["c" /* formatAddress */])(Object(ethereumjs_util_dist["privateToAddress"])(privateKey));
}
function publicKeytoAddress(publicKey, sanitize) {
  return Object(formatter["c" /* formatAddress */])(Object(ethereumjs_util_dist["publicToAddress"])(publicKey, sanitize));
}
function privateKeytoPublic(privateKey) {
  try {
    if (typeof privateKey === 'string') {
      common_validator.validate({
        value: privateKey,
        type: 'PRIVATE_KEY'
      });
      privateKey = Object(formatter["e" /* toBuffer */])(Object(formatter["a" /* addHexPrefix */])(privateKey));
    } else {
      common_validator.validate({
        value: privateKey,
        type: 'PRIVATE_KEY_BUFFER'
      });
    }
  } catch (e) {
    throw new Error('Invalid private key');
  }

  return Object(formatter["d" /* formatKey */])(Object(ethereumjs_util_dist["privateToPublic"])(privateKey));
}
function create(password, dpath) {
  var mnemonic = Object(src["generateMnemonic"])(256);
  var privateKey = mnemonictoPrivatekey(mnemonic, password, dpath || DEFAULT_DPATH);
  var publicKey = Object(ethereumjs_util_dist["privateToPublic"])(privateKey);
  var address = Object(ethereumjs_util_dist["privateToAddress"])(privateKey);
  return {
    mnemonic: mnemonic,
    password: password,
    privateKey: Object(formatter["d" /* formatKey */])(privateKey),
    publicKey: Object(formatter["d" /* formatKey */])(publicKey),
    address: Object(formatter["c" /* formatAddress */])(address)
  };
}
function encrypt(privateKey, password) {
  try {
    if (typeof privateKey === 'string') {
      common_validator.validate({
        value: privateKey,
        type: 'PRIVATE_KEY'
      });
      privateKey = Object(formatter["e" /* toBuffer */])(Object(formatter["a" /* addHexPrefix */])(privateKey));
    } else {
      common_validator.validate({
        value: privateKey,
        type: 'PRIVATE_KEY_BUFFER'
      });
    }
  } catch (e) {
    throw new Error('Invalid private key');
  }

  return Object(keystore["b" /* pkeyToKeystore */])(privateKey, password); // keystoreJsonV3
}
function decrypt(keystoreJsonV3, password) {
  var privateKey = Object(keystore["a" /* decryptKeystoreToPkey */])(keystoreJsonV3, password); // privateKey

  var publicKey = Object(ethereumjs_util_dist["privateToPublic"])(privateKey);
  var address = Object(ethereumjs_util_dist["publicToAddress"])(publicKey);
  return {
    privateKey: Object(formatter["d" /* formatKey */])(privateKey),
    publicKey: Object(formatter["d" /* formatKey */])(publicKey),
    address: Object(formatter["c" /* formatAddress */])(address)
  };
}
function fromMnemonic(mnemonic, password, dpath) {
  var privateKey = mnemonictoPrivatekey(mnemonic, password, dpath || DEFAULT_DPATH);
  var publicKey = Object(ethereumjs_util_dist["privateToPublic"])(privateKey);
  var address = Object(ethereumjs_util_dist["privateToAddress"])(privateKey);
  return {
    mnemonic: mnemonic,
    privateKey: Object(formatter["d" /* formatKey */])(privateKey),
    publicKey: Object(formatter["d" /* formatKey */])(publicKey),
    address: Object(formatter["c" /* formatAddress */])(address)
  };
}
function fromPrivateKey(privateKey) {
  try {
    if (typeof privateKey === 'string') {
      common_validator.validate({
        value: privateKey,
        type: 'PRIVATE_KEY'
      });
      privateKey = Object(formatter["e" /* toBuffer */])(Object(formatter["a" /* addHexPrefix */])(privateKey));
    } else {
      common_validator.validate({
        value: privateKey,
        type: 'PRIVATE_KEY_BUFFER'
      });
    }
  } catch (e) {
    throw new Error('Invalid private key');
  }

  var publicKey = Object(ethereumjs_util_dist["privateToPublic"])(privateKey);
  var address = Object(ethereumjs_util_dist["privateToAddress"])(privateKey);
  return {
    privateKey: Object(formatter["d" /* formatKey */])(privateKey),
    publicKey: Object(formatter["d" /* formatKey */])(publicKey),
    address: Object(formatter["c" /* formatAddress */])(address)
  };
}
function download(privateKey, password, mime) {
  if (typeof privateKey === 'string') {
    privateKey = Object(formatter["e" /* toBuffer */])(Object(formatter["a" /* addHexPrefix */])(privateKey));
  }

  var address = privateKeytoAddress(privateKey);
  var fileName = getFileName(address);
  var content = encrypt(privateKey, password);
  var blob = makeBlob(content, mime || 'text/json;charset=UTF-8');
  return {
    fileName: fileName,
    blob: blob,
    content: content
  };
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/whatwg-fetch/fetch.js
var fetch = __webpack_require__("6d93");

// EXTERNAL MODULE: ./node_modules/crypto-browserify/index.js
var crypto_browserify = __webpack_require__("1c46");
var crypto_browserify_default = /*#__PURE__*/__webpack_require__.n(crypto_browserify);

// EXTERNAL MODULE: ./src/config/index.js + 5 modules
var src_config = __webpack_require__("f121");

// CONCATENATED MODULE: ./src/common/ethRequest.js






function id() {
  return crypto_browserify_default.a.randomBytes(8).toString('hex');
}

function parseJSON(res) {
  return res.json();
}

var headers = {
  'Content-Type': 'application/json'
};

function request(options) {
  var method;

  if (options.body) {
    method = options.body.method;
    options.headers = options.headers || headers;
    options.body.id = id();
    options.body.jsonrpc = '2.0';
    options.body = JSON.stringify(options.body);
  }

  return Object(fetch["a" /* fetch */])(src_config["a" /* default */].gethServer, options).then(parseJSON).then(function (res) {
    // console.log(`${method} response:`, res);
    return res;
  });
}

/* harmony default export */ var ethRequest = (request);
// CONCATENATED MODULE: ./src/api/eth/base.js



/**
 * 获取余额
 * @param {*} address 用户钱包地址
 */

function getBalance(address) {
  var params = [address, 'latest'];
  var body = {};
  body.method = 'eth_getBalance';
  body.params = params;
  return ethRequest({
    method: 'post',
    body: body
  });
}
/**
 * tx数量
 * @param {*} address
 * @param {*} tag
 */

function getTransactionCount(_x) {
  return _getTransactionCount.apply(this, arguments);
}
/**
 * 获取gas价格
 */

function _getTransactionCount() {
  _getTransactionCount = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(address) {
    var tag,
        params,
        body,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            tag = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'pending';
            params = [address, tag];
            body = {};
            body.method = 'eth_getTransactionCount';
            body.params = params;
            return _context.abrupt("return", ethRequest({
              method: 'post',
              body: body
            }));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getTransactionCount.apply(this, arguments);
}

function getGasPrice() {
  return _getGasPrice.apply(this, arguments);
}
/**
 * 估算gas
 * @param {*} tx
 */

function _getGasPrice() {
  _getGasPrice = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var params, body;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            params = [];
            body = {};
            body.method = 'eth_gasPrice';
            body.params = params;
            return _context2.abrupt("return", ethRequest({
              method: 'post',
              body: body
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getGasPrice.apply(this, arguments);
}

function estimateGas(_x2) {
  return _estimateGas.apply(this, arguments);
} // export async function transfer() {
//   // const tx = {
//   //   gasPrice: 20000,
//   //   gasLimit: '0x186a0',
//   //   to: contactAddr,
//   //   value: '0x0'
//   // };
//   // tx.data = generateAbiData({
//   //   method: 'transfer',
//   //   address: receiverAddr,
//   //   amount: _amount
//   // });
//   const params = [tx, 'latest'];
//   const body = {};
//   body.method = 'eth_sendRawTransaction';
//   body.params = params;
//   const response = await request({
//     method: 'post',
//     body,
//   });
//   return response;
// }
// export function transfer() {
//   let tx = {
//     gasPrice: fm.toHex(fm.toBig(gasPrice).times(1e9)),
//     gasLimit: fm.toHex(gasLimit),
//     to: contactAddr,
//     value: "0x0"
//   };
//   let _amount = fm.toHex(fm.toBig(amount).times("1e"+tokenConfig.digits));
//   // ETH转账
//   if(token.symbol === 'ETH') {
//     amount = fm.toBig(amount).times(1e18).toNumber();
//     tx.to = receiverAddr;
//     tx.value = fm.toHex(amount);
//     tx.data = fm.toHex('0x');
//   } else {
//     amount = _amount;
//   // 非ETH的token转账
//     tx.data = generateAbiData({method: "transfer", address: receiverAddr, amount: _amount});
//   }
//   let {response,rawTx} = await Wallet.sendTransaction({tx, symbol: token.symbol, amount: amount.toString(), receiverAddr});
// };
// balanceOf(CONTRACT_ADDR, MY_ADDRESS);

function _estimateGas() {
  _estimateGas = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(tx) {
    var body;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            body = {};
            body.method = 'eth_estimateGas';
            body.params = [tx];
            return _context3.abrupt("return", ethRequest({
              method: 'post',
              body: body
            }));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _estimateGas.apply(this, arguments);
}
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/vuex-persistedstate/dist/vuex-persistedstate.es.js
var vuex_persistedstate_es = __webpack_require__("0e44");

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
// CONCATENATED MODULE: ./src/eth/Account.js














var Account_getters = store.getters;

var Account_Account = /*#__PURE__*/function () {
  function Account() {
    Object(classCallCheck["a" /* default */])(this, Account);

    // this.unlock = false;
    // this.accountType = '';
    // this.privateKey = '';
    this.address = ''; // this.auth = '';

    this.chainId = ''; // console.log(ethereum.isConnected())
    // window.ethereum.on('connect', ({ chainId }) => {
    //   this.unlockByMetaMask();
    // });

    window.ethereum.on('chainChanged', function () {
      window.location.reload();
    }); // For now, 'eth_accounts' will continue to always return an array

    window.ethereum.request({
      method: 'eth_accounts'
    }).then(this.handleAccountsChanged.bind(this)).catch(function (err) {
      // Some unexpected error.
      // For backwards compatibility reasons, if no accounts are available,
      // eth_accounts will return an empty array.
      console.error(err);
    }); // Note that this event is emitted on page load.
    // If the array of accounts is non-empty, you're already
    // connected.

    window.ethereum.on('accountsChanged', this.handleAccountsChanged.bind(this));
  }

  Object(createClass["a" /* default */])(Account, [{
    key: "unlockByPrivateKey",
    value: function unlockByPrivateKey(privateKey) {
      this.privateKey = privateKey;
      this.address = formatter["c" /* formatAddress */](Object(ethereumjs_util_dist["privateToAddress"])(this.privateKey));
      this.accountType = 'privateKey'; // return this.getAuth();
    }
  }, {
    key: "unlockByMnemonic",
    value: function unlockByMnemonic(mnemonic, password) {
      var _accountUtils$fromMne = fromMnemonic(mnemonic, password),
          privateKey = _accountUtils$fromMne.privateKey,
          address = _accountUtils$fromMne.address;

      this.privateKey = "0x".concat(privateKey);
      this.address = formatter["c" /* formatAddress */](address);
      this.accountType = 'mnemonic'; // return this.getAuth();
    }
  }, {
    key: "unlockByKeystore",
    value: function unlockByKeystore(keystoreJsonV3, password) {
      var _accountUtils$decrypt = decrypt(keystoreJsonV3, password),
          privateKey = _accountUtils$decrypt.privateKey,
          address = _accountUtils$decrypt.address;

      this.privateKey = "0x".concat(privateKey);
      this.address = formatter["c" /* formatAddress */](address);
      this.accountType = 'keystore'; // return this.getAuth();
    }
  }, {
    key: "handleAccountsChanged",
    value: function () {
      var _handleAccountsChanged = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(accounts) {
        var chainId;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(accounts.length === 0)) {
                  _context.next = 4;
                  break;
                }

                // MetaMask is locked or the user has not connected any accounts
                console.log('Please connect to MetaMask.');
                _context.next = 10;
                break;

              case 4:
                if (!(accounts[0] !== this.address)) {
                  _context.next = 10;
                  break;
                }

                this.address = accounts[0];
                _context.next = 8;
                return window.ethereum.request({
                  method: 'eth_chainId'
                });

              case 8:
                chainId = _context.sent;
                this.chainId = chainId; // Do any other work!

              case 10:
                console.log(this);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleAccountsChanged(_x) {
        return _handleAccountsChanged.apply(this, arguments);
      }

      return handleAccountsChanged;
    }()
  }, {
    key: "unlockByMetaMask",
    value: function () {
      var _unlockByMetaMask = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(typeof window.ethereum === 'undefined')) {
                  _context2.next = 2;
                  break;
                }

                throw Error('MetaMask is not installed!');

              case 2:
                // While you are awaiting the call to eth_requestAccounts, you should disable
                // any buttons the user can click to initiate the request.
                // MetaMask will reject any additional requests while the first is still
                // pending.
                window.ethereum.request({
                  method: 'eth_requestAccounts'
                }).then(this.handleAccountsChanged.bind(this)).catch(function (err) {
                  if (err.code === 4001) {
                    // EIP-1193 userRejectedRequest error
                    // If this happens, the user rejected the connection request.
                    console.log('Please connect to MetaMask.');
                  } else {
                    console.error(err);
                  }
                }); // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                // // eslint-disable-next-line prefer-destructuring
                // this.address = accounts[0];
                // const chainId = await window.ethereum.request({ method: 'eth_chainId' });
                // this.chainId = chainId;
                // console.log(accounts)
                // console.log(window.ethereum.selectedAddress);
                // this.accountType = 'metaMask';
                // return new Promise((resolve, reject) => {
                //   window.ethereum.getAccounts(async (error, result) => {
                //     if (result.length) {
                //       await this.getAuth();
                //       resolve();
                //     } else {
                //       reject();
                //     }
                //   });
                // })

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function unlockByMetaMask() {
        return _unlockByMetaMask.apply(this, arguments);
      }

      return unlockByMetaMask;
    }()
  }, {
    key: "restore",
    value: function restore(account) {
      this.address = account.address;
      this.accountType = account.accountType;
      this.privateKey = account.privateKey;
      this.auth = account.auth;
      this.chainId = account.chainId;
    }
  }, {
    key: "getAddress",
    value: function getAddress() {
      return this.address;
    } // eslint-disable-next-line

  }, {
    key: "askForPermission",
    value: function () {
      var _askForPermission = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!window.ethereum) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", window.ethereum.enable().catch(function () {
                  throw new Error('拒绝链接请求');
                }));

              case 2:
                return _context3.abrupt("return", Promise.resolve());

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function askForPermission() {
        return _askForPermission.apply(this, arguments);
      }

      return askForPermission;
    }()
  }, {
    key: "sendRawTransaction",
    value: function () {
      var _sendRawTransaction = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(tx) {
        var tcRes;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return getTransactionCount(this.address);

              case 2:
                tcRes = _context4.sent;
                tx.nonce = tx.nonce || formatter["f" /* toHex */](tcRes.result);
                tx.gasPrice = Account_getters.fastGasPrice;
                tx.gasLimit = tx.gasLimit || formatter["f" /* toHex */](src_config["a" /* default */].defaultGasLimit); // metamask gaslimit

                tx.gas = tx.gasLimit;
                tx.chainId = tx.chainId || src_config["a" /* default */].chainId;
                tx.from = this.getAddress(); // if (this.accountType === 'metaMask') {

                return _context4.abrupt("return", this.sendWeb3Transaction(tx));

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function sendRawTransaction(_x2) {
        return _sendRawTransaction.apply(this, arguments);
      }

      return sendRawTransaction;
    }() // eslint-disable-next-line

  }, {
    key: "sendWeb3Transaction",
    value: function () {
      var _sendWeb3Transaction = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(tx) {
        var transactionHash;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.askForPermission();

              case 2:
                _context5.next = 4;
                return window.ethereum.request({
                  method: 'eth_sendTransaction',
                  params: [tx]
                });

              case 4:
                transactionHash = _context5.sent;
                return _context5.abrupt("return", {
                  transactionHash: transactionHash,
                  rawTx: tx
                });

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function sendWeb3Transaction(_x3) {
        return _sendWeb3Transaction.apply(this, arguments);
      }

      return sendWeb3Transaction;
    }()
  }, {
    key: "getSignature",
    value: function getSignature(message) {
      var _this = this;

      // 获取要签名信息的hash
      return new Promise(function (resolve, reject) {
        if (_this.accountType === 'metaMask') {
          _this.askForPermission().then(function () {
            var _window = window,
                web3 = _window.web3;
            web3.personal.sign(web3.toHex(message), _this.address, function (err, signature) {
              if (err) {
                reject(err);
                return;
              }

              resolve(signature);
            });
          }).catch(function (e) {
            return reject;
          });
        } else {
          try {
            var sha = Object(ethereumjs_util_dist["hashPersonalMessage"])(formatter["e" /* toBuffer */](message));
            var ecdsaSignature = Object(ethereumjs_util_dist["ecsign"])(sha, Object(ethereumjs_util_dist["toBuffer"])(_this.privateKey)); // 生成rpc签名

            var signature = Object(ethereumjs_util_dist["toRpcSig"])(ecdsaSignature.v, ecdsaSignature.r, ecdsaSignature.s);
            resolve(signature);
          } catch (e) {
            reject(e);
          }
        }
      });
    }
  }, {
    key: "getOrderSignature",
    value: function () {
      var _getOrderSignature = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(orderId) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.getSignature(orderId));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getOrderSignature(_x4) {
        return _getOrderSignature.apply(this, arguments);
      }

      return getOrderSignature;
    }()
  }, {
    key: "getAuth",
    value: function () {
      var _getAuth = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var message, signature;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                message = "HYDRO-AUTHENTICATION@".concat(Date.now());
                _context7.next = 3;
                return this.getSignature(message);

              case 3:
                signature = _context7.sent;
                this.auth = "".concat(this.address, "#").concat(message, "#").concat(signature);
                return _context7.abrupt("return", "".concat(this.address, "#").concat(message, "#").concat(signature));

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getAuth() {
        return _getAuth.apply(this, arguments);
      }

      return getAuth;
    }()
  }]);

  return Account;
}();

/* harmony default export */ var eth_Account = (Account_Account);
// EXTERNAL MODULE: ./src/App.vue
var App = __webpack_require__("3dfd");

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
      return __webpack_require__.e(/* import() */ "chunk-40d50afb").then(__webpack_require__.bind(null, "16c0"));
    }
  }, {
    path: '/auction',
    name: 'Auction',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e("chunk-2d216626"), __webpack_require__.e("chunk-4a7363ac")]).then(__webpack_require__.bind(null, "dd18"));
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
// EXTERNAL MODULE: ./src/styles/theme-overrides/index.scss
var theme_overrides = __webpack_require__("b38f");

// CONCATENATED MODULE: ./src/main.js













 // Make BootstrapVue available throughout your project

vue_common_default.a.use(esm["a" /* BootstrapVue */]); // Optionally install the BootstrapVue icon components plugin

vue_common_default.a.use(icons_plugin["a" /* IconsPlugin */]);
vue_common_default.a.use(vue_composition_api_esm["b" /* default */]);
vue_common_default.a.component('v-charts', index_esm_min["a" /* default */]);
vue_common_default.a.config.productionTip = false;
window.__g_store__ = store;
window.__g_router__ = src_router; // window.__g_account__ = new Account();
// Vue.prototype.$account = window.__g_account__;

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
}); // eslint-disable-next-line no-underscore-dangle

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

/***/ 6:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "65f9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "67f3":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABCCAQAAABEQ7gkAAAHXUlEQVQYGeXBeVBUhx0H8J/EI151tB5pNFbGeLTVaTJpoxknatOOPWynts44o9M4ndRhOqamTUnVqm2eqAgYFkRkNUBAQJDlHHBBYbmWUxBFBA/kUFhxFwRRdjn2+tZ5+94b3x7s21XjH/186FU54Zvhf/XiE1hhRWEyvQrHfDN21hVqzRDoQd8uxRs5Wyuyu4dg5yHo2xI1M31rXYb2kQnOlF+gl082OXVL9dnOfhNcsSDhd/QyMVOSNlTJ72pNsGfBw4fqhF4dWO0d9LIwExN+WSC/ozHCUc9wdX72juDpR9/VD4GVdYhehuj1eRF3WobhSGepUyk/jV9MrPJ8sAZxaAm9WKlryo42NhngqA+XSgv+mbycBMyiAdjUltCLk/IT1cGmawNwNIDrl9IORP6I7KT/F5zT2+hFiFuZs+/q5cdwNIjGxpyDMe+SU7c6wdL0yybT84lcmra7oaIfjgbRdKMg6MwH5FL8Bgtsck+Q90IWp35Wr+qFIz1aWkpD49aTG8XZYI3g+AryhmLhhR3q/AdGOBjGvbaKqJSfMz7kVsScPiNY9ZfJUwlzFR9XZeueWGHPjLbugpiojYrJJFGSPzgJfyXpTs9I3lqj0Dwyw54FHQ/LziZuZr5DHrneDJZ26NhUkoKZkri5/ExHvwn2LNDoqxRJ24Knk8dCV5tgU5xE7jCvJ/ym6JvWB2bYs0Krr805t10+l7x0MR4sI8I+INcUr0X8QnmytcMIRz0jtflZfkkL6DkEzdAOgdV8g1wJnn4xUHNDD0c91uqSi36Kt0mimLeVx3P2HZtKDjJ2gHP27+Tcrkl1NXDQh4byjN3hy8gDx3/Wa8BT9WrFa2SnvhasPsuR75FzXy2HiAFNddn7IpeSh8I2GqzgHJ5PImE/0MOmMp1c2T29Vw+OGZmhJ94kL8i2DILXdX/XJBLJDQHLivC15FrYpkHYWFGVyfiQx078aQS8HmPoahKRTe7qBav1No3tGz89eA23mNnkkdOfGsDT6gPWkJ2EbeBkHiR34j8fBq/u6hdTSbJ4/yHwOvsD3iMHVSVgPbEGLST3kveawKu+5DeBJEnaPwKeRndiOTkIWTIIm4oCkibjSzN4laUkQWqAEbzb96N9yYm0I+DEbiapLhyEQH2e3MgMMYPX3BGxgJxgfNo0YLX3MD4kXV4QBEUpNIa8CCt4DbfC55FTMRstsFGGkmeyTkJQnUgulJyC4PK1r2aTC9W5YBkQuJw8pUyA4GIsOaGMg6C69uhMcuHIvD4rWFeqyBv5aRDkRpGdAgUEFRXMNHIpcw84cX8m7xQqwbEiPZSeUXwegjKV3wQaQ9MdsLofM9PIW2Wl4FhwLphYuyaVFUGgyqExRa0zwaZQTt5jxlfVgGPGmS+JmImVlRDkp5AbhUlgjSJyFT0P2eTaenCMiN2nzofgfCy5EfhdrQGsq1foeclmNTTBibJIcit5Jzgpn5EnmFlxPyUHEXOaW2EnL5gkuF4Plm7k6EySLn2TRjeMppqghWRHPvfuXQieGBP/RhLI3h+BjSqJpIvdPgqb3KPkIOSNe53gDAyHvUMSFJ4Gy4hTa0kq5Q4TeCWHyQn/73fpwBk0Jq4nN5gp9x+D1dxCUsXsNIF3r/PwfBI55hu2iJ76z8r7enB05ugPaUzx28HJ3kvSJP4Lgo4HzCISyQvQGXT6vD30VMCqB6PgdA9HrqIx1FWCNYDgN0mKFAaC23f3zyeR4kiwrPh6KT0Vsq7HAs69wdAfkwuHlhhgo84lKbJCIbh+w382iZTGQnD8PWKF/KoPvLbHwcvIqfMysKyI2kjuZUdAcLt2zwwSUaVAoMokgewP/eDd7ju0mByN69CC1aqhceQeBA2Vca/TMxif4gwI1EpmPD0jatsAeDe79r9FdqL/CE5aIEkBTm0JM5FE1EUQqNLIQexf9OA13mJmkUhVHliDCF9GUtztByyozMU4Eqkpg6A6jpxK2jkC3pVrzBQSBC18YgGrspSkCV6gDlR8TCJ7Z9aVQ1AgJ5fS/mEEr67ObwJxUg+Ak7iVvHVk3pUWCNRhNKa8LyCoLSEW43OnHaz2PmYieSd8YWM7OFacP0ZuJe+H4IqSngr7tRk2F8LIO2GLbt0Dx4qsABI5OW3go/Ql5CA1GIKaLKKiaLAMkK8gb0T7treBY0bybhIJWdPaYcLD0VO/JwfZMghKlZ1dYDVUkze+XtqtBWcUCZ+TSNh63ShYXZfJCeUZOIj5hDwXsFL7CJwhRPuTSNSmXvAa1eRUngIiPcNBM8hTgT/UDYEzDPknJBK7eQC8AYSvJRdUOXhGfhx57loxOAZEbiGRxC2D4PWa5R/RGEqLwLEgYjV57k49WP0I/y2JZGwzgKc1yj6kMTE+VSqwrjaQN+Qf9T4GerpObiCRgh3D4D3oD36f3GLGF0Xfx83mIyvIOxELItbFTieRc9uN4Gn6mKUkkcIX4+jFkS/qBq9Nc2AZvSpn3zHA5mbL/rfo1WHGF8WZYEZT+b/n0P+P/wFV5iS7OEQqqgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

/* (ignored) */

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

// CONCATENATED MODULE: ./src/config/tx.js
/* harmony default export */ var tx = ([{
  "type": "eth_transfer",
  "gasLimit": "0x5208"
}, {
  "type": "token_transfer",
  "gasLimit": "0x186a0"
}, {
  "type": "approve",
  "gasLimit": "0x186a0"
}, {
  "type": "withdraw",
  "gasLimit": "0x186a0"
}, {
  "type": "deposit",
  "gasLimit": "0x186a0"
}]);
// CONCATENATED MODULE: ./src/config/dpath.js
/* harmony default export */ var dpath = ([{
  "name": "Tuzy 钱包",
  "dpath": "m/44'/60'/0'/0"
}, {
  "name": "Loopring Wallet",
  "dpath": "m/44'/60'/0'/0"
}, {
  "name": "Imtoken",
  "dpath": "m/44'/60'/0'/0"
}, {
  "name": "MetaMask",
  "dpath": "m/44'/60'/0'/0"
}, {
  "name": "TREZOR (ETH)",
  "dpath": "m/44'/60'/0'/0"
}, {
  "name": "Digital Bitbox",
  "dpath": "m/44'/60'/0'/0"
}, {
  "name": "Exodus",
  "dpath": "m/44'/60'/0'/0"
}, {
  "name": "Jaxx",
  "dpath": "m/44'/60'/0'/0"
}, {
  "name": "Ledger (ETH)",
  "dpath": "m/44'/60'/0'"
}, {
  "name": "TREZOR (ETC)",
  "dpath": "m/44'/61'/0'/0"
}, {
  "name": "Ledger (ETC)",
  "dpath": "m/44'/60'/160720'/0'"
}, {
  "name": "SingularDTV",
  "dpath": "m/0'/0'/0'"
}, {
  "name": "Network: Testnets",
  "dpath": "m/44'/1'/0'/0"
}, {
  "name": "Network: Expanse",
  "dpath": "m/44'/40'/0'/0"
}, {
  "name": "Network: Ubiq",
  "dpath": "m/44'/108'/0'/0"
}, {
  "name": "Network: Ellaism",
  "dpath": "m/44'/163'/0'/0"
}]);
// CONCATENATED MODULE: ./src/config/config.dev.js


/* harmony default export */ var config_dev = ({
  webUrl: 'http://47.75.74.35:8000',
  defaultPricePrecision: 8,
  defaultAmountPrecision: 4,
  defaultExpireTime: 3600 * 24 * 365 * 10,
  // 秒
  defaultGasPrice: 8,
  defaultGasLimit: '0x186a0',
  loopInterval: 30000,
  localStorageVersion: '201901011200',
  approveAllowance: '0xf000000000000000000000000000000000000000000000000000000000000000',
  minAllowance: Math.pow(10, 30),
  appId: '1234567',
  // 测试节点
  defaultServer: 'http://47.75.74.35/openapi',
  webSocketServer: 'ws://47.75.74.35/wss/v1',
  gethServer: 'https://ropsten.infura.io/v3/c5ae44a788ef43f0a3cfe4c6a77c71e6',
  hydroExchangeAddress: '0xaba80a6f1d60a1feff034ab3820c8d98bd6cbe46',
  hydroProxyAddress: '0x1b9540f50b3b9dde35cea9a403026a78965234ac',
  chainId: 3,
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
  tx: tx,
  dpath: dpath,
  appDownload: '这是下载二维码',
  // NFTAuction: '0x6d03BA00b24c7126ddFDB0150851ed21e2426725',
  // NFTFactory: '0x6Ea4576B88013434FCC24A6af123a681eeE7a324',
  // coinBid: '0x2903Ac373a4680874500faA8e25658ba67D539Ad',
  // coinbidCreation: '0xd862D3465436Ac9c14EcCdD691f1B75F542F43Af',
  // mining: '0xC50874e61E8ECd7157468EBD7F6315A0d7C519C7',
  // canvasAuction: '0xF70E2eCE0f88301F6d462A2646e9121F53aE35ad',
  NFTAuction: '0x009d0041eC76922E204dCB654af60b0d7B543508',
  NFTFactory: '0xf55B03d97E328efFd8978400696927815c720DF4',
  coinBid: '0x9aC0eDBA256Bc6194B204c0BCBCb94DB1275712f',
  coinbidCreation: '0x6C3283a94Fa773e12C0a76Fb3D96E196A732aab1',
  mining: '0x01059878426a07E831493c0eAcD8822b597b90c3',
  canvasAuction: '0x8b584A3f31215f9FEAD59Dfcf3E297a194860dF6' // CoinBid			0x9aC0eDBA256Bc6194B204c0BCBCb94DB1275712f
  // CoinBidCreation		0x6C3283a94Fa773e12C0a76Fb3D96E196A732aab1
  // NFTFactory		0xf55B03d97E328efFd8978400696927815c720DF4
  // Mining			0x01059878426a07E831493c0eAcD8822b597b90c3
  // CanvasAuction		0x8b584A3f31215f9FEAD59Dfcf3E297a194860dF6
  // NFTAuction		0x009d0041eC76922E204dCB654af60b0d7B543508

});
// CONCATENATED MODULE: ./src/config/config.test.js


/* harmony default export */ var config_test = ({
  webUrl: 'http://47.75.74.35:8000',
  defaultPricePrecision: 8,
  defaultAmountPrecision: 4,
  defaultExpireTime: 3600 * 24 * 365 * 10,
  // 秒
  defaultGasPrice: 8,
  defaultGasLimit: '0x186a0',
  loopInterval: 30000,
  localStorageVersion: '201901011200',
  approveAllowance: '0xf000000000000000000000000000000000000000000000000000000000000000',
  minAllowance: Math.pow(10, 30),
  appId: '1234567',
  // 测试节点
  defaultServer: 'http://47.75.74.35/openapi',
  webSocketServer: 'ws://47.75.74.35/wss/v1',
  gethServer: 'https://ropsten.infura.io/v3/c5ae44a788ef43f0a3cfe4c6a77c71e6',
  hydroExchangeAddress: '0xaba80a6f1d60a1feff034ab3820c8d98bd6cbe46',
  hydroProxyAddress: '0x1b9540f50b3b9dde35cea9a403026a78965234ac',
  chainId: 3,
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
  tx: tx,
  dpath: dpath,
  appDownload: '这是下载二维码',
  // NFTAuction: '0x6d03BA00b24c7126ddFDB0150851ed21e2426725',
  // NFTFactory: '0x6Ea4576B88013434FCC24A6af123a681eeE7a324',
  // coinBid: '0x2903Ac373a4680874500faA8e25658ba67D539Ad',
  // coinbidCreation: '0xd862D3465436Ac9c14EcCdD691f1B75F542F43Af',
  // mining: '0xC50874e61E8ECd7157468EBD7F6315A0d7C519C7',
  // canvasAuction: '0xF70E2eCE0f88301F6d462A2646e9121F53aE35ad',
  NFTAuction: '0x009d0041eC76922E204dCB654af60b0d7B543508',
  NFTFactory: '0xf55B03d97E328efFd8978400696927815c720DF4',
  coinBid: '0x9aC0eDBA256Bc6194B204c0BCBCb94DB1275712f',
  coinbidCreation: '0x6C3283a94Fa773e12C0a76Fb3D96E196A732aab1',
  mining: '0x01059878426a07E831493c0eAcD8822b597b90c3',
  canvasAuction: '0x8b584A3f31215f9FEAD59Dfcf3E297a194860dF6' // CoinBid			0x9aC0eDBA256Bc6194B204c0BCBCb94DB1275712f
  // CoinBidCreation		0x6C3283a94Fa773e12C0a76Fb3D96E196A732aab1
  // NFTFactory		0xf55B03d97E328efFd8978400696927815c720DF4
  // Mining			0x01059878426a07E831493c0eAcD8822b597b90c3
  // CanvasAuction		0x8b584A3f31215f9FEAD59Dfcf3E297a194860dF6
  // NFTAuction		0x009d0041eC76922E204dCB654af60b0d7B543508

});
// CONCATENATED MODULE: ./src/config/config.prod.js


/* harmony default export */ var config_prod = ({
  webUrl: 'http://47.75.74.35:8000',
  defaultPricePrecision: 8,
  defaultAmountPrecision: 4,
  defaultExpireTime: 3600 * 24 * 365 * 10,
  // 秒
  defaultGasPrice: 8,
  defaultGasLimit: '0x186a0',
  loopInterval: 30000,
  localStorageVersion: '201901011200',
  approveAllowance: '0xf000000000000000000000000000000000000000000000000000000000000000',
  minAllowance: Math.pow(10, 30),
  appId: '1234567',
  // 测试节点
  defaultServer: 'http://47.75.74.35/openapi',
  webSocketServer: 'ws://47.75.74.35/wss/v1',
  gethServer: 'https://ropsten.infura.io/v3/c5ae44a788ef43f0a3cfe4c6a77c71e6',
  hydroExchangeAddress: '0xaba80a6f1d60a1feff034ab3820c8d98bd6cbe46',
  hydroProxyAddress: '0x1b9540f50b3b9dde35cea9a403026a78965234ac',
  chainId: 3,
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
  tx: tx,
  dpath: dpath,
  appDownload: '这是下载二维码',
  // NFTAuction: '0x6d03BA00b24c7126ddFDB0150851ed21e2426725',
  // NFTFactory: '0x6Ea4576B88013434FCC24A6af123a681eeE7a324',
  // coinBid: '0x2903Ac373a4680874500faA8e25658ba67D539Ad',
  // coinbidCreation: '0xd862D3465436Ac9c14EcCdD691f1B75F542F43Af',
  // mining: '0xC50874e61E8ECd7157468EBD7F6315A0d7C519C7',
  // canvasAuction: '0xF70E2eCE0f88301F6d462A2646e9121F53aE35ad',
  NFTAuction: '0x009d0041eC76922E204dCB654af60b0d7B543508',
  NFTFactory: '0xf55B03d97E328efFd8978400696927815c720DF4',
  coinBid: '0x9aC0eDBA256Bc6194B204c0BCBCb94DB1275712f',
  coinbidCreation: '0x6C3283a94Fa773e12C0a76Fb3D96E196A732aab1',
  mining: '0x01059878426a07E831493c0eAcD8822b597b90c3',
  canvasAuction: '0x8b584A3f31215f9FEAD59Dfcf3E297a194860dF6' // CoinBid			0x9aC0eDBA256Bc6194B204c0BCBCb94DB1275712f
  // CoinBidCreation		0x6C3283a94Fa773e12C0a76Fb3D96E196A732aab1
  // NFTFactory		0xf55B03d97E328efFd8978400696927815c720DF4
  // Mining			0x01059878426a07E831493c0eAcD8822b597b90c3
  // CanvasAuction		0x8b584A3f31215f9FEAD59Dfcf3E297a194860dF6
  // NFTAuction		0x009d0041eC76922E204dCB654af60b0d7B543508

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