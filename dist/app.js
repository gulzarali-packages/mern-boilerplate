"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_session_1 = __importDefault(require("express-session"));
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const passport_config_1 = __importDefault(require("./config/passport.config"));
const connect_flash_1 = __importDefault(require("connect-flash"));
const api_1 = __importDefault(require("./routes/api"));
const config_1 = __importDefault(require("./config/config"));
const HttpResponseMiddleware_1 = __importDefault(require("./middleware/HttpResponseMiddleware"));
let port = config_1.default.port;
const app = (0, express_1.default)();
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect(config_1.default.databaseURL, {
            useNewUrlParser: true,
        });
        console.log('Connected to MongoDB successfully!');
    });
}
app.use(HttpResponseMiddleware_1.default);
app.use((0, compression_1.default)());
app.use((0, connect_flash_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, express_session_1.default)({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));
app.use(passport_config_1.default.initialize());
app.use(passport_config_1.default.session());
app.use('/api', api_1.default);
startServer();
app.listen(3000, 'localhost', () => {
    console.log('port:', port);
    return console.log(`Express is listening at http://localhost:${config_1.default.port}`);
});
//# sourceMappingURL=app.js.map