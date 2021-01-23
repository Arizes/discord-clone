/**
 * Created by user on 2018/6/26/026.
 */
import { IStyles, IStylesFnNames, IStylesNamesWithoutFn } from './types';
export * from './types';
export declare function getStyleNamesByChalk(chalk: any): (keyof IStyles)[];
export declare const styleNames: ("bold" | "inverse" | "hidden" | "visible" | "reset" | "hex" | "rgb" | "hsl" | "hsv" | "hwb" | "bgHex" | "bgKeyword" | "bgRgb" | "bgHsl" | "bgHsv" | "bgHwb" | "keyword" | "dim" | "italic" | "underline" | "strikethrough" | "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray" | "grey" | "blackBright" | "redBright" | "greenBright" | "yellowBright" | "blueBright" | "magentaBright" | "cyanBright" | "whiteBright" | "bgBlack" | "bgRed" | "bgGreen" | "bgYellow" | "bgBlue" | "bgMagenta" | "bgCyan" | "bgWhite" | "bgBlackBright" | "bgRedBright" | "bgGreenBright" | "bgYellowBright" | "bgBlueBright" | "bgMagentaBright" | "bgCyanBright" | "bgWhiteBright")[];
export declare const styleNamesFn: IStylesFnNames[];
export declare const styleNamesWithoutFn: IStylesNamesWithoutFn;
declare const _default: typeof import("./styles");
export default _default;
