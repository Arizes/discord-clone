/**
 * for Iterator IteratorResult
 */
/**
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
 */
import { ITSMapLike, ITSResolvable, ITSTypeFunction } from '../generic';
export declare type ITSUnpackedReturnType<T extends (...args: any[]) => any> = ITSUnpacked<ReturnType<T>>;
export declare type ITSUnpacked<T> = T extends ITSMapLike<any, infer U> ? U : T extends (infer U)[] ? U : T extends ArrayLike<infer U> ? U : T extends Iterator<infer U> ? U : T extends IteratorResult<infer U> ? U : T extends ITSTypeFunction<infer U> ? U : T extends ITSResolvable<infer U> ? U : T;
export declare type ITSUnpackedPromiseLike<T> = T extends ITSResolvable<infer U> ? U : T;
export declare type ITSUnpackedIteratorLike<T extends Iterator<any> | IteratorResult<any>> = T extends Iterator<infer U> ? ITSUnpacked<U> : T extends IteratorResult<infer U> ? ITSUnpacked<U> : T;
export declare type ITSUnpackedArrayLike<T extends ArrayLike<any> | any[]> = T extends (infer U)[] ? ITSUnpacked<U> : T extends readonly (infer U)[] ? ITSUnpacked<U> : T extends ArrayLike<infer U> ? ITSUnpacked<U> : T;
export declare type ITSUnpackedThisFunction<T extends (...args: any[]) => any> = T extends (this: infer R, ...args: any[]) => any ? R : unknown;
