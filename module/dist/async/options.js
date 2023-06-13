"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIntersectionObserverOptions = void 0;
const rootMargin_js_1 = require("./rootMargin.js");
const strictCallbackAndRootMargin_js_1 = require("./strictCallbackAndRootMargin.js");
function getIntersectionObserverOptions(mode, config, resolve, elem) {
    if (mode === 'strict' && elem) {
        return (0, strictCallbackAndRootMargin_js_1.strictCallbackAndRootMargin)(elem, config, resolve);
    }
    return [
        (entries, observer) => {
            entries.forEach((entry) => {
                observer.disconnect();
                const { isIntersecting } = entry;
                resolve(isIntersecting);
                return;
            });
        },
        {
            rootMargin: (0, rootMargin_js_1.determineRootMargin)(config, 'loose'),
            root: config.container,
            threshold: 1.0,
        },
    ];
}
exports.getIntersectionObserverOptions = getIntersectionObserverOptions;
//# sourceMappingURL=options.js.map