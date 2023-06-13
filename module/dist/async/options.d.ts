import { AsyncConfig } from '../common/options.js';
/**
 * Generates the arguments for IntersectionObserver()
 *
 * Loose mode uses very large (but ultimately arbitrary) values for sides that should be ignored.
 *
 * Strict mode calculates these values by measuring the screen and the target element, but that is costly and it
 * seems very unlikely that these arbitrary values will produce inaccurate results for our purposes.
 */
export declare function getIntersectionObserverOptions(mode: 'strict', config: AsyncConfig, resolve: (value: boolean | PromiseLike<boolean>) => void, elem: HTMLElement): [callback: IntersectionObserverCallback, options: IntersectionObserverInit];
export declare function getIntersectionObserverOptions(mode: 'loose', config: AsyncConfig, resolve: (value: boolean | PromiseLike<boolean>) => void, elem?: HTMLElement): [callback: IntersectionObserverCallback, options: IntersectionObserverInit];
//# sourceMappingURL=options.d.ts.map