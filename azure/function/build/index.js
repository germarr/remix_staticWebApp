var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// app/routes/login/index.tsx
var login_exports = {};
__export(login_exports, {
  default: () => index,
  links: () => links
});

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-LPBUVCNP.css";

// app/routes/login/index.tsx
var links = () => [{ rel: "stylesheet", href: tailwind_default }];
function index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-red-100 min-h-screen flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-semibold text-3xl"
  }, "Login"));
}

// app/routes/adios.tsx
var adios_exports = {};
__export(adios_exports, {
  default: () => index2,
  links: () => links2
});
var import_react3 = require("@remix-run/react");
var links2 = () => [{ rel: "stylesheet", href: tailwind_default }];
function index2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-red-100 min-h-screen flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-semibold text-3xl"
  }, "Adios"), /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "./login/"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-semibold text-3xl"
  }, "Adios")));
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => index3,
  links: () => links3
});
var links3 = () => [{ rel: "stylesheet", href: tailwind_default }];
function index3() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-red-100 min-h-screen flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-semibold text-3xl"
  }, "Holi"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "27564b4e", entry: { module: "/build/entry.client-PT5O3VWJ.js", imports: ["/build/_shared/chunk-L66B4FC5.js", "/build/_shared/chunk-LHUECDNL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-5QXHCNOX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/adios": { id: "routes/adios", parentId: "root", path: "adios", index: void 0, caseSensitive: void 0, module: "/build/routes/adios-CAUTEVJQ.js", imports: ["/build/_shared/chunk-WKLL26BV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-QSFUZQRY.js", imports: ["/build/_shared/chunk-WKLL26BV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login/index": { id: "routes/login/index", parentId: "root", path: "login", index: !0, caseSensitive: void 0, module: "/build/routes/login/index-H76LWKF5.js", imports: ["/build/_shared/chunk-WKLL26BV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-27564B4E.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/login/index": {
    id: "routes/login/index",
    parentId: "root",
    path: "login",
    index: !0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/adios": {
    id: "routes/adios",
    parentId: "root",
    path: "adios",
    index: void 0,
    caseSensitive: void 0,
    module: adios_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
