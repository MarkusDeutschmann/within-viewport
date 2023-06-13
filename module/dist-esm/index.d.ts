import { withinViewport } from './sync/index.js';
export { withinViewportAsync } from './async/index.js';
export { withinViewport } from './sync/index.js';
/**
 * Temporary shim for the old function name—please switch to the camelCase `withinViewport` name.
 *
 * @deprecated
 */
export declare function withinviewport(...args: Parameters<typeof withinViewport>): boolean;
/**
 * Shortcut methods for each side of the viewport
 */
/**
 * Test if an element is below the top edge of the viewport
 *
 * @example `topAsync(elem)` is the same as `withinViewport(elem, 'top')`
 */
export declare function top(element: HTMLElement): boolean;
/**
 * Test if an element is within the right edge of the viewport
 *
 * @example `right(elem)` is the same as `withinViewport(elem, 'right')`
 */
export declare function right(element: HTMLElement): boolean;
/**
 * Test if an element is above the bottom edge of the viewport
 *
 * @example `bottom(elem)` is the same as `withinViewport(elem, 'bottom')`
 */
export declare function bottom(element: HTMLElement): boolean;
/**
 * Test if an element is within the left edge of the viewport
 *
 * @example `left(elem)` is the same as `withinViewport(elem, 'left')`
 */
export declare function left(element: HTMLElement): boolean;
/**
 * Test if an element is below the top edge of the viewport
 *
 * @example `topAsync(elem)` is the same as `withinViewportAsync(elem, 'top')`
 */
export declare function topAsync(element: HTMLElement): Promise<boolean>;
/**
 * Test if an element is within the right edge of the viewport
 *
 * @example `rightAsync(elem)` is the same as `withinViewportAsync(elem, 'right')`
 */
export declare function rightAsync(element: HTMLElement): Promise<boolean>;
/**
 * Test if an element is above the bottom edge of the viewport
 *
 * @example `bottomAsync(elem)` is the same as `withinViewportAsync(elem, 'bottom')`
 */
export declare function bottomAsync(element: HTMLElement): Promise<boolean>;
/**
 * Test if an element is within the left edge of the viewport
 *
 * @example `leftAsync(elem)` is the same as `withinViewportAsync(elem, 'left')`
 */
export declare function leftAsync(element: HTMLElement): Promise<boolean>;
//# sourceMappingURL=index.d.ts.map