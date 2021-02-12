"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserDTO = /** @class */ (function () {
    function UserDTO(obj) {
        this.name = obj.name;
        this.class = obj.class;
        this.roll = obj.roll;
    }
    UserDTO.prototype.validate = function () {
        if (typeof (this.name) !== "string") {
            return new Error("Wrong type.");
        }
        return null;
    };
    UserDTO.prototype.validateRoll = function () {
        if (typeof (this.roll) !== "number") {
            return new Error("Wrong type.");
        }
        return null;
    };
    return UserDTO;
}());
exports.default = UserDTO;
