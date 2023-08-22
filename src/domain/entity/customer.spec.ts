import Address from "./address";
import Customer from "./customer";
import {v4 as uuid} from "uuid";

describe("Customer unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            let customer = new Customer("", "Wellington");
        }).toThrowError("Id is required");
    });
    
    it("should throw error when name is empty", () => {
        expect(() => {
            let customer = new Customer("123", "");
        }).toThrowError("Name is required");
    });

    it("should change name", () => {
        // Arrange
        const customer = new Customer("123", "Wellington");
        
        // Act
        customer.changeName("Alice");

        // Assert
        expect(customer.name).toBe("Alice");
    });

    it("should activate customer", () => {
        const customer = new Customer("1", "Wellington");
        const address = new Address("Rua 1", 58, "08451-789", "São Paulo");        
        customer.setAddress(address);

        customer.activate();

        expect(customer.isActive()).toBe(true);
    });

    it("should deactivate customer", () => {
        const customer = new Customer("1", "Wellington");

        customer.deActivate();

        expect(customer.isActive()).toBe(false);
    });

    it("should throw error when address is undefined when you activate a customer", () => {
        expect(() => {
            const customer = new Customer("1", "Wellington");
    
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
    });

    it("should add reward points", () => {
        const customer = new Customer(uuid(), "Customer 1");
        expect(customer.rewardPoints).toBe(0);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(10);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(20);
    })
});