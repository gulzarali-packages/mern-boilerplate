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
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("./routes/index"));
const auth_1 = __importDefault(require("./routes/auth"));
dotenv_1.default.config();
const app = (0, express_1.default)();
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect(process.env.APP_DATABASE_URL, {
            useNewUrlParser: true,
        });
        console.log("MongoDB successfully connected");
        app.use('/', index_1.default);
        app.use('/auth', auth_1.default);
        app.listen(process.env.APP_LISTEN_PORT, () => {
            console.log(`Server started on port ${process.env.APP_LISTEN_PORT}`);
        });
    });
}
startServer();
//# sourceMappingURL=app.js.map