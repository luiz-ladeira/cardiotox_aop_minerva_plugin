(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var css = "body {\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.4;\n}\n.table-wrapper {\n  width: 100%;\n  height: 100%;\n  max-height: 600px;\n  overflow-x: auto;\n  overflow-y: auto;\n  border: 1px solid #ddd;\n  background: #fff;\n  padding: 5px;\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.table th,\n.table td {\n  white-space: nowrap;\n  padding: 6px 10px;\n  border: 1px solid #ccc;\n  text-align: left;\n}\n.table th {\n  background: #f8f9fa;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n.table tr:hover {\n  background: #f1f1f1;\n}\n.entity-match {\n  background-color: #e6ffe6;\n  cursor: pointer;\n}\n.entity-match:hover {\n  background-color: #ccffcc;\n}\n.d-flex {\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=styles.css.map */\n"; (require("browserify-css").createStyle(css, { "href": "__tmp_minerva_plugin\\css\\styles.css" }, { "insertAt": "bottom" })); module.exports = css;
},{"browserify-css":4}],2:[function(require,module,exports){
"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.array.flat.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.array.unscopables.flat.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require('../css/styles.css');
var jq = require('jquery');

// bootstrap-table needs jQuery in global scope
if (window.$ === undefined && minerva.$ !== undefined) {
  window.$ = window.jQuery = window.jquery = minerva.$;
}

// load bootstrap-table JS only (CSS is imported via Sass)
require('bootstrap-table/dist/bootstrap-table.min.js');
var PLUGIN_NAME = 'KE Mapper';
var PLUGIN_LABEL = 'KE Mapper';
var PLUGIN_VERSION = '1.2.0';
var CONTAINER_CLASS = 'kemapper-container';
var SPREADSHEET_ID = '1lYtwYLNLfGlhj7gbbkaNCwYNsuGKM5L6uJSydlXEGLE';
var API_KEY = 'AIzaSyAIaStdq_ebxgOE7l5K5mBrBSRrf3Ywayg';
var SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/".concat(SPREADSHEET_ID);
var minervaProxy;
var $container;
var $dataTable;
var globals = {
  sheetData: [],
  entities2KE: {},
  KE2Entities: {}
};

// *******************************************************************************
// ********************* PLUGIN REGISTRATION *************************************
// *******************************************************************************

function register(_minerva) {
  minervaProxy = _minerva;
  $container = initMainContainer();
  fetchSheetData().then(function (data) {
    globals.sheetData = parseSheet(data);
    initMainPageStructure($container);
    initDataTable($container, globals.sheetData);
  });
}
function unregister() {
  minervaProxy.project.map.removeAllListeners();
  return deHighlightAll();
}
function getName() {
  return PLUGIN_LABEL;
}
function getVersion() {
  return PLUGIN_VERSION;
}
minervaDefine(function () {
  return {
    register: register,
    unregister: unregister,
    getName: getName,
    getVersion: getVersion,
    minWidth: 300,
    defaultWidth: 600
  };
});

// *******************************************************************************
// ********************* DATA HANDLING *******************************************
// *******************************************************************************
function fetchSheetData() {
  return _fetchSheetData.apply(this, arguments);
}
function _fetchSheetData() {
  _fetchSheetData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var metaUrl, metaResp, meta, sheetName, url, resp;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          metaUrl = "https://sheets.googleapis.com/v4/spreadsheets/".concat(SPREADSHEET_ID, "?key=").concat(API_KEY);
          _context.n = 1;
          return fetch(metaUrl);
        case 1:
          metaResp = _context.v;
          _context.n = 2;
          return metaResp.json();
        case 2:
          meta = _context.v;
          sheetName = meta.sheets[0].properties.title;
          url = "https://sheets.googleapis.com/v4/spreadsheets/".concat(SPREADSHEET_ID, "/values/").concat(sheetName, "?key=").concat(API_KEY);
          _context.n = 3;
          return fetch(url);
        case 3:
          resp = _context.v;
          _context.n = 4;
          return resp.json();
        case 4:
          return _context.a(2, _context.v);
      }
    }, _callee);
  }));
  return _fetchSheetData.apply(this, arguments);
}
function parseSheet(sheet) {
  var header = sheet.values[0];
  var rows = sheet.values.slice(1);
  return rows.map(function (r) {
    var rowObj = {};
    header.forEach(function (h, i) {
      return rowObj[h] = r[i] || "";
    });
    return rowObj;
  });
}

// *******************************************************************************
// ********************* MINERVA INTERACTION *************************************
// *******************************************************************************

function deHighlightAll() {
  return minervaProxy.project.map.getHighlightedBioEntities().then(function (highlighted) {
    return minervaProxy.project.map.hideBioEntity(highlighted);
  });
}
function highlightInMap(data) {
  var selectedEntities = data.map(function (row) {
    return row.EntityId;
  }).flat();
  return deHighlightAll().then(function () {
    var highlightDefs = selectedEntities.map(function (e) {
      return {
        element: {
          id: e.id,
          modelId: e.modelId,
          type: e.type
        },
        type: "ICON"
      };
    });
    return minervaProxy.project.map.showBioEntity(highlightDefs);
  });
}

// *******************************************************************************
// ********************* PLUGIN STRUCTURE ****************************************
// *******************************************************************************

