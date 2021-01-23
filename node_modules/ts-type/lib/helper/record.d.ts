/**
 * https://stackoverflow.com/a/55479659/4563339
 */
import { ITSExclude2, ITSExtract2 } from './filter';
import { ITSValueOf } from './key-value';
export declare type ITSRecordExcludeToKey<Base, Type> = {
    [Key in keyof Base]: ITSExclude2<Base[Key], Type, Key>;
};
export declare type ITSRecordExtractToKey<Base, Type> = {
    [Key in keyof Base]: ITSExtract2<Base[Key], Type, Key>;
};
export declare type ITSKeyOfRecordExcludeToKey<Base, Type> = ITSValueOf<ITSRecordExcludeToKey<Base, Type>>;
export declare type ITSKeyOfRecordExtractToKey<Base, Type> = ITSValueOf<ITSRecordExtractToKey<Base, Type>>;
/**
 * try check key is partial of record
 */
export declare type ITSKeyIsPartialOfRecord<T, K extends keyof T> = Omit<T, K> extends T ? K : never;
/**
 * returns a union of the readonly keys of an Object.
 *
 * @see https://github.com/type-challenges/type-challenges/blob/master/questions/5-extreme-readonly-keys/README.md
 * @see https://github.com/type-challenges/type-challenges/issues/87
 *
 * @alias ITSGetReadonlyKeys
 *
 * @example
 * interface Todo {
 * readonly title: string
 * readonly description: string
 * completed: boolean
 * }
 * type Keys = ITSKeyOfRecordExtractReadonly<Todo>
 * // expected to be "title" | "description"
 */
export declare type ITSKeyOfRecordExtractReadonly<T> = {
    [K in keyof T]-?: (<U>() => U extends {
        -readonly [P in K]: T[K];
    } ? 1 : 2) extends (<U>() => U extends {
        [P in K]: T[K];
    } ? 1 : 2) ? never : K;
}[keyof T];
export type { ITSKeyOfRecordExtractReadonly as ITSGetReadonlyKeys };
export declare type ITSKeyOfRecordExcludeReadonly<T> = Exclude<keyof T, ITSKeyOfRecordExtractReadonly<T>>;
export declare type ITSKeyIsReadonlyOfRecord<T, K extends ITSKeyOfRecordExtractReadonly<T>> = Extract<K, ITSKeyOfRecordExtractReadonly<T>>;
export declare type ITSKeyIsNotReadonlyOfRecord<T, K extends ITSKeyOfRecordExcludeReadonly<T>> = Extract<K, ITSKeyOfRecordExcludeReadonly<T>>;
