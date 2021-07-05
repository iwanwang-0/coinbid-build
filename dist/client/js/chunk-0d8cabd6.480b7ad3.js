(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-0d8cabd6"],{

/***/ "1148":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "1655":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1af3":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAiCAMAAAAJbCvNAAACBFBMVEUAAAD///+AgICqqqq/v7+ZzMy/v7+qqsaqv7+quLizs7+1tbWwubmyu7uvt7ezurqzubmuu7uwtrawtbuxt7exurqyt7ewubmytruut7ewubmxurqut7uwuLixubmvt7exuLixubmvurqwt7uwt7qxuLiwubmyuLiwt7qvuLiwubmxt7mxubmxubmwuLixubmwt7qvubmwt7mwuLqxuLivubmwt7mvuLiwubmxt7qvuLixt7mvuLqwuLiwubmxt7mwuLqwubmxubmvt7mxuLivubmwuLmwuLivubmxuLixuLqvuLiwubmwt7mwuLiwubmxuLmwuLqwubmxt7mwuLmxubmvuLmwuLqvt7mwuLqxubmwt7mwuLmxuLiwubmwuLmxuLqwubmwt7mwuLmvuLqvuLmwuLiwt7mxuLmwubmxuLmwuLmwuLivuLmvt7mwuLmxubmwuLmwuLmxuLiwt7mwuLmwuLmwubmwuLmvuLqwt7mwuLmvuLmwuLiwuLmxuLmwuLmwubmwuLmwuLmwuLqwuLmwuLmwuLivuLmwuLmwuLmxt7mwuLmwuLmwuLqwuLmwuLmwubmwuLmwuLmwuLmwuLmwuLmxuLmwuLiwuLmwuLmwuLmwuLmwuLmwuLmwuLmwuLmwuLmwuLmwubmwuLmwuLmwuLmwuLmwuLmwuLmwuLmwuLnehmHyAAAAq3RSTlMAAQIDBAUICQwSFBgdHiAlKCkqLS40NTc4OTo7PD0+QEFFRkdKS01PUVNXWFtfYWJnaWprbG1ucHFyc3V2d3h5ent/gIKDhIWGiYyNkZKUlZaXmJmanJ2eoKKjpKWmp6ipqqusrbCxsrO1tre4ur2+wMHCw8TFxsfIysvMzc7P0NHS09TV1tfZ2tvc3d7f4OHi5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P5tdozDAAACXklEQVQ4y61SaVsSURi9tljRYokpluWIaGrShiGaQIZEuREtkmKymZUUKTpaTgpahBnCwDDDJpkbIvdPNsN4sU/Sh86Hc57z3vPMmee9FwAWx670exnq82PR8X3niy2bpadBHsXXxhK/U+SI5ATvXq9nEjPqs/nzohK1N+qaDC+qSoo4p/y25V+h7CL+9KSgRHTDHp1TquZidmlFaWmFdIQO2MZCi3cvnDt1BIDKemX/GzLjkEje75GjvTpd7+iP3a99huW1d1pZjeAo0DybWolmoaWszAKzYZ/H4wunIaF9+CXDLDh0l84AIri+ByG0CIUWCLOZnZ1MFkKiq4uAcDs52SIGGzAHR0ODA+axpNcvcbrafRPs8CN3T4/7IBAcHw9yGtLLwBo/2pif3zgI7AUCXC/0990Gyf3Z5ib8C+k05AN3QDwdWZh0Oj2JhMfpdEejbicLTzzOOk8q+EQGmOSHe/UYppqdVWFYh8vVgbFQ4Tjr1EthoxxQ1NOL7ELLh4fLESOt/MiYFIUDzNrE/UaxuBPHO3muFYtreafxchXx3djMW5sNp2ncauXYbrPZc85G/CINssIBtqKzEX00V8EiXzEgB5GIsboYAMxqxRAjrXHRQ60gQr24zD6LKrO5CjHS6gnmnwKFKgr+5H/Zw+GrpiOHXFZ0uB3Q1KGBNpDYwh801dVpCEKDGKl2NWGUAf9m0vtpetqbSnkRI/2+vfroOng19TPC0DRFkhRiXhkm5LM3i0DDre6XpsHBAYNhADGvpqHn2ubzAiC8KlW0t7bKW1rkiHltU8iaRILiP4KxeR6dNVUMAAAAAElFTkSuQmCC"

/***/ }),

