import BaseProvider from './baseProvider';
export declare class ServeoProvider extends BaseProvider {
    static desc: string;
    protected _constructor(): void;
    protected _ssh_args(ID_SERVICES: number): string[];
}
export default BaseProvider;
