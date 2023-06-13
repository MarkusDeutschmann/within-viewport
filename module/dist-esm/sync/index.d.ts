import { MultipleSides, Side, UserOptions } from '../common/types.js';
declare global {
    interface Window {
        scrollTop: HTMLElement['scrollTop'];
        scrollLeft: HTMLElement['scrollLeft'];
        getBoundingClientRect: HTMLElement['getBoundingClientRect'];
    }
}
/**
 * Determines whether an element is within the viewport
 * @param  {Object}  elem           DOM Element (required)
 * @param  {Object}  userOptions    Optional settings
 * @return {Boolean}                Whether the element was completely within the viewport
 */
export declare function withinViewport(elem: HTMLElement, userOptions?: Side | MultipleSides | Partial<UserOptions>): boolean;
//# sourceMappingURL=index.d.ts.map