/***/ "23ce":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_qizf_Projects_private_blockchain_auction_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1da1");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("96cf");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("f121");
/* harmony import */ var _eth_ethereum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("b88c");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("e36d");





console.log(ethers__WEBPACK_IMPORTED_MODULE_4__[/* BigNumber */ "a"]); // console.log(provider)

var sendTransaction = /*#__PURE__*/function () {
  var _ref2 = Object(_Users_qizf_Projects_private_blockchain_auction_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var to, data, gas, gasPrice, transactionParameters, txHash;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            to = _ref.to, data = _ref.data, gas = _ref.gas;
            _context.next = 3;
            return _eth_ethereum__WEBPACK_IMPORTED_MODULE_3__[/* provider */ "m"].getGasPrice();

          case 3:
            gasPrice = _context.sent;
            // const txCount = await provider.getTransactionCount(ethereum.selectedAddress, 'pending');
            transactionParameters = {
              // nonce: txCount, // ignored by MetaMask
              gasPrice: gasPrice.toHexString(),
              // customizable by user during MetaMask confirmation.
              gas: ethers__WEBPACK_IMPORTED_MODULE_4__[/* BigNumber */ "a"].from(gas || 240000).toHexString(),
              // customizable by user during MetaMask confirmation.
              to: to,
              // Required except during contract publications.
              from: ethereum.selectedAddress,
              // must match user's active address.
              value: '0x00',
              // Only required to send ether to the recipient from the initiating external account.
              data: data,
              // Optional, but used for defining smart contract creation and interaction.
              chainId: _config__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].chainId // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.

            }; // txHash is a hex string
            // As with any RPC call, it may throw an error

            _context.next = 7;
            return ethereum.request({
              method: 'eth_sendTransaction',
              params: [transactionParameters]
            });

          case 7:
            txHash = _context.sent;
            return _context.abrupt("return", txHash);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sendTransaction(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (sendTransaction);

/***/ }),

/***/ "38cf":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var repeat = __webpack_require__("1148");

// `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat
$({ target: 'String', proto: true }, {
  repeat: repeat
});


/***/ }),

/***/ "6fe3":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAiCAMAAAAAh4u3AAAB7FBMVEUAAAD///+AgICqqqqAgICqqqqSkpKfn5+ZmZmVlZWdnZ2SkpKZmZmfn5+UlJSZmZmenp6bm5uVlZWZmZmXl5ebm5uZmZmcnJyZmZmcnJyYmJiampqWlpaZmZmbm5uYmJiampqZmZmYmJiampqXl5eZmZmbm5uXl5eZmZmbm5uXl5eZmZmXl5ebm5uZmZmYmJiZmZmampqampqZmZmYmJiYmJiampqYmJiZmZmampqYmJiampqZmZmYmJiYmJiZmZmampqYmJiZmZmampqZmZmampqZmZmZmZmYmJiampqZmZmYmJiZmZmampqZmZmZmZmampqZmZmYmJiZmZmYmJiZmZmampqZmZmZmZmYmJiZmZmampqZmZmZmZmYmJiZmZmampqZmZmZmZmZmZmZmZmZmZmYmJiZmZmampqZmZmZmZmampqZmZmZmZmZmZmZmZmampqZmZmYmJiZmZmampqZmZmYmJiampqZmZmZmZmampqZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlf+elAAAAAo3RSTlMAAQIDBAYHCAoMDQ4PEBMUFRcYGRscHh8jJCUmJygpKistLzAxMjM2Nzg7PEBCRkhLTE5QVFdYWVpbXF1fYWNkZWhpamtvcHFydHZ3eHl7fX5/gYKGh4iJiouMjY6PkJGSlpmbnZ6foKGipaanrK2ytba4vr/BwsTGyMnLzM3P0tPU1dbY29zd3t/g4eLj5Ofo6err7O3u7/Dx8vP09fb3+Pv9MjP8+wAAAjNJREFUOMut0vtf0lAUAPBDRC6lpGgRpuZ6+YoiMw0r01lmOkuLKLOswF4re5FmZDajJlbD4QR8VED+o+3ubmwD6qfOD9s5934/956dzwDMsbv/Q+YrSpwd18duXGgug8LY7Hu/lpntIQA23V19PtTLhGZ+Tm0xmzY+Eps8hDIrG9mG10Zix41kx6uoP0VbVGPHi9dahm4bzGHh1uX4QcAmXK4ZOBbRjSfZ2rng0gyBF/fJV5EJ3Sx5XKm6AqNE+YaW1S4fhfaXpQxsX1OTCr4LYFeuDeU9y6ifrQeaK/Fe/ZyKHrF7u6vvX1xpkXP7JGsFB8fxo3jvSgi/vd8GkmxuGBolpIgwu5N7sqd3TNlrSDUq77L5Cb4KmqST0IDV22zgYehzNzY+fFBfNEaqtaIcn774XHzAZIj0Sg0+OaEoJxeAkaxfWZFa1a7P/2pXM0qUVUoMABlbnLCBersSCX3usiLjGR/JM0T4hc1gvL/d+uQoSRysl0RGbuL1VDpv4N1Hw3jJ7+sdbmEddWsLGv6R3FmD4RkqmWZQb+aYthoNuMUfNBSrfLiREehqAalzfzFxxYDyoJbokkbox+YfCm2oBhdVwolShlqk9bIPSKdJ7H88n/ObL0ANwgPDwhlp+Oqdp16x03T0AqNfL8ebZ4On3feyBY0qQ4uPa6WDC4433cxWQJGysKuX8momOHoqWvTBZGzOc2SjRivtkeBsV/FYaqUA/kFVNR2ylBgwGR2A/xt/AA6NlHjUY/rnAAAAAElFTkSuQmCC"

