import OrderItem from "./order_item";

export default class Order {
    private _id: string;
    private _customerId: string; // se for de outro contexto é referenciado pelo ID
    private _itens: OrderItem[] = []; // se for do mesmo contexto é referenciado pela entidade.
    private _total: number;

    constructor(id: string, customerId: string, itens: OrderItem[]) {
        this._id = id;
        this._customerId = customerId;
        this._itens = itens;
        this._total = this.total();
        this.validate();
    }

    validate(): boolean {
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
            throw new Error("Quantity must be greater than zero")
        }

        return true;
    }

    total(): number {
        return this._itens.reduce((acc, item) => acc + item.orderItemTotal(), 0);
    }
}