import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
    it("should throw error when id is empty", () => {
       expect(() => {
        let order  = new Order("", "123", []);
       }).toThrowError("Id is required");
    });

    it("should throw error when customerId is empty", () => {
        expect(() => {
         let order  = new Order("1", "", []);
        }).toThrowError("CustomerId is required");
     });

     it("should throw error when itens is empty", () => {
        expect(() => {
         let order  = new Order("1", "123", []);
        }).toThrowError("Itens are required");
     });

     it("should calculate total", () => {
        const item = new OrderItem("i1", "p1", "Item 1", 100, 1);
        const order = new Order("o1", "c1", [item]);
        let total = order.total();
        
        expect(total).toBe(100);
        
        const item2 = new OrderItem("i2", "p2", "Item 2", 200, 1);
        const order2 = new Order("o2", "c1", [item, item2]);
        total = order2.total();
        
        expect(total).toBe(300);
     });

   it("should throw error if the qtd is less or equal zero", () => {
      expect(() => {
         const item = new OrderItem("i1", "p1", "Item 1", 100, 0);
         const order = new Order("o1", "c1", [item]);
         let total = order.total();
      }).toThrowError("Quantity must be greater than zero");
   });
});