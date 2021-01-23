/**
 * Created by user on 2019/6/11.
 */
/**
 * https://stackoverflow.com/questions/49285864/is-there-a-valueof-similar-to-keyof-in-typescript
 */
import { ITSMapLike } from '../generic';
import { ITSIteratorLazy } from './typeof';
export declare type ITSValueOf<T> = T[keyof T];
export declare type ITSKeyOf<T> = keyof T;
export declare type ITSPickValueOf<T, K extends keyof T> = ITSValueOf<Pick<T, K>>;
export declare type ITSValueOfIterator<T extends ITSIteratorLazy<any>> = (T extends Iterator<infer U> ? U : T extends IteratorResult<infer U> ? U : any)[];
export declare type ITSValueOfMap<T extends ITSMapLike<any, any>> = T extends ITSMapLike<any, infer U> ? U[] : any[];
