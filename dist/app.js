"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./routes/api"));
const app = (0, express_1.default)();
const port = 3003;
app.use('/api', api_1.default);
// async function startServer() {
//   await mongoose.connect(process.env.APP_DATABASE_URL as any, {
//     useNewUrlParser: true,
//   } as any);
// }
// startServer();
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map