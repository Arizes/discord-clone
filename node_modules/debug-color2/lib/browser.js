"use strict";
/**
 * Created by user on 2018/7/2/002.
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
exports.Console2 = void 0;
const node_1 = __importDefault(require("./node"));
__exportStar(require("./node"), exports);
class Console2 extends node_1.default {
    constructor(target = console, options) {
        super(target, options);
        this.enabledColor = false;
    }
}
exports.Console2 = Console2;
exports.default = Console2;
//# sourceMappingURL=browser.js.map