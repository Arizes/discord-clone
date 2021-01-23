/**
 * Created by user on 2018/6/29/029.
 */
import { Level } from 'chalk';
import Console2, { IConsoleWithStream, IChalk } from './node';
export declare function isForceColor(env?: any): boolean | number | Level;
export declare function isSupportsColor(): Level;
export declare function createFnChalkByConsole<CI extends Console2>(console: CI): <R, C extends Console2 = CI>(cb: (chalk: C["chalk"], _console: C) => R, _console?: C) => R;
export declare function chalkByConsoleMaybe<CI extends Console2>(console?: CI): IChalk;
export declare function createChalkStyleLog<CI extends Console2>(console: CI, name: string, failBack?: string): (...argv: any[]) => any;
export declare function hasConsoleStream(target: IConsoleWithStream<object>): boolean;
declare const _default: typeof import("./util");
export default _default;