/***/ }),

/***/ "7c11":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"536acfae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/SwapDetail/index.vue?vue&type=template&id=e8ea6324&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auction-detail"},[_c('Introduce',{attrs:{"NFTDetail":_vm.NFTDetail,"price":_vm.price}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/SwapDetail/index.vue?vue&type=template&id=e8ea6324&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__("3835");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("c1df");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"536acfae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/SwapDetail/components/Introduce.vue?vue&type=template&id=5d5f5ce6&scoped=true&
var Introducevue_type_template_id_5d5f5ce6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-container',{attrs:{"fluid":"lg"}},[_c('div',{staticClass:"introduce"},[_c('div',{staticClass:"pic-wrapper"},[_c('img',{attrs:{"src":_vm.NFTDetail.image,"alt":""}})]),_c('div',{staticClass:"info-wrapper"},[_c('h2',{staticClass:"title"},[_vm._v(_vm._s(_vm.NFTDetail.name || '-'))]),_c('div',{staticClass:"info-row"},[_c('div',{staticClass:"info-label"},[_c('img',{attrs:{"src":__webpack_require__("8a2d"),"alt":""}}),_c('span',[_vm._v("Owner")])]),_c('div',{staticClass:"info-content"},[_vm._v("Random_HEX")])]),_c('div',{staticClass:"info-row"},[_c('div',{staticClass:"info-label"},[_c('img',{attrs:{"src":__webpack_require__("1af3"),"alt":""}}),_c('span',[_vm._v("Daily output of mining")])]),_c('div',{staticClass:"info-content green"},[_vm._v("1CBD")])]),_c('div',{staticClass:"info-row"},[_c('div',{staticClass:"info-label"},[_c('img',{attrs:{"src":__webpack_require__("6fe3"),"alt":""}}),_c('span',[_vm._v("Mined")])]),_c('div',{staticClass:"info-content red"},[_vm._v("0/1000CBD")])]),_c('div',{staticClass:"info-row"},[_c('div',{staticClass:"info-label"},[_c('img',{attrs:{"src":__webpack_require__("6fe3"),"alt":""}}),_c('span',[_vm._v("Price")])]),_c('div',{staticClass:"info-content red"},[_vm._v(_vm._s((_vm.price / Math.pow( 10, 6 )).toFixed(0) || 0)+"$")])]),_c('div',{staticClass:"info-row"},[_c('div',{staticClass:"info-label"},[_c('img',{attrs:{"src":__webpack_require__("7efd"),"alt":""}}),_c('span',[_vm._v("introduction of the work")])]),_c('div',{staticClass:"info-content"},[_vm._v(_vm._s(_vm.NFTDetail.description))])]),_c('div',{staticClass:"button-group"},[_c('b-button',{staticClass:"buy-btn",attrs:{"variant":"primary","size":"lg"},on:{"click":_vm.onBuy}},[_vm._v("Buy")])],1)])])])}
var Introducevue_type_template_id_5d5f5ce6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/SwapDetail/components/Introduce.vue?vue&type=template&id=5d5f5ce6&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.repeat.js
var es_string_repeat = __webpack_require__("38cf");

// EXTERNAL MODULE: ./src/config/index.js + 3 modules
var config = __webpack_require__("f121");

// EXTERNAL MODULE: ./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js
var bignumber = __webpack_require__("e36d");

// EXTERNAL MODULE: ./src/eth/ethereum.js
var eth_ethereum = __webpack_require__("b88c");

// EXTERNAL MODULE: ./src/common/sendTransaction.js
var sendTransaction = __webpack_require__("23ce");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/SwapDetail/components/Introduce.vue?vue&type=script&lang=js&



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
 //   NFTAuctionContract, NFTAuctionInterface, USDTContract, USDTInterface, provider,




/* harmony default export */ var Introducevue_type_script_lang_js_ = ({
  props: ['NFTDetail', 'price'],
  data: function data() {
    return {// price: 200,
      // NFTDetail: {},
    };
  },
  created: function created() {// this.getDetail();
  },
  methods: {
    onBuy: function onBuy() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var tokenId, realPrice, allowance, approveTxHash, approveTx, buyTxHash, buyTx;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                tokenId = _this.$route.query.tokenId;
                realPrice = _this.price;
                _this.submitting = true;
                _context.prev = 3;
                _context.next = 6;
                return eth_ethereum["e" /* USDTContract */].allowance(ethereum.selectedAddress, config["a" /* default */].NFTSwap);

              case 6:
                allowance = _context.sent;

                if (!allowance.lt(realPrice)) {
                  _context.next = 19;
                  break;
                }

                _context.next = 10;
                return Object(sendTransaction["a" /* default */])({
                  to: config["a" /* default */].USDTContract,
                  data: eth_ethereum["f" /* USDTInterface */].encodeFunctionData('approve', [config["a" /* default */].NFTSwap, bignumber["a" /* BigNumber */].from('9'.repeat(32)).toHexString()])
                });

              case 10:
                approveTxHash = _context.sent;
                _context.next = 13;
                return eth_ethereum["m" /* provider */].waitForTransaction(approveTxHash);

              case 13:
                approveTx = _context.sent;

                if (!(approveTx.status !== 1)) {
                  _context.next = 18;
                  break;
                }

                __g_root__.$bvToast.toast('Approve fail，please retry', {
                  title: 'Tips',
                  variant: 'danger',
                  autoHideDelay: 5000
                });

                _this.submitting = false;
                return _context.abrupt("return");

              case 18:
                console.log(approveTx);

              case 19:
                _context.next = 21;
                return Object(sendTransaction["a" /* default */])({
                  to: config["a" /* default */].NFTSwap,
                  gas: 960000,
                  data: eth_ethereum["d" /* NFTSwapInterface */].encodeFunctionData('buy', [tokenId])
                });

              case 21:
                buyTxHash = _context.sent;
                _context.next = 24;
                return eth_ethereum["m" /* provider */].waitForTransaction(buyTxHash);

              case 24:
                buyTx = _context.sent;

                if (buyTx.status === 1) {
                  __g_root__.$bvToast.toast('Buy success', {
                    title: 'Tips',
                    variant: 'success',
                    autoHideDelay: 5000
                  });
                } else {
                  __g_root__.$bvToast.toast('Buy fail, please retry', {
                    title: 'Tips',
                    variant: 'danger',
                    autoHideDelay: 5000
                  });
                }

                _context.next = 31;
                break;

              case 28:
                _context.prev = 28;
                _context.t0 = _context["catch"](3);
                console.error(_context.t0);

              case 31:
                _this.submitting = false;

              case 32:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 28]]);
      }))();
    },
    onCancel: function onCancel() {},
    onUpdate: function onUpdate() {},
    onDelete: function onDelete() {} // async getDetail() {
    //   const { id } = this.$route.params;
    //   // console.log(id)
    //   this.tokenUrl = `https://ipfs.io/ipfs/${id}`;
    //   const { data } = await axios({
    //     method: 'get',
    //     url: this.tokenUrl,
    //   });
    //   this.NFTDetail = data;
    // },
    // toDetail() {
    //   this.$router.push(`/auction/detail/${this.tokenId}`);
    // },

  }
});
// CONCATENATED MODULE: ./src/views/SwapDetail/components/Introduce.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Introducevue_type_script_lang_js_ = (Introducevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/SwapDetail/components/Introduce.vue?vue&type=style&index=0&id=5d5f5ce6&lang=scss&scoped=true&
var Introducevue_type_style_index_0_id_5d5f5ce6_lang_scss_scoped_true_ = __webpack_require__("7e17");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/SwapDetail/components/Introduce.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Introducevue_type_script_lang_js_,
  Introducevue_type_template_id_5d5f5ce6_scoped_true_render,
  Introducevue_type_template_id_5d5f5ce6_scoped_true_staticRenderFns,
  false,
  null,
  "5d5f5ce6",
  null
  
)

