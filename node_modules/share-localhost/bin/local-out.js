#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const index_1 = __importDefault(require("../lib/index"));
const debug_color2_1 = require("debug-color2");
let context;
let argv = yargs_1.default
    .option('port', {
    alias: ['p'],
    number: true,
})
    .option('hostname', {
    alias: ['h'],
    string: true,
})
    .argv;
(async (argv) => {
    context = new index_1.default(argv);
    return context
        .connect()
        .tap(ret => {
        debug_color2_1.console.dir(ret);
    });
})(argv);
process.on('exit', () => {
    try {
        context.close();
    }
    catch (e) {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtb3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYWwtb3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLGtEQUEwQjtBQUMxQix5REFBb0M7QUFDcEMsK0NBQXNDO0FBRXRDLElBQUksT0FBc0IsQ0FBQztBQUUzQixJQUFJLElBQUksR0FBRyxlQUFLO0tBQ2QsTUFBTSxDQUFDLE1BQU0sRUFBRTtJQUNmLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLE1BQU0sRUFBRSxJQUFJO0NBQ1osQ0FBQztLQUNELE1BQU0sQ0FBQyxVQUFVLEVBQUU7SUFDbkIsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osTUFBTSxFQUFFLElBQUk7Q0FDWixDQUFDO0tBQ0QsSUFBSSxDQUNMO0FBRUQsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFFZixPQUFPLEdBQUcsSUFBSSxlQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFN0IsT0FBTyxPQUFPO1NBQ1osT0FBTyxFQUFFO1NBQ1QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ1Ysc0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDakIsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVULE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtJQUV2QixJQUNBO1FBQ0MsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxDQUFDLEVBQ1I7S0FFQztBQUVGLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuXG5pbXBvcnQgeWFyZ3MgZnJvbSAneWFyZ3MnO1xuaW1wb3J0IExvY2FsT3V0IGZyb20gJy4uL2xpYi9pbmRleCc7XG5pbXBvcnQgeyBjb25zb2xlIH0gZnJvbSAnZGVidWctY29sb3IyJ1xuXG5sZXQgY29udGV4dDogTG9jYWxPdXQ8YW55PjtcblxubGV0IGFyZ3YgPSB5YXJnc1xuXHQub3B0aW9uKCdwb3J0Jywge1xuXHRcdGFsaWFzOiBbJ3AnXSxcblx0XHRudW1iZXI6IHRydWUsXG5cdH0pXG5cdC5vcHRpb24oJ2hvc3RuYW1lJywge1xuXHRcdGFsaWFzOiBbJ2gnXSxcblx0XHRzdHJpbmc6IHRydWUsXG5cdH0pXG5cdC5hcmd2XG47XG5cbihhc3luYyAoYXJndikgPT4ge1xuXG5cdGNvbnRleHQgPSBuZXcgTG9jYWxPdXQoYXJndik7XG5cblx0cmV0dXJuIGNvbnRleHRcblx0XHQuY29ubmVjdCgpXG5cdFx0LnRhcChyZXQgPT4ge1xuXHRcdFx0Y29uc29sZS5kaXIocmV0KVxuXHRcdH0pXG59KShhcmd2KTtcblxucHJvY2Vzcy5vbignZXhpdCcsICgpID0+IHtcblxuXHR0cnlcblx0e1xuXHRcdGNvbnRleHQuY2xvc2UoKTtcblx0fVxuXHRjYXRjaCAoZSlcblx0e1xuXG5cdH1cblxufSk7XG4iXX0=