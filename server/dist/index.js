"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const compression_1 = __importDefault(require("compression"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
app.disable("x-powered-by");
app.use((0, compression_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, "./www")));
app.get("*", (_, res) => {
    res.setHeader("content-type", "text/html");
    res.sendFile(path_1.default.resolve(__dirname, "./www/index.html"));
});
const PORT = process.env.PORT || 8080;
const HOST = "localhost";
app.listen(PORT, () => {
    console.log(`Starting proxy server at ${HOST}:${PORT}`);
});
