"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Task_1 = __importDefault(require("./routes/Task"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = (0, express_1.default)();
var port = 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(Task_1.default);
app.listen(port, function () {
    console.log("Connected successfully on port ".concat(port));
});
//# sourceMappingURL=app.js.map