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
var StampEntity = /** @class */ (function (_super) {
    __extends(StampEntity, _super);
    function StampEntity(obj) {
        var _this = _super.call(this) || this;
        base_entity_1.BaseEntity.copyProperties(obj, _this);
        _this.name = _this.name.replace(new RegExp("\"", 'g'), "");
        return _this;
    }
    /**
     * Override of toString() method
     */
    StampEntity.prototype.toString = function () {
        return "Stampie [id=" + this.id + ", name=" + this.name + ", category=" + this.category + ", county=" + this.county +
            ", published=" + ((this.published != null) ? (new common_1.DatePipe("cs-CZ")).transform(this.published, "yyyy-MM-dd") : "null") +
            ", gpsPositionLat=" + ((this.gpsPositionLat != null) ? this.gpsPositionLat.toString() : "null") +
            ", gpsPositionLng=" + ((this.gpsPositionLng != null) ? this.gpsPositionLng.toString() : "null") + "]";
    };
    return StampEntity;
}(base_entity_1.BaseEntity));
exports.StampEntity = StampEntity;
//# sourceMappingURL=stamp.entity.js.map