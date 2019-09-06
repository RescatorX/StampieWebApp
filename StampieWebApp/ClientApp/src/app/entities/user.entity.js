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
var UserEntity = /** @class */ (function (_super) {
    __extends(UserEntity, _super);
    function UserEntity(obj) {
        var _this = _super.call(this) || this;
        base_entity_1.BaseEntity.copyProperties(obj, _this);
        return _this;
    }
    /**
     * Override of toString() method
     */
    UserEntity.prototype.toString = function () {
        return "User [id=" + this.id + ", firstName=" + this.firstName + ", lastName=" + this.lastName + ", login=" + this.login + ", password=" + this.password +
            ", created=" + ((this.created != null) ? (new common_1.DatePipe("cs-CZ")).transform(this.created, "yyyy-MM-dd") : "null") + ", state=" + this.state + "]";
    };
    return UserEntity;
}(base_entity_1.BaseEntity));
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map