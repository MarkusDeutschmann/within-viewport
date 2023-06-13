import { sides } from '../common/sides.js';
/**
 * Determines the rootMargin value for IntersectionObserver
 *
 * Loose mode uses very large (but ultimately arbitrary) values for sides that should be ignored.
 *
 * Strict mode calculates these values by measuring the screen and the target element, but that is costly and it
 * seems very unlikely that these arbitrary values will produce inaccurate results for our purposes.
 */
export function determineRootMargin(config, mode) {
    const ignoreValue = mode === 'loose' ? -9999999 : 0;
    return sides
        .map((side) => {
        const value = config[side];
        return `${-1 * (value === 'ignore' ? ignoreValue : value)}px`;
    })
        .join(' ');
}
//# sourceMappingURL=rootMargin.js.map