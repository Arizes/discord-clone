/**
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
 *
 * Add readonly and ?
 */
import { ITSUnpackedArrayLike } from './unpacked';
export declare type ITSReadonlyPartial<T> = {
    readonly [P in keyof T]?: T[P];
};
export declare type ITSWriteable<T> = ITSWriteablePick<T, keyof T>;
export declare type ITSWriteablePick<T, K extends keyof T = keyof T> = {
    -readonly [P in K]: T[P];
};
export declare type ITSReadonlyPick<T, K extends keyof T = keyof T> = {
    readonly [P in K]: T[P];
};
export declare type ITSWriteableWith<T, K extends keyof T = keyof T> = Omit<T, K> & ITSWriteablePick<T, K>;
export declare type ITSReadonlyWith<T, K extends keyof T = keyof T> = Omit<T, K> & ITSReadonlyPick<T, K>;
export declare type ITSReadonlyToWriteableArray<T extends readonly any[]> = Omit<T, keyof any[]> & ITSUnpackedArrayLike<T>[] & {
    -readonly [P in number | 'length']: T[P];
};
export declare type ITSWriteableDeep<T, K extends keyof T = keyof T> = T extends Record<any, any> ? {
    -readonly [P in K]: ITSWriteableDeep<T[P]>;
} : T;
export declare type ITSReadonlyDeep<T, K extends keyof T = keyof T> = T extends Record<any, any> ? {
    readonly [P in K]: ITSReadonlyDeep<T[P]>;
} : T;
