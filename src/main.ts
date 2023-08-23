import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";

let customer = new Customer("123", "Wellington");
const address = new Address("Rua Izaura", 328, "08451580", "Pirassununga");
customer.changeAddress(address);
customer.activate();

const item1 = new OrderItem("i1", "p1", "Item 1", 10, 1);
const item2 = new OrderItem("12", "p2", "Item 2", 15, 2);
const order = new Order("1", "123", [item1, item2]);