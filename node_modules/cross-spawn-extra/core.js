"use strict";
/**
 * Created by user on 2018/9/25/025.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossSpawnExtra = exports.SYM_BLUEBIRD = exports.SYM_CROSS_SPAWN = exports.Bluebird = void 0;
// @ts-ignore
const callable_instance2_1 = __importDefault(require("callable-instance2"));
const cross_spawn_1 = __importDefault(require("cross-spawn"));
const bluebird_1 = __importDefault(require("bluebird"));
exports.Bluebird = bluebird_1.default;
const strip_ansi_1 = __importDefault(require("strip-ansi"));
exports.SYM_CROSS_SPAWN = Symbol('cross-spawn');
exports.SYM_BLUEBIRD = Symbol('bluebird');
class CrossSpawnExtra extends callable_instance2_1.default {
    /**
     * create new CrossSpawnExtra with Custom CrossSpawn, Promise
     */
    constructor(cs, p) {
        super('async');
        this.default = this;
        this.spawnSync = this.sync;
        this.spawn = this.async;
        this[exports.SYM_CROSS_SPAWN] = cs || cross_spawn_1.default;
        // @ts-ignore
        this[exports.SYM_BLUEBIRD] = p || bluebird_1.default;
        [
            'core',
            'async',
            'sync',
        ].forEach(name => this[name] = this[name].bind(this));
        Object.defineProperty(this, "__esModule", { value: true });
    }
    sync(...argv) {
        // @ts-ignore
        let child = this[exports.SYM_CROSS_SPAWN].sync(...argv);
        // @ts-ignore
        child.then = bluebird_1.default.method((fn) => {
            // @ts-ignore
            delete child.then;
            return fn(child);
        });
        let [command, args, options] = argv;
        if (options && options.stripAnsi) {
            // @ts-ignore
            child.stderr = child.stderr && CrossSpawnExtra.stripAnsi(child.stderr);
            // @ts-ignore
            child.stdout = child.stdout && CrossSpawnExtra.stripAnsi(child.stdout);
        }
        // @ts-ignore
        return child;
    }
    async(...argv) {
        let self = this;
        let cache = {
            output: [],
            stdout: [],
            stderr: [],
        };
        let child;
        let fn = self[exports.SYM_CROSS_SPAWN];
        let ret = bluebird_1.default.resolve();
        let [command, args, options] = argv;
        // @ts-ignore
        child = fn(...argv);
        // @ts-ignore
        ret.child = child;
        child.stderrStream = child.stderr;
        child.stdoutStream = child.stdout;
        // @ts-ignore
        ret = ret.thenReturn(new bluebird_1.default(function (resolve, reject) {
            // @ts-ignore
            ret.child = child;
            [
                'stderr',
                'stdout',
            ].forEach(function (std) {
                if (child[std]) {
                    child[std].on('data', function (buf) {
                        cache[std].push(buf);
                        cache.output.push(buf);
                    });
                }
            });
            child.on('close', function (...argv) {
                child.status = argv[0];
                done('close');
                //console.debug(child.pid, 'close', argv);
            });
            child.on('exit', function (...argv) {
                child.status = argv[0];
                done('exit');
                //console.debug(child.pid, 'exit', argv);
            });
            child.on('error', function (error) {
                child.error = error;
                //done('error');
            });
            function done(event) {
                //console.log(event, child.error);
                let stderr = Buffer.concat(cache.stderr);
                let stdout = Buffer.concat(cache.stdout);
                if (options && options.stripAnsi) {
                    stderr = CrossSpawnExtra.stripAnsi(stderr);
                    stdout = CrossSpawnExtra.stripAnsi(stdout);
                }
                // @ts-ignore
                child.stderr = stderr;
                // @ts-ignore
                child.stdout = stdout;
                // @ts-ignore
                child.output = [null, stdout, stderr];
                // @ts-ignore
                child._output = cache.output;
                if (child.error) {
                    // @ts-ignore
                    child.error.child = child;
                }
                if (child.error) {
                    reject(child.error);
                }
                else {
                    resolve(child);
                }
            }
        })
            .tapCatch((e) => {
            if (e) {
                e.child = child;
            }
        }));
        // @ts-ignore
        ret.child = child;
        // @ts-ignore
        return ret;
    }
    static use(cs, p) {
        return new this(cs, p);
    }
    use(cs, p) {
        return new CrossSpawnExtra(cs, p);
    }
    core(...argv) {
        // @ts-ignore
        return this[exports.SYM_CROSS_SPAWN](...argv);
    }
    get coreSync() {
        return this[exports.SYM_CROSS_SPAWN].sync;
    }
    static stripAnsi(input, toStr) {
        if (!input) {
            return input;
        }
        let isBuffer = Buffer.isBuffer(input);
        input = input.toString();
        // @ts-ignore
        input = strip_ansi_1.default(input);
        if (isBuffer && !toStr) {
            return Buffer.from(input);
        }
        return input;
    }
}
exports.CrossSpawnExtra = CrossSpawnExtra;
exports.default = CrossSpawnExtra;
//# sourceMappingURL=core.js.map