/* harmony default export */ var Introduce = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/SwapDetail/index.vue?vue&type=script&lang=js&



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

 // import { BigNumber } from 'ethers';

 // import Price from './components/Price.vue';
// import Change from './components/Change.vue';


console.log();
/* harmony default export */ var SwapDetailvue_type_script_lang_js_ = ({
  components: {
    Introduce: Introduce // Price,
    // Change,

  },
  data: function data() {
    return {
      NFTDetail: {},
      price: '',
      auction: {
        lastPrice: 0,
        endAt: 0,
        startedAt: 0
      }
    };
  },
  created: function created() {
    this.getDetail();
  },
  methods: {
    getDetail: function getDetail() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this$$route$query, tokenId, price, result, _result, token, auction, tokenURI, _yield$axios, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$$route$query = _this.$route.query, tokenId = _this$$route$query.tokenId, price = _this$$route$query.price;

                if (!tokenId) {
                  _context.next = 15;
                  break;
                }

                _context.next = 4;
                return eth_ethereum["k" /* miningContract */].functions.getInfoById(tokenId);

              case 4:
                result = _context.sent;
                console.log('token', result);
                _result = Object(slicedToArray["a" /* default */])(result, 1), token = _result[0];
                auction = token.auction, tokenURI = token.tokenURI;
                _this.auction = auction;
                _context.next = 11;
                return axios_default()({
                  method: 'get',
                  url: tokenURI
                });

              case 11:
                _yield$axios = _context.sent;
                data = _yield$axios.data;
                _this.NFTDetail = data;
                _this.price = price; // console.log('detail:', auction, tokenURI);
                // console.log('endAt:', new moment(this.auction.endAt * 1000).format('YYYY-MM-DD HH:mm:ss'));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/views/SwapDetail/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_SwapDetailvue_type_script_lang_js_ = (SwapDetailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/SwapDetail/index.vue?vue&type=style&index=0&id=e8ea6324&lang=postcss&scoped=true&
var SwapDetailvue_type_style_index_0_id_e8ea6324_lang_postcss_scoped_true_ = __webpack_require__("dd06");

// CONCATENATED MODULE: ./src/views/SwapDetail/index.vue






/* normalize component */

var SwapDetail_component = Object(componentNormalizer["a" /* default */])(
  views_SwapDetailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "e8ea6324",
  null
  
)

/* harmony default export */ var SwapDetail = __webpack_exports__["default"] = (SwapDetail_component.exports);

/***/ }),

/***/ "7e17":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Introduce_vue_vue_type_style_index_0_id_5d5f5ce6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1655");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Introduce_vue_vue_type_style_index_0_id_5d5f5ce6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Introduce_vue_vue_type_style_index_0_id_5d5f5ce6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7efd":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAiCAMAAAB7o0l7AAAAjVBMVEUAAAD///+AgICfn5+ZmZmcnJyWlpabm5uYmJiampqXl5ebm5uYmJibm5ubm5uZmZmZmZmZmZmampqampqYmJiZmZmZmZmampqZmZmZmZmYmJiZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlyk/psAAAALnRSTlMAAQIQIyQnKSorLC4vMzhpcXiIl6mqr7Cyt7jDxcbIys3Oz9LT2O3u8PHy8/T5CYPjYwAAAK5JREFUKM/F0tkOgjAUBNCBKoriVhT3fQed//88H9S0uS3GmBDn9TTN3PYC8eRGJ0UWAUArpzfXCMCMi7ZykqyZAbizCU8SFgDIwIeKBECiIgw2co65wfAocWtdG8oxg+rb7mWhldX28AH/8bbfY214flV2sX56j9NzccRdV6n0aRIv7ACa7MODpIImByhBY3I1ydSYXGrSMky5TKwFIanN0fgqvkvbFzXGean9nAfM4DUeNAjvKwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "8a2d":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAYAAAB/E6/TAAADsklEQVRIS7WWy2+UVRjGf89hLJSACqUGQQHBaLwBIqKpuLJAOxAuEmPiH6AmrtSVu+5NXLmBmLjWBMq0xE6HRRdAQkohEESFCrTcFGmB8VYu832POcMHJmSaKVhPMps55z2/733O+7zniHFGR0dHWLp69SzduvUS0ipJK7FfAB4DKoZzgiOCg7KP5OwT+Xz+9/H2U60J2yqVStPHkmQhIbRIet32cuBZYEYWc8n2ccFRQX8KB35rbr7wwcqVt2rtWRPU3d09vTJ16jPYbwa73RCzasJuvGeTsuxRh3BIabqzYu871t9/saOjI70XVhNUKJXmpUnSLtiE9AYwezxJsv/PI+0MUMglyUAtCWuCOkul5bI/xN6SnUkdDlGuA0idyZQpha2trafrZrRtYOChuSMjbxk+BVrrEbL5FOkXYHewt29saztcF1QoFGbS0LDe0sfAqgmC4rKbjqAQvti0du3+CYHShoYNkmJGr9wHKBbA7tT+/O329n11QVG65tHRdcH+DGi5D9DVCDJ8uaWtrb8uKC7YWSwuC/AJsB5omgCsAhySvUO53Dcb16w5OyFQ1549C1ypvIu00RCNesek4zGrhYC9q8HeV7e8o2xPXLrUdDOXm0+aLlcIK7BfBp4cx7B/ApeBE8BeweEQwqmxNB19Z926q5J858vu+qivr29aeWxssaSlwDxgOlKDoRlYBDwHLADuxNjws+yjkoZTKAsSS/GshtIkObY1nz9/FxT7WldX1wwaG5eSJC2GZUhzsGO5XgkhVLBnGh7PzJvLgqNJfwXOAdeRZmLPAW4gDds+kJMOTkmSM/l8/oa+LRZnT4NFhveiQX27O0+NvgD+yn7XgGsRTgj/ymE3Zhk/UlXg9lnG+T+QfiBNe0MI3dfL5QvqLBZXBelF2+8Dr9U47eiPi8Bpw4ikpLrGDpnEUdJHa8SVkUrY25M0/Um7isWPkJ7H3pwF1qqsG9WM4G+g2pllK8pliHLV7JnxCgG+NhxXoadnm6UlwKvAwxPwzP0sOYf0ne1qRkXgKeBpIMoxmSPeuP2CQe3q6TkoaWF2qJMJAWmMND0u6XTMaLBqyNuVNtkjWuCk4EwExfYxd7IJ2X6xcGLfG4qgK8Cs/wkUtx0xnI2g0Qm8CR74OwSXbQ9H0PfA/HFM98CALPA68GM0uwq9vV/ZXpzdppPtoyFgj+xBdfb2bsZeItgArJhE08aGu9/2DqRTik8r7EUBNtiOvS526f9q3NiQh7D3pvGtl8ud/QdMPppcQwj58wAAAABJRU5ErkJggg=="

/***/ }),

/***/ "d343":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dd06":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e8ea6324_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d343");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e8ea6324_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e8ea6324_lang_postcss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);