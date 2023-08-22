"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = __importDefault(require("./address"));
const customer_1 = __importDefault(require("./customer"));
describe("Customer unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            let customer = new customer_1.default("", "Wellington");
        }).toThrowError("Id is required");
    });
    it("should throw error when name is empty", () => {
        expect(() => {
            let customer = new customer_1.default("123", "");
        }).toThrowError("Name is required");
    });
    it("should change name", () => {
        // Arrange
        const customer = new customer_1.default("123", "Wellington");
        // Act
        customer.changeName("Alice");
        // Assert
        expect(customer.name).toBe("Alice");
    });
    it("should activate customer", () => {
        const customer = new customer_1.default("1", "Wellington");
        const address = new address_1.default("Rua 1", 58, "08451-789", "São Paulo");
        customer.setAddress(address);
        customer.activate();
        expect(customer.isActive()).toBe(true);
    });
    it("should deactivate customer", () => {
        const customer = new customer_1.default("1", "Wellington");
        customer.deActivate();
        expect(customer.isActive()).toBe(false);
    });
    it("should throw error when address is undefined when you activate a customer", () => {
        expect(() => {
            const customer = new customer_1.default("1", "Wellington");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
    });
});
