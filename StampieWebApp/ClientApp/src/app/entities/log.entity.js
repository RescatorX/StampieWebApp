"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_entity_1 = require("./base.entity");
var common_1 = require("@angular/common");
var LogEntity = /** @class */ (function (_super) {
    __extends(LogEntity, _super);
    function LogEntity(obj) {
        var _this = _super.call(this) || this;
        base_entity_1.BaseEntity.copyProperties(obj, _this);
        return _this;
    }
    /**
     * Override of toString() method
     */
    LogEntity.prototype.toString = function () {
        return "Log [id=" + this.id + ", level=" + this.level + ", module=" + this.module + ", message=" + this.message + ", detail=" + this.detail +
            ", created=" + ((this.created != null) ? (new common_1.DatePipe("cs-CZ")).transform(this.created, "yyyy-MM-dd") : "null") + "]";
    };
    return LogEntity;
}(base_entity_1.BaseEntity));
exports.LogEntity = LogEntity;
//# sourceMappingURL=log.entity.js.map