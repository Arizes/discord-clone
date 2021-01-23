/// <reference types="node" />
export * from 'child_process';
export interface SpawnOptions {
    cwd?: string;
    env?: any;
    stdio?: 'inherit' | 'ignore' | 'pipe' | any | Array<'inherit' | 'ignore' | 'pipe' | any>;
    detached?: boolean;
    uid?: number;
    gid?: number;
    shell?: boolean | string;
    windowsVerbatimArguments?: boolean;
    windowsHide?: boolean;
    /**
     * Strip ANSI escape codes
     */
    stripAnsi?: boolean;
}
export interface SpawnSyncOptions {
    cwd?: string;
    input?: string | Buffer;
    stdio?: 'inherit' | 'ignore' | 'pipe' | any | Array<'inherit' | 'ignore' | 'pipe' | any>;
    env?: any;
    uid?: number;
    gid?: number;
    timeout?: number;
    killSignal?: string;
    maxBuffer?: number;
    encoding?: string;
    shell?: boolean | string;
    windowsHide?: boolean;
    windowsVerbatimArguments?: boolean;
    /**
     * Strip ANSI escape codes
     */
    stripAnsi?: boolean;
}
export interface SpawnSyncOptionsWithStringEncoding extends SpawnSyncOptions {
    encoding: BufferEncoding;
}
export interface SpawnSyncOptionsWithBufferEncoding extends SpawnSyncOptions {
    encoding: string;
}
export interface SpawnSyncReturns<T> {
    pid: number;
    output: string[];
    stdout: T;
    stderr: T;
    status: number;
    signal: string;
    error: Error;
}
