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
/// <reference types="node" />
const chalk_1 = __importDefault(require("chalk"));
const luxon_1 = require("luxon");
const util_1 = require("util");
const chk_1 = __importDefault(require("./chk"));
const fill_property_1 = require("./fill-property");
const styles_1 = require("./styles");
const val_1 = require("./val");
const util_2 = require("./util");
__exportStar(require("./types"), exports);
class Console2 {
    constructor(target = console, options) {
        var _a;
        this[val_1.SYM_CONSOLE] = target || console;
        if (options === null || options === void 0 ? void 0 : options.chalkOptions) {
            this[val_1.SYM_CHALK] = chalk_1.default.constructor(options.chalkOptions);
        }
        else {
            this[val_1.SYM_CHALK] = chalk_1.default.constructor();
        }
        // @ts-ignore
        this[val_1.SYM_DATA] = Object.create({
            colors: Object.create(val_1.defaultColors),
        });
        // @ts-ignore
        this[val_1.SYM_DATA].stream = null;
        if (this[val_1.SYM_CONSOLE] instanceof Console2) {
            let target = this[val_1.SYM_CONSOLE].getStream();
            if (target) {
                // @ts-ignore
                this[val_1.SYM_DATA].stream = util_2.hasConsoleStream(target);
            }
            else {
                // @ts-ignore
                this[val_1.SYM_DATA].stream = false;
            }
        }
        else {
            // @ts-ignore
            this[val_1.SYM_DATA].stream = util_2.hasConsoleStream(this[val_1.SYM_CONSOLE]);
        }
        Object.assign(this[val_1.SYM_DATA], options || {});
        this[val_1.SYM_DATA].chalkOptions = this[val_1.SYM_DATA].chalkOptions || {};
        if (this[val_1.SYM_DATA].chalkOptions.enabled) {
            this[val_1.SYM_CHALK].enabled = true;
        }
        else if (this[val_1.SYM_CHALK].enabled && !chk_1.default()) {
            this[val_1.SYM_CHALK].enabled = false;
        }
        else if (!this[val_1.SYM_CHALK].enabled && util_2.isForceColor()) {
            this[val_1.SYM_CHALK].enabled = true;
        }
        if (((_a = this[val_1.SYM_DATA].inspectOptions) === null || _a === void 0 ? void 0 : _a.depth) < 0) {
            this[val_1.SYM_DATA].inspectOptions.depth = null;
        }
    }
    get _stdout() {
        return this.getStream()._stdout;
    }
    get _stderr() {
        return this.getStream()._stderr;
    }
    getStream() {
        if (this[val_1.SYM_DATA].stream) {
            let _stdout;
            let _stderr;
            if (this[val_1.SYM_CONSOLE] instanceof Console2) {
                return this[val_1.SYM_CONSOLE].getStream();
            }
            else {
                // @ts-ignore
                ({ _stdout, _stderr } = this[val_1.SYM_CONSOLE]);
            }
            return {
                _stdout,
                _stderr,
            };
        }
        return null;
    }
    get chalk() {
        return this[val_1.SYM_CHALK];
    }
    set chalk(value) {
        this[val_1.SYM_CHALK] = value;
    }
    get levelColor() {
        return this[val_1.SYM_CHALK].level;
    }
    set levelColor(value) {
        this[val_1.SYM_CHALK].level = value;
    }
    get enabledColor() {
        return this[val_1.SYM_CHALK].enabled;
    }
    set enabledColor(value) {
        this[val_1.SYM_CHALK].enabled = value;
    }
    get chalkOptions() {
        return this[val_1.SYM_DATA].chalkOptions;
    }
    set chalkOptions(value) {
        this[val_1.SYM_DATA].chalkOptions = value;
    }
    get inspectOptions() {
        return this[val_1.SYM_DATA].inspectOptions;
    }
    set inspectOptions(value) {
        this[val_1.SYM_DATA].inspectOptions = value;
    }
    setInspectOptions(value) {
        this[val_1.SYM_DATA].inspectOptions = Object.assign(this[val_1.SYM_DATA].inspectOptions || {}, value);
    }
    get enabled() {
        return this[val_1.SYM_DATA].enabled !== false;
    }
    set enabled(value) {
        this[val_1.SYM_DATA].enabled = value === true;
    }
    setOptions(options) {
        Object.assign(this[val_1.SYM_DATA], options);
        return this;
    }
    withOptions(options) {
        let o = this._clone();
        o[val_1.SYM_CHALK] = this[val_1.SYM_CHALK];
        o[val_1.SYM_DATA] = Object.assign({}, this[val_1.SYM_DATA], options);
        return o;
    }
    _clone() {
        const self = this;
        let o = function Console2Method(...argv) {
            // @ts-ignore
            return o.log(...argv);
        };
        /**
         * allow hacking parent object
         */
        // @ts-ignore
        //o.__proto__ = this.__proto__.constructor.prototype;
        o.__proto__ = this;
        //o = o.bind(o);
        o[val_1.SYM_CONSOLE] = self[val_1.SYM_CONSOLE];
        o[val_1.SYM_DATA] = self[val_1.SYM_DATA];
        // @ts-ignore
        return o;
    }
    _chalkStyleProp(name) {
        let o = this._clone();
        o[val_1.SYM_CHALK] = this[val_1.SYM_CHALK][name];
        return o;
    }
    _logFormat(format, ...args) {
        return util_1.format(format, ...args);
    }
    success(...argv) {
        return this._log('success', argv);
    }
    ok(...argv) {
        return this._log('ok', argv);
    }
    fail(...argv) {
        return this._log('fail', argv, 'error');
    }
    _labelFormat(data) {
        if (this[val_1.SYM_DATA].labelFormatFn) {
            return this[val_1.SYM_DATA].labelFormatFn(data);
        }
        return `[${data.name.toString().toUpperCase()}]`;
    }
    _log(name, argv, failBack = 'log') {
        var _a;
        if (!this.enabled) {
            return;
        }
        // @ts-ignore
        let s = this._logFormat(...argv);
        let o = this[val_1.SYM_CHALK](s);
        let arr = [];
        let data = this[val_1.SYM_DATA];
        if (data.time) {
            let ret = this._time({
                name,
                argv,
                failBack,
            });
            if (ret != null) {
                arr.push(ret);
            }
        }
        if (data.label) {
            let _ok = true;
            if (Array.isArray(data.label) && !data.label.includes(name)) {
                _ok = false;
            }
            if (_ok) {
                let ret = this._labelFormat({
                    name,
                    argv,
                    failBack,
                });
                if (ret != null) {
                    arr.push(ret);
                }
            }
        }
        arr.push(o);
        if (arr.length && ((_a = data.colors) === null || _a === void 0 ? void 0 : _a[name])) {
            let c = data.colors[name];
            if (typeof c === 'string') {
                c = chalk_1.default[c];
            }
            arr = arr.map(v => c(v));
        }
        if (process.platform == 'win32' && this.enabledColor) {
            /**
             * @FIXME fix bug on windows when after bold
             *
             * https://github.com/chalk/chalk/issues/145#issuecomment-288985903
             */
            arr = arr.map(v => '\u001B[0m' + v + '\u001B[0m');
        }
        if (!(name in this[val_1.SYM_CONSOLE])) {
            name = failBack;
        }
        return this[val_1.SYM_CONSOLE][name](...arr);
    }
    _chalkStyleMethod(name) {
        return function chalkStyleMethod(...argv) {
            let o = this._clone();
            o[val_1.SYM_CHALK] = this[val_1.SYM_CHALK][name](...argv);
            return o;
        };
    }
    _time(data) {
        if (this[val_1.SYM_DATA].timeFormatFn) {
            let data2 = {
                ...data,
                failBackTimeFormat: this[val_1.SYM_DATA].timeFormat || '[HH:mm:ss.SSS]',
                date: luxon_1.DateTime.local(),
            };
            return this[val_1.SYM_DATA].timeFormatFn(data2);
        }
        return luxon_1.DateTime.local().toFormat(this[val_1.SYM_DATA].timeFormat || '[HH:mm:ss.SSS]');
    }
}
exports.Console2 = Console2;
util_1.inherits(Console2, Function);
// @ts-ignore
Console2.prototype.Console = Console2;
styles_1.styleNames.forEach(function (name) {
    if (styles_1.styleNamesFn.includes(name)) {
        Object.defineProperty(Console2.prototype, name, {
            get() {
                return this._chalkStyleMethod(name);
            },
        });
    }
    else {
        Object.defineProperty(Console2.prototype, name, {
            get() {
                return this._chalkStyleProp(name);
            },
        });
    }
});
fill_property_1.methods.forEach(function (name) {
    if (name == 'dir') {
        Console2.prototype[name] = function chalkStyleLogOthers(object, options) {
            if (!this.enabled) {
                return;
            }
            let enabledColor = this.enabledColor;
            if (!options && this[val_1.SYM_DATA].inspectOptions) {
                options = this[val_1.SYM_DATA].inspectOptions;
            }
            if (options) {
                if (enabledColor && options.colors == null) {
                    options = {
                        ...options,
                        colors: enabledColor
                    };
                }
                return this[val_1.SYM_CONSOLE][name](object, options);
            }
            return this[val_1.SYM_CONSOLE][name](object, {
                colors: enabledColor,
            });
        };
    }
    else if (name == 'assert') {
        Console2.prototype[name] = function chalkStyleLogAssert(value, ...argv) {
            if (!this.enabled) {
                return;
            }
            if (!value) {
                let o;
                if (argv.length) {
                    // @ts-ignore
                    let s = this._logFormat(...argv);
                    o = this[val_1.SYM_CHALK](s);
                }
                return this[val_1.SYM_CONSOLE][name](value, o);
            }
        };
    }
    else if (fill_property_1.methods_stdout.includes(name)) {
        Console2.prototype[name] = function chalkStyleLogStdout(...argv) {
            // @ts-ignore
            return this._log(name, argv);
        };
    }
    else if (fill_property_1.methods_stderr.includes(name)) {
        Console2.prototype[name] = function chalkStyleLogStderr(...argv) {
            // @ts-ignore
            return this._log(name, argv, 'error');
        };
    }
    else {
        Console2.prototype[name] = function chalkStyleLogOthers(...argv) {
            if (!this.enabled) {
                return;
            }
            return this[val_1.SYM_CONSOLE][name](...argv);
        };
    }
});
exports.default = Console2;
//# sourceMappingURL=node.js.map