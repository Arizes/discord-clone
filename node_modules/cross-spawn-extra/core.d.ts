/**
 * Created by user on 2018/9/25/025.
 */
/// <reference types="node" />
import CallableInstance from 'callable-instance2';
import CrossSpawn from 'cross-spawn';
import Bluebird from 'bluebird';
import child_process from 'child_process';
import stream from 'stream';
export { Bluebird };
import { SpawnOptions, SpawnSyncOptions, SpawnSyncOptionsWithBufferEncoding, SpawnSyncOptionsWithStringEncoding } from "./type";
export declare const SYM_CROSS_SPAWN: unique symbol;
export declare const SYM_BLUEBIRD: unique symbol;
export { SpawnOptions, SpawnSyncOptions, SpawnSyncOptionsWithBufferEncoding, SpawnSyncOptionsWithStringEncoding, };
export declare type SpawnSyncReturns<T = Buffer> = child_process.SpawnSyncReturns<T> & {
    /**
     * fake async api, this not same as async return
     */
    then<R>(fn: (child: child_process.SpawnSyncReturns<T>) => R): Bluebird<R>;
    error: ISpawnASyncError;
};
export declare type SpawnASyncReturns<T = Buffer> = child_process.SpawnSyncReturns<T> & child_process.ChildProcess & {
    error: ISpawnASyncError;
    status: number;
    /**
     * a buffer list by realy order of output (include stdout , stderr)
     */
    _output?: Buffer[];
    /**
     * source stderr stream
     */
    stderrStream?: stream.Readable;
    /**
     * source stdout stream
     */
    stdoutStream?: stream.Readable;
};
export declare type SpawnASyncReturnsPromise<T = Buffer> = Bluebird<SpawnASyncReturns<T>> & {
    /**
     * can do anything as u want like source spawn do
     */
    child?: SpawnASyncReturns<T>;
};
/**
 * Error Class
 */
export interface ISpawnASyncError<R = SpawnASyncReturns> extends Error {
    message: string;
    code?: string;
    errno?: string;
    syscall?: string;
    path?: string;
    spawnargs?: string[];
    child?: R;
}
interface CallableInstance<R = SpawnASyncReturnsPromise> {
    (command: string, args?: string[], options?: SpawnOptions): SpawnASyncReturnsPromise;
    <T = Buffer>(command: string, args?: string[], options?: SpawnOptions): SpawnASyncReturnsPromise<T>;
    <T = Buffer>(command: string, args?: any[], options?: SpawnOptions): SpawnASyncReturnsPromise<T>;
    <T = Buffer>(command: string, args?: any[]): SpawnASyncReturnsPromise<T>;
    <T = Buffer>(command: string): SpawnASyncReturnsPromise<T>;
    (command: string, args?: string[], options?: SpawnOptions): SpawnASyncReturnsPromise;
    (command: string, args?: any[], options?: SpawnOptions): SpawnASyncReturnsPromise;
    (command: string, args?: any[]): SpawnASyncReturnsPromise;
    (command: string): SpawnASyncReturnsPromise;
    <T = Buffer>(...argv: any[]): SpawnASyncReturnsPromise<T>;
    (...argv: any[]): SpawnASyncReturnsPromise;
}
export declare class CrossSpawnExtra<R = SpawnASyncReturnsPromise> extends CallableInstance<R> {
    protected readonly [SYM_CROSS_SPAWN]: typeof CrossSpawn;
    protected readonly [SYM_BLUEBIRD]: typeof Bluebird;
    readonly default: this;
    /**
     * sync version of child_process.spawnSync(command[, args][, options])
     */
    sync(command: string): SpawnSyncReturns<Buffer>;
    sync(command: string, options?: SpawnSyncOptionsWithStringEncoding): SpawnSyncReturns<string>;
    sync(command: string, options?: SpawnSyncOptionsWithBufferEncoding): SpawnSyncReturns<Buffer>;
    sync(command: string, options?: SpawnSyncOptions): SpawnSyncReturns<Buffer>;
    sync(command: string, args?: Array<string>, options?: SpawnSyncOptionsWithStringEncoding): SpawnSyncReturns<string>;
    sync(command: string, args?: Array<string>, options?: SpawnSyncOptionsWithBufferEncoding): SpawnSyncReturns<Buffer>;
    sync(command: string, args?: Array<string>, options?: SpawnSyncOptions): SpawnSyncReturns<Buffer>;
    sync<T = Buffer>(...argv: any[]): SpawnSyncReturns<T>;
    /**
     * async version of child_process.spawn(command[, args][, options])
     */
    async<T = Buffer>(command: string, args?: string[], options?: SpawnOptions): SpawnASyncReturnsPromise<T>;
    async<T = Buffer>(command: string, args?: any[], options?: SpawnOptions): SpawnASyncReturnsPromise<T>;
    async<T = Buffer>(...argv: any[]): SpawnASyncReturnsPromise<T>;
    spawnSync: {
        (command: string): SpawnSyncReturns<Buffer>;
        (command: string, options?: SpawnSyncOptionsWithStringEncoding): SpawnSyncReturns<string>;
        (command: string, options?: SpawnSyncOptionsWithBufferEncoding): SpawnSyncReturns<Buffer>;
        (command: string, options?: SpawnSyncOptions): SpawnSyncReturns<Buffer>;
        (command: string, args?: Array<string>, options?: SpawnSyncOptionsWithStringEncoding): SpawnSyncReturns<string>;
        (command: string, args?: Array<string>, options?: SpawnSyncOptionsWithBufferEncoding): SpawnSyncReturns<Buffer>;
        (command: string, args?: Array<string>, options?: SpawnSyncOptions): SpawnSyncReturns<Buffer>;
        <T = Buffer>(...argv: any[]): SpawnSyncReturns<T>;
    };
    spawn: {
        <T = Buffer>(command: string, args?: string[], options?: SpawnOptions): SpawnASyncReturnsPromise<T>;
        <T_1 = Buffer>(command: string, args?: any[], options?: SpawnOptions): SpawnASyncReturnsPromise<T_1>;
        <T_2 = Buffer>(...argv: any[]): SpawnASyncReturnsPromise<T_2>;
    };
    /**
     * create new CrossSpawnExtra with Custom CrossSpawn, Promise
     */
    constructor(cs?: typeof CrossSpawn, p?: typeof Bluebird | typeof Promise);
    /**
     * create new CrossSpawnExtra with Custom CrossSpawn, Promise
     */
    static use(cs?: typeof CrossSpawn, p?: typeof Bluebird | typeof Promise): CrossSpawnExtra;
    static use<R = SpawnASyncReturnsPromise>(cs?: typeof CrossSpawn, p?: typeof Bluebird | typeof Promise): CrossSpawnExtra<R>;
    static use(cs?: any, p?: any): CrossSpawnExtra;
    static use<R = SpawnASyncReturnsPromise>(cs?: any, p?: any): CrossSpawnExtra<R>;
    /**
     * create new CrossSpawnExtra with Custom CrossSpawn, Promise
     */
    use(cs?: typeof CrossSpawn, p?: typeof Bluebird | typeof Promise): CrossSpawnExtra;
    use<R = SpawnASyncReturnsPromise>(cs?: typeof CrossSpawn, p?: typeof Bluebird | typeof Promise): CrossSpawnExtra<R>;
    use(cs?: any, p?: any): CrossSpawnExtra;
    use<R = SpawnASyncReturnsPromise>(cs?: any, p?: any): CrossSpawnExtra<R>;
    core<T>(command: string, args?: string[], options?: SpawnOptions): child_process.ChildProcess;
    core<T>(...argv: any[]): child_process.ChildProcess;
    get coreSync(): typeof child_process.spawnSync;
    /**
     * stripAnsi a Buffer or string
     */
    static stripAnsi(input: Buffer, toStr: true): string;
    static stripAnsi(input: Buffer, toStr?: boolean): Buffer;
    static stripAnsi(input: string, toStr?: boolean): string;
    static stripAnsi<T>(input: T, toStr: true): string;
    static stripAnsi<T>(input: T, toStr?: boolean): T;
}
export default CrossSpawnExtra;