function initMainContainer() {
  var $c = $("<div class=\"".concat(CONTAINER_CLASS, " plugin-container\"></div>")).appendTo($(minervaProxy.element));
  $c.append("\n    <div class=\"controls\">\n      <button id=\"access-data\" class=\"access-data-btn\">Access Data</button>\n    </div>\n    <table class=\"ke-table\"></table>\n    <div class=\"panel card panel-warning border-warning error-panel d-none hidden\">\n      <div class=\"panel-heading card-header bg-warning\"> No mapping found </div>\n      <div class=\"panel-body m-3\">\n        No entities found for this dataset.\n      </div>\n    </div>\n  ");
  $c.find('#access-data').on('click', function () {
    window.open(SPREADSHEET_URL, '_blank');
  });
  return $c;
}
function initMainPageStructure(container) {
  // nothing extra needed now
}
function initDataTable($container, data) {
  if (!data || data.length === 0) {
    $container.find('.error-panel').removeClass('hidden d-none');
    return;
  }
  $dataTable = $container.find('.ke-table');
  $dataTable.bootstrapTable({
    columns: Object.keys(data[0]).map(function (k) {
      return {
        field: k,
        title: k,
        sortable: true,
        searchable: true
      };
    }),
    search: true,
    data: data,
    sortName: Object.keys(data[0])[0],
    sortOrder: 'asc',
    onSearch: function onSearch() {
      var filtered = $dataTable.bootstrapTable('getData');
      highlightInMap(filtered);
    },
    onPostBody: function onPostBody() {
      var filtered = $dataTable.bootstrapTable('getData');
      highlightInMap(filtered);
    }
  });
  highlightInMap(data);
}
},{"../css/styles.css":1,"bootstrap-table/dist/bootstrap-table.min.js":3,"core-js/modules/es.array.concat.js":143,"core-js/modules/es.array.find.js":144,"core-js/modules/es.array.flat.js":145,"core-js/modules/es.array.iterator.js":146,"core-js/modules/es.array.map.js":147,"core-js/modules/es.array.slice.js":148,"core-js/modules/es.array.unscopables.flat.js":149,"core-js/modules/es.object.get-prototype-of.js":152,"core-js/modules/es.object.to-string.js":153,"core-js/modules/es.promise.js":157,"core-js/modules/es.symbol.description.js":162,"core-js/modules/es.symbol.js":164,"core-js/modules/web.dom-collections.for-each.js":166,"core-js/modules/web.dom-collections.iterator.js":167,"jquery":168}],3:[function(require,module,exports){
(function (global){(function (){
/**
  * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
  *
  * @version v1.24.2
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).BootstrapTable=e(t.jQuery)}(this,(function(t){"use strict";function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e,n){return e&&function(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,u(i.key),i)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=f(t))||e){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function o(t,e,n){return(e=u(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,r,o,a,s=[],l=!0,c=!1;try{if(o=(n=n.call(t)).next,0===e);else for(;!(l=(i=o.call(n)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(t){c=!0,r=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw r}}return s}}(t,e)||f(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||f(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e);if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"==typeof e?e:e+""}function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function f(t,n){if(t){if("string"==typeof t)return e(t,n);var i={}.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e(t,n):void 0}}var d,p,g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},v={};function b(){if(p)return d;p=1;var t=function(t){return t&&t.Math===Math&&t};return d=t("object"==typeof globalThis&&globalThis)||t("object"==typeof window&&window)||t("object"==typeof self&&self)||t("object"==typeof g&&g)||t("object"==typeof d&&d)||function(){return this}()||Function("return this")()}var m,y,w,S,x,O,k,T,C={};function P(){return y?m:(y=1,m=function(t){try{return!!t()}catch(t){return!0}})}function I(){if(S)return w;S=1;var t=P();return w=!t((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))}function A(){if(O)return x;O=1;var t=P();return x=!t((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))}function R(){if(T)return k;T=1;var t=A(),e=Function.prototype.call;return k=t?e.bind(e):function(){return e.apply(e,arguments)},k}var $,E,j,N,F,D,L,_,V,B,H,M,U,z,q,W,G,K,J,Y,Q,X,Z,tt,et,nt,it,rt,ot,at,st,lt,ct,ut,ht,ft,dt,pt,gt,vt,bt,mt={};function yt(){if($)return mt;$=1;var t={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,n=e&&!t.call({1:2},1);return mt.f=n?function(t){var n=e(this,t);return!!n&&n.enumerable}:t,mt}function wt(){return j?E:(j=1,E=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}})}function St(){if(F)return N;F=1;var t=A(),e=Function.prototype,n=e.call,i=t&&e.bind.bind(n,n);return N=t?i:function(t){return function(){return n.apply(t,arguments)}},N}function xt(){if(L)return D;L=1;var t=St(),e=t({}.toString),n=t("".slice);return D=function(t){return n(e(t),8,-1)}}function Ot(){if(V)return _;V=1;var t=St(),e=P(),n=xt(),i=Object,r=t("".split);return _=e((function(){return!i("z").propertyIsEnumerable(0)}))?function(t){return"String"===n(t)?r(t,""):i(t)}:i}function kt(){return H?B:(H=1,B=function(t){return null==t})}function Tt(){if(U)return M;U=1;var t=kt(),e=TypeError;return M=function(n){if(t(n))throw new e("Can't call method on "+n);return n}}function Ct(){if(q)return z;q=1;var t=Ot(),e=Tt();return z=function(n){return t(e(n))}}function Pt(){if(G)return W;G=1;var t="object"==typeof document&&document.all;return W=void 0===t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(t){return"function"==typeof t}}function It(){if(J)return K;J=1;var t=Pt();return K=function(e){return"object"==typeof e?null!==e:t(e)}}function At(){if(Q)return Y;Q=1;var t=b(),e=Pt();return Y=function(n,i){return arguments.length<2?(r=t[n],e(r)?r:void 0):t[n]&&t[n][i];var r},Y}function Rt(){if(Z)return X;Z=1;var t=St();return X=t({}.isPrototypeOf)}function $t(){if(et)return tt;et=1;var t=b().navigator,e=t&&t.userAgent;return tt=e?String(e):""}function Et(){if(it)return nt;it=1;var t,e,n=b(),i=$t(),r=n.process,o=n.Deno,a=r&&r.versions||o&&o.version,s=a&&a.v8;return s&&(e=(t=s.split("."))[0]>0&&t[0]<4?1:+(t[0]+t[1])),!e&&i&&(!(t=i.match(/Edge\/(\d+)/))||t[1]>=74)&&(t=i.match(/Chrome\/(\d+)/))&&(e=+t[1]),nt=e}function jt(){if(ot)return rt;ot=1;var t=Et(),e=P(),n=b().String;return rt=!!Object.getOwnPropertySymbols&&!e((function(){var e=Symbol("symbol detection");return!n(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&t&&t<41}))}function Nt(){if(st)return at;st=1;var t=jt();return at=t&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}function Ft(){if(ct)return lt;ct=1;var t=At(),e=Pt(),n=Rt(),i=Nt(),r=Object;return lt=i?function(t){return"symbol"==typeof t}:function(i){var o=t("Symbol");return e(o)&&n(o.prototype,r(i))}}function Dt(){if(ht)return ut;ht=1;var t=String;return ut=function(e){try{return t(e)}catch(t){return"Object"}}}function Lt(){if(dt)return ft;dt=1;var t=Pt(),e=Dt(),n=TypeError;return ft=function(i){if(t(i))return i;throw new n(e(i)+" is not a function")}}function _t(){if(gt)return pt;gt=1;var t=Lt(),e=kt();return pt=function(n,i){var r=n[i];return e(r)?void 0:t(r)}}function Vt(){if(bt)return vt;bt=1;var t=R(),e=Pt(),n=It(),i=TypeError;return vt=function(r,o){var a,s;if("string"===o&&e(a=r.toString)&&!n(s=t(a,r)))return s;if(e(a=r.valueOf)&&!n(s=t(a,r)))return s;if("string"!==o&&e(a=r.toString)&&!n(s=t(a,r)))return s;throw new i("Can't convert object to primitive value")}}var Bt,Ht,Mt,Ut,zt,qt,Wt,Gt,Kt,Jt,Yt,Qt,Xt,Zt,te,ee,ne,ie,re,oe,ae,se,le,ce,ue={exports:{}};function he(){return Ht?Bt:(Ht=1,Bt=!1)}function fe(){if(Ut)return Mt;Ut=1;var t=b(),e=Object.defineProperty;return Mt=function(n,i){try{e(t,n,{value:i,configurable:!0,writable:!0})}catch(e){t[n]=i}return i}}function de(){if(zt)return ue.exports;zt=1;var t=he(),e=b(),n=fe(),i="__core-js_shared__",r=ue.exports=e[i]||n(i,{});return(r.versions||(r.versions=[])).push({version:"3.44.0",mode:t?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.44.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ue.exports}function pe(){if(Wt)return qt;Wt=1;var t=de();return qt=function(e,n){return t[e]||(t[e]=n||{})}}function ge(){if(Kt)return Gt;Kt=1;var t=Tt(),e=Object;return Gt=function(n){return e(t(n))}}function ve(){if(Yt)return Jt;Yt=1;var t=St(),e=ge(),n=t({}.hasOwnProperty);return Jt=Object.hasOwn||function(t,i){return n(e(t),i)}}function be(){if(Xt)return Qt;Xt=1;var t=St(),e=0,n=Math.random(),i=t(1.1.toString);return Qt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+i(++e+n,36)}}function me(){if(te)return Zt;te=1;var t=b(),e=pe(),n=ve(),i=be(),r=jt(),o=Nt(),a=t.Symbol,s=e("wks"),l=o?a.for||a:a&&a.withoutSetter||i;return Zt=function(t){return n(s,t)||(s[t]=r&&n(a,t)?a[t]:l("Symbol."+t)),s[t]}}function ye(){if(ne)return ee;ne=1;var t=R(),e=It(),n=Ft(),i=_t(),r=Vt(),o=me(),a=TypeError,s=o("toPrimitive");return ee=function(o,l){if(!e(o)||n(o))return o;var c,u=i(o,s);if(u){if(void 0===l&&(l="default"),c=t(u,o,l),!e(c)||n(c))return c;throw new a("Can't convert object to primitive value")}return void 0===l&&(l="number"),r(o,l)}}function we(){if(re)return ie;re=1;var t=ye(),e=Ft();return ie=function(n){var i=t(n,"string");return e(i)?i:i+""}}function Se(){if(ae)return oe;ae=1;var t=b(),e=It(),n=t.document,i=e(n)&&e(n.createElement);return oe=function(t){return i?n.createElement(t):{}}}function xe(){if(le)return se;le=1;var t=I(),e=P(),n=Se();return se=!t&&!e((function(){return 7!==Object.defineProperty(n("div"),"a",{get:function(){return 7}}).a}))}function Oe(){if(ce)return C;ce=1;var t=I(),e=R(),n=yt(),i=wt(),r=Ct(),o=we(),a=ve(),s=xe(),l=Object.getOwnPropertyDescriptor;return C.f=t?l:function(t,c){if(t=r(t),c=o(c),s)try{return l(t,c)}catch(t){}if(a(t,c))return i(!e(n.f,t,c),t[c])},C}var ke,Te,Ce,Pe,Ie,Ae,Re,$e={};function Ee(){if(Te)return ke;Te=1;var t=I(),e=P();return ke=t&&e((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))}function je(){if(Pe)return Ce;Pe=1;var t=It(),e=String,n=TypeError;return Ce=function(i){if(t(i))return i;throw new n(e(i)+" is not an object")}}function Ne(){if(Ie)return $e;Ie=1;var t=I(),e=xe(),n=Ee(),i=je(),r=we(),o=TypeError,a=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l="enumerable",c="configurable",u="writable";return $e.f=t?n?function(t,e,n){if(i(t),e=r(e),i(n),"function"==typeof t&&"prototype"===e&&"value"in n&&u in n&&!n[u]){var o=s(t,e);o&&o[u]&&(t[e]=n.value,n={configurable:c in n?n[c]:o[c],enumerable:l in n?n[l]:o[l],writable:!1})}return a(t,e,n)}:a:function(t,n,s){if(i(t),n=r(n),i(s),e)try{return a(t,n,s)}catch(t){}if("get"in s||"set"in s)throw new o("Accessors not supported");return"value"in s&&(t[n]=s.value),t},$e}function Fe(){if(Re)return Ae;Re=1;var t=I(),e=Ne(),n=wt();return Ae=t?function(t,i,r){return e.f(t,i,n(1,r))}:function(t,e,n){return t[e]=n,t}}var De,Le,_e,Ve,Be,He,Me,Ue,ze,qe,We,Ge,Ke,Je,Ye,Qe={exports:{}};function Xe(){if(Le)return De;Le=1;var t=I(),e=ve(),n=Function.prototype,i=t&&Object.getOwnPropertyDescriptor,r=e(n,"name"),o=r&&"something"===function(){}.name,a=r&&(!t||t&&i(n,"name").configurable);return De={EXISTS:r,PROPER:o,CONFIGURABLE:a}}function Ze(){if(Ve)return _e;Ve=1;var t=St(),e=Pt(),n=de(),i=t(Function.toString);return e(n.inspectSource)||(n.inspectSource=function(t){return i(t)}),_e=n.inspectSource}function tn(){if(Ue)return Me;Ue=1;var t=pe(),e=be(),n=t("keys");return Me=function(t){return n[t]||(n[t]=e(t))}}function en(){return qe?ze:(qe=1,ze={})}function nn(){if(Ge)return We;Ge=1;var t,e,n,i=function(){if(He)return Be;He=1;var t=b(),e=Pt(),n=t.WeakMap;return Be=e(n)&&/native code/.test(String(n))}(),r=b(),o=It(),a=Fe(),s=ve(),l=de(),c=tn(),u=en(),h="Object already initialized",f=r.TypeError,d=r.WeakMap;if(i||l.state){var p=l.state||(l.state=new d);p.get=p.get,p.has=p.has,p.set=p.set,t=function(t,e){if(p.has(t))throw new f(h);return e.facade=t,p.set(t,e),e},e=function(t){return p.get(t)||{}},n=function(t){return p.has(t)}}else{var g=c("state");u[g]=!0,t=function(t,e){if(s(t,g))throw new f(h);return e.facade=t,a(t,g,e),e},e=function(t){return s(t,g)?t[g]:{}},n=function(t){return s(t,g)}}return We={set:t,get:e,has:n,enforce:function(i){return n(i)?e(i):t(i,{})},getterFor:function(t){return function(n){var i;if(!o(n)||(i=e(n)).type!==t)throw new f("Incompatible receiver, "+t+" required");return i}}}}function rn(){if(Ke)return Qe.exports;Ke=1;var t=St(),e=P(),n=Pt(),i=ve(),r=I(),o=Xe().CONFIGURABLE,a=Ze(),s=nn(),l=s.enforce,c=s.get,u=String,h=Object.defineProperty,f=t("".slice),d=t("".replace),p=t([].join),g=r&&!e((function(){return 8!==h((function(){}),"length",{value:8}).length})),v=String(String).split("String"),b=Qe.exports=function(t,e,n){"Symbol("===f(u(e),0,7)&&(e="["+d(u(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!i(t,"name")||o&&t.name!==e)&&(r?h(t,"name",{value:e,configurable:!0}):t.name=e),g&&n&&i(n,"arity")&&t.length!==n.arity&&h(t,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?r&&h(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var a=l(t);return i(a,"source")||(a.source=p(v,"string"==typeof e?e:"")),t};return Function.prototype.toString=b((function(){return n(this)&&c(this).source||a(this)}),"toString"),Qe.exports}function on(){if(Ye)return Je;Ye=1;var t=Pt(),e=Ne(),n=rn(),i=fe();return Je=function(r,o,a,s){s||(s={});var l=s.enumerable,c=void 0!==s.name?s.name:o;if(t(a)&&n(a,c,s),s.global)l?r[o]=a:i(o,a);else{try{s.unsafe?r[o]&&(l=!0):delete r[o]}catch(t){}l?r[o]=a:e.f(r,o,{value:a,enumerable:!1,configurable:!s.nonConfigurable,writable:!s.nonWritable})}return r}}var an,sn,ln,cn,un,hn,fn,dn,pn,gn,vn,bn,mn,yn,wn,Sn,xn,On={};function kn(){if(cn)return ln;cn=1;var t=function(){if(sn)return an;sn=1;var t=Math.ceil,e=Math.floor;return an=Math.trunc||function(n){var i=+n;return(i>0?e:t)(i)}}();return ln=function(e){var n=+e;return n!=n||0===n?0:t(n)}}function Tn(){if(hn)return un;hn=1;var t=kn(),e=Math.max,n=Math.min;return un=function(i,r){var o=t(i);return o<0?e(o+r,0):n(o,r)}}function Cn(){if(dn)return fn;dn=1;var t=kn(),e=Math.min;return fn=function(n){var i=t(n);return i>0?e(i,9007199254740991):0}}function Pn(){if(gn)return pn;gn=1;var t=Cn();return pn=function(e){return t(e.length)}}function In(){if(bn)return vn;bn=1;var t=Ct(),e=Tn(),n=Pn(),i=function(i){return function(r,o,a){var s=t(r),l=n(s);if(0===l)return!i&&-1;var c,u=e(a,l);if(i&&o!=o){for(;l>u;)if((c=s[u++])!=c)return!0}else for(;l>u;u++)if((i||u in s)&&s[u]===o)return i||u||0;return!i&&-1}};return vn={includes:i(!0),indexOf:i(!1)}}function An(){if(yn)return mn;yn=1;var t=St(),e=ve(),n=Ct(),i=In().indexOf,r=en(),o=t([].push);return mn=function(t,a){var s,l=n(t),c=0,u=[];for(s in l)!e(r,s)&&e(l,s)&&o(u,s);for(;a.length>c;)e(l,s=a[c++])&&(~i(u,s)||o(u,s));return u}}function Rn(){return Sn?wn:(Sn=1,wn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"])}function $n(){if(xn)return On;xn=1;var t=An(),e=Rn().concat("length","prototype");return On.f=Object.getOwnPropertyNames||function(n){return t(n,e)},On}var En,jn,Nn,Fn,Dn,Ln,_n,Vn,Bn,Hn,Mn,Un,zn,qn,Wn,Gn,Kn,Jn,Yn,Qn,Xn,Zn,ti,ei,ni,ii,ri,oi,ai={};function si(){return En||(En=1,ai.f=Object.getOwnPropertySymbols),ai}function li(){if(Nn)return jn;Nn=1;var t=At(),e=St(),n=$n(),i=si(),r=je(),o=e([].concat);return jn=t("Reflect","ownKeys")||function(t){var e=n.f(r(t)),a=i.f;return a?o(e,a(t)):e}}function ci(){if(Dn)return Fn;Dn=1;var t=ve(),e=li(),n=Oe(),i=Ne();return Fn=function(r,o,a){for(var s=e(o),l=i.f,c=n.f,u=0;u<s.length;u++){var h=s[u];t(r,h)||a&&t(a,h)||l(r,h,c(o,h))}}}function ui(){if(_n)return Ln;_n=1;var t=P(),e=Pt(),n=/#|\.prototype\./,i=function(n,i){var l=o[r(n)];return l===s||l!==a&&(e(i)?t(i):!!i)},r=i.normalize=function(t){return String(t).replace(n,".").toLowerCase()},o=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";return Ln=i}function hi(){if(Bn)return Vn;Bn=1;var t=b(),e=Oe().f,n=Fe(),i=on(),r=fe(),o=ci(),a=ui();return Vn=function(s,l){var c,u,h,f,d,p=s.target,g=s.global,v=s.stat;if(c=g?t:v?t[p]||r(p,{}):t[p]&&t[p].prototype)for(u in l){if(f=l[u],h=s.dontCallGetSet?(d=e(c,u))&&d.value:c[u],!a(g?u:p+(v?".":"#")+u,s.forced)&&void 0!==h){if(typeof f==typeof h)continue;o(f,h)}(s.sham||h&&h.sham)&&n(f,"sham",!0),i(c,u,f,s)}}}function fi(){if(Mn)return Hn;Mn=1;var t=xt();return Hn=Array.isArray||function(e){return"Array"===t(e)}}function di(){if(zn)return Un;zn=1;var t=TypeError;return Un=function(e){if(e>9007199254740991)throw t("Maximum allowed index exceeded");return e}}function pi(){if(Wn)return qn;Wn=1;var t=I(),e=Ne(),n=wt();return qn=function(i,r,o){t?e.f(i,r,n(0,o)):i[r]=o}}function gi(){if(Kn)return Gn;Kn=1;var t={};return t[me()("toStringTag")]="z",Gn="[object z]"===String(t)}function vi(){if(Yn)return Jn;Yn=1;var t=gi(),e=Pt(),n=xt(),i=me()("toStringTag"),r=Object,o="Arguments"===n(function(){return arguments}());return Jn=t?n:function(t){var a,s,l;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(s=function(t,e){try{return t[e]}catch(t){}}(a=r(t),i))?s:o?n(a):"Object"===(l=n(a))&&e(a.callee)?"Arguments":l}}function bi(){if(Xn)return Qn;Xn=1;var t=St(),e=P(),n=Pt(),i=vi(),r=At(),o=Ze(),a=function(){},s=r("Reflect","construct"),l=/^\s*(?:class|function)\b/,c=t(l.exec),u=!l.test(a),h=function(t){if(!n(t))return!1;try{return s(a,[],t),!0}catch(t){return!1}},f=function(t){if(!n(t))return!1;switch(i(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return u||!!c(l,o(t))}catch(t){return!0}};return f.sham=!0,Qn=!s||e((function(){var t;return h(h.call)||!h(Object)||!h((function(){t=!0}))||t}))?f:h}function mi(){if(ti)return Zn;ti=1;var t=fi(),e=bi(),n=It(),i=me()("species"),r=Array;return Zn=function(o){var a;return t(o)&&(a=o.constructor,(e(a)&&(a===r||t(a.prototype))||n(a)&&null===(a=a[i]))&&(a=void 0)),void 0===a?r:a}}function yi(){if(ni)return ei;ni=1;var t=mi();return ei=function(e,n){return new(t(e))(0===n?0:n)}}function wi(){if(ri)return ii;ri=1;var t=P(),e=me(),n=Et(),i=e("species");return ii=function(e){return n>=51||!t((function(){var t=[];return(t.constructor={})[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}}!function(){if(oi)return v;oi=1;var t=hi(),e=P(),n=fi(),i=It(),r=ge(),o=Pn(),a=di(),s=pi(),l=yi(),c=wi(),u=me(),h=Et(),f=u("isConcatSpreadable"),d=h>=51||!e((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),p=function(t){if(!i(t))return!1;var e=t[f];return void 0!==e?!!e:n(t)};t({target:"Array",proto:!0,arity:1,forced:!d||!c("concat")},{concat:function(t){var e,n,i,c,u,h=r(this),f=l(h,0),d=0;for(e=-1,i=arguments.length;e<i;e++)if(p(u=-1===e?h:arguments[e]))for(c=o(u),a(d+c),n=0;n<c;n++,d++)n in u&&s(f,d,u[n]);else a(d+1),s(f,d++,u);return f.length=d,f}})}();var Si,xi,Oi,ki,Ti,Ci,Pi,Ii={};function Ai(){if(xi)return Si;xi=1;var t=xt(),e=St();return Si=function(n){if("Function"===t(n))return e(n)}}function Ri(){if(ki)return Oi;ki=1;var t=Ai(),e=Lt(),n=A(),i=t(t.bind);return Oi=function(t,r){return e(t),void 0===r?t:n?i(t,r):function(){return t.apply(r,arguments)}},Oi}function $i(){if(Ci)return Ti;Ci=1;var t=Ri(),e=St(),n=Ot(),i=ge(),r=Pn(),o=yi(),a=e([].push),s=function(e){var s=1===e,l=2===e,c=3===e,u=4===e,h=6===e,f=7===e,d=5===e||h;return function(p,g,v,b){for(var m,y,w=i(p),S=n(w),x=r(S),O=t(g,v),k=0,T=b||o,C=s?T(p,x):l||f?T(p,0):void 0;x>k;k++)if((d||k in S)&&(y=O(m=S[k],k,w),e))if(s)C[k]=y;else if(y)switch(e){case 3:return!0;case 5:return m;case 6:return k;case 2:a(C,m)}else switch(e){case 4:return!1;case 7:a(C,m)}return h?-1:c||u?u:C}};return Ti={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}}!function(){if(Pi)return Ii;Pi=1;var t=hi(),e=$i().filter;t({target:"Array",proto:!0,forced:!wi()("filter")},{filter:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}})}();var Ei,ji,Ni,Fi,Di,Li,_i,Vi,Bi,Hi,Mi={},Ui={};function zi(){if(ji)return Ei;ji=1;var t=An(),e=Rn();return Ei=Object.keys||function(n){return t(n,e)}}function qi(){if(Di)return Fi;Di=1;var t=At();return Fi=t("document","documentElement")}function Wi(){if(_i)return Li;_i=1;var t,e=je(),n=function(){if(Ni)return Ui;Ni=1;var t=I(),e=Ee(),n=Ne(),i=je(),r=Ct(),o=zi();return Ui.f=t&&!e?Object.defineProperties:function(t,e){i(t);for(var a,s=r(e),l=o(e),c=l.length,u=0;c>u;)n.f(t,a=l[u++],s[a]);return t},Ui}(),i=Rn(),r=en(),o=qi(),a=Se(),s=tn(),l="prototype",c="script",u=s("IE_PROTO"),h=function(){},f=function(t){return"<"+c+">"+t+"</"+c+">"},d=function(t){t.write(f("")),t.close();var e=t.parentWindow.Object;return t=null,e},p=function(){try{t=new ActiveXObject("htmlfile")}catch(t){}var e,n,r;p="undefined"!=typeof document?document.domain&&t?d(t):(n=a("iframe"),r="java"+c+":",n.style.display="none",o.appendChild(n),n.src=String(r),(e=n.contentWindow.document).open(),e.write(f("document.F=Object")),e.close(),e.F):d(t);for(var s=i.length;s--;)delete p[l][i[s]];return p()};return r[u]=!0,Li=Object.create||function(t,i){var r;return null!==t?(h[l]=e(t),r=new h,h[l]=null,r[u]=t):r=p(),void 0===i?r:n.f(r,i)}}function Gi(){if(Bi)return Vi;Bi=1;var t=me(),e=Wi(),n=Ne().f,i=t("unscopables"),r=Array.prototype;return void 0===r[i]&&n(r,i,{configurable:!0,value:e(null)}),Vi=function(t){r[i][t]=!0}}!function(){if(Hi)return Mi;Hi=1;var t=hi(),e=$i().find,n=Gi(),i="find",r=!0;i in[]&&Array(1)[i]((function(){r=!1})),t({target:"Array",proto:!0,forced:r},{find:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),n(i)}();var Ki,Ji={};!function(){if(Ki)return Ji;Ki=1;var t=hi(),e=$i().findIndex,n=Gi(),i="findIndex",r=!0;i in[]&&Array(1)[i]((function(){r=!1})),t({target:"Array",proto:!0,forced:r},{findIndex:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),n(i)}();var Yi,Qi={};!function(){if(Yi)return Qi;Yi=1;var t=hi(),e=In().includes,n=P(),i=Gi();t({target:"Array",proto:!0,forced:n((function(){return!Array(1).includes()}))},{includes:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")}();var Xi,Zi,tr,er,nr,ir,rr,or,ar,sr,lr,cr,ur,hr,fr,dr,pr,gr,vr,br,mr,yr,wr,Sr,xr,Or,kr,Tr,Cr,Pr={};function Ir(){if(Zi)return Xi;Zi=1;var t=P();return Xi=function(e,n){var i=[][e];return!!i&&t((function(){i.call(null,n||function(){return 1},1)}))}}function Ar(){return nr?er:(nr=1,er={})}function Rr(){if(rr)return ir;rr=1;var t=P();return ir=!t((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))}function $r(){if(ar)return or;ar=1;var t=ve(),e=Pt(),n=ge(),i=tn(),r=Rr(),o=i("IE_PROTO"),a=Object,s=a.prototype;return or=r?a.getPrototypeOf:function(i){var r=n(i);if(t(r,o))return r[o];var l=r.constructor;return e(l)&&r instanceof l?l.prototype:r instanceof a?s:null}}function Er(){if(lr)return sr;lr=1;var t,e,n,i=P(),r=Pt(),o=It(),a=Wi(),s=$r(),l=on(),c=me(),u=he(),h=c("iterator"),f=!1;return[].keys&&("next"in(n=[].keys())?(e=s(s(n)))!==Object.prototype&&(t=e):f=!0),!o(t)||i((function(){var e={};return t[h].call(e)!==e}))?t={}:u&&(t=a(t)),r(t[h])||l(t,h,(function(){return this})),sr={IteratorPrototype:t,BUGGY_SAFARI_ITERATORS:f}}function jr(){if(ur)return cr;ur=1;var t=Ne().f,e=ve(),n=me()("toStringTag");return cr=function(i,r,o){i&&!o&&(i=i.prototype),i&&!e(i,n)&&t(i,n,{configurable:!0,value:r})}}function Nr(){if(fr)return hr;fr=1;var t=Er().IteratorPrototype,e=Wi(),n=wt(),i=jr(),r=Ar(),o=function(){return this};return hr=function(a,s,l,c){var u=s+" Iterator";return a.prototype=e(t,{next:n(+!c,l)}),i(a,u,!1,!0),r[u]=o,a}}function Fr(){if(vr)return gr;vr=1;var t=It();return gr=function(e){return t(e)||null===e}}function Dr(){if(mr)return br;mr=1;var t=Fr(),e=String,n=TypeError;return br=function(i){if(t(i))return i;throw new n("Can't set "+e(i)+" as a prototype")}}function Lr(){if(wr)return yr;wr=1;var t=function(){if(pr)return dr;pr=1;var t=St(),e=Lt();return dr=function(n,i,r){try{return t(e(Object.getOwnPropertyDescriptor(n,i)[r]))}catch(t){}}}(),e=It(),n=Tt(),i=Dr();return yr=Object.setPrototypeOf||("__proto__"in{}?function(){var r,o=!1,a={};try{(r=t(Object.prototype,"__proto__","set"))(a,[]),o=a instanceof Array}catch(t){}return function(t,a){return n(t),i(a),e(t)?(o?r(t,a):t.__proto__=a,t):t}}():void 0)}function _r(){if(xr)return Sr;xr=1;var t=hi(),e=R(),n=he(),i=Xe(),r=Pt(),o=Nr(),a=$r(),s=Lr(),l=jr(),c=Fe(),u=on(),h=me(),f=Ar(),d=Er(),p=i.PROPER,g=i.CONFIGURABLE,v=d.IteratorPrototype,b=d.BUGGY_SAFARI_ITERATORS,m=h("iterator"),y="keys",w="values",S="entries",x=function(){return this};return Sr=function(i,h,d,O,k,T,C){o(d,h,O);var P,I,A,R=function(t){if(t===k&&F)return F;if(!b&&t&&t in j)return j[t];switch(t){case y:case w:case S:return function(){return new d(this,t)}}return function(){return new d(this)}},$=h+" Iterator",E=!1,j=i.prototype,N=j[m]||j["@@iterator"]||k&&j[k],F=!b&&N||R(k),D="Array"===h&&j.entries||N;if(D&&(P=a(D.call(new i)))!==Object.prototype&&P.next&&(n||a(P)===v||(s?s(P,v):r(P[m])||u(P,m,x)),l(P,$,!0,!0),n&&(f[$]=x)),p&&k===w&&N&&N.name!==w&&(!n&&g?c(j,"name",w):(E=!0,F=function(){return e(N,this)})),k)if(I={values:R(w),keys:T?F:R(y),entries:R(S)},C)for(A in I)(b||E||!(A in j))&&u(j,A,I[A]);else t({target:h,proto:!0,forced:b||E},I);return n&&!C||j[m]===F||u(j,m,F,{name:k}),f[h]=F,I}}function Vr(){return kr?Or:(kr=1,Or=function(t,e){return{value:t,done:e}})}function Br(){if(Cr)return Tr;Cr=1;var t=Ct(),e=Gi(),n=Ar(),i=nn(),r=Ne().f,o=_r(),a=Vr(),s=he(),l=I(),c="Array Iterator",u=i.set,h=i.getterFor(c);Tr=o(Array,"Array",(function(e,n){u(this,{type:c,target:t(e),index:0,kind:n})}),(function(){var t=h(this),e=t.target,n=t.index++;if(!e||n>=e.length)return t.target=null,a(void 0,!0);switch(t.kind){case"keys":return a(n,!1);case"values":return a(e[n],!1)}return a([n,e[n]],!1)}),"values");var f=n.Arguments=n.Array;if(e("keys"),e("values"),e("entries"),!s&&l&&"values"!==f.name)try{r(f,"name",{value:"values"})}catch(t){}return Tr}!function(){if(tr)return Pr;tr=1;var t=hi(),e=Ai(),n=In().indexOf,i=Ir(),r=e([].indexOf),o=!!r&&1/r([1],1,-0)<0;t({target:"Array",proto:!0,forced:o||!i("indexOf")},{indexOf:function(t){var e=arguments.length>1?arguments[1]:void 0;return o?r(this,t,e)||0:n(this,t,e)}})}(),Br();var Hr,Mr={};!function(){if(Hr)return Mr;Hr=1;var t=hi(),e=St(),n=Ot(),i=Ct(),r=Ir(),o=e([].join);t({target:"Array",proto:!0,forced:n!==Object||!r("join",",")},{join:function(t){return o(i(this),void 0===t?",":t)}})}();var Ur,zr={};!function(){if(Ur)return zr;Ur=1;var t=hi(),e=$i().map;t({target:"Array",proto:!0,forced:!wi()("map")},{map:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}})}();var qr,Wr={};!function(){if(qr)return Wr;qr=1;var t=hi(),e=St(),n=fi(),i=e([].reverse),r=[1,2];t({target:"Array",proto:!0,forced:String(r)===String(r.reverse())},{reverse:function(){return n(this)&&(this.length=this.length),i(this)}})}();var Gr,Kr,Jr,Yr={};function Qr(){if(Kr)return Gr;Kr=1;var t=St();return Gr=t([].slice)}!function(){if(Jr)return Yr;Jr=1;var t=hi(),e=fi(),n=bi(),i=It(),r=Tn(),o=Pn(),a=Ct(),s=pi(),l=me(),c=wi(),u=Qr(),h=c("slice"),f=l("species"),d=Array,p=Math.max;t({target:"Array",proto:!0,forced:!h},{slice:function(t,l){var c,h,g,v=a(this),b=o(v),m=r(t,b),y=r(void 0===l?b:l,b);if(e(v)&&(c=v.constructor,(n(c)&&(c===d||e(c.prototype))||i(c)&&null===(c=c[f]))&&(c=void 0),c===d||void 0===c))return u(v,m,y);for(h=new(void 0===c?d:c)(p(y-m,0)),g=0;m<y;m++,g++)m in v&&s(h,g,v[m]);return h.length=g,h}})}();var Xr,Zr,to,eo,no,io,ro,oo,ao,so,lo,co,uo,ho={};function fo(){if(Zr)return Xr;Zr=1;var t=Dt(),e=TypeError;return Xr=function(n,i){if(!delete n[i])throw new e("Cannot delete property "+t(i)+" of "+t(n))}}function po(){if(eo)return to;eo=1;var t=vi(),e=String;return to=function(n){if("Symbol"===t(n))throw new TypeError("Cannot convert a Symbol value to a string");return e(n)}}function go(){if(io)return no;io=1;var t=Qr(),e=Math.floor,n=function(i,r){var o=i.length;if(o<8)for(var a,s,l=1;l<o;){for(s=l,a=i[l];s&&r(i[s-1],a)>0;)i[s]=i[--s];s!==l++&&(i[s]=a)}else for(var c=e(o/2),u=n(t(i,0,c),r),h=n(t(i,c),r),f=u.length,d=h.length,p=0,g=0;p<f||g<d;)i[p+g]=p<f&&g<d?r(u[p],h[g])<=0?u[p++]:h[g++]:p<f?u[p++]:h[g++];return i};return no=n}!function(){if(uo)return ho;uo=1;var t=hi(),e=St(),n=Lt(),i=ge(),r=Pn(),o=fo(),a=po(),s=P(),l=go(),c=Ir(),u=function(){if(oo)return ro;oo=1;var t=$t().match(/firefox\/(\d+)/i);return ro=!!t&&+t[1]}(),h=function(){if(so)return ao;so=1;var t=$t();return ao=/MSIE|Trident/.test(t)}(),f=Et(),d=function(){if(co)return lo;co=1;var t=$t().match(/AppleWebKit\/(\d+)\./);return lo=!!t&&+t[1]}(),p=[],g=e(p.sort),v=e(p.push),b=s((function(){p.sort(void 0)})),m=s((function(){p.sort(null)})),y=c("sort"),w=!s((function(){if(f)return f<70;if(!(u&&u>3)){if(h)return!0;if(d)return d<603;var t,e,n,i,r="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(i=0;i<47;i++)p.push({k:e+i,v:n})}for(p.sort((function(t,e){return e.v-t.v})),i=0;i<p.length;i++)e=p[i].k.charAt(0),r.charAt(r.length-1)!==e&&(r+=e);return"DGBEFHACIJK"!==r}}));t({target:"Array",proto:!0,forced:b||!m||!y||!w},{sort:function(t){void 0!==t&&n(t);var e=i(this);if(w)return void 0===t?g(e):g(e,t);var s,c,u=[],h=r(e);for(c=0;c<h;c++)c in e&&v(u,e[c]);for(l(u,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:a(e)>a(n)?1:-1}}(t)),s=r(u),c=0;c<s;)e[c]=u[c++];for(;c<h;)o(e,c++);return e}})}();var vo,bo,mo,yo={};!function(){if(mo)return yo;mo=1;var t=hi(),e=ge(),n=Tn(),i=kn(),r=Pn(),o=function(){if(bo)return vo;bo=1;var t=I(),e=fi(),n=TypeError,i=Object.getOwnPropertyDescriptor,r=t&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();return vo=r?function(t,r){if(e(t)&&!i(t,"length").writable)throw new n("Cannot set read only .length");return t.length=r}:function(t,e){return t.length=e}}(),a=di(),s=yi(),l=pi(),c=fo(),u=wi()("splice"),h=Math.max,f=Math.min;t({target:"Array",proto:!0,forced:!u},{splice:function(t,u){var d,p,g,v,b,m,y=e(this),w=r(y),S=n(t,w),x=arguments.length;for(0===x?d=p=0:1===x?(d=0,p=w-S):(d=x-2,p=f(h(i(u),0),w-S)),a(w+d-p),g=s(y,p),v=0;v<p;v++)(b=S+v)in y&&l(g,v,y[b]);if(g.length=p,d<p){for(v=S;v<w-p;v++)m=v+d,(b=v+p)in y?y[m]=y[b]:c(y,m);for(v=w;v>w-p+d;v--)c(y,v-1)}else if(d>p)for(v=w-p;v>S;v--)m=v+d-1,(b=v+p-1)in y?y[m]=y[b]:c(y,m);for(v=0;v<d;v++)y[v+S]=arguments[v+2];return o(y,w-p+d),g}})}();var wo,So={};!function(){if(wo)return So;wo=1;var t=hi(),e=P(),n=ge(),i=ye();t({target:"Date",proto:!0,arity:1,forced:e((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}))},{toJSON:function(t){var e=n(this),r=i(e,"number");return"number"!=typeof r||isFinite(r)?e.toISOString():null}})}();var xo,Oo,ko,To,Co,Po,Io,Ao,Ro,$o,Eo,jo={};function No(){if(Oo)return xo;Oo=1;var t=b();return xo=t}function Fo(){if(To)return ko;To=1;var t=Pt(),e=It(),n=Lr();return ko=function(i,r,o){var a,s;return n&&t(a=r.constructor)&&a!==o&&e(s=a.prototype)&&s!==o.prototype&&n(i,s),i}}function Do(){if(Po)return Co;Po=1;var t=St();return Co=t(1.1.valueOf)}function Lo(){return Ao?Io:(Ao=1,Io="\t\n\v\f\r                　\u2028\u2029\ufeff")}function _o(){if($o)return Ro;$o=1;var t=St(),e=Tt(),n=po(),i=Lo(),r=t("".replace),o=RegExp("^["+i+"]+"),a=RegExp("(^|[^"+i+"])["+i+"]+$"),s=function(t){return function(i){var s=n(e(i));return 1&t&&(s=r(s,o,"")),2&t&&(s=r(s,a,"$1")),s}};return Ro={start:s(1),end:s(2),trim:s(3)}}!function(){if(Eo)return jo;Eo=1;var t=hi(),e=he(),n=I(),i=b(),r=No(),o=St(),a=ui(),s=ve(),l=Fo(),c=Rt(),u=Ft(),h=ye(),f=P(),d=$n().f,p=Oe().f,g=Ne().f,v=Do(),m=_o().trim,y="Number",w=i[y],S=r[y],x=w.prototype,O=i.TypeError,k=o("".slice),T=o("".charCodeAt),C=function(t){var e,n,i,r,o,a,s,l,c=h(t,"number");if(u(c))throw new O("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=m(c),43===(e=T(c,0))||45===e){if(88===(n=T(c,2))||120===n)return NaN}else if(48===e){switch(T(c,1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+c}for(a=(o=k(c,2)).length,s=0;s<a;s++)if((l=T(o,s))<48||l>r)return NaN;return parseInt(o,i)}return+c},A=a(y,!w(" 0o1")||!w("0b1")||w("+0x1")),R=function(t){var e,n=arguments.length<1?0:w(function(t){var e=h(t,"number");return"bigint"==typeof e?e:C(e)}(t));return c(x,e=this)&&f((function(){v(e)}))?l(Object(n),this,R):n};R.prototype=x,A&&!e&&(x.constructor=R),t({global:!0,constructor:!0,wrap:!0,forced:A},{Number:R});var $=function(t,e){for(var i,r=n?d(e):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),o=0;r.length>o;o++)s(e,i=r[o])&&!s(t,i)&&g(t,i,p(e,i))};e&&S&&$(r[y],S),(A||e)&&$(r[y],w)}();var Vo,Bo,Ho,Mo={};!function(){if(Ho)return Mo;Ho=1;var t=hi(),e=function(){if(Bo)return Vo;Bo=1;var t=I(),e=St(),n=R(),i=P(),r=zi(),o=si(),a=yt(),s=ge(),l=Ot(),c=Object.assign,u=Object.defineProperty,h=e([].concat);return Vo=!c||i((function(){if(t&&1!==c({b:1},c(u({},"a",{enumerable:!0,get:function(){u(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},n={},i=Symbol("assign detection"),o="abcdefghijklmnopqrst";return e[i]=7,o.split("").forEach((function(t){n[t]=t})),7!==c({},e)[i]||r(c({},n)).join("")!==o}))?function(e,i){for(var c=s(e),u=arguments.length,f=1,d=o.f,p=a.f;u>f;)for(var g,v=l(arguments[f++]),b=d?h(r(v),d(v)):r(v),m=b.length,y=0;m>y;)g=b[y++],t&&!n(p,v,g)||(c[g]=v[g]);return c}:c,Vo}();t({target:"Object",stat:!0,arity:2,forced:Object.assign!==e},{assign:e})}();var Uo,zo,qo,Wo={};!function(){if(qo)return Wo;qo=1;var t=hi(),e=function(){if(zo)return Uo;zo=1;var t=I(),e=P(),n=St(),i=$r(),r=zi(),o=Ct(),a=n(yt().f),s=n([].push),l=t&&e((function(){var t=Object.create(null);return t[2]=2,!a(t,2)})),c=function(e){return function(n){for(var c,u=o(n),h=r(u),f=l&&null===i(u),d=h.length,p=0,g=[];d>p;)c=h[p++],t&&!(f?c in u:a(u,c))||s(g,e?[c,u[c]]:u[c]);return g}};return Uo={entries:c(!0),values:c(!1)}}().entries;t({target:"Object",stat:!0},{entries:function(t){return e(t)}})}();var Go,Ko={};!function(){if(Go)return Ko;Go=1;var t=hi(),e=ge(),n=zi();t({target:"Object",stat:!0,forced:P()((function(){n(1)}))},{keys:function(t){return n(e(t))}})}();var Jo,Yo,Qo,Xo={};!function(){if(Qo)return Xo;Qo=1;var t=gi(),e=on(),n=function(){if(Yo)return Jo;Yo=1;var t=gi(),e=vi();return Jo=t?{}.toString:function(){return"[object "+e(this)+"]"}}();t||e(Object.prototype,"toString",n,{unsafe:!0})}();var Zo,ta,ea,na={};!function(){if(ea)return na;ea=1;var t=hi(),e=function(){if(ta)return Zo;ta=1;var t=b(),e=P(),n=St(),i=po(),r=_o().trim,o=Lo(),a=n("".charAt),s=t.parseFloat,l=t.Symbol,c=l&&l.iterator,u=1/s(o+"-0")!=-1/0||c&&!e((function(){s(Object(c))}));return Zo=u?function(t){var e=r(i(t)),n=s(e);return 0===n&&"-"===a(e,0)?-0:n}:s}();t({global:!0,forced:parseFloat!==e},{parseFloat:e})}();var ia,ra,oa,aa={};!function(){if(oa)return aa;oa=1;var t=hi(),e=function(){if(ra)return ia;ra=1;var t=b(),e=P(),n=St(),i=po(),r=_o().trim,o=Lo(),a=t.parseInt,s=t.Symbol,l=s&&s.iterator,c=/^[+-]?0x/i,u=n(c.exec),h=8!==a(o+"08")||22!==a(o+"0x16")||l&&!e((function(){a(Object(l))}));return ia=h?function(t,e){var n=r(i(t));return a(n,e>>>0||(u(c,n)?16:10))}:a}();t({global:!0,forced:parseInt!==e},{parseInt:e})}();var sa,la,ca,ua,ha,fa,da,pa,ga,va,ba,ma,ya,wa,Sa,xa,Oa,ka,Ta,Ca,Pa,Ia={};function Aa(){if(la)return sa;la=1;var t=It(),e=xt(),n=me()("match");return sa=function(i){var r;return t(i)&&(void 0!==(r=i[n])?!!r:"RegExp"===e(i))}}function Ra(){if(fa)return ha;fa=1;var t=je();return ha=function(){var e=t(this),n="";return e.hasIndices&&(n+="d"),e.global&&(n+="g"),e.ignoreCase&&(n+="i"),e.multiline&&(n+="m"),e.dotAll&&(n+="s"),e.unicode&&(n+="u"),e.unicodeSets&&(n+="v"),e.sticky&&(n+="y"),n}}function $a(){if(pa)return da;pa=1;var t=R(),e=ve(),n=Rt(),i=function(){if(ua)return ca;ua=1;var t=b(),e=P(),n=t.RegExp,i=!e((function(){var t=!0;try{n(".","d")}catch(e){t=!1}var e={},i="",r=t?"dgimsy":"gimsy",o=function(t,n){Object.defineProperty(e,t,{get:function(){return i+=n,!0}})},a={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var s in t&&(a.hasIndices="d"),a)o(s,a[s]);return Object.getOwnPropertyDescriptor(n.prototype,"flags").get.call(e)!==r||i!==r}));return ca={correct:i}}(),r=Ra(),o=RegExp.prototype;return da=i.correct?function(t){return t.flags}:function(a){return i.correct||!n(o,a)||e(a,"flags")?a.flags:t(r,a)}}function Ea(){if(va)return ga;va=1;var t=P(),e=b().RegExp,n=t((function(){var t=e("a","y");return t.lastIndex=2,null!==t.exec("abcd")})),i=n||t((function(){return!e("a","y").sticky})),r=n||t((function(){var t=e("^r","gy");return t.lastIndex=2,null!==t.exec("str")}));return ga={BROKEN_CARET:r,MISSED_STICKY:i,UNSUPPORTED_Y:n}}function ja(){if(ma)return ba;ma=1;var t=Ne().f;return ba=function(e,n,i){i in e||t(e,i,{configurable:!0,get:function(){return n[i]},set:function(t){n[i]=t}})}}function Na(){if(wa)return ya;wa=1;var t=rn(),e=Ne();return ya=function(n,i,r){return r.get&&t(r.get,i,{getter:!0}),r.set&&t(r.set,i,{setter:!0}),e.f(n,i,r)}}function Fa(){if(xa)return Sa;xa=1;var t=At(),e=Na(),n=me(),i=I(),r=n("species");return Sa=function(n){var o=t(n);i&&o&&!o[r]&&e(o,r,{configurable:!0,get:function(){return this}})}}function Da(){if(ka)return Oa;ka=1;var t=P(),e=b().RegExp;return Oa=t((function(){var t=e(".","s");return!(t.dotAll&&t.test("\n")&&"s"===t.flags)}))}function La(){if(Ca)return Ta;Ca=1;var t=P(),e=b().RegExp;return Ta=t((function(){var t=e("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))}!function(){if(Pa)return Ia;Pa=1;var t=I(),e=b(),n=St(),i=ui(),r=Fo(),o=Fe(),a=Wi(),s=$n().f,l=Rt(),c=Aa(),u=po(),h=$a(),f=Ea(),d=ja(),p=on(),g=P(),v=ve(),m=nn().enforce,y=Fa(),w=me(),S=Da(),x=La(),O=w("match"),k=e.RegExp,T=k.prototype,C=e.SyntaxError,A=n(T.exec),R=n("".charAt),$=n("".replace),E=n("".indexOf),j=n("".slice),N=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,F=/a/g,D=/a/g,L=new k(F)!==F,_=f.MISSED_STICKY,V=f.UNSUPPORTED_Y,B=t&&(!L||_||S||x||g((function(){return D[O]=!1,k(F)!==F||k(D)===D||"/a/i"!==String(k(F,"i"))})));if(i("RegExp",B)){for(var H=function(t,e){var n,i,s,f,d,p,g=l(T,this),b=c(t),y=void 0===e,w=[],O=t;if(!g&&b&&y&&t.constructor===H)return t;if((b||l(T,t))&&(t=t.source,y&&(e=h(O))),t=void 0===t?"":u(t),e=void 0===e?"":u(e),O=t,S&&"dotAll"in F&&(i=!!e&&E(e,"s")>-1)&&(e=$(e,/s/g,"")),n=e,_&&"sticky"in F&&(s=!!e&&E(e,"y")>-1)&&V&&(e=$(e,/y/g,"")),x&&(f=function(t){for(var e,n=t.length,i=0,r="",o=[],s=a(null),l=!1,c=!1,u=0,h="";i<=n;i++){if("\\"===(e=R(t,i)))e+=R(t,++i);else if("]"===e)l=!1;else if(!l)switch(!0){case"["===e:l=!0;break;case"("===e:if(r+=e,"?:"===j(t,i+1,i+3))continue;A(N,j(t,i+1))&&(i+=2,c=!0),u++;continue;case">"===e&&c:if(""===h||v(s,h))throw new C("Invalid capture group name");s[h]=!0,o[o.length]=[h,u],c=!1,h="";continue}c?h+=e:r+=e}return[r,o]}(t),t=f[0],w=f[1]),d=r(k(t,e),g?this:T,H),(i||s||w.length)&&(p=m(d),i&&(p.dotAll=!0,p.raw=H(function(t){for(var e,n=t.length,i=0,r="",o=!1;i<=n;i++)"\\"!==(e=R(t,i))?o||"."!==e?("["===e?o=!0:"]"===e&&(o=!1),r+=e):r+="[\\s\\S]":r+=e+R(t,++i);return r}(t),n)),s&&(p.sticky=!0),w.length&&(p.groups=w)),t!==O)try{o(d,"source",""===O?"(?:)":O)}catch(t){}return d},M=s(k),U=0;M.length>U;)d(H,k,M[U++]);T.constructor=H,H.prototype=T,p(e,"RegExp",H,{constructor:!0})}y("RegExp")}();var _a,Va,Ba,Ha={};function Ma(){if(Va)return _a;Va=1;var t,e,n=R(),i=St(),r=po(),o=Ra(),a=Ea(),s=pe(),l=Wi(),c=nn().get,u=Da(),h=La(),f=s("native-string-replace",String.prototype.replace),d=RegExp.prototype.exec,p=d,g=i("".charAt),v=i("".indexOf),b=i("".replace),m=i("".slice),y=(e=/b*/g,n(d,t=/a/,"a"),n(d,e,"a"),0!==t.lastIndex||0!==e.lastIndex),w=a.BROKEN_CARET,S=void 0!==/()??/.exec("")[1];return(y||S||w||u||h)&&(p=function(t){var e,i,a,s,u,h,x,O=this,k=c(O),T=r(t),C=k.raw;if(C)return C.lastIndex=O.lastIndex,e=n(p,C,T),O.lastIndex=C.lastIndex,e;var P=k.groups,I=w&&O.sticky,A=n(o,O),R=O.source,$=0,E=T;if(I&&(A=b(A,"y",""),-1===v(A,"g")&&(A+="g"),E=m(T,O.lastIndex),O.lastIndex>0&&(!O.multiline||O.multiline&&"\n"!==g(T,O.lastIndex-1))&&(R="(?: "+R+")",E=" "+E,$++),i=new RegExp("^(?:"+R+")",A)),S&&(i=new RegExp("^"+R+"$(?!\\s)",A)),y&&(a=O.lastIndex),s=n(d,I?i:O,E),I?s?(s.input=m(s.input,$),s[0]=m(s[0],$),s.index=O.lastIndex,O.lastIndex+=s[0].length):O.lastIndex=0:y&&s&&(O.lastIndex=O.global?s.index+s[0].length:a),S&&s&&s.length>1&&n(f,s[0],i,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)})),s&&P)for(s.groups=h=l(null),u=0;u<P.length;u++)h[(x=P[u])[0]]=s[x[1]];return s}),_a=p}function Ua(){if(Ba)return Ha;Ba=1;var t=hi(),e=Ma();return t({target:"RegExp",proto:!0,forced:/./.exec!==e},{exec:e}),Ha}Ua();var za,qa={};!function(){if(za)return qa;za=1;var t=Xe().PROPER,e=on(),n=je(),i=po(),r=P(),o=$a(),a="toString",s=RegExp.prototype,l=s[a],c=r((function(){return"/a/b"!==l.call({source:"a",flags:"b"})})),u=t&&l.name!==a;(c||u)&&e(s,a,(function(){var t=n(this);return"/"+i(t.source)+"/"+i(o(t))}),{unsafe:!0})}();var Wa,Ga,Ka,Ja,Ya,Qa={};function Xa(){if(Ga)return Wa;Ga=1;var t=Aa(),e=TypeError;return Wa=function(n){if(t(n))throw new e("The method doesn't accept regular expressions");return n}}function Za(){if(Ja)return Ka;Ja=1;var t=me()("match");return Ka=function(e){var n=/./;try{"/./"[e](n)}catch(i){try{return n[t]=!1,"/./"[e](n)}catch(t){}}return!1}}!function(){if(Ya)return Qa;Ya=1;var t=hi(),e=St(),n=Xa(),i=Tt(),r=po(),o=Za(),a=e("".indexOf);t({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~a(r(i(this)),r(n(t)),arguments.length>1?arguments[1]:void 0)}})}();var ts,es,ns,is,rs,os,as,ss,ls,cs,us,hs,fs,ds={};function ps(){if(is)return ns;is=1,Ua();var t=R(),e=on(),n=Ma(),i=P(),r=me(),o=Fe(),a=r("species"),s=RegExp.prototype;return ns=function(l,c,u,h){var f=r(l),d=!i((function(){var t={};return t[f]=function(){return 7},7!==""[l](t)})),p=d&&!i((function(){var t=!1,e=/a/;return"split"===l&&((e={}).constructor={},e.constructor[a]=function(){return e},e.flags="",e[f]=/./[f]),e.exec=function(){return t=!0,null},e[f](""),!t}));if(!d||!p||u){var g=/./[f],v=c(f,""[l],(function(e,i,r,o,a){var l=i.exec;return l===n||l===s.exec?d&&!a?{done:!0,value:t(g,i,r,o)}:{done:!0,value:t(e,r,i,o)}:{done:!1}}));e(String.prototype,l,v[0]),e(s,f,v[1])}h&&o(s[f],"sham",!0)}}function gs(){if(os)return rs;os=1;var t=St(),e=kn(),n=po(),i=Tt(),r=t("".charAt),o=t("".charCodeAt),a=t("".slice),s=function(t){return function(s,l){var c,u,h=n(i(s)),f=e(l),d=h.length;return f<0||f>=d?t?"":void 0:(c=o(h,f))<55296||c>56319||f+1===d||(u=o(h,f+1))<56320||u>57343?t?r(h,f):c:t?a(h,f,f+2):u-56320+(c-55296<<10)+65536}};return rs={codeAt:s(!1),charAt:s(!0)}}function vs(){if(ss)return as;ss=1;var t=gs().charAt;return as=function(e,n,i){return n+(i?t(e,n).length:1)}}function bs(){if(cs)return ls;cs=1;var t=St(),e=ge(),n=Math.floor,i=t("".charAt),r=t("".replace),o=t("".slice),a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;return ls=function(t,l,c,u,h,f){var d=c+t.length,p=u.length,g=s;return void 0!==h&&(h=e(h),g=a),r(f,g,(function(e,r){var a;switch(i(r,0)){case"$":return"$";case"&":return t;case"`":return o(l,0,c);case"'":return o(l,d);case"<":a=h[o(r,1,-1)];break;default:var s=+r;if(0===s)return e;if(s>p){var f=n(s/10);return 0===f?e:f<=p?void 0===u[f-1]?i(r,1):u[f-1]+i(r,1):e}a=u[s-1]}return void 0===a?"":a}))}}function ms(){if(hs)return us;hs=1;var t=R(),e=je(),n=Pt(),i=xt(),r=Ma(),o=TypeError;return us=function(a,s){var l=a.exec;if(n(l)){var c=t(l,a,s);return null!==c&&e(c),c}if("RegExp"===i(a))return t(r,a,s);throw new o("RegExp#exec called on incompatible receiver")}}!function(){if(fs)return ds;fs=1;var t=function(){if(es)return ts;es=1;var t=A(),e=Function.prototype,n=e.apply,i=e.call;return ts="object"==typeof Reflect&&Reflect.apply||(t?i.bind(n):function(){return i.apply(n,arguments)}),ts}(),e=R(),n=St(),i=ps(),r=P(),o=je(),a=Pt(),s=It(),l=kn(),c=Cn(),u=po(),h=Tt(),f=vs(),d=_t(),p=bs(),g=$a(),v=ms(),b=me()("replace"),m=Math.max,y=Math.min,w=n([].concat),S=n([].push),x=n("".indexOf),O=n("".slice),k="$0"==="a".replace(/./,"$0"),T=!!/./[b]&&""===/./[b]("a","$0");i("replace",(function(n,i,r){var k=T?"$":"$0";return[function(t,n){var r=h(this),o=s(t)?d(t,b):void 0;return o?e(o,t,r,n):e(i,u(r),t,n)},function(e,n){var s=o(this),h=u(e);if("string"==typeof n&&-1===x(n,k)&&-1===x(n,"$<")){var d=r(i,s,h,n);if(d.done)return d.value}var b=a(n);b||(n=u(n));var T,C=u(g(s)),P=-1!==x(C,"g");P&&(T=-1!==x(C,"u"),s.lastIndex=0);for(var I,A=[];null!==(I=v(s,h))&&(S(A,I),P);){""===u(I[0])&&(s.lastIndex=f(h,c(s.lastIndex),T))}for(var R,$="",E=0,j=0;j<A.length;j++){for(var N,F=u((I=A[j])[0]),D=m(y(l(I.index),h.length),0),L=[],_=1;_<I.length;_++)S(L,void 0===(R=I[_])?R:String(R));var V=I.groups;if(b){var B=w([F],L,D,h);void 0!==V&&S(B,V),N=u(t(n,void 0,B))}else N=p(F,h,D,L,V,n);D>=E&&($+=O(h,E,D)+N,E=D+F.length)}return $+O(h,E)}]}),!!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!k||T)}();var ys,ws,Ss,xs={};function Os(){return ws?ys:(ws=1,ys=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e})}!function(){if(Ss)return xs;Ss=1;var t=R(),e=ps(),n=je(),i=It(),r=Tt(),o=Os(),a=po(),s=_t(),l=ms();e("search",(function(e,c,u){return[function(n){var o=r(this),l=i(n)?s(n,e):void 0;return l?t(l,n,o):new RegExp(n)[e](a(o))},function(t){var e=n(this),i=a(t),r=u(c,e,i);if(r.done)return r.value;var s=e.lastIndex;o(s,0)||(e.lastIndex=0);var h=l(e,i);return o(e.lastIndex,s)||(e.lastIndex=s),null===h?-1:h.index}]}))}();var ks,Ts,Cs,Ps,Is,As={};function Rs(){if(Ts)return ks;Ts=1;var t=bi(),e=Dt(),n=TypeError;return ks=function(i){if(t(i))return i;throw new n(e(i)+" is not a constructor")}}function $s(){if(Ps)return Cs;Ps=1;var t=je(),e=Rs(),n=kt(),i=me()("species");return Cs=function(r,o){var a,s=t(r).constructor;return void 0===s||n(a=t(s)[i])?o:e(a)}}!function(){if(Is)return As;Is=1;var t=R(),e=St(),n=ps(),i=je(),r=It(),o=Tt(),a=$s(),s=vs(),l=Cn(),c=po(),u=_t(),h=ms(),f=Ea(),d=P(),p=f.UNSUPPORTED_Y,g=Math.min,v=e([].push),b=e("".slice),m=!d((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),y="c"==="abbc".split(/(b)*/)[1]||4!=="test".split(/(?:)/,-1).length||2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length;n("split",(function(e,n,f){var d="0".split(void 0,0).length?function(e,i){return void 0===e&&0===i?[]:t(n,this,e,i)}:n;return[function(n,i){var a=o(this),s=r(n)?u(n,e):void 0;return s?t(s,n,a,i):t(d,c(a),n,i)},function(t,e){var r=i(this),o=c(t);if(!y){var u=f(d,r,o,e,d!==n);if(u.done)return u.value}var m=a(r,RegExp),w=r.unicode,S=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(p?"g":"y"),x=new m(p?"^(?:"+r.source+")":r,S),O=void 0===e?4294967295:e>>>0;if(0===O)return[];if(0===o.length)return null===h(x,o)?[o]:[];for(var k=0,T=0,C=[];T<o.length;){x.lastIndex=p?0:T;var P,I=h(x,p?b(o,T):o);if(null===I||(P=g(l(x.lastIndex+(p?T:0)),o.length))===k)T=s(o,T,w);else{if(v(C,b(o,k,T)),C.length===O)return C;for(var A=1;A<=I.length-1;A++)if(v(C,I[A]),C.length===O)return C;T=k=P}}return v(C,b(o,k)),C}]}),y||!m,p)}();var Es,js,Ns,Fs={};!function(){if(Ns)return Fs;Ns=1;var t=hi(),e=_o().trim,n=function(){if(js)return Es;js=1;var t=Xe().PROPER,e=P(),n=Lo();return Es=function(i){return e((function(){return!!n[i]()||"​᠎"!=="​᠎"[i]()||t&&n[i].name!==i}))}}();t({target:"String",proto:!0,forced:n("trim")},{trim:function(){return e(this)}})}();var Ds,Ls,_s,Vs,Bs,Hs,Ms,Us={};function zs(){return Ls?Ds:(Ls=1,Ds={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0})}function qs(){if(Vs)return _s;Vs=1;var t=Se()("span").classList,e=t&&t.constructor&&t.constructor.prototype;return _s=e===Object.prototype?void 0:e}!function(){if(Ms)return Us;Ms=1;var t=b(),e=zs(),n=qs(),i=function(){if(Hs)return Bs;Hs=1;var t=$i().forEach,e=Ir()("forEach");return Bs=e?[].forEach:function(e){return t(this,e,arguments.length>1?arguments[1]:void 0)},Bs}(),r=Fe(),o=function(t){if(t&&t.forEach!==i)try{r(t,"forEach",i)}catch(e){t.forEach=i}};for(var a in e)e[a]&&o(t[a]&&t[a].prototype);o(n)}();var Ws,Gs={};!function(){if(Ws)return Gs;Ws=1;var t=b(),e=zs(),n=qs(),i=Br(),r=Fe(),o=jr(),a=me()("iterator"),s=i.values,l=function(t,n){if(t){if(t[a]!==s)try{r(t,a,s)}catch(e){t[a]=s}if(o(t,n,!0),e[n])for(var l in i)if(t[l]!==i[l])try{r(t,l,i[l])}catch(e){t[l]=i[l]}}};for(var c in e)l(t[c]&&t[c].prototype,c);l(n,"DOMTokenList")}();var Ks,Js={};!function(){if(Ks)return Js;Ks=1;var t=hi(),e=P(),n=ge(),i=$r(),r=Rr();t({target:"Object",stat:!0,forced:e((function(){i(1)})),sham:!r},{getPrototypeOf:function(t){return i(n(t))}})}();var Ys,Qs={};!function(){if(Ys)return Qs;Ys=1;var t,e=hi(),n=Ai(),i=Oe().f,r=Cn(),o=po(),a=Xa(),s=Tt(),l=Za(),c=he(),u=n("".slice),h=Math.min,f=l("endsWith");e({target:"String",proto:!0,forced:!!(c||f||(t=i(String.prototype,"endsWith"),!t||t.writable))&&!f},{endsWith:function(t){var e=o(s(this));a(t);var n=arguments.length>1?arguments[1]:void 0,i=e.length,l=void 0===n?i:h(r(n),i),c=o(t);return u(e,l-c.length,l)===c}})}();var Xs,Zs={};!function(){if(Xs)return Zs;Xs=1;var t=gs().charAt,e=po(),n=nn(),i=_r(),r=Vr(),o="String Iterator",a=n.set,s=n.getterFor(o);i(String,"String",(function(t){a(this,{type:o,string:e(t),index:0})}),(function(){var e,n=s(this),i=n.string,o=n.index;return o>=i.length?r(void 0,!0):(e=t(i,o),n.index+=e.length,r(e,!1))}))}();var tl,el={};!function(){if(tl)return el;tl=1;var t=R(),e=St(),n=ps(),i=je(),r=It(),o=Cn(),a=po(),s=Tt(),l=_t(),c=vs(),u=$a(),h=ms(),f=e("".indexOf);n("match",(function(e,n,d){return[function(n){var i=s(this),o=r(n)?l(n,e):void 0;return o?t(o,n,i):new RegExp(n)[e](a(i))},function(t){var e=i(this),r=a(t),s=d(n,e,r);if(s.done)return s.value;var l=a(u(e));if(-1===f(l,"g"))return h(e,r);var p=-1!==f(l,"u");e.lastIndex=0;for(var g,v=[],b=0;null!==(g=h(e,r));){var m=a(g[0]);v[b]=m,""===m&&(e.lastIndex=c(r,o(e.lastIndex),p)),b++}return 0===b?null:v}]}))}();var nl,il={};!function(){if(nl)return il;nl=1;var t,e=hi(),n=Ai(),i=Oe().f,r=Cn(),o=po(),a=Xa(),s=Tt(),l=Za(),c=he(),u=n("".slice),h=Math.min,f=l("startsWith");e({target:"String",proto:!0,forced:!!(c||f||(t=i(String.prototype,"startsWith"),!t||t.writable))&&!f},{startsWith:function(t){var e=o(s(this));a(t);var n=r(h(arguments.length>1?arguments[1]:void 0,e.length)),i=o(t);return u(e,n,n+i.length)===i}})}();var rl,ol,al,sl,ll,cl,ul,hl,fl,dl,pl,gl,vl,bl,ml,yl,wl,Sl,xl={};function Ol(){if(al)return ol;al=1;var t=b(),e=I(),n=Object.getOwnPropertyDescriptor;return ol=function(i){if(!e)return t[i];var r=n(t,i);return r&&r.value}}function kl(){if(ul)return cl;ul=1;var t=on();return cl=function(e,n,i){for(var r in n)t(e,r,n[r],i);return e}}function Tl(){if(fl)return hl;fl=1;var t=Rt(),e=TypeError;return hl=function(n,i){if(t(i,n))return n;throw new e("Incorrect invocation")}}function Cl(){if(pl)return dl;pl=1;var t=vi(),e=_t(),n=kt(),i=Ar(),r=me()("iterator");return dl=function(o){if(!n(o))return e(o,r)||e(o,"@@iterator")||i[t(o)]}}function Pl(){if(vl)return gl;vl=1;var t=R(),e=Lt(),n=je(),i=Dt(),r=Cl(),o=TypeError;return gl=function(a,s){var l=arguments.length<2?r(a):s;if(e(l))return n(t(l,a));throw new o(i(a)+" is not iterable")},gl}function Il(){if(ml)return bl;ml=1;var t=TypeError;return bl=function(e,n){if(e<n)throw new t("Not enough arguments");return e}}function Al(){if(wl)return yl;wl=1,Br(),function(){if(rl)return xl;rl=1;var t=hi(),e=St(),n=Tn(),i=RangeError,r=String.fromCharCode,o=String.fromCodePoint,a=e([].join);t({target:"String",stat:!0,arity:1,forced:!!o&&1!==o.length},{fromCodePoint:function(t){for(var e,o=[],s=arguments.length,l=0;s>l;){if(e=+arguments[l++],n(e,1114111)!==e)throw new i(e+" is not a valid code point");o[l]=e<65536?r(e):r(55296+((e-=65536)>>10),e%1024+56320)}return a(o,"")}})}();var t=hi(),e=b(),n=Ol(),i=At(),r=R(),o=St(),a=I(),s=function(){if(ll)return sl;ll=1;var t=P(),e=me(),n=I(),i=he(),r=e("iterator");return sl=!t((function(){var t=new URL("b?a=1&b=2&c=3","https://a"),e=t.searchParams,o=new URLSearchParams("a=1&a=2&b=3"),a="";return t.pathname="c%20d",e.forEach((function(t,n){e.delete("b"),a+=n+t})),o.delete("a",2),o.delete("b",void 0),i&&(!t.toJSON||!o.has("a",1)||o.has("a",2)||!o.has("a",void 0)||o.has("b"))||!e.size&&(i||!n)||!e.sort||"https://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[r]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("https://тест").host||"#%D0%B1"!==new URL("https://a#б").hash||"a1c3"!==a||"x"!==new URL("https://x",void 0).host}))}(),l=on(),c=Na(),u=kl(),h=jr(),f=Nr(),d=nn(),p=Tl(),g=Pt(),v=ve(),m=Ri(),y=vi(),w=je(),S=It(),x=po(),O=Wi(),k=wt(),T=Pl(),C=Cl(),A=Vr(),$=Il(),E=me(),j=go(),N=E("iterator"),F="URLSearchParams",D=F+"Iterator",L=d.set,_=d.getterFor(F),V=d.getterFor(D),B=n("fetch"),H=n("Request"),M=n("Headers"),U=H&&H.prototype,z=M&&M.prototype,q=e.TypeError,W=e.encodeURIComponent,G=String.fromCharCode,K=i("String","fromCodePoint"),J=parseInt,Y=o("".charAt),Q=o([].join),X=o([].push),Z=o("".replace),tt=o([].shift),et=o([].splice),nt=o("".split),it=o("".slice),rt=o(/./.exec),ot=/\+/g,at=/^[0-9a-f]+$/i,st=function(t,e){var n=it(t,e,e+2);return rt(at,n)?J(n,16):NaN},lt=function(t){for(var e=0,n=128;n>0&&t&n;n>>=1)e++;return e},ct=function(t){var e=null;switch(t.length){case 1:e=t[0];break;case 2:e=(31&t[0])<<6|63&t[1];break;case 3:e=(15&t[0])<<12|(63&t[1])<<6|63&t[2];break;case 4:e=(7&t[0])<<18|(63&t[1])<<12|(63&t[2])<<6|63&t[3]}return e>1114111?null:e},ut=function(t){for(var e=(t=Z(t,ot," ")).length,n="",i=0;i<e;){var r=Y(t,i);if("%"===r){if("%"===Y(t,i+1)||i+3>e){n+="%",i++;continue}var o=st(t,i+1);if(o!=o){n+=r,i++;continue}i+=2;var a=lt(o);if(0===a)r=G(o);else{if(1===a||a>4){n+="�",i++;continue}for(var s=[o],l=1;l<a&&!(++i+3>e||"%"!==Y(t,i));){var c=st(t,i+1);if(c!=c){i+=3;break}if(c>191||c<128)break;X(s,c),i+=2,l++}if(s.length!==a){n+="�";continue}var u=ct(s);null===u?n+="�":r=K(u)}}n+=r,i++}return n},ht=/[!'()~]|%20/g,ft={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},dt=function(t){return ft[t]},pt=function(t){return Z(W(t),ht,dt)},gt=f((function(t,e){L(this,{type:D,target:_(t).entries,index:0,kind:e})}),F,(function(){var t=V(this),e=t.target,n=t.index++;if(!e||n>=e.length)return t.target=null,A(void 0,!0);var i=e[n];switch(t.kind){case"keys":return A(i.key,!1);case"values":return A(i.value,!1)}return A([i.key,i.value],!1)}),!0),vt=function(t){this.entries=[],this.url=null,void 0!==t&&(S(t)?this.parseObject(t):this.parseQuery("string"==typeof t?"?"===Y(t,0)?it(t,1):t:x(t)))};vt.prototype={type:F,bindURL:function(t){this.url=t,this.update()},parseObject:function(t){var e,n,i,o,a,s,l,c=this.entries,u=C(t);if(u)for(n=(e=T(t,u)).next;!(i=r(n,e)).done;){if(a=(o=T(w(i.value))).next,(s=r(a,o)).done||(l=r(a,o)).done||!r(a,o).done)throw new q("Expected sequence with length 2");X(c,{key:x(s.value),value:x(l.value)})}else for(var h in t)v(t,h)&&X(c,{key:h,value:x(t[h])})},parseQuery:function(t){if(t)for(var e,n,i=this.entries,r=nt(t,"&"),o=0;o<r.length;)(e=r[o++]).length&&(n=nt(e,"="),X(i,{key:ut(tt(n)),value:ut(Q(n,"="))}))},serialize:function(){for(var t,e=this.entries,n=[],i=0;i<e.length;)t=e[i++],X(n,pt(t.key)+"="+pt(t.value));return Q(n,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var bt=function(){p(this,mt);var t=L(this,new vt(arguments.length>0?arguments[0]:void 0));a||(this.size=t.entries.length)},mt=bt.prototype;if(u(mt,{append:function(t,e){var n=_(this);$(arguments.length,2),X(n.entries,{key:x(t),value:x(e)}),a||this.length++,n.updateURL()},delete:function(t){for(var e=_(this),n=$(arguments.length,1),i=e.entries,r=x(t),o=n<2?void 0:arguments[1],s=void 0===o?o:x(o),l=0;l<i.length;){var c=i[l];if(c.key!==r||void 0!==s&&c.value!==s)l++;else if(et(i,l,1),void 0!==s)break}a||(this.size=i.length),e.updateURL()},get:function(t){var e=_(this).entries;$(arguments.length,1);for(var n=x(t),i=0;i<e.length;i++)if(e[i].key===n)return e[i].value;return null},getAll:function(t){var e=_(this).entries;$(arguments.length,1);for(var n=x(t),i=[],r=0;r<e.length;r++)e[r].key===n&&X(i,e[r].value);return i},has:function(t){for(var e=_(this).entries,n=$(arguments.length,1),i=x(t),r=n<2?void 0:arguments[1],o=void 0===r?r:x(r),a=0;a<e.length;){var s=e[a++];if(s.key===i&&(void 0===o||s.value===o))return!0}return!1},set:function(t,e){var n=_(this);$(arguments.length,1);for(var i,r=n.entries,o=!1,s=x(t),l=x(e),c=0;c<r.length;c++)(i=r[c]).key===s&&(o?et(r,c--,1):(o=!0,i.value=l));o||X(r,{key:s,value:l}),a||(this.size=r.length),n.updateURL()},sort:function(){var t=_(this);j(t.entries,(function(t,e){return t.key>e.key?1:-1})),t.updateURL()},forEach:function(t){for(var e,n=_(this).entries,i=m(t,arguments.length>1?arguments[1]:void 0),r=0;r<n.length;)i((e=n[r++]).value,e.key,this)},keys:function(){return new gt(this,"keys")},values:function(){return new gt(this,"values")},entries:function(){return new gt(this,"entries")}},{enumerable:!0}),l(mt,N,mt.entries,{name:"entries"}),l(mt,"toString",(function(){return _(this).serialize()}),{enumerable:!0}),a&&c(mt,"size",{get:function(){return _(this).entries.length},configurable:!0,enumerable:!0}),h(bt,F),t({global:!0,constructor:!0,forced:!s},{URLSearchParams:bt}),!s&&g(M)){var yt=o(z.has),xt=o(z.set),Ot=function(t){if(S(t)){var e,n=t.body;if(y(n)===F)return e=t.headers?new M(t.headers):new M,yt(e,"content-type")||xt(e,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),O(t,{body:k(0,x(n)),headers:k(0,e)})}return t};if(g(B)&&t({global:!0,enumerable:!0,dontCallGetSet:!0,forced:!0},{fetch:function(t){return B(t,arguments.length>1?Ot(arguments[1]):{})}}),g(H)){var kt=function(t){return p(this,U),new H(t,arguments.length>1?Ot(arguments[1]):{})};U.constructor=kt,kt.prototype=U,t({global:!0,constructor:!0,dontCallGetSet:!0,forced:!0},{Request:kt})}}return yl={URLSearchParams:bt,getState:_}}Sl||(Sl=1,Al());var Rl={getBootstrapVersion:function(){var e,n,i=5;if("undefined"!=typeof window&&null!==(e=window.bootstrap)&&void 0!==e&&null!==(e=e.Tooltip)&&void 0!==e&&e.VERSION){var r=window.bootstrap.Tooltip.VERSION;void 0!==r&&(i=parseInt(r,10))}else if(void 0!==t&&null!==(n=t.fn)&&void 0!==n&&null!==(n=n.dropdown)&&void 0!==n&&null!==(n=n.Constructor)&&void 0!==n&&n.VERSION){var o=t.fn.dropdown.Constructor.VERSION;void 0!==o&&(i=parseInt(o,10))}return i},getIconsPrefix:function(t){return{bootstrap3:"glyphicon",bootstrap4:"fa",bootstrap5:"bi","bootstrap-table":"icon",bulma:"fa",foundation:"fa",materialize:"material-icons",semantic:"fa"}[t]||"fa"},getIcons:function(t,e){return t[e]||{}},assignIcons:function(t,e,n){for(var i=0,r=Object.keys(t);i<r.length;i++){var o=r[i];t[o][e]=n[o]}},getSearchInput:function(e){return"string"==typeof e.options.searchSelector?t(e.options.searchSelector):e.$toolbar.find(".search input")},extend:function(){for(var t=this,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];var r,o=n[0]||{},a=1,s=!1;for("boolean"==typeof o&&(s=o,o=n[a]||{},a++),"object"!==h(o)&&"function"!=typeof o&&(o={});a<n.length;a++){var l=n[a];if(null!=l)for(var c in l){var u=l[c];if("__proto__"!==c&&o!==u){var f=Array.isArray(u);if(s&&u&&(this.isObject(u)||f)){var d=o[c];if(f&&Array.isArray(d)&&d.every((function(e){return!t.isObject(e)&&!Array.isArray(e)}))){o[c]=u;continue}r=f&&!Array.isArray(d)?[]:f||this.isObject(d)?d:{},o[c]=this.extend(s,r,u)}else void 0!==u&&(o[c]=u)}}}return o},sprintf:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=!0,o=0,a=t.replace(/%s/g,(function(){var t=n[o++];return void 0===t?(r=!1,""):t}));return r?a:""},isObject:function(t){if("object"!==h(t)||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e},isEmptyObject:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return 0===Object.entries(t).length&&t.constructor===Object},isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},getFieldTitle:function(t,e){var n,i=r(t);try{for(i.s();!(n=i.n()).done;){var o=n.value;if(o.field===e)return o.title}}catch(t){i.e(t)}finally{i.f()}return""},setFieldIndex:function(t){var e,n=0,i=[],o=r(t[0]);try{for(o.s();!(e=o.n()).done;){n+=+e.value.colspan||1}}catch(t){o.e(t)}finally{o.f()}for(var a=0;a<t.length;a++){i[a]=[];for(var s=0;s<n;s++)i[a][s]=!1}for(var l=0;l<t.length;l++){var c,u=r(t[l]);try{for(u.s();!(c=u.n()).done;){var h=c.value,f=+h.rowspan||1,d=+h.colspan||1,p=i[l].indexOf(!1);h.colspanIndex=p,1===d?(h.fieldIndex=p,void 0===h.field&&(h.field=p)):h.colspanGroup=+h.colspan;for(var g=0;g<f;g++)for(var v=0;v<d;v++)i[l+g][p+v]=!0}}catch(t){u.e(t)}finally{u.f()}}},normalizeAccent:function(t){return"string"!=typeof t?t:t.normalize("NFD").replace(/[\u0300-\u036f]/g,"")},updateFieldGroup:function(t,e){var n,i,o=(n=[]).concat.apply(n,c(t)),a=r(t);try{for(a.s();!(i=a.n()).done;){var s,l=r(i.value);try{for(l.s();!(s=l.n()).done;){var u=s.value;if(u.colspanGroup>1){for(var h=0,f=function(t){var e=o.filter((function(e){return e.fieldIndex===t})),n=e[e.length-1];if(e.length>1)for(var i=0;i<e.length-1;i++)e[i].visible=n.visible;n.visible&&h++},d=u.colspanIndex;d<u.colspanIndex+u.colspanGroup;d++)f(d);u.colspan=h,u.visible=h>0}}}catch(t){l.e(t)}finally{l.f()}}}catch(t){a.e(t)}finally{a.f()}if(!(t.length<2)){var p,g=r(e);try{var v=function(){var t=p.value,e=o.filter((function(e){return e.fieldIndex===t.fieldIndex}));if(e.length>1){var n,i=r(e);try{for(i.s();!(n=i.n()).done;){n.value.visible=t.visible}}catch(t){i.e(t)}finally{i.f()}}};for(g.s();!(p=g.n()).done;)v()}catch(t){g.e(t)}finally{g.f()}}},getScrollBarWidth:function(){if(void 0===this.cachedWidth){var e=t("<div/>").addClass("fixed-table-scroll-inner"),n=t("<div/>").addClass("fixed-table-scroll-outer");n.append(e),t("body").append(n);var i=e[0].offsetWidth;n.css("overflow","scroll");var r=e[0].offsetWidth;i===r&&(r=n[0].clientWidth),n.remove(),this.cachedWidth=i-r}return this.cachedWidth},calculateObjectValue:function(t,e,n,i){var o=e;if("string"==typeof e){var a=e.split(".");if(a.length>1){o=window;var s,l=r(a);try{for(l.s();!(s=l.n()).done;){o=o[s.value]}}catch(t){l.e(t)}finally{l.f()}}else o=window[e]}return null!==o&&"object"===h(o)?o:"function"==typeof o?o.apply(t,n||[]):!o&&"string"==typeof e&&n&&this.sprintf.apply(this,[e].concat(c(n)))?this.sprintf.apply(this,[e].concat(c(n))):i},compareObjects:function(t,e,n){var i=Object.keys(t),r=Object.keys(e);if(n&&i.length!==r.length)return!1;for(var o=0,a=i;o<a.length;o++){var s=a[o];if(r.includes(s)&&t[s]!==e[s])return!1}return!0},regexCompare:function(t,e){try{var n=e.match(/^\/(.*?)\/([gim]*)$/);if(-1!==t.toString().search(n?new RegExp(n[1],n[2]):new RegExp(e,"gim")))return!0}catch(t){return console.error(t),!1}return!1},escapeApostrophe:function(t){return t.toString().replace(/'/g,"&#39;")},escapeHTML:function(t){return t?t.toString().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):t},unescapeHTML:function(t){return"string"==typeof t&&t?t.toString().replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"):t},removeHTML:function(t){return t?t.toString().replace(/(<([^>]+)>)/gi,"").replace(/&[#A-Za-z0-9]+;/gi,"").trim():t},getRealDataAttr:function(t){for(var e=0,n=Object.entries(t);e<n.length;e++){var i=l(n[e],2),r=i[0],o=i[1],a=r.split(/(?=[A-Z])/).join("-").toLowerCase();a!==r&&(t[a]=o,delete t[r])}return t},getItemField:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,o=t;if(void 0!==i&&(n=i),"string"!=typeof e||t.hasOwnProperty(e))return n?this.escapeHTML(t[e]):t[e];var a,s=r(e.split("."));try{for(s.s();!(a=s.n()).done;){var l=a.value;o=o&&o[l]}}catch(t){s.e(t)}finally{s.f()}return n?this.escapeHTML(o):o},isIEBrowser:function(){return navigator.userAgent.includes("MSIE ")||/Trident.*rv:11\./.test(navigator.userAgent)},findIndex:function(t,e){var n,i=r(t);try{for(i.s();!(n=i.n()).done;){var o=n.value;if(JSON.stringify(o)===JSON.stringify(e))return t.indexOf(o)}}catch(t){i.e(t)}finally{i.f()}return-1},trToData:function(e,n){var i=this,r=[],o=[];return n.each((function(n,a){var s=t(a),l={};l._id=s.attr("id"),l._class=s.attr("class"),l._data=i.getRealDataAttr(s.data()),l._style=s.attr("style"),s.find(">td,>th").each((function(r,a){for(var s=t(a),c=+s.attr("colspan")||1,u=+s.attr("rowspan")||1,h=r;o[n]&&o[n][h];h++);for(var f=h;f<h+c;f++)for(var d=n;d<n+u;d++)o[d]||(o[d]=[]),o[d][f]=!0;var p=e[h].field;l[p]=i.escapeApostrophe(s.html().trim()),l["_".concat(p,"_id")]=s.attr("id"),l["_".concat(p,"_class")]=s.attr("class"),l["_".concat(p,"_rowspan")]=s.attr("rowspan"),l["_".concat(p,"_colspan")]=s.attr("colspan"),l["_".concat(p,"_title")]=s.attr("title"),l["_".concat(p,"_data")]=i.getRealDataAttr(s.data()),l["_".concat(p,"_style")]=s.attr("style")})),r.push(l)})),r},sort:function(t,e,n,i,r,o){if(null==t&&(t=""),null==e&&(e=""),i.sortStable&&t===e&&(t=r,e=o),this.isNumeric(t)&&this.isNumeric(e))return(t=parseFloat(t))<(e=parseFloat(e))?-1*n:t>e?n:0;if(i.sortEmptyLast){if(""===t)return 1;if(""===e)return-1}return t===e?0:("string"!=typeof t&&(t=t.toString()),-1===t.localeCompare(e)?-1*n:n)},getEventName:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e=e||"".concat(+new Date).concat(~~(1e6*Math.random())),"".concat(t,"-").concat(e)},hasDetailViewIcon:function(t){return t.detailView&&t.detailViewIcon&&!t.cardView},getDetailViewIndexOffset:function(t){return this.hasDetailViewIcon(t)&&"right"!==t.detailViewAlign?1:0},checkAutoMergeCells:function(t){var e,n=r(t);try{for(n.s();!(e=n.n()).done;)for(var i=e.value,o=0,a=Object.keys(i);o<a.length;o++){var s=a[o];if(s.startsWith("_")&&(s.endsWith("_rowspan")||s.endsWith("_colspan")))return!0}}catch(t){n.e(t)}finally{n.f()}return!1},deepCopy:function(t){return void 0===t?t:this.extend(!0,Array.isArray(t)?[]:{},t)},debounce:function(t,e,n){var i;return function(){var r=this,o=arguments,a=n&&!i;clearTimeout(i),i=setTimeout((function(){i=null,n||t.apply(r,o)}),e),a&&t.apply(r,o)}},replaceSearchMark:function(t,e){var n=t instanceof Element,i=n?t:document.createElement("div"),o=new RegExp(e,"gim"),a=function(t,e){for(var n,i=[],r=0;null!==(n=e.exec(t));){r!==n.index&&i.push(document.createTextNode(t.substring(r,n.index)));var o=document.createElement("mark");o.innerText=n[0],i.push(o),r=n.index+n[0].length}if(i.length)return r!==t.length&&i.push(document.createTextNode(t.substring(r))),i},s=function(t){for(var e=0;e<t.childNodes.length;e++){var n=t.childNodes[e];if(n.nodeType===document.TEXT_NODE){var i=a(n.data,o);if(i){var l,c=r(i);try{for(c.s();!(l=c.n()).done;){var u=l.value;t.insertBefore(u,n)}}catch(t){c.e(t)}finally{c.f()}t.removeChild(n),e+=i.length-1}}n.nodeType===document.ELEMENT_NODE&&s(n)}};return n||(i.innerHTML=t),s(i),n?i:i.innerHTML},classToString:function(t){var e=this;return"string"==typeof t?t:Array.isArray(t)?t.map((function(t){return e.classToString(t)})).filter((function(t){return t})).join(" "):t&&"object"===h(t)?Object.entries(t).map((function(t){var e=l(t,2),n=e[0];return e[1]?n:""})).filter((function(t){return t})).join(" "):""},parseStyle:function(t,e){if(!e)return t;if("string"==typeof e)e.split(";").forEach((function(e){var n=e.indexOf(":");if(n>0){var i=e.substring(0,n).trim(),r=e.substring(n+1).trim();t.style.setProperty(i,r)}}));else if(Array.isArray(e)){var n,i=r(e);try{for(i.s();!(n=i.n()).done;){var o=n.value;this.parseStyle(t,o)}}catch(t){i.e(t)}finally{i.f()}}else if("object"===h(e))for(var a=0,s=Object.entries(e);a<s.length;a++){var c=l(s[a],2),u=c[0],f=c[1];t.style.setProperty(u,f)}return t},h:function(t,e,n){var i=t instanceof HTMLElement?t:document.createElement(t),r=e||{},o=n||[];"A"===i.tagName&&(i.href="javascript:");for(var a=0,s=Object.entries(r);a<s.length;a++){var u=l(s[a],2),h=u[0],f=u[1];if(void 0!==f)if(["text","innerText"].includes(h))i.innerText=f;else if(["html","innerHTML"].includes(h))i.innerHTML=f;else if("children"===h)o.push.apply(o,c(f));else if("class"===h)i.setAttribute("class",this.classToString(f));else if("style"===h)"string"==typeof f?i.setAttribute("style",f):this.parseStyle(i,f);else if(h.startsWith("@")||h.startsWith("on")){var d=h.startsWith("@")?h.substring(1):h.substring(2).toLowerCase(),p=Array.isArray(f)?f:[f];i.addEventListener.apply(i,[d].concat(c(p)))}else h.startsWith(".")?i[h.substring(1)]=f:i.setAttribute(h,f)}return o.length&&i.append.apply(i,c(o)),i},htmlToNodes:function(e){if(e instanceof t)return e.get();if(e instanceof Node)return[e];"string"!=typeof e&&(e=new String(e).toString());var n=document.createElement("div");return n.innerHTML=e,n.childNodes},addQueryToUrl:function(t,e){for(var n=t.split("#"),i=l(n[0].split("?"),2),r=i[0],o=i[1],a=new URLSearchParams(o),s=0,c=Object.entries(e);s<c.length;s++){var u=l(c[s],2),h=u[0],f=u[1];a.set(h,f)}return"".concat(r,"?").concat(a.toString(),"#").concat(n.slice(1).join("#"))}},$l=Rl.getBootstrapVersion(),El={3:{classes:{buttonActive:"active",buttons:"default",buttonsDropdown:"btn-group",buttonsGroup:"btn-group",buttonsPrefix:"btn",dropdownActive:"active",dropup:"dropup",input:"form-control",inputGroup:"input-group",inputPrefix:"input-",paginationActive:"active",paginationDropdown:"btn-group dropdown",pull:"pull",select:"form-control"},html:{dropdownCaret:'<span class="caret"></span>',icon:'<i class="%s %s"></i>',inputGroup:'<div class="input-group">%s<span class="input-group-btn">%s</span></div>',pageDropdown:['<ul class="dropdown-menu" role="menu">',"</ul>"],pageDropdownItem:'<li role="menuitem" class="%s"><a href="#">%s</a></li>',pagination:['<ul class="pagination%s">',"</ul>"],paginationItem:'<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',searchButton:'<button class="%s" type="button" name="search" title="%s">%s %s</button>',searchClearButton:'<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>',searchInput:'<input class="%s%s" type="text" placeholder="%s">',toolbarDropdown:['<ul class="dropdown-menu" role="menu">',"</ul>"],toolbarDropdownItem:'<li class="dropdown-item-marker" role="menuitem"><label>%s</label></li>',toolbarDropdownSeparator:'<li class="divider"></li>'}},4:{classes:{buttonActive:"active",buttons:"secondary",buttonsDropdown:"btn-group",buttonsGroup:"btn-group",buttonsPrefix:"btn",dropdownActive:"active",dropup:"dropup",input:"form-control",inputGroup:"btn-group",inputPrefix:"form-control-",paginationActive:"active",paginationDropdown:"btn-group dropdown",pull:"float",select:"form-control"},html:{dropdownCaret:'<span class="caret"></span>',icon:'<i class="%s %s"></i>',inputGroup:'<div class="input-group">%s<div class="input-group-append">%s</div></div>',pageDropdown:['<div class="dropdown-menu">',"</div>"],pageDropdownItem:'<a class="dropdown-item %s" href="#">%s</a>',pagination:['<ul class="pagination%s">',"</ul>"],paginationItem:'<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',searchButton:'<button class="%s" type="button" name="search" title="%s">%s %s</button>',searchClearButton:'<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>',searchInput:'<input class="%s%s" type="text" placeholder="%s">',toolbarDropdown:['<div class="dropdown-menu dropdown-menu-right">',"</div>"],toolbarDropdownItem:'<label class="dropdown-item dropdown-item-marker">%s</label>',toolbarDropdownSeparator:'<div class="dropdown-divider"></div>'}},5:{classes:{buttonActive:"active",buttons:"secondary",buttonsDropdown:"btn-group",buttonsGroup:"btn-group",buttonsPrefix:"btn",dropdownActive:"active",dropup:"dropup",input:"form-control",inputGroup:"btn-group",inputPrefix:"form-control-",paginationActive:"active",paginationDropdown:"btn-group dropdown",pull:"float",select:"form-select"},html:{dataToggle:"data-bs-toggle",dropdownCaret:'<span class="caret"></span>',icon:'<i class="%s %s"></i>',inputGroup:'<div class="input-group">%s%s</div>',pageDropdown:['<div class="dropdown-menu">',"</div>"],pageDropdownItem:'<a class="dropdown-item %s" href="#">%s</a>',pagination:['<ul class="pagination%s">',"</ul>"],paginationItem:'<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',searchButton:'<button class="%s" type="button" name="search" title="%s">%s %s</button>',searchClearButton:'<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>',searchInput:'<input class="%s%s" type="text" placeholder="%s">',toolbarDropdown:['<div class="dropdown-menu dropdown-menu-end">',"</div>"],toolbarDropdownItem:'<label class="dropdown-item dropdown-item-marker">%s</label>',toolbarDropdownSeparator:'<div class="dropdown-divider"></div>'}}}[$l],jl={ajax:void 0,ajaxOptions:{},buttons:{},buttonsAlign:"right",buttonsAttributeTitle:"title",buttonsClass:El.classes.buttons,buttonsOrder:["paginationSwitch","refresh","toggle","fullscreen","columns"],buttonsPrefix:El.classes.buttonsPrefix,buttonsToolbar:void 0,cache:!0,cardView:!1,checkboxHeader:!0,classes:"table table-bordered table-hover",clickToSelect:!1,columns:[[]],contentType:"application/json",customSearch:void 0,customSort:void 0,data:[],dataField:"rows",dataType:"json",detailFilter:function(t,e){return!0},detailFormatter:function(t,e){return""},detailView:!1,detailViewAlign:"left",detailViewByClick:!1,detailViewIcon:!0,escape:!1,escapeTitle:!0,filterOptions:{filterAlgorithm:"and"},fixedScroll:!1,footerField:"footer",footerStyle:function(t){return{}},headerStyle:function(t){return{}},height:void 0,icons:{},iconSize:void 0,iconsPrefix:void 0,idField:void 0,ignoreClickToSelectOn:function(t){var e=t.tagName;return["A","BUTTON"].includes(e)},loadingFontSize:"auto",loadingTemplate:function(t){return'<span class="loading-wrap">\n    <span class="loading-text">'.concat(t,'</span>\n    <span class="animation-wrap"><span class="animation-dot"></span></span>\n    </span>\n  ')},locale:void 0,maintainMetaData:!1,method:"get",minimumCountColumns:1,multipleSelectRow:!1,pageList:[10,25,50,100],pageNumber:1,pageSize:10,pagination:!1,paginationDetailHAlign:"left",paginationHAlign:"right",paginationLoadMore:!1,paginationLoop:!0,paginationNextText:"&rsaquo;",paginationPagesBySide:1,paginationParts:["pageInfo","pageSize","pageList"],paginationPreText:"&lsaquo;",paginationSuccessivelySize:5,paginationUseIntermediate:!1,paginationVAlign:"bottom",queryParams:function(t){return t},queryParamsType:"limit",regexSearch:!1,rememberOrder:!1,responseHandler:function(t){return t},rowAttributes:function(t,e){return{}},rowStyle:function(t,e){return{}},search:!1,searchable:!1,searchAccentNeutralise:!1,searchAlign:"right",searchHighlight:!1,searchOnEnterKey:!1,searchSelector:!1,searchText:"",searchTimeOut:500,selectItemName:"btSelectItem",serverSort:!0,showButtonIcons:!0,showButtonText:!1,showColumns:!1,showColumnsSearch:!1,showColumnsToggleAll:!1,showExtendedPagination:!1,showFooter:!1,showFullscreen:!1,showHeader:!0,showPaginationSwitch:!1,showRefresh:!1,showSearchButton:!1,showSearchClearButton:!1,showToggle:!1,sidePagination:"client",silentSort:!0,singleSelect:!1,smartDisplay:!0,sortable:!0,sortClass:void 0,sortEmptyLast:!1,sortName:void 0,sortOrder:void 0,sortReset:!1,sortResetPage:!1,sortStable:!1,strictSearch:!1,theadClasses:"",toolbar:void 0,toolbarAlign:"left",totalField:"total",totalNotFiltered:0,totalNotFilteredField:"totalNotFiltered",totalRows:0,trimOnSearch:!0,undefinedText:"-",uniqueId:void 0,url:void 0,virtualScroll:!1,virtualScrollItemHeight:void 0,visibleSearch:!1,onAll:function(t,e){return!1},onCheck:function(t){return!1},onCheckAll:function(t){return!1},onCheckSome:function(t){return!1},onClickCell:function(t,e,n,i){return!1},onClickRow:function(t,e){return!1},onCollapseRow:function(t,e){return!1},onColumnSwitch:function(t,e){return!1},onColumnSwitchAll:function(t){return!1},onDblClickCell:function(t,e,n,i){return!1},onDblClickRow:function(t,e){return!1},onExpandRow:function(t,e,n){return!1},onLoadError:function(t){return!1},onLoadSuccess:function(t){return!1},onPageChange:function(t,e){return!1},onPostBody:function(){return!1},onPostFooter:function(){return!1},onPostHeader:function(){return!1},onPreBody:function(t){return!1},onRefresh:function(t){return!1},onRefreshOptions:function(t){return!1},onResetView:function(){return!1},onScrollBody:function(){return!1},onSearch:function(t){return!1},onSort:function(t,e){return!1},onToggle:function(t){return!1},onTogglePagination:function(t){return!1},onUncheck:function(t){return!1},onUncheckAll:function(t){return!1},onUncheckSome:function(t){return!1},onVirtualScroll:function(t,e){return!1}},Nl={formatAllRows:function(){return"All"},formatClearSearch:function(){return"Clear Search"},formatColumns:function(){return"Columns"},formatColumnsToggleAll:function(){return"Toggle all"},formatDetailPagination:function(t){return"Showing ".concat(t," rows")},formatFullscreen:function(){return"Fullscreen"},formatLoadingMessage:function(){return"Loading, please wait"},formatNoMatches:function(){return"No matching records found"},formatPaginationSwitch:function(){return"Hide/Show pagination"},formatPaginationSwitchDown:function(){return"Show pagination"},formatPaginationSwitchUp:function(){return"Hide pagination"},formatRecordsPerPage:function(t){return"".concat(t," rows per page")},formatRefresh:function(){return"Refresh"},formatSearch:function(){return"Search"},formatShowingRows:function(t,e,n,i){return void 0!==i&&i>0&&i>n?"Showing ".concat(t," to ").concat(e," of ").concat(n," rows (filtered from ").concat(i," total rows)"):"Showing ".concat(t," to ").concat(e," of ").concat(n," rows")},formatSRPaginationNextText:function(){return"next page"},formatSRPaginationPageText:function(t){return"to page ".concat(t)},formatSRPaginationPreText:function(){return"previous page"},formatToggleOff:function(){return"Hide card view"},formatToggleOn:function(){return"Show card view"}},Fl={align:void 0,cardVisible:!0,cellStyle:void 0,checkbox:!1,checkboxEnabled:!0,class:void 0,clickToSelect:!0,colspan:void 0,detailFormatter:void 0,escape:void 0,events:void 0,falign:void 0,field:void 0,footerFormatter:void 0,footerStyle:void 0,formatter:void 0,halign:void 0,order:"asc",radio:!1,rowspan:void 0,searchable:!0,searchFormatter:!0,searchHighlightFormatter:!1,showSelectTitle:!1,sortable:!1,sorter:void 0,sortName:void 0,switchable:!0,switchableLabel:void 0,title:void 0,titleTooltip:void 0,valign:void 0,visible:!0,width:void 0,widthUnit:"px"};Object.assign(jl,Nl);var Dl={COLUMN_DEFAULTS:Fl,CONSTANTS:El,DEFAULTS:jl,EVENTS:{"all.bs.table":"onAll","check-all.bs.table":"onCheckAll","check-some.bs.table":"onCheckSome","check.bs.table":"onCheck","click-cell.bs.table":"onClickCell","click-row.bs.table":"onClickRow","collapse-row.bs.table":"onCollapseRow","column-switch-all.bs.table":"onColumnSwitchAll","column-switch.bs.table":"onColumnSwitch","dbl-click-cell.bs.table":"onDblClickCell","dbl-click-row.bs.table":"onDblClickRow","expand-row.bs.table":"onExpandRow","load-error.bs.table":"onLoadError","load-success.bs.table":"onLoadSuccess","page-change.bs.table":"onPageChange","post-body.bs.table":"onPostBody","post-footer.bs.table":"onPostFooter","post-header.bs.table":"onPostHeader","pre-body.bs.table":"onPreBody","refresh-options.bs.table":"onRefreshOptions","refresh.bs.table":"onRefresh","reset-view.bs.table":"onResetView","scroll-body.bs.table":"onScrollBody","search.bs.table":"onSearch","sort.bs.table":"onSort","toggle-pagination.bs.table":"onTogglePagination","toggle.bs.table":"onToggle","uncheck-all.bs.table":"onUncheckAll","uncheck-some.bs.table":"onUncheckSome","uncheck.bs.table":"onUncheck","virtual-scroll.bs.table":"onVirtualScroll"},ICONS:{glyphicon:{clearSearch:"glyphicon-trash",columns:"glyphicon-th icon-th",detailClose:"glyphicon-minus icon-minus",detailOpen:"glyphicon-plus icon-plus",fullscreen:"glyphicon-fullscreen",paginationSwitchDown:"glyphicon-collapse-down icon-chevron-down",paginationSwitchUp:"glyphicon-collapse-up icon-chevron-up",refresh:"glyphicon-refresh icon-refresh",search:"glyphicon-search",toggleOff:"glyphicon-list-alt icon-list-alt",toggleOn:"glyphicon-list-alt icon-list-alt"},fa:{clearSearch:"fa-trash",columns:"fa-th-list",detailClose:"fa-minus",detailOpen:"fa-plus",fullscreen:"fa-arrows-alt",paginationSwitchDown:"fa-caret-square-down",paginationSwitchUp:"fa-caret-square-up",refresh:"fa-sync",search:"fa-search",toggleOff:"fa-toggle-off",toggleOn:"fa-toggle-on"},bi:{clearSearch:"bi-trash",columns:"bi-list-ul",detailClose:"bi-dash",detailOpen:"bi-plus",fullscreen:"bi-arrows-move",paginationSwitchDown:"bi-caret-down-square",paginationSwitchUp:"bi-caret-up-square",refresh:"bi-arrow-clockwise",search:"bi-search",toggleOff:"bi-toggle-off",toggleOn:"bi-toggle-on"},icon:{clearSearch:"icon-trash-2",columns:"icon-list",detailClose:"icon-minus",detailOpen:"icon-plus",fullscreen:"icon-maximize",paginationSwitchDown:"icon-arrow-up-circle",paginationSwitchUp:"icon-arrow-down-circle",refresh:"icon-refresh-cw",search:"icon-search",toggleOff:"icon-toggle-right",toggleOn:"icon-toggle-right"},"material-icons":{clearSearch:"delete",columns:"view_list",detailClose:"remove",detailOpen:"add",fullscreen:"fullscreen",paginationSwitchDown:"grid_on",paginationSwitchUp:"grid_off",refresh:"refresh",search:"search",sort:"sort",toggleOff:"tablet",toggleOn:"tablet_android"}},LOCALES:{en:Nl,"en-US":Nl},METHODS:["getOptions","refreshOptions","getData","getFooterData","getSelections","load","append","prepend","remove","removeAll","insertRow","updateRow","getRowByUniqueId","updateByUniqueId","removeByUniqueId","updateCell","updateCellByUniqueId","showRow","hideRow","getHiddenRows","showColumn","hideColumn","getVisibleColumns","getHiddenColumns","showAllColumns","hideAllColumns","mergeCells","checkAll","uncheckAll","checkInvert","check","uncheck","checkBy","uncheckBy","refresh","destroy","resetView","showLoading","hideLoading","togglePagination","toggleFullscreen","toggleView","resetSearch","filterBy","sortBy","sortReset","scrollTo","getScrollPosition","selectPage","prevPage","nextPage","toggleDetailView","expandRow","collapseRow","expandRowByUniqueId","collapseRowByUniqueId","expandAllRows","collapseAllRows","updateColumnTitle","updateFormatText"],THEME:"bootstrap".concat($l),VERSION:"1.24.2"},Ll=function(){return i((function t(e){var i=this;n(this,t),this.rows=e.rows,this.scrollEl=e.scrollEl,this.contentEl=e.contentEl,this.callback=e.callback,this.itemHeight=e.itemHeight,this.cache={},this.scrollTop=this.scrollEl.scrollTop,this.initDOM(this.rows,e.fixedScroll),this.scrollEl.scrollTop=this.scrollTop,this.lastCluster=0;var r=function(){i.lastCluster!==(i.lastCluster=i.getNum())&&(i.initDOM(i.rows),i.callback(i.startIndex,i.endIndex))};this.scrollEl.addEventListener("scroll",r,!1),this.destroy=function(){i.contentEl.innerHtml="",i.scrollEl.removeEventListener("scroll",r,!1)}}),[{key:"initDOM",value:function(t,e){void 0===this.clusterHeight?(this.cache.scrollTop=this.scrollEl.scrollTop,this.cache.data=this.contentEl.innerHTML=t[0]+t[0]+t[0],this.getRowsHeight(t)):0===this.blockHeight&&this.getRowsHeight(t);var n=this.initData(t,this.getNum(e)),i=n.rows.join(""),r=this.checkChanges("data",i),o=this.checkChanges("top",n.topOffset),a=this.checkChanges("bottom",n.bottomOffset),s=[];r&&o?(n.topOffset&&s.push(this.getExtra("top",n.topOffset)),s.push(i),n.bottomOffset&&s.push(this.getExtra("bottom",n.bottomOffset)),this.startIndex=n.start,this.endIndex=n.end,this.contentEl.innerHTML=s.join(""),e&&(this.contentEl.scrollTop=this.cache.scrollTop)):a&&(this.contentEl.lastChild.style.height="".concat(n.bottomOffset,"px"))}},{key:"getRowsHeight",value:function(){if(void 0===this.itemHeight||0===this.itemHeight){var t=this.contentEl.children,e=t[Math.floor(t.length/2)];this.itemHeight=e.offsetHeight}this.blockHeight=50*this.itemHeight,this.clusterRows=200,this.clusterHeight=4*this.blockHeight}},{key:"getNum",value:function(t){return this.scrollTop=t?this.cache.scrollTop:this.scrollEl.scrollTop,Math.floor(this.scrollTop/(this.clusterHeight-this.blockHeight))||0}},{key:"initData",value:function(t,e){if(t.length<50)return{topOffset:0,bottomOffset:0,rowsAbove:0,rows:t};var n=Math.max((this.clusterRows-50)*e,0),i=n+this.clusterRows,r=Math.max(n*this.itemHeight,0),o=Math.max((t.length-i)*this.itemHeight,0),a=[],s=n;r<1&&s++;for(var l=n;l<i;l++)t[l]&&a.push(t[l]);return{start:n,end:i,topOffset:r,bottomOffset:o,rowsAbove:s,rows:a}}},{key:"checkChanges",value:function(t,e){var n=e!==this.cache[t];return this.cache[t]=e,n}},{key:"getExtra",value:function(t,e){var n=document.createElement("tr");return n.className="virtual-scroll-".concat(t),e&&(n.style.height="".concat(e,"px")),n.outerHTML}}])}(),_l=function(){function e(i,r){n(this,e),this.options=r,this.$el=t(i),this.$el_=this.$el.clone(),this.timeoutId_=0,this.timeoutFooter_=0}return i(e,[{key:"init",value:function(){this.initConstants(),this.initLocale(),this.initContainer(),this.initTable(),this.initHeader(),this.initData(),this.initHiddenRows(),this.initToolbar(),this.initPagination(),this.initBody(),this.initSearchText(),this.initServer()}},{key:"initConstants",value:function(){var e=this.options;this.constants=Dl.CONSTANTS,this.constants.theme=t.fn.bootstrapTable.theme,this.constants.dataToggle=this.constants.html.dataToggle||"data-toggle";var n=Rl.getIconsPrefix(t.fn.bootstrapTable.theme);"string"==typeof e.icons&&(e.icons=Rl.calculateObjectValue(null,e.icons)),e.iconsPrefix=e.iconsPrefix||t.fn.bootstrapTable.defaults.iconsPrefix||n,e.icons=Object.assign(Rl.getIcons(Dl.ICONS,e.iconsPrefix),t.fn.bootstrapTable.defaults.icons,e.icons);var i=e.buttonsPrefix?"".concat(e.buttonsPrefix,"-"):"";this.constants.buttonsClass=[e.buttonsPrefix,i+e.buttonsClass,Rl.sprintf("".concat(i,"%s"),e.iconSize)].join(" ").trim(),this.buttons=Rl.calculateObjectValue(this,e.buttons,[],{}),"object"!==h(this.buttons)&&(this.buttons={})}},{key:"initLocale",value:function(){if(this.options.locale){var n=t.fn.bootstrapTable.locales,i=this.options.locale.split(/-|_/);i[0]=i[0].toLowerCase(),i[1]&&(i[1]=i[1].toUpperCase());var r={};n[this.options.locale]?r=n[this.options.locale]:n[i.join("-")]?r=n[i.join("-")]:n[i[0]]&&(r=n[i[0]]),this._defaultLocales=this._defaultLocales||{};for(var o=0,a=Object.entries(r);o<a.length;o++){var s=l(a[o],2),c=s[0],u=s[1],h=this._defaultLocales.hasOwnProperty(c)?this._defaultLocales[c]:e.DEFAULTS[c];this.options[c]===h&&(this.options[c]=u,this._defaultLocales[c]=u)}}}},{key:"initContainer",value:function(){var e=["top","both"].includes(this.options.paginationVAlign)?'<div class="fixed-table-pagination clearfix"></div>':"",n=["bottom","both"].includes(this.options.paginationVAlign)?'<div class="fixed-table-pagination"></div>':"",i=Rl.calculateObjectValue(this.options,this.options.loadingTemplate,[this.options.formatLoadingMessage()]);this.$container=t('\n      <div class="bootstrap-table '.concat(this.constants.theme,'">\n      <div class="fixed-table-toolbar"></div>\n      ').concat(e,'\n      <div class="fixed-table-container">\n      <div class="fixed-table-header"><table></table></div>\n      <div class="fixed-table-body">\n      <div class="fixed-table-loading">\n      ').concat(i,'\n      </div>\n      </div>\n      <div class="fixed-table-footer"></div>\n      </div>\n      ').concat(n,"\n      </div>\n    ")),this.$container.insertAfter(this.$el),this.$tableContainer=this.$container.find(".fixed-table-container"),this.$tableHeader=this.$container.find(".fixed-table-header"),this.$tableBody=this.$container.find(".fixed-table-body"),this.$tableLoading=this.$container.find(".fixed-table-loading"),this.$tableFooter=this.$el.find("tfoot"),this.options.buttonsToolbar?this.$toolbar=t("body").find(this.options.buttonsToolbar):this.$toolbar=this.$container.find(".fixed-table-toolbar"),this.$pagination=this.$container.find(".fixed-table-pagination"),this.$tableBody.append(this.$el),this.$container.after('<div class="clearfix"></div>'),this.$el.addClass(this.options.classes),this.$tableLoading.addClass(this.options.classes),this.options.height&&(this.$tableContainer.addClass("fixed-height"),this.options.showFooter&&this.$tableContainer.addClass("has-footer"),this.options.classes.split(" ").includes("table-bordered")&&(this.$tableBody.append('<div class="fixed-table-border"></div>'),this.$tableBorder=this.$tableBody.find(".fixed-table-border"),this.$tableLoading.addClass("fixed-table-border")),this.$tableFooter=this.$container.find(".fixed-table-footer"))}},{key:"initTable",value:function(){var n=this,i=[];if(this.$header=this.$el.find(">thead"),this.$header.length?this.options.theadClasses&&this.$header.addClass(this.options.theadClasses):this.$header=t('<thead class="'.concat(this.options.theadClasses,'"></thead>')).appendTo(this.$el),this._headerTrClasses=[],this._headerTrStyles=[],this.$header.find("tr").each((function(e,r){var o=t(r),a=[];o.find("th").each((function(e,n){var i=t(n);void 0!==i.data("field")&&i.data("field","".concat(i.data("field")));var r=Object.assign({},i.data());for(var o in r)t.fn.bootstrapTable.columnDefaults.hasOwnProperty(o)&&delete r[o];a.push(Rl.extend({},{_data:Rl.getRealDataAttr(r),title:i.html(),class:i.attr("class"),titleTooltip:i.attr("title"),rowspan:i.attr("rowspan")?+i.attr("rowspan"):void 0,colspan:i.attr("colspan")?+i.attr("colspan"):void 0,scope:i.attr("scope")?i.attr("scope"):void 0},i.data()))})),i.push(a),o.attr("class")&&n._headerTrClasses.push(o.attr("class")),o.attr("style")&&n._headerTrStyles.push(o.attr("style"))})),Array.isArray(this.options.columns[0])||(this.options.columns=[this.options.columns]),this.options.columns=Rl.extend(!0,[],i,this.options.columns),this.columns=[],this.fieldsColumnsIndex=[],!1!==this.optionsColumnsChanged&&Rl.setFieldIndex(this.options.columns),this.options.columns.forEach((function(t,i){t.forEach((function(t,r){var o=Rl.extend({},e.COLUMN_DEFAULTS,t,{passed:t});void 0!==o.fieldIndex&&(n.columns[o.fieldIndex]=o,n.fieldsColumnsIndex[o.field]=o.fieldIndex),n.options.columns[i][r]=o}))})),!this.options.data.length){var r=Rl.trToData(this.columns,this.$el.find(">tbody>tr"));r.length&&(this.options.data=r,this.fromHtml=!0)}this.options.pagination&&"server"!==this.options.sidePagination||(this.footerData=Rl.trToData(this.columns,this.$el.find(">tfoot>tr"))),this.footerData&&this.$el.find("tfoot").html("<tr></tr>"),!this.options.showFooter||this.options.cardView?this.$tableFooter.hide():this.$tableFooter.show()}},{key:"initHeader",value:function(){var e=this,n={},i=[];this.header={fields:[],styles:[],classes:[],formatters:[],detailFormatters:[],events:[],sorters:[],sortNames:[],cellStyles:[],searchables:[]},Rl.updateFieldGroup(this.options.columns,this.columns),this.options.columns.forEach((function(t,r){var o=[];o.push("<tr".concat(Rl.sprintf(' class="%s"',e._headerTrClasses[r])," ").concat(Rl.sprintf(' style="%s"',e._headerTrStyles[r]),">"));var a="";if(0===r&&Rl.hasDetailViewIcon(e.options)){var s=e.options.columns.length>1?' rowspan="'.concat(e.options.columns.length,'"'):"";a='<th class="detail"'.concat(s,'>\n          <div class="fht-cell"></div>\n          </th>')}a&&"right"!==e.options.detailViewAlign&&o.push(a),t.forEach((function(t,i){var a=Rl.sprintf(' class="%s"',t.class),s=t.widthUnit,c=parseFloat(t.width),u=t.halign?t.halign:t.align,f=Rl.sprintf("text-align: %s; ",u),d=Rl.sprintf("text-align: %s; ",t.align),p=Rl.sprintf("vertical-align: %s; ",t.valign);if(p+=Rl.sprintf("width: %s; ",!t.checkbox&&!t.radio||c?c?c+s:void 0:t.showSelectTitle?void 0:"36px"),void 0!==t.fieldIndex||t.visible){var g=Rl.calculateObjectValue(null,e.options.headerStyle,[t]),v=[],b=[],m="";if(g&&g.css)for(var y=0,w=Object.entries(g.css);y<w.length;y++){var S=l(w[y],2),x=S[0],O=S[1];v.push("".concat(x,": ").concat(O))}if(g&&g.classes&&(m=Rl.sprintf(' class="%s"',t.class?[t.class,g.classes].join(" "):g.classes)),void 0!==t.fieldIndex){if(e.header.fields[t.fieldIndex]=t.field,e.header.styles[t.fieldIndex]=d+p,e.header.classes[t.fieldIndex]=t.class,e.header.formatters[t.fieldIndex]=t.formatter,e.header.detailFormatters[t.fieldIndex]=t.detailFormatter,e.header.events[t.fieldIndex]=t.events,e.header.sorters[t.fieldIndex]=t.sorter,e.header.sortNames[t.fieldIndex]=t.sortName,e.header.cellStyles[t.fieldIndex]=t.cellStyle,e.header.searchables[t.fieldIndex]=t.searchable,!t.visible)return;if(e.options.cardView&&!t.cardVisible)return;n[t.field]=t}if(Object.keys(t._data||{}).length>0)for(var k=0,T=Object.entries(t._data);k<T.length;k++){var C=l(T[k],2),P=C[0],I=C[1];b.push("data-".concat(P,"='").concat("object"===h(I)?JSON.stringify(I):I,"'"))}o.push("<th".concat(Rl.sprintf(' title="%s"',t.titleTooltip)),t.checkbox||t.radio?Rl.sprintf(' class="bs-checkbox %s"',t.class||""):m||a,Rl.sprintf(' style="%s"',f+p+v.join("; ")||void 0),Rl.sprintf(' rowspan="%s"',t.rowspan),Rl.sprintf(' colspan="%s"',t.colspan),Rl.sprintf(' scope="%s"',t.scope),Rl.sprintf(' data-field="%s"',t.field),0===i&&r>0?" data-not-first-th":"",b.length>0?b.join(" "):"",">"),o.push(Rl.sprintf('<div class="th-inner %s">',e.options.sortable&&t.sortable?"sortable".concat("center"===u?" sortable-center":""," both"):""));var A=e.options.escape&&e.options.escapeTitle?Rl.escapeHTML(t.title):t.title,R=A;t.checkbox&&(A="",!e.options.singleSelect&&e.options.checkboxHeader&&(A='<label><input name="btSelectAll" type="checkbox" /><span></span></label>'),e.header.stateField=t.field),t.radio&&(A="",e.header.stateField=t.field),!A&&t.showSelectTitle&&(A+=R),o.push(A),o.push("</div>"),o.push('<div class="fht-cell"></div>'),o.push("</div>"),o.push("</th>")}})),a&&"right"===e.options.detailViewAlign&&o.push(a),o.push("</tr>"),o.length>3&&i.push(o.join(""))})),this.$header.html(i.join("")),this.$header.find("th[data-field]").each((function(e,i){t(i).data(n[t(i).data("field")])})),this.$container.off("click",".th-inner").on("click",".th-inner",(function(n){var i=t(n.currentTarget);if(e.options.detailView&&!i.parent().hasClass("bs-checkbox")&&i.closest(".bootstrap-table")[0]!==e.$container[0])return!1;e.options.sortable&&i.parent().data().sortable&&e.onSort(n)}));var r=Rl.getEventName("resize.bootstrap-table",this.$el.attr("id"));t(window).off(r),!this.options.showHeader||this.options.cardView?(this.$header.hide(),this.$tableHeader.hide(),this.$tableLoading.css("top",0)):(this.$header.show(),this.$tableHeader.show(),this.$tableLoading.css("top",this.$header.outerHeight()+1),this.getCaret(),t(window).on(r,(function(){return e.resetView()}))),this.$selectAll=this.$header.find('[name="btSelectAll"]'),this.$selectAll.off("click").on("click",(function(n){n.stopPropagation();var i=t(n.currentTarget).prop("checked");e[i?"checkAll":"uncheckAll"](),e.updateSelected()}))}},{key:"initData",value:function(t,e){"append"===e?this.options.data=this.options.data.concat(t):"prepend"===e?this.options.data=[].concat(t).concat(this.options.data):(t=t||Rl.deepCopy(this.options.data),this.options.data=Array.isArray(t)?t:t[this.options.dataField]),this.data=c(this.options.data),this.options.sortReset&&(this.unsortedData=c(this.data)),"server"!==this.options.sidePagination&&this.initSort()}},{key:"initSort",value:function(){var t=this,e=this.options.sortName,n="desc"===this.options.sortOrder?-1:1,i=this.header.fields.indexOf(this.options.sortName),r=0;-1!==i?(this.options.sortStable&&this.data.forEach((function(t,e){t.hasOwnProperty("_position")||(t._position=e)})),this.options.customSort?Rl.calculateObjectValue(this.options,this.options.customSort,[this.options.sortName,this.options.sortOrder,this.data]):this.data.sort((function(r,o){t.header.sortNames[i]&&(e=t.header.sortNames[i]);var a=Rl.getItemField(r,e,t.options.escape),s=Rl.getItemField(o,e,t.options.escape),l=Rl.calculateObjectValue(t.header,t.header.sorters[i],[a,s,r,o]);return void 0!==l?t.options.sortStable&&0===l?n*(r._position-o._position):n*l:Rl.sort(a,s,n,t.options,r._position,o._position)})),void 0!==this.options.sortClass&&(clearTimeout(r),r=setTimeout((function(){t.$el.removeClass(t.options.sortClass);var e=t.$header.find('[data-field="'.concat(t.options.sortName,'"]')).index();t.$el.find("tr td:nth-child(".concat(e+1,")")).addClass(t.options.sortClass)}),250))):this.options.sortReset&&(this.data=c(this.unsortedData))}},{key:"sortReset",value:function(){this.options.sortName=void 0,this.options.sortOrder=void 0,this._sort()}},{key:"sortBy",value:function(t){this.options.sortName=t.field,this.options.sortOrder=t.hasOwnProperty("sortOrder")?t.sortOrder:"asc",this._sort()}},{key:"onSort",value:function(e){var n=e.type,i=e.currentTarget,r="keypress"===n?t(i):t(i).parent(),o=this.$header.find("th").eq(r.index());if(this.$header.add(this.$header_).find("span.order").remove(),this.options.sortName===r.data("field")){var a=this.options.sortOrder,s=this.columns[this.fieldsColumnsIndex[r.data("field")]].sortOrder||this.columns[this.fieldsColumnsIndex[r.data("field")]].order;void 0===a?this.options.sortOrder="asc":"asc"===a?this.options.sortOrder=this.options.sortReset?"asc"===s?"desc":void 0:"desc":"desc"===this.options.sortOrder&&(this.options.sortOrder=this.options.sortReset?"desc"===s?"asc":void 0:"asc"),void 0===this.options.sortOrder&&(this.options.sortName=void 0)}else this.options.sortName=r.data("field"),this.options.rememberOrder?this.options.sortOrder="asc"===r.data("order")?"desc":"asc":this.options.sortOrder=this.columns[this.fieldsColumnsIndex[r.data("field")]].sortOrder||this.columns[this.fieldsColumnsIndex[r.data("field")]].order;r.add(o).data("order",this.options.sortOrder),this.getCaret(),this._sort()}},{key:"_sort",value:function(){if("server"===this.options.sidePagination&&this.options.serverSort)return this.options.pageNumber=1,this.trigger("sort",this.options.sortName,this.options.sortOrder),void this.initServer(this.options.silentSort);this.options.pagination&&this.options.sortResetPage&&(this.options.pageNumber=1,this.initPagination()),this.trigger("sort",this.options.sortName,this.options.sortOrder),this.initSort(),this.initBody()}},{key:"initToolbar",value:function(){var e,n=this,i=this.options,o=[],a=0,s=0;this.$toolbar.find(".bs-bars").children().length&&t("body").append(t(i.toolbar)),this.$toolbar.html(""),"string"!=typeof i.toolbar&&"object"!==h(i.toolbar)||t(Rl.sprintf('<div class="bs-bars %s-%s"></div>',this.constants.classes.pull,i.toolbarAlign)).appendTo(this.$toolbar).append(t(i.toolbar)),o=['<div class="'.concat(["columns","columns-".concat(i.buttonsAlign),this.constants.classes.buttonsGroup,"".concat(this.constants.classes.pull,"-").concat(i.buttonsAlign)].join(" "),'">')],"string"==typeof i.buttonsOrder&&(i.buttonsOrder=i.buttonsOrder.replace(/\[|\]| |'/g,"").split(",")),this.buttons=Object.assign(this.buttons,{paginationSwitch:{text:i.pagination?i.formatPaginationSwitchUp():i.formatPaginationSwitchDown(),icon:i.pagination?i.icons.paginationSwitchDown:i.icons.paginationSwitchUp,render:!1,event:this.togglePagination,attributes:{"aria-label":i.formatPaginationSwitch(),title:i.formatPaginationSwitch()}},refresh:{text:i.formatRefresh(),icon:i.icons.refresh,render:!1,event:this.refresh,attributes:{"aria-label":i.formatRefresh(),title:i.formatRefresh()}},toggle:{text:i.formatToggleOn(),icon:i.icons.toggleOff,render:!1,event:this.toggleView,attributes:{"aria-label":i.formatToggleOn(),title:i.formatToggleOn()}},fullscreen:{text:i.formatFullscreen(),icon:i.icons.fullscreen,render:!1,event:this.toggleFullscreen,attributes:{"aria-label":i.formatFullscreen(),title:i.formatFullscreen()}},columns:{render:!1,html:function(){var t=[];if(t.push('<div class="keep-open '.concat(n.constants.classes.buttonsDropdown,'">\n            <button class="').concat(n.constants.buttonsClass,' dropdown-toggle" type="button" ').concat(n.constants.dataToggle,'="dropdown"\n            aria-label="').concat(i.formatColumns(),'" ').concat(i.buttonsAttributeTitle,'="').concat(i.formatColumns(),'">\n            ').concat(i.showButtonIcons?Rl.sprintf(n.constants.html.icon,i.iconsPrefix,i.icons.columns):"","\n            ").concat(i.showButtonText?i.formatColumns():"","\n            ").concat(n.constants.html.dropdownCaret,"\n            </button>\n            ").concat(n.constants.html.toolbarDropdown[0])),i.showColumnsSearch&&(t.push(Rl.sprintf(n.constants.html.toolbarDropdownItem,Rl.sprintf('<input type="text" class="%s" name="columnsSearch" placeholder="%s" autocomplete="off">',n.constants.classes.input,i.formatSearch()))),t.push(n.constants.html.toolbarDropdownSeparator)),i.showColumnsToggleAll){var e=n.getVisibleColumns().length===n.columns.filter((function(t){return!n.isSelectionColumn(t)})).length;t.push(Rl.sprintf(n.constants.html.toolbarDropdownItem,Rl.sprintf('<input type="checkbox" class="toggle-all" %s> <span>%s</span>',e?'checked="checked"':"",i.formatColumnsToggleAll()))),t.push(n.constants.html.toolbarDropdownSeparator)}var r=0;return n.columns.forEach((function(t){t.visible&&r++})),n.columns.forEach((function(e,o){if(!n.isSelectionColumn(e)&&(!i.cardView||e.cardVisible)){var a=e.visible?' checked="checked"':"",l=r<=i.minimumCountColumns&&a?' disabled="disabled"':"";e.switchable&&(t.push(Rl.sprintf(n.constants.html.toolbarDropdownItem,Rl.sprintf('<input type="checkbox" data-field="%s" value="%s"%s%s> <span>%s</span>',e.field,o,a,l,e.switchableLabel||e.title))),s++)}})),t.push(n.constants.html.toolbarDropdown[1],"</div>"),t.join("")}}});for(var c={},u=0,f=Object.entries(this.buttons);u<f.length;u++){var d=l(f[u],2),p=d[0],g=d[1],v=void 0;if(g.hasOwnProperty("html"))"function"==typeof g.html?v=g.html():"string"==typeof g.html&&(v=g.html);else{var b=this.constants.buttonsClass;if(g.hasOwnProperty("attributes")&&g.attributes.class&&(b+=" ".concat(g.attributes.class)),v='<button class="'.concat(b,'" type="button" name="').concat(p,'"'),g.hasOwnProperty("attributes"))for(var m=0,y=Object.entries(g.attributes);m<y.length;m++){var w=l(y[m],2),S=w[0],x=w[1];if("class"!==S){var O="title"===S?this.options.buttonsAttributeTitle:S;v+=" ".concat(O,'="').concat(x,'"')}}v+=">",i.showButtonIcons&&g.hasOwnProperty("icon")&&(v+="".concat(Rl.sprintf(this.constants.html.icon,i.iconsPrefix,g.icon)," ")),i.showButtonText&&g.hasOwnProperty("text")&&(v+=g.text),v+="</button>"}c[p]=v;var k="show".concat(p.charAt(0).toUpperCase()).concat(p.substring(1)),T=i[k];!(!g.hasOwnProperty("render")||g.hasOwnProperty("render")&&g.render)||void 0!==T&&!0!==T||(i[k]=!0),i.buttonsOrder.includes(p)||i.buttonsOrder.push(p)}var C,P=r(i.buttonsOrder);try{for(P.s();!(C=P.n()).done;){var I=C.value;i["show".concat(I.charAt(0).toUpperCase()).concat(I.substring(1))]&&o.push(c[I])}}catch(t){P.e(t)}finally{P.f()}o.push("</div>"),(this.showToolbar||o.length>2)&&this.$toolbar.append(o.join(""));for(var A=function(){var t=l($[R],2),e=t[0],i=t[1];if(i.hasOwnProperty("event")){if("function"==typeof i.event||"string"==typeof i.event){var r="string"==typeof i.event?window[i.event]:i.event;return n.$toolbar.find('button[name="'.concat(e,'"]')).off("click").on("click",(function(){return r.call(n)})),1}for(var o=function(){var t=l(s[a],2),i=t[0],r=t[1],o="string"==typeof r?window[r]:r;n.$toolbar.find('button[name="'.concat(e,'"]')).off(i).on(i,(function(){return o.call(n)}))},a=0,s=Object.entries(i.event);a<s.length;a++)o()}},R=0,$=Object.entries(this.buttons);R<$.length;R++)A();if(i.showColumns){var E=(e=this.$toolbar.find(".keep-open")).find('input[type="checkbox"]:not(".toggle-all")'),j=e.find('input[type="checkbox"].toggle-all');if(s<=i.minimumCountColumns&&e.find("input").prop("disabled",!0),e.find("li, label").off("click").on("click",(function(t){t.stopImmediatePropagation()})),E.off("click").on("click",(function(e){var i=e.currentTarget,r=t(i);n._toggleColumn(r.val(),r.prop("checked"),!1),n.trigger("column-switch",r.data("field"),r.prop("checked")),j.prop("checked",E.filter(":checked").length===n.columns.filter((function(t){return!n.isSelectionColumn(t)})).length)})),j.off("click").on("click",(function(e){var i=e.currentTarget;n._toggleAllColumns(t(i).prop("checked")),n.trigger("column-switch-all",t(i).prop("checked"))})),i.showColumnsSearch){var N=e.find('[name="columnsSearch"]'),F=e.find(".dropdown-item-marker");N.on("keyup paste change",(function(e){var n=e.currentTarget,i=t(n).val().toLowerCase();F.show(),E.each((function(e,n){var r=t(n).parents(".dropdown-item-marker");r.text().toLowerCase().includes(i)||r.hide()}))}))}}var D=function(t){var e=t.is("select")?"change":"keyup drop blur mouseup";t.off(e).on(e,(function(t){i.searchOnEnterKey&&13!==t.keyCode||[37,38,39,40].includes(t.keyCode)||(clearTimeout(a),a=setTimeout((function(){n.onSearch({currentTarget:t.currentTarget})}),i.searchTimeOut))}))};if((i.search||this.showSearchClearButton)&&"string"!=typeof i.searchSelector){o=[];var L=Rl.sprintf(this.constants.html.searchButton,this.constants.buttonsClass,i.formatSearch(),i.showButtonIcons?Rl.sprintf(this.constants.html.icon,i.iconsPrefix,i.icons.search):"",i.showButtonText?i.formatSearch():""),_=Rl.sprintf(this.constants.html.searchClearButton,this.constants.buttonsClass,i.formatClearSearch(),i.showButtonIcons?Rl.sprintf(this.constants.html.icon,i.iconsPrefix,i.icons.clearSearch):"",i.showButtonText?i.formatClearSearch():""),V='<input class="'.concat(this.constants.classes.input,"\n        ").concat(Rl.sprintf(" %s%s",this.constants.classes.inputPrefix,i.iconSize),'\n        search-input" type="search" aria-label="').concat(i.formatSearch(),'" placeholder="').concat(i.formatSearch(),'" autocomplete="off">'),B=V;if(i.showSearchButton||i.showSearchClearButton){var H=(i.showSearchButton?L:"")+(i.showSearchClearButton?_:"");B=i.search?Rl.sprintf(this.constants.html.inputGroup,V,H):H}o.push(Rl.sprintf('\n        <div class="'.concat(this.constants.classes.pull,"-").concat(i.searchAlign," search ").concat(this.constants.classes.inputGroup,'">\n          %s\n        </div>\n      '),B)),this.$toolbar.append(o.join(""));var M=Rl.getSearchInput(this);i.showSearchButton?(this.$toolbar.find(".search button[name=search]").off("click").on("click",(function(){clearTimeout(a),a=setTimeout((function(){n.onSearch({currentTarget:M})}),i.searchTimeOut)})),i.searchOnEnterKey&&D(M)):D(M),i.showSearchClearButton&&this.$toolbar.find(".search button[name=clearSearch]").click((function(){n.resetSearch()}))}else"string"==typeof i.searchSelector&&D(Rl.getSearchInput(this))}},{key:"onSearch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.currentTarget,i=e.firedByInitSearchText,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(void 0!==n&&t(n).length&&r){var o=t(n).val().trim();if(this.options.trimOnSearch&&t(n).val()!==o&&t(n).val(o),this.searchText===o)return;var a=Rl.getSearchInput(this),s=n instanceof jQuery?n:t(n);(s.is(a)||s.hasClass("search-input"))&&(this.searchText=o,this.options.searchText=o)}i||(this.options.pageNumber=1),this.initSearch(),i?"client"===this.options.sidePagination&&this.updatePagination():this.updatePagination(),this.trigger("search",this.searchText)}},{key:"initSearch",value:function(){var e=this;if(this.filterOptions=this.filterOptions||this.options.filterOptions,"server"!==this.options.sidePagination){if(this.options.customSearch)return this.data=Rl.calculateObjectValue(this.options,this.options.customSearch,[this.options.data,this.searchText,this.filterColumns]),this.options.sortReset&&(this.unsortedData=c(this.data)),void this.initSort();var n=this.searchText&&(this.fromHtml?Rl.escapeHTML(this.searchText):this.searchText),i=n?n.toLowerCase():"",r=Rl.isEmptyObject(this.filterColumns)?null:this.filterColumns;this.options.searchAccentNeutralise&&(i=Rl.normalizeAccent(i)),"function"==typeof this.filterOptions.filterAlgorithm?this.data=this.options.data.filter((function(t){return e.filterOptions.filterAlgorithm.apply(null,[t,r])})):"string"==typeof this.filterOptions.filterAlgorithm&&(this.data=r?this.options.data.filter((function(t){var n=e.filterOptions.filterAlgorithm;if("and"===n){for(var i in r)if(Array.isArray(r[i])&&!r[i].includes(t[i])||!Array.isArray(r[i])&&t[i]!==r[i])return!1}else if("or"===n){var o=!1;for(var a in r)(Array.isArray(r[a])&&r[a].includes(t[a])||!Array.isArray(r[a])&&t[a]===r[a])&&(o=!0);return o}return!0})):c(this.options.data));var o=this.getVisibleFields();this.data=i?this.data.filter((function(r,a){for(var s=0;s<e.header.fields.length;s++)if(e.header.searchables[s]&&(!e.options.visibleSearch||-1!==o.indexOf(e.header.fields[s]))){var l=Rl.isNumeric(e.header.fields[s])?parseInt(e.header.fields[s],10):e.header.fields[s],c=e.columns[e.fieldsColumnsIndex[l]],u=void 0;if("string"!=typeof l||r.hasOwnProperty(l))u=r[l];else{u=r;for(var h=l.split("."),f=0;f<h.length;f++){if(null===u[h[f]]||void 0===u[h[f]]){u=null;break}u=u[h[f]]}}if(e.options.searchAccentNeutralise&&(u=Rl.normalizeAccent(u)),c&&c.searchFormatter&&(u=Rl.calculateObjectValue(c,e.header.formatters[s],[u,r,a,c.field],u),e.header.formatters[s]&&"number"!=typeof u&&(u=t("<div>").html(u).text())),"string"==typeof u||"number"==typeof u)if(e.options.strictSearch){if("".concat(u).toLowerCase()===i)return!0}else if(e.options.regexSearch){if(Rl.regexCompare(u,n))return!0}else{var d=/(?:(<=|=>|=<|>=|>|<)(?:\s+)?(-?\d+)?|(-?\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm.exec(e.searchText),p=!1;if(d){var g=d[1]||"".concat(d[5],"l"),v=d[2]||d[3],b=parseInt(u,10),m=parseInt(v,10);switch(g){case">":case"<l":p=b>m;break;case"<":case">l":p=b<m;break;case"<=":case"=<":case">=l":case"=>l":p=b<=m;break;case">=":case"=>":case"<=l":case"=<l":p=b>=m}}if(p||"".concat(u).toLowerCase().includes(i))return!0}}return!1})):this.data,this.options.sortReset&&(this.unsortedData=c(this.data)),this.initSort()}}},{key:"initPagination",value:function(){var t=this,e=this.options;if(e.pagination){this.$pagination.show();var n,i,r,o,a,s,l,c=[],u=!1,h=this.getData({includeHiddenRows:!1}),f=e.pageList;if("string"==typeof f&&(f=f.replace(/\[|\]| /g,"").toLowerCase().split(",")),f=f.map((function(t){return"string"==typeof t?t.toLowerCase()===e.formatAllRows().toLowerCase()||["all","unlimited"].includes(t.toLowerCase())?e.formatAllRows():+t:t})),this.paginationParts=e.paginationParts,"string"==typeof this.paginationParts&&(this.paginationParts=this.paginationParts.replace(/\[|\]| |'/g,"").split(",")),"server"!==e.sidePagination&&(e.totalRows=h.length),this.totalPages=0,e.totalRows&&(e.pageSize===e.formatAllRows()&&(e.pageSize=e.totalRows,u=!0),this.totalPages=1+~~((e.totalRows-1)/e.pageSize),e.totalPages=this.totalPages),this.totalPages>0&&e.pageNumber>this.totalPages&&(e.pageNumber=this.totalPages),this.pageFrom=(e.pageNumber-1)*e.pageSize+1,this.pageTo=e.pageNumber*e.pageSize,this.pageTo>e.totalRows&&(this.pageTo=e.totalRows),this.options.pagination&&"server"!==this.options.sidePagination&&(this.options.totalNotFiltered=this.options.data.length),this.options.showExtendedPagination||(this.options.totalNotFiltered=void 0),(this.paginationParts.includes("pageInfo")||this.paginationParts.includes("pageInfoShort")||this.paginationParts.includes("pageSize"))&&c.push('<div class="'.concat(this.constants.classes.pull,"-").concat(e.paginationDetailHAlign,' pagination-detail">')),this.paginationParts.includes("pageInfo")||this.paginationParts.includes("pageInfoShort")){var d=this.options.totalRows;"client"===this.options.sidePagination&&this.options.paginationLoadMore&&!this._paginationLoaded&&this.totalPages>1&&(d+=" +");var p=this.paginationParts.includes("pageInfoShort")?e.formatDetailPagination(d):e.formatShowingRows(this.pageFrom,this.pageTo,d,e.totalNotFiltered);c.push('<span class="pagination-info">\n      '.concat(p,"\n      </span>"))}if(this.paginationParts.includes("pageSize")){c.push('<div class="page-list">');var g=['<div class="'.concat(this.constants.classes.paginationDropdown,'">\n        <button class="').concat(this.constants.buttonsClass,' dropdown-toggle" type="button" ').concat(this.constants.dataToggle,'="dropdown">\n        <span class="page-size">\n        ').concat(u?e.formatAllRows():e.pageSize,"\n        </span>\n        ").concat(this.constants.html.dropdownCaret,"\n        </button>\n        ").concat(this.constants.html.pageDropdown[0])];f.forEach((function(n,i){var r;(!e.smartDisplay||0===i||f[i-1]<e.totalRows||n===e.formatAllRows())&&(r=u?n===e.formatAllRows()?t.constants.classes.dropdownActive:"":n===e.pageSize?t.constants.classes.dropdownActive:"",g.push(Rl.sprintf(t.constants.html.pageDropdownItem,r,n)))})),g.push("".concat(this.constants.html.pageDropdown[1],"</div>")),c.push(e.formatRecordsPerPage(g.join("")))}if((this.paginationParts.includes("pageInfo")||this.paginationParts.includes("pageInfoShort")||this.paginationParts.includes("pageSize"))&&c.push("</div></div>"),this.paginationParts.includes("pageList")){c.push('<div class="'.concat(this.constants.classes.pull,"-").concat(e.paginationHAlign,' pagination">'),Rl.sprintf(this.constants.html.pagination[0],Rl.sprintf(" pagination-%s",e.iconSize)),Rl.sprintf(this.constants.html.paginationItem," page-pre",e.formatSRPaginationPreText(),e.paginationPreText)),this.totalPages<e.paginationSuccessivelySize?(i=1,r=this.totalPages):r=(i=e.pageNumber-e.paginationPagesBySide)+2*e.paginationPagesBySide,e.pageNumber<e.paginationSuccessivelySize-1&&(r=e.paginationSuccessivelySize),e.paginationSuccessivelySize>this.totalPages-i&&(i=i-(e.paginationSuccessivelySize-(this.totalPages-i))+1),i<1&&(i=1),r>this.totalPages&&(r=this.totalPages);var v=Math.round(e.paginationPagesBySide/2),b=function(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Rl.sprintf(t.constants.html.paginationItem,i+(n===e.pageNumber?" ".concat(t.constants.classes.paginationActive):""),e.formatSRPaginationPageText(n),n)};if(i>1){var m=e.paginationPagesBySide;for(m>=i&&(m=i-1),n=1;n<=m;n++)c.push(b(n));i-1===m+1?(n=i-1,c.push(b(n))):i-1>m&&(i-2*e.paginationPagesBySide>e.paginationPagesBySide&&e.paginationUseIntermediate?(n=Math.round((i-v)/2+v),c.push(b(n," page-intermediate"))):c.push(Rl.sprintf(this.constants.html.paginationItem," page-first-separator disabled","","...")))}for(n=i;n<=r;n++)c.push(b(n));if(this.totalPages>r){var y=this.totalPages-(e.paginationPagesBySide-1);for(r>=y&&(y=r+1),r+1===y-1?(n=r+1,c.push(b(n))):y>r+1&&(this.totalPages-r>2*e.paginationPagesBySide&&e.paginationUseIntermediate?(n=Math.round((this.totalPages-v-r)/2+r),c.push(b(n," page-intermediate"))):c.push(Rl.sprintf(this.constants.html.paginationItem," page-last-separator disabled","","..."))),n=y;n<=this.totalPages;n++)c.push(b(n))}c.push(Rl.sprintf(this.constants.html.paginationItem," page-next",e.formatSRPaginationNextText(),e.paginationNextText)),c.push(this.constants.html.pagination[1],"</div>")}this.$pagination.html(c.join(""));var w=["bottom","both"].includes(e.paginationVAlign)?" ".concat(this.constants.classes.dropup):"";this.$pagination.last().find(".page-list > div").addClass(w),e.onlyInfoPagination||(o=this.$pagination.find(".page-list a"),a=this.$pagination.find(".page-pre"),s=this.$pagination.find(".page-next"),l=this.$pagination.find(".page-item").not(".page-next, .page-pre, .page-last-separator, .page-first-separator"),this.totalPages<=1&&this.$pagination.find("div.pagination").hide(),e.smartDisplay&&(f.length<2||e.totalRows<=f[0])&&this.$pagination.find("div.page-list").hide(),this.$pagination[this.getData().length?"show":"hide"](),e.paginationLoop||(1===e.pageNumber&&a.addClass("disabled"),e.pageNumber===this.totalPages&&s.addClass("disabled")),u&&(e.pageSize=e.formatAllRows()),o.off("click").on("click",(function(e){return t.onPageListChange(e)})),a.off("click").on("click",(function(e){return t.onPagePre(e)})),s.off("click").on("click",(function(e){return t.onPageNext(e)})),l.off("click").on("click",(function(e){return t.onPageNumber(e)})))}else this.$pagination.hide()}},{key:"updatePagination",value:function(e){e&&t(e.currentTarget).hasClass("disabled")||(this.options.maintainMetaData||this.resetRows(),this.initPagination(),this.trigger("page-change",this.options.pageNumber,this.options.pageSize),"server"===this.options.sidePagination||"client"===this.options.sidePagination&&this.options.paginationLoadMore&&!this._paginationLoaded&&this.options.pageNumber===this.totalPages?this.initServer():this.initBody())}},{key:"onPageListChange",value:function(e){e.preventDefault();var n=t(e.currentTarget);return n.parent().addClass(this.constants.classes.dropdownActive).siblings().removeClass(this.constants.classes.dropdownActive),this.options.pageSize=n.text().toUpperCase()===this.options.formatAllRows().toUpperCase()?this.options.formatAllRows():+n.text(),this.$toolbar.find(".page-size").text(this.options.pageSize),this.updatePagination(e),!1}},{key:"onPagePre",value:function(e){if(!t(e.target).hasClass("disabled"))return e.preventDefault(),this.options.pageNumber-1==0?this.options.pageNumber=this.options.totalPages:this.options.pageNumber--,this.updatePagination(e),!1}},{key:"onPageNext",value:function(e){if(!t(e.target).hasClass("disabled"))return e.preventDefault(),this.options.pageNumber+1>this.options.totalPages?this.options.pageNumber=1:this.options.pageNumber++,this.updatePagination(e),!1}},{key:"onPageNumber",value:function(e){if(e.preventDefault(),this.options.pageNumber!==+t(e.currentTarget).text())return this.options.pageNumber=+t(e.currentTarget).text(),this.updatePagination(e),!1}},{key:"initRow",value:function(e,n,i,r){var o=this;if(!(Rl.findIndex(this.hiddenRows,e)>-1)){var a=Rl.calculateObjectValue(this.options,this.options.rowStyle,[e,n],{}),u=Rl.calculateObjectValue(this.options,this.options.rowAttributes,[e,n],{}),f={};if(e._data&&!Rl.isEmptyObject(e._data))for(var d=0,p=Object.entries(e._data);d<p.length;d++){var g=l(p[d],2),v=g[0],b=g[1];if("index"===v)return;f["data-".concat(v)]="object"===h(b)?JSON.stringify(b):b}var m=Rl.h("tr",s(s({id:Array.isArray(e)?void 0:e._id,class:a&&a.classes||(Array.isArray(e)?void 0:e._class),style:a&&a.css||(Array.isArray(e)?void 0:e._style),"data-index":n,"data-uniqueid":Rl.getItemField(e,this.options.uniqueId,!1),"data-has-detail-view":this.options.detailView&&Rl.calculateObjectValue(null,this.options.detailFilter,[n,e])?"true":void 0},u),f)),y=[],w="";Rl.hasDetailViewIcon(this.options)&&(w=Rl.h("td"),Rl.calculateObjectValue(null,this.options.detailFilter,[n,e])&&w.append(Rl.h("a",{class:"detail-icon",href:"#",html:Rl.sprintf(this.constants.html.icon,this.options.iconsPrefix,this.options.icons.detailOpen)}))),w&&"right"!==this.options.detailViewAlign&&y.push(w);var S=this.header.fields.map((function(i,r){var a=o.columns[r],s=Rl.getItemField(e,i,o.options.escape,a.escape),u="",h={class:o.header.classes[r]?[o.header.classes[r]]:[],style:o.header.styles[r]?[o.header.styles[r]]:[]},f="card-view card-view-field-".concat(i);if((!o.fromHtml&&!o.autoMergeCells||void 0!==s||a.checkbox||a.radio)&&a.visible&&(!o.options.cardView||a.cardVisible)){for(var d=0,p=["class","style","id","rowspan","colspan","title"];d<p.length;d++){var g=p[d],v=e["_".concat(i,"_").concat(g)];v&&(h[g]?h[g].push(v):h[g]=v)}var b=Rl.calculateObjectValue(o.header,o.header.cellStyles[r],[s,e,n,i],{});if(b.classes&&h.class.push(b.classes),b.css&&h.style.push(b.css),u=Rl.calculateObjectValue(a,o.header.formatters[r],[s,e,n,i],s),a.checkbox||a.radio||(u=null==u?o.options.undefinedText:u),a.searchable&&o.searchText&&o.options.searchHighlight&&!a.checkbox&&!a.radio){var m=o.searchText.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");if(o.options.searchAccentNeutralise&&"string"==typeof u){var y=new RegExp("".concat(Rl.normalizeAccent(m)),"gmi").exec(Rl.normalizeAccent(u));y&&(m=u.substring(y.index,y.index+m.length))}var w=Rl.replaceSearchMark(u,m);u=Rl.calculateObjectValue(a,a.searchHighlightFormatter,[u,o.searchText],w)}if(e["_".concat(i,"_data")]&&!Rl.isEmptyObject(e["_".concat(i,"_data")]))for(var S=0,x=Object.entries(e["_".concat(i,"_data")]);S<x.length;S++){var O=l(x[S],2),k=O[0],T=O[1];if("index"===k)return;h["data-".concat(k)]=T}if(a.checkbox||a.radio){var C=a.checkbox?"checkbox":"radio",P=Rl.isObject(u)&&u.hasOwnProperty("checked")?u.checked:(!0===u||s)&&!1!==u,I=!a.checkboxEnabled||u&&u.disabled,A=o.header.formatters[r]&&("string"==typeof u||u instanceof Node||u instanceof t)?Rl.htmlToNodes(u):[];return e[o.header.stateField]=!0===u||!!s||u&&u.checked,Rl.h(o.options.cardView?"div":"td",{class:[o.options.cardView?f:"bs-checkbox",a.class],style:o.options.cardView?void 0:h.style},[Rl.h("label",{},[Rl.h("input",{"data-index":n,name:o.options.selectItemName,type:C,value:e[o.options.idField],checked:P?"checked":void 0,disabled:I?"disabled":void 0}),Rl.h("span")])].concat(c(A)))}if(o.options.cardView){if(o.options.smartDisplay&&""===u)return Rl.h("div",{class:f});var R=o.options.showHeader?Rl.h("span",{class:["card-view-title",b.classes],style:h.style,html:Rl.getFieldTitle(o.columns,i)}):"";return Rl.h("div",{class:f},[R,Rl.h("span",{class:["card-view-value",b.classes],style:h.style},c(Rl.htmlToNodes(u)))])}return Rl.h("td",h,c(Rl.htmlToNodes(u)))}})).filter((function(t){return t}));return y.push.apply(y,c(S)),w&&"right"===this.options.detailViewAlign&&y.push(w),this.options.cardView?m.append(Rl.h("td",{colspan:this.header.fields.length},[Rl.h("div",{class:"card-views"},y)])):m.append.apply(m,y),m}}},{key:"initBody",value:function(e,n){var i=this,r=this.getData();this.trigger("pre-body",r),this.$body=this.$el.find(">tbody"),this.$body.length||(this.$body=t("<tbody></tbody>").appendTo(this.$el)),this.options.pagination&&"server"!==this.options.sidePagination||(this.pageFrom=1,this.pageTo=r.length);var o=[],a=t(document.createDocumentFragment()),s=!1,l=[];this.autoMergeCells=Rl.checkAutoMergeCells(r.slice(this.pageFrom-1,this.pageTo));for(var c=this.pageFrom-1;c<this.pageTo;c++){var u=r[c],h=this.initRow(u,c,r,a);if(s=s||!!h,h&&h instanceof Node){var f=this.options.uniqueId,d=[h];if(f&&u.hasOwnProperty(f)){var p=u[f],g=this.$body.find(Rl.sprintf('> tr[data-uniqueid="%s"][data-has-detail-view]',p)).next();g.is("tr.detail-view")&&(l.push(c),n&&p===n||d.push(g[0]))}this.options.virtualScroll?o.push(t("<div>").html(d).html()):a.append(d)}}this.$el.removeAttr("role"),s?this.options.virtualScroll?(this.virtualScroll&&this.virtualScroll.destroy(),this.virtualScroll=new Ll({rows:o,fixedScroll:e,scrollEl:this.$tableBody[0],contentEl:this.$body[0],itemHeight:this.options.virtualScrollItemHeight,callback:function(t,e){i.fitHeader(),i.initBodyEvent(),i.trigger("virtual-scroll",t,e)}})):this.$body.html(a):(this.$body.html('<tr class="no-records-found">'.concat(Rl.sprintf('<td colspan="%s">%s</td>',this.getVisibleFields().length+Rl.getDetailViewIndexOffset(this.options),this.options.formatNoMatches()),"</tr>")),this.$el.attr("role","presentation")),l.forEach((function(t){i.expandRow(t)})),e||this.scrollTo(0),this.initBodyEvent(),this.initFooter(),this.resetView(),this.updateSelected(),"server"!==this.options.sidePagination&&(this.options.totalRows=r.length),this.trigger("post-body",r)}},{key:"initBodyEvent",value:function(){var e=this;this.$body.find("> tr[data-index] > td").off("click dblclick").on("click dblclick",(function(n){var i=t(n.currentTarget);if(!(i.find(".detail-icon").length||i.index()-Rl.getDetailViewIndexOffset(e.options)<0)){var r=i.parent(),o=t(n.target).parents(".card-views").children(),a=t(n.target).parents(".card-view"),s=r.data("index"),l=e.data[s],c=e.options.cardView?o.index(a):i[0].cellIndex,u=e.getVisibleFields()[c-Rl.getDetailViewIndexOffset(e.options)],h=e.columns[e.fieldsColumnsIndex[u]],f=Rl.getItemField(l,u,e.options.escape,h.escape);if(e.trigger("click"===n.type?"click-cell":"dbl-click-cell",u,f,l,i),e.trigger("click"===n.type?"click-row":"dbl-click-row",l,r,u),"click"===n.type&&e.options.clickToSelect&&h.clickToSelect&&!Rl.calculateObjectValue(e.options,e.options.ignoreClickToSelectOn,[n.target])){var d=r.find(Rl.sprintf('[name="%s"]',e.options.selectItemName));d.length&&d[0].click()}"click"===n.type&&e.options.detailViewByClick&&e.toggleDetailView(s,e.header.detailFormatters[e.fieldsColumnsIndex[u]])}})).off("mousedown").on("mousedown",(function(t){e.multipleSelectRowCtrlKey=t.ctrlKey||t.metaKey,e.multipleSelectRowShiftKey=t.shiftKey})),this.$body.find("> tr[data-index] > td > .detail-icon").off("click").on("click",(function(n){return n.preventDefault(),e.toggleDetailView(t(n.currentTarget).parent().parent().data("index")),!1})),this.$selectItem=this.$body.find(Rl.sprintf('[name="%s"]',this.options.selectItemName)),this.$selectItem.off("click").on("click",(function(n){n.stopImmediatePropagation();var i=t(n.currentTarget);e._toggleCheck(i.prop("checked"),i.data("index"))})),this.header.events.forEach((function(n,i){var r=n;if(r){if("string"==typeof r&&(r=Rl.calculateObjectValue(null,r)),!r)throw new Error("Unknown event in the scope: ".concat(n));var o=e.header.fields[i],a=e.getVisibleFields().indexOf(o);if(-1!==a){a+=Rl.getDetailViewIndexOffset(e.options);var s=function(n){if(!r.hasOwnProperty(n))return 1;var i=r[n];e.$body.find(">tr:not(.no-records-found)").each((function(r,s){var l=t(s),c=l.find(e.options.cardView?".card-views>.card-view":">td").eq(a),u=n.indexOf(" "),h=n.substring(0,u),f=n.substring(u+1);c.find(f).off(h).on(h,(function(t){var n=l.data("index"),r=e.data[n],a=r[o];i.apply(e,[t,a,r,n])}))}))};for(var l in r)s(l)}}}))}},{key:"initServer",value:function(e,n){var i=this,o={},a=this.header.fields.indexOf(this.options.sortName),s={searchText:this.searchText,sortName:this.options.sortName,sortOrder:this.options.sortOrder};if(this.header.sortNames[a]&&(s.sortName=this.header.sortNames[a]),this.options.pagination&&"server"===this.options.sidePagination&&(s.pageSize=this.options.pageSize===this.options.formatAllRows()?this.options.totalRows:this.options.pageSize,s.pageNumber=this.options.pageNumber),this.options.url||this.options.ajax){if("limit"===this.options.queryParamsType&&(s={search:s.searchText,sort:s.sortName,order:s.sortOrder},this.options.pagination&&"server"===this.options.sidePagination&&(s.offset=this.options.pageSize===this.options.formatAllRows()?0:this.options.pageSize*(this.options.pageNumber-1),s.limit=this.options.pageSize,0!==s.limit&&this.options.pageSize!==this.options.formatAllRows()||delete s.limit)),this.options.search&&"server"===this.options.sidePagination&&this.options.searchable&&this.columns.filter((function(t){return t.searchable})).length){s.searchable=[];var l,c=r(this.columns);try{for(c.s();!(l=c.n()).done;){var u=l.value;!u.checkbox&&u.searchable&&(this.options.visibleSearch&&u.visible||!this.options.visibleSearch)&&s.searchable.push(u.field)}}catch(t){c.e(t)}finally{c.f()}}if(Rl.isEmptyObject(this.filterColumnsPartial)||(s.filter=JSON.stringify(this.filterColumnsPartial,null)),Rl.extend(s,n||{}),!1!==(o=Rl.calculateObjectValue(this.options,this.options.queryParams,[s],o))){e||this.showLoading();var h=Rl.extend({},Rl.calculateObjectValue(null,this.options.ajaxOptions),{type:this.options.method,url:this.options.url,data:"application/json"===this.options.contentType&&"post"===this.options.method?JSON.stringify(o):o,cache:this.options.cache,contentType:this.options.contentType,dataType:this.options.dataType,success:function(t,n,r){var o=Rl.calculateObjectValue(i.options,i.options.responseHandler,[t,r],t);"client"===i.options.sidePagination&&i.options.paginationLoadMore&&(i._paginationLoaded=i.data.length===o.length),i.load(o),i.trigger("load-success",o,r&&r.status,r),e||i.hideLoading(),"server"===i.options.sidePagination&&i.options.pageNumber>1&&o[i.options.totalField]>0&&!o[i.options.dataField].length&&i.updatePagination()},error:function(t){if(t&&0===t.status&&i._xhrAbort)i._xhrAbort=!1;else{var n=[];"server"===i.options.sidePagination&&((n={})[i.options.totalField]=0,n[i.options.dataField]=[]),i.load(n),i.trigger("load-error",t&&t.status,t),e||i.hideLoading()}}});return this.options.ajax?Rl.calculateObjectValue(this,this.options.ajax,[h],null):(this._xhr&&4!==this._xhr.readyState&&(this._xhrAbort=!0,this._xhr.abort()),this._xhr=t.ajax(h)),o}}}},{key:"initSearchText",value:function(){if(this.options.search&&(this.searchText="",""!==this.options.searchText)){var t=Rl.getSearchInput(this);t.val(this.options.searchText),this.onSearch({currentTarget:t,firedByInitSearchText:!0})}}},{key:"getCaret",value:function(){var e=this;this.$header.find("th").each((function(n,i){t(i).find(".sortable").removeClass("desc asc").addClass(t(i).data("field")===e.options.sortName?e.options.sortOrder:"both")}))}},{key:"updateSelected",value:function(){var e=this.$selectItem.filter(":enabled").length&&this.$selectItem.filter(":enabled").length===this.$selectItem.filter(":enabled").filter(":checked").length;this.$selectAll.add(this.$selectAll_).prop("checked",e),this.$selectItem.each((function(e,n){t(n).closest("tr")[t(n).prop("checked")?"addClass":"removeClass"]("selected")}))}},{key:"updateRows",value:function(){var e=this;this.$selectItem.each((function(n,i){e.data[t(i).data("index")][e.header.stateField]=t(i).prop("checked")}))}},{key:"resetRows",value:function(){var t,e=r(this.data);try{for(e.s();!(t=e.n()).done;){var n=t.value;this.$selectAll.prop("checked",!1),this.$selectItem.prop("checked",!1),this.header.stateField&&(n[this.header.stateField]=!1)}}catch(t){e.e(t)}finally{e.f()}this.initHiddenRows()}},{key:"trigger",value:function(n){for(var i,r,o="".concat(n,".bs.table"),a=arguments.length,s=new Array(a>1?a-1:0),l=1;l<a;l++)s[l-1]=arguments[l];(i=this.options)[e.EVENTS[o]].apply(i,[].concat(s,[this])),this.$el.trigger(t.Event(o,{sender:this}),s),(r=this.options).onAll.apply(r,[o].concat([].concat(s,[this]))),this.$el.trigger(t.Event("all.bs.table",{sender:this}),[o,s])}},{key:"resetHeader",value:function(){var t=this;clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout((function(){return t.fitHeader()}),this.$el.is(":hidden")?100:0)}},{key:"fitHeader",value:function(){var e=this;if(this.$el.is(":hidden"))this.timeoutId_=setTimeout((function(){return e.fitHeader()}),100);else{var n=this.$tableBody.get(0),i=this.hasScrollBar&&n.scrollHeight>n.clientHeight+this.$header.outerHeight()?Rl.getScrollBarWidth():0;this.$el.css("margin-top",-this.$header.outerHeight());var r=this.$tableHeader.find(":focus");if(r.length>0){var o=r.parents("th");if(o.length>0){var a=o.attr("data-field");if(void 0!==a){var s=this.$header.find("[data-field='".concat(a,"']"));s.length>0&&s.find(":input").addClass("focus-temp")}}}this.$header_=this.$header.clone(!0,!0),this.$selectAll_=this.$header_.find('[name="btSelectAll"]'),this.$tableHeader.css("margin-right",i).find("table").css("width",this.$el.outerWidth()).html("").attr("class",this.$el.attr("class")).append(this.$header_),this.$tableLoading.css("width",this.$el.outerWidth());var l=t(".focus-temp:visible:eq(0)");l.length>0&&(l.focus(),this.$header.find(".focus-temp").removeClass("focus-temp")),this.$header.find("th[data-field]").each((function(n,i){e.$header_.find(Rl.sprintf('th[data-field="%s"]',t(i).data("field"))).data(t(i).data())}));for(var c=this.getVisibleFields(),u=this.$header_.find("th"),h=this.$body.find(">tr:not(.no-records-found,.virtual-scroll-top)").eq(0);h.length&&h.find('>td[colspan]:not([colspan="1"])').length;)h=h.next();var f=h.find("> *").length;h.find("> *").each((function(n,i){var r=t(i);if(Rl.hasDetailViewIcon(e.options)&&(0===n&&"right"!==e.options.detailViewAlign||n===f-1&&"right"===e.options.detailViewAlign)){var o=u.filter(".detail"),a=o.innerWidth()-o.find(".fht-cell").width();o.find(".fht-cell").width(r.innerWidth()-a)}else{var s=n-Rl.getDetailViewIndexOffset(e.options),l=e.$header_.find(Rl.sprintf('th[data-field="%s"]',c[s]));l.length>1&&(l=t(u[r[0].cellIndex]));var h=l.innerWidth()-l.find(".fht-cell").width();l.find(".fht-cell").width(r.innerWidth()-h)}})),this.horizontalScroll(),this.trigger("post-header")}}},{key:"initFooter",value:function(){if(this.options.showFooter&&!this.options.cardView){var t=this.getData(),e=[],n="";Rl.hasDetailViewIcon(this.options)&&(n=Rl.h("th",{class:"detail"},[Rl.h("div",{class:"th-inner"}),Rl.h("div",{class:"fht-cell"})])),n&&"right"!==this.options.detailViewAlign&&e.push(n);var i,o=r(this.columns);try{for(o.s();!(i=o.n()).done;){var a=i.value,l=this.footerData&&this.footerData.length>0;if(a.visible&&(!l||a.field in this.footerData[0])){if(this.options.cardView&&!a.cardVisible)return;var u=Rl.calculateObjectValue(null,a.footerStyle||this.options.footerStyle,[a]),h=u&&u.css||{},f=l&&this.footerData[0]["_".concat(a.field,"_colspan")]||0,d=l&&this.footerData[0][a.field]||"";d=Rl.calculateObjectValue(a,a.footerFormatter,[t,d],d),e.push(Rl.h("th",{class:[a.class,u&&u.classes],style:s({"text-align":a.falign?a.falign:a.align,"vertical-align":a.valign},h),colspan:f||void 0},[Rl.h("div",{class:"th-inner"},c(Rl.htmlToNodes(d))),Rl.h("div",{class:"fht-cell"})]))}}}catch(t){o.e(t)}finally{o.f()}n&&"right"===this.options.detailViewAlign&&e.push(n),this.options.height||this.$tableFooter.length||(this.$el.append("<tfoot><tr></tr></tfoot>"),this.$tableFooter=this.$el.find("tfoot")),this.$tableFooter.find("tr").length||this.$tableFooter.html("<table><thead><tr></tr></thead></table>"),this.$tableFooter.find("tr").html(e),this.trigger("post-footer",this.$tableFooter)}}},{key:"fitFooter",value:function(){var e=this;if(this.$el.is(":hidden"))setTimeout((function(){return e.fitFooter()}),100);else{var n=this.$tableBody.get(0),i=this.hasScrollBar&&n.scrollHeight>n.clientHeight+this.$header.outerHeight()?Rl.getScrollBarWidth():0;this.$tableFooter.css("margin-right",i).find("table").css("width",this.$el.outerWidth()).attr("class",this.$el.attr("class"));var r=this.$tableFooter.find("th"),o=this.$body.find(">tr:first-child:not(.no-records-found)");for(r.find(".fht-cell").width("auto");o.length&&o.find('>td[colspan]:not([colspan="1"])').length;)o=o.next();var a=o.find("> *").length;o.find("> *").each((function(n,i){var o=t(i);if(Rl.hasDetailViewIcon(e.options)&&(0===n&&"left"===e.options.detailViewAlign||n===a-1&&"right"===e.options.detailViewAlign)){var s=r.filter(".detail"),l=s.innerWidth()-s.find(".fht-cell").width();s.find(".fht-cell").width(o.innerWidth()-l)}else{var c=r.eq(n),u=c.innerWidth()-c.find(".fht-cell").width();c.find(".fht-cell").width(o.innerWidth()-u)}})),this.horizontalScroll()}}},{key:"horizontalScroll",value:function(){var t=this;this.$tableBody.off("scroll").on("scroll",(function(){var e=t.$tableBody.scrollLeft();t.options.showHeader&&t.options.height&&t.$tableHeader.scrollLeft(e),t.options.showFooter&&!t.options.cardView&&t.$tableFooter.scrollLeft(e),t.trigger("scroll-body",t.$tableBody)}))}},{key:"getVisibleFields",value:function(){var t,e=[],n=r(this.header.fields);try{for(n.s();!(t=n.n()).done;){var i=t.value,o=this.columns[this.fieldsColumnsIndex[i]];o&&o.visible&&(!this.options.cardView||o.cardVisible)&&e.push(i)}}catch(t){n.e(t)}finally{n.f()}return e}},{key:"initHiddenRows",value:function(){this.hiddenRows=[]}},{key:"getOptions",value:function(){var t=Rl.extend({},this.options);return delete t.data,Rl.extend(!0,{},t)}},{key:"refreshOptions",value:function(t){Rl.compareObjects(this.options,t,!0)||(this.optionsColumnsChanged=!!t.columns,this.options=Rl.extend(this.options,t),this.trigger("refresh-options",this.options),this.destroy(),this.init())}},{key:"getData",value:function(t){var e=this,n=this.options.data;if(!(this.searchText||this.options.customSearch||void 0!==this.options.sortName||this.enableCustomSort)&&Rl.isEmptyObject(this.filterColumns)&&"function"!=typeof this.options.filterOptions.filterAlgorithm&&Rl.isEmptyObject(this.filterColumnsPartial)||t&&t.unfiltered||(n=this.data),t&&!t.includeHiddenRows){var i=this.getHiddenRows();n=n.filter((function(t){return-1===Rl.findIndex(i,t)}))}return t&&t.useCurrentPage&&(n=n.slice(this.pageFrom-1,this.pageTo)),t&&t.formatted?n.map((function(t){for(var n={},i=0,r=Object.entries(t);i<r.length;i++){var o=l(r[i],2),a=o[0],s=o[1],c=e.columns[e.fieldsColumnsIndex[a]];c&&(n[a]=Rl.calculateObjectValue(c,e.header.formatters[c.fieldIndex],[s,t,t.index,c.field],s))}return n})):n}},{key:"getFooterData",value:function(){var t;return null!==(t=this.footerData)&&void 0!==t?t:[]}},{key:"getSelections",value:function(){var t=this;return(this.options.maintainMetaData?this.options.data:this.data).filter((function(e){return!0===e[t.header.stateField]}))}},{key:"load",value:function(t){var e,n=t;this.options.pagination&&"server"===this.options.sidePagination&&(this.options.totalRows=n[this.options.totalField],this.options.totalNotFiltered=n[this.options.totalNotFilteredField],this.footerData=n[this.options.footerField]?[n[this.options.footerField]]:void 0),e=this.options.fixedScroll||n.fixedScroll,n=Array.isArray(n)?n:n[this.options.dataField],this.initData(n),this.initSearch(),this.initPagination(),this.initBody(e)}},{key:"append",value:function(t){this.initData(t,"append"),this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0)}},{key:"prepend",value:function(t){this.initData(t,"prepend"),this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0)}},{key:"remove",value:function(t){for(var e=0,n=this.options.data.length-1;n>=0;n--){var i=this.options.data[n],r=Rl.getItemField(i,t.field,this.options.escape,i.escape);void 0===r&&"$index"!==t.field||(!i.hasOwnProperty(t.field)&&"$index"===t.field&&t.values.includes(n)||t.values.includes(r))&&(e++,this.options.data.splice(n,1))}e&&("server"===this.options.sidePagination&&(this.options.totalRows-=e,this.data=c(this.options.data)),this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0))}},{key:"removeAll",value:function(){this.options.data.length>0&&(this.data.splice(0,this.data.length),this.options.data.splice(0,this.options.data.length),this.initSearch(),this.initPagination(),this.initBody(!0))}},{key:"insertRow",value:function(t){if(t.hasOwnProperty("index")&&t.hasOwnProperty("row")){var e=this.data[t.index],n=this.options.data.indexOf(e);-1!==n?(this.data.splice(t.index,0,t.row),this.options.data.splice(n,0,t.row),this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0)):this.append([t.row])}}},{key:"updateRow",value:function(t){var e,n=r(Array.isArray(t)?t:[t]);try{for(n.s();!(e=n.n()).done;){var i=e.value;if(i.hasOwnProperty("index")&&i.hasOwnProperty("row")){var o=this.data[i.index],a=this.options.data.indexOf(o);i.hasOwnProperty("replace")&&i.replace?(this.data[i.index]=i.row,this.options.data[a]=i.row):(Rl.extend(this.data[i.index],i.row),Rl.extend(this.options.data[a],i.row))}}}catch(t){n.e(t)}finally{n.f()}this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0)}},{key:"getRowByUniqueId",value:function(t){var e,n,i=this.options.uniqueId,r=t,o=null;for(e=this.options.data.length-1;e>=0;e--){n=this.options.data[e];var a=Rl.getItemField(n,i,this.options.escape,n.escape);if(void 0!==a&&("string"==typeof a?r=t.toString():"number"==typeof a&&(Number(a)===a&&a%1==0?r=parseInt(t,10):a===Number(a)&&0!==a&&(r=parseFloat(t))),a===r)){o=n;break}}return o}},{key:"updateByUniqueId",value:function(t){var e,n=null,i=r(Array.isArray(t)?t:[t]);try{for(i.s();!(e=i.n()).done;){var o=e.value;if(o.hasOwnProperty("id")&&o.hasOwnProperty("row")){var a=this.options.data.indexOf(this.getRowByUniqueId(o.id));-1!==a&&(o.hasOwnProperty("replace")&&o.replace?this.options.data[a]=o.row:Rl.extend(this.options.data[a],o.row),n=o.id)}}}catch(t){i.e(t)}finally{i.f()}this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0,n)}},{key:"removeByUniqueId",value:function(t){var e=this.options.data.length,n=this.getRowByUniqueId(t);n&&this.options.data.splice(this.options.data.indexOf(n),1),e!==this.options.data.length&&("server"===this.options.sidePagination&&(this.options.totalRows-=1,this.data=c(this.options.data)),this.initSearch(),this.initPagination(),this.initBody(!0))}},{key:"_updateCellOnly",value:function(e,n){if(-1!==n){var i=this.initRow(this.data[n],n),r=this.getVisibleFields().indexOf(e);-1!==r&&(r+=Rl.getDetailViewIndexOffset(this.options),this.$body.find(">tr[data-index=".concat(n,"]")).find(">td:eq(".concat(r,")")).replaceWith(t(i).find(">td:eq(".concat(r,")"))),this.initBodyEvent(),this.initFooter(),this.resetView(),this.updateSelected())}}},{key:"updateCell",value:function(t){if(t.hasOwnProperty("index")&&t.hasOwnProperty("field")&&t.hasOwnProperty("value")){var e=this.data[t.index],n=this.options.data.indexOf(e);this.data[t.index][t.field]=t.value,this.options.data[n][t.field]=t.value,!1!==t.reinit?(this.initSort(),this.initBody(!0)):this._updateCellOnly(t.field,t.index)}}},{key:"updateCellByUniqueId",value:function(t){var e=this;(Array.isArray(t)?t:[t]).forEach((function(t){var n=t.id,i=t.field,r=t.value,o=e.getRowByUniqueId(n),a=e.data.indexOf(o),s=e.options.data.indexOf(o);o&&-1!==a&&(e.data[a][i]=r,e.options.data[s][i]=r)})),!1!==t.reinit?(this.initSort(),this.initBody(!0)):this._updateCellOnly(t.field,this.data.indexOf(this.getRowByUniqueId(t.id)))}},{key:"showRow",value:function(t){this._toggleRow(t,!0)}},{key:"hideRow",value:function(t){this._toggleRow(t,!1)}},{key:"_toggleRow",value:function(t,e){var n;if(t.hasOwnProperty("index")?n=this.getData()[t.index]:t.hasOwnProperty("uniqueId")&&(n=this.getRowByUniqueId(t.uniqueId)),n){var i=Rl.findIndex(this.hiddenRows,n);e||-1!==i?e&&i>-1&&this.hiddenRows.splice(i,1):this.hiddenRows.push(n),this.initBody(!0),this.initPagination()}}},{key:"getHiddenRows",value:function(t){if(t)return this.initHiddenRows(),this.initBody(!0),void this.initPagination();var e,n=[],i=r(this.getData());try{for(i.s();!(e=i.n()).done;){var o=e.value;this.hiddenRows.includes(o)&&n.push(o)}}catch(t){i.e(t)}finally{i.f()}return this.hiddenRows=n,n}},{key:"showColumn",value:function(t){var e=this;(Array.isArray(t)?t:[t]).forEach((function(t){e._toggleColumn(e.fieldsColumnsIndex[t],!0,!0)}))}},{key:"hideColumn",value:function(t){var e=this;(Array.isArray(t)?t:[t]).forEach((function(t){e._toggleColumn(e.fieldsColumnsIndex[t],!1,!0)}))}},{key:"_toggleColumn",value:function(t,e,n){if(void 0!==t&&this.columns[t].visible!==e&&(this.columns[t].visible=e,this.initHeader(),this.initSearch(),this.initPagination(),this.initBody(),this.options.showColumns)){var i=this.$toolbar.find('.keep-open input:not(".toggle-all")').prop("disabled",!1);n&&i.filter(Rl.sprintf('[value="%s"]',t)).prop("checked",e),i.filter(":checked").length<=this.options.minimumCountColumns&&i.filter(":checked").prop("disabled",!0)}}},{key:"getVisibleColumns",value:function(){var t=this;return this.columns.filter((function(e){return e.visible&&!t.isSelectionColumn(e)}))}},{key:"getHiddenColumns",value:function(){return this.columns.filter((function(t){return!t.visible}))}},{key:"isSelectionColumn",value:function(t){return t.radio||t.checkbox}},{key:"showAllColumns",value:function(){this._toggleAllColumns(!0)}},{key:"hideAllColumns",value:function(){this._toggleAllColumns(!1)}},{key:"_toggleAllColumns",value:function(e){var n,i=this,o=r(this.columns.slice().reverse());try{for(o.s();!(n=o.n()).done;){var a=n.value;if(a.switchable){if(!e&&this.options.showColumns&&this.getVisibleColumns().filter((function(t){return t.switchable})).length===this.options.minimumCountColumns)continue;a.visible=e}}}catch(t){o.e(t)}finally{o.f()}if(this.initHeader(),this.initSearch(),this.initPagination(),this.initBody(),this.options.showColumns){var s=this.$toolbar.find('.keep-open input[type="checkbox"]:not(".toggle-all")').prop("disabled",!1);e?s.prop("checked",e):s.get().reverse().forEach((function(n){s.filter(":checked").length>i.options.minimumCountColumns&&t(n).prop("checked",e)})),s.filter(":checked").length<=this.options.minimumCountColumns&&s.filter(":checked").prop("disabled",!0)}}},{key:"mergeCells",value:function(t){var e,n,i=t.index,r=this.getVisibleFields().indexOf(t.field),o=+t.rowspan||1,a=+t.colspan||1,s=this.$body.find(">tr[data-index]");r+=Rl.getDetailViewIndexOffset(this.options);var l=s.eq(i).find(">td").eq(r);if(!(i<0||r<0||i>=this.data.length)){for(e=i;e<i+o;e++)for(n=r;n<r+a;n++)s.eq(e).find(">td").eq(n).hide();l.attr("rowspan",o).attr("colspan",a).show()}}},{key:"checkAll",value:function(){this._toggleCheckAll(!0)}},{key:"uncheckAll",value:function(){this._toggleCheckAll(!1)}},{key:"_toggleCheckAll",value:function(t){var e=this.getSelections();this.$selectAll.add(this.$selectAll_).prop("checked",t),this.$selectItem.filter(":enabled").prop("checked",t),this.updateRows(),this.updateSelected();var n=this.getSelections();t?this.trigger("check-all",n,e):this.trigger("uncheck-all",n,e)}},{key:"checkInvert",value:function(){var e=this.$selectItem.filter(":enabled"),n=e.filter(":checked");e.each((function(e,n){t(n).prop("checked",!t(n).prop("checked"))})),this.updateRows(),this.updateSelected(),this.trigger("uncheck-some",n),n=this.getSelections(),this.trigger("check-some",n)}},{key:"check",value:function(t){this._toggleCheck(!0,t)}},{key:"uncheck",value:function(t){this._toggleCheck(!1,t)}},{key:"_toggleCheck",value:function(t,e){var n=this.$selectItem.filter('[data-index="'.concat(e,'"]')),i=this.data[e];if(n.is(":radio")||this.options.singleSelect||this.options.multipleSelectRow&&!this.multipleSelectRowCtrlKey&&!this.multipleSelectRowShiftKey){var o,a=r(this.options.data);try{for(a.s();!(o=a.n()).done;){o.value[this.header.stateField]=!1}}catch(t){a.e(t)}finally{a.f()}this.$selectItem.filter(":checked").not(n).prop("checked",!1)}if(i[this.header.stateField]=t,this.options.multipleSelectRow){if(this.multipleSelectRowShiftKey&&this.multipleSelectRowLastSelectedIndex>=0)for(var s=l(this.multipleSelectRowLastSelectedIndex<e?[this.multipleSelectRowLastSelectedIndex,e]:[e,this.multipleSelectRowLastSelectedIndex],2),c=s[0],u=s[1],h=c+1;h<u;h++)this.data[h][this.header.stateField]=!0,this.$selectItem.filter('[data-index="'.concat(h,'"]')).prop("checked",!0);this.multipleSelectRowCtrlKey=!1,this.multipleSelectRowShiftKey=!1,this.multipleSelectRowLastSelectedIndex=t?e:-1}n.prop("checked",t),this.updateSelected(),this.trigger(t?"check":"uncheck",this.data[e],n)}},{key:"checkBy",value:function(t){this._toggleCheckBy(!0,t)}},{key:"uncheckBy",value:function(t){this._toggleCheckBy(!1,t)}},{key:"_toggleCheckBy",value:function(t,e){var n=this;if(e.hasOwnProperty("field")&&e.hasOwnProperty("values")){var i=[];this.data.forEach((function(r,o){if(!r.hasOwnProperty(e.field))return!1;if(e.values.includes(r[e.field])){var a=n.$selectItem.filter(":enabled").filter(Rl.sprintf('[data-index="%s"]',o)),s=!!e.hasOwnProperty("onlyCurrentPage")&&e.onlyCurrentPage;if(!(a=t?a.not(":checked"):a.filter(":checked")).length&&s)return;a.prop("checked",t),r[n.header.stateField]=t,i.push(r),n.trigger(t?"check":"uncheck",r,a)}})),this.updateSelected(),this.trigger(t?"check-some":"uncheck-some",i)}}},{key:"refresh",value:function(t){t&&t.url&&(this.options.url=t.url),t&&t.pageNumber&&(this.options.pageNumber=t.pageNumber),t&&t.pageSize&&(this.options.pageSize=t.pageSize),t&&t.query&&(this.options.url=Rl.addQueryToUrl(this.options.url,t.query)),this.trigger("refresh",this.initServer(t&&t.silent))}},{key:"destroy",value:function(){clearTimeout(this.timeoutId_),this.$el.insertBefore(this.$container),t(this.options.toolbar).insertBefore(this.$el),this.$container.next().remove(),this.$container.remove(),this.$el.html(this.$el_.html()).css("margin-top","0").attr("class",this.$el_.attr("class")||"");var e=Rl.getEventName("resize.bootstrap-table",this.$el.attr("id"));t(window).off(e)}},{key:"resetView",value:function(t){var e=0;if(t&&t.height&&(this.options.height=t.height),this.$tableContainer.toggleClass("has-card-view",this.options.cardView),this.options.height){var n=this.$tableBody.get(0);this.hasScrollBar=n.scrollWidth>n.clientWidth}if(!this.options.cardView&&this.options.showHeader&&this.options.height?(this.$tableHeader.show(),this.resetHeader(),e+=this.$header.outerHeight(!0)+1):(this.$tableHeader.hide(),this.trigger("post-header")),!this.options.cardView&&this.options.showFooter&&(this.$tableFooter.show(),this.fitFooter(),this.options.height&&(e+=this.$tableFooter.outerHeight(!0))),this.$container.hasClass("fullscreen"))this.$tableContainer.css("height",""),this.$tableContainer.css("width","");else if(this.options.height){this.$tableBorder&&(this.$tableBorder.css("width",""),this.$tableBorder.css("height",""));var i=this.$toolbar.outerHeight(!0),r=this.$pagination.outerHeight(!0),o=this.options.height-i-r,a=this.$tableBody.find(">table"),s=a.outerHeight();if(this.$tableContainer.css("height","".concat(o,"px")),this.$tableBorder&&a.is(":visible")){var l=o-s-2;this.hasScrollBar&&(l-=Rl.getScrollBarWidth()),this.$tableBorder.css("width","".concat(a.outerWidth(),"px")),this.$tableBorder.css("height","".concat(l,"px"))}}this.options.cardView?(this.$el.css("margin-top","0"),this.$tableContainer.css("padding-bottom","0"),this.$tableFooter.hide()):(this.getCaret(),this.$tableContainer.css("padding-bottom","".concat(e,"px"))),this.trigger("reset-view")}},{key:"showLoading",value:function(){this.$tableLoading.toggleClass("open",!0);var t=this.options.loadingFontSize;"auto"===this.options.loadingFontSize&&(t=.04*this.$tableLoading.width(),t=Math.max(12,t),t=Math.min(32,t),t="".concat(t,"px")),this.$tableLoading.find(".loading-text").css("font-size",t)}},{key:"hideLoading",value:function(){this.$tableLoading.toggleClass("open",!1)}},{key:"togglePagination",value:function(){this.options.pagination=!this.options.pagination;var t=this.options.showButtonIcons?this.options.pagination?this.options.icons.paginationSwitchDown:this.options.icons.paginationSwitchUp:"",e=this.options.showButtonText?this.options.pagination?this.options.formatPaginationSwitchUp():this.options.formatPaginationSwitchDown():"";this.$toolbar.find('button[name="paginationSwitch"]').html("".concat(Rl.sprintf(this.constants.html.icon,this.options.iconsPrefix,t)," ").concat(e)),this.updatePagination(),this.trigger("toggle-pagination",this.options.pagination)}},{key:"toggleFullscreen",value:function(){this.$el.closest(".bootstrap-table").toggleClass("fullscreen"),this.resetView()}},{key:"toggleView",value:function(){this.options.cardView=!this.options.cardView,this.initHeader();var t=this.options.showButtonIcons?this.options.cardView?this.options.icons.toggleOn:this.options.icons.toggleOff:"",e=this.options.cardView?this.options.formatToggleOff():this.options.formatToggleOn();this.$toolbar.find('button[name="toggle"]').html("".concat(Rl.sprintf(this.constants.html.icon,this.options.iconsPrefix,t)," ").concat(this.options.showButtonText?e:"")).attr("aria-label",e).attr(this.options.buttonsAttributeTitle,e),this.initBody(),this.trigger("toggle",this.options.cardView)}},{key:"resetSearch",value:function(t){var e=Rl.getSearchInput(this),n=t||"";e.val(n),this.searchText=n,this.onSearch({currentTarget:e},!1)}},{key:"filterBy",value:function(t,e){this.filterOptions=Rl.isEmptyObject(e)?this.options.filterOptions:Rl.extend({},this.options.filterOptions,e),this.filterColumns=Rl.isEmptyObject(t)?{}:t,this.options.pageNumber=1,this.initSearch(),this.updatePagination()}},{key:"scrollTo",value:function(e){var n={unit:"px",value:0};"object"===h(e)?n=Object.assign(n,e):"string"==typeof e&&"bottom"===e?n.value=this.$tableBody[0].scrollHeight:"string"!=typeof e&&"number"!=typeof e||(n.value=e);var i=n.value;"rows"===n.unit&&(i=0,this.$body.find("> tr:lt(".concat(n.value,")")).each((function(e,n){i+=t(n).outerHeight(!0)}))),this.$tableBody.scrollTop(i)}},{key:"getScrollPosition",value:function(){return this.$tableBody.scrollTop()}},{key:"selectPage",value:function(t){t>0&&t<=this.options.totalPages&&(this.options.pageNumber=t,this.updatePagination())}},{key:"prevPage",value:function(){this.options.pageNumber>1&&(this.options.pageNumber--,this.updatePagination())}},{key:"nextPage",value:function(){this.options.pageNumber<this.options.totalPages&&(this.options.pageNumber++,this.updatePagination())}},{key:"toggleDetailView",value:function(t,e){this.$body.find(Rl.sprintf('> tr[data-index="%s"]',t)).next().is("tr.detail-view")?this.collapseRow(t):this.expandRow(t,e),this.resetView()}},{key:"expandRow",value:function(t,e){var n=this.data[t],i=this.$body.find(Rl.sprintf('> tr[data-index="%s"][data-has-detail-view]',t));if(this.options.detailViewIcon&&i.find("a.detail-icon").html(Rl.sprintf(this.constants.html.icon,this.options.iconsPrefix,this.options.icons.detailClose)),!i.next().is("tr.detail-view")){i.after(Rl.sprintf('<tr class="detail-view"><td colspan="%s"></td></tr>',i.children("td").length));var r=i.next().find("td"),o=e||this.options.detailFormatter,a=Rl.calculateObjectValue(this.options,o,[t,n,r],"");1===r.length&&r.append(a),this.trigger("expand-row",t,n,r)}}},{key:"expandRowByUniqueId",value:function(t){var e=this.getRowByUniqueId(t);e&&this.expandRow(this.data.indexOf(e))}},{key:"collapseRow",value:function(t){var e=this.data[t],n=this.$body.find(Rl.sprintf('> tr[data-index="%s"][data-has-detail-view]',t));n.next().is("tr.detail-view")&&(this.options.detailViewIcon&&n.find("a.detail-icon").html(Rl.sprintf(this.constants.html.icon,this.options.iconsPrefix,this.options.icons.detailOpen)),this.trigger("collapse-row",t,e,n.next()),n.next().remove())}},{key:"collapseRowByUniqueId",value:function(t){var e=this.getRowByUniqueId(t);e&&this.collapseRow(this.data.indexOf(e))}},{key:"expandAllRows",value:function(){for(var e=this.$body.find("> tr[data-index][data-has-detail-view]"),n=0;n<e.length;n++)this.expandRow(t(e[n]).data("index"))}},{key:"collapseAllRows",value:function(){for(var e=this.$body.find("> tr[data-index][data-has-detail-view]"),n=0;n<e.length;n++)this.collapseRow(t(e[n]).data("index"))}},{key:"updateColumnTitle",value:function(e){e.hasOwnProperty("field")&&e.hasOwnProperty("title")&&(this.columns[this.fieldsColumnsIndex[e.field]].title=this.options.escape&&this.options.escapeTitle?Rl.escapeHTML(e.title):e.title,this.columns[this.fieldsColumnsIndex[e.field]].visible&&(this.$header.find("th[data-field]").each((function(n,i){if(t(i).data("field")===e.field)return t(t(i).find(".th-inner")[0]).html(e.title),!1})),this.resetView()))}},{key:"updateFormatText",value:function(t,e){/^format/.test(t)&&this.options[t]&&("string"==typeof e?this.options[t]=function(){return e}:"function"==typeof e&&(this.options[t]=e),this.initToolbar(),this.initPagination(),this.initBody())}}])}();return _l.VERSION=Dl.VERSION,_l.DEFAULTS=Dl.DEFAULTS,_l.LOCALES=Dl.LOCALES,_l.COLUMN_DEFAULTS=Dl.COLUMN_DEFAULTS,_l.METHODS=Dl.METHODS,_l.EVENTS=Dl.EVENTS,t.BootstrapTable=_l,t.fn.bootstrapTable=function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];var o;return this.each((function(n,r){var a=t(r).data("bootstrap.table");if("string"==typeof e){var s;if(!Dl.METHODS.includes(e))throw new Error("Unknown method: ".concat(e));if(!a)return;return o=(s=a)[e].apply(s,i),void("destroy"===e&&t(r).removeData("bootstrap.table"))}if(a)console.warn("You cannot initialize the table more than once!");else{var l=Rl.extend(!0,{},_l.DEFAULTS,t(r).data(),"object"===h(e)&&e);a=new t.BootstrapTable(r,l),t(r).data("bootstrap.table",a),a.init()}})),void 0===o?this:o},t.fn.bootstrapTable.Constructor=_l,t.fn.bootstrapTable.theme=Dl.THEME,t.fn.bootstrapTable.VERSION=Dl.VERSION,t.fn.bootstrapTable.icons=Dl.ICONS,t.fn.bootstrapTable.defaults=_l.DEFAULTS,t.fn.bootstrapTable.columnDefaults=_l.COLUMN_DEFAULTS,t.fn.bootstrapTable.events=_l.EVENTS,t.fn.bootstrapTable.locales=_l.LOCALES,t.fn.bootstrapTable.methods=_l.METHODS,t.fn.bootstrapTable.utils=Rl,t((function(){t('[data-toggle="table"]').bootstrapTable()})),_l}));

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"jquery":168}],4:[function(require,module,exports){
'use strict';
// For more information about browser field, check out the browser field at https://github.com/substack/browserify-handbook#browser-field.

var styleElementsInsertedAtTop = [];

var insertStyleElement = function(styleElement, options) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];

    options = options || {};
    options.insertAt = options.insertAt || 'bottom';

    if (options.insertAt === 'top') {
        if (!lastStyleElementInsertedAtTop) {
            head.insertBefore(styleElement, head.firstChild);
        } else if (lastStyleElementInsertedAtTop.nextSibling) {
            head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
        } else {
            head.appendChild(styleElement);
        }
        styleElementsInsertedAtTop.push(styleElement);
    } else if (options.insertAt === 'bottom') {
        head.appendChild(styleElement);
    } else {
        throw new Error('Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.');
    }
};

module.exports = {
    // Create a <link> tag with optional data attributes
    createLink: function(href, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var link = document.createElement('link');

        link.href = href;
        link.rel = 'stylesheet';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            link.setAttribute('data-' + key, value);
        }

        head.appendChild(link);
    },
    // Create a <style> tag with optional data attributes
    createStyle: function(cssText, attributes, extraOptions) {
        extraOptions = extraOptions || {};

        var style = document.createElement('style');
        style.type = 'text/css';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            style.setAttribute('data-' + key, value);
        }

        if (style.sheet) { // for jsdom and IE9+
            style.innerHTML = cssText;
            style.sheet.cssText = cssText;
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
        } else if (style.styleSheet) { // for IE8 and below
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
            style.styleSheet.cssText = cssText;
        } else { // for Chrome, Firefox, and Safari
            style.appendChild(document.createTextNode(cssText));
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
        }
    }
};

},{}],5:[function(require,module,exports){
'use strict';
var isCallable = require('../internals/is-callable');
var tryToString = require('../internals/try-to-string');

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};

},{"../internals/is-callable":71,"../internals/try-to-string":134}],6:[function(require,module,exports){
'use strict';
var isConstructor = require('../internals/is-constructor');
var tryToString = require('../internals/try-to-string');

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a constructor');
};

},{"../internals/is-constructor":72,"../internals/try-to-string":134}],7:[function(require,module,exports){
'use strict';
var isPossiblePrototype = require('../internals/is-possible-prototype');

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};

},{"../internals/is-possible-prototype":76}],8:[function(require,module,exports){
'use strict';
var wellKnownSymbol = require('../internals/well-known-symbol');
var create = require('../internals/object-create');
var defineProperty = require('../internals/object-define-property').f;

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

},{"../internals/object-create":90,"../internals/object-define-property":92,"../internals/well-known-symbol":142}],9:[function(require,module,exports){
'use strict';
var isPrototypeOf = require('../internals/object-is-prototype-of');

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};

},{"../internals/object-is-prototype-of":98}],10:[function(require,module,exports){
'use strict';
var isObject = require('../internals/is-object');

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};

},{"../internals/is-object":75}],11:[function(require,module,exports){
'use strict';
var $forEach = require('../internals/array-iteration').forEach;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

},{"../internals/array-iteration":13,"../internals/array-method-is-strict":15}],12:[function(require,module,exports){
'use strict';
var toIndexedObject = require('../internals/to-indexed-object');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var lengthOfArrayLike = require('../internals/length-of-array-like');

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

},{"../internals/length-of-array-like":85,"../internals/to-absolute-index":125,"../internals/to-indexed-object":126}],13:[function(require,module,exports){
'use strict';
var bind = require('../internals/function-bind-context');
var uncurryThis = require('../internals/function-uncurry-this');
var IndexedObject = require('../internals/indexed-object');
var toObject = require('../internals/to-object');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var arraySpeciesCreate = require('../internals/array-species-create');

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};

},{"../internals/array-species-create":18,"../internals/function-bind-context":48,"../internals/function-uncurry-this":54,"../internals/indexed-object":66,"../internals/length-of-array-like":85,"../internals/to-object":129}],14:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');
var wellKnownSymbol = require('../internals/well-known-symbol');
var V8_VERSION = require('../internals/environment-v8-version');

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

},{"../internals/environment-v8-version":42,"../internals/fails":45,"../internals/well-known-symbol":142}],15:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

},{"../internals/fails":45}],16:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');

