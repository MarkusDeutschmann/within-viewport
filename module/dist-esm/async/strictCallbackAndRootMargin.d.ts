import { AsyncConfig } from '../common/options.js';
/**
 * Sets the root margin by measuring the screen and the target element, which can be costly
 */
export declare function strictCallbackAndRootMargin(elem: HTMLElement, config: AsyncConfig, resolve: (value: boolean | PromiseLike<boolean>) => void, debug?: boolean): [callback: IntersectionObserverCallback, options?: IntersectionObserverInit];
//# sourceMappingURL=strictCallbackAndRootMargin.d.ts.map