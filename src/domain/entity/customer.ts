import Address from "./address";

export default class Customer {
    private _id: string;
    private _name: string = "";
    private _address!: Address;
    private _active: boolean = true;
    private _rewardsPoints: number = 0;

    constructor(id: string, name: string) {
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

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    changeAddress(address: Address) {
        this._address = address;
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

    isActive(): boolean { 
        return this._active;
    }

    addRewardPoints(points: number) {
        this._rewardsPoints += points;
    }

    get id(): string {
        return this._id;
    }

    get name(): string{
        return this._name;
    }

    get address(): Address {
        return this._address;
    }

    get rewardPoints(): number {
        return this._rewardsPoints;
    }
}