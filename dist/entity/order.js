"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(id, customerId, itens) {
        this._itens = []; // se for do mesmo contexto é referenciado pela entidade.
        this._id = id;
        this._customerId = customerId;
        this._itens = itens;
        this._total = this.total();
        this.validate();
    }
    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
        if (this._customerId.length === 0) {
            throw new Error("CustomerId is required");
        }
        if (this._itens.length === 0) {
            throw new Error("Itens are required");
        }
        if (this._itens.some(item => item.quantity <= 0)) {
            throw new Error("Quantity must be greater than zero");
        }
        return true;
    }
    total() {
        return this._itens.reduce((acc, item) => acc + item.orderItemTotal(), 0);
    }
}
exports.default = Order;
