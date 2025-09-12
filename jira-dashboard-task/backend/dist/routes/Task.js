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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
var router = express_1.default.Router();
var filepath = path_1.default.join(__dirname, "../..", "src", "data", "response.json");
router.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var fileContent, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, fs_1.readFileSync)(filepath, "utf-8")];
            case 1:
                fileContent = _a.sent();
                res.json(JSON.parse(fileContent));
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(500).json({ message: "internal server error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get("/search/user", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, user, status, data, fileContent, tasks, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.query, user = _a.user, status = _a.status;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, fs_1.readFileSync)(filepath, "utf-8")];
            case 2:
                fileContent = _b.sent();
                tasks = JSON.parse(fileContent);
                if (!status && !user) {
                    data = tasks;
                }
                else if (status && user) {
                    data = tasks.filter(function (task) { return task.status === status && task.assignee === user; });
                }
                else if (status) {
                    data = tasks.filter(function (task) { return task.status === status; });
                }
                else {
                    data = tasks.filter(function (task) { return task.assignee === user; });
                }
                res.json(data);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _b.sent();
                res.status(500).json({ message: "internal server error" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.get("/search/:content", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var content, fileContent, tasks, data, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                content = req.params.content;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, fs_1.readFileSync)(filepath, "utf-8")];
            case 2:
                fileContent = _a.sent();
                tasks = JSON.parse(fileContent);
                data = tasks.filter(function (task) {
                    return task.title.toLowerCase().includes(content.toLowerCase()) ||
                        task.description.toLowerCase().includes(content.toLowerCase());
                });
                res.json(data);
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                res.status(500).json({ message: "internal server error" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.put("/update/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var status, id, fileContent, tasks, findedTask;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                status = req.body.status;
                console.log(req.body);
                id = req.params.id;
                return [4 /*yield*/, (0, fs_1.readFileSync)(filepath, "utf-8")];
            case 1:
                fileContent = _a.sent();
                if (!status)
                    res.json({ message: "Some thing Went Wrong" });
                tasks = JSON.parse(fileContent);
                findedTask = tasks.find(function (task) { return task.id === id; });
                if (!findedTask)
                    res.json({ message: "Data not found" });
                findedTask.status = status;
                console.log(findedTask);
                (0, fs_1.writeFileSync)(filepath, JSON.stringify(tasks));
                res.json({ message: "SuccessFull Updated" });
                return [2 /*return*/];
        }
    });
}); });
router.post("/addTask", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var task, fileContent, tasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                task = req.body.task;
                console.log(task);
                return [4 /*yield*/, (0, fs_1.readFileSync)(filepath, "utf-8")];
            case 1:
                fileContent = _a.sent();
                if (!task)
                    res.json({ message: "Some thing Went Wrong" });
                tasks = JSON.parse(fileContent);
                tasks.push(task);
                (0, fs_1.writeFileSync)(filepath, JSON.stringify(tasks));
                res.json({ message: "Data Added SuccessFully" });
                return [2 /*return*/];
        }
    });
}); });
exports.default = router;
//# sourceMappingURL=Task.js.map