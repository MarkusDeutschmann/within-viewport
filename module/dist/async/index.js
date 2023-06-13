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
Object.defineProperty(exports, "__esModule", { value: true });
exports.withinViewportAsync = void 0;
const options_js_1 = require("../common/options.js");
const options_js_2 = require("./options.js");
/**
 * Determines whether an element is within the viewport
 * @param  {HTMLElement}      elem           DOM Element (required)
 * @param  {String | Object}  userOptions    Optional settings
 * @return {Promise<Boolean>}                Whether the element was completely within the viewport
 */
function withinViewportAsync(elem, userOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            const config = (0, options_js_1.getConfig)('async', elem, userOptions);
            const opts = (0, options_js_2.getIntersectionObserverOptions)('loose', config, resolve, elem);
            new IntersectionObserver(...opts).observe(elem);
        });
    });
}
exports.withinViewportAsync = withinViewportAsync;
//# sourceMappingURL=index.js.map