module.exports = uncurryThis([].slice);

},{"../internals/function-uncurry-this":54}],17:[function(require,module,exports){
'use strict';
var isArray = require('../internals/is-array');
var isConstructor = require('../internals/is-constructor');
var isObject = require('../internals/is-object');
var wellKnownSymbol = require('../internals/well-known-symbol');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};

},{"../internals/is-array":70,"../internals/is-constructor":72,"../internals/is-object":75,"../internals/well-known-symbol":142}],18:[function(require,module,exports){
'use strict';
var arraySpeciesConstructor = require('../internals/array-species-constructor');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

},{"../internals/array-species-constructor":17}],19:[function(require,module,exports){
'use strict';
var wellKnownSymbol = require('../internals/well-known-symbol');

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

},{"../internals/well-known-symbol":142}],20:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};

},{"../internals/function-uncurry-this":54}],21:[function(require,module,exports){
'use strict';
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var isCallable = require('../internals/is-callable');
var classofRaw = require('../internals/classof-raw');
var wellKnownSymbol = require('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

},{"../internals/classof-raw":20,"../internals/is-callable":71,"../internals/to-string-tag-support":132,"../internals/well-known-symbol":142}],22:[function(require,module,exports){
'use strict';
var hasOwn = require('../internals/has-own-property');
var ownKeys = require('../internals/own-keys');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var definePropertyModule = require('../internals/object-define-property');

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

},{"../internals/has-own-property":61,"../internals/object-define-property":92,"../internals/object-get-own-property-descriptor":93,"../internals/own-keys":105}],23:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

},{"../internals/fails":45}],24:[function(require,module,exports){
'use strict';
// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};

},{}],25:[function(require,module,exports){
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"../internals/create-property-descriptor":26,"../internals/descriptors":31,"../internals/object-define-property":92}],26:[function(require,module,exports){
'use strict';
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],27:[function(require,module,exports){
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};

},{"../internals/create-property-descriptor":26,"../internals/descriptors":31,"../internals/object-define-property":92}],28:[function(require,module,exports){
'use strict';
var makeBuiltIn = require('../internals/make-built-in');
var defineProperty = require('../internals/object-define-property');

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};

},{"../internals/make-built-in":86,"../internals/object-define-property":92}],29:[function(require,module,exports){
'use strict';
var isCallable = require('../internals/is-callable');
var definePropertyModule = require('../internals/object-define-property');
var makeBuiltIn = require('../internals/make-built-in');
var defineGlobalProperty = require('../internals/define-global-property');

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

},{"../internals/define-global-property":30,"../internals/is-callable":71,"../internals/make-built-in":86,"../internals/object-define-property":92}],30:[function(require,module,exports){
'use strict';
var globalThis = require('../internals/global-this');

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis[key] = value;
  } return value;
};

},{"../internals/global-this":60}],31:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});

},{"../internals/fails":45}],32:[function(require,module,exports){
'use strict';
var globalThis = require('../internals/global-this');
var isObject = require('../internals/is-object');

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

},{"../internals/global-this":60,"../internals/is-object":75}],33:[function(require,module,exports){
'use strict';
var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};

},{}],34:[function(require,module,exports){
'use strict';
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

},{}],35:[function(require,module,exports){
'use strict';
// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = require('../internals/document-create-element');

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;

},{"../internals/document-create-element":32}],36:[function(require,module,exports){
'use strict';
// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

},{}],37:[function(require,module,exports){
'use strict';
var userAgent = require('../internals/environment-user-agent');

module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != 'undefined';

},{"../internals/environment-user-agent":41}],38:[function(require,module,exports){
'use strict';
var userAgent = require('../internals/environment-user-agent');

// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"../internals/environment-user-agent":41}],39:[function(require,module,exports){
'use strict';
var ENVIRONMENT = require('../internals/environment');

module.exports = ENVIRONMENT === 'NODE';

},{"../internals/environment":43}],40:[function(require,module,exports){
'use strict';
var userAgent = require('../internals/environment-user-agent');

module.exports = /web0s(?!.*chrome)/i.test(userAgent);

},{"../internals/environment-user-agent":41}],41:[function(require,module,exports){
'use strict';
var globalThis = require('../internals/global-this');

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';

},{"../internals/global-this":60}],42:[function(require,module,exports){
'use strict';
var globalThis = require('../internals/global-this');
var userAgent = require('../internals/environment-user-agent');

var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;

},{"../internals/environment-user-agent":41,"../internals/global-this":60}],43:[function(require,module,exports){
'use strict';
/* global Bun, Deno -- detection */
var globalThis = require('../internals/global-this');
var userAgent = require('../internals/environment-user-agent');
var classof = require('../internals/classof-raw');

var userAgentStartsWith = function (string) {
  return userAgent.slice(0, string.length) === string;
};

module.exports = (function () {
  if (userAgentStartsWith('Bun/')) return 'BUN';
  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
  if (userAgentStartsWith('Deno/')) return 'DENO';
  if (userAgentStartsWith('Node.js/')) return 'NODE';
  if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
  if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
  if (classof(globalThis.process) === 'process') return 'NODE';
  if (globalThis.window && globalThis.document) return 'BROWSER';
  return 'REST';
})();

},{"../internals/classof-raw":20,"../internals/environment-user-agent":41,"../internals/global-this":60}],44:[function(require,module,exports){
'use strict';
var globalThis = require('../internals/global-this');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var defineBuiltIn = require('../internals/define-built-in');
var defineGlobalProperty = require('../internals/define-global-property');
var copyConstructorProperties = require('../internals/copy-constructor-properties');
var isForced = require('../internals/is-forced');

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis;
  } else if (STATIC) {
    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};

},{"../internals/copy-constructor-properties":22,"../internals/create-non-enumerable-property":25,"../internals/define-built-in":29,"../internals/define-global-property":30,"../internals/global-this":60,"../internals/is-forced":73,"../internals/object-get-own-property-descriptor":93}],45:[function(require,module,exports){
'use strict';
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

},{}],46:[function(require,module,exports){
'use strict';
var isArray = require('../internals/is-array');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var doesNotExceedSafeInteger = require('../internals/does-not-exceed-safe-integer');
var bind = require('../internals/function-bind-context');

// `FlattenIntoArray` abstract operation
// https://tc39.es/ecma262/#sec-flattenintoarray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg) : false;
  var element, elementLen;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        elementLen = lengthOfArrayLike(element);
        targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        doesNotExceedSafeInteger(targetIndex + 1);
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;

},{"../internals/does-not-exceed-safe-integer":33,"../internals/function-bind-context":48,"../internals/is-array":70,"../internals/length-of-array-like":85}],47:[function(require,module,exports){
'use strict';
var NATIVE_BIND = require('../internals/function-bind-native');

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});

},{"../internals/function-bind-native":49}],48:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this-clause');
var aCallable = require('../internals/a-callable');
var NATIVE_BIND = require('../internals/function-bind-native');

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"../internals/a-callable":5,"../internals/function-bind-native":49,"../internals/function-uncurry-this-clause":53}],49:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

},{"../internals/fails":45}],50:[function(require,module,exports){
'use strict';
var NATIVE_BIND = require('../internals/function-bind-native');

var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};

},{"../internals/function-bind-native":49}],51:[function(require,module,exports){
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var hasOwn = require('../internals/has-own-property');

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

},{"../internals/descriptors":31,"../internals/has-own-property":61}],52:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var aCallable = require('../internals/a-callable');

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

},{"../internals/a-callable":5,"../internals/function-uncurry-this":54}],53:[function(require,module,exports){
'use strict';
var classofRaw = require('../internals/classof-raw');
var uncurryThis = require('../internals/function-uncurry-this');

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};

},{"../internals/classof-raw":20,"../internals/function-uncurry-this":54}],54:[function(require,module,exports){
'use strict';
var NATIVE_BIND = require('../internals/function-bind-native');

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};

},{"../internals/function-bind-native":49}],55:[function(require,module,exports){
'use strict';
var globalThis = require('../internals/global-this');
var isCallable = require('../internals/is-callable');

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};

},{"../internals/global-this":60,"../internals/is-callable":71}],56:[function(require,module,exports){
'use strict';
var classof = require('../internals/classof');
var getMethod = require('../internals/get-method');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var Iterators = require('../internals/iterators');
var wellKnownSymbol = require('../internals/well-known-symbol');

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};

},{"../internals/classof":21,"../internals/get-method":59,"../internals/is-null-or-undefined":74,"../internals/iterators":84,"../internals/well-known-symbol":142}],57:[function(require,module,exports){
'use strict';
var call = require('../internals/function-call');
var aCallable = require('../internals/a-callable');
var anObject = require('../internals/an-object');
var tryToString = require('../internals/try-to-string');
var getIteratorMethod = require('../internals/get-iterator-method');

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};

},{"../internals/a-callable":5,"../internals/an-object":10,"../internals/function-call":50,"../internals/get-iterator-method":56,"../internals/try-to-string":134}],58:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var isArray = require('../internals/is-array');
var isCallable = require('../internals/is-callable');
var classof = require('../internals/classof-raw');
var toString = require('../internals/to-string');

