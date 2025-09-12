"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryEnum = exports.statusEnum = void 0;
var statusEnum;
(function (statusEnum) {
    statusEnum["TODO"] = "To Do";
    statusEnum["INPROGRESS"] = "In Progress";
    statusEnum["INREVIEW"] = "In Review";
    statusEnum["DONE"] = "Done";
})(statusEnum || (exports.statusEnum = statusEnum = {}));
var categoryEnum;
(function (categoryEnum) {
    categoryEnum["FRONTEND"] = "Frontend";
    categoryEnum["BACKEND"] = "Backend";
})(categoryEnum || (exports.categoryEnum = categoryEnum = {}));
//# sourceMappingURL=commonEnums.js.map