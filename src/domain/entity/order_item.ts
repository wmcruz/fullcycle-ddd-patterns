export default class OrderItem {
    private _id: string;
    private _name: string;
    private _price: number;
    private _productId: string;
    private _quantity: number;
    private _total: number;
    
    constructor(id: string, name: string, price: number, productId: string, quantity: number) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._productId = productId;
        this._quantity = quantity;
        this._total = this.total();
    }

    total(): number {
        return this._price * this._quantity;
    }

    changeName(name: string): void {
        this._name = name;
    }

    changePrice(price: number): void {
        this._price = price;
    }

    changeQuantity(quantity: number): void {
        this._quantity = quantity;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }

    get quantity(): number {
        return this._quantity;
    }

    get productId(): string {
        return this._productId;
    }
}