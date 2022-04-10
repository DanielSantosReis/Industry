import { Feedstock} from "./feedstock";
import { User } from "./user";




export class Product {
    
    public id: number;
    public name: string;
    public price: number;
    public photo: string;
    public feedstock: Feedstock;
    public user: User;
}