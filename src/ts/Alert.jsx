"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Type_1 = require("./Type");
var Alert = /** @class */ (function () {
    function Alert(type, options) {
        var _this = this;
        this.template = function () {
            return "<div class=\"alert alert-" + _this.alertType + "\" role=\"alert\">\n                    " + (function (title) { return title ? "<strong>" + title + "</strong>" : null; })(_this.options.title) + "\n                    " + (function (message) { return message ? message : null; })(_this.options.message) + "\n                </div>";
        };
        this.checkType = function (type) { return Object.keys(Type_1.Type)
            .map(function (key) { return Type_1.Type[key]; })
            .filter(function (value) { return value === type; })
            .join(''); };
        if (!(this.alertType = this.checkType(type))) {
            throw "Type must be one of " + Object.keys(Type_1.Type)
                .map(function (key) { return Type_1.Type[key]; })
                .join(', ');
        }
        this.options = options;
    }
    Alert.prototype.render = function () {
        return document.querySelector(this.options.container)
            .insertAdjacentHTML(this.options.placement, this.template());
    };
    return Alert;
}());
exports.default = Alert;
var alert = new Alert("success", {
    title: "Alert title",
    message: "Alert message",
    container: "body",
    placement: "beforebegin",
});
console.log(alert.template());
