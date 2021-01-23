"use strict";
/**
 * Created by user on 2018/6/29/029.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function envVal(val) {
    const t = typeof val;
    const s = String(val).toLowerCase().trim();
    if (t === 'boolean') {
        return val;
    }
    else if (t === 'undefined' || s === 'undefined') {
        return void (0);
    }
    else if (val === null || s === 'null') {
        return null;
    }
    else if (t === 'number') {
        return val;
    }
    if (t === 'string') {
        if (s === '1') {
            return 1;
        }
        else if (s === '0') {
            return 0;
        }
        else if (val === '') {
            return '';
        }
        else if (s === '') {
            return val;
        }
        else if (/^(?:yes|on|true|enabled)$/i.test(s)) {
            return true;
        }
        else if (/^(?:no|off|false|disabled)$/i.test(s)) {
            return false;
        }
        if (/^\-?[1-9]\d*(?:\.\d+)?$/i.test(s)) {
            let n = Number(s);
            return Number.isNaN(n) ? val : n;
        }
    }
    return val;
}
exports.envVal = envVal;
function envBool(val, mode2 = true) {
    let v = envVal(val);
    if (mode2) {
        let t = typeof v;
        return (t === 'number'
            || t === 'boolean') ? v : false;
    }
    return typeof v === 'string' ? false : v;
}
exports.envBool = envBool;
exports.default = envBool;
// @ts-ignore
exports = Object.assign(envBool, exports);
Object.defineProperty(exports, "__esModule", { value: true });