var push = uncurryThis([].push);

module.exports = function (replacer) {
  if (isCallable(replacer)) return replacer;
  if (!isArray(replacer)) return;
  var rawLength = replacer.length;
  var keys = [];
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    if (typeof element == 'string') push(keys, element);
    else if (typeof element == 'number' || classof(element) === 'Number' || classof(element) === 'String') push(keys, toString(element));
  }
  var keysLength = keys.length;
  var root = true;
  return function (key, value) {
    if (root) {
      root = false;
      return value;
    }
    if (isArray(this)) return value;
    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
  };
};

},{"../internals/classof-raw":20,"../internals/function-uncurry-this":54,"../internals/is-array":70,"../internals/is-callable":71,"../internals/to-string":133}],59:[function(require,module,exports){
'use strict';
var aCallable = require('../internals/a-callable');
var isNullOrUndefined = require('../internals/is-null-or-undefined');

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"../internals/a-callable":5,"../internals/is-null-or-undefined":74}],60:[function(require,module,exports){
(function (global){(function (){
'use strict';
var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],61:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var toObject = require('../internals/to-object');

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};

},{"../internals/function-uncurry-this":54,"../internals/to-object":129}],62:[function(require,module,exports){
'use strict';
module.exports = {};

},{}],63:[function(require,module,exports){
'use strict';
module.exports = function (a, b) {
  try {
    // eslint-disable-next-line no-console -- safe
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  } catch (error) { /* empty */ }
};

},{}],64:[function(require,module,exports){
'use strict';
var getBuiltIn = require('../internals/get-built-in');

module.exports = getBuiltIn('document', 'documentElement');

},{"../internals/get-built-in":55}],65:[function(require,module,exports){
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var createElement = require('../internals/document-create-element');

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});

},{"../internals/descriptors":31,"../internals/document-create-element":32,"../internals/fails":45}],66:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var fails = require('../internals/fails');
var classof = require('../internals/classof-raw');

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;

},{"../internals/classof-raw":20,"../internals/fails":45,"../internals/function-uncurry-this":54}],67:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var isCallable = require('../internals/is-callable');
var store = require('../internals/shared-store');

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;

},{"../internals/function-uncurry-this":54,"../internals/is-callable":71,"../internals/shared-store":118}],68:[function(require,module,exports){
'use strict';
var NATIVE_WEAK_MAP = require('../internals/weak-map-basic-detection');
var globalThis = require('../internals/global-this');
var isObject = require('../internals/is-object');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var hasOwn = require('../internals/has-own-property');
var shared = require('../internals/shared-store');
var sharedKey = require('../internals/shared-key');
var hiddenKeys = require('../internals/hidden-keys');

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

},{"../internals/create-non-enumerable-property":25,"../internals/global-this":60,"../internals/has-own-property":61,"../internals/hidden-keys":62,"../internals/is-object":75,"../internals/shared-key":117,"../internals/shared-store":118,"../internals/weak-map-basic-detection":139}],69:[function(require,module,exports){
'use strict';
var wellKnownSymbol = require('../internals/well-known-symbol');
var Iterators = require('../internals/iterators');

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

},{"../internals/iterators":84,"../internals/well-known-symbol":142}],70:[function(require,module,exports){
'use strict';
var classof = require('../internals/classof-raw');

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};

},{"../internals/classof-raw":20}],71:[function(require,module,exports){
'use strict';
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};

},{}],72:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var fails = require('../internals/fails');
var isCallable = require('../internals/is-callable');
var classof = require('../internals/classof');
var getBuiltIn = require('../internals/get-built-in');
var inspectSource = require('../internals/inspect-source');

