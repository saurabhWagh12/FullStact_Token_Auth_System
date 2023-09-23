"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/users/signup/route";
exports.ids = ["app/api/users/signup/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=%2FUsers%2Fsaurabhwagh%2FDesktop%2FAuthentication%2Fauthentication%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsaurabhwagh%2FDesktop%2FAuthentication%2Fauthentication&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=%2FUsers%2Fsaurabhwagh%2FDesktop%2FAuthentication%2Fauthentication%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsaurabhwagh%2FDesktop%2FAuthentication%2Fauthentication&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_saurabhwagh_Desktop_Authentication_authentication_src_app_api_users_signup_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/signup/route.ts */ \"(rsc)/./src/app/api/users/signup/route.ts\");\n\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n// @ts-expect-error - replaced by webpack/turbopack loader\n\nconst AppRouteRouteModule = next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule;\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/users/signup/route\",\n        pathname: \"/api/users/signup\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/signup/route\"\n    },\n    resolvedPagePath: \"/Users/saurabhwagh/Desktop/Authentication/authentication/src/app/api/users/signup/route.ts\",\n    nextConfigOutput,\n    userland: _Users_saurabhwagh_Desktop_Authentication_authentication_src_app_api_users_signup_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/users/signup/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnNpZ251cCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlcnMlMkZzaWdudXAlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VycyUyRnNpZ251cCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNhdXJhYmh3YWdoJTJGRGVza3RvcCUyRkF1dGhlbnRpY2F0aW9uJTJGYXV0aGVudGljYXRpb24lMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGc2F1cmFiaHdhZ2glMkZEZXNrdG9wJTJGQXV0aGVudGljYXRpb24lMkZhdXRoZW50aWNhdGlvbiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNoRDtBQUMwRjtBQUMzQjtBQUMvRDtBQUN1SDtBQUN2SCw0QkFBNEIsZ0hBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ2lKOztBQUVqSiIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGhlbnRpY2F0aW9uLz9mMjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9zZXJ2ZXIvbm9kZS1wb2x5ZmlsbC1oZWFkZXJzXCI7XG4vLyBAdHMtaWdub3JlIHRoaXMgbmVlZCB0byBiZSBpbXBvcnRlZCBmcm9tIG5leHQvZGlzdCB0byBiZSBleHRlcm5hbFxuaW1wb3J0ICogYXMgbW9kdWxlIGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gcmVwbGFjZWQgYnkgd2VicGFjay90dXJib3BhY2sgbG9hZGVyXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3NhdXJhYmh3YWdoL0Rlc2t0b3AvQXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24vc3JjL2FwcC9hcGkvdXNlcnMvc2lnbnVwL3JvdXRlLnRzXCI7XG5jb25zdCBBcHBSb3V0ZVJvdXRlTW9kdWxlID0gbW9kdWxlLkFwcFJvdXRlUm91dGVNb2R1bGU7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91c2Vycy9zaWdudXAvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91c2Vycy9zaWdudXBcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3VzZXJzL3NpZ251cC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9zYXVyYWJod2FnaC9EZXNrdG9wL0F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uL3NyYy9hcHAvYXBpL3VzZXJzL3NpZ251cC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS91c2Vycy9zaWdudXAvcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=%2FUsers%2Fsaurabhwagh%2FDesktop%2FAuthentication%2Fauthentication%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsaurabhwagh%2FDesktop%2FAuthentication%2Fauthentication&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/users/signup/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/users/signup/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _database_DB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/database/DB */ \"(rsc)/./src/database/DB.tsx\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.tsx\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helper_mailer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helper/mailer */ \"(rsc)/./src/helper/mailer.ts\");\n\n\n\n\n\n(0,_database_DB__WEBPACK_IMPORTED_MODULE_0__.ConnectDB)();\nasync function POST(request) {\n    try {\n        const req = await request.json();\n        const { name, email, password } = req;\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__.User.findOne({\n            email: email\n        });\n        if (user) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n                status: 200,\n                message: \"User Exist\"\n            });\n        }\n        // HASHING PASSWORD:\n        const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().genSalt(10); // Fixed the typo here\n        const hash = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().hash(password, salt);\n        const u = new _models_User__WEBPACK_IMPORTED_MODULE_1__.User({\n            name: name,\n            email: email,\n            password: hash\n        });\n        await u.save();\n        //sending verification email:\n        await (0,_helper_mailer__WEBPACK_IMPORTED_MODULE_4__.sendEmail)({\n            email,\n            emailType: \"Verify\",\n            userId: u._id\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n            status: 200,\n            message: \"USER Created\"\n        });\n    } catch (error) {\n        console.error(error); // Use console.error to log errors\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n            status: 400,\n            message: \"Error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2Vycy9zaWdudXAvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQztBQUNMO0FBQ21CO0FBQ3hCO0FBQ1k7QUFFNUNBLHVEQUFTQTtBQUVGLGVBQWVLLEtBQUtDLE9BQW9CO0lBQzdDLElBQUk7UUFDRixNQUFNQyxNQUFNLE1BQU1ELFFBQVFFLElBQUk7UUFDOUIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdKO1FBRWxDLE1BQU1LLE9BQU8sTUFBTVgsOENBQUlBLENBQUNZLE9BQU8sQ0FBQztZQUFFSCxPQUFPQTtRQUFNO1FBQy9DLElBQUlFLE1BQU07WUFDUixPQUFPVixrRkFBWUEsQ0FBQ00sSUFBSSxDQUFDO2dCQUFFTSxRQUFRO2dCQUFLQyxTQUFTO1lBQWE7UUFDaEU7UUFFQSxvQkFBb0I7UUFDcEIsTUFBTUMsT0FBTyxNQUFNYix1REFBZ0IsQ0FBQyxLQUFLLHNCQUFzQjtRQUMvRCxNQUFNZSxPQUFPLE1BQU1mLG9EQUFhLENBQUNRLFVBQVVLO1FBRTNDLE1BQU1HLElBQUksSUFBSWxCLDhDQUFJQSxDQUFDO1lBQUVRLE1BQU1BO1lBQU1DLE9BQU9BO1lBQU9DLFVBQVVPO1FBQUs7UUFDOUQsTUFBTUMsRUFBRUMsSUFBSTtRQUVaLDZCQUE2QjtRQUM3QixNQUFNaEIseURBQVNBLENBQUM7WUFBQ007WUFBTVcsV0FBVTtZQUFTQyxRQUFPSCxFQUFFSSxHQUFHO1FBQUE7UUFHdEQsT0FBT3JCLGtGQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFBRU0sUUFBUTtZQUFLQyxTQUFTO1FBQWU7SUFDbEUsRUFBRSxPQUFPUyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQ0EsUUFBUSxrQ0FBa0M7UUFDeEQsT0FBT3RCLGtGQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFBRU0sUUFBUTtZQUFLQyxTQUFTO1FBQVE7SUFDM0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGhlbnRpY2F0aW9uLy4vc3JjL2FwcC9hcGkvdXNlcnMvc2lnbnVwL3JvdXRlLnRzPzE2ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdERCIH0gZnJvbSBcIkAvZGF0YWJhc2UvREJcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiQC9tb2RlbHMvVXNlclwiO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IGJjcnlwdGpzIGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IHNlbmRFbWFpbCB9IGZyb20gXCJAL2hlbHBlci9tYWlsZXJcIjtcblxuQ29ubmVjdERCKCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVxID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcTtcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogZW1haWwgfSk7XG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN0YXR1czogMjAwLCBtZXNzYWdlOiBcIlVzZXIgRXhpc3RcIiB9KTtcbiAgICB9XG5cbiAgICAvLyBIQVNISU5HIFBBU1NXT1JEOlxuICAgIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHRqcy5nZW5TYWx0KDEwKTsgLy8gRml4ZWQgdGhlIHR5cG8gaGVyZVxuICAgIGNvbnN0IGhhc2ggPSBhd2FpdCBiY3J5cHRqcy5oYXNoKHBhc3N3b3JkLCBzYWx0KTtcblxuICAgIGNvbnN0IHUgPSBuZXcgVXNlcih7IG5hbWU6IG5hbWUsIGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IGhhc2ggfSk7XG4gICAgYXdhaXQgdS5zYXZlKCk7XG5cbiAgICAvL3NlbmRpbmcgdmVyaWZpY2F0aW9uIGVtYWlsOlxuICAgIGF3YWl0IHNlbmRFbWFpbCh7ZW1haWwsZW1haWxUeXBlOidWZXJpZnknLHVzZXJJZDp1Ll9pZH0pXG5cbiAgICBcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdGF0dXM6IDIwMCwgbWVzc2FnZTogXCJVU0VSIENyZWF0ZWRcIiB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTsgLy8gVXNlIGNvbnNvbGUuZXJyb3IgdG8gbG9nIGVycm9yc1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN0YXR1czogNDAwLCBtZXNzYWdlOiBcIkVycm9yXCIgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb25uZWN0REIiLCJVc2VyIiwiTmV4dFJlc3BvbnNlIiwiYmNyeXB0anMiLCJzZW5kRW1haWwiLCJQT1NUIiwicmVxdWVzdCIsInJlcSIsImpzb24iLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXIiLCJmaW5kT25lIiwic3RhdHVzIiwibWVzc2FnZSIsInNhbHQiLCJnZW5TYWx0IiwiaGFzaCIsInUiLCJzYXZlIiwiZW1haWxUeXBlIiwidXNlcklkIiwiX2lkIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/signup/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/database/DB.tsx":
/*!*****************************!*\
  !*** ./src/database/DB.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConnectDB: () => (/* binding */ ConnectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ConnectDB = async ()=>{\n    try {\n        const { connection } = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://Saurabh:Saurabh12346x@cluster0.jz36sx6.mongodb.net/\", {\n            dbName: \"Authentication\"\n        });\n        console.log(connection);\n    } catch (error) {\n        console.log(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGF0YWJhc2UvREIudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3QztBQUVqQyxNQUFNQyxZQUFZO0lBQ3JCLElBQUc7UUFDQyxNQUFNLEVBQUNDLFVBQVUsRUFBQyxHQUFFLE1BQU1GLHVEQUFnQixDQUFDLHFFQUFvRTtZQUFDSSxRQUFPO1FBQWdCO1FBQ3ZJQyxRQUFRQyxHQUFHLENBQUNKO0lBQ2hCLEVBQUMsT0FBTUssT0FBTTtRQUNURixRQUFRQyxHQUFHLENBQUNDO0lBQ2hCO0FBRUosRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGhlbnRpY2F0aW9uLy4vc3JjL2RhdGFiYXNlL0RCLnRzeD8xMDU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSx7bW9kZWx9IGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgY29uc3QgQ29ubmVjdERCID0gYXN5bmMoKT0+e1xuICAgIHRyeXtcbiAgICAgICAgY29uc3Qge2Nvbm5lY3Rpb259ID1hd2FpdCBtb25nb29zZS5jb25uZWN0KFwibW9uZ29kYitzcnY6Ly9TYXVyYWJoOlNhdXJhYmgxMjM0NnhAY2x1c3RlcjAuanozNnN4Ni5tb25nb2RiLm5ldC9cIix7ZGJOYW1lOlwiQXV0aGVudGljYXRpb25cIn0pO1xuICAgICAgICBjb25zb2xlLmxvZyhjb25uZWN0aW9uKVxuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cblxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsIkNvbm5lY3REQiIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwiZGJOYW1lIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/database/DB.tsx\n");

/***/ }),

/***/ "(rsc)/./src/helper/mailer.ts":
/*!******************************!*\
  !*** ./src/helper/mailer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendEmail: () => (/* binding */ sendEmail)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.tsx\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst sendEmail = async ({ email, emailType, userId })=>{\n    try {\n        // Create a hashed token\n        const hashedToken = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hash(userId.toString(), 10);\n        if (emailType === \"Verify\") {\n            await _models_User__WEBPACK_IMPORTED_MODULE_1__.User.findByIdAndUpdate(userId, {\n                verifyToken: hashedToken,\n                verifyTokenExpiry: Date.now() + 3600000\n            });\n        } else if (emailType === \"Reset\") {\n            await _models_User__WEBPACK_IMPORTED_MODULE_1__.User.findByIdAndUpdate(userId, {\n                forgotPasswordToken: hashedToken,\n                forgotPasswordTokenExpiry: Date.now() + 3600000\n            });\n        }\n        var transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({\n            host: \"sandbox.smtp.mailtrap.io\",\n            port: 2525,\n            auth: {\n                user: \"ffef38903af0e6\",\n                pass: \"99b5b0841ab90f\"\n            }\n        });\n        const mailOption = {\n            from: \"waghsa1@rknec.edu\",\n            to: email,\n            subject: emailType === \"Verify\" ? \"Verify your email\" : \"Reset Password\",\n            html: `<p>Click <a href=\"${\"http://localhost:3000\"}/verifyemail?token=${hashedToken}\">here</a> to ${emailType === \"Verify\" ? \"verify your email\" : \"reset your password\"}</p>`\n        };\n        const mailResponse = await transporter.sendEmail(mailOption);\n        return mailResponse;\n    } catch (error) {\n        console.log(\"Error\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvaGVscGVyL21haWxlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvQztBQUNDO0FBQ0w7QUFFekIsTUFBTUcsWUFBWSxPQUFNLEVBQUNDLEtBQUssRUFBQ0MsU0FBUyxFQUFDQyxNQUFNLEVBQUs7SUFDdkQsSUFBSTtRQUNBLHdCQUF3QjtRQUN4QixNQUFNQyxjQUFjLE1BQU1MLG9EQUFhLENBQUNJLE9BQU9HLFFBQVEsSUFBRztRQUMxRCxJQUFHSixjQUFZLFVBQVM7WUFDcEIsTUFBTUosOENBQUlBLENBQUNTLGlCQUFpQixDQUFDSixRQUFPO2dCQUFDSyxhQUFZSjtnQkFBWUssbUJBQW1CQyxLQUFLQyxHQUFHLEtBQUc7WUFBTztRQUN0RyxPQUFNLElBQUdULGNBQVksU0FBUTtZQUN6QixNQUFNSiw4Q0FBSUEsQ0FBQ1MsaUJBQWlCLENBQUNKLFFBQU87Z0JBQUNTLHFCQUFvQlI7Z0JBQVlTLDJCQUEyQkgsS0FBS0MsR0FBRyxLQUFHO1lBQU87UUFDdEg7UUFFQSxJQUFJRyxjQUFjakIsdURBQTBCLENBQUM7WUFDekNtQixNQUFNO1lBQ05DLE1BQU07WUFDTkMsTUFBTTtnQkFDSkMsTUFBTTtnQkFDTkMsTUFBTTtZQUNSO1FBQ0Y7UUFFRixNQUFNQyxhQUFhO1lBQ2ZDLE1BQUs7WUFDTEMsSUFBR3RCO1lBQ0h1QixTQUFTdEIsY0FBWSxXQUFXLHNCQUFvQjtZQUNwRHVCLE1BQUssQ0FBQyxrQkFBa0IsRUFBRSx3QkFBd0IsbUJBQW1CLEVBQUVyQixZQUFZLGNBQWMsRUFBRUYsY0FBWSxXQUFTLHNCQUFvQixzQkFBc0IsSUFBSSxDQUFDO1FBQzNLO1FBRUEsTUFBTXdCLGVBQWUsTUFBTVosWUFBWWQsU0FBUyxDQUFDcUI7UUFDakQsT0FBT0s7SUFFWCxFQUFFLE9BQU9DLE9BQVc7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtBQUNKLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoZW50aWNhdGlvbi8uL3NyYy9oZWxwZXIvbWFpbGVyLnRzP2Q4M2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSAnbm9kZW1haWxlcic7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQC9tb2RlbHMvVXNlcic7XG5pbXBvcnQgYmNyeXB0anMgZnJvbSAnYmNyeXB0anMnO1xuXG5leHBvcnQgY29uc3Qgc2VuZEVtYWlsID0gYXN5bmMoe2VtYWlsLGVtYWlsVHlwZSx1c2VySWR9OmFueSk9PntcbiAgICB0cnkge1xuICAgICAgICAvLyBDcmVhdGUgYSBoYXNoZWQgdG9rZW5cbiAgICAgICAgY29uc3QgaGFzaGVkVG9rZW4gPSBhd2FpdCBiY3J5cHRqcy5oYXNoKHVzZXJJZC50b1N0cmluZygpLDEwKTtcbiAgICAgICAgaWYoZW1haWxUeXBlPT09XCJWZXJpZnlcIil7XG4gICAgICAgICAgICBhd2FpdCBVc2VyLmZpbmRCeUlkQW5kVXBkYXRlKHVzZXJJZCx7dmVyaWZ5VG9rZW46aGFzaGVkVG9rZW4sdmVyaWZ5VG9rZW5FeHBpcnk6IERhdGUubm93KCkrMzYwMDAwMH0pO1xuICAgICAgICB9ZWxzZSBpZihlbWFpbFR5cGU9PT1cIlJlc2V0XCIpe1xuICAgICAgICAgICAgYXdhaXQgVXNlci5maW5kQnlJZEFuZFVwZGF0ZSh1c2VySWQse2ZvcmdvdFBhc3N3b3JkVG9rZW46aGFzaGVkVG9rZW4sZm9yZ290UGFzc3dvcmRUb2tlbkV4cGlyeTogRGF0ZS5ub3coKSszNjAwMDAwfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICAgICAgICBob3N0OiBcInNhbmRib3guc210cC5tYWlsdHJhcC5pb1wiLFxuICAgICAgICAgICAgcG9ydDogMjUyNSxcbiAgICAgICAgICAgIGF1dGg6IHtcbiAgICAgICAgICAgICAgdXNlcjogXCJmZmVmMzg5MDNhZjBlNlwiLFxuICAgICAgICAgICAgICBwYXNzOiBcIjk5YjViMDg0MWFiOTBmXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBtYWlsT3B0aW9uID0ge1xuICAgICAgICAgICAgZnJvbTond2FnaHNhMUBya25lYy5lZHUnLFxuICAgICAgICAgICAgdG86ZW1haWwsXG4gICAgICAgICAgICBzdWJqZWN0OiBlbWFpbFR5cGU9PT0nVmVyaWZ5JyA/ICdWZXJpZnkgeW91ciBlbWFpbCc6J1Jlc2V0IFBhc3N3b3JkJywgXG4gICAgICAgICAgICBodG1sOmA8cD5DbGljayA8YSBocmVmPVwiJHsnaHR0cDovL2xvY2FsaG9zdDozMDAwJ30vdmVyaWZ5ZW1haWw/dG9rZW49JHtoYXNoZWRUb2tlbn1cIj5oZXJlPC9hPiB0byAke2VtYWlsVHlwZT09PVwiVmVyaWZ5XCI/XCJ2ZXJpZnkgeW91ciBlbWFpbFwiOlwicmVzZXQgeW91ciBwYXNzd29yZFwifTwvcD5gLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFpbFJlc3BvbnNlID0gYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZEVtYWlsKG1haWxPcHRpb24pO1xuICAgICAgICByZXR1cm4gbWFpbFJlc3BvbnNlO1xuXG4gICAgfSBjYXRjaCAoZXJyb3I6YW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicpXG4gICAgfVxufSJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwiVXNlciIsImJjcnlwdGpzIiwic2VuZEVtYWlsIiwiZW1haWwiLCJlbWFpbFR5cGUiLCJ1c2VySWQiLCJoYXNoZWRUb2tlbiIsImhhc2giLCJ0b1N0cmluZyIsImZpbmRCeUlkQW5kVXBkYXRlIiwidmVyaWZ5VG9rZW4iLCJ2ZXJpZnlUb2tlbkV4cGlyeSIsIkRhdGUiLCJub3ciLCJmb3Jnb3RQYXNzd29yZFRva2VuIiwiZm9yZ290UGFzc3dvcmRUb2tlbkV4cGlyeSIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwiaG9zdCIsInBvcnQiLCJhdXRoIiwidXNlciIsInBhc3MiLCJtYWlsT3B0aW9uIiwiZnJvbSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJtYWlsUmVzcG9uc2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/helper/mailer.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/User.tsx":
/*!*****************************!*\
  !*** ./src/models/User.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserModel = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: String,\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String\n    },\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    isAdmin: {\n        type: Boolean,\n        default: false\n    },\n    forgotPasswordToken: String,\n    forgotPasswordTokenExpiry: Date,\n    verifyToken: String,\n    verifyTokenExpiry: Date\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QztBQUU1QyxNQUFNQyxZQUFZLElBQUlELHdEQUFlLENBQUM7SUFDbENHLE1BQUtDO0lBQ0xDLE9BQU07UUFBQ0MsTUFBS0Y7UUFBT0csVUFBUztRQUFLQyxRQUFPO0lBQUk7SUFDNUNDLFVBQVM7UUFBQ0gsTUFBS0Y7SUFBTTtJQUNyQk0sWUFBVztRQUNQSixNQUFLSztRQUFRQyxTQUFRO0lBQ3pCO0lBQ0FDLFNBQVE7UUFDSlAsTUFBS0s7UUFBUUMsU0FBUTtJQUN6QjtJQUNBRSxxQkFBb0JWO0lBQ3BCVywyQkFBMEJDO0lBQzFCQyxhQUFZYjtJQUNaYyxtQkFBa0JGO0FBQ3RCO0FBRU8sTUFBTUcsT0FBT25CLHdEQUFlLENBQUNtQixJQUFJLElBQUluQixxREFBYyxDQUFDLFFBQU9DLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoZW50aWNhdGlvbi8uL3NyYy9tb2RlbHMvVXNlci50c3g/OTQyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IFVzZXJNb2RlbCA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIG5hbWU6U3RyaW5nLFxuICAgIGVtYWlsOnt0eXBlOlN0cmluZyxyZXF1aXJlZDp0cnVlLHVuaXF1ZTp0cnVlfSxcbiAgICBwYXNzd29yZDp7dHlwZTpTdHJpbmd9LFxuICAgIGlzVmVyaWZpZWQ6e1xuICAgICAgICB0eXBlOkJvb2xlYW4sZGVmYXVsdDpmYWxzZVxuICAgIH0sIFxuICAgIGlzQWRtaW46e1xuICAgICAgICB0eXBlOkJvb2xlYW4sZGVmYXVsdDpmYWxzZVxuICAgIH0sXG4gICAgZm9yZ290UGFzc3dvcmRUb2tlbjpTdHJpbmcsXG4gICAgZm9yZ290UGFzc3dvcmRUb2tlbkV4cGlyeTpEYXRlLFxuICAgIHZlcmlmeVRva2VuOlN0cmluZyxcbiAgICB2ZXJpZnlUb2tlbkV4cGlyeTpEYXRlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXInLFVzZXJNb2RlbCk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiVXNlck1vZGVsIiwiU2NoZW1hIiwibmFtZSIsIlN0cmluZyIsImVtYWlsIiwidHlwZSIsInJlcXVpcmVkIiwidW5pcXVlIiwicGFzc3dvcmQiLCJpc1ZlcmlmaWVkIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJpc0FkbWluIiwiZm9yZ290UGFzc3dvcmRUb2tlbiIsImZvcmdvdFBhc3N3b3JkVG9rZW5FeHBpcnkiLCJEYXRlIiwidmVyaWZ5VG9rZW4iLCJ2ZXJpZnlUb2tlbkV4cGlyeSIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/bcryptjs","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=%2FUsers%2Fsaurabhwagh%2FDesktop%2FAuthentication%2Fauthentication%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsaurabhwagh%2FDesktop%2FAuthentication%2Fauthentication&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();