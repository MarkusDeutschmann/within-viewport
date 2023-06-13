import { Config } from '../common/types.js';
/**
 * Determines the rootMargin value for IntersectionObserver
 *
 * Loose mode uses very large (but ultimately arbitrary) values for sides that should be ignored.
 *
 * Strict mode calculates these values by measuring the screen and the target element, but that is costly and it
 * seems very unlikely that these arbitrary values will produce inaccurate results for our purposes.
 */
export declare function determineRootMargin(config: Config, mode: 'loose' | 'strict'): IntersectionObserverInit['rootMargin'];
//# sourceMappingURL=rootMargin.d.ts.map