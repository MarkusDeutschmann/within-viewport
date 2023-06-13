import { MultipleSides, Side, UserOptions } from './types.js';
export type SyncConfig = {
    container: HTMLElement | Window;
} & {
    [b in Side]: number | 'ignore';
};
export type AsyncConfig = {
    container: HTMLElement | Document;
} & {
    [b in Side]: number | 'ignore';
};
/**
 * Combines user options with default settings to produce a complete configuration object
 *
 * Reason for overloading: basically, the async method cannot work with `container:window`, and the sync method cannot work with `container:document`, and I want each of those methods to receive the correct types, so each overload has a different return type.
 */
export declare function getConfig(methodType: 'sync', elem: HTMLElement, userOptions?: Side | MultipleSides | Partial<UserOptions>): SyncConfig;
export declare function getConfig(methodType: 'async', elem: HTMLElement, userOptions?: Side | MultipleSides | Partial<UserOptions>): AsyncConfig;
//# sourceMappingURL=options.d.ts.map