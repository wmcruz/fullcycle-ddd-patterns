"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(id, name) {
        this._name = "";
        this._active = true;
        this._id = id;
        this._name = name;
        this.validate();
    }
    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
    }
    get name() {
        return this._name;
    }
    changeName(name) {
        this._name = name;
        this.validate();
    }
    activate() {
        if (this._address === undefined) {
            throw new Error("Address is mandatory to activate a customer");
        }
        this._active = true;
    }
    deActivate() {
        this._active = false;
    }
    setAddress(address) {
        this._address = address;
    }
    isActive() {
        return this._active;
    }
}
exports.default = Customer;
