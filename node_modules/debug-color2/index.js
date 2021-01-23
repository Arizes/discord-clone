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
Object.defineProperty(exports, "__esModule", { value: true });
exports.chalkByConsole = exports.console = exports.Console = exports.Console2 = void 0;
const util_1 = require("./lib/util");
const auto_1 = require("./lib/auto");
Object.defineProperty(exports, "Console2", { enumerable: true, get: function () { return auto_1.Console2; } });
Object.defineProperty(exports, "Console", { enumerable: true, get: function () { return auto_1.Console2; } });
__exportStar(require("./lib/types"), exports);
var util_2 = require("./lib/util");
Object.defineProperty(exports, "createChalkStyleLog", { enumerable: true, get: function () { return util_2.createChalkStyleLog; } });
Object.defineProperty(exports, "hasConsoleStream", { enumerable: true, get: function () { return util_2.hasConsoleStream; } });
Object.defineProperty(exports, "isForceColor", { enumerable: true, get: function () { return util_2.isForceColor; } });
Object.defineProperty(exports, "isSupportsColor", { enumerable: true, get: function () { return util_2.isSupportsColor; } });
Object.defineProperty(exports, "createFnChalkByConsole", { enumerable: true, get: function () { return util_2.createFnChalkByConsole; } });
Object.defineProperty(exports, "chalkByConsoleMaybe", { enumerable: true, get: function () { return util_2.chalkByConsoleMaybe; } });
exports.console = new auto_1.Console2();
exports.chalkByConsole = util_1.createFnChalkByConsole(exports.console);
exports.default = exports.console;
//# sourceMappingURL=index.js.map