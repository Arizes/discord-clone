/**
 * Created by user on 2018/7/2/002.
 */
export { InspectOptions } from 'util';
import { Console2 } from './lib/auto';
export * from './lib/types';
export { createChalkStyleLog, hasConsoleStream, isForceColor, isSupportsColor, createFnChalkByConsole, chalkByConsoleMaybe } from './lib/util';
export { Console2, Console2 as Console };
export declare const console: Console2;
export declare const chalkByConsole: <R, C extends Console2 = Console2>(cb: (chalk: C["chalk"], _console: C) => R, _console?: C) => R;
declare const _default: Console2;
export default _default;
