/**
 * Created by user on 2018/6/26/026.
 */
import { IOptions } from './types';
export * from './types';
export declare const SYM_DEBUG_CONSOLE: unique symbol;
export declare const SYM_CHALK: unique symbol;
export declare const SYM_CONSOLE: unique symbol;
export declare const SYM_EVENT: unique symbol;
export declare const SYM_DATA: unique symbol;
export declare const defaultColors: Partial<IOptions["colors"]>;
declare const _default: typeof import("./val");
export default _default;