var noop = function () { /* empty */ };
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

},{"../internals/classof":21,"../internals/fails":45,"../internals/function-uncurry-this":54,"../internals/get-built-in":55,"../internals/inspect-source":67,"../internals/is-callable":71}],73:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');
var isCallable = require('../internals/is-callable');

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;

},{"../internals/fails":45,"../internals/is-callable":71}],74:[function(require,module,exports){
'use strict';
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};

},{}],75:[function(require,module,exports){
'use strict';
var isCallable = require('../internals/is-callable');

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};

},{"../internals/is-callable":71}],76:[function(require,module,exports){
'use strict';
var isObject = require('../internals/is-object');

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};

},{"../internals/is-object":75}],77:[function(require,module,exports){
'use strict';
module.exports = false;

},{}],78:[function(require,module,exports){
'use strict';
var getBuiltIn = require('../internals/get-built-in');
var isCallable = require('../internals/is-callable');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"../internals/get-built-in":55,"../internals/is-callable":71,"../internals/object-is-prototype-of":98,"../internals/use-symbol-as-uid":136}],79:[function(require,module,exports){
'use strict';
var bind = require('../internals/function-bind-context');
var call = require('../internals/function-call');
var anObject = require('../internals/an-object');
var tryToString = require('../internals/try-to-string');
var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var getIterator = require('../internals/get-iterator');
var getIteratorMethod = require('../internals/get-iterator-method');
var iteratorClose = require('../internals/iterator-close');

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal');
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};

},{"../internals/an-object":10,"../internals/function-bind-context":48,"../internals/function-call":50,"../internals/get-iterator":57,"../internals/get-iterator-method":56,"../internals/is-array-iterator-method":69,"../internals/iterator-close":80,"../internals/length-of-array-like":85,"../internals/object-is-prototype-of":98,"../internals/try-to-string":134}],80:[function(require,module,exports){
'use strict';
var call = require('../internals/function-call');
var anObject = require('../internals/an-object');
var getMethod = require('../internals/get-method');

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};

},{"../internals/an-object":10,"../internals/function-call":50,"../internals/get-method":59}],81:[function(require,module,exports){
'use strict';
var IteratorPrototype = require('../internals/iterators-core').IteratorPrototype;
var create = require('../internals/object-create');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var setToStringTag = require('../internals/set-to-string-tag');
var Iterators = require('../internals/iterators');

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};

},{"../internals/create-property-descriptor":26,"../internals/iterators":84,"../internals/iterators-core":83,"../internals/object-create":90,"../internals/set-to-string-tag":116}],82:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var IS_PURE = require('../internals/is-pure');
var FunctionName = require('../internals/function-name');
var isCallable = require('../internals/is-callable');
var createIteratorConstructor = require('../internals/iterator-create-constructor');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var setToStringTag = require('../internals/set-to-string-tag');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var defineBuiltIn = require('../internals/define-built-in');
var wellKnownSymbol = require('../internals/well-known-symbol');
var Iterators = require('../internals/iterators');
var IteratorsCore = require('../internals/iterators-core');

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    }

    return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};

},{"../internals/create-non-enumerable-property":25,"../internals/define-built-in":29,"../internals/export":44,"../internals/function-call":50,"../internals/function-name":51,"../internals/is-callable":71,"../internals/is-pure":77,"../internals/iterator-create-constructor":81,"../internals/iterators":84,"../internals/iterators-core":83,"../internals/object-get-prototype-of":97,"../internals/object-set-prototype-of":102,"../internals/set-to-string-tag":116,"../internals/well-known-symbol":142}],83:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');
var isCallable = require('../internals/is-callable');
var isObject = require('../internals/is-object');
var create = require('../internals/object-create');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var defineBuiltIn = require('../internals/define-built-in');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

},{"../internals/define-built-in":29,"../internals/fails":45,"../internals/is-callable":71,"../internals/is-object":75,"../internals/is-pure":77,"../internals/object-create":90,"../internals/object-get-prototype-of":97,"../internals/well-known-symbol":142}],84:[function(require,module,exports){
arguments[4][62][0].apply(exports,arguments)
},{"dup":62}],85:[function(require,module,exports){
'use strict';
var toLength = require('../internals/to-length');

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};

},{"../internals/to-length":128}],86:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var fails = require('../internals/fails');
var isCallable = require('../internals/is-callable');
var hasOwn = require('../internals/has-own-property');
var DESCRIPTORS = require('../internals/descriptors');
var CONFIGURABLE_FUNCTION_NAME = require('../internals/function-name').CONFIGURABLE;
var inspectSource = require('../internals/inspect-source');
var InternalStateModule = require('../internals/internal-state');

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');

},{"../internals/descriptors":31,"../internals/fails":45,"../internals/function-name":51,"../internals/function-uncurry-this":54,"../internals/has-own-property":61,"../internals/inspect-source":67,"../internals/internal-state":68,"../internals/is-callable":71}],87:[function(require,module,exports){
'use strict';
var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};

},{}],88:[function(require,module,exports){
'use strict';
var globalThis = require('../internals/global-this');
var safeGetBuiltIn = require('../internals/safe-get-built-in');
var bind = require('../internals/function-bind-context');
var macrotask = require('../internals/task').set;
var Queue = require('../internals/queue');
var IS_IOS = require('../internals/environment-is-ios');
var IS_IOS_PEBBLE = require('../internals/environment-is-ios-pebble');
var IS_WEBOS_WEBKIT = require('../internals/environment-is-webos-webkit');
var IS_NODE = require('../internals/environment-is-node');

var MutationObserver = globalThis.MutationObserver || globalThis.WebKitMutationObserver;
var document = globalThis.document;
var process = globalThis.process;
var Promise = globalThis.Promise;
var microtask = safeGetBuiltIn('queueMicrotask');
var notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!microtask) {
  var queue = new Queue();

  var flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify();
      throw error;
    }
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    macrotask = bind(macrotask, globalThis);
    notify = function () {
      macrotask(flush);
    };
  }

  microtask = function (fn) {
    if (!queue.head) notify();
    queue.add(fn);
  };
}

