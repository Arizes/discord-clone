"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseProvider_1 = __importDefault(require("./baseProvider"));
class ServeoProvider extends baseProvider_1.default {
    _constructor() {
        super._constructor();
        this._cache.ID_SERVICES = 1;
    }
    _ssh_args(ID_SERVICES) {
        const context = this.context;
        let args = super._ssh_args(ID_SERVICES);
        if (context.hostnameOnline) {
            args.splice(-1, 0, '-l', context.hostnameOnline);
        }
        return args;
    }
}
exports.ServeoProvider = ServeoProvider;
ServeoProvider.desc = `serveo provider with subdomain`;
exports.default = baseProvider_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVvUHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTZXJ2ZW9Qcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQU9BLGtFQUEwQztBQUUxQyxNQUFhLGNBQWUsU0FBUSxzQkFBWTtJQUlyQyxZQUFZO1FBRXJCLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVTLFNBQVMsQ0FBQyxXQUFtQjtRQUV0QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTdCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFeEMsSUFBSSxPQUFPLENBQUMsY0FBYyxFQUMxQjtZQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7U0FDaEQ7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7O0FBdEJGLHdDQXdCQztBQXRCTyxtQkFBSSxHQUFHLGdDQUFnQyxDQUFDO0FBd0JoRCxrQkFBZSxzQkFBWSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOS8xMi8xNC5cbiAqL1xuaW1wb3J0IHsgRW51bUxvY2FsT3V0RXZlbnQgfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgeyBhc3luYyBhcyBzcGF3biB9IGZyb20gJ2Nyb3NzLXNwYXduLWV4dHJhJztcbmltcG9ydCBCbHVlYmlyZCBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgeyBBYnN0cmFjdFByb3ZpZGVyLCBJUHJvdmlkZXJDb25uZWN0RGF0YSB9IGZyb20gJy4uL0Fic3RyYWN0UHJvdmlkZXInO1xuaW1wb3J0IEJhc2VQcm92aWRlciBmcm9tICcuL2Jhc2VQcm92aWRlcic7XG5cbmV4cG9ydCBjbGFzcyBTZXJ2ZW9Qcm92aWRlciBleHRlbmRzIEJhc2VQcm92aWRlclxue1xuXHRzdGF0aWMgZGVzYyA9IGBzZXJ2ZW8gcHJvdmlkZXIgd2l0aCBzdWJkb21haW5gO1xuXG5cdHByb3RlY3RlZCBfY29uc3RydWN0b3IoKVxuXHR7XG5cdFx0c3VwZXIuX2NvbnN0cnVjdG9yKCk7XG5cdFx0dGhpcy5fY2FjaGUuSURfU0VSVklDRVMgPSAxO1xuXHR9XG5cblx0cHJvdGVjdGVkIF9zc2hfYXJncyhJRF9TRVJWSUNFUzogbnVtYmVyKVxuXHR7XG5cdFx0Y29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcblxuXHRcdGxldCBhcmdzID0gc3VwZXIuX3NzaF9hcmdzKElEX1NFUlZJQ0VTKTtcblxuXHRcdGlmIChjb250ZXh0Lmhvc3RuYW1lT25saW5lKVxuXHRcdHtcblx0XHRcdGFyZ3Muc3BsaWNlKC0xLCAwLCAnLWwnLCBjb250ZXh0Lmhvc3RuYW1lT25saW5lKVxuXHRcdH1cblxuXHRcdHJldHVybiBhcmdzO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVByb3ZpZGVyXG4iXX0=