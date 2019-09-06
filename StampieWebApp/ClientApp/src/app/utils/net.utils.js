"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var NetUtils = /** @class */ (function () {
    function NetUtils() {
    }
    NetUtils.getRequestOptions = function () {
        var headers = new http_1.HttpHeaders({
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json;charset=UTF-8'
        });
        var options = {
            headers: headers
        };
        return options;
    };
    return NetUtils;
}());
exports.NetUtils = NetUtils;
//# sourceMappingURL=net.utils.js.map