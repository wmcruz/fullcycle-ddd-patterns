"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = __importDefault(require("./order"));
const order_item_1 = __importDefault(require("./order_item"));
describe("Order unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            let order = new order_1.default("", "123", []);
        }).toThrowError("Id is required");
    });
    it("should throw error when customerId is empty", () => {
        expect(() => {
            let order = new order_1.default("1", "", []);
        }).toThrowError("CustomerId is required");
    });
    it("should throw error when itens is empty", () => {
        expect(() => {
            let order = new order_1.default("1", "123", []);
        }).toThrowError("Itens are required");
    });
    it("should calculate total", () => {
        const item = new order_item_1.default("i1", "p1", "Item 1", 100, 1);
        const order = new order_1.default("o1", "c1", [item]);
        let total = order.total();
        expect(total).toBe(100);
        const item2 = new order_item_1.default("i2", "p2", "Item 2", 200, 1);
        const order2 = new order_1.default("o2", "c1", [item, item2]);
        total = order2.total();
        expect(total).toBe(300);
    });
    it("should throw error if the qtd is less or equal zero", () => {
        expect(() => {
            const item = new order_item_1.default("i1", "p1", "Item 1", 100, 0);
            const order = new order_1.default("o1", "c1", [item]);
            let total = order.total();
        }).toThrowError("Quantity must be greater than zero");
    });
});
