import { determineRootMargin } from './rootMargin.js';
import { strictCallbackAndRootMargin } from './strictCallbackAndRootMargin.js';
export function getIntersectionObserverOptions(mode, config, resolve, elem) {
    if (mode === 'strict' && elem) {
        return strictCallbackAndRootMargin(elem, config, resolve);
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
            rootMargin: determineRootMargin(config, 'loose'),
            root: config.container,
            threshold: 1.0,
        },
    ];
}
//# sourceMappingURL=options.js.map