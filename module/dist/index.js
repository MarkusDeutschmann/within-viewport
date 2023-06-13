"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leftAsync = exports.bottomAsync = exports.rightAsync = exports.topAsync = exports.left = exports.bottom = exports.right = exports.top = exports.withinviewport = exports.withinViewport = exports.withinViewportAsync = void 0;
const index_js_1 = require("./async/index.js");
const index_js_2 = require("./sync/index.js");
var index_js_3 = require("./async/index.js");
Object.defineProperty(exports, "withinViewportAsync", { enumerable: true, get: function () { return index_js_3.withinViewportAsync; } });
var index_js_4 = require("./sync/index.js");
Object.defineProperty(exports, "withinViewport", { enumerable: true, get: function () { return index_js_4.withinViewport; } });
const plugin_js_1 = __importDefault(require("./jquery/plugin.js"));
const global = (function (scope) {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    return scope;
})(this);
if (global) {
    if ('jQuery' in global) {
        (0, plugin_js_1.default)(global.jQuery);
    }
    else if ('$' in global) {
        (0, plugin_js_1.default)(global.$);
    }
}
/**
 * Temporary shim for the old function name—please switch to the camelCase `withinViewport` name.
 *
 * @deprecated
 */
function withinviewport(...args) {
    const result = (0, index_js_2.withinViewport)(...args);
    try {
        // Some *really* old browsers don't have a console
        console.error('The lowercase name `withinviewport` is deprecated. Instead, use the camelCase name `withinViewport`.');
    }
    catch (e) {
        //
    }
    return result;
}
exports.withinviewport = withinviewport;
/**
 * Shortcut methods for each side of the viewport
 */
/**
 * Test if an element is below the top edge of the viewport
 *
 * @example `topAsync(elem)` is the same as `withinViewport(elem, 'top')`
 */
function top(element) {
    return (0, index_js_2.withinViewport)(element, 'top');
}
exports.top = top;
/**
 * Test if an element is within the right edge of the viewport
 *
 * @example `right(elem)` is the same as `withinViewport(elem, 'right')`
 */
function right(element) {
    return (0, index_js_2.withinViewport)(element, 'right');
}
exports.right = right;
/**
 * Test if an element is above the bottom edge of the viewport
 *
 * @example `bottom(elem)` is the same as `withinViewport(elem, 'bottom')`
 */
function bottom(element) {
    return (0, index_js_2.withinViewport)(element, 'bottom');
}
exports.bottom = bottom;
/**
 * Test if an element is within the left edge of the viewport
 *
 * @example `left(elem)` is the same as `withinViewport(elem, 'left')`
 */
function left(element) {
    return (0, index_js_2.withinViewport)(element, 'left');
}
exports.left = left;
/**
 * Test if an element is below the top edge of the viewport
 *
 * @example `topAsync(elem)` is the same as `withinViewportAsync(elem, 'top')`
 */
function topAsync(element) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, index_js_1.withinViewportAsync)(element, 'top');
    });
}
exports.topAsync = topAsync;
/**
 * Test if an element is within the right edge of the viewport
 *
 * @example `rightAsync(elem)` is the same as `withinViewportAsync(elem, 'right')`
 */
function rightAsync(element) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, index_js_1.withinViewportAsync)(element, 'right');
    });
}
exports.rightAsync = rightAsync;
/**
 * Test if an element is above the bottom edge of the viewport
 *
 * @example `bottomAsync(elem)` is the same as `withinViewportAsync(elem, 'bottom')`
 */
function bottomAsync(element) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, index_js_1.withinViewportAsync)(element, 'bottom');
    });
}
exports.bottomAsync = bottomAsync;
/**
 * Test if an element is within the left edge of the viewport
 *
 * @example `leftAsync(elem)` is the same as `withinViewportAsync(elem, 'left')`
 */
function leftAsync(element) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, index_js_1.withinViewportAsync)(element, 'left');
    });
}
exports.leftAsync = leftAsync;
//# sourceMappingURL=index.js.map