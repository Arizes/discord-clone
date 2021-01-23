"use strict";
/// <reference types="node" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const bluebird_1 = __importDefault(require("bluebird"));
const cross_spawn_1 = __importDefault(require("cross-spawn"));
const core_1 = require("./core");
/**
 * @see core.d.ts
 */
const crossSpawnExtra = core_1.CrossSpawnExtra.use(cross_spawn_1.default, bluebird_1.default);
module.exports = crossSpawnExtra;
//# sourceMappingURL=index.js.map