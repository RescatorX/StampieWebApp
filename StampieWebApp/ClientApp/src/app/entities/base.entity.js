"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseEntity = /** @class */ (function () {
    function BaseEntity() {
    }
    BaseEntity.copyProperties = function (source, destination, overwrite) {
        if (overwrite === void 0) { overwrite = true; }
        for (var key in source) {
            try {
                if (overwrite || destination[key] === undefined) {
                    destination[key] = source[key];
                }
            }
            catch (_a) { }
        }
    };
    BaseEntity.isEmpty = function (str) {
        var isNullOrEmpty = ((str == undefined) || (str == null) || (str == ""));
        return isNullOrEmpty;
    };
    BaseEntity.isNotEmpty = function (str) {
        return !BaseEntity.isEmpty(str);
    };
    return BaseEntity;
}());
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=base.entity.js.map