module.exports = microtask;

},{"../internals/environment-is-ios":38,"../internals/environment-is-ios-pebble":37,"../internals/environment-is-node":39,"../internals/environment-is-webos-webkit":40,"../internals/function-bind-context":48,"../internals/global-this":60,"../internals/queue":112,"../internals/safe-get-built-in":114,"../internals/task":124}],89:[function(require,module,exports){
'use strict';
var aCallable = require('../internals/a-callable');

var $TypeError = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw new $TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"../internals/a-callable":5}],90:[function(require,module,exports){
'use strict';
/* global ActiveXObject -- old IE, WSH */
var anObject = require('../internals/an-object');
var definePropertiesModule = require('../internals/object-define-properties');
var enumBugKeys = require('../internals/enum-bug-keys');
var hiddenKeys = require('../internals/hidden-keys');
var html = require('../internals/html');
var documentCreateElement = require('../internals/document-create-element');
var sharedKey = require('../internals/shared-key');

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

},{"../internals/an-object":10,"../internals/document-create-element":32,"../internals/enum-bug-keys":36,"../internals/hidden-keys":62,"../internals/html":64,"../internals/object-define-properties":91,"../internals/shared-key":117}],91:[function(require,module,exports){
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var V8_PROTOTYPE_DEFINE_BUG = require('../internals/v8-prototype-define-bug');
var definePropertyModule = require('../internals/object-define-property');
var anObject = require('../internals/an-object');
var toIndexedObject = require('../internals/to-indexed-object');
var objectKeys = require('../internals/object-keys');

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};

},{"../internals/an-object":10,"../internals/descriptors":31,"../internals/object-define-property":92,"../internals/object-keys":100,"../internals/to-indexed-object":126,"../internals/v8-prototype-define-bug":137}],92:[function(require,module,exports){
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
var V8_PROTOTYPE_DEFINE_BUG = require('../internals/v8-prototype-define-bug');
var anObject = require('../internals/an-object');
var toPropertyKey = require('../internals/to-property-key');

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"../internals/an-object":10,"../internals/descriptors":31,"../internals/ie8-dom-define":65,"../internals/to-property-key":131,"../internals/v8-prototype-define-bug":137}],93:[function(require,module,exports){
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var call = require('../internals/function-call');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var toIndexedObject = require('../internals/to-indexed-object');
var toPropertyKey = require('../internals/to-property-key');
var hasOwn = require('../internals/has-own-property');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"../internals/create-property-descriptor":26,"../internals/descriptors":31,"../internals/function-call":50,"../internals/has-own-property":61,"../internals/ie8-dom-define":65,"../internals/object-property-is-enumerable":101,"../internals/to-indexed-object":126,"../internals/to-property-key":131}],94:[function(require,module,exports){
'use strict';
/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = require('../internals/classof-raw');
var toIndexedObject = require('../internals/to-indexed-object');
var $getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
var arraySlice = require('../internals/array-slice');

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) === 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};

},{"../internals/array-slice":16,"../internals/classof-raw":20,"../internals/object-get-own-property-names":95,"../internals/to-indexed-object":126}],95:[function(require,module,exports){
'use strict';
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

},{"../internals/enum-bug-keys":36,"../internals/object-keys-internal":99}],96:[function(require,module,exports){
'use strict';
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],97:[function(require,module,exports){
'use strict';
var hasOwn = require('../internals/has-own-property');
var isCallable = require('../internals/is-callable');
var toObject = require('../internals/to-object');
var sharedKey = require('../internals/shared-key');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};

},{"../internals/correct-prototype-getter":23,"../internals/has-own-property":61,"../internals/is-callable":71,"../internals/shared-key":117,"../internals/to-object":129}],98:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');

module.exports = uncurryThis({}.isPrototypeOf);

},{"../internals/function-uncurry-this":54}],99:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var hasOwn = require('../internals/has-own-property');
var toIndexedObject = require('../internals/to-indexed-object');
var indexOf = require('../internals/array-includes').indexOf;
var hiddenKeys = require('../internals/hidden-keys');

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};

},{"../internals/array-includes":12,"../internals/function-uncurry-this":54,"../internals/has-own-property":61,"../internals/hidden-keys":62,"../internals/to-indexed-object":126}],100:[function(require,module,exports){
'use strict';
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

},{"../internals/enum-bug-keys":36,"../internals/object-keys-internal":99}],101:[function(require,module,exports){
'use strict';
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],102:[function(require,module,exports){
'use strict';
/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = require('../internals/function-uncurry-this-accessor');
var isObject = require('../internals/is-object');
var requireObjectCoercible = require('../internals/require-object-coercible');
var aPossiblePrototype = require('../internals/a-possible-prototype');

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

},{"../internals/a-possible-prototype":7,"../internals/function-uncurry-this-accessor":52,"../internals/is-object":75,"../internals/require-object-coercible":113}],103:[function(require,module,exports){
'use strict';
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var classof = require('../internals/classof');

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

},{"../internals/classof":21,"../internals/to-string-tag-support":132}],104:[function(require,module,exports){
'use strict';
var call = require('../internals/function-call');
var isCallable = require('../internals/is-callable');
var isObject = require('../internals/is-object');

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};

},{"../internals/function-call":50,"../internals/is-callable":71,"../internals/is-object":75}],105:[function(require,module,exports){
'use strict';
var getBuiltIn = require('../internals/get-built-in');
var uncurryThis = require('../internals/function-uncurry-this');
var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var anObject = require('../internals/an-object');

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"../internals/an-object":10,"../internals/function-uncurry-this":54,"../internals/get-built-in":55,"../internals/object-get-own-property-names":95,"../internals/object-get-own-property-symbols":96}],106:[function(require,module,exports){
'use strict';
var globalThis = require('../internals/global-this');

module.exports = globalThis;

},{"../internals/global-this":60}],107:[function(require,module,exports){
'use strict';
module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

},{}],108:[function(require,module,exports){
'use strict';
var globalThis = require('../internals/global-this');
var NativePromiseConstructor = require('../internals/promise-native-constructor');
var isCallable = require('../internals/is-callable');
var isForced = require('../internals/is-forced');
var inspectSource = require('../internals/inspect-source');
var wellKnownSymbol = require('../internals/well-known-symbol');
var ENVIRONMENT = require('../internals/environment');
var IS_PURE = require('../internals/is-pure');
var V8_VERSION = require('../internals/environment-v8-version');

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(globalThis.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === 'BROWSER' || ENVIRONMENT === 'DENO') && !NATIVE_PROMISE_REJECTION_EVENT;
});

module.exports = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  SUBCLASSING: SUBCLASSING
};

},{"../internals/environment":43,"../internals/environment-v8-version":42,"../internals/global-this":60,"../internals/inspect-source":67,"../internals/is-callable":71,"../internals/is-forced":73,"../internals/is-pure":77,"../internals/promise-native-constructor":109,"../internals/well-known-symbol":142}],109:[function(require,module,exports){
'use strict';
var globalThis = require('../internals/global-this');

module.exports = globalThis.Promise;

},{"../internals/global-this":60}],110:[function(require,module,exports){
'use strict';
var anObject = require('../internals/an-object');
var isObject = require('../internals/is-object');
var newPromiseCapability = require('../internals/new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"../internals/an-object":10,"../internals/is-object":75,"../internals/new-promise-capability":89}],111:[function(require,module,exports){
'use strict';
var NativePromiseConstructor = require('../internals/promise-native-constructor');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var FORCED_PROMISE_CONSTRUCTOR = require('../internals/promise-constructor-detection').CONSTRUCTOR;

module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });
});

},{"../internals/check-correctness-of-iteration":19,"../internals/promise-constructor-detection":108,"../internals/promise-native-constructor":109}],112:[function(require,module,exports){
'use strict';
var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    var tail = this.tail;
    if (tail) tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      var next = this.head = entry.next;
      if (next === null) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;

},{}],113:[function(require,module,exports){
'use strict';
var isNullOrUndefined = require('../internals/is-null-or-undefined');

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};

},{"../internals/is-null-or-undefined":74}],114:[function(require,module,exports){
'use strict';
var globalThis = require('../internals/global-this');
var DESCRIPTORS = require('../internals/descriptors');

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
module.exports = function (name) {
  if (!DESCRIPTORS) return globalThis[name];
  var descriptor = getOwnPropertyDescriptor(globalThis, name);
  return descriptor && descriptor.value;
};

},{"../internals/descriptors":31,"../internals/global-this":60}],115:[function(require,module,exports){
'use strict';
var getBuiltIn = require('../internals/get-built-in');
var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
var wellKnownSymbol = require('../internals/well-known-symbol');
var DESCRIPTORS = require('../internals/descriptors');

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineBuiltInAccessor(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

},{"../internals/define-built-in-accessor":28,"../internals/descriptors":31,"../internals/get-built-in":55,"../internals/well-known-symbol":142}],116:[function(require,module,exports){
'use strict';
var defineProperty = require('../internals/object-define-property').f;
var hasOwn = require('../internals/has-own-property');
var wellKnownSymbol = require('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};

},{"../internals/has-own-property":61,"../internals/object-define-property":92,"../internals/well-known-symbol":142}],117:[function(require,module,exports){
'use strict';
var shared = require('../internals/shared');
var uid = require('../internals/uid');

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

},{"../internals/shared":119,"../internals/uid":135}],118:[function(require,module,exports){
'use strict';
var IS_PURE = require('../internals/is-pure');
var globalThis = require('../internals/global-this');
var defineGlobalProperty = require('../internals/define-global-property');

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.45.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.45.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

},{"../internals/define-global-property":30,"../internals/global-this":60,"../internals/is-pure":77}],119:[function(require,module,exports){
'use strict';
var store = require('../internals/shared-store');

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};

},{"../internals/shared-store":118}],120:[function(require,module,exports){
'use strict';
var anObject = require('../internals/an-object');
var aConstructor = require('../internals/a-constructor');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var wellKnownSymbol = require('../internals/well-known-symbol');

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};

},{"../internals/a-constructor":6,"../internals/an-object":10,"../internals/is-null-or-undefined":74,"../internals/well-known-symbol":142}],121:[function(require,module,exports){
'use strict';
/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = require('../internals/environment-v8-version');
var fails = require('../internals/fails');
var globalThis = require('../internals/global-this');

var $String = globalThis.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"../internals/environment-v8-version":42,"../internals/fails":45,"../internals/global-this":60}],122:[function(require,module,exports){
'use strict';
var call = require('../internals/function-call');
var getBuiltIn = require('../internals/get-built-in');
var wellKnownSymbol = require('../internals/well-known-symbol');
var defineBuiltIn = require('../internals/define-built-in');

module.exports = function () {
  var Symbol = getBuiltIn('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call(valueOf, this);
    }, { arity: 1 });
  }
};

},{"../internals/define-built-in":29,"../internals/function-call":50,"../internals/get-built-in":55,"../internals/well-known-symbol":142}],123:[function(require,module,exports){
'use strict';
var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection');

/* eslint-disable es/no-symbol -- safe */
module.exports = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;

},{"../internals/symbol-constructor-detection":121}],124:[function(require,module,exports){
'use strict';
var globalThis = require('../internals/global-this');
var apply = require('../internals/function-apply');
var bind = require('../internals/function-bind-context');
var isCallable = require('../internals/is-callable');
var hasOwn = require('../internals/has-own-property');
var fails = require('../internals/fails');
var html = require('../internals/html');
var arraySlice = require('../internals/array-slice');
var createElement = require('../internals/document-create-element');
var validateArgumentsLength = require('../internals/validate-arguments-length');
var IS_IOS = require('../internals/environment-is-ios');
var IS_NODE = require('../internals/environment-is-node');

var set = globalThis.setImmediate;
var clear = globalThis.clearImmediate;
var process = globalThis.process;
var Dispatch = globalThis.Dispatch;
var Function = globalThis.Function;
var MessageChannel = globalThis.MessageChannel;
var String = globalThis.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = globalThis.location;
});

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var eventListener = function (event) {
  run(event.data);
};

var globalPostMessageDefer = function (id) {
  // old engines have not location.origin
  globalThis.postMessage(String(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    globalThis.addEventListener &&
    isCallable(globalThis.postMessage) &&
    !globalThis.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    globalThis.addEventListener('message', eventListener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};

},{"../internals/array-slice":16,"../internals/document-create-element":32,"../internals/environment-is-ios":38,"../internals/environment-is-node":39,"../internals/fails":45,"../internals/function-apply":47,"../internals/function-bind-context":48,"../internals/global-this":60,"../internals/has-own-property":61,"../internals/html":64,"../internals/is-callable":71,"../internals/validate-arguments-length":138}],125:[function(require,module,exports){
'use strict';
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"../internals/to-integer-or-infinity":127}],126:[function(require,module,exports){
'use strict';
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require('../internals/indexed-object');
var requireObjectCoercible = require('../internals/require-object-coercible');

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

},{"../internals/indexed-object":66,"../internals/require-object-coercible":113}],127:[function(require,module,exports){
'use strict';
var trunc = require('../internals/math-trunc');

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

},{"../internals/math-trunc":87}],128:[function(require,module,exports){
'use strict';
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer-or-infinity":127}],129:[function(require,module,exports){
'use strict';
var requireObjectCoercible = require('../internals/require-object-coercible');

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};

},{"../internals/require-object-coercible":113}],130:[function(require,module,exports){
'use strict';
var call = require('../internals/function-call');
var isObject = require('../internals/is-object');
var isSymbol = require('../internals/is-symbol');
var getMethod = require('../internals/get-method');
var ordinaryToPrimitive = require('../internals/ordinary-to-primitive');
var wellKnownSymbol = require('../internals/well-known-symbol');

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

},{"../internals/function-call":50,"../internals/get-method":59,"../internals/is-object":75,"../internals/is-symbol":78,"../internals/ordinary-to-primitive":104,"../internals/well-known-symbol":142}],131:[function(require,module,exports){
'use strict';
var toPrimitive = require('../internals/to-primitive');
var isSymbol = require('../internals/is-symbol');

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

},{"../internals/is-symbol":78,"../internals/to-primitive":130}],132:[function(require,module,exports){
'use strict';
var wellKnownSymbol = require('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';

},{"../internals/well-known-symbol":142}],133:[function(require,module,exports){
'use strict';
var classof = require('../internals/classof');

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

},{"../internals/classof":21}],134:[function(require,module,exports){
'use strict';
var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};

},{}],135:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.1.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

},{"../internals/function-uncurry-this":54}],136:[function(require,module,exports){
'use strict';
/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection');

module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';

},{"../internals/symbol-constructor-detection":121}],137:[function(require,module,exports){
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

},{"../internals/descriptors":31,"../internals/fails":45}],138:[function(require,module,exports){
'use strict';
var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw new $TypeError('Not enough arguments');
  return passed;
};

},{}],139:[function(require,module,exports){
'use strict';
var globalThis = require('../internals/global-this');
var isCallable = require('../internals/is-callable');

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"../internals/global-this":60,"../internals/is-callable":71}],140:[function(require,module,exports){
'use strict';
var path = require('../internals/path');
var hasOwn = require('../internals/has-own-property');
var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped');
var defineProperty = require('../internals/object-define-property').f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};

},{"../internals/has-own-property":61,"../internals/object-define-property":92,"../internals/path":106,"../internals/well-known-symbol-wrapped":141}],141:[function(require,module,exports){
'use strict';
var wellKnownSymbol = require('../internals/well-known-symbol');

exports.f = wellKnownSymbol;

},{"../internals/well-known-symbol":142}],142:[function(require,module,exports){
'use strict';
var globalThis = require('../internals/global-this');
var shared = require('../internals/shared');
var hasOwn = require('../internals/has-own-property');
var uid = require('../internals/uid');
var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');

var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

},{"../internals/global-this":60,"../internals/has-own-property":61,"../internals/shared":119,"../internals/symbol-constructor-detection":121,"../internals/uid":135,"../internals/use-symbol-as-uid":136}],143:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var fails = require('../internals/fails');
var isArray = require('../internals/is-array');
var isObject = require('../internals/is-object');
var toObject = require('../internals/to-object');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var doesNotExceedSafeInteger = require('../internals/does-not-exceed-safe-integer');
var createProperty = require('../internals/create-property');
var arraySpeciesCreate = require('../internals/array-species-create');
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var wellKnownSymbol = require('../internals/well-known-symbol');
var V8_VERSION = require('../internals/environment-v8-version');

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

},{"../internals/array-method-has-species-support":14,"../internals/array-species-create":18,"../internals/create-property":27,"../internals/does-not-exceed-safe-integer":33,"../internals/environment-v8-version":42,"../internals/export":44,"../internals/fails":45,"../internals/is-array":70,"../internals/is-object":75,"../internals/length-of-array-like":85,"../internals/to-object":129,"../internals/well-known-symbol":142}],144:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var $find = require('../internals/array-iteration').find;
var addToUnscopables = require('../internals/add-to-unscopables');

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-find -- testing
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);

},{"../internals/add-to-unscopables":8,"../internals/array-iteration":13,"../internals/export":44}],145:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var flattenIntoArray = require('../internals/flatten-into-array');
var toObject = require('../internals/to-object');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var arraySpeciesCreate = require('../internals/array-species-create');

// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
$({ target: 'Array', proto: true }, {
  flat: function flat(/* depthArg = 1 */) {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject(this);
    var sourceLen = lengthOfArrayLike(O);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity(depthArg));
    return A;
  }
});

},{"../internals/array-species-create":18,"../internals/export":44,"../internals/flatten-into-array":46,"../internals/length-of-array-like":85,"../internals/to-integer-or-infinity":127,"../internals/to-object":129}],146:[function(require,module,exports){
'use strict';
var toIndexedObject = require('../internals/to-indexed-object');
var addToUnscopables = require('../internals/add-to-unscopables');
var Iterators = require('../internals/iterators');
var InternalStateModule = require('../internals/internal-state');
var defineProperty = require('../internals/object-define-property').f;
var defineIterator = require('../internals/iterator-define');
var createIterResultObject = require('../internals/create-iter-result-object');
var IS_PURE = require('../internals/is-pure');
var DESCRIPTORS = require('../internals/descriptors');

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = null;
    return createIterResultObject(undefined, true);
  }
  switch (state.kind) {
    case 'keys': return createIterResultObject(index, false);
    case 'values': return createIterResultObject(target[index], false);
  } return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }

},{"../internals/add-to-unscopables":8,"../internals/create-iter-result-object":24,"../internals/descriptors":31,"../internals/internal-state":68,"../internals/is-pure":77,"../internals/iterator-define":82,"../internals/iterators":84,"../internals/object-define-property":92,"../internals/to-indexed-object":126}],147:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var $map = require('../internals/array-iteration').map;
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/array-iteration":13,"../internals/array-method-has-species-support":14,"../internals/export":44}],148:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var isArray = require('../internals/is-array');
var isConstructor = require('../internals/is-constructor');
var isObject = require('../internals/is-object');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var toIndexedObject = require('../internals/to-indexed-object');
var createProperty = require('../internals/create-property');
var wellKnownSymbol = require('../internals/well-known-symbol');
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var nativeSlice = require('../internals/array-slice');

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array || Constructor === undefined) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});

},{"../internals/array-method-has-species-support":14,"../internals/array-slice":16,"../internals/create-property":27,"../internals/export":44,"../internals/is-array":70,"../internals/is-constructor":72,"../internals/is-object":75,"../internals/length-of-array-like":85,"../internals/to-absolute-index":125,"../internals/to-indexed-object":126,"../internals/well-known-symbol":142}],149:[function(require,module,exports){
'use strict';
// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = require('../internals/add-to-unscopables');

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flat');

},{"../internals/add-to-unscopables":8}],150:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var apply = require('../internals/function-apply');
var call = require('../internals/function-call');
var uncurryThis = require('../internals/function-uncurry-this');
var fails = require('../internals/fails');
var isCallable = require('../internals/is-callable');
var isSymbol = require('../internals/is-symbol');
var arraySlice = require('../internals/array-slice');
var getReplacerFunction = require('../internals/get-json-replacer-function');
var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection');

