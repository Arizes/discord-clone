/**
 * re-export build-in type
 * for some time ide is stupid can't found types
 */
export declare type ITSParameters<T extends (...args: any[]) => any> = Parameters<T>;
export declare type ITSConstructorParameters<T extends new (...args: any[]) => any> = ConstructorParameters<T>;
export declare type ITSPartial<T> = Partial<T>;
export declare type ITSPick<T, K extends keyof T> = Pick<T, K>;
export declare type ITSInstanceType<T extends new (...args: any[]) => any> = InstanceType<T>;
export declare type ITSClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
export declare type ITSPropertyDecorator = (target: object, propertyKey: string | symbol) => void;
export declare type ITSMethodDecorator = <T>(target: object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
export declare type ITSParameterDecorator = (target: object, propertyKey: string | symbol, parameterIndex: number) => void;
/**
 * Exclude null and undefined from T
 */
export declare type ITSNonNullable<T> = T extends null | undefined ? never : T;
