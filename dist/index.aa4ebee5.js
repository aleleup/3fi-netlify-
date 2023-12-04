// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"j1g1j":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b5ba4619aa4ebee5";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jhevI":[function(require,module,exports) {
var _modelJs = require("./model.js");
var _controllerJs = require("./controller.js");
// contact box
(0, _modelJs.displayContactBox)();
// our people buttons change display
_controllerJs.peopleNav.innerHTML = (0, _modelJs.ourPeopleDisplayhtml)(_controllerJs.sebas);
_controllerJs.ourPeopleBtnBox.addEventListener("click", function(e) {
    const target = e.target;
    if (target.textContent === "CFO") _controllerJs.peopleNav.innerHTML = (0, _modelJs.ourPeopleDisplayhtml)(_controllerJs.guille);
    if (target.textContent === "COO") _controllerJs.peopleNav.innerHTML = (0, _modelJs.ourPeopleDisplayhtml)(_controllerJs.roli);
    if (target.textContent === "CEO") _controllerJs.peopleNav.innerHTML = (0, _modelJs.ourPeopleDisplayhtml)(_controllerJs.sebas);
});
// about us next-prev buttons change display
_controllerJs.aboutUsContent.innerHTML = (0, _modelJs.aboutUsContentRenderHtml)(_controllerJs.text1, _controllerJs.img1);
let counter = 0;
_controllerJs.nextPrevBtns.addEventListener("click", function(e) {
    if (e.target.textContent === "next") counter++;
    if (e.target.textContent === "previous") counter--;
    if (counter === 1) {
        // on 1 both buttons are displayed;  
        _controllerJs.prev.classList.remove("hidden");
        _controllerJs.next.classList.remove("hidden");
        // dot2 == 'active';
        _controllerJs.dot1.classList.remove("dot--active");
        _controllerJs.dot3.classList.remove("dot--active");
        _controllerJs.dot2.classList.add("dot--active");
        // display text2, img2
        _controllerJs.aboutUsContent.innerHTML = (0, _modelJs.aboutUsContentRenderHtml)(_controllerJs.text2, _controllerJs.img2);
    }
    if (counter === 2) {
        // on 2 next button gets hidden; 
        _controllerJs.next.classList.add("hidden");
        // dot3 == 'acive';
        _controllerJs.dot2.classList.remove("dot--active");
        _controllerJs.dot3.classList.add("dot--active");
        // display text3
        _controllerJs.aboutUsContent.innerHTML = (0, _modelJs.aboutUsContentRenderHtml)(_controllerJs.text3);
    }
    if (counter === 0) {
        // on 0 prev button gets hidden; 
        _controllerJs.prev.classList.add("hidden");
        // dot1 == 'active'
        _controllerJs.dot2.classList.remove("dot--active");
        _controllerJs.dot1.classList.add("dot--active");
        // display text1, img1
        _controllerJs.aboutUsContent.innerHTML = (0, _modelJs.aboutUsContentRenderHtml)(_controllerJs.text1, _controllerJs.img1);
    }
});

},{"./model.js":"iRyNg","./controller.js":"bJrh0"}],"iRyNg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ourPeopleDisplayhtml", ()=>ourPeopleDisplayhtml);
parcelHelpers.export(exports, "aboutUsContentRenderHtml", ()=>aboutUsContentRenderHtml);
parcelHelpers.export(exports, "displayContactBox", ()=>displayContactBox);
var _controllerJs = require("./controller.js");
const ourPeopleDisplayhtml = function(worker) {
    _controllerJs.peopleNav.innerHTML = "";
    const html = `
    <div class="people-content">
    <img class="workerImage" src="${worker.img}" alt="Person">
    <p class="tiny-font">${worker.worker} (${worker.func})
    </p>
    <ul class="people-content--info">
        <li><span style="font-weight: bold">Actually working in: </span>${worker.workingIn}</li><br>
        <li><span style="font-weight: bold">Graduated in:</span> ${worker.graduationInfo}</li><br>
        <li><span style="font-weight: bold">Previous expierences:</span> ${worker.experiences}</li><br>
    </ul>
</div>
    `;
    return html;
};
const aboutUsContentRenderHtml = function(text, image) {
    let html;
    _controllerJs.aboutUsContent.innerHTML = "";
    if (image) html = `
    
                <div class="about-text">
                    <p>${text}</p>
                </div>
                

                <div class="about-images">
                    <img src="${image}" alt="Image 1">

                </div>`;
    else html = `
                <div class="about-text">
                    <p>${text} </p>
                </div>
        `;
    return html;
};
const displayContactBox = function() {
    _controllerJs.navContainer.addEventListener("click", function(e) {
        e.preventDefault;
        if (e.target.textContent === "Contact") _controllerJs.contactBox.classList.toggle("hidden");
    });
    _controllerJs.closeContactButton.addEventListener("click", function(e) {
        e.preventDefault;
        _controllerJs.contactBox.classList.add("hidden");
    });
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") _controllerJs.contactBox.classList.add("hidden");
    });
};

},{"./controller.js":"bJrh0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bJrh0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "navegationBar", ()=>navegationBar);
parcelHelpers.export(exports, "navContainer", ()=>navContainer);
parcelHelpers.export(exports, "intro", ()=>intro);
parcelHelpers.export(exports, "aboutUsContent", ()=>aboutUsContent);
parcelHelpers.export(exports, "contactBox", ()=>contactBox);
parcelHelpers.export(exports, "closeContactButton", ()=>closeContactButton);
parcelHelpers.export(exports, "ourPeopleBtnBox", ()=>ourPeopleBtnBox);
parcelHelpers.export(exports, "peopleNav", ()=>peopleNav);
parcelHelpers.export(exports, "nextPrevBtns", ()=>nextPrevBtns);
parcelHelpers.export(exports, "sebas", ()=>sebas);
parcelHelpers.export(exports, "guille", ()=>guille);
parcelHelpers.export(exports, "roli", ()=>roli);
parcelHelpers.export(exports, "ceoButton", ()=>ceoButton);
parcelHelpers.export(exports, "cfoButton", ()=>cfoButton);
parcelHelpers.export(exports, "finDir", ()=>finDir);
parcelHelpers.export(exports, "overlay", ()=>overlay);
parcelHelpers.export(exports, "text1", ()=>text1);
parcelHelpers.export(exports, "text2", ()=>text2);
parcelHelpers.export(exports, "text3", ()=>text3);
parcelHelpers.export(exports, "img1", ()=>img1);
parcelHelpers.export(exports, "img2", ()=>img2);
parcelHelpers.export(exports, "prev", ()=>prev);
parcelHelpers.export(exports, "next", ()=>next);
parcelHelpers.export(exports, "dotsArr", ()=>dotsArr);
parcelHelpers.export(exports, "dot1", ()=>dot1);
parcelHelpers.export(exports, "dot2", ()=>dot2);
parcelHelpers.export(exports, "dot3", ()=>dot3);
parcelHelpers.export(exports, "main", ()=>main);
parcelHelpers.export(exports, "navLinks", ()=>navLinks);
"use strict";
const navegationBar = document.querySelector(".nav");
const navContainer = document.querySelector(".nav-ul");
const intro = document.querySelector(".intro");
const aboutUsContent = document.querySelector(".about-content");
const contactBox = document.querySelector(".contact-overlay");
const closeContactButton = document.querySelector(".close-button");
const footer = document.querySelector(".footer-content");
const ourPeopleBtnBox = document.querySelector(".ourpeople--btn-box");
const peopleNav = document.querySelector(".people-navigation");
const nextPrevBtns = document.querySelector(".buttons-container");
const main = document.querySelectorAll("main");
const navLinks = document.querySelectorAll("header nav a");
const sebas = {
    worker: "Sebastian Enrique Leupold",
    func: "CEO",
    img: "/Sebas.0130d094.png",
    workingIn: "Liberty America",
    graduationInfo: "Electronic Engenier at  UTN",
    experiences: "X (1997-2008), X (1803-3605)"
};
const guille = {
    worker: "Guillermo Gerardo Leupold",
    func: "CFO",
    img: "/Guille.ab694ac3.png",
    workingIn: "Sanofi latam",
    graduationInfo: "Busines Administration UB",
    experiences: "X (1997-2008), X (1803-3605)"
};
const roli = {
    worker: "Rodolfo Javier Leupold",
    func: "COO",
    img: "/Roli.b685959f.png",
    workingIn: "X latam",
    graduationInfo: "Busines Administration UBA",
    experiences: "X (1997-2008), X (1803-3605)"
};
const ceoButton = document.getElementById("btn-CEO");
const cfoButton = document.getElementById("btn-CFO");
const overlay = document.querySelector(".contact-overlay");
const text1 = `
    In 3fi solutions we work in bla bla bla... bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
    bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
    bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
    bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
    bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
    bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
    bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
    bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
    bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
    bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
    bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
`;
const text2 = `In the market, we try to develop bla bla bla... bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...`;
const text3 = `Finally, about our present and our futurebla bla bla... bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...
bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla...bla bla bla... `;
const img1 = `/graph1.b492c23a.png` ///graph1.fa33cb58.png
;
const img2 = `/graph2.092c49a3.png` //graph2.b981ea2b.png
;
const [prev, next] = document.querySelectorAll(".button-change");
const dotsArr = document.querySelector(".dots-carrousel");
const dot1 = document.querySelector(".dot-1").lastElementChild;
const dot2 = document.querySelector(".dot-2").lastElementChild;
const dot3 = document.querySelector(".dot-3").lastElementChild;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["j1g1j","jhevI"], "jhevI", "parcelRequirec692")

//# sourceMappingURL=index.aa4ebee5.js.map
