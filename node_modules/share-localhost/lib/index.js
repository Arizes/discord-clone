"use strict";
/**
 * Created by user on 2019/12/14.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const baseProvider_1 = require("./provider/baseProvider");
const debug_color2_1 = require("debug-color2");
const DEFAULT_PORT = 80;
const DEFAULT_TARGET = 'localhost';
var EnumLocalOutEvent;
(function (EnumLocalOutEvent) {
    EnumLocalOutEvent["Constructor"] = "constructor";
    EnumLocalOutEvent["Connect"] = "connect";
})(EnumLocalOutEvent = exports.EnumLocalOutEvent || (exports.EnumLocalOutEvent = {}));
class LocalOut extends events_1.EventEmitter {
    constructor(config = {}) {
        super();
        this._constructor(config);
        this.emit(EnumLocalOutEvent.Constructor);
    }
    _constructor(config) {
        let { port = DEFAULT_PORT, hostname = DEFAULT_TARGET, debug, provider, portOnline = DEFAULT_PORT, hostnameOnline, providerClass } = config;
        if (port) {
            this.port = port;
        }
        if (portOnline) {
            this.portOnline = portOnline;
        }
        if (hostnameOnline) {
            this.hostnameOnline = hostnameOnline;
        }
        if (hostname) {
            this.hostname = hostname;
        }
        if (provider) {
            // @ts-ignore
            this.provider = provider;
            // @ts-ignore
            this.provider.context = this;
        }
        if (providerClass) {
            // @ts-ignore
            this.providerClass = providerClass;
        }
        if (debug != null) {
            this.debug = debug;
        }
    }
    get debug() {
        if (!this._debugConsole) {
            return null;
        }
        return this._debugConsole.enabled;
    }
    set debug(bool) {
        if (!this._debugConsole && bool) {
            this._debugConsole = new debug_color2_1.Console(null, {
                label: true,
                time: true,
                enabled: false,
            });
        }
        this._debugConsole.enabled = bool;
    }
    setPort(port) {
        this.port = port;
        return this;
    }
    /**
     * @private
     */
    on(event, listener) {
        return super.on(event, listener);
    }
    /**
     * @private
     */
    once(event, listener) {
        return super.once(event, listener);
    }
    /**
     * @private
     */
    emit(event, ...args) {
        return super.emit(event, ...args);
    }
    _createProvider() {
        if (!this.provider) {
            let { providerClass = baseProvider_1.BaseProvider } = this;
            // @ts-ignore
            this.provider = new providerClass(this);
            this.debug && this._debugConsole.debug(`auto create provider`, providerClass, this.provider);
        }
        return this.provider;
    }
    connect() {
        this.debug && this._debugConsole.debug(`connect start`);
        return this._createProvider().connect();
    }
    close() {
        this.debug && this._debugConsole.debug(`connect close`);
        if (!this.provider) {
            throw new ReferenceError(`provider is not created`);
        }
        return this.provider.close();
    }
}
exports.LocalOut = LocalOut;
exports.default = LocalOut;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBRUgsbUNBQXFDO0FBQ3JDLDBEQUF1RDtBQUV2RCwrQ0FBc0M7QUFHdEMsTUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLE1BQU0sY0FBYyxHQUFHLFdBQVcsQ0FBQztBQXVDbkMsSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBRTVCLGdEQUEyQixDQUFBO0lBQzNCLHdDQUFtQixDQUFBO0FBQ3BCLENBQUMsRUFKVyxpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQUk1QjtBQUVELE1BQWEsUUFBcUMsU0FBUSxxQkFBWTtJQWFyRSxZQUFZLFNBQXdDLEVBQUU7UUFFckQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDekMsQ0FBQztJQUVTLFlBQVksQ0FBQyxNQUFxQztRQUUzRCxJQUFJLEVBQUUsSUFBSSxHQUFHLFlBQVksRUFBRSxRQUFRLEdBQUcsY0FBYyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxHQUFHLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBRTNJLElBQUksSUFBSSxFQUNSO1lBQ0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDakI7UUFFRCxJQUFJLFVBQVUsRUFDZDtZQUNDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxjQUFjLEVBQ2xCO1lBQ0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7U0FDckM7UUFFRCxJQUFJLFFBQVEsRUFDWjtZQUNDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NB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LGtCQUFlLFFBQVEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTkvMTIvMTQuXG4gKi9cblxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnZXZlbnRzJ1xuaW1wb3J0IHsgQmFzZVByb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlci9iYXNlUHJvdmlkZXInO1xuaW1wb3J0IEFic3RyYWN0UHJvdmlkZXIgZnJvbSAnLi9BYnN0cmFjdFByb3ZpZGVyJztcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICdkZWJ1Zy1jb2xvcjInXG5pbXBvcnQgeyBJVFNQYXJ0aWFsV2l0aCB9IGZyb20gJ3RzLXR5cGUnXG5cbmNvbnN0IERFRkFVTFRfUE9SVCA9IDgwO1xuY29uc3QgREVGQVVMVF9UQVJHRVQgPSAnbG9jYWxob3N0JztcblxuaW50ZXJmYWNlIElMb2NhbE91dENvbnN0cnVjdG9yPFAgZXh0ZW5kcyBBYnN0cmFjdFByb3ZpZGVyPlxue1xuXHRwb3J0T25saW5lOiBudW1iZXIsXG5cdGhvc3RuYW1lT25saW5lOiBzdHJpbmcsXG5cdC8qKlxuXHQgKiBsb2NhbCBzZXJ2ZXIgcG9ydFxuXHQgKi9cblx0cG9ydDogbnVtYmVyLFxuXHQvKipcblx0ICogbG9jYWwgc2VydmVyIGhvc3RuYW1lXG5cdCAqL1xuXHRob3N0bmFtZTogc3RyaW5nLFxuXHRkZWJ1ZzogYm9vbGVhbixcblx0cHJvdmlkZXI6IFA7XG59XG5cbmV4cG9ydCB0eXBlIElMb2NhbE91dENvbnN0cnVjdG9yUGFyYW1zPFAgZXh0ZW5kcyBBYnN0cmFjdFByb3ZpZGVyPiA9IElMb2NhbE91dENvbnN0cnVjdG9yUGFyYW1zMjxQPjtcblxuZXhwb3J0IHR5cGUgSUNvbnN0cnVjdG9yQ2xhc3M8VD4gPSB7XG5cdG5ldyAoLi4uYXJndjogYW55KTogVFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElMb2NhbE91dENvbnN0cnVjdG9yUGFyYW1zMTxQIGV4dGVuZHMgQWJzdHJhY3RQcm92aWRlcj4gZXh0ZW5kcyBQYXJ0aWFsPElMb2NhbE91dENvbnN0cnVjdG9yPFA+Plxue1xuXHRwcm92aWRlcj86IFA7XG5cdHByb3ZpZGVyQ2xhc3M/OiBuZXZlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxPdXRDb25zdHJ1Y3RvclBhcmFtczI8UCBleHRlbmRzIEFic3RyYWN0UHJvdmlkZXI+IGV4dGVuZHMgUGFydGlhbDxJTG9jYWxPdXRDb25zdHJ1Y3RvcjxQPj5cbntcblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkXG5cdCAqL1xuXHRwcm92aWRlcj86IG5ldmVyO1xuXHRwcm92aWRlckNsYXNzPzogSUNvbnN0cnVjdG9yQ2xhc3M8UD47XG59XG5cbmV4cG9ydCBlbnVtIEVudW1Mb2NhbE91dEV2ZW50XG57XG5cdENvbnN0cnVjdG9yID0gJ2NvbnN0cnVjdG9yJyxcblx0Q29ubmVjdCA9ICdjb25uZWN0Jyxcbn1cblxuZXhwb3J0IGNsYXNzIExvY2FsT3V0PFAgZXh0ZW5kcyBBYnN0cmFjdFByb3ZpZGVyPiBleHRlbmRzIEV2ZW50RW1pdHRlciBpbXBsZW1lbnRzIElUU1BhcnRpYWxXaXRoPElMb2NhbE91dENvbnN0cnVjdG9yPFA+LCAnaG9zdG5hbWVPbmxpbmUnPlxue1xuXG5cdHBvcnRPbmxpbmU6IG51bWJlcjtcblx0aG9zdG5hbWVPbmxpbmU/OiBzdHJpbmc7XG5cblx0cG9ydDogbnVtYmVyO1xuXHRob3N0bmFtZTogc3RyaW5nO1xuXHRwcm92aWRlcjogUDtcblx0cHJvdmlkZXJDbGFzczogSUNvbnN0cnVjdG9yQ2xhc3M8UD47XG5cblx0X2RlYnVnQ29uc29sZTogQ29uc29sZTtcblxuXHRjb25zdHJ1Y3Rvcihjb25maWc6IElMb2NhbE91dENvbnN0cnVjdG9yUGFyYW1zPFA+ID0ge30pXG5cdHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuX2NvbnN0cnVjdG9yKGNvbmZpZyk7XG5cdFx0dGhpcy5lbWl0KEVudW1Mb2NhbE91dEV2ZW50LkNvbnN0cnVjdG9yKVxuXHR9XG5cblx0cHJvdGVjdGVkIF9jb25zdHJ1Y3Rvcihjb25maWc6IElMb2NhbE91dENvbnN0cnVjdG9yUGFyYW1zPFA+KVxuXHR7XG5cdFx0bGV0IHsgcG9ydCA9IERFRkFVTFRfUE9SVCwgaG9zdG5hbWUgPSBERUZBVUxUX1RBUkdFVCwgZGVidWcsIHByb3ZpZGVyLCBwb3J0T25saW5lID0gREVGQVVMVF9QT1JULCBob3N0bmFtZU9ubGluZSwgcHJvdmlkZXJDbGFzcyB9ID0gY29uZmlnO1xuXG5cdFx0aWYgKHBvcnQpXG5cdFx0e1xuXHRcdFx0dGhpcy5wb3J0ID0gcG9ydDtcblx0XHR9XG5cblx0XHRpZiAocG9ydE9ubGluZSlcblx0XHR7XG5cdFx0XHR0aGlzLnBvcnRPbmxpbmUgPSBwb3J0T25saW5lO1xuXHRcdH1cblxuXHRcdGlmIChob3N0bmFtZU9ubGluZSlcblx0XHR7XG5cdFx0XHR0aGlzLmhvc3RuYW1lT25saW5lID0gaG9zdG5hbWVPbmxpbmU7XG5cdFx0fVxuXG5cdFx0aWYgKGhvc3RuYW1lKVxuXHRcdHtcblx0XHRcdHRoaXMuaG9zdG5hbWUgPSBob3N0bmFtZTtcblx0XHR9XG5cblx0XHRpZiAocHJvdmlkZXIpXG5cdFx0e1xuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0dGhpcy5wcm92aWRlciA9IHByb3ZpZGVyO1xuXG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHR0aGlzLnByb3ZpZGVyLmNvbnRleHQgPSB0aGlzO1xuXHRcdH1cblxuXHRcdGlmIChwcm92aWRlckNsYXNzKVxuXHRcdHtcblx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdHRoaXMucHJvdmlkZXJDbGFzcyA9IHByb3ZpZGVyQ2xhc3M7XG5cdFx0fVxuXG5cdFx0aWYgKGRlYnVnICE9IG51bGwpXG5cdFx0e1xuXHRcdFx0dGhpcy5kZWJ1ZyA9IGRlYnVnO1xuXHRcdH1cblx0fVxuXG5cdGdldCBkZWJ1ZygpXG5cdHtcblx0XHRpZiAoIXRoaXMuX2RlYnVnQ29uc29sZSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5fZGVidWdDb25zb2xlLmVuYWJsZWRcblx0fVxuXG5cdHNldCBkZWJ1Zyhib29sOiBib29sZWFuKVxuXHR7XG5cdFx0aWYgKCF0aGlzLl9kZWJ1Z0NvbnNvbGUgJiYgYm9vbClcblx0XHR7XG5cdFx0XHR0aGlzLl9kZWJ1Z0NvbnNvbGUgPSBuZXcgQ29uc29sZShudWxsLCB7XG5cdFx0XHRcdGxhYmVsOiB0cnVlLFxuXHRcdFx0XHR0aW1lOiB0cnVlLFxuXHRcdFx0XHRlbmFibGVkOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHRoaXMuX2RlYnVnQ29uc29sZS5lbmFibGVkID0gYm9vbDtcblx0fVxuXG5cdHNldFBvcnQocG9ydDogbnVtYmVyKVxuXHR7XG5cdFx0dGhpcy5wb3J0ID0gcG9ydDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0b24oZXZlbnQ6IEVudW1Mb2NhbE91dEV2ZW50LCBsaXN0ZW5lcjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKTogdGhpc1xuXHR7XG5cdFx0cmV0dXJuIHN1cGVyLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG5cdH1cblxuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICovXG5cdG9uY2UoZXZlbnQ6IEVudW1Mb2NhbE91dEV2ZW50LCBsaXN0ZW5lcjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKTogdGhpc1xuXHR7XG5cdFx0cmV0dXJuIHN1cGVyLm9uY2UoZXZlbnQsIGxpc3RlbmVyKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0ZW1pdChldmVudDogRW51bUxvY2FsT3V0RXZlbnQsIC4uLmFyZ3MpOiBib29sZWFuXG5cdHtcblx0XHRyZXR1cm4gc3VwZXIuZW1pdChldmVudCwgLi4uYXJncyk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgX2NyZWF0ZVByb3ZpZGVyKCk6IFBcblx0e1xuXHRcdGlmICghdGhpcy5wcm92aWRlcilcblx0XHR7XG5cdFx0XHRsZXQgeyBwcm92aWRlckNsYXNzID0gQmFzZVByb3ZpZGVyIH0gPSB0aGlzO1xuXG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHR0aGlzLnByb3ZpZGVyID0gbmV3IHByb3ZpZGVyQ2xhc3ModGhpcyk7XG5cblx0XHRcdHRoaXMuZGVidWcgJiYgdGhpcy5fZGVidWdDb25zb2xlLmRlYnVnKGBhdXRvIGNyZWF0ZSBwcm92aWRlcmAsIHByb3ZpZGVyQ2xhc3MsIHRoaXMucHJvdmlkZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnByb3ZpZGVyO1xuXHR9XG5cblx0Y29ubmVjdCgpXG5cdHtcblx0XHR0aGlzLmRlYnVnICYmIHRoaXMuX2RlYnVnQ29uc29sZS5kZWJ1ZyhgY29ubmVjdCBzdGFydGApO1xuXHRcdHJldHVybiB0aGlzLl9jcmVhdGVQcm92aWRlcigpLmNvbm5lY3QoKTtcblx0fVxuXG5cdGNsb3NlKClcblx0e1xuXHRcdHRoaXMuZGVidWcgJiYgdGhpcy5fZGVidWdDb25zb2xlLmRlYnVnKGBjb25uZWN0IGNsb3NlYCk7XG5cblx0XHRpZiAoIXRoaXMucHJvdmlkZXIpXG5cdFx0e1xuXHRcdFx0dGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKGBwcm92aWRlciBpcyBub3QgY3JlYXRlZGApXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucHJvdmlkZXIuY2xvc2UoKTtcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsT3V0XG4iXX0=