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
exports.id = "app/api/users/user/route";
exports.ids = ["app/api/users/user/route"];
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

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fuser%2Froute&page=%2Fapi%2Fusers%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fuser%2Froute.ts&appDir=%2FUsers%2Fsaurabhwagh%2FDesktop%2FAuthentication%2Fauthentication%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsaurabhwagh%2FDesktop%2FAuthentication%2Fauthentication&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fuser%2Froute&page=%2Fapi%2Fusers%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fuser%2Froute.ts&appDir=%2FUsers%2Fsaurabhwagh%2FDesktop%2FAuthentication%2Fauthentication%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsaurabhwagh%2FDesktop%2FAuthentication%2Fauthentication&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_saurabhwagh_Desktop_Authentication_authentication_src_app_api_users_user_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/user/route.ts */ \"(rsc)/./src/app/api/users/user/route.ts\");\n\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n// @ts-expect-error - replaced by webpack/turbopack loader\n\nconst AppRouteRouteModule = next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule;\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/users/user/route\",\n        pathname: \"/api/users/user\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/user/route\"\n    },\n    resolvedPagePath: \"/Users/saurabhwagh/Desktop/Authentication/authentication/src/app/api/users/user/route.ts\",\n    nextConfigOutput,\n    userland: _Users_saurabhwagh_Desktop_Authentication_authentication_src_app_api_users_user_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/users/user/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnVzZXIlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnVzZXJzJTJGdXNlciUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnVzZXJzJTJGdXNlciUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNhdXJhYmh3YWdoJTJGRGVza3RvcCUyRkF1dGhlbnRpY2F0aW9uJTJGYXV0aGVudGljYXRpb24lMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGc2F1cmFiaHdhZ2glMkZEZXNrdG9wJTJGQXV0aGVudGljYXRpb24lMkZhdXRoZW50aWNhdGlvbiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNoRDtBQUMwRjtBQUMzQjtBQUMvRDtBQUNxSDtBQUNySCw0QkFBNEIsZ0hBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ2lKOztBQUVqSiIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGhlbnRpY2F0aW9uLz8yMWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9zZXJ2ZXIvbm9kZS1wb2x5ZmlsbC1oZWFkZXJzXCI7XG4vLyBAdHMtaWdub3JlIHRoaXMgbmVlZCB0byBiZSBpbXBvcnRlZCBmcm9tIG5leHQvZGlzdCB0byBiZSBleHRlcm5hbFxuaW1wb3J0ICogYXMgbW9kdWxlIGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gcmVwbGFjZWQgYnkgd2VicGFjay90dXJib3BhY2sgbG9hZGVyXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3NhdXJhYmh3YWdoL0Rlc2t0b3AvQXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24vc3JjL2FwcC9hcGkvdXNlcnMvdXNlci9yb3V0ZS50c1wiO1xuY29uc3QgQXBwUm91dGVSb3V0ZU1vZHVsZSA9IG1vZHVsZS5BcHBSb3V0ZVJvdXRlTW9kdWxlO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlcnMvdXNlci9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VzZXJzL3VzZXJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3VzZXJzL3VzZXIvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvc2F1cmFiaHdhZ2gvRGVza3RvcC9BdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi9zcmMvYXBwL2FwaS91c2Vycy91c2VyL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3VzZXJzL3VzZXIvcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fuser%2Froute&page=%2Fapi%2Fusers%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fuser%2Froute.ts&appDir=%2FUsers%2Fsaurabhwagh%2FDesktop%2FAuthentication%2Fauthentication%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsaurabhwagh%2FDesktop%2FAuthentication%2Fauthentication&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/users/user/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/users/user/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _database_DB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/database/DB */ \"(rsc)/./src/database/DB.tsx\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.tsx\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _helper_getDataFromToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helper/getDataFromToken */ \"(rsc)/./src/helper/getDataFromToken.ts\");\n\n\n\n\n(0,_database_DB__WEBPACK_IMPORTED_MODULE_0__.ConnectDB)();\nasync function GET(request) {\n    try {\n        const got = await (0,_helper_getDataFromToken__WEBPACK_IMPORTED_MODULE_3__.getDataFromToken)(request);\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__.User.findOne({\n            _id: got\n        }).select(\"-password -isAdmin\");\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n            status: 200,\n            message: \"User found\",\n            data: user\n        });\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n            status: 400,\n            message: \"Error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2Vycy91c2VyL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBDO0FBQ0w7QUFDbUI7QUFDSztBQUU3REEsdURBQVNBO0FBQ0YsZUFBZUksSUFBSUMsT0FBbUI7SUFFekMsSUFBSTtRQUNBLE1BQU1DLE1BQU0sTUFBTUgsMEVBQWdCQSxDQUFDRTtRQUNuQyxNQUFNRSxPQUFPLE1BQU1OLDhDQUFJQSxDQUFDTyxPQUFPLENBQUM7WUFBQ0MsS0FBSUg7UUFBRyxHQUFHSSxNQUFNLENBQUM7UUFDbEQsT0FBT1Isa0ZBQVlBLENBQUNTLElBQUksQ0FBQztZQUFDQyxRQUFPO1lBQUlDLFNBQVE7WUFBYUMsTUFBS1A7UUFBSTtJQUN2RSxFQUFFLE9BQU9RLE9BQU87UUFDZixPQUFPYixrRkFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUNDLFFBQU87WUFBSUMsU0FBUTtRQUFPO0lBQ3JEO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoZW50aWNhdGlvbi8uL3NyYy9hcHAvYXBpL3VzZXJzL3VzZXIvcm91dGUudHM/YTJjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0REIgfSBmcm9tIFwiQC9kYXRhYmFzZS9EQlwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAL21vZGVscy9Vc2VyXCI7XG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBnZXREYXRhRnJvbVRva2VuIH0gZnJvbSBcIkAvaGVscGVyL2dldERhdGFGcm9tVG9rZW5cIjtcblxuQ29ubmVjdERCKCk7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6TmV4dFJlcXVlc3QpIHtcbiAgICBcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBnb3QgPSBhd2FpdCBnZXREYXRhRnJvbVRva2VuKHJlcXVlc3QpO1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtfaWQ6Z290fSkuc2VsZWN0KCctcGFzc3dvcmQgLWlzQWRtaW4nKTtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtzdGF0dXM6MjAwLG1lc3NhZ2U6J1VzZXIgZm91bmQnLGRhdGE6dXNlcn0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7c3RhdHVzOjQwMCxtZXNzYWdlOlwiRXJyb3JcIn0pOyAgIFxuICAgIH1cblxufSAiXSwibmFtZXMiOlsiQ29ubmVjdERCIiwiVXNlciIsIk5leHRSZXNwb25zZSIsImdldERhdGFGcm9tVG9rZW4iLCJHRVQiLCJyZXF1ZXN0IiwiZ290IiwidXNlciIsImZpbmRPbmUiLCJfaWQiLCJzZWxlY3QiLCJqc29uIiwic3RhdHVzIiwibWVzc2FnZSIsImRhdGEiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/user/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/database/DB.tsx":
/*!*****************************!*\
  !*** ./src/database/DB.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConnectDB: () => (/* binding */ ConnectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ConnectDB = async ()=>{\n    try {\n        const { connection } = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://Saurabh:Saurabh12346x@cluster0.jz36sx6.mongodb.net/\", {\n            dbName: \"Authentication\"\n        });\n        console.log(connection);\n    } catch (error) {\n        console.log(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGF0YWJhc2UvREIudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3QztBQUVqQyxNQUFNQyxZQUFZO0lBQ3JCLElBQUc7UUFDQyxNQUFNLEVBQUNDLFVBQVUsRUFBQyxHQUFFLE1BQU1GLHVEQUFnQixDQUFDLHFFQUFvRTtZQUFDSSxRQUFPO1FBQWdCO1FBQ3ZJQyxRQUFRQyxHQUFHLENBQUNKO0lBQ2hCLEVBQUMsT0FBTUssT0FBTTtRQUNURixRQUFRQyxHQUFHLENBQUNDO0lBQ2hCO0FBRUosRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGhlbnRpY2F0aW9uLy4vc3JjL2RhdGFiYXNlL0RCLnRzeD8xMDU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSx7bW9kZWx9IGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgY29uc3QgQ29ubmVjdERCID0gYXN5bmMoKT0+e1xuICAgIHRyeXtcbiAgICAgICAgY29uc3Qge2Nvbm5lY3Rpb259ID1hd2FpdCBtb25nb29zZS5jb25uZWN0KFwibW9uZ29kYitzcnY6Ly9TYXVyYWJoOlNhdXJhYmgxMjM0NnhAY2x1c3RlcjAuanozNnN4Ni5tb25nb2RiLm5ldC9cIix7ZGJOYW1lOlwiQXV0aGVudGljYXRpb25cIn0pO1xuICAgICAgICBjb25zb2xlLmxvZyhjb25uZWN0aW9uKVxuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cblxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsIkNvbm5lY3REQiIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwiZGJOYW1lIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/database/DB.tsx\n");

/***/ }),

/***/ "(rsc)/./src/helper/getDataFromToken.ts":
/*!****************************************!*\
  !*** ./src/helper/getDataFromToken.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDataFromToken: () => (/* binding */ getDataFromToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getDataFromToken = (request)=>{\n    try {\n        const token = request.cookies.get(\"token\")?.value || \"\";\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, \"tokendata\");\n        return decoded.id;\n    } catch (error) {\n        throw new Error(error.message);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvaGVscGVyL2dldERhdGFGcm9tVG9rZW4udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQytCO0FBR3hCLE1BQU1DLG1CQUFtQixDQUFDQztJQUM3QixJQUFJO1FBQ0EsTUFBTUMsUUFBUUQsUUFBUUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVUMsU0FBUztRQUNyRCxNQUFNQyxVQUFlUCwwREFBVSxDQUFDRyxPQUFNO1FBQ3RDLE9BQU9JLFFBQVFFLEVBQUU7SUFFckIsRUFBRSxPQUFPQyxPQUFXO1FBQ2hCLE1BQU0sSUFBSUMsTUFBTUQsTUFBTUUsT0FBTztJQUNqQztBQUNKLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoZW50aWNhdGlvbi8uL3NyYy9oZWxwZXIvZ2V0RGF0YUZyb21Ub2tlbi50cz8yZmNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5cblxuZXhwb3J0IGNvbnN0IGdldERhdGFGcm9tVG9rZW4gPSAocmVxdWVzdDpOZXh0UmVxdWVzdCk9PntcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoJ3Rva2VuJyk/LnZhbHVlIHx8IFwiXCI7XG4gICAgICAgIGNvbnN0IGRlY29kZWQ6YW55ICA9IGp3dC52ZXJpZnkodG9rZW4sXCJ0b2tlbmRhdGFcIik7XG4gICAgICAgIHJldHVybiBkZWNvZGVkLmlkO1xuXG4gICAgfSBjYXRjaCAoZXJyb3I6YW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJqd3QiLCJnZXREYXRhRnJvbVRva2VuIiwicmVxdWVzdCIsInRva2VuIiwiY29va2llcyIsImdldCIsInZhbHVlIiwiZGVjb2RlZCIsInZlcmlmeSIsImlkIiwiZXJyb3IiLCJFcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/helper/getDataFromToken.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fuser%2Froute&page=%2Fapi%2Fusers%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fuser%2Froute.ts&appDir=%2FUsers%2Fsaurabhwagh%2FDesktop%2FAuthentication%2Fauthentication%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsaurabhwagh%2FDesktop%2FAuthentication%2Fauthentication&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();