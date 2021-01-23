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
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultColors = exports.SYM_DATA = exports.SYM_EVENT = exports.SYM_CONSOLE = exports.SYM_CHALK = exports.SYM_DEBUG_CONSOLE = void 0;
__exportStar(require("./types"), exports);
exports.SYM_DEBUG_CONSOLE = Symbol.for('DebugConsole');
exports.SYM_CHALK = Symbol.for('chalk');
exports.SYM_CONSOLE = Symbol.for('console');
exports.SYM_EVENT = Symbol.for('event');
exports.SYM_DATA = Symbol.for('data');
exports.defaultColors = {
    error: 'red',
    exception: 'red',
    warn: 'red',
    fail: 'red',
    info: 'cyan',
    debug: 'cyan',
    success: 'green',
    ok: 'green',
};
exports.default = exports;
//# sourceMappingURL=val.js.map