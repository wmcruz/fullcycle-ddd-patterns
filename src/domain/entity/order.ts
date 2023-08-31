import OrderItem from "./order_item";

export default class Order {
    private _id: string;
    private _customerId: string; // se for de outro contexto é referenciado pelo ID
    private _items: OrderItem[] = []; // se for do mesmo contexto é referenciado pela entidade.
    private _total: number;

    constructor(id: string, customerId: string, items: OrderItem[]) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
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

        if (this._items.length === 0) {
            throw new Error("Itens are required");
        }

        if (this._items.some(item => item.quantity <= 0)) {
            throw new Error("Quantity must be greater than zero")
        }

        return true;
    }

    total(): number {
        return this._items.reduce((acc, item) => acc + item.total(), 0);
    }

    changeItems(items: OrderItem[]): void {
        this._items = items;
    }

    get id(): string {
        return this._id;
    }

    get customerId(): string {
        return this._customerId;
    }

    get items(): OrderItem[] {
        return this._items;
    }
}