/**
 * Created by user on 2020/6/11.
 */
/// <reference types="node" />
import { Chalk, Level, ChalkOptions, Chalk as IChalk, Level as ILevel, ChalkOptions as IChalkOptions } from 'chalk';
import { DateTime } from 'luxon';
import { InspectOptions } from "util";
export type { InspectOptions } from 'util';
export type { Chalk, Level, ChalkOptions };
export type { IChalk, ILevel, IChalkOptions };
import IWriteStream = NodeJS.WriteStream;
export type { IWriteStream };
export declare type IOptionsColorsProp = 'debug' | 'error' | 'info' | 'log' | 'trace' | 'warn' | 'success' | 'ok' | 'exception' | 'fail';
export declare type IStylesFnNames = 'rgb' | 'hsl' | 'hsv' | 'hwb' | 'bgHex' | 'bgKeyword' | 'bgRgb' | 'bgHsl' | 'bgHsv' | 'bgHwb' | 'hex' | 'keyword';
export declare type IStylesColorNames = Exclude<keyof IStyles, IStylesFnNames>;
export interface IStyles {
    rgb(r: number, g: number, b: number): this;
    hsl(h: number, s: number, l: number): this;
    hsv(h: number, s: number, v: number): this;
    hwb(h: number, w: number, b: number): this;
    bgHex(color: string): this;
    bgKeyword(color: string): this;
    bgRgb(r: number, g: number, b: number): this;
    bgHsl(h: number, s: number, l: number): this;
    bgHsv(h: number, s: number, v: number): this;
    bgHwb(h: number, w: number, b: number): this;
    hex(color: string): this;
    keyword(color: string): this;
    readonly reset: this;
    readonly bold: this;
    readonly dim: this;
    readonly italic: this;
    readonly underline: this;
    readonly inverse: this;
    readonly hidden: this;
    readonly strikethrough: this;
    readonly visible: this;
    readonly black: this;
    readonly red: this;
    readonly green: this;
    readonly yellow: this;
    readonly blue: this;
    readonly magenta: this;
    readonly cyan: this;
    readonly white: this;
    readonly gray: this;
    readonly grey: this;
    readonly blackBright: this;
    readonly redBright: this;
    readonly greenBright: this;
    readonly yellowBright: this;
    readonly blueBright: this;
    readonly magentaBright: this;
    readonly cyanBright: this;
    readonly whiteBright: this;
    readonly bgBlack: this;
    readonly bgRed: this;
    readonly bgGreen: this;
    readonly bgYellow: this;
    readonly bgBlue: this;
    readonly bgMagenta: this;
    readonly bgCyan: this;
    readonly bgWhite: this;
    readonly bgBlackBright: this;
    readonly bgRedBright: this;
    readonly bgGreenBright: this;
    readonly bgYellowBright: this;
    readonly bgBlueBright: this;
    readonly bgMagentaBright: this;
    readonly bgCyanBright: this;
    readonly bgWhiteBright: this;
}
export interface IOptions {
    /**
     * enable log display or not
     */
    enabled?: boolean;
    /**
     * show label string
     */
    label?: boolean | string[];
    /**
     * show time label
     */
    time?: boolean;
    /**
     * allow change timeFormat
     *
     * @default '[HH:mm:ss.SSS]'
     */
    timeFormat?: string;
    timeFormatFn?<T extends unknown[]>(data: Parameters<IOptions["labelFormatFn"]>[0] & {
        failBackTimeFormat: string;
        date: DateTime;
    }): string;
    /**
     * allow change labelFormat
     *
     * @default `[${data.name.toString().toUpperCase()}]`
     */
    labelFormatFn?<T extends unknown[]>(data: {
        name: string;
        argv?: T;
        failBack: string;
    }): string;
    /**
     * set default inspectOptions
     */
    inspectOptions?: InspectOptions;
    chalkOptions?: ChalkOptions;
    /**
     * set color style
     */
    colors?: Record<IOptionsColorsProp | string, Chalk | IChalkLike | IStylesColorNames>;
    /**
     * check is node.js console
     */
    readonly stream?: boolean;
}
export interface IChalkLike {
    (string: any): string;
    (string: any, ...argv: any[]): string;
    (...argv: any[]): string;
}
export declare type IConsoleWithStream<T extends object = Console> = T & {
    _stdout?: IWriteStream;
    _stderr?: IWriteStream;
};
export declare type IStylesNameWithoutFn = Exclude<keyof IStyles, IStylesFnNames>;
export declare type IStylesNamesWithoutFn = IStylesNameWithoutFn[];
