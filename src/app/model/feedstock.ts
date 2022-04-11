import { Product } from "./product";

export class Feedstock {
    public id: number;
    public name: string;
    public quantity: number;
    public feedstock: string;
    public photo: string;
    public product: Product[];
}