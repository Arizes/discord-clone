/**
 * Created by user on 2018/6/29/029.
 */
export declare function envVal(val: undefined | 'undefined'): undefined;
export declare function envVal(val: null | 'null'): null;
export declare function envVal(val: boolean): boolean;
export declare function envVal(val: 'no' | 'off' | 'false' | 'disabled'): false;
export declare function envVal(val: 'yes' | 'on' | 'true' | 'enabled'): true;
export declare function envVal(val: '1'): 1;
export declare function envVal(val: '0'): 0;
export declare function envVal(val: number): number;
export declare function envVal(val: string): string | number;
export declare function envVal<T>(val: T): T;
export declare function envBool(val: undefined | 'undefined'): undefined;
export declare function envBool(val: null | 'null'): null;
export declare function envBool(val: boolean): boolean;
export declare function envBool(val: 'no' | 'off' | 'false' | 'disabled'): false;
export declare function envBool(val: 'yes' | 'on' | 'true' | 'enabled'): true;
export declare function envBool(val: '1'): 1;
export declare function envBool(val: '0'): 0;
export declare function envBool(val: number): number;
export declare function envBool<T>(val: T, mode2: true): number | boolean;
export declare function envBool<T>(val: T, mode2?: boolean): T | number | boolean;
export default envBool;
