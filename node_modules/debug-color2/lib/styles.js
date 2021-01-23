"use strict";
/**
 * Created by user on 2018/6/26/026.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.styleNamesWithoutFn = exports.styleNamesFn = exports.styleNames = exports.getStyleNamesByChalk = void 0;
const chalk_1 = __importDefault(require("chalk"));
__exportStar(require("./types"), exports);
function getStyleNamesByChalk(chalk) {
    const prototype = chalk.constructor.prototype;
    return Object
        .getOwnPropertyNames(prototype)
        .filter(v => v != 'constructor');
}
exports.getStyleNamesByChalk = getStyleNamesByChalk;
exports.styleNames = getStyleNamesByChalk(chalk_1.default);
exports.styleNamesFn = [
    'rgb',
    'hsl',
    'hsv',
    'hwb',
    'bgHex',
    'bgKeyword',
    'bgRgb',
    'bgHsl',
    'bgHsv',
    'bgHwb',
    'hex',
    'keyword',
];
exports.styleNamesWithoutFn = exports.styleNames.filter(name => !exports.styleNamesFn.includes(name));
exports.default = exports;
//# sourceMappingURL=styles.js.map