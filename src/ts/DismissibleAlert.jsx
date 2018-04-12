"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Alert_1 = require("./Alert");
var DismissibleAlert = /** @class */ (function (_super) {
    __extends(DismissibleAlert, _super);
    /**
     *
     * @param {string} type
     * @param {AlertOptions} options
     */
    function DismissibleAlert(type, options) {
        var _this = _super.call(this, type, options) || this;
        _this.template = function () {
            return "<div class=\"alert alert-" + _this.alertType + " alert-dismissible\" role=\"alert\">\n                    " + (function (title) { return title ? "<strong>" + title + "</strong>" : null; })(_this.options.title) + "\n                    " + (function (message) { return message ? message : null; })(_this.options.message) + "\n                </div>";
        };
        return _this;
    }
    return DismissibleAlert;
}(Alert_1.default));
exports.default = DismissibleAlert;
var alert = new DismissibleAlert("success", {
    title: "Dismissible alert title",
    message: "Dismissible alert message",
    container: "body",
    placement: "afterend"
});
console.log(alert.template());
