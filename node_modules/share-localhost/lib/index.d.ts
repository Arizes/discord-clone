/**
 * Created by user on 2019/12/14.
 */
/// <reference types="bluebird" />
/// <reference types="node" />
import { EventEmitter } from 'events';
import AbstractProvider from './AbstractProvider';
import { Console } from 'debug-color2';
import { ITSPartialWith } from 'ts-type';
interface ILocalOutConstructor<P extends AbstractProvider> {
    portOnline: number;
    hostnameOnline: string;
    /**
     * local server port
     */
    port: number;
    /**
     * local server hostname
     */
    hostname: string;
    debug: boolean;
    provider: P;
}
export declare type ILocalOutConstructorParams<P extends AbstractProvider> = ILocalOutConstructorParams2<P>;
export declare type IConstructorClass<T> = {
    new (...argv: any): T;
};
export interface ILocalOutConstructorParams1<P extends AbstractProvider> extends Partial<ILocalOutConstructor<P>> {
    provider?: P;
    providerClass?: never;
}
export interface ILocalOutConstructorParams2<P extends AbstractProvider> extends Partial<ILocalOutConstructor<P>> {
    /**
     * @deprecated
     */
    provider?: never;
    providerClass?: IConstructorClass<P>;
}
export declare enum EnumLocalOutEvent {
    Constructor = "constructor",
    Connect = "connect"
}
export declare class LocalOut<P extends AbstractProvider> extends EventEmitter implements ITSPartialWith<ILocalOutConstructor<P>, 'hostnameOnline'> {
    portOnline: number;
    hostnameOnline?: string;
    port: number;
    hostname: string;
    provider: P;
    providerClass: IConstructorClass<P>;
    _debugConsole: Console;
    constructor(config?: ILocalOutConstructorParams<P>);
    protected _constructor(config: ILocalOutConstructorParams<P>): void;
    get debug(): boolean;
    set debug(bool: boolean);
    setPort(port: number): this;
    /**
     * @private
     */
    on(event: EnumLocalOutEvent, listener: (...args: any[]) => void): this;
    /**
     * @private
     */
    once(event: EnumLocalOutEvent, listener: (...args: any[]) => void): this;
    /**
     * @private
     */
    emit(event: EnumLocalOutEvent, ...args: any[]): boolean;
    protected _createProvider(): P;
    connect(): import("bluebird")<import("./AbstractProvider").IProviderConnectData>;
    close(): void;
}
export default LocalOut;
