/**
 * Created by user on 2019/6/11.
 */
export declare type ITSIteratorLazy<T extends Iterator<any> | IteratorResult<any>> = T extends IteratorResult<infer U> ? IteratorResult<U> : T extends Iterator<infer U> ? Iterator<U> : T;
export declare type ITSTypeOfArrayLike<T extends any[]> = T extends (infer U)[] ? U : T extends ArrayLike<infer U> ? U : any;
export declare type ITSTypeOfIterator<T extends ITSIteratorLazy<any>> = T extends Iterator<infer U> ? U : T extends IteratorResult<infer U> ? U : any;
