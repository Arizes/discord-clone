import Bluebird from 'bluebird';
import { AbstractProvider, IProviderConnectData } from '../AbstractProvider';
export declare class BaseProvider extends AbstractProvider {
    static desc: string;
    protected _cache: {
        SERVICES: string[];
        SERVICES_CONTAINS: string[];
        ID_SERVICES: number;
    };
    protected _constructor(): void;
    connect(): Bluebird<IProviderConnectData>;
    protected _provider(ID_SERVICES: number): string;
    protected _ssh_args(ID_SERVICES: number): string[];
    protected _exec(ID_SERVICES: number): Bluebird<IProviderConnectData>;
}
export default BaseProvider;
