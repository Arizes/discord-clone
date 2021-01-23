import { ITSArrayListMaybeReadonly } from './type/base';
import { ITSUnpackedReturnType } from './helper/unpacked';
/**
 * copy current function with Parameters and return to new value
 *
 * not support overload
 *
 * @example
 * declare function f(a: number): number
 * declare let c: ITSOverwriteReturnType<typeof f, string>;
 * // c = (a: number) => string
 */
export declare type ITSOverwriteReturnType<T extends (...args: any[]) => any, R extends unknown> = (...args: Parameters<T>) => R;
export declare type ITSWrapFunctionPromiseLike<T extends (...args: any[]) => any> = (...args: Parameters<T>) => PromiseLike<ITSUnpackedReturnType<T>>;
export declare type ITSWrapFunctionPromise<T extends (...args: any[]) => any> = (...args: Parameters<T>) => Promise<ITSUnpackedReturnType<T>>;
/**
 * @deprecated
 */
export declare type ITSExtendsOf<T, U> = Extract<T, U>;
export declare type ITSKeyOfArray<T extends ITSArrayListMaybeReadonly<any>> = Exclude<keyof T, symbol | string>;
export declare type ITSValueOfArray<T extends ITSArrayListMaybeReadonly<any>> = T[ITSKeyOfArray<T>];
