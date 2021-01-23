/**
 * Created by user on 2019/12/15.
 */
import LocalOut from './index';
import { SpawnASyncReturnsPromise } from 'cross-spawn-extra';
import Bluebird from 'bluebird';
export interface IProviderConnectData {
    hostname: string;
    port: string;
}
export declare abstract class AbstractProvider {
    protected context: LocalOut<any>;
    static desc: string;
    protected child?: SpawnASyncReturnsPromise["child"];
    constructor(context: LocalOut<any>);
    protected _constructor(): void;
    abstract connect(): Bluebird<IProviderConnectData>;
    close(): void;
}
export default AbstractProvider;