var $String = String;
var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.1.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')('stringify detection');
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) !== '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) !== '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) !== '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = getReplacerFunction(replacer);
  if (!isCallable($replacer) && (it === undefined || isSymbol(it))) return; // IE8 returns string on undefined
  args[1] = function (key, value) {
    // some old implementations (like WebKit) could pass numbers as keys
    if (isCallable($replacer)) value = call($replacer, this, $String(key), value);
    if (!isSymbol(value)) return value;
  };
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}

},{"../internals/array-slice":16,"../internals/export":44,"../internals/fails":45,"../internals/function-apply":47,"../internals/function-call":50,"../internals/function-uncurry-this":54,"../internals/get-built-in":55,"../internals/get-json-replacer-function":58,"../internals/is-callable":71,"../internals/is-symbol":78,"../internals/symbol-constructor-detection":121}],151:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection');
var fails = require('../internals/fails');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var toObject = require('../internals/to-object');

// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED = !NATIVE_SYMBOL || fails(function () { getOwnPropertySymbolsModule.f(1); });

// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$({ target: 'Object', stat: true, forced: FORCED }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
  }
});

},{"../internals/export":44,"../internals/fails":45,"../internals/object-get-own-property-symbols":96,"../internals/symbol-constructor-detection":121,"../internals/to-object":129}],152:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var fails = require('../internals/fails');
var toObject = require('../internals/to-object');
var nativeGetPrototypeOf = require('../internals/object-get-prototype-of');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});


},{"../internals/correct-prototype-getter":23,"../internals/export":44,"../internals/fails":45,"../internals/object-get-prototype-of":97,"../internals/to-object":129}],153:[function(require,module,exports){
'use strict';
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var defineBuiltIn = require('../internals/define-built-in');
var toString = require('../internals/object-to-string');

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
}

},{"../internals/define-built-in":29,"../internals/object-to-string":103,"../internals/to-string-tag-support":132}],154:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var aCallable = require('../internals/a-callable');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var perform = require('../internals/perform');
var iterate = require('../internals/iterate');
var PROMISE_STATICS_INCORRECT_ITERATION = require('../internals/promise-statics-incorrect-iteration');

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

},{"../internals/a-callable":5,"../internals/export":44,"../internals/function-call":50,"../internals/iterate":79,"../internals/new-promise-capability":89,"../internals/perform":107,"../internals/promise-statics-incorrect-iteration":111}],155:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var FORCED_PROMISE_CONSTRUCTOR = require('../internals/promise-constructor-detection').CONSTRUCTOR;
var NativePromiseConstructor = require('../internals/promise-native-constructor');
var getBuiltIn = require('../internals/get-built-in');
var isCallable = require('../internals/is-callable');
var defineBuiltIn = require('../internals/define-built-in');

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}

},{"../internals/define-built-in":29,"../internals/export":44,"../internals/get-built-in":55,"../internals/is-callable":71,"../internals/is-pure":77,"../internals/promise-constructor-detection":108,"../internals/promise-native-constructor":109}],156:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var IS_NODE = require('../internals/environment-is-node');
var globalThis = require('../internals/global-this');
var path = require('../internals/path');
var call = require('../internals/function-call');
var defineBuiltIn = require('../internals/define-built-in');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var setToStringTag = require('../internals/set-to-string-tag');
var setSpecies = require('../internals/set-species');
var aCallable = require('../internals/a-callable');
var isCallable = require('../internals/is-callable');
var isObject = require('../internals/is-object');
var anInstance = require('../internals/an-instance');
var speciesConstructor = require('../internals/species-constructor');
var task = require('../internals/task').set;
var microtask = require('../internals/microtask');
var hostReportErrors = require('../internals/host-report-errors');
var perform = require('../internals/perform');
var Queue = require('../internals/queue');
var InternalStateModule = require('../internals/internal-state');
var NativePromiseConstructor = require('../internals/promise-native-constructor');
var PromiseConstructorDetection = require('../internals/promise-constructor-detection');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = globalThis.TypeError;
var document = globalThis.document;
var process = globalThis.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && globalThis.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state === FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(new TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    globalThis.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, globalThis, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, globalThis, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw new TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: null
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : undefined;
    if (state.state === PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

// `Promise` constructor
// https://tc39.es/ecma262/#sec-promise-executor
$({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  Promise: PromiseConstructor
});

PromiseWrapper = path.Promise;

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

},{"../internals/a-callable":5,"../internals/an-instance":9,"../internals/define-built-in":29,"../internals/environment-is-node":39,"../internals/export":44,"../internals/function-call":50,"../internals/global-this":60,"../internals/host-report-errors":63,"../internals/internal-state":68,"../internals/is-callable":71,"../internals/is-object":75,"../internals/is-pure":77,"../internals/microtask":88,"../internals/new-promise-capability":89,"../internals/object-set-prototype-of":102,"../internals/path":106,"../internals/perform":107,"../internals/promise-constructor-detection":108,"../internals/promise-native-constructor":109,"../internals/queue":112,"../internals/set-species":115,"../internals/set-to-string-tag":116,"../internals/species-constructor":120,"../internals/task":124}],157:[function(require,module,exports){
'use strict';
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require('../modules/es.promise.constructor');
require('../modules/es.promise.all');
require('../modules/es.promise.catch');
require('../modules/es.promise.race');
require('../modules/es.promise.reject');
require('../modules/es.promise.resolve');

},{"../modules/es.promise.all":154,"../modules/es.promise.catch":155,"../modules/es.promise.constructor":156,"../modules/es.promise.race":158,"../modules/es.promise.reject":159,"../modules/es.promise.resolve":160}],158:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var aCallable = require('../internals/a-callable');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var perform = require('../internals/perform');
var iterate = require('../internals/iterate');
var PROMISE_STATICS_INCORRECT_ITERATION = require('../internals/promise-statics-incorrect-iteration');

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

},{"../internals/a-callable":5,"../internals/export":44,"../internals/function-call":50,"../internals/iterate":79,"../internals/new-promise-capability":89,"../internals/perform":107,"../internals/promise-statics-incorrect-iteration":111}],159:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var FORCED_PROMISE_CONSTRUCTOR = require('../internals/promise-constructor-detection').CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    var capabilityReject = capability.reject;
    capabilityReject(r);
    return capability.promise;
  }
});

},{"../internals/export":44,"../internals/new-promise-capability":89,"../internals/promise-constructor-detection":108}],160:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var IS_PURE = require('../internals/is-pure');
var NativePromiseConstructor = require('../internals/promise-native-constructor');
var FORCED_PROMISE_CONSTRUCTOR = require('../internals/promise-constructor-detection').CONSTRUCTOR;
var promiseResolve = require('../internals/promise-resolve');

var PromiseConstructorWrapper = getBuiltIn('Promise');
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
  }
});

},{"../internals/export":44,"../internals/get-built-in":55,"../internals/is-pure":77,"../internals/promise-constructor-detection":108,"../internals/promise-native-constructor":109,"../internals/promise-resolve":110}],161:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var globalThis = require('../internals/global-this');
var call = require('../internals/function-call');
var uncurryThis = require('../internals/function-uncurry-this');
var IS_PURE = require('../internals/is-pure');
var DESCRIPTORS = require('../internals/descriptors');
var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection');
var fails = require('../internals/fails');
var hasOwn = require('../internals/has-own-property');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var anObject = require('../internals/an-object');
var toIndexedObject = require('../internals/to-indexed-object');
var toPropertyKey = require('../internals/to-property-key');
var $toString = require('../internals/to-string');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var nativeObjectCreate = require('../internals/object-create');
var objectKeys = require('../internals/object-keys');
var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
var getOwnPropertyNamesExternal = require('../internals/object-get-own-property-names-external');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var definePropertyModule = require('../internals/object-define-property');
var definePropertiesModule = require('../internals/object-define-properties');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var defineBuiltIn = require('../internals/define-built-in');
var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
var shared = require('../internals/shared');
var sharedKey = require('../internals/shared-key');
var hiddenKeys = require('../internals/hidden-keys');
var uid = require('../internals/uid');
var wellKnownSymbol = require('../internals/well-known-symbol');
var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped');
var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
var defineSymbolToPrimitive = require('../internals/symbol-define-to-primitive');
var setToStringTag = require('../internals/set-to-string-tag');
var InternalStateModule = require('../internals/internal-state');
var $forEach = require('../internals/array-iteration').forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = globalThis.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var RangeError = globalThis.RangeError;
var TypeError = globalThis.TypeError;
var QObject = globalThis.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var fallbackDefineProperty = function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
};

var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a !== 7;
}) ? fallbackDefineProperty : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, nativeObjectCreate(null)));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw new TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      var $this = this === undefined ? globalThis : this;
      if ($this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn($this, HIDDEN) && hasOwn($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
      var descriptor = createPropertyDescriptor(1, value);
      try {
        setSymbolDescriptor($this, tag, descriptor);
      } catch (error) {
        if (!(error instanceof RangeError)) throw error;
        fallbackDefineProperty($this, tag, descriptor);
      }
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  defineBuiltIn(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  defineBuiltIn($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://tc39.es/ecma262/#sec-symbol.prototype.description
    defineBuiltInAccessor(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;

},{"../internals/an-object":10,"../internals/array-iteration":13,"../internals/create-property-descriptor":26,"../internals/define-built-in":29,"../internals/define-built-in-accessor":28,"../internals/descriptors":31,"../internals/export":44,"../internals/fails":45,"../internals/function-call":50,"../internals/function-uncurry-this":54,"../internals/global-this":60,"../internals/has-own-property":61,"../internals/hidden-keys":62,"../internals/internal-state":68,"../internals/is-pure":77,"../internals/object-create":90,"../internals/object-define-properties":91,"../internals/object-define-property":92,"../internals/object-get-own-property-descriptor":93,"../internals/object-get-own-property-names":95,"../internals/object-get-own-property-names-external":94,"../internals/object-get-own-property-symbols":96,"../internals/object-is-prototype-of":98,"../internals/object-keys":100,"../internals/object-property-is-enumerable":101,"../internals/set-to-string-tag":116,"../internals/shared":119,"../internals/shared-key":117,"../internals/symbol-constructor-detection":121,"../internals/symbol-define-to-primitive":122,"../internals/to-indexed-object":126,"../internals/to-property-key":131,"../internals/to-string":133,"../internals/uid":135,"../internals/well-known-symbol":142,"../internals/well-known-symbol-define":140,"../internals/well-known-symbol-wrapped":141}],162:[function(require,module,exports){
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description
'use strict';
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var globalThis = require('../internals/global-this');
var uncurryThis = require('../internals/function-uncurry-this');
var hasOwn = require('../internals/has-own-property');
var isCallable = require('../internals/is-callable');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var toString = require('../internals/to-string');
var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
var copyConstructorProperties = require('../internals/copy-constructor-properties');

var NativeSymbol = globalThis.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      // eslint-disable-next-line sonarjs/inconsistent-function-call -- ok
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
  var thisSymbolValue = uncurryThis(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineBuiltInAccessor(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}

},{"../internals/copy-constructor-properties":22,"../internals/define-built-in-accessor":28,"../internals/descriptors":31,"../internals/export":44,"../internals/function-uncurry-this":54,"../internals/global-this":60,"../internals/has-own-property":61,"../internals/is-callable":71,"../internals/object-is-prototype-of":98,"../internals/to-string":133}],163:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var hasOwn = require('../internals/has-own-property');
var toString = require('../internals/to-string');
var shared = require('../internals/shared');
var NATIVE_SYMBOL_REGISTRY = require('../internals/symbol-registry-detection');

var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  'for': function (key) {
    var string = toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  }
});

},{"../internals/export":44,"../internals/get-built-in":55,"../internals/has-own-property":61,"../internals/shared":119,"../internals/symbol-registry-detection":123,"../internals/to-string":133}],164:[function(require,module,exports){
'use strict';
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require('../modules/es.symbol.constructor');
require('../modules/es.symbol.for');
require('../modules/es.symbol.key-for');
require('../modules/es.json.stringify');
require('../modules/es.object.get-own-property-symbols');

},{"../modules/es.json.stringify":150,"../modules/es.object.get-own-property-symbols":151,"../modules/es.symbol.constructor":161,"../modules/es.symbol.for":163,"../modules/es.symbol.key-for":165}],165:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var hasOwn = require('../internals/has-own-property');
var isSymbol = require('../internals/is-symbol');
var tryToString = require('../internals/try-to-string');
var shared = require('../internals/shared');
var NATIVE_SYMBOL_REGISTRY = require('../internals/symbol-registry-detection');

var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw new TypeError(tryToString(sym) + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});

},{"../internals/export":44,"../internals/has-own-property":61,"../internals/is-symbol":78,"../internals/shared":119,"../internals/symbol-registry-detection":123,"../internals/try-to-string":134}],166:[function(require,module,exports){
'use strict';
var globalThis = require('../internals/global-this');
var DOMIterables = require('../internals/dom-iterables');
var DOMTokenListPrototype = require('../internals/dom-token-list-prototype');
var forEach = require('../internals/array-for-each');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);

},{"../internals/array-for-each":11,"../internals/create-non-enumerable-property":25,"../internals/dom-iterables":34,"../internals/dom-token-list-prototype":35,"../internals/global-this":60}],167:[function(require,module,exports){
'use strict';
var globalThis = require('../internals/global-this');
var DOMIterables = require('../internals/dom-iterables');
var DOMTokenListPrototype = require('../internals/dom-token-list-prototype');
var ArrayIteratorMethods = require('../modules/es.array.iterator');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var setToStringTag = require('../internals/set-to-string-tag');
var wellKnownSymbol = require('../internals/well-known-symbol');

var ITERATOR = wellKnownSymbol('iterator');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    setToStringTag(CollectionPrototype, COLLECTION_NAME, true);
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

},{"../internals/create-non-enumerable-property":25,"../internals/dom-iterables":34,"../internals/dom-token-list-prototype":35,"../internals/global-this":60,"../internals/set-to-string-tag":116,"../internals/well-known-symbol":142,"../modules/es.array.iterator":146}],168:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket trac-14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var version = "3.7.1",

	rhtmlSuffix = /HTML$/i,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},


	// Retrieve the text value of an array of DOM nodes
	text: function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {

			// If no nodeType, this is expected to be an array
			while ( ( node = elem[ i++ ] ) ) {

				// Do not traverse comment nodes
				ret += jQuery.text( node );
			}
		}
		if ( nodeType === 1 || nodeType === 11 ) {
			return elem.textContent;
		}
		if ( nodeType === 9 ) {
			return elem.documentElement.textContent;
		}
		if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}

		// Do not include comment or processing instruction nodes

		return ret;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	isXMLDoc: function( elem ) {
		var namespace = elem && elem.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Assume HTML when documentElement doesn't yet exist, such as inside
		// document fragments.
		return !rhtmlSuffix.test( namespace || docElem && docElem.nodeName || "HTML" );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}


function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var pop = arr.pop;


var sort = arr.sort;


var splice = arr.splice;


var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);




// Note: an element does not contain itself
jQuery.contains = function( a, b ) {
	var bup = b && b.parentNode;

	return a === bup || !!( bup && bup.nodeType === 1 && (

		// Support: IE 9 - 11+
		// IE doesn't have `contains` on SVG.
		a.contains ?
			a.contains( bup ) :
			a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
	) );
};




// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

function fcssescape( ch, asCodePoint ) {
	if ( asCodePoint ) {

		// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
		if ( ch === "\0" ) {
			return "\uFFFD";
		}

		// Control characters and (dependent upon position) numbers get escaped as code points
		return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
	}

	// Other potentially-special ASCII characters get backslash-escaped
	return "\\" + ch;
}

jQuery.escapeSelector = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};




var preferredDoc = document,
	pushNative = push;

( function() {

var i,
	Expr,
	outermostContext,
	sortInput,
	hasDuplicate,
	push = pushNative,

	// Local document vars
	document,
	documentElement,
	documentIsHTML,
	rbuggyQSA,
	matches,

	// Instance-specific data
	expando = jQuery.expando,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" +
		"loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rleadingCombinator = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" +
		whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		ID: new RegExp( "^#(" + identifier + ")" ),
		CLASS: new RegExp( "^\\.(" + identifier + ")" ),
		TAG: new RegExp( "^(" + identifier + "|[*])" ),
		ATTR: new RegExp( "^" + attributes ),
		PSEUDO: new RegExp( "^" + pseudos ),
		CHILD: new RegExp(
			"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
				whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
				whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		bool: new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		needsContext: new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		if ( nonHex ) {

			// Strip the backslash prefix from a non-hex escape sequence
			return nonHex;
		}

		// Replace a hexadecimal escape sequence with the encoded Unicode code point
		// Support: IE <=11+
		// For values outside the Basic Multilingual Plane (BMP), manually construct a
		// surrogate pair
		return high < 0 ?
			String.fromCharCode( high + 0x10000 ) :
			String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes; see `setDocument`.
	// Support: IE 9 - 11+, Edge 12 - 18+
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE/Edge.
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && nodeName( elem, "fieldset" );
		},
		{ dir: "parentNode", next: "legend" }
	);

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android <=4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = {
		apply: function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		},
		call: function( target ) {
			pushNative.apply( target, slice.call( arguments, 1 ) );
		}
	};
}

function find( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE 9 only
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								push.call( results, elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE 9 only
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							find.contains( context, elem ) &&
							elem.id === m ) {

							push.call( results, elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && context.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( !nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rleadingCombinator.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when
					// strict-comparing two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( newContext != context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = jQuery.escapeSelector( nid );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrimCSS, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties
		// (see https://github.com/jquery/sizzle/issues/157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		return nodeName( elem, "input" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		return ( nodeName( elem, "input" ) || nodeName( elem, "button" ) ) &&
			elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11+
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
function setDocument( node ) {
	var subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	documentElement = document.documentElement;
	documentIsHTML = !jQuery.isXMLDoc( document );

	// Support: iOS 7 only, IE 9 - 11+
	// Older browsers didn't support unprefixed `matches`.
	matches = documentElement.matches ||
		documentElement.webkitMatchesSelector ||
		documentElement.msMatchesSelector;

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors
	// (see trac-13936).
	// Limit the fix to IE & Edge Legacy; despite Edge 15+ implementing `matches`,
	// all IE 9+ and Edge Legacy versions implement `msMatchesSelector` as well.
	if ( documentElement.msMatchesSelector &&

		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 9 - 11+, Edge 12 - 18+
		subWindow.addEventListener( "unload", unloadHandler );
	}

	// Support: IE <10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		documentElement.appendChild( el ).id = jQuery.expando;
		return !document.getElementsByName ||
			!document.getElementsByName( jQuery.expando ).length;
	} );

	// Support: IE 9 only
	// Check to see if it's possible to do matchesSelector
	// on a disconnected node.
	support.disconnectedMatch = assert( function( el ) {
		return matches.call( el, "*" );
	} );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// IE/Edge don't support the :scope pseudo-class.
	support.scope = assert( function() {
		return document.querySelectorAll( ":scope" );
	} );

	// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
	// Make sure the `:has()` argument is parsed unforgivingly.
	// We include `*` in the test to detect buggy implementations that are
	// _selectively_ forgiving (specifically when the list includes at least
	// one valid selector).
	// Note that we treat complete lack of support for `:has()` as if it were
	// spec-compliant support, which is fine because use of `:has()` in such
	// environments will fail in the qSA path and fall back to jQuery traversal
	// anyway.
	support.cssHas = assert( function() {
		try {
			document.querySelector( ":has(*,:jqfake)" );
			return false;
		} catch ( e ) {
			return true;
		}
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter.ID = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter.ID =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find.TAG = function( tag, context ) {
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			return context.getElementsByTagName( tag );

		// DocumentFragment nodes don't have gEBTN
		} else {
			return context.querySelectorAll( tag );
		}
	};

	// Class
	Expr.find.CLASS = function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	rbuggyQSA = [];

	// Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert( function( el ) {

		var input;

		documentElement.appendChild( el ).innerHTML =
			"<a id='" + expando + "' href='' disabled='disabled'></a>" +
			"<select id='" + expando + "-\r\\' disabled='disabled'>" +
			"<option selected=''></option></select>";

		// Support: iOS <=7 - 8 only
		// Boolean attributes and "value" are not treated correctly in some XML documents
		if ( !el.querySelectorAll( "[selected]" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
		}

		// Support: iOS <=7 - 8 only
		if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
			rbuggyQSA.push( "~=" );
		}

		// Support: iOS 8 only
		// https://bugs.webkit.org/show_bug.cgi?id=136851
		// In-page `selector#id sibling-combinator selector` fails
		if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
			rbuggyQSA.push( ".#.+[+~]" );
		}

		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		if ( !el.querySelectorAll( ":checked" ).length ) {
			rbuggyQSA.push( ":checked" );
		}

		// Support: Windows 8 Native Apps
		// The type and name attributes are restricted during .innerHTML assignment
		input = document.createElement( "input" );
		input.setAttribute( "type", "hidden" );
		el.appendChild( input ).setAttribute( "name", "D" );

		// Support: IE 9 - 11+
		// IE's :disabled selector does not pick up the children of disabled fieldsets
		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		documentElement.appendChild( el ).disabled = true;
		if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
			rbuggyQSA.push( ":enabled", ":disabled" );
		}

		// Support: IE 11+, Edge 15 - 18+
		// IE 11/Edge don't find elements on a `[name='']` query in some cases.
		// Adding a temporary attribute to the document before the selection works
		// around the issue.
		// Interestingly, IE 10 & older don't seem to have the issue.
		input = document.createElement( "input" );
		input.setAttribute( "name", "" );
		el.appendChild( input );
		if ( !el.querySelectorAll( "[name='']" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
				whitespace + "*(?:''|\"\")" );
		}
	} );

	if ( !support.cssHas ) {

		// Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Our regular `try-catch` mechanism fails to detect natively-unsupported
		// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
		// in browsers that parse the `:has()` argument as a forgiving selector list.
		// https://drafts.csswg.org/selectors/#relational now requires the argument
		// to be parsed unforgivingly, but browsers have not yet fully adjusted.
		rbuggyQSA.push( ":has" );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a === document || a.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b === document || b.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	};

	return document;
}

find.matches = function( expr, elements ) {
	return find( expr, null, null, elements );
};

find.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return find( expr, document, null, [ elem ] ).length > 0;
};

find.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return jQuery.contains( context, elem );
};


find.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (see trac-13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	if ( val !== undefined ) {
		return val;
	}

	return elem.getAttribute( name );
};

find.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
jQuery.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	//
	// Support: Android <=4.0+
	// Testing for detecting duplicates is unpredictable so instead assume we can't
	// depend on duplicate detection in all browsers without a stable sort.
	hasDuplicate = !support.sortStable;
	sortInput = !support.sortStable && slice.call( results, 0 );
	sort.call( results, sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			splice.call( results, duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

jQuery.fn.uniqueSort = function() {
	return this.pushStack( jQuery.uniqueSort( slice.apply( this ) ) );
};

Expr = jQuery.expr = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		ATTR: function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] || match[ 5 ] || "" )
				.replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		CHILD: function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					find.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" )
				);
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

			// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				find.error( match[ 0 ] );
			}

			return match;
		},

		PSEUDO: function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr.CHILD.test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		TAG: function( nodeNameSelector ) {
			var expectedNodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return nodeName( elem, expectedNodeName );
				};
		},

		CLASS: function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace + ")" + className +
					"(" + whitespace + "|$)" ) ) &&
				classCache( className, function( elem ) {
					return pattern.test(
						typeof elem.className === "string" && elem.className ||
							typeof elem.getAttribute !== "undefined" &&
								elem.getAttribute( "class" ) ||
							""
					);
				} );
		},

		ATTR: function( name, operator, check ) {
			return function( elem ) {
				var result = find.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				if ( operator === "=" ) {
					return result === check;
				}
				if ( operator === "!=" ) {
					return result !== check;
				}
				if ( operator === "^=" ) {
					return check && result.indexOf( check ) === 0;
				}
				if ( operator === "*=" ) {
					return check && result.indexOf( check ) > -1;
				}
				if ( operator === "$=" ) {
					return check && result.slice( -check.length ) === check;
				}
				if ( operator === "~=" ) {
					return ( " " + result.replace( rwhitespace, " " ) + " " )
						.indexOf( check ) > -1;
				}
				if ( operator === "|=" ) {
					return result === check || result.slice( 0, check.length + 1 ) === check + "-";
				}

				return false;
			};
		},

		CHILD: function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || ( parent[ expando ] = {} );
							cache = outerCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {
								outerCache = elem[ expando ] || ( elem[ expando ] = {} );
								cache = outerCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );
											outerCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		PSEUDO: function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// https://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					find.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as jQuery does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		not: markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrimCSS, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element
					// (see https://github.com/jquery/sizzle/issues/299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		has: markFunction( function( selector ) {
			return function( elem ) {
				return find( selector, elem ).length > 0;
			};
		} ),

		contains: markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || jQuery.text( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// https://www.w3.org/TR/selectors/#lang-pseudo
		lang: markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				find.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		target: function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		root: function( elem ) {
			return elem === documentElement;
		},

		focus: function( elem ) {
			return elem === safeActiveElement() &&
				document.hasFocus() &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		enabled: createDisabledPseudo( false ),
		disabled: createDisabledPseudo( true ),

		checked: function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			return ( nodeName( elem, "input" ) && !!elem.checked ) ||
				( nodeName( elem, "option" ) && !!elem.selected );
		},

		selected: function( elem ) {

			// Support: IE <=11+
			// Accessing the selectedIndex property
			// forces the browser to treat the default option as
			// selected when in an optgroup.
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		empty: function( elem ) {

			// https://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		parent: function( elem ) {
			return !Expr.pseudos.empty( elem );
		},

		// Element/input types
		header: function( elem ) {
			return rheader.test( elem.nodeName );
		},

		input: function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		button: function( elem ) {
			return nodeName( elem, "input" ) && elem.type === "button" ||
				nodeName( elem, "button" );
		},

		text: function( elem ) {
			var attr;
			return nodeName( elem, "input" ) && elem.type === "text" &&

				// Support: IE <10 only
				// New HTML5 attribute values (e.g., "search") appear
				// with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		first: createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		last: createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		eq: createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		even: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		odd: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		lt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i;

			if ( argument < 0 ) {
				i = argument + length;
			} else if ( argument > length ) {
				i = length;
			} else {
				i = argument;
			}

			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		gt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos.nth = Expr.pseudos.eq;

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rleadingCombinator.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrimCSS, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	if ( parseOnly ) {
		return soFar.length;
	}

	return soFar ?
		find.error( selector ) :

		// Cache the tokens
		tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						if ( skip && nodeName( elem, skip ) ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = outerCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							outerCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		find( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem, matcherOut,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed ||
				multipleContexts( selector || "*",
					context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems;

		if ( matcher ) {

			// If we have a postFinder, or filtered seed, or non-seed postFilter
			// or preexisting results,
			matcherOut = postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results;

			// Find primary matches
			matcher( matcherIn, matcherOut, context, xml );
		} else {
			matcherOut = matcherIn;
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf.call( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			var ret = ( !leadingRelative && ( xml || context != outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element
			// (see https://github.com/jquery/sizzle/issues/299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 )
							.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrimCSS, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find.TAG( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: iOS <=7 - 9 only
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
			// elements by id. (see trac-14142)
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							push.call( results, elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					jQuery.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

function compile( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
}

/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find.ID(
				token.matches[ 0 ].replace( runescape, funescape ),
				context
			) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr.needsContext.test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) &&
						testContext( context.parentNode ) || context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
}

// One-time assignments

// Support: Android <=4.0 - 4.1+
// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Initialize against the default document
setDocument();

// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

jQuery.find = find;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.unique = jQuery.uniqueSort;

// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
find.compile = compile;
find.select = select;
find.setDocument = setDocument;
find.tokenize = tokenize;

find.escape = jQuery.escapeSelector;
find.getText = jQuery.text;
find.isXML = jQuery.isXMLDoc;
find.selectors = jQuery.expr;
find.support = jQuery.support;
find.uniqueSort = jQuery.uniqueSort;

	/* eslint-enable */

} )();


var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
	// Strict HTML recognition (trac-11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to jQuery#find
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.error );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the error, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getErrorHook ) {
									process.error = jQuery.Deferred.getErrorHook();

								// The deprecated alias of the above. While the name suggests
								// returning the stack, not an error instance, jQuery just passes
								// it directly to `console.warn` so both will work; an instance
								// just better cooperates with source maps.
								} else if ( jQuery.Deferred.getStackHook ) {
									process.error = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
jQuery.Deferred.exceptionHook = function( error, asyncError ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message,
			error.stack, asyncError );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see trac-8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", true );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, isSetup ) {

	// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
	if ( !isSetup ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				if ( !saved ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					this[ type ]();
					result = dataPriv.get( this, type );
					dataPriv.set( this, type, false );

					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						return result;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering
				// the native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved ) {

				// ...and capture the result
				dataPriv.set( this, type, jQuery.event.trigger(
					saved[ 0 ],
					saved.slice( 1 ),
					this
				) );

				// Abort handling of the native event by all jQuery handlers while allowing
				// native handlers on the same element to run. On target, this is achieved
				// by stopping immediate propagation just on the jQuery event. However,
				// the native event is re-wrapped by a jQuery one on each level of the
				// propagation so the only way to stop it for jQuery is to stop it for
				// everyone via native `stopPropagation()`. This is not a problem for
				// focus/blur which don't bubble, but it does also stop click on checkboxes
				// and radios. We accept this limitation.
				event.stopPropagation();
				event.isImmediatePropagationStopped = returnTrue;
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {

	function focusMappedHandler( nativeEvent ) {
		if ( document.documentMode ) {

			// Support: IE 11+
			// Attach a single focusin/focusout handler on the document while someone wants
			// focus/blur. This is because the former are synchronous in IE while the latter
			// are async. In other browsers, all those handlers are invoked synchronously.

			// `handle` from private data would already wrap the event, but we need
			// to change the `type` here.
			var handle = dataPriv.get( this, "handle" ),
				event = jQuery.event.fix( nativeEvent );
			event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
			event.isSimulated = true;

			// First, handle focusin/focusout
			handle( nativeEvent );

			// ...then, handle focus/blur
			//
			// focus/blur don't bubble while focusin/focusout do; simulate the former by only
			// invoking the handler at the lower level.
			if ( event.target === event.currentTarget ) {

				// The setup part calls `leverageNative`, which, in turn, calls
				// `jQuery.event.add`, so event handle will already have been set
				// by this point.
				handle( event );
			}
		} else {

			// For non-IE browsers, attach a single capturing handler on the document
			// while someone wants focusin/focusout.
			jQuery.event.simulate( delegateType, nativeEvent.target,
				jQuery.event.fix( nativeEvent ) );
		}
	}

	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			var attaches;

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, true );

			if ( document.documentMode ) {

				// Support: IE 9 - 11+
				// We use the same native handler for focusin & focus (and focusout & blur)
				// so we need to coordinate setup & teardown parts between those events.
				// Use `delegateType` as the key as `type` is already used by `leverageNative`.
				attaches = dataPriv.get( this, delegateType );
				if ( !attaches ) {
					this.addEventListener( delegateType, focusMappedHandler );
				}
				dataPriv.set( this, delegateType, ( attaches || 0 ) + 1 );
			} else {

				// Return false to allow normal processing in the caller
				return false;
			}
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		teardown: function() {
			var attaches;

			if ( document.documentMode ) {
				attaches = dataPriv.get( this, delegateType ) - 1;
				if ( !attaches ) {
					this.removeEventListener( delegateType, focusMappedHandler );
					dataPriv.remove( this, delegateType );
				} else {
					dataPriv.set( this, delegateType, attaches );
				}
			} else {

				// Return false to indicate standard teardown should be applied
				return false;
			}
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	//
	// Support: IE 9 - 11+
	// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
	// attach a single handler for both events in IE.
	jQuery.event.special[ delegateType ] = {
		setup: function() {

			// Handle: regular nodes (via `this.ownerDocument`), window
			// (via `this.document`) & document (via `this`).
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType );

			// Support: IE 9 - 11+
			// We use the same native handler for focusin & focus (and focusout & blur)
			// so we need to coordinate setup & teardown parts between those events.
			// Use `delegateType` as the key as `type` is already used by `leverageNative`.
			if ( !attaches ) {
				if ( document.documentMode ) {
					this.addEventListener( delegateType, focusMappedHandler );
				} else {
					doc.addEventListener( type, focusMappedHandler, true );
				}
			}
			dataPriv.set( dataHolder, delegateType, ( attaches || 0 ) + 1 );
		},
		teardown: function() {
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType ) - 1;

			if ( !attaches ) {
				if ( document.documentMode ) {
					this.removeEventListener( delegateType, focusMappedHandler );
				} else {
					doc.removeEventListener( type, focusMappedHandler, true );
				}
				dataPriv.remove( dataHolder, delegateType );
			} else {
				dataPriv.set( dataHolder, delegateType, attaches );
			}
		}
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Re-enable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew jQuery#find here for performance reasons:
			// https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "box-sizing:content-box;border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is `display: block`
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {

		// Support: IE <=9 - 11+
		// IE only supports `"float"` in `getPropertyValue`; in computed styles
		// it's only available as `"cssFloat"`. We no longer modify properties
		// sent to `.css()` apart from camelCasing, so we need to check both.
		// Normally, this would create difference in behavior: if
		// `getPropertyValue` returns an empty string, the value returned
		// by `.css()` would be `undefined`. This is usually the case for
		// disconnected elements. However, in IE even disconnected elements
		// with no styles return `"none"` for `getPropertyValue( "float" )`
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( isCustomProp && ret ) {

			// Support: Firefox 105+, Chrome <=105+
			// Spec requires trimming whitespace for custom properties (gh-4926).
			// Firefox only trims leading whitespace. Chrome just collapses
			// both leading & trailing whitespace to a single space.
			//
			// Fall back to `undefined` if empty string returned.
			// This collapses a missing definition with property defined
			// and set to an empty string but there's no standard API
			// allowing us to differentiate them without a performance penalty
			// and returning `undefined` aligns with older jQuery.
			//
			// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || undefined;
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0,
		marginDelta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		// Count margin delta separately to only add it after scroll gutter adjustment.
		// This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
		if ( box === "margin" ) {
			marginDelta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta + marginDelta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		animationIterationCount: true,
		aspectRatio: true,
		borderImageSlice: true,
		columnCount: true,
		flexGrow: true,
		flexShrink: true,
		fontWeight: true,
		gridArea: true,
		gridColumn: true,
		gridColumnEnd: true,
		gridColumnStart: true,
		gridRow: true,
		gridRowEnd: true,
		gridRowStart: true,
		lineHeight: true,
		opacity: true,
		order: true,
		orphans: true,
		scale: true,
		widows: true,
		zIndex: true,
		zoom: true,

		// SVG-related
		fillOpacity: true,
		floodOpacity: true,
		stopOpacity: true,
		strokeMiterlimit: true,
		strokeOpacity: true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this
			.on( "mouseenter", fnOver )
			.on( "mouseleave", fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

},{}]},{},[2]);
