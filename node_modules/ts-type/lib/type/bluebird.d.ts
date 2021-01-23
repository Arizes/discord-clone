/**
 * Created by user on 2019/5/17.
 */
import Bluebird from 'bluebird';
import { ITSUnpackedReturnType, ITSKeyOfRecordExtractToKey, ITSUnpackedPromiseLike } from '..';
export declare type IBluebird<T> = Bluebird<T>;
export declare type ITSBluebird<T> = Bluebird<T>;
export declare type ITSWrapFunctionBluebird<T extends (...args: any[]) => any> = (...args: Parameters<T>) => IBluebird<ITSUnpackedReturnType<T>>;
export declare type ITSBluebirdPromisifyAll<T, K extends ITSKeyOfRecordExtractToKey<T, Function> = ITSKeyOfRecordExtractToKey<T, Function>> = Omit<T, K> & {
    [P in K]: (...argv: Parameters<T[P]>) => IBluebird<ITSUnpackedPromiseLike<ReturnType<T[P]>>>;
};
export declare type ITSPromisifyAll<T, K extends ITSKeyOfRecordExtractToKey<T, Function> = ITSKeyOfRecordExtractToKey<T, Function>> = Omit<T, K> & {
    [P in K]: (...argv: Parameters<T[P]>) => Promise<ITSUnpackedPromiseLike<ReturnType<T[P]>>>;
};
export declare type ITSResultArrayToBluebirdInspection<T> = T extends [infer T1, infer T2, infer T3, infer T4, infer T5] ? [Bluebird.Inspection<T1>, Bluebird.Inspection<T2>, Bluebird.Inspection<T3>, Bluebird.Inspection<T4>, Bluebird.Inspection<T5>] : T extends [infer T1, infer T2, infer T3, infer T4] ? [Bluebird.Inspection<T1>, Bluebird.Inspection<T2>, Bluebird.Inspection<T3>, Bluebird.Inspection<T4>] : T extends [infer T1, infer T2, infer T3] ? [Bluebird.Inspection<T1>, Bluebird.Inspection<T2>, Bluebird.Inspection<T3>] : T extends [infer T1, infer T2] ? [Bluebird.Inspection<T1>, Bluebird.Inspection<T2>] : T extends [infer T1] ? [Bluebird.Inspection<T1>] : T extends (infer R)[] ? Bluebird.Inspection<R>[] : never;
