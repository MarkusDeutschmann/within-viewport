import { MultipleSides, Side, UserOptions } from '../common/types.js';
/**
 * Determines whether an element is within the viewport
 * @param  {HTMLElement}      elem           DOM Element (required)
 * @param  {String | Object}  userOptions    Optional settings
 * @return {Promise<Boolean>}                Whether the element was completely within the viewport
 */
export declare function withinViewportAsync(elem: HTMLElement, userOptions?: Side | MultipleSides | Partial<UserOptions>): Promise<boolean>;
//# sourceMappingURL=index.d.ts.map