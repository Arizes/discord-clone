"use strict";
/**
 * Created by user on 2018/7/2/002.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNodeJs = void 0;
function isNodeJs() {
    try {
        require('console');
        // @ts-ignore
        if (console._stdout && console._stderr) {
            return true;
        }
    }
    catch (e) {
    }
    return false;
}
exports.isNodeJs = isNodeJs;
exports.default = isNodeJs;
//# sourceMappingURL=chk